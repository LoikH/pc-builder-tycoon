/* ==========================================
   PC ARCHITECT TYCOON - GAME MAIN ENTRANCE
   ========================================== */

import { state, loadGame, saveGame, processNextDay, getRequiredXpForLevel, resetGame } from "./state.js";
import { renderEmailsTab } from "./ui/emails.js";
import { renderWorkbenchTab } from "./ui/workbench.js";
import { renderShopTab } from "./ui/shop.js";
import { renderInventoryTab } from "./ui/inventory.js";
import { renderBargainBinTab, resolveFlipSales } from "./ui/bargainbin.js";
import { renderShowroomTab } from "./ui/showroom.js";

// Active Tab tracking
let activeTab = "emails";

// TOAST NOTIFICATIONS UTILITY
export function showToast(message, type = "info") {
    const container = document.getElementById("notification-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let icon = "ℹ️";
    if (type === "success") icon = "✅";
    else if (type === "error") icon = "❌";
    else if (type === "warning") icon = "⚠️";

    toast.innerHTML = `
        <span style="font-size:1.1rem">${icon}</span>
        <span class="toast-msg">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger transition
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// UPDATE TOP HUD COUNTERS
export function updateHud() {
    document.getElementById("hud-level").textContent = state.level;
    document.getElementById("hud-money").textContent = `${state.money.toLocaleString("fr-FR", { minimumFractionDigits: 2 })}$`;
    document.getElementById("hud-day").textContent = `Jour ${state.day}`;

    // XP Gauge
    const requiredXp = getRequiredXpForLevel(state.level);
    const xpPercent = Math.min((state.xp / requiredXp) * 100, 100);
    document.getElementById("hud-xp-fill").style.width = `${xpPercent}%`;
    document.getElementById("hud-xp-text").textContent = `${state.xp} / ${requiredXp} XP`;

    // Email Badge
    const unreadEmailsCount = state.activeJobs.filter(j => j.status === "available" || j.status === "ready").length;
    const emailBadge = document.getElementById("badge-emails");
    if (unreadEmailsCount > 0) {
        emailBadge.style.display = "block";
        emailBadge.textContent = unreadEmailsCount;
    } else {
        emailBadge.style.display = "none";
    }
}

// SWITCH VIEWS TAB
function switchTab(tabId) {
    activeTab = tabId;

    // Toggle nav active classes
    document.querySelectorAll(".sidebar .nav-item").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Toggle panes
    document.querySelectorAll(".viewport .tab-pane").forEach(pane => {
        if (pane.id === `pane-${tabId}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    // Render active tab view
    if (tabId === "emails") renderEmailsTab();
    else if (tabId === "workbench") renderWorkbenchTab();
    else if (tabId === "shop") renderShopTab();
    else if (tabId === "inventory") renderInventoryTab();
    else if (tabId === "bargainbin") renderBargainBinTab();
    else if (tabId === "showroom") renderShowroomTab();

    saveGame();
}

export function showDailyEventModal() {
    const event = state.currentEvent;
    if (!event) return;

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "daily-event-modal";

    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.maxWidth = "500px";
    content.style.border = "2px solid var(--color-purple)";
    content.style.boxShadow = "0 0 20px rgba(189, 0, 255, 0.2)";

    content.innerHTML = `
        <div class="panel-header" style="background:rgba(189, 0, 255, 0.1); border-bottom:1px solid rgba(189, 0, 255, 0.3)">
            <h2 style="color:var(--text-primary); display:flex; align-items:center; gap:8px">
                📰 Tech News Flash
            </h2>
            <button class="os-window-close" id="btn-close-event-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; text-align:center; display:flex; flex-direction:column; gap:15px">
            <h3 style="color:var(--color-amber); font-size:1.3rem; font-weight:700">${event.title}</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--text-primary)">
                ${event.text}
            </p>
            <button class="btn-primary glow-btn" id="btn-ok-event-modal" style="width:100%; margin-top:10px">
                Compris !
            </button>
        </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    const closeFn = () => {
        overlay.remove();
    };

    content.querySelector("#btn-close-event-modal").addEventListener("click", closeFn);
    content.querySelector("#btn-ok-event-modal").addEventListener("click", closeFn);
}

// NEXT DAY SEQUENCE
function handleEndDay() {
    // 1. Resolve listed PC flips first
    const salesResult = resolveFlipSales();

    // 2. Roll calendar, deliver orders, trigger new jobs
    const dayResult = processNextDay();

    // Update HUD
    updateHud();

    // Trigger Notification Summary
    let summaryMsg = `Journée terminée !`;
    if (dayResult.deliveriesCount > 0) {
        summaryMsg += ` / ${dayResult.deliveriesCount} Colis de pièces livrés.`;
    }
    if (dayResult.newJobsCount > 0) {
        summaryMsg += ` / ${dayResult.newJobsCount} Nouveaux e-mails de clients reçus.`;
    }
    if (salesResult.soldCount > 0) {
        summaryMsg += ` / Flip vendu : +${salesResult.totalSales}$ sur BargainBin !`;
    }
    if (dayResult.expiredCount > 0) {
        summaryMsg += ` / ⚠️ [ANNULATION] ${dayResult.expiredCount} contrat(s) urgent(s) annulé(s) par le client (délai dépassé) !`;
    }

    showToast(summaryMsg, dayResult.expiredCount > 0 ? "warning" : "success");

    // Re-render current tab to show changes (like new delivery packages or emails)
    switchTab(activeTab);

    // Show daily news event modal if any is active
    setTimeout(() => {
        showDailyEventModal();
    }, 500);
}

export function showHelpModal() {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.id = "game-help-modal";

    const content = document.createElement("div");
    content.className = "modal-content";
    content.style.maxWidth = "650px";
    content.style.maxHeight = "90vh";
    content.style.border = "1.5px solid var(--color-purple)";
    content.style.boxShadow = "0 0 20px rgba(189, 0, 255, 0.2)";

    content.innerHTML = `
        <div class="panel-header" style="background:rgba(189, 0, 255, 0.1); border-bottom:1px solid rgba(189, 0, 255, 0.3)">
            <h2 style="color:var(--text-primary); display:flex; align-items:center; gap:8px">
                🖥️ PC Architect Tycoon - Scénario & Aide
            </h2>
            <button class="os-window-close" id="btn-close-help-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; overflow-y:auto; display:flex; flex-direction:column; gap:15px; font-size:0.88rem; line-height:1.5; text-align:left">
            <div>
                <h3 style="color:var(--color-purple); font-size:1.05rem; font-weight:700; margin-bottom:5px">📖 Le Scénario</h3>
                <p style="color:var(--text-secondary)">
                    Vous commencez votre aventure en tant que jeune monteur de PC indépendant dans un modeste atelier cyberpunk. Votre objectif est de développer votre notoriété (Niveau d'XP), de fructifier votre budget, de débloquer de nouveaux composants de pointe et de bâtir l'atelier le plus renommé de la ville !
                </p>
            </div>

            <div style="border-top:1px dashed var(--border-color); padding-top:10px">
                <h3 style="color:var(--color-cyan); font-size:1.05rem; font-weight:700; margin-bottom:8px">🎮 Mécaniques Clés du Jeu</h3>
                <ul style="list-style-type:none; display:flex; flex-direction:column; gap:10px; padding-left:0">
                    <li>
                        <strong>📧 Boîte de Réception (Contrats & Urgences) :</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">Lisez vos mails pour accepter des missions variées (virus, mises à niveau, diagnostics ou montages sur mesure). Attention aux contrats marqués <strong>🚨 Urgent 24h</strong> : ils expirent et s'annulent dès la fin de la journée si vous ne les livrez pas à temps !</p>
                    </li>
                    <li>
                        <strong>🔧 Établi de Montage (Simulateur Matériel) :</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">Installez les pièces (Boîtier, Carte Mère, CPU, Cooler, RAM, GPU, PSU, Storage). Câblez la machine, appliquez de la pâte thermique (Standard ou <strong>Métal Liquide 🔥</strong>) et démarrez l'ordinateur. Installez le système d'exploitation et lancez le <strong>3D Benchmark</strong> sous <strong>VirtualOS</strong> pour valider les performances !</p>
                    </li>
                    <li>
                        <strong>🛒 Boutique de Pièces (Fluctuations du Marché) :</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">Commandez vos composants en livraison Standard (1 jour) ou Express (instantané). Restez à l'affût des <strong>Tech News 📰</strong> du matin : des crises mondiales de silicium, des inondations ou le Black Friday feront fluctuer drastiquement les prix du marché !</p>
                    </li>
                    <li>
                        <strong>🔄 BargainBin & Négociations :</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">Achetez des PC en panne à bas coût, réparez-les, et revendez-les (flips). Vous recevrez des offres d'achat fermes ou des propositions de négociation le matin. Libre à vous d'accepter, de refuser, ou de contre-proposer un prix au plus juste !</p>
                    </li>
                    <li>
                        <strong>🏆 Showroom de Prestige :</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">Exposez vos PC libres aux scores de benchmark légendaires. Votre prestige cumulé débloque des sponsors officiels et vous offre des <strong>remises permanentes cumulables (jusqu'à -20%)</strong> sur toutes les pièces de la boutique !</p>
                    </li>
                </ul>
            </div>

            <button class="btn-primary glow-btn" id="btn-ok-help-modal" style="width:100%; margin-top:10px">
                C'est parti !
            </button>
        </div>
    `;

    overlay.appendChild(content);
    document.body.appendChild(overlay);

    const closeFn = () => {
        overlay.remove();
        if (!state.hasSeenIntro) {
            state.hasSeenIntro = true;
            saveGame();
        }
    };

    content.querySelector("#btn-close-help-modal").addEventListener("click", closeFn);
    content.querySelector("#btn-ok-help-modal").addEventListener("click", closeFn);
}

// INIT PROGRAM ON DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
    // Load existing game progress
    loadGame();

    // Link global utility so sub-js files can trigger update hud
    window.updateHud = updateHud;

    // Set HUD initial counts
    updateHud();

    // Add navigation click events
    document.querySelectorAll(".sidebar .nav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const tab = btn.getAttribute("data-tab");
            switchTab(tab);
        });
    });

    // End Day button click
    document.getElementById("btn-next-day").addEventListener("click", handleEndDay);

    // Help / Scenario click
    document.getElementById("btn-show-help").addEventListener("click", showHelpModal);

    // Export save-state click
    document.getElementById("btn-export-save").addEventListener("click", () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `pc_architect_save_jour_${state.day}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("Sauvegarde exportée avec succès !", "success");
    });

    // Import save-state click
    document.getElementById("btn-import-save").addEventListener("click", () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".json";
        
        fileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedState = JSON.parse(event.target.result);
                    // Minimal validation to verify it's a valid save state
                    if (importedState.money !== undefined && importedState.level !== undefined && importedState.inventory !== undefined) {
                        localStorage.setItem("pc_architect_tycoon_save", JSON.stringify(importedState));
                        showToast("Sauvegarde importée avec succès ! Rechargement...", "success");
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    } else {
                        showToast("Erreur : Le fichier de sauvegarde est invalide !", "error");
                    }
                } catch (err) {
                    showToast("Erreur de lecture du fichier de sauvegarde !", "error");
                }
            };
            reader.readAsText(file);
        });

        fileInput.click();
    });

    // Reset game click with beautiful confirm prompt
    document.getElementById("btn-reset-game").addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        overlay.id = "reset-confirm-modal";

        const content = document.createElement("div");
        content.className = "modal-content";
        content.style.maxWidth = "400px";
        content.style.border = "1.5px solid var(--color-crimson)";
        content.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.2)";

        content.innerHTML = `
            <div class="panel-header" style="background:rgba(255, 0, 85, 0.1); border-bottom:1px solid rgba(255, 0, 85, 0.3)">
                <h2 style="color:var(--text-primary)">⚠️ Réinitialiser la Partie ?</h2>
                <button class="os-window-close" id="btn-close-reset-modal">×</button>
            </div>
            <div class="modal-body" style="padding:1.5rem; text-align:center; display:flex; flex-direction:column; gap:12px">
                <p style="font-size:0.88rem; line-height:1.5; color:var(--text-primary)">
                    Êtes-vous certain de vouloir réinitialiser complètement votre partie ?<br><br>
                    <strong style="color:var(--color-crimson)">Cette action effacera définitivement toute votre progression actuelle (Cash, Niveau, Inventaire, Showroom) !</strong>
                </p>
                <div style="display:flex; gap:10px; margin-top:10px">
                    <button class="btn-primary glow-btn" id="btn-confirm-reset" style="flex:1; background:linear-gradient(135deg, var(--color-crimson), #c00); box-shadow:none">
                        Oui, tout effacer
                    </button>
                    <button class="btn-secondary" id="btn-cancel-reset" style="flex:1">
                        Annuler
                    </button>
                </div>
            </div>
        `;

        overlay.appendChild(content);
        document.body.appendChild(overlay);

        const closeFn = () => {
            overlay.remove();
        };

        document.getElementById("btn-close-reset-modal").addEventListener("click", closeFn);
        document.getElementById("btn-cancel-reset").addEventListener("click", closeFn);
        document.getElementById("btn-confirm-reset").addEventListener("click", () => {
            localStorage.removeItem("pc_architect_tycoon_save");
            overlay.remove();
            showToast("Partie réinitialisée ! Rechargement...", "success");
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    });

    // Load default home tab
    switchTab("emails");

    // Welcome notice & Daily Event modal / Help modal on first load
    setTimeout(() => {
        if (!state.hasSeenIntro) {
            showHelpModal();
        } else {
            showToast("Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.", "success");
            showDailyEventModal();
        }
    }, 1000);
});
