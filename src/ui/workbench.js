/* ==========================================
   PC ARCHITECT TYCOON - INTERACTIVE WORKBENCH UI
   ========================================== */

import { state, saveGame, generateUniqueId, updateActiveJobsRequirements } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById, getMotherboardSlots } from "../components.js";
import { calculatePcBenchmark } from "../jobs.js";
import { bootVirtualOs, closeVirtualOs } from "./virtualos.js";

let selectedSlotType = null;
let currentOpenPc = null; // Reference to PC currently worked on

export function renderWorkbenchTab() {
    const pane = document.getElementById("pane-workbench");

    // 1. SELECT CURRENT WORKBENCH PC
    const activeWb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
    currentOpenPc = activeWb ? activeWb.pc : null;

    const monitor = document.getElementById("workbench-monitor-overlay");
    const isOverlayActive = monitor && monitor.style.display !== "none" && window.isPcRunning;

    if (!isOverlayActive) {
        pane.innerHTML = "";
    }

    // AUTO-INITIALIZE RAM AND STORAGE SLOTS
    if (currentOpenPc) {
        const mbId = currentOpenPc.motherboard?.partId;
        const maxSlots = getMotherboardSlots(mbId);
        
        // Ensure rams array is initialized with correct length
        if (!currentOpenPc.rams) {
            currentOpenPc.rams = new Array(maxSlots.ram).fill(null);
            // Migrate legacy singular ram property to slot 0
            if (currentOpenPc.ram) {
                currentOpenPc.rams[0] = currentOpenPc.ram;
            }
        } else {
            // Adjust array size if slot capacity changed (motherboard upgraded/downgraded)
            if (currentOpenPc.rams.length !== maxSlots.ram) {
                const oldRams = currentOpenPc.rams;
                currentOpenPc.rams = new Array(maxSlots.ram).fill(null);
                for (let i = 0; i < Math.min(oldRams.length, maxSlots.ram); i++) {
                    currentOpenPc.rams[i] = oldRams[i];
                }
                // Return overflow items to inventory
                for (let i = maxSlots.ram; i < oldRams.length; i++) {
                    if (oldRams[i]) {
                        state.inventory.push({
                            id: generateUniqueId(),
                            partId: oldRams[i].partId,
                            condition: oldRams[i].condition,
                            pricePaid: getComponentById(oldRams[i].partId).price
                        });
                    }
                }
            }
        }
        
        // Ensure storages array is initialized (NVMe + SATA)
        const totalStorageSlots = maxSlots.nvme + maxSlots.sata;
        if (!currentOpenPc.storages) {
            currentOpenPc.storages = new Array(totalStorageSlots).fill(null);
            // Migrate legacy singular storage property to the correct slot category (NVMe vs SATA)
            if (currentOpenPc.storage) {
                const comp = getComponentById(currentOpenPc.storage.partId);
                const isNVMe = comp && comp.specs.storageType === "NVMe M.2";
                if (isNVMe && maxSlots.nvme > 0) {
                    currentOpenPc.storages[0] = currentOpenPc.storage; // NVMe slot
                } else {
                    currentOpenPc.storages[maxSlots.nvme] = currentOpenPc.storage; // SATA slot
                }
            }
        } else {
            // Adjust array size if slot capacity changed
            if (currentOpenPc.storages.length !== totalStorageSlots) {
                const oldStorages = currentOpenPc.storages;
                currentOpenPc.storages = new Array(totalStorageSlots).fill(null);
                for (let i = 0; i < Math.min(oldStorages.length, totalStorageSlots); i++) {
                    currentOpenPc.storages[i] = oldStorages[i];
                }
                // Return overflow items to inventory
                for (let i = totalStorageSlots; i < oldStorages.length; i++) {
                    if (oldStorages[i]) {
                        state.inventory.push({
                            id: generateUniqueId(),
                            partId: oldStorages[i].partId,
                            condition: oldStorages[i].condition,
                            pricePaid: getComponentById(oldStorages[i].partId).price
                        });
                    }
                }
            }
        }

        // Self-healing check for existing saves: correct any misallocated storage types (e.g. SATA drive in M.2 slot)
        for (let i = 0; i < totalStorageSlots; i++) {
            const item = currentOpenPc.storages[i];
            if (item) {
                const comp = getComponentById(item.partId);
                if (comp) {
                    const isNVMe = comp.specs.storageType === "NVMe M.2";
                    const isM2Slot = i < maxSlots.nvme;
                    if (isM2Slot && !isNVMe) {
                        // Move SATA drive from NVMe slot to first available SATA slot
                        const firstEmptySata = currentOpenPc.storages.indexOf(null, maxSlots.nvme);
                        if (firstEmptySata !== -1) {
                            currentOpenPc.storages[firstEmptySata] = item;
                            currentOpenPc.storages[i] = null;
                        }
                    } else if (!isM2Slot && isNVMe) {
                        // Move NVMe drive from SATA slot to first available NVMe slot
                        const firstEmptyM2 = currentOpenPc.storages.indexOf(null, 0);
                        if (firstEmptyM2 !== -1 && firstEmptyM2 < maxSlots.nvme) {
                            currentOpenPc.storages[firstEmptyM2] = item;
                            currentOpenPc.storages[i] = null;
                        }
                    }
                }
            }
        }

        // Self-healing check for RAM kits (ensure they occupy exactly 2 slots)
        for (let i = 0; i < maxSlots.ram; i++) {
            const item = currentOpenPc.rams[i];
            if (item && !item.kitId) {
                const comp = getComponentById(item.partId);
                const isKit = comp && comp.name.includes("(2x");
                if (isKit) {
                    item.kitId = "kit-" + generateUniqueId();
                    const otherSlotIndex = currentOpenPc.rams.findIndex((r, idx) => idx !== i && r === null);
                    if (otherSlotIndex !== -1) {
                        currentOpenPc.rams[otherSlotIndex] = {
                            partId: item.partId,
                            condition: item.condition,
                            kitId: item.kitId
                        };
                    }
                }
            }
        }

        // Keep legacy singular ram & storage properties in sync with first items for general compat
        currentOpenPc.ram = currentOpenPc.rams.find(r => r !== null) || null;
        currentOpenPc.storage = currentOpenPc.storages.find(s => s !== null) || null;
    }

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
        const maxSlots = getMotherboardSlots(currentOpenPc.motherboard?.partId);
        
        // Render slots
        caseView.innerHTML = `
            <div class="case-schematic">
                <!-- Case Slot -->
                <div class="case-slot ${currentOpenPc.case ? 'filled' : ''}" id="slot-case" data-slot="case" style="top: 15px; left: 40px; width: 420px; height: 45px; z-index: 5;">
                    <span class="case-slot-label">Boîtier PC</span>
                    <span class="case-slot-partname">${currentOpenPc.case ? getComponentById(currentOpenPc.case.partId).name : 'Aucun Boîtier (Composants à nu)'}</span>
                </div>

                <!-- Motherboard Slot -->
                <div class="case-slot ${currentOpenPc.motherboard ? 'filled' : ''}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">Carte Mère</span>
                    <span class="case-slot-partname">${currentOpenPc.motherboard ? getComponentById(currentOpenPc.motherboard.partId).name : 'Emplacement Vide'}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area, stacked, non-overlapping) -->
                ${currentOpenPc.motherboard ? `
                <div class="case-slot ${currentOpenPc.cpu ? 'filled' : ''}" id="slot-cpu" data-slot="cpu" style="top: 80px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">CPU</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${currentOpenPc.cpu ? getComponentById(currentOpenPc.cpu.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- CPU Cooler Slot (Stacked vertically below CPU, non-overlapping) -->
                ${currentOpenPc.cpu ? `
                <div class="case-slot ${currentOpenPc.cooler ? 'filled' : ''}" id="slot-cooler" data-slot="cooler" style="top: 155px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">Refroidisseur</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${currentOpenPc.cooler ? getComponentById(currentOpenPc.cooler.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- Multi-slot RAM (DIMM slots to the right of CPU) -->
                ${currentOpenPc.motherboard ? 
                    currentOpenPc.rams.map((ramItem, idx) => `
                        <div class="case-slot ram-slot ${ramItem ? 'filled' : ''}" id="slot-ram-${idx}" data-slot="ram" data-index="${idx}" title="${ramItem ? getComponentById(ramItem.partId).name : 'Slot RAM ' + (idx + 1)}" style="top: 80px; left: ${265 + idx * 25}px; width: 20px; height: 145px; z-index: 10;">
                            <span class="case-slot-label" style="font-size: 0.55rem; line-height: 1;">R${idx + 1}</span>
                        </div>
                    `).join('') 
                : ''}

                <!-- GPU Slot (PCIe slot) -->
                ${currentOpenPc.motherboard ? `
                <div class="case-slot ${currentOpenPc.gpu ? 'filled' : ''}" id="slot-gpu" data-slot="gpu" style="top: 235px; left: 115px; width: 250px; height: 75px; z-index: 12;">
                    <span class="case-slot-label">Carte Graphique</span>
                    <span class="case-slot-partname">${currentOpenPc.gpu ? getComponentById(currentOpenPc.gpu.partId).name : 'Emplacement Vide'}</span>
                </div>
                ` : ''}

                <!-- Power Supply Slot -->
                <div class="case-slot ${currentOpenPc.psu ? 'filled' : ''}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">Alimentation (PSU)</span>
                    <span class="case-slot-partname">${currentOpenPc.psu ? getComponentById(currentOpenPc.psu.partId).name : 'Emplacement Vide'}</span>
                </div>

                <!-- Multi-slot Storage: NVMe on Motherboard -->
                ${currentOpenPc.motherboard ? 
                    new Array(maxSlots.nvme).fill(null).map((_, i) => {
                        const storItem = currentOpenPc.storages[i];
                        return `
                            <div class="case-slot nvme-slot ${storItem ? 'filled' : ''}" id="slot-nvme-${i}" data-slot="storage" data-index="${i}" title="${storItem ? getComponentById(storItem.partId).name : 'Slot M.2 NVMe ' + (i + 1)}" style="top: ${155 + i * 18}px; left: 60px; width: 80px; height: 15px; z-index: 10; font-size: 0.55rem; padding: 0;">
                                <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">M.2_${i + 1}</span>
                            </div>
                        `;
                    }).join('')
                : ''}

                <!-- Multi-slot Storage: SATA Drive Bays in Case bottom -->
                ${new Array(maxSlots.sata).fill(null).map((_, i) => {
                    const storIdx = maxSlots.nvme + i;
                    const storItem = currentOpenPc.storages[storIdx];
                    const col = i % 3;
                    const row = Math.floor(i / 3);
                    return `
                        <div class="case-slot sata-slot ${storItem ? 'filled' : ''}" id="slot-sata-${i}" data-slot="storage" data-index="${storIdx}" title="${storItem ? getComponentById(storItem.partId).name : 'Slot SATA ' + (i + 1)}" style="top: ${380 + row * 45}px; left: ${40 + col * 55}px; width: 50px; height: 38px; font-size: 0.55rem; padding: 2px 0;">
                            <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">SATA_${i + 1}</span>
                        </div>
                    `;
                }).join('')}
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
        // Render objective card if linked to an active job
        const linkedJob = state.activeJobs.find(j => j.id === currentOpenPc.orderId);
        if (linkedJob) {
            const objectiveCard = document.createElement("div");
            objectiveCard.className = "glass-panel workbench-details-card";
            objectiveCard.style.border = "1px solid rgba(0, 240, 255, 0.25)";
            objectiveCard.style.boxShadow = "inset 0 0 10px rgba(0, 240, 255, 0.05)";
            objectiveCard.style.marginBottom = "8px";
            
            objectiveCard.innerHTML = `
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; margin-bottom: 8px;">
                    🎯 Objectifs de la Mission
                </div>
                <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 8px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${linkedJob.subject}">
                    ${linkedJob.subject}
                </div>
                <ul class="job-reqs" style="display: flex; flex-direction: column; gap: 5px; list-style: none; padding: 0;">
                    ${linkedJob.requirements.map(req => `
                        <li class="${req.done ? 'done text-emerald' : 'pending text-muted'}" style="font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 0.9rem;">${req.done ? '✅' : '○'}</span>
                            <span style="${req.done ? 'text-decoration: line-through; opacity: 0.85;' : ''}">${req.desc}</span>
                        </li>
                    `).join('')}
                </ul>
            `;
            rightSidebar.appendChild(objectiveCard);
        }

        const specCard = document.createElement("div");
        specCard.className = "glass-panel workbench-details-card";
        specCard.style.flex = "1";
        
        let wattageRequired = 0;
        let wattageProvided = 0;
        if (currentOpenPc.cpu) wattageRequired += getComponentById(currentOpenPc.cpu.partId).specs.power;
        if (currentOpenPc.gpu) wattageRequired += getComponentById(currentOpenPc.gpu.partId).specs.power;
        if (currentOpenPc.psu) wattageProvided = getComponentById(currentOpenPc.psu.partId).specs.wattage;

        const isPowerSuff = wattageProvided >= wattageRequired;

        let ramSpecText = 'Manquante';
        if (currentOpenPc.rams && currentOpenPc.rams.some(r => r)) {
            const activeRams = currentOpenPc.rams.filter(r => r);
            let totalCap = 0;
            let type = '';
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
            ramSpecText = `${totalCap} Go ${type} (${activeRams.length}/${currentOpenPc.rams.length} Slots)`;
        }

        let storageSpecText = 'Manquant';
        if (currentOpenPc.storages && currentOpenPc.storages.some(s => s)) {
            const activeStorages = currentOpenPc.storages.filter(s => s);
            const nvmeCount = activeStorages.filter(s => getComponentById(s.partId).specs.storageType === "NVMe M.2").length;
            const sataCount = activeStorages.length - nvmeCount;
            let nvmeLabel = nvmeCount > 0 ? `${nvmeCount}x NVMe` : '';
            let sataLabel = sataCount > 0 ? `${sataCount}x SATA` : '';
            storageSpecText = [nvmeLabel, sataLabel].filter(Boolean).join(', ') + ` (${activeStorages.length}/${currentOpenPc.storages.length} Disques)`;
        }

        // Calculate total build cost (cost of all installed parts)
        let totalBuildCost = 0;
        const partsKeys = ["case", "motherboard", "cpu", "cooler", "gpu", "psu"];
        partsKeys.forEach(key => {
            if (currentOpenPc[key] && currentOpenPc[key].partId) {
                const comp = getComponentById(currentOpenPc[key].partId);
                if (comp) totalBuildCost += comp.price;
            }
        });
        if (currentOpenPc.rams) {
            const processedKits = new Set();
            currentOpenPc.rams.forEach(r => {
                if (r && r.partId) {
                    if (r.kitId) {
                        if (processedKits.has(r.kitId)) return;
                        processedKits.add(r.kitId);
                    }
                    const comp = getComponentById(r.partId);
                    if (comp) totalBuildCost += comp.price;
                }
            });
        }
        if (currentOpenPc.storages) {
            currentOpenPc.storages.forEach(s => {
                if (s && s.partId) {
                    const comp = getComponentById(s.partId);
                    if (comp) totalBuildCost += comp.price;
                }
            });
        }

        specCard.innerHTML = `
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>Configuration Actuelle</span>
                <span class="status-badge ${window.isPcRunning ? 'on' : 'off'}">${window.isPcRunning ? 'En marche' : 'Éteint'}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">Boîtier</span><span class="pc-spec-val">${currentOpenPc.case ? getComponentById(currentOpenPc.case.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Carte Mère</span><span class="pc-spec-val">${currentOpenPc.motherboard ? getComponentById(currentOpenPc.motherboard.partId).name : 'Manquante'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Processeur</span><span class="pc-spec-val">${currentOpenPc.cpu ? getComponentById(currentOpenPc.cpu.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Ventirad</span><span class="pc-spec-val">${currentOpenPc.cooler ? getComponentById(currentOpenPc.cooler.partId).name : 'Manquant'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Mémoire RAM</span><span class="pc-spec-val" title="${currentOpenPc.rams ? currentOpenPc.rams.filter(r => r).map(r => getComponentById(r.partId).name).join(', ') : ''}">${ramSpecText}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Graphismes</span><span class="pc-spec-val">${currentOpenPc.gpu ? getComponentById(currentOpenPc.gpu.partId).name : 'Manquants'}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Stockage</span><span class="pc-spec-val" title="${currentOpenPc.storages ? currentOpenPc.storages.filter(s => s).map(s => getComponentById(s.partId).name).join(', ') : ''}">${storageSpecText}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Alimentation</span><span class="pc-spec-val">${currentOpenPc.psu ? `${getComponentById(currentOpenPc.psu.partId).name} (${wattageProvided}W)` : 'Manquante'}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>Consommation estimée :</span>
                    <span class="${isPowerSuff ? 'text-emerald' : 'text-crimson'}" style="font-weight:600">${wattageRequired}W / ${wattageProvided}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Pâte thermique :</span>
                    <span class="${currentOpenPc.thermalPasteApplied ? 'text-emerald' : 'text-crimson'}">${currentOpenPc.thermalPasteApplied ? (currentOpenPc.thermalPasteType === 'liquid_metal' ? 'Métal Liquide ✓' : 'Standard ✓') : 'Manquante ✗'}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Câbles d'alimentation :</span>
                    <span class="${currentOpenPc.cablesConnected ? 'text-emerald' : 'text-crimson'}">${currentOpenPc.cablesConnected ? 'Branchés ✓' : 'Débranchés ✗'}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 4px; margin-top: 8px;">
                    <span class="text-cyan">Coût total des pièces :</span>
                    <span class="text-emerald font-mono">${totalBuildCost.toFixed(2)}$</span>
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

                ${linkedJob ? `
                    <button class="btn-secondary text-amber" id="btn-put-hold-workbench" style="width:100%; border-color:rgba(255,170,0,0.25); margin-top:5px; font-weight: 500;">
                        📦 Ranger le PC (Mettre en attente)
                    </button>
                ` : ''}

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
    
    const existingSidebar = pane.querySelector(".workbench-sidebar");
    if (isOverlayActive && existingSidebar) {
        existingSidebar.innerHTML = rightSidebar.innerHTML;
    } else {
        grid.appendChild(caseView);
        grid.appendChild(rightSidebar);
        pane.appendChild(grid);
    }

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
            if (currentOpenPc.thermalPasteApplied) {
                // Clear paste
                currentOpenPc.thermalPasteApplied = false;
                currentOpenPc.thermalPasteType = null;
                saveGame();
                updateActiveJobsRequirements();
                renderWorkbenchTab();
            } else {
                // Apply paste
                if (state.liquidMetalCount > 0) {
                    openThermalPasteChoiceModal();
                } else {
                    currentOpenPc.thermalPasteApplied = true;
                    currentOpenPc.thermalPasteType = "standard";
                    saveGame();
                    updateActiveJobsRequirements();
                    renderWorkbenchTab();
                }
            }
        });

        document.getElementById("btn-toggle-cables").addEventListener("click", () => {
            currentOpenPc.cablesConnected = !currentOpenPc.cablesConnected;
            saveGame();
            updateActiveJobsRequirements();
            renderWorkbenchTab();
        });

        document.getElementById("btn-power-pc").addEventListener("click", () => {
            togglePcPower();
        });

        // Slots click triggers drawer
        if (!isOverlayActive) {
            pane.querySelectorAll(".case-schematic .case-slot").forEach(slot => {
                slot.addEventListener("click", (e) => {
                    const slotType = slot.getAttribute("data-slot");
                    const slotIndex = slot.getAttribute("data-index");
                    // Stop click propagation if click was directly inside slot
                    openPartInstallerDrawer(slotType, slotIndex !== null ? parseInt(slotIndex) : null);
                });
            });
        }

        // Flip PC sell and scrap buttons
        const linkedJob = state.activeJobs.find(j => j.id === currentOpenPc.orderId);
        if (!linkedJob) {
            document.getElementById("btn-sell-flip-pc").addEventListener("click", () => {
                sellCustomFlipPc();
            });
            document.getElementById("btn-scrap-pc").addEventListener("click", () => {
                scrapPcToInventory();
            });
        } else {
            document.getElementById("btn-put-hold-workbench").addEventListener("click", () => {
                putJobOnHoldFromWorkbench(linkedJob);
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

    let importHtml = "";
    if (flips.length > 0) {
        importHtml = `
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px">
                <span class="stat-label">Importer un PC d'occasion</span>
                <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                    ${flips.map(f => `<option value="${f.id}">${f.name} (${f.pricePaid}$)</option>`).join('')}
                </select>
                <button class="btn-primary glow-btn" id="btn-import-pc-action">
                    Placer sur l'Établi
                </button>
            </div>
        `;
    } else {
        importHtml = `
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:15px">Aucun PC d'occasion en stock.</div>
        `;
    }

    area.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px">
            ${importHtml}
            <button class="btn-primary glow-btn" id="btn-create-scratch-build" style="background:linear-gradient(135deg, var(--color-purple), #90f); width:100%">
                Commencer un montage de zéro
            </button>
        </div>
    `;

    if (flips.length > 0) {
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
    }

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

        // Broken components check (Diagnostics)
        if (currentOpenPc.psu.condition === "broken") {
            showToast("Boot échoué : L'alimentation est défectueuse. Impossible d'allumer la machine !", "error");
            return;
        }
        if (currentOpenPc.motherboard.condition === "broken") {
            showToast("Boot échoué : La carte mère est défectueuse (Court-circuit sur le PCB) !", "error");
            return;
        }
        if (currentOpenPc.cpu.condition === "broken") {
            showToast("Boot échoué : Écran noir. Le processeur (CPU) est défectueux ou grillé !", "error");
            return;
        }
        if (currentOpenPc.rams.some(r => r && r.condition === "broken")) {
            showToast("Boot échoué : Erreur de mémoire vive (RAM). Une ou plusieurs barrettes sont défectueuses !", "error");
            return;
        }
        if (currentOpenPc.gpu.condition === "broken") {
            showToast("Boot échoué : Aucun signal d'affichage. La carte graphique (GPU) est défectueuse !", "error");
            return;
        }
        if (currentOpenPc.storages.some(s => s && s.condition === "broken")) {
            showToast("Boot échoué : Erreur de lecture de disque. Le périphérique de stockage est défectueux !", "error");
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
        currentOpenPc.bootedOnce = true; // PC successfully turned on and booted
        
        saveGame();
        updateActiveJobsRequirements();
        renderWorkbenchTab();
        showToast("Boot en cours... Signal vidéo détecté !", "success");
        
        // Open the virtual OS overlay
        bootVirtualOs(currentOpenPc);
    }
}

function openPartInstallerDrawer(slotType, slotIndex = null) {
    selectedSlotType = slotType;
    
    const existingPart = (slotType === "ram" || slotType === "storage") ? currentOpenPc[slotType + "s"][slotIndex] : currentOpenPc[slotType];
    
    // Create drawer modal
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "part-drawer-modal";
    
    const content = document.createElement("div");
    content.className = "modal-content";
    
    // Header
    const header = document.createElement("div");
    header.className = "panel-header";
    const slotLabel = (slotIndex !== null) ? `${slotType.toUpperCase()} (Slot ${slotIndex + 1})` : slotType.toUpperCase();
    header.innerHTML = `
        <h2>Sélectionner un composant : ${slotLabel}</h2>
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
            uninstallPart(slotType, slotIndex);
            document.body.removeChild(overlay);
        });
    }

    options.forEach(opt => {
        document.getElementById(`btn-install-part-${opt.id}`).addEventListener("click", () => {
            installPart(slotType, opt, slotIndex);
            document.body.removeChild(overlay);
        });
    });
}

function installPart(slotType, invItem, slotIndex = null) {
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
        if (currentOpenPc.rams && currentOpenPc.rams.some(r => r)) {
            const firstRam = currentOpenPc.rams.find(r => r);
            const ramComp = getComponentById(firstRam.partId);
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
        
        // RAM kit capacity check (must have at least one other empty slot)
        const isKit = comp.name.includes("(2x");
        if (isKit) {
            const otherSlotIndex = currentOpenPc.rams.findIndex((r, idx) => idx !== slotIndex && r === null);
            if (otherSlotIndex === -1) {
                showToast(`Incompatible : Ce kit de mémoire (2 barrettes) nécessite au moins 2 emplacements RAM libres sur la carte mère !`, "error");
                return;
            }
        }
    }
    else if (slotType === "storage") {
        if (currentOpenPc.motherboard) {
            const isNVMe = comp.specs.storageType === "NVMe M.2";
            const maxSlots = getMotherboardSlots(currentOpenPc.motherboard.partId);
            if (slotIndex < maxSlots.nvme) {
                if (!isNVMe) {
                    showToast(`Incompatible : Cet emplacement M.2 requiert un SSD de type NVMe M.2 (disque de type SATA/HDD fourni) !`, "error");
                    return;
                }
            } else {
                if (isNVMe) {
                    showToast(`Incompatible : Les emplacements SATA ne supportent pas les disques de type NVMe M.2 (requiert un HDD ou SSD SATA) !`, "error");
                    return;
                }
            }
        } else {
            // No motherboard: can only install SATA storage
            const isNVMe = comp.specs.storageType === "NVMe M.2";
            if (isNVMe) {
                showToast(`Incompatible : Installez d'abord une carte mère pour utiliser un slot M.2 NVMe !`, "error");
                return;
            }
        }
    }

    // Success install:
    // If there is already a part, uninstall first
    if (slotType === "ram" || slotType === "storage") {
        if (currentOpenPc[slotType + "s"][slotIndex]) {
            uninstallPart(slotType, slotIndex);
        }
        
        if (slotType === "ram" && comp.name.includes("(2x")) {
            const kitId = "kit-" + generateUniqueId();
            const otherSlotIndex = currentOpenPc.rams.findIndex((r, idx) => idx !== slotIndex && r === null);
            
            currentOpenPc.rams[slotIndex] = {
                partId: invItem.partId,
                condition: invItem.condition,
                kitId: kitId
            };
            currentOpenPc.rams[otherSlotIndex] = {
                partId: invItem.partId,
                condition: invItem.condition,
                kitId: kitId
            };
        } else {
            currentOpenPc[slotType + "s"][slotIndex] = {
                partId: invItem.partId,
                condition: invItem.condition
            };
        }
        
        // Keep single property synchronized
        if (slotType === "ram") {
            currentOpenPc.ram = currentOpenPc.rams.find(r => r !== null) || null;
        } else {
            currentOpenPc.storage = currentOpenPc.storages.find(s => s !== null) || null;
        }
    } else {
        if (currentOpenPc[slotType]) {
            uninstallPart(slotType);
        }
        currentOpenPc[slotType] = {
            partId: invItem.partId,
            condition: invItem.condition
        };
    }

    // Remove from inventory
    state.inventory = state.inventory.filter(i => i.id !== invItem.id);

    // Auto recalculate benchmark
    if (currentOpenPc.cpu && currentOpenPc.gpu && currentOpenPc.ram) {
        currentOpenPc.score = calculatePcBenchmark(
            currentOpenPc.cpu.partId,
            currentOpenPc.gpu.partId,
            currentOpenPc.ram.partId,
            1, 1,
            currentOpenPc.rams
        );
    } else {
        currentOpenPc.score = 0;
    }

    saveGame();
    updateActiveJobsRequirements();
    renderWorkbenchTab();
    showToast(`${comp.name} installé !`, "success");
}

function uninstallPart(slotType, slotIndex = null) {
    const installed = (slotType === "ram" || slotType === "storage") ? currentOpenPc[slotType + "s"][slotIndex] : currentOpenPc[slotType];
    if (installed) {
        // Clear slot and return to inventory
        if (slotType === "ram" || slotType === "storage") {
            if (slotType === "ram" && installed.kitId) {
                // Return EXACTLY ONE kit to inventory
                state.inventory.push({
                    id: generateUniqueId(),
                    partId: installed.partId,
                    condition: installed.condition,
                    pricePaid: getComponentById(installed.partId).price
                });
                
                // Clear all slots of this kit
                currentOpenPc.rams.forEach((r, idx) => {
                    if (r && r.kitId === installed.kitId) {
                        currentOpenPc.rams[idx] = null;
                    }
                });
                
                currentOpenPc.ram = currentOpenPc.rams.find(r => r !== null) || null;
            } else {
                state.inventory.push({
                    id: generateUniqueId(),
                    partId: installed.partId,
                    condition: installed.condition,
                    pricePaid: getComponentById(installed.partId).price
                });
                
                currentOpenPc[slotType + "s"][slotIndex] = null;
                if (slotType === "ram") {
                    currentOpenPc.ram = currentOpenPc.rams.find(r => r !== null) || null;
                } else {
                    currentOpenPc.storage = currentOpenPc.storages.find(s => s !== null) || null;
                    // Reset OS if no storage remains
                    if (!currentOpenPc.storage) {
                        window.isPcRunning = false;
                        closeVirtualOs();
                    }
                }
            }
        } else {
            // Return to inventory
            state.inventory.push({
                id: generateUniqueId(),
                partId: installed.partId,
                condition: installed.condition,
                pricePaid: getComponentById(installed.partId).price
            });
            
            currentOpenPc[slotType] = null;

            // Reset OS and running states on motherboard/cpu changes
            if (slotType === "motherboard" || slotType === "cpu") {
                window.isPcRunning = false;
                closeVirtualOs();
            }

            // Special child removal
            if (slotType === "motherboard") {
                // Motherboard uninstall drops CPU, cooler, GPU and ALL RAMs back to inventory
                const secondarySlots = ["cpu", "cooler", "gpu"];
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

                if (currentOpenPc.rams) {
                    const returnedKits = new Set();
                    currentOpenPc.rams.forEach(r => {
                        if (r) {
                            if (r.kitId) {
                                if (returnedKits.has(r.kitId)) return;
                                returnedKits.add(r.kitId);
                            }
                            state.inventory.push({
                                id: generateUniqueId(),
                                partId: r.partId,
                                condition: r.condition,
                                pricePaid: getComponentById(r.partId).price
                            });
                        }
                    });
                    currentOpenPc.rams = [];
                    currentOpenPc.ram = null;
                }

                // Motherboard uninstall also drops any NVMe SSD (M.2) plugged directly into the motherboard
                if (currentOpenPc.storages) {
                    const oldMbSlots = getMotherboardSlots(installed.partId);
                    for (let i = 0; i < oldMbSlots.nvme; i++) {
                        if (currentOpenPc.storages[i]) {
                            state.inventory.push({
                                id: generateUniqueId(),
                                partId: currentOpenPc.storages[i].partId,
                                condition: currentOpenPc.storages[i].condition,
                                pricePaid: getComponentById(currentOpenPc.storages[i].partId).price
                            });
                            currentOpenPc.storages[i] = null;
                        }
                    }
                    currentOpenPc.storage = currentOpenPc.storages.find(s => s !== null) || null;
                    if (!currentOpenPc.storage) {
                        window.isPcRunning = false;
                        closeVirtualOs();
                    }
                }
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
        }

        // Recalculate benchmark
        if (currentOpenPc.cpu && currentOpenPc.gpu && currentOpenPc.ram) {
            currentOpenPc.score = calculatePcBenchmark(
                currentOpenPc.cpu.partId,
                currentOpenPc.gpu.partId,
                currentOpenPc.ram.partId,
                1, 1,
                currentOpenPc.rams
            );
        } else {
            currentOpenPc.score = 0;
        }

        saveGame();
        updateActiveJobsRequirements();
        renderWorkbenchTab();
        showToast("Composant démonté et replacé en inventaire.", "info");
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
    const slots = ["case", "motherboard", "cpu", "cooler", "gpu", "psu"];
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

    if (currentOpenPc.rams) {
        const returnedKits = new Set();
        currentOpenPc.rams.forEach(r => {
            if (r) {
                if (r.kitId) {
                    if (returnedKits.has(r.kitId)) return;
                    returnedKits.add(r.kitId);
                }
                state.inventory.push({
                    id: generateUniqueId(),
                    partId: r.partId,
                    condition: r.condition,
                    pricePaid: getComponentById(r.partId).price
                });
            }
        });
    }

    if (currentOpenPc.storages) {
        currentOpenPc.storages.forEach(s => {
            if (s) {
                state.inventory.push({
                    id: generateUniqueId(),
                    partId: s.partId,
                    condition: s.condition,
                    pricePaid: getComponentById(s.partId).price
                });
            }
        });
    }

    const activeWb = state.workbenches.find(w => w.id === state.selectedWorkbenchId);
    activeWb.pc = null;
    currentOpenPc = null;
    window.isPcRunning = false;
    closeVirtualOs();

    saveGame();
    showToast("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !", "info");
    renderWorkbenchTab();
}

function putJobOnHoldFromWorkbench(job) {
    const wb = state.workbenches.find(w => w.pc && w.pc.orderId === job.id);
    if (wb) {
        // Sync PC back to job
        job.pc = wb.pc;
        wb.pc = null;
    }
    
    // Shut down PC running state if removing
    window.isPcRunning = false;
    closeVirtualOs();
    
    job.status = "on_hold";
    saveGame();
    showToast(`Mission "${job.subject}" mise en attente. Le PC a été rangé en réserve.`, "info");
    
    renderWorkbenchTab();
}

function openThermalPasteChoiceModal() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "paste-choice-modal";

    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.maxWidth = "400px";

    content.innerHTML = `
        <div class="panel-header">
            <h2>Choix de la pâte thermique</h2>
            <button class="os-window-close" id="btn-close-paste-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; display:flex; flex-direction:column; gap:12px; text-align:center">
            <p style="font-size:0.85rem; color:var(--text-secondary)">Sélectionnez le type de pâte thermique à appliquer sur le processeur :</p>
            <button class="btn-secondary" id="btn-apply-std-paste" style="width:100%">
                Pâte Thermique Standard (Gratuit, Illimité)
            </button>
            <button class="btn-primary glow-btn" id="btn-apply-lm-paste" style="width:100%; background:linear-gradient(135deg, var(--color-purple), #90f)">
                Métal Liquide Premium (Stock : ${state.liquidMetalCount} seringues)
            </button>
        </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    document.getElementById("btn-close-paste-modal").addEventListener("click", () => {
        overlay.remove();
    });

    document.getElementById("btn-apply-std-paste").addEventListener("click", () => {
        currentOpenPc.thermalPasteApplied = true;
        currentOpenPc.thermalPasteType = "standard";
        saveGame();
        updateActiveJobsRequirements();
        overlay.remove();
        renderWorkbenchTab();
    });

    document.getElementById("btn-apply-lm-paste").addEventListener("click", () => {
        if (state.liquidMetalCount > 0) {
            state.liquidMetalCount -= 1;
            currentOpenPc.thermalPasteApplied = true;
            currentOpenPc.thermalPasteType = "liquid_metal";
            saveGame();
            updateActiveJobsRequirements();
            overlay.remove();
            renderWorkbenchTab();
            showToast("Métal Liquide Premium appliqué avec succès sur le CPU !", "success");
        } else {
            showToast("Plus de seringues de Métal Liquide en stock !", "error");
        }
    });
}
