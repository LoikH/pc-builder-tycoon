/* ==========================================
   PC ARCHITECT TYCOON - VIRTUAL OS SIMULATOR
   ========================================== */

import { state, saveGame, updateActiveJobsRequirements } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";
import { calculatePcBenchmark } from "../jobs.js";
import { renderWorkbenchTab } from "./workbench.js";

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
            AMERICAN MEGATRENDS BIOS v4.0621
            Processeurs détectés : ${cpu.name} @ ${cpu.specs.speed}
            Mémoire RAM active : ${ram.specs.capacity} @ ${ram.specs.speed} (${ram.specs.ramType})
            Contrôleur Graphique : ${gpu.name}
            Disque de démarrage : ${storage.name} (${storage.specs.storageType})
            
            Vérification de l'alimentation... OK
            Test de la mémoire... Succès
            Recherche du système d'exploitation...
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
                    <p style="margin-top:15px; font-weight:700">Aucun système d'exploitation trouvé.</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">Insérez la clé USB d'installation pour démarrer le programme d'installation.</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        Insérer clé USB (Installer VirtualOS)
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
            <h3 style="margin-bottom:15px">Installation de VirtualOS v4.1</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">Formatage du disque de stockage...</p>
        </div>
    `;

    let progress = 0;
    const progressFill = document.getElementById("install-progress");
    const progressText = document.getElementById("install-text");

    const steps = [
        "Création des partitions NTFS...",
        "Copie des fichiers d'installation (12%)...",
        "Copie des fichiers d'installation (45%)...",
        "Copie des fichiers d'installation (78%)...",
        "Configuration des pilotes de périphériques...",
        "Finalisation des paramètres du bureau..."
    ];

    const interval = setInterval(() => {
        progress += 10;
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) progressText.textContent = steps[Math.floor(progress / 17)] || "Presque fini...";

        if (progress >= 100) {
            clearInterval(interval);
            activePc.hasOs = true;
            saveGame();
            showToast("VirtualOS installé avec succès !", "success");
            
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
            <span class="os-icon-label">Infos Système</span>
        </div>
        <div class="os-icon" id="icon-scanner">
            <span class="os-icon-img">🛡️</span>
            <span class="os-icon-label">Virus Scanner</span>
        </div>
        <div class="os-icon" id="icon-benchmark">
            <span class="os-icon-img">🏎️</span>
            <span class="os-icon-label">3D Benchmark</span>
        </div>
        <div class="os-icon" id="icon-overclock">
            <span class="os-icon-img">⚙️</span>
            <span class="os-icon-label">Overclocking</span>
        </div>

        <button class="btn-secondary" id="btn-os-shutdown" style="position:absolute; bottom:15px; right:15px; font-size:0.75rem; background:rgba(0,0,0,0.6)">
            Quitter l'OS ✕
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
    const win = createProgramWindow("Informations Système", 400, 320);
    const body = win.querySelector(".os-window-body");

    const cpu = getComponentById(activePc.cpu.partId);
    const gpu = getComponentById(activePc.gpu.partId);
    const ram = getComponentById(activePc.ram.partId);
    const storage = getComponentById(activePc.storage.partId);

    // Compute live CPU temperature based on overclock voltage and thermal paste
    let baseTemp = 42;
    if (!activePc.thermalPasteApplied) baseTemp = 95; // Thermal paste missing heats immediately
    
    // Add overclock heat penalty
    const voltagePenalty = (coreVoltage - 1.20) * 120; // voltage generates massive heat
    let currentTemp = Math.round(baseTemp + voltagePenalty);

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">Fiche Technique Matérielle</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${cpu.name} (${cpu.specs.cores})</p>
                <p><strong>Fréquence active :</strong> ${(parseFloat(cpu.specs.speed) * cpuOverclockMult).toFixed(2)} GHz</p>
                <p><strong>Température CPU :</strong> <span id="sysinfo-temp" style="font-weight:700">${currentTemp}°C</span></p>
                <p><strong>GPU :</strong> ${gpu.name} (${gpu.specs.vram})</p>
                <p><strong>Fréquence GPU :</strong> ${(parseFloat(gpu.specs.speed) * gpuOverclockMult).toFixed(0)} MHz</p>
                <p><strong>Mémoire Vive :</strong> ${ram.specs.capacity} (${ram.specs.ramType})</p>
                <p><strong>Stockage Principal :</strong> ${storage.name} (${storage.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                OS installé : VirtualOS Desktop Edition v4.1 build 2026.
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
    const win = createProgramWindow("SecuriGuard Virus Scanner", 400, 300);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">Scanner de Sécurité Intégré</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">Protection résidente active. Prêt pour l'analyse.</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                Lancer une Analyse Complète
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
            <div style="font-weight:600" id="scan-step-title">Analyse en cours...</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Analyse de System32...</div>
        </div>
    `;

    const progressFill = document.getElementById("scan-progress");
    const stepTitle = document.getElementById("scan-step-title");
    const fileText = document.getElementById("scan-file-text");

    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        if (progressFill) progressFill.style.width = `${progress}%`;
        
        if (progress === 30) {
            fileText.textContent = "Recherche de logiciels espions...";
        } else if (progress === 60) {
            fileText.textContent = "Analyse des clés de registre infectées...";
        } else if (progress === 80) {
            fileText.textContent = "Examen de la mémoire vive active...";
        }

        if (progress >= 100) {
            clearInterval(interval);
            
            if (!activePc.isClean) {
                // Found viruses
                body.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">2 Menaces Détectées !</div>
                        <p style="font-size:0.75rem; color:#aaa">Trojan.Miner.Bitcoin & Adware.PopUpMagic infectent vos registres.</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            Nettoyer et Désinfecter
                        </button>
                    </div>
                `;
                document.getElementById("btn-clean-viruses").addEventListener("click", () => {
                    activePc.isClean = true;
                    saveGame();
                    showToast("Système nettoyé avec succès !", "success");
                    updateActiveJobsRequirements();
                    renderWorkbenchTab();
                    openVirusScannerApp(); // refresh app
                });
            } else {
                // System clean
                body.innerHTML = `
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">Système Sain !</div>
                        <p style="font-size:0.75rem; color:#888">Aucun virus, cheval de troie ou logiciel publicitaire détecté.</p>
                        <button class="btn-secondary" onclick="window.closeSecuriGuard()" style="margin-top:10px; font-size:0.75rem">Fermer</button>
                    </div>
                `;
                window.closeSecuriGuard = () => {
                    const win = appWindows["SecuriGuard Virus Scanner"];
                    if (win) {
                        win.remove();
                        delete appWindows["SecuriGuard Virus Scanner"];
                    }
                };
            }
        }
    }, 300);

    activeIntervals.push(interval);
}

// 3. APP: BENCHMARK
function openBenchmarkApp() {
    const win = createProgramWindow("3D Benchmark Tool v3.0", 450, 360);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div class="bench-runner" id="bench-app-container">
            <span style="font-size:2.5rem">🏎️</span>
            <div style="font-weight:600">Simulateur de Rendu Graphique 3D</div>
            <p style="font-size:0.8rem; text-align:center; color:#888; max-width:300px">
                Ce test va solliciter le processeur et la carte graphique à 100% de leur charge thermique pour mesurer les performances.
            </p>
            <button class="btn-primary" id="btn-run-benchmark" style="font-size:0.85rem">
                Lancer le Test Graphique
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
                    <div style="font-size:0.75rem; color:#aaa; margin-bottom:5px">Rendu Graphique en cours...</div>
                    <div class="bench-score-large" id="bench-live-score">0</div>
                    <div class="bench-temp-indicator">CPU Temp : <span id="bench-live-temp">42</span>°C</div>
                </div>
            </div>
            <div class="xp-bar-container" style="width:100%; height:6px">
                <div class="xp-bar-fill" id="bench-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="bench-phase-label">Chargement des géométries polygonales...</p>
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

    const baseTemp = activePc.thermalPasteApplied ? 45 : 95;
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
            } else if (liveTemp >= 72) {
                liveTempText.style.color = "var(--color-amber)";
            }
        }

        // Phase texts
        if (progress === 20) {
            phaseLabel.textContent = "Test CPU : Simulation physique complexe...";
        } else if (progress === 50) {
            phaseLabel.textContent = "Test GPU : Shaders d'illumination globale...";
        } else if (progress === 80) {
            phaseLabel.textContent = "Test final combiné : Calcul des FPS...";
        }

        // 3. BSOD / Thermal Limit Check
        if (liveTemp >= 98) {
            // CRASH!
            clearInterval(interval);
            cancelAnimationFrame(animId);
            triggerBsod("WHEA_UNCORRECTABLE_ERROR", "Le processeur a dépassé le seuil de sécurité thermique de 98°C.");
            return;
        }

        // 4. Overclock Stability check (硅-silicon lottery logic)
        // If multiplier high but voltage low, crash
        const requiredVoltage = 1.20 + (cpuOverclockMult - 1.0) * 0.5;
        if (cpuOverclockMult > 1.15 && coreVoltage < requiredVoltage) {
            // Stability failure crash!
            clearInterval(interval);
            cancelAnimationFrame(animId);
            triggerBsod("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED", "Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.");
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
                        <div class="stat-label">Rapport de performances</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${benchmarkFinal} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        CPU stable à max ${liveTemp}°C.<br>
                        Tension VCore : ${coreVoltage.toFixed(2)}V
                    </div>
                    <button class="btn-primary" onclick="window.closeBench()" style="font-size:0.8rem">Accepter</button>
                </div>
            `;

            window.closeBench = () => {
                const win = appWindows["3D Benchmark Tool v3.0"];
                if (win) {
                    win.remove();
                    delete appWindows["3D Benchmark Tool v3.0"];
                }
                updateActiveJobsRequirements();
                renderWorkbenchTab();
            };
        }
    }, 250);

    activeIntervals.push(interval);
}

// 4. APP: OVERCLOCKING
function openOverclockApp() {
    const win = createProgramWindow("Overclock-O-Matic Pro", 400, 340);
    const body = win.querySelector(".os-window-body");

    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">Optimisation Fréquences</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>Coefficient Fréquence CPU</span>
                    <span id="oc-cpu-mult-val">${cpuOverclockMult.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${cpuOverclockMult}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>Tension VCore (Alimentation CPU)</span>
                    <span id="oc-voltage-val">${coreVoltage.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${coreVoltage}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>Fréquence GPU Clock</span>
                    <span id="oc-gpu-mult-val">${gpuOverclockMult.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${gpuOverclockMult}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ⚠️ <strong>Attention :</strong> L'augmentation de la tension augmente exponentiellement la chaleur dégagée. Un overclock instable provoquera un plantage système (BSOD).
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
            <div class="os-bsod-title">Votre PC virtuel a rencontré un problème et doit redémarrer. Nous collectons simplement quelques informations relatives aux erreurs.</div>
            
            <div class="os-bsod-details">
                Code d'arrêt système : <strong style="color:#ffef56">${errorCode}</strong><br>
                Rapport technique : ${desc}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">Cliquez n'importe où pour forcer l'extinction et retourner à l'établi.</span>
            </div>
        </div>
    `;

    // Click anywhere on BSOD to exit
    monitor.querySelector(".os-bsod").addEventListener("click", () => {
        closeVirtualOs();
        renderWorkbenchTab();
    });
}
