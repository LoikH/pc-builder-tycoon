/* ==========================================
   PC ARCHITECT TYCOON - INTERACTIVE WORKBENCH UI
   ========================================== */

import { state, saveGame, generateUniqueId, updateActiveJobsRequirements } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";
import { calculatePcBenchmark } from "../jobs.js";
import { bootVirtualOs, closeVirtualOs } from "./virtualos.js";

let selectedSlotType = null;
let currentOpenPc = null; // Reference to PC currently worked on

export function renderWorkbenchTab() {
    const pane = document.getElementById("pane-workbench");
    pane.innerHTML = "";

    // 1. SELECT CURRENT WORKBENCH PC
    const activeWb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
    currentOpenPc = activeWb ? activeWb.pc : null;

    const grid = document.createElement("div");
    grid.className = "workbench-grid";

    // LEFT COLUMN: PC Case Interactive Visualizer
    const caseView = document.createElement("div");
    caseView.className = "workbench-case-view";
    
    if (!currentOpenPc) {
        caseView.innerHTML = `
            <div style="text-align:center; color:var(--text-muted)">
                <span style="font-size:4rem">🔧</span>
                <h3 style="margin-top:15px; color:#fff">Établi ${state.selectedWorkbenchId} Vide</h3>
                <p style="font-size:0.85rem; margin-top:5px; max-width:300px">Sélectionnez une commande dans vos e-mails ou importez un ordinateur d'occasion pour commencer.</p>
                <div style="margin-top:20px" id="workbench-import-area"></div>
            </div>
        `;
        grid.appendChild(caseView);
    } else {
        // Render slots
        caseView.innerHTML = `
            <div class="case-schematic">
                <!-- Motherboard Slot -->
                <div class="case-slot ${currentOpenPc.motherboard ? 'filled' : ''}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">Carte Mère</span>
                    <span class="case-slot-partname">${currentOpenPc.motherboard ? getComponentById(currentOpenPc.motherboard.partId).name : 'Emplacement Vide'}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area) -->
                ${currentOpenPc.motherboard ? `
                <div class="case-slot ${currentOpenPc.cpu ? 'filled' : ''}" id="slot-cpu" data-slot="cpu">
                    <span class="case-slot-label">CPU</span>
                    <span class="case-slot-partname">${currentOpenPc.cpu ? getComponentById(currentOpenPc.cpu.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- CPU Cooler Slot (Overlays CPU) -->
                ${currentOpenPc.cpu ? `
                <div class="case-slot ${currentOpenPc.cooler ? 'filled' : ''}" id="slot-cooler" data-slot="cooler">
                    <span class="case-slot-label">Refroidissement</span>
                    <span class="case-slot-partname">${currentOpenPc.cooler ? getComponentById(currentOpenPc.cooler.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- RAM Slot (Near CPU) -->
                ${currentOpenPc.motherboard ? `
                <div class="case-slot ${currentOpenPc.ram ? 'filled' : ''}" id="slot-ram" data-slot="ram">
                    <span class="case-slot-label">RAM</span>
                    <span class="case-slot-partname">${currentOpenPc.ram ? getComponentById(currentOpenPc.ram.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- GPU Slot (PCIe slot) -->
                ${currentOpenPc.motherboard ? `
                <div class="case-slot ${currentOpenPc.gpu ? 'filled' : ''}" id="slot-gpu" data-slot="gpu">
                    <span class="case-slot-label">Carte Graphique</span>
                    <span class="case-slot-partname">${currentOpenPc.gpu ? getComponentById(currentOpenPc.gpu.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- Power Supply Slot -->
                <div class="case-slot ${currentOpenPc.psu ? 'filled' : ''}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">Alimentation (PSU)</span>
                    <span class="case-slot-partname">${currentOpenPc.psu ? getComponentById(currentOpenPc.psu.partId).name : 'Emplacement Vide'}</span>
                </div>

                <!-- Disk Storage Slot -->
                <div class="case-slot ${currentOpenPc.storage ? 'filled' : ''}" id="slot-storage" data-slot="storage">
                    <span class="case-slot-label">Stockage</span>
                    <span class="case-slot-partname">${currentOpenPc.storage ? getComponentById(currentOpenPc.storage.partId).name : 'Emplacement Vide'}</span>
                </div>
            </div>
            
            <!-- Virtual Screen overlay -->
            <div id="workbench-monitor-overlay" style="display:none"></div>
        `;
        grid.appendChild(caseView);
    }

    // RIGHT COLUMN: Sidebar (Select Workbench, PC Specs, Action Buttons)
    const rightSidebar = document.createElement("div");
    rightSidebar.className = "workbench-sidebar";

    // 1. Selector Row
    let selectorHtml = "";
    state.workbenches.forEach(wb => {
        if (!wb.unlocked) {
            selectorHtml += `<div class="pc-tab text-muted" style="opacity:0.5; cursor:not-allowed">🔒 Établi ${wb.id}</div>`;
        } else {
            selectorHtml += `
                <div class="pc-tab ${state.selectedWorkbenchId === wb.id ? 'active' : ''}" id="tab-wb-${wb.id}">
                    Établi ${wb.id} ${wb.pc ? '🛠️' : ''}
                </div>
            `;
        }
    });

    rightSidebar.innerHTML = `
        <div class="glass-panel workbench-details-card">
            <div class="stat-label" style="margin-bottom:8px">Choisir mon établi</div>
            <div class="pc-selector-row">${selectorHtml}</div>
        </div>
    `;

    // 2. PC Details and checklist
    if (currentOpenPc) {
        const specCard = document.createElement("div");
        specCard.className = "glass-panel workbench-details-card";
        specCard.style.flex = "1";
        
        let wattageRequired = 0;
        let wattageProvided = 0;
        if (currentOpenPc.cpu) wattageRequired += getComponentById(currentOpenPc.cpu.partId).specs.power;
        if (currentOpenPc.gpu) wattageRequired += getComponentById(currentOpenPc.gpu.partId).specs.power;
        if (currentOpenPc.psu) wattageProvided = getComponentById(currentOpenPc.psu.partId).specs.wattage;

        const isPowerSuff = wattageProvided >= wattageRequired;

        // Is linked to an order?
        const linkedJob = state.activeJobs.find(j => j.id === currentOpenPc.orderId);
        
        specCard.innerHTML = `
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>Configuration Actuelle</span>
                <span class="status-badge ${window.isPcRunning ? 'on' : 'off'}">${window.isPcRunning ? 'En marche' : 'Éteint'}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">Carte Mère</span><span class="pc-spec-val">${currentOpenPc.motherboard ? getComponentById(currentOpenPc.motherboard.partId).name : 'Manquante'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Processeur</span><span class="pc-spec-val">${currentOpenPc.cpu ? getComponentById(currentOpenPc.cpu.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Ventirad</span><span class="pc-spec-val">${currentOpenPc.cooler ? getComponentById(currentOpenPc.cooler.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Mémoire RAM</span><span class="pc-spec-val">${currentOpenPc.ram ? getComponentById(currentOpenPc.ram.partId).name : 'Manquante'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Graphismes</span><span class="pc-spec-val">${currentOpenPc.gpu ? getComponentById(currentOpenPc.gpu.partId).name : 'Manquants'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Stockage</span><span class="pc-spec-val">${currentOpenPc.storage ? getComponentById(currentOpenPc.storage.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Alimentation</span><span class="pc-spec-val">${currentOpenPc.psu ? `${getComponentById(currentOpenPc.psu.partId).name} (${wattageProvided}W)` : 'Manquante'}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>Consommation estimée :</span>
                    <span class="${isPowerSuff ? 'text-emerald' : 'text-crimson'}" style="font-weight:600">${wattageRequired}W / ${wattageProvided}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Pâte thermique :</span>
                    <span class="${currentOpenPc.thermalPasteApplied ? 'text-emerald' : 'text-crimson'}">${currentOpenPc.thermalPasteApplied ? 'Appliquée ✓' : 'Manquante ✗'}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Câbles d'alimentation :</span>
                    <span class="${currentOpenPc.cablesConnected ? 'text-emerald' : 'text-crimson'}">${currentOpenPc.cablesConnected ? 'Branchés ✓' : 'Débranchés ✗'}</span>
                </div>
            </div>

            <div class="workbench-actions-box">
                <button class="btn-secondary" id="btn-toggle-paste" style="width:100%">
                    ${currentOpenPc.thermalPasteApplied ? 'Nettoyer la pâte thermique' : 'Appliquer pâte thermique'}
                </button>
                <button class="btn-secondary" id="btn-toggle-cables" style="width:100%">
                    ${currentOpenPc.cablesConnected ? 'Débrancher les câbles' : 'Brancher les câbles'}
                </button>
                
                ${window.isPcRunning ? `
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-crimson), #c00); box-shadow: 0 4px 15px rgba(255,0,85,0.2)">
                        Éteindre le PC (Power OFF)
                    </button>
                ` : `
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow: 0 4px 15px rgba(0,255,136,0.2)">
                        Allumer le PC (Power ON)
                    </button>
                `}

                ${!linkedJob ? `
                    <div style="border-top:1px solid var(--border-color); margin-top:10px; padding-top:10px; display:flex; flex-direction:column; gap:5px">
                        <div class="stat-label">PC Libre (Flip BargainBin)</div>
                        <input type="text" id="flip-build-name" placeholder="Nom de l'ordinateur" value="${activeWb.pc.name || 'PC Gamer Flip'}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <input type="number" id="flip-build-price" placeholder="Prix de vente ($)" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <button class="btn-secondary text-purple" style="border-color:rgba(189,0,255,0.3)" id="btn-sell-flip-pc">
                            Mettre en vente sur BargainBin
                        </button>
                        <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.2); font-size:0.75rem; margin-top:5px" id="btn-scrap-pc">
                            Démonter le PC (Récupérer les pièces)
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
        rightSidebar.appendChild(specCard);
    }
    
    grid.appendChild(rightSidebar);
    pane.appendChild(grid);

    // BIND WORKBENCH TABS EVENT
    state.workbenches.forEach(wb => {
        if (!wb.unlocked) return;
        document.getElementById(`tab-wb-${wb.id}`).addEventListener("click", () => {
            state.selectedWorkbenchId = wb.id;
            // If PC changes, shutdown
            window.isPcRunning = false;
            closeVirtualOs();
            saveGame();
            renderWorkbenchTab();
        });
    });

    // BIND ACTIONS FOR OPEN PC
    if (currentOpenPc) {
        document.getElementById("btn-toggle-paste").addEventListener("click", () => {
            currentOpenPc.thermalPasteApplied = !currentOpenPc.thermalPasteApplied;
            saveGame();
            renderWorkbenchTab();
            updateActiveJobsRequirements();
        });

        document.getElementById("btn-toggle-cables").addEventListener("click", () => {
            currentOpenPc.cablesConnected = !currentOpenPc.cablesConnected;
            saveGame();
            renderWorkbenchTab();
            updateActiveJobsRequirements();
        });

        document.getElementById("btn-power-pc").addEventListener("click", () => {
            togglePcPower();
        });

        // Slots click triggers drawer
        pane.querySelectorAll(".case-schematic .case-slot").forEach(slot => {
            slot.addEventListener("click", (e) => {
                const slotType = slot.getAttribute("data-slot");
                // Stop click propagation if click was directly inside slot
                openPartInstallerDrawer(slotType);
            });
        });

        // Flip PC sell and scrap buttons
        const linkedJob = state.activeJobs.find(j => j.id === currentOpenPc.orderId);
        if (!linkedJob) {
            document.getElementById("btn-sell-flip-pc").addEventListener("click", () => {
                sellCustomFlipPc();
            });
            document.getElementById("btn-scrap-pc").addEventListener("click", () => {
                scrapPcToInventory();
            });
        }
    } else {
        // Load used PCs list for vacancy import
        populateImportArea();
    }
}

function populateImportArea() {
    const area = document.getElementById("workbench-import-area");
    if (!area) return;

    // Search inventory for items of type 'pc_flip'
    const flips = state.inventory.filter(item => item.type === "pc_flip");

    if (flips.length === 0) {
        area.innerHTML = `
            <div style="font-size:0.75rem; color:var(--text-muted)">Aucun PC d'occasion en stock.</div>
        `;
        return;
    }

    area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px">
            <span class="stat-label">Importer un PC d'occasion</span>
            <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                ${flips.map(f => `<option value="${f.id}">${f.name} (${f.pricePaid}$)</option>`).join('')}
            </select>
            <button class="btn-primary glow-btn" id="btn-import-pc-action">
                Placer sur l'Établi
            </button>
            <button class="btn-secondary" id="btn-create-scratch-build" style="margin-top:10px; font-size:0.75rem">
                Commencer un boitier vierge (Builder libre)
            </button>
        </div>
    `;

    document.getElementById("btn-import-pc-action").addEventListener("click", () => {
        const id = document.getElementById("select-import-pc").value;
        const flipItem = state.inventory.find(i => i.id === id);
        if (flipItem) {
            // Load to current workbench
            const wb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
            wb.pc = flipItem.pc;
            wb.pc.name = flipItem.name; // preserve flip name
            wb.pc.isCustom = true;
            
            // Remove from inventory
            state.inventory = state.inventory.filter(i => i.id !== id);
            saveGame();
            showToast("PC d'occasion importé sur l'établi !", "success");
            renderWorkbenchTab();
        }
    });

    document.getElementById("btn-create-scratch-build").addEventListener("click", () => {
        const wb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
        wb.pc = {
            case: null, motherboard: null, cpu: null, cooler: null,
            ram: null, gpu: null, storage: null, psu: null,
            thermalPasteApplied: false, cablesConnected: false,
            hasOs: false, isClean: true, score: 0, diagnosed: true
        };
        saveGame();
        showToast("Boîtier vide placé sur l'établi !", "info");
        renderWorkbenchTab();
    });
}

function togglePcPower() {
    if (window.isPcRunning) {
        window.isPcRunning = false;
        closeVirtualOs();
        renderWorkbenchTab();
        showToast("Ordinateur éteint.", "info");
    } else {
        // Boot checks
        if (!currentOpenPc.psu) {
            showToast("Boot échoué : Aucune alimentation installée !", "error");
            return;
        }
        if (!currentOpenPc.motherboard) {
            showToast("Boot échoué : Aucune carte mère installée !", "error");
            return;
        }
        if (!currentOpenPc.cpu) {
            showToast("Boot échoué : Aucun processeur installé !", "error");
            return;
        }
        if (!currentOpenPc.cooler) {
            showToast("Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !", "error");
            return;
        }
        if (!currentOpenPc.ram) {
            showToast("Boot échoué : Aucune mémoire vive (RAM) !", "error");
            return;
        }
        if (!currentOpenPc.gpu) {
            showToast("Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !", "error");
            return;
        }
        if (!currentOpenPc.storage) {
            showToast("Boot échoué : Aucun disque de stockage détecté !", "error");
            return;
        }
        if (!currentOpenPc.cablesConnected) {
            showToast("Boot échoué : Les câbles d'alimentation ne sont pas branchés !", "error");
            return;
        }

        // PSU Wattage check
        let wattageRequired = 0;
        if (currentOpenPc.cpu) wattageRequired += getComponentById(currentOpenPc.cpu.partId).specs.power;
        if (currentOpenPc.gpu) wattageRequired += getComponentById(currentOpenPc.gpu.partId).specs.power;
        
        const psuPower = getComponentById(currentOpenPc.psu.partId).specs.wattage;
        if (psuPower < wattageRequired) {
            showToast("Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.", "error");
            return;
        }

        // Success boot
        window.isPcRunning = true;
        renderWorkbenchTab();
        showToast("Boot en cours... Signal vidéo détecté !", "success");
        
        // Open the virtual OS overlay
        bootVirtualOs(currentOpenPc);
    }
}

function openPartInstallerDrawer(slotType) {
    selectedSlotType = slotType;
    
    const existingPart = currentOpenPc[slotType];
    
    // Create drawer modal
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "part-drawer-modal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    // Header
    const header = document.createElement("div");
    header.className = "panel-header";
    header.innerHTML = `
        <h2>Sélectionner un composant : ${slotType.toUpperCase()}</h2>
        <button class="os-window-close" id="btn-close-drawer">×</button>
    `;
    
    // Body
    const body = document.createElement("div");
    body.className = "modal-body";
    
    // Get inventory options of this slot type
    const options = state.inventory.filter(item => {
        const comp = getComponentById(item.partId);
        return comp && comp.type === slotType;
    });

    let listHtml = "";

    if (existingPart) {
        listHtml += `
            <div style="background:rgba(255,0,85,0.05); padding:1rem; border-radius:6px; border:1px solid rgba(255,0,85,0.2); margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center">
                <div>
                    <span class="stat-label">Composant installé</span>
                    <div style="font-weight:600; font-size:0.9rem">${getComponentById(existingPart.partId).name} (${existingPart.condition === 'used' ? 'Occasion' : existingPart.condition === 'broken' ? 'En Panne' : 'Neuf'})</div>
                </div>
                <button class="btn-secondary text-crimson" id="btn-uninstall-part">
                    Retirer la pièce
                </button>
            </div>
        `;
    }

    if (options.length === 0) {
        listHtml += `<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun composant de ce type disponible dans votre inventaire.</div>`;
    } else {
        listHtml += `
            <div style="font-weight:700; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px">Pièces en stock :</div>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${options.map(opt => {
                    const comp = getComponentById(opt.partId);
                    return `
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center">
                            <div>
                                <div style="font-weight:600; font-size:0.85rem">${comp.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-secondary)">État : ${opt.condition === 'new' ? 'Neuf' : opt.condition === 'used' ? 'Occasion' : 'En Panne'}</div>
                            </div>
                            <button class="btn-buy" id="btn-install-part-${opt.id}">Installer</button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    body.innerHTML = listHtml;
    content.appendChild(header);
    content.appendChild(body);
    overlay.appendChild(content);
    document.body.appendChild(overlay);

    // Event listeners
    document.getElementById("btn-close-drawer").addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    if (existingPart) {
        document.getElementById("btn-uninstall-part").addEventListener("click", () => {
            uninstallPart(slotType);
            document.body.removeChild(overlay);
        });
    }

    options.forEach(opt => {
        document.getElementById(`btn-install-part-${opt.id}`).addEventListener("click", () => {
            installPart(slotType, opt);
            document.body.removeChild(overlay);
        });
    });
}

function installPart(slotType, invItem) {
    const comp = getComponentById(invItem.partId);
    
    // COMPATIBILITY CHECKS
    if (slotType === "cpu") {
        if (currentOpenPc.motherboard) {
            const mbComp = getComponentById(currentOpenPc.motherboard.partId);
            if (mbComp.specs.socket !== comp.specs.socket) {
                showToast(`Incompatible : Socket de carte mère (${mbComp.specs.socket}) incompatible avec le processeur (${comp.specs.socket}) !`, "error");
                return;
            }
        }
    } 
    else if (slotType === "motherboard") {
        if (currentOpenPc.cpu) {
            const cpuComp = getComponentById(currentOpenPc.cpu.partId);
            if (cpuComp.specs.socket !== comp.specs.socket) {
                showToast(`Incompatible : Le processeur déjà présent (${cpuComp.specs.socket}) ne rentre pas sur ce socket (${comp.specs.socket}) !`, "error");
                return;
            }
        }
        if (currentOpenPc.ram) {
            const ramComp = getComponentById(currentOpenPc.ram.partId);
            if (ramComp.specs.ramType !== comp.specs.ramType) {
                showToast(`Incompatible : Type de RAM de la carte mère (${comp.specs.ramType}) incompatible avec la RAM installée (${ramComp.specs.ramType}) !`, "error");
                return;
            }
        }
    } 
    else if (slotType === "cooler") {
        if (currentOpenPc.cpu) {
            const cpuComp = getComponentById(currentOpenPc.cpu.partId);
            if (!comp.specs.socket.includes(cpuComp.specs.socket)) {
                showToast(`Incompatible : Le système d'accroche du ventirad ne supporte pas le socket ${cpuComp.specs.socket} !`, "error");
                return;
            }
        }
    }
    else if (slotType === "ram") {
        if (currentOpenPc.motherboard) {
            const mbComp = getComponentById(currentOpenPc.motherboard.partId);
            if (mbComp.specs.ramType !== comp.specs.ramType) {
                showToast(`Incompatible : La carte mère requiert de la mémoire ${mbComp.specs.ramType} (${comp.specs.ramType} fournie) !`, "error");
                return;
            }
        }
    }

    // Success install:
    // If there is already a part, uninstall first
    if (currentOpenPc[slotType]) {
        uninstallPart(slotType);
    }

    // Mount part
    currentOpenPc[slotType] = {
        partId: invItem.partId,
        condition: invItem.condition
    };

    // Remove from inventory
    state.inventory = state.inventory.filter(i => i.id !== invItem.id);

    // Auto recalculate benchmark
    if (currentOpenPc.cpu && currentOpenPc.gpu && currentOpenPc.ram) {
        currentOpenPc.score = calculatePcBenchmark(currentOpenPc.cpu.partId, currentOpenPc.gpu.partId, currentOpenPc.ram.partId);
    } else {
        currentOpenPc.score = 0;
    }

    saveGame();
    showToast(`${comp.name} installé !`, "success");
    renderWorkbenchTab();
    updateActiveJobsRequirements();
}

function uninstallPart(slotType) {
    const installed = currentOpenPc[slotType];
    if (installed) {
        // Return to inventory
        state.inventory.push({
            id: generateUniqueId(),
            partId: installed.partId,
            condition: installed.condition,
            pricePaid: getComponentById(installed.partId).price
        });

        // Clear slot
        currentOpenPc[slotType] = null;

        // Reset OS and running states on motherboard/storage changes
        if (slotType === "motherboard" || slotType === "storage" || slotType === "cpu") {
            window.isPcRunning = false;
            closeVirtualOs();
        }

        // Special child removal
        if (slotType === "motherboard") {
            // Motherboard uninstall drops CPU, cooler, RAM and GPU back to inventory
            const secondarySlots = ["cpu", "cooler", "ram", "gpu"];
            secondarySlots.forEach(s => {
                if (currentOpenPc[s]) {
                    state.inventory.push({
                        id: generateUniqueId(),
                        partId: currentOpenPc[s].partId,
                        condition: currentOpenPc[s].condition,
                        pricePaid: getComponentById(currentOpenPc[s].partId).price
                    });
                    currentOpenPc[s] = null;
                }
            });
        }
        if (slotType === "cpu") {
            // CPU removal drops Cooler
            if (currentOpenPc.cooler) {
                state.inventory.push({
                    id: generateUniqueId(),
                    partId: currentOpenPc.cooler.partId,
                    condition: currentOpenPc.cooler.condition,
                    pricePaid: getComponentById(currentOpenPc.cooler.partId).price
                });
                currentOpenPc.cooler = null;
            }
        }

        currentOpenPc.score = 0;
        saveGame();
        showToast("Composant démonté et replacé en inventaire.", "info");
        renderWorkbenchTab();
        updateActiveJobsRequirements();
    }
}

function sellCustomFlipPc() {
    const name = document.getElementById("flip-build-name").value.trim();
    const price = parseFloat(document.getElementById("flip-build-price").value);

    if (!name) {
        showToast("Veuillez donner un nom à votre PC !", "error");
        return;
    }
    if (isNaN(price) || price <= 0) {
        showToast("Veuillez saisir un prix valide supérieur à 0 !", "error");
        return;
    }

    // Require fully working PC to sell
    if (!currentOpenPc.case || !currentOpenPc.motherboard || !currentOpenPc.cpu || !currentOpenPc.cooler || !currentOpenPc.ram || !currentOpenPc.gpu || !currentOpenPc.storage || !currentOpenPc.psu || !currentOpenPc.hasOs || !currentOpenPc.cablesConnected || !currentOpenPc.thermalPasteApplied) {
        showToast("Vente impossible : Le PC n'est pas opérationnel ou des pièces manquent !", "error");
        return;
    }

    // Move PC to listed state.customPcs
    state.customPcs.push({
        id: "listed-" + generateUniqueId(),
        name: name,
        price: Math.round(price),
        pc: JSON.parse(JSON.stringify(currentOpenPc))
    });

    // Clear current workbench
    const activeWb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
    activeWb.pc = null;
    currentOpenPc = null;
    window.isPcRunning = false;
    closeVirtualOs();

    saveGame();
    showToast(`Ordinateur "${name}" mis en vente pour ${Math.round(price)}$ !`, "success");
    renderWorkbenchTab();
}

function scrapPcToInventory() {
    const slots = ["case", "motherboard", "cpu", "cooler", "ram", "gpu", "storage", "psu"];
    slots.forEach(slot => {
        if (currentOpenPc[slot]) {
            state.inventory.push({
                id: generateUniqueId(),
                partId: currentOpenPc[slot].partId,
                condition: currentOpenPc[slot].condition,
                pricePaid: getComponentById(currentOpenPc[slot].partId).price
            });
        }
    });

    const activeWb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
    activeWb.pc = null;
    currentOpenPc = null;
    window.isPcRunning = false;
    closeVirtualOs();

    saveGame();
    showToast("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !", "info");
    renderWorkbenchTab();
}
