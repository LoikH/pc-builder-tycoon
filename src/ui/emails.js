/* ==========================================
   PC ARCHITECT TYCOON - EMAILS & CLIENTS UI
   ========================================== */

import { state, saveGame, addMoney, addXp, updateActiveJobsRequirements } from "../state.js";
import { getComponentById } from "../components.js";
import { showToast } from "../main.js";

let selectedJobId = null;

export function renderEmailsTab() {
    const pane = document.getElementById("pane-emails");
    pane.innerHTML = "";

    const container = document.createElement("div");
    container.className = "emails-container";

    // 1. LEFT COLUMN: Email List
    const emailListPanel = document.createElement("div");
    emailListPanel.className = "glass-panel";
    emailListPanel.innerHTML = `
        <div class="panel-header">
            <h2>Boîte de Réception</h2>
            <span class="nav-badge" style="position:static" id="email-count">${state.activeJobs.length}</span>
        </div>
        <div class="email-list" id="email-list-items"></div>
    `;
    container.appendChild(emailListPanel);

    // 2. RIGHT COLUMN: Details View
    const emailViewPanel = document.createElement("div");
    emailViewPanel.className = "glass-panel";
    emailViewPanel.id = "email-detail-panel";
    emailViewPanel.innerHTML = `
        <div class="email-view-empty">
            <span style="font-size: 3rem">✉️</span>
            <p>Sélectionnez un e-mail pour lire les détails du projet.</p>
        </div>
    `;
    container.appendChild(emailViewPanel);
    pane.appendChild(container);

    // Populate List
    populateEmailList();
}

function populateEmailList() {
    const listContainer = document.getElementById("email-list-items");
    listContainer.innerHTML = "";

    if (state.activeJobs.length === 0) {
        listContainer.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun message.</div>`;
        return;
    }

    state.activeJobs.forEach(job => {
        const item = document.createElement("div");
        item.className = `email-item ${job.status === "available" ? "unread" : ""} ${selectedJobId === job.id ? "selected" : ""}`;
        
        let badgeColor = "var(--color-cyan)";
        let badgeText = "Nouveau";
        
        if (job.status === "active") {
            badgeColor = "var(--color-purple)";
            badgeText = "En Cours";
        } else if (job.status === "ready") {
            badgeColor = "var(--color-emerald)";
            badgeText = "Prêt";
        } else if (job.status === "on_hold") {
            badgeColor = "var(--color-amber)";
            badgeText = "En Attente";
        }

        item.innerHTML = `
            <div class="email-sender">
                <span>${job.clientName}</span>
                <span class="status-badge" style="background:${badgeColor}20; color:${badgeColor}; font-size:0.6rem; padding:1px 4px">${badgeText}</span>
            </div>
            <div class="email-subject">${job.subject}</div>
            <div class="email-snippet">${job.text.substring(0, 45)}...</div>
        `;

        item.addEventListener("click", () => {
            selectedJobId = job.id;
            populateEmailList();
            renderEmailDetails(job);
        });

        listContainer.appendChild(item);
    });

    // Handle background active job check trigger
    updateActiveJobsRequirements();
}

function renderEmailDetails(job) {
    const panel = document.getElementById("email-detail-panel");
    
    // Check if parts cost are calculated
    let partsSpent = 0;
    if (job.pc) {
        Object.keys(job.pc).forEach(key => {
            if (job.pc[key] && job.pc[key].partId && job.pc[key].condition !== "used") {
                const comp = getComponentById(job.pc[key].partId);
                if (comp) partsSpent += comp.price;
            }
        });
    }

    panel.innerHTML = `
        <div class="email-details">
            <div class="email-details-header">
                <div class="email-details-title">${job.subject}</div>
                <div class="email-meta">
                    <span>De : <strong>${job.clientName}</strong></span>
                    <span>Budget pièces : <strong class="text-emerald">${job.budget}$</strong></span>
                </div>
            </div>
            <div class="email-body">${job.text}</div>
            
            <div class="job-box">
                <div class="job-box-title">Objectifs du projet</div>
                <ul class="job-reqs">
                    ${job.requirements.map(req => `
                        <li class="${req.done ? 'done text-emerald' : 'pending text-muted'}">
                            ${req.desc}
                        </li>
                    `).join('')}
                </ul>

                <div class="job-financials">
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Récompense</div>
                        <div class="text-emerald font-mono" style="font-size:1.1rem; font-weight:700">${job.reward.toFixed(2)}$</div>
                    </div>
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Expérience</div>
                        <div class="text-cyan font-mono" style="font-size:1.1rem; font-weight:700">+${job.xpReward} XP</div>
                    </div>
                    ${job.type === "build" ? `
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Dépenses Pièces</div>
                        <div class="${partsSpent <= job.budget ? 'text-emerald' : 'text-crimson'} font-mono" style="font-size:1.1rem; font-weight:700">${partsSpent}$ / ${job.budget}$</div>
                    </div>
                    ` : ''}
                </div>
            </div>

            <div class="job-actions" id="job-actions-area"></div>
        </div>
    `;

    const actionsArea = document.getElementById("job-actions-area");

    if (job.status === "available" || job.status === "on_hold") {
        actionsArea.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.8rem; color:var(--text-secondary)">
                    ${job.status === "on_hold" ? "Ré-attribuer et reprendre ce projet sur un établi libre :" : "Attribuer ce projet à un établi libre :"}
                </p>
                <div style="display:flex; gap:10px">
                    ${state.workbenches.map(wb => {
                        if (!wb.unlocked) return "";
                        const isBusy = wb.pc !== null;
                        return `
                            <button class="btn-secondary" style="flex:1" ${isBusy ? "disabled" : ""} id="btn-assign-wb-${wb.id}">
                                Établi ${wb.id} ${isBusy ? "(Occupé)" : "(Libre)"}
                            </button>
                        `;
                    }).join('')}
                </div>
                ${job.status === "available" ? `
                <button class="btn-secondary text-crimson" style="margin-top:5px; border-color:rgba(255,0,85,0.2)" id="btn-reject-job">
                    Refuser la mission
                </button>
                ` : ''}
            </div>
        `;

        // Add event listeners for assignments
        state.workbenches.forEach(wb => {
            if (!wb.unlocked || wb.pc !== null) return;
            document.getElementById(`btn-assign-wb-${wb.id}`).addEventListener("click", () => {
                acceptJob(job, wb.id);
            });
        });

        if (job.status === "available") {
            document.getElementById("btn-reject-job").addEventListener("click", () => {
                rejectJob(job);
            });
        }

    } else if (job.status === "active") {
        actionsArea.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.85rem; color:var(--text-amber)">
                    Le PC est en cours de montage sur l'Établi. Remplissez tous les objectifs à l'établi pour facturer le client.
                </p>
                <button class="btn-secondary text-amber" style="border-color:rgba(255,170,0,0.25); width:100%" id="btn-put-hold-job">
                    Ranger le PC et mettre la mission en attente (Libérer l'établi)
                </button>
            </div>
        `;

        document.getElementById("btn-put-hold-job").addEventListener("click", () => {
            putJobOnHold(job);
        });

    } else if (job.status === "ready") {
        actionsArea.innerHTML = `
            <button class="btn-primary glow-btn" id="btn-complete-job" style="width:100%">
                Livrer le PC et encaisser la facture (${job.reward.toFixed(2)}$)
            </button>
        `;
        document.getElementById("btn-complete-job").addEventListener("click", () => {
            completeJob(job);
        });
    }
}

function acceptJob(job, workbenchId) {
    const wb = state.workbenches.find(w => w.id === workbenchId);
    if (wb && wb.pc === null) {
        job.status = "active";
        // Connect the PC object to the workbench
        wb.pc = job.pc;
        wb.pc.orderId = job.id; // link back to job
        
        saveGame();
        showToast(job.status === "on_hold" ? `PC d'occasion repris sur l'Établi ${workbenchId} !` : `Projet accepté et PC placé sur l'Établi ${workbenchId} !`, "success");
        
        // Refresh UI
        renderEmailsTab();
        updateActiveJobsRequirements();
    }
}

function rejectJob(job) {
    state.activeJobs = state.activeJobs.filter(j => j.id !== job.id);
    selectedJobId = null;
    saveGame();
    showToast("Mission déclinée.", "info");
    renderEmailsTab();
}

function putJobOnHold(job) {
    const wb = state.workbenches.find(w => w.pc && w.pc.orderId === job.id);
    if (wb) {
        // Sync PC back to job
        job.pc = wb.pc;
        wb.pc = null;
    }
    
    // Shut down PC running state if removing
    window.isPcRunning = false;
    
    job.status = "on_hold";
    saveGame();
    showToast(`Mission "${job.subject}" mise en attente. Le PC a été rangé en réserve.`, "info");
    
    renderEmailsTab();
}

function completeJob(job) {
    // 1. Remove PC from workbench
    state.workbenches.forEach(wb => {
        if (wb.pc && wb.pc.orderId === job.id) {
            wb.pc = null;
        }
    });

    // 2. Pay reward
    addMoney(job.reward);

    // 3. Add XP and check level ups
    const levelResult = addXp(job.xpReward);
    
    // 4. Remove job
    state.activeJobs = state.activeJobs.filter(j => j.id !== job.id);
    selectedJobId = null;
    state.completedJobsCount += 1;

    saveGame();
    
    if (levelResult.levelUp) {
        showToast(`NIVEAU SUPÉRIEUR ! Vous êtes maintenant niveau ${levelResult.currentLevel} ! De nouvelles pièces sont disponibles en boutique !`, "success");
    } else {
        showToast(`Mission terminée ! +${job.reward}$ et +${job.xpReward} XP`, "success");
    }

    // Refresh HUD
    window.updateHud();
    
    // Refresh Emails tab
    renderEmailsTab();
}
