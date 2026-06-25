/* ==========================================
   PC ARCHITECT TYCOON - SHOWROOM PRESTIGE UI
   ========================================== */

import { state, saveGame, generateUniqueId } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";
import { t } from "../translations.js";

export function renderShowroomTab() {
    const pane = document.getElementById("pane-showroom");
    pane.innerHTML = "";

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 340px";
    container.style.gap = "1.5rem";
    container.style.height = "100%";

    // Left Panel: Showroom Slots (Max 3)
    const slotsPanel = document.createElement("div");
    slotsPanel.className = "glass-panel";
    slotsPanel.style.padding = "1.5rem";
    slotsPanel.style.overflowY = "auto";

    // Unlocking criteria for slots
    const slotCriteria = [
        { id: 0, requiredLevel: 1, unlocked: true },
        { id: 1, requiredLevel: 3, unlocked: state.level >= 3 },
        { id: 2, requiredLevel: 6, unlocked: state.level >= 6 }
    ];

    // Ensure state.showroomPcs is initialized as an array of size 3
    if (!state.showroomPcs || !Array.isArray(state.showroomPcs)) {
        state.showroomPcs = [null, null, null];
    } else if (state.showroomPcs.length < 3) {
        while (state.showroomPcs.length < 3) {
            state.showroomPcs.push(null);
        }
    }

    let slotsHtml = "";
    slotCriteria.forEach((slot, idx) => {
        const pcItem = state.showroomPcs[idx];
        
        if (!slot.unlocked) {
            slotsHtml += `
                <div style="background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:10px; padding:2rem; text-align:center; opacity:0.6; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem">🔒</span>
                    <div style="font-weight:700; font-size:0.95rem">${t("showroom.locked")}</div>
                    <p style="font-size:0.75rem; color:var(--text-muted)">${t("showroom.lockedSub", { level: slot.requiredLevel })}</p>
                </div>
            `;
        } else if (pcItem === null) {
            slotsHtml += `
                <div style="background:rgba(255,255,255,0.02); border:1.5px dashed rgba(189,0,255,0.25); border-radius:10px; padding:2rem; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem; filter:drop-shadow(0 0 10px rgba(189,0,255,0.3))">🏆</span>
                    <div style="font-weight:700; font-size:0.95rem">${t("showroom.empty", { num: idx + 1 })}</div>
                    <p style="font-size:0.75rem; color:var(--text-muted); max-width:320px">${t("showroom.emptySub")}</p>
                    <button class="btn-primary glow-btn" style="background:linear-gradient(135deg, var(--color-purple), #90f); padding:6px 12px; font-size:0.75rem; box-shadow:none" id="btn-expose-pc-${idx}">
                        ${t("showroom.btnExpose")}
                    </button>
                </div>
            `;
        } else {
            // Occupied slot card
            const noneLabel = state.language === "en" ? "None" : "Aucun";
            slotsHtml += `
                <div class="part-card" style="padding:1.2rem; min-height:160px; display:flex; flex-direction:row; gap:1.5rem; justify-content:space-between; align-items:center; border-color:rgba(189,0,255,0.3)">
                    <div style="display:flex; flex-direction:column; gap:8px; flex:1">
                        <div style="display:flex; align-items:center; gap:10px">
                            <span class="status-badge on" style="background:rgba(189,0,255,0.15); color:var(--color-purple); font-size:0.6rem">${t("showroom.active", { num: idx + 1 })}</span>
                            <span class="part-price" style="font-size:1.15rem; color:var(--color-cyan)">★ ${pcItem.pc.score} ${t("showroom.prestige")}</span>
                        </div>
                        <div style="font-weight:700; font-size:1.1rem; color:var(--text-primary)">${pcItem.name}</div>
                        <div style="font-size:0.75rem; color:var(--text-secondary); display:grid; grid-template-columns:1fr 1fr; gap:4px">
                            <div><strong>CPU :</strong> ${getComponentById(pcItem.pc.cpu?.partId)?.name || noneLabel}</div>
                            <div><strong>GPU :</strong> ${getComponentById(pcItem.pc.gpu?.partId)?.name || noneLabel}</div>
                            <div><strong>RAM :</strong> ${getComponentById(pcItem.pc.ram?.partId)?.name || noneLabel}</div>
                            <div><strong>Boîtier :</strong> ${getComponentById(pcItem.pc.case?.partId)?.name || noneLabel}</div>
                        </div>
                    </div>
                    <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.15); font-size:0.75rem; padding:6px 12px; align-self:center" id="btn-retrieve-pc-${idx}">
                        ${t("showroom.btnRetrieve")}
                    </button>
                </div>
            `;
        }
    });

    slotsPanel.innerHTML = `
        <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-purple)">${t("showroom.title")}</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem">${slotsHtml}</div>
    `;

    // Right Panel: Prestige and Sponsor details
    const prestigePanel = document.createElement("div");
    prestigePanel.className = "glass-panel";
    prestigePanel.style.padding = "1.5rem";
    prestigePanel.style.overflowY = "auto";

    // Calculations
    const activeShowroomPcs = state.showroomPcs.filter(p => p !== null);
    const totalPrestigeScore = activeShowroomPcs.reduce((sum, item) => sum + (item.pc.score || 0), 0);
    const prestigeDiscountPercent = Math.min(Math.floor(totalPrestigeScore / 2500), 20); // 1% off per 2500 score, max 20%
    const nextMilestone = (Math.floor(totalPrestigeScore / 2500) + 1) * 2500;
    const progressPercent = Math.min((totalPrestigeScore % 2500) / 2500 * 100, 100);

    let sponsorsHtml = "";
    if (prestigeDiscountPercent > 0) {
        const psLabel = state.language === "en" ? "Power Supplies & Cases" : "Alimentations & Boîtiers";
        sponsorsHtml = `
            <div style="display:flex; flex-direction:column; gap:6px; font-size:0.8rem; color:var(--text-secondary)">
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>ASUS ROG & Prime</span><span class="text-emerald" style="font-weight:600">-${prestigeDiscountPercent}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>Intel & AMD processors</span><span class="text-emerald" style="font-weight:600">-${prestigeDiscountPercent}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>NVIDIA GeForce & Radeon</span><span class="text-emerald" style="font-weight:600">-${prestigeDiscountPercent}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>Corsair, G.Skill, Kingston</span><span class="text-emerald" style="font-weight:600">-${prestigeDiscountPercent}%</span>
                </div>
                <div style="display:flex; justify-content:space-between">
                    <span>${psLabel}</span><span class="text-emerald" style="font-weight:600">-${prestigeDiscountPercent}%</span>
                </div>
            </div>
        `;
    } else {
        sponsorsHtml = `
            <div style="text-align:center; padding:1.2rem; color:var(--text-muted); font-size:0.75rem; border:1px dashed var(--border-color); border-radius:6px">
                ${t("showroom.status.noSponsors")}
            </div>
        `;
    }

    prestigePanel.innerHTML = `
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-cyan)">${t("showroom.status.title")}</h2>
        
        <div style="background:rgba(0,0,0,0.15); border:1px solid var(--border-color); border-radius:8px; padding:12px; margin-bottom:1.5rem">
            <div class="stat-label">${t("showroom.status.scoreLabel")}</div>
            <div style="font-size:2rem; font-weight:800; color:var(--color-cyan); font-family:var(--font-mono); text-shadow:0 0 10px rgba(0,240,255,0.25)">${totalPrestigeScore} ${t("showroom.prestige")}</div>
            
            <div class="xp-bar-container" style="height:6px; margin-top:10px; margin-bottom:4px">
                <div class="xp-bar-fill" style="width: ${progressPercent}%; background:linear-gradient(90deg, var(--color-cyan), var(--color-purple))"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:var(--text-muted)">
                <span>${t("showroom.status.milestone")}</span>
                <span>${totalPrestigeScore} / ${nextMilestone} Pts</span>
            </div>
        </div>

        <div style="background:rgba(0, 255, 136, 0.03); border:1px solid rgba(0, 255, 136, 0.2); border-radius:8px; padding:12px; margin-bottom:1.5rem">
            <div class="stat-label" style="color:var(--color-emerald)">Remise Permanente Débloquée</div>
            <div style="font-size:2.2rem; font-weight:800; color:var(--color-emerald); font-family:var(--font-mono)">-${prestigeDiscountPercent}%</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px; line-height:1.4">Appliqué automatiquement sur l'achat de tous les composants de la boutique en ligne !</p>
        </div>

        <div class="job-box" style="margin-top:0">
            <div class="job-box-title" style="color:var(--color-purple)">Sponsors Permanent Actifs</div>
            ${sponsorsHtml}
        </div>
    `;

    container.appendChild(slotsPanel);
    container.appendChild(prestigePanel);
    pane.appendChild(container);

    // Bind slot events
    slotCriteria.forEach((slot, idx) => {
        if (!slot.unlocked) return;
        const pcItem = state.showroomPcs[idx];
        
        if (pcItem === null) {
            document.getElementById(`btn-expose-pc-${idx}`).addEventListener("click", () => {
                openExposePCSelector(idx);
            });
        } else {
            document.getElementById(`btn-retrieve-pc-${idx}`).addEventListener("click", () => {
                retrievePCFromShowroom(idx);
            });
        }
    });
}

function openExposePCSelector(slotIdx) {
    // Collect all eligible custom PCs to expose:
    // 1. PCs on workbenches that are custom and NOT linked to any order
    const eligibleWorkbenchPCs = [];
    state.workbenches.forEach(wb => {
        if (wb.pc && !wb.pc.orderId) {
            // Must have a completed benchmark to show its score
            if (wb.pc.score && wb.pc.score > 0) {
                eligibleWorkbenchPCs.push({
                    source: "workbench",
                    workbenchId: wb.id,
                    name: wb.pc.name || `PC de l'Établi ${wb.id}`,
                    score: wb.pc.score,
                    pc: wb.pc
                });
            }
        }
    });

    // 2. Flip PCs currently in inventory
    const eligibleInventoryPCs = [];
    state.inventory.forEach(item => {
        if (item.type === "pc_flip" && item.pc && item.pc.score && item.pc.score > 0) {
            eligibleInventoryPCs.push({
                source: "inventory",
                inventoryId: item.id,
                name: item.name || "PC d'occasion réparé",
                score: item.pc.score,
                pc: item.pc
            });
        }
    });

    const options = [...eligibleWorkbenchPCs, ...eligibleInventoryPCs];

    // Create selection modal
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "expose-pc-selector-modal";

    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.maxWidth = "550px";

    const header = document.createElement("div");
    header.className = "panel-header";
    header.innerHTML = `
        <h2>${t("showroom.modal.title", { num: slotIdx + 1 })}</h2>
        <button class="os-window-close" id="btn-close-expose-modal">×</button>
    `;

    const body = document.createElement("div");
    body.className = "modal-body";
    body.style.padding = "1.5rem";

    let listHtml = "";
    if (options.length === 0) {
        listHtml = `
            <div style="text-align:center; padding:2rem; color:var(--text-muted)">
                <span style="font-size:2.5rem">⚠️</span>
                <p style="margin-top:10px; font-weight:600">${state.language === "en" ? "No eligible PCs found." : "Aucun PC éligible trouvé."}</p>
                <p style="font-size:0.75rem; margin-top:4px">${t("showroom.modal.empty")}</p>
            </div>
        `;
    } else {
        const noneLabel = state.language === "en" ? "None" : "Aucun";
        const wbLabel = state.language === "en" ? "Workbench" : "Établi";
        const stockLabel = state.language === "en" ? "Stock" : "Stock";
        const sourceLabel = state.language === "en" ? "Source:" : "Source :";
        listHtml = `
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:12px">${t("showroom.modal.sub")}</p>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${options.map((opt, oIdx) => {
                    const cpu = getComponentById(opt.pc.cpu?.partId)?.name || noneLabel;
                    const gpu = getComponentById(opt.pc.gpu?.partId)?.name || noneLabel;
                    const srcLabel = opt.source === "workbench" ? `${wbLabel} ${opt.workbenchId}` : stockLabel;
                    return `
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center; border-color:var(--border-color)">
                            <div style="display:flex; flex-direction:column; gap:3px">
                                <div style="font-weight:700; font-size:0.9rem">${opt.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-muted)">CPU : ${cpu} | GPU : ${gpu}</div>
                                <div style="font-size:0.65rem; color:var(--color-purple)">${sourceLabel} ${srcLabel}</div>
                            </div>
                            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:5px">
                                <span class="text-cyan font-mono" style="font-weight:700; font-size:0.9rem">★ ${opt.score} ${t("showroom.prestige")}</span>
                                <button class="btn-buy" id="btn-select-expose-${oIdx}">${t("showroom.modal.btnExpose")}</button>
                            </div>
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

    document.getElementById("btn-close-expose-modal").addEventListener("click", () => {
        overlay.remove();
    });

    options.forEach((opt, oIdx) => {
        document.getElementById(`btn-select-expose-${oIdx}`).addEventListener("click", () => {
            // Apply expose action
            state.showroomPcs[slotIdx] = {
                id: "showroom-" + generateUniqueId(),
                name: opt.name,
                pc: opt.pc
            };

            // Remove PC from original source
            if (opt.source === "workbench") {
                const wb = state.workbenches.find(w => w.id === opt.workbenchId);
                wb.pc = null;
            } else if (opt.source === "inventory") {
                state.inventory = state.inventory.filter(i => i.id !== opt.inventoryId);
            }

            saveGame();
            overlay.remove();
            
            const tExposed = state.language === "en" ? `PC "${opt.name}" placed in prestige showcase! Your store discounts increased!` : `PC "${opt.name}" placé en vitrine de prestige ! Vos remises en magasin augmentent !`;
            showToast(tExposed, "success");
            
            // Refresh HUD (prices might have changed)
            window.updateHud();
            
            // Refresh Showroom view
            renderShowroomTab();
        });
    });
}

function retrievePCFromShowroom(slotIdx) {
    const pcItem = state.showroomPcs[slotIdx];
    if (!pcItem) return;

    // Convert PC back into a pc_flip inventory item
    const flipPcItem = {
        id: "pc-flip-" + generateUniqueId(),
        partId: "special-pc-case",
        type: "pc_flip",
        name: pcItem.name,
        condition: "used",
        pc: pcItem.pc,
        pricePaid: 0
    };

    state.inventory.push(flipPcItem);
    state.showroomPcs[slotIdx] = null;

    saveGame();
    
    const tRetrieved = state.language === "en" ? `PC "${pcItem.name}" retrieved from showroom and returned to your inventory.` : `PC "${pcItem.name}" retiré du showroom et renvoyé dans votre inventaire.`;
    showToast(tRetrieved, "info");
    
    // Refresh HUD (prices might have adjusted back)
    window.updateHud();
    
    // Refresh Showroom view
    renderShowroomTab();
}