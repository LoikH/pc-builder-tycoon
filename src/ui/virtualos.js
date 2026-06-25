/* ==========================================
   PC ARCHITECT TYCOON - VIRTUAL OS SIMULATOR
   ========================================== */

import { state, saveGame, updateActiveJobsRequirements } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";
import { calculatePcBenchmark } from "../jobs.js";
import { renderWorkbenchTab } from "./workbench.js";
import { t } from "../translations.js";

let activePc = null;
let appWindows = {};
let activeIntervals = [];

// Overclock states (temporary values per session)
let cpuOverclockMult = 1.0;
let gpuOverclockMult = 1.0;
let coreVoltage = 1.20; // Volts

export function bootVirtualOs(pc) {
    activePc = pc;
    const monitor = document.getElementById("workbench-monitor-overlay");
    monitor.style.display = "block";
    monitor.innerHTML = "";

    // Reset session overclocks
    cpuOverclockMult = 1.0;
    gpuOverclockMult = 1.0;
    coreVoltage = 1.20;

    // Start boot animation sequence
    runBootSequence(monitor);
}

export function closeVirtualOs() {
    activeIntervals.forEach(clearInterval);
    activeIntervals = [];
    appWindows = {};
    const monitor = document.getElementById("workbench-monitor-overlay");
    if (monitor) {
        monitor.style.display = "none";
        monitor.innerHTML = "";
    }
}

function runBootSequence(container) {
    const bootDiv = document.createElement("div");
    bootDiv.className = "os-boot";
    container.appendChild(bootDiv);

    // Phase 1: BIOS Post screen
    const cpu = getComponentById(activePc.cpu.partId);
    const mb = getComponentById(activePc.motherboard.partId);
    const ram = getComponentById(activePc.ram.partId);
    const gpu = getComponentById(activePc.gpu.partId);
    const storage = getComponentById(activePc.storage.partId);

    bootDiv.innerHTML = `
        <div class="os-bios-text">
            ${t("os.boot.post")}
            ${t("os.boot.cpu")} ${cpu.name} @ ${cpu.specs.speed}
            ${t("os.boot.ram")} ${ram.specs.capacity} @ ${ram.specs.speed} (${ram.specs.ramType})
            ${t("os.boot.gpu")} ${gpu.name}
            ${t("os.boot.storage")} ${storage.name} (${storage.specs.storageType})
            
            ${t("os.boot.psu")}
            ${t("os.boot.memory")}
            ${t("os.boot.searching")}
        </div>
    `;

    setTimeout(() => {
        // Phase 2: OS Check
        bootDiv.innerHTML = "";
        
        if (!activePc.hasOs) {
            // Boot screen says No OS
            bootDiv.innerHTML = `
                <div style="text-align:center; font-family:var(--font-mono); padding:2rem">
                    <span style="font-size:3rem">⚠️</span>
                    <p style="margin-top:15px; font-weight:700">${t("os.boot.no_os")}</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">${t("os.boot.no_os_sub")}</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        ${t("os.boot.btn_os_install")}
                    </button>
                </div>
            `;
            
            document.getElementById("btn-os-install").addEventListener("click", () => {
                runOsInstaller(bootDiv);
            });
        } else {
            // Boot directly to OS desktop
            loadDesktop(container);
        }
    }, 1500);
}

function runOsInstaller(bootDiv) {
    bootDiv.innerHTML = `
        <div style="width:300px; text-align:center">
            <h3 style="margin-bottom:15px">${t("os.install.title")}</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">${t("os.install.step0")}</p>
        </div>
    `;

    let progress = 0;
    const progressFill = document.getElementById("install-progress");
    const progressText = document.getElementById("install-text");

    const steps = [
        t("os.install.step1"),
        t("os.install.step2"),
        t("os.install.step3"),
        t("os.install.step4"),
        t("os.install.step5"),
        t("os.install.step6")
    ];

    const interval = setInterval(() => {
        const increment = state.hasFastUsb ? 20 : 10;
        progress += increment;
        if (progressFill) progressFill.style.width = `${Math.min(progress, 100)}%`;
        if (progressText) progressText.textContent = steps[Math.floor(progress / 17)] || "Almost finished...";

        if (progress >= 100) {
            clearInterval(interval);
            activePc.hasOs = true;
            saveGame();
            
            const cleanMsg = state.language === "en" ? "VirtualOS installed successfully!" : "VirtualOS installé avec succès !";
            showToast(cleanMsg, "success");
            
            // Reload screen
            const monitor = document.getElementById("workbench-monitor-overlay");
            monitor.innerHTML = "";
            loadDesktop(monitor);
            
            updateActiveJobsRequirements();
            renderWorkbenchTab();
        }
    }, 400);

    activeIntervals.push(interval);
}

function loadDesktop(container) {
    container.innerHTML = "";

    const desktop = document.createElement("div");
    desktop.className = "os-desktop";

    desktop.innerHTML = `
        <div class="os-icon" id="icon-sysinfo">
            <span class="os-icon-img">ℹ️</span>
            <span class="os-icon-label">${t("os.desktop.sysinfo")}</span>
        </div>
        <div class="os-icon" id="icon-scanner">
            <span class="os-icon-img">🛡️</span>
            <span class="os-icon-label">${t("os.desktop.scanner")}</span>
        </div>
        <div class="os-icon" id="icon-benchmark">
            <span class="os-icon-img">🏎️</span>
            <span class="os-icon-label">${t("os.desktop.benchmark")}</span>
        </div>
        <div class="os-icon" id="icon-overclock">
            <span class="os-icon-img">⚙️</span>
            <span class="os-icon-label">${t("os.desktop.overclock")}</span>
        </div>

        <button class="btn-secondary" id="btn-os-shutdown" style="position:absolute; bottom:15px; right:15px; font-size:0.75rem; background:rgba(0,0,0,0.6)">
            ${t("os.desktop.shutdown")}
        </button>
    `;

    container.appendChild(desktop);

    // Bind icons
    document.getElementById("icon-sysinfo").addEventListener("click", openSysInfoApp);
    document.getElementById("icon-scanner").addEventListener("click", openVirusScannerApp);
    document.getElementById("icon-benchmark").addEventListener("click", openBenchmarkApp);
    document.getElementById("icon-overclock").addEventListener("click", openOverclockApp);
    document.getElementById("btn-os-shutdown").addEventListener("click", () => {
        window.isPcRunning = false;
        closeVirtualOs();
        renderWorkbenchTab();
    });
}

// WINDOW CREATION UTILITY
function createProgramWindow(title, width = 450, height = 350) {
    // If window already open, bring to front
    if (appWindows[title]) {
        appWindows[title].style.zIndex = 700;
        return appWindows[title];
    }

    const win = document.createElement("div");
    win.className = "os-window";
    win.style.width = `${width}px`;
    win.style.height = `${height}px`;
    win.style.top = `${50 + Object.keys(appWindows).length * 20}px`;
    win.style.left = `${50 + Object.keys(appWindows).length * 20}px`;
    win.style.zIndex = 650;

    win.innerHTML = `
        <div class="os-window-header">
            <span class="os-window-title">${title}</span>
            <button class="os-window-close">×</button>
        </div>
        <div class="os-window-body"></div>
    `;

    document.querySelector(".os-desktop").appendChild(win);
    appWindows[title] = win;

    // Close handler
    win.querySelector(".os-window-close").addEventListener("click", () => {
        win.remove();
        delete appWindows[title];
    });

    // Make Window Draggable
    makeElementDraggable(win);

    return win;
}

function makeElementDraggable(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = elmnt.querySelector(".os-window-header");
    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// 1. APP: SYSTEM INFO
function openSysInfoApp() {
    const win = createProgramWindow(t("os.sysinfo.title"), 400, 320);
    const body = win.querySelector(".os-window-body");

    const cpu = getComponentById(activePc.cpu.partId);
    const gpu = getComponentById(activePc.gpu.partId);
    const storage = getComponentById(activePc.storage.partId);

    // Calculate sum capacity of all active RAM slots
    let ramCapacityText = state.language === "en" ? "Missing" : "Manquante";
    if (activePc.rams && activePc.rams.some(r => r)) {
        const activeRams = activePc.rams.filter(r => r);
        let totalCap = 0;
        let type = "";
        const processedKits = new Set();
        activeRams.forEach(r => {
            if (r.kitId) {
                if (processedKits.has(r.kitId)) return;
                processedKits.add(r.kitId);
            }
            const comp = getComponentById(r.partId);
            if (comp) {
                totalCap += parseInt(comp.specs.capacity.replace("GB", "").replace("Go", "").trim());
                type = comp.specs.ramType;
            }
        });
        ramCapacityText = `${totalCap} Go ${type}`;
    } else if (activePc.ram) {
        const rComp = getComponentById(activePc.ram.partId);
        if (rComp) {
            ramCapacityText = `${rComp.specs.capacity} ${rComp.specs.ramType}`;
        }
    }

    // Compute live CPU temperature based on overclock voltage and thermal paste
    let baseTemp = 42;
    if (activePc.thermalPasteApplied) {
        if (activePc.thermalPasteType === "liquid_metal") baseTemp = 34; // Liquid Metal is -8°C cooler
    } else {
        baseTemp = 95; // Thermal paste missing heats immediately
    }

    // Add overclock heat penalty
    const voltagePenalty = (coreVoltage - 1.20) * 120; // voltage generates massive heat
    let currentTemp = Math.round(baseTemp + voltagePenalty);

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">${t("os.sysinfo.subtitle")}</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${cpu.name} (${cpu.specs.cores})</p>
                <p><strong>${t("os.sysinfo.activeFreq")}</strong> ${(parseFloat(cpu.specs.speed) * cpuOverclockMult).toFixed(2)} GHz</p>
                <p><strong>${t("os.sysinfo.temp")}</strong> <span id="sysinfo-temp" style="font-weight:700">${currentTemp}°C</span></p>
                <p><strong>GPU :</strong> ${gpu.name} (${gpu.specs.vram})</p>
                <p><strong>${t("os.sysinfo.activeGpu")}</strong> ${(parseFloat(gpu.specs.speed) * gpuOverclockMult).toFixed(0)} MHz</p>
                <p><strong>${state.language === "en" ? "RAM Memory:" : "Mémoire Vive :"}</strong> ${ramCapacityText}</p>
                <p><strong>${state.language === "en" ? "Primary Storage:" : "Stockage Principal :"}</strong> ${storage.name} (${storage.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                ${t("os.sysinfo.osVersion")}
            </div>
        </div>
    `;

    // Dynamic temperature styling
    const tempSpan = document.getElementById("sysinfo-temp");
    if (tempSpan) {
        if (currentTemp >= 90) {
            tempSpan.style.color = "var(--color-crimson)";
        } else if (currentTemp >= 75) {
            tempSpan.style.color = "var(--color-amber)";
        } else {
            tempSpan.style.color = "var(--color-emerald)";
        }
    }
}

// 2. APP: VIRUS SCANNER
function openVirusScannerApp() {
    const win = createProgramWindow(t("os.scanner.title"), 400, 300);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">${t("os.scanner.sub")}</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">${t("os.scanner.ready")}</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                ${t("os.scanner.btnScan")}
            </button>
        </div>
    `;

    document.getElementById("btn-start-scan").addEventListener("click", () => {
        runScanner(body);
    });
}

function runScanner(body) {
    body.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px">
            <div style="font-weight:600" id="scan-step-title">${t("os.scanner.scanning")}</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Scanning System32...</div>
        </div>
    `;

    const progressFill = document.getElementById("scan-progress");
    const fileText = document.getElementById("scan-file-text");

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progressFill) progressFill.style.width = `${progress}%`;
        
        if (progress === 30) {
            fileText.textContent = t("os.scanner.step1");
        } else if (progress === 60) {
            fileText.textContent = t("os.scanner.step2");
        } else if (progress === 80) {
            fileText.textContent = t("os.scanner.step3");
        }

        if (progress >= 100) {
            clearInterval(interval);
            
            if (!activePc.isClean) {
                // Found viruses
                body.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">${t("os.scanner.alert")}</div>
                        <p style="font-size:0.75rem; color:#aaa">${t("os.scanner.alertSub")}</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            ${t("os.scanner.btnClean")}
                        </button>
                    </div>
                `;
                document.getElementById("btn-clean-viruses").addEventListener("click", () => {
                    activePc.isClean = true;
                    saveGame();
                    
                    const cleanedMsg = state.language === "en" ? "System cleaned successfully!" : "Système nettoyé avec succès !";
                    showToast(cleanedMsg, "success");
                    
                    updateActiveJobsRequirements();
                    renderWorkbenchTab();
                    openVirusScannerApp(); // refresh app
                });
            } else {
                // System clean
                body.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">${t("os.scanner.cleanSuccess")}</div>
                        <p style="font-size:0.75rem; color:#888">${t("os.scanner.cleanSuccessSub")}</p>
                        <button class="btn-secondary" id="btn-close-securiguard" style="margin-top:10px; font-size:0.75rem">${t("os.scanner.btnClose")}</button>
                    </div>
                `;
                
                document.getElementById("btn-close-securiguard").addEventListener("click", () => {
                    const win = appWindows[t("os.scanner.title")];
                    if (win) {
                        win.remove();
                        delete appWindows[t("os.scanner.title")];
                    }
                });
            }
        }
    }, 300);

    activeIntervals.push(interval);
}

// 3. APP: BENCHMARK
function openBenchmarkApp() {
    const win = createProgramWindow(t("os.bench.title"), 450, 360);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div class="bench-runner" id="bench-app-container">
            <span style="font-size:2.5rem">🏎️</span>
            <div style="font-weight:600">${t("os.bench.sub")}</div>
            <p style="font-size:0.8rem; text-align:center; color:#888; max-width:300px">
                ${t("os.bench.text")}
            </p>
            <button class="btn-primary" id="btn-run-benchmark" style="font-size:0.85rem">
                ${t("os.bench.btnRun")}
            </button>
        </div>
    `;

    document.getElementById("btn-run-benchmark").addEventListener("click", () => {
        startBenchmarkSimulation(body);
    });
}

function startBenchmarkSimulation(body) {
    body.innerHTML = `
        <div class="bench-runner" style="width:100%; height:100%">
            <div class="bench-gauge-container">
                <canvas class="bench-canvas-simulation" id="bench-canvas"></canvas>
                <div class="bench-progress-card">
                    <div style="font-size:0.75rem; color:#aaa; margin-bottom:5px">${t("os.bench.rendering")}</div>
                    <div class="bench-score-large" id="bench-live-score">0</div>
                    <div class="bench-temp-indicator">CPU Temp : <span id="bench-live-temp">42</span>°C</div>
                </div>
            </div>
            <div class="xp-bar-container" style="width:100%; height:6px">
                <div class="xp-bar-fill" id="bench-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="bench-phase-label">Loading volumetric shaders...</p>
        </div>
    `;

    // Visual canvas setup (retro moving stars/lines)
    const canvas = document.getElementById("bench-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 180;

    let points = [];
    for(let i=0; i<30; i++) {
        points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 3 + 1,
            size: Math.random() * 3
        });
    }

    // Animation Loop
    let animId = null;
    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.15)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "rgba(0, 240, 255, 0.6)";
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
            ctx.fill();
            
            p.x += p.speed;
            if(p.x > canvas.width) p.x = 0;
        });
        
        animId = requestAnimationFrame(draw);
    }
    draw();

    // Stats variables
    let progress = 0;
    let liveScore = 0;
    let liveTemp = 42;

    const baseTemp = activePc.thermalPasteApplied ? (activePc.thermalPasteType === "liquid_metal" ? 37 : 45) : 95;
    const maxSafeTemp = 95;
    const voltageHeatFactor = (coreVoltage - 1.20) * 110;

    const benchmarkFinal = calculatePcBenchmark(
        activePc.cpu.partId,
        activePc.gpu.partId,
        activePc.ram.partId,
        cpuOverclockMult,
        gpuOverclockMult,
        activePc.rams
    );

    const progressFill = document.getElementById("bench-progress");
    const liveScoreText = document.getElementById("bench-live-score");
    const liveTempText = document.getElementById("bench-live-temp");
    const phaseLabel = document.getElementById("bench-phase-label");

    const interval = setInterval(() => {
        progress += 4;
        
        // 1. Calculate Score increments
        liveScore = Math.round((progress / 100) * benchmarkFinal);
        if (liveScoreText) liveScoreText.textContent = liveScore;
        if (progressFill) progressFill.style.width = `${progress}%`;

        // 2. Heat progression under load
        // Slower temp rise. If no paste, it shoots up immediately
        const targetTemp = Math.round(baseTemp + (progress * 0.3) + voltageHeatFactor);
        liveTemp = Math.min(targetTemp, 140);
        if (liveTempText) {
            liveTempText.textContent = liveTemp;
            if (liveTemp >= 90) {
                liveTempText.style.color = "var(--color-crimson)";
                // Blinking safety warning if thermal probe is installed
                if (state.hasThermalProbe) {
                    phaseLabel.innerHTML = `<span class="text-crimson font-mono" style="animation: blink 1s infinite">${t("os.bench.overheatWarning", { temp: liveTemp })}</span>`;
                }
            } else if (liveTemp >= 72) {
                liveTempText.style.color = "var(--color-amber)";
            }
        }

        // Phase texts
        if (progress === 20) {
            phaseLabel.textContent = t("os.bench.step1");
        } else if (progress === 50) {
            phaseLabel.textContent = t("os.bench.step2");
        } else if (progress === 80) {
            phaseLabel.textContent = t("os.bench.step3");
        }

        // 3. BSOD / Thermal Limit Check
        if (liveTemp >= 98) {
            // CRASH!
            clearInterval(interval);
            cancelAnimationFrame(animId);
            
            const thermalMsg = state.language === "en" ? "Processor exceeded critical safe thermal threshold of 98°C." : "Le processeur a dépassé le seuil de sécurité thermique de 98°C.";
            triggerBsod("WHEA_UNCORRECTABLE_ERROR", thermalMsg);
            return;
        }

        // 4. Overclock Stability check (硅-silicon lottery logic)
        // If multiplier high but voltage low, crash
        const requiredVoltage = 1.20 + (cpuOverclockMult - 1.0) * 0.5;
        if (cpuOverclockMult > 1.15 && coreVoltage < requiredVoltage) {
            // Stability failure crash!
            clearInterval(interval);
            cancelAnimationFrame(animId);
            
            const ocErrorMsg = state.language === "en" ? "Unstable Overclock: Insufficient VCore voltage for requested CPU Frequency." : "Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.";
            triggerBsod("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED", ocErrorMsg);
            return;
        }

        // End Check
        if (progress >= 100) {
            clearInterval(interval);
            cancelAnimationFrame(animId);
            
            // Log score back to PC object
            activePc.score = benchmarkFinal;
            saveGame();

            body.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
                    <span class="text-emerald" style="font-size:3rem">🏆</span>
                    <div>
                        <div class="stat-label">${t("os.bench.report")}</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${benchmarkFinal} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        ${t("os.bench.stable", { temp: liveTemp })}<br>
                        ${t("os.bench.vcore")} ${coreVoltage.toFixed(2)}V
                    </div>
                    <button class="btn-primary" id="btn-close-bench" style="font-size:0.8rem">${t("os.bench.btnAccept")}</button>
                </div>
            `;

            document.getElementById("btn-close-bench").addEventListener("click", () => {
                const win = appWindows[t("os.bench.title")];
                if (win) {
                    win.remove();
                    delete appWindows[t("os.bench.title")];
                }
                updateActiveJobsRequirements();
                renderWorkbenchTab();
            });
        }
    }, 250);

    activeIntervals.push(interval);
}

// 4. APP: OVERCLOCKING
function openOverclockApp() {
    const win = createProgramWindow(t("os.oc.title"), 400, 340);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">${t("os.oc.sub")}</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>${t("os.oc.cpuMult")}</span>
                    <span id="oc-cpu-mult-val">${cpuOverclockMult.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${cpuOverclockMult}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>${t("os.oc.vcore")}</span>
                    <span id="oc-voltage-val">${coreVoltage.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${coreVoltage}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>${t("os.oc.gpuFreq")}</span>
                    <span id="oc-gpu-mult-val">${gpuOverclockMult.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${gpuOverclockMult}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ${t("os.oc.warning")}
            </div>
        </div>
    `;

    // Sliders bindings
    const cpuSlider = document.getElementById("oc-cpu-mult-range");
    const cpuLabel = document.getElementById("oc-cpu-mult-val");
    cpuSlider.addEventListener("input", (e) => {
        cpuOverclockMult = parseFloat(e.target.value);
        cpuLabel.textContent = `${cpuOverclockMult.toFixed(2)}x`;
    });

    const voltSlider = document.getElementById("oc-voltage-range");
    const voltLabel = document.getElementById("oc-voltage-val");
    voltSlider.addEventListener("input", (e) => {
        coreVoltage = parseFloat(e.target.value);
        voltLabel.textContent = `${coreVoltage.toFixed(2)} V`;
    });

    const gpuSlider = document.getElementById("oc-gpu-mult-range");
    const gpuLabel = document.getElementById("oc-gpu-mult-val");
    gpuSlider.addEventListener("input", (e) => {
        gpuOverclockMult = parseFloat(e.target.value);
        gpuLabel.textContent = `${gpuOverclockMult.toFixed(2)}x`;
    });
}

// BLUE SCREEN OF DEATH (BSOD) TRIGGER
function triggerBsod(errorCode, desc) {
    activeIntervals.forEach(clearInterval);
    activeIntervals = [];
    appWindows = {};

    window.isPcRunning = false;
    
    const monitor = document.getElementById("workbench-monitor-overlay");
    monitor.innerHTML = `
        <div class="os-bsod">
            <div class="os-bsod-sad">:(</div>
            <div class="os-bsod-title">${t("os.bsod.title")}</div>
            
            <div class="os-bsod-details">
                ${t("os.bsod.text")} <strong style="color:#ffef56">${errorCode}</strong><br>
                Technical report: ${desc}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">${t("os.bsod.sub")}</span>
            </div>
        </div>
    `;

    // Click anywhere on BSOD to exit
    monitor.querySelector(".os-bsod").addEventListener("click", () => {
        closeVirtualOs();
        renderWorkbenchTab();
    });
}
