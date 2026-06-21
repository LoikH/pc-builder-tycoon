/* ==========================================
   PC ARCHITECT TYCOON - GAME MAIN ENTRANCE
   ========================================== */

import { state, loadGame, saveGame, processNextDay, getRequiredXpForLevel } from "./state.js";
import { renderEmailsTab } from "./ui/emails.js";
import { renderWorkbenchTab } from "./ui/workbench.js";
import { renderShopTab } from "./ui/shop.js";
import { renderInventoryTab } from "./ui/inventory.js";
import { renderBargainBinTab, resolveFlipSales } from "./ui/bargainbin.js";

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

    saveGame();
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

    showToast(summaryMsg, "success");

    // Re-render current tab to show changes (like new delivery packages or emails)
    switchTab(activeTab);
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

    // Load default home tab
    switchTab("emails");

    // Welcome notice
    setTimeout(() => {
        showToast("Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.", "success");
    }, 1000);
});
