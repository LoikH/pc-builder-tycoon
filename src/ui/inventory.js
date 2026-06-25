/* ==========================================
   PC ARCHITECT TYCOON - LOCAL INVENTORY UI
   ========================================== */

import { state, saveGame } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";
import { t } from "../translations.js";

let inventoryCategory = "all";

export function renderInventoryTab() {
    const pane = document.getElementById("pane-inventory");
    pane.innerHTML = "";

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "1rem";
    container.style.height = "100%";

    // Header filters
    const headerRow = document.createElement("div");
    headerRow.className = "flex-row-justify";
    
    const catAll = t("inventory.cat.all");
    const catCoolerLabel = state.language === "en" ? "Cooler" : "Vent";
    const catStorageLabel = state.language === "en" ? "Store" : "Stock";

    headerRow.innerHTML = `
        <h2 style="font-size:1.3rem; font-weight:700">${t("inventory.title")}</h2>
        <div style="display:flex; gap:8px" id="inventory-cat-buttons">
            <button class="btn-secondary ${inventoryCategory === 'all' ? 'text-cyan' : ''}" data-cat="all">${catAll}</button>
            <button class="btn-secondary ${inventoryCategory === 'cpu' ? 'text-cyan' : ''}" data-cat="cpu">💾 CPU</button>
            <button class="btn-secondary ${inventoryCategory === 'motherboard' ? 'text-cyan' : ''}" data-cat="motherboard">🔌 MB</button>
            <button class="btn-secondary ${inventoryCategory === 'gpu' ? 'text-cyan' : ''}" data-cat="gpu">🎮 GPU</button>
            <button class="btn-secondary ${inventoryCategory === 'ram' ? 'text-cyan' : ''}" data-cat="ram">⚡ RAM</button>
            <button class="btn-secondary ${inventoryCategory === 'storage' ? 'text-cyan' : ''}" data-cat="storage">💽 ${catStorageLabel}</button>
            <button class="btn-secondary ${inventoryCategory === 'psu' ? 'text-cyan' : ''}" data-cat="psu">🔌 PSU</button>
            <button class="btn-secondary ${inventoryCategory === 'cooler' ? 'text-cyan' : ''}" data-cat="cooler">❄️ ${catCoolerLabel}</button>
            <button class="btn-secondary ${inventoryCategory === 'case' ? 'text-cyan' : ''}" data-cat="case">🖥️ Cases</button>
        </div>
    `;

    const grid = document.createElement("div");
    grid.className = "inventory-grid";
    grid.id = "inventory-items-grid";

    container.appendChild(headerRow);
    container.appendChild(grid);
    pane.appendChild(container);

    // Event listener delegation for filters
    headerRow.querySelector("#inventory-cat-buttons").querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", () => {
            inventoryCategory = btn.getAttribute("data-cat");
            renderInventoryTab();
        });
    });

    populateInventoryGrid();
}

function populateInventoryGrid() {
    const grid = document.getElementById("inventory-items-grid");
    grid.innerHTML = "";

    const items = state.inventory.filter(item => {
        if (inventoryCategory === "all") return true;
        const comp = getComponentById(item.partId);
        return comp && comp.type === inventoryCategory;
    });

    if (items.length === 0) {
        grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--text-muted)">
                <span style="font-size:3rem">📦</span>
                <p style="margin-top:10px">${t("inventory.empty")}</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const comp = getComponentById(item.partId);
        if (!comp) return;

        const card = document.createElement("div");
        card.className = `part-card ${item.condition}`;

        let condLabel = t("inventory.cond.new");
        let sellMultiplier = 0.5; // sell for 50% retail
        if (item.condition === "used") {
            condLabel = t("inventory.cond.used");
            sellMultiplier = 0.3; // 30% retail
        } else if (item.condition === "broken") {
            condLabel = t("inventory.cond.broken");
            sellMultiplier = 0.05; // 5% retail
        }

        const sellValue = Math.round(comp.price * sellMultiplier);

        let specLabel = "";
        if (comp.type === "cpu") specLabel = `${comp.specs.socket} | ${comp.specs.cores.split(" ")[0]}`;
        else if (comp.type === "gpu") specLabel = `${comp.specs.vram} | ${comp.specs.power}W`;
        else if (comp.type === "motherboard") specLabel = `${comp.specs.socket} | ${comp.specs.ramType}`;
        else if (comp.type === "ram") specLabel = `${comp.specs.ramType} | ${comp.specs.capacity}`;
        else if (comp.type === "storage") specLabel = `${comp.specs.storageType} | ${comp.specs.capacity}`;
        else if (comp.type === "psu") specLabel = `${comp.specs.wattage}W`;
        else if (comp.type === "cooler") specLabel = `${comp.specs.style}`;
        else if (comp.type === "case") specLabel = `${comp.specs.airflow} Airflow`;

        const specsHeaderLabel = state.language === "en" ? "Specs:" : "Caractéristiques :";

        card.innerHTML = `
            <span class="part-badge">${condLabel}</span>
            <div>
                <div class="part-category">${comp.brand}</div>
                <div class="part-name">${comp.name}</div>
                <div class="part-specs">
                    <div class="part-spec-item"><span>${specsHeaderLabel}</span><span>${specLabel}</span></div>
                    <div class="part-spec-item"><span>${t("inventory.specs.buy")}</span><span>${comp.price}$</span></div>
                </div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price" style="font-size:0.95rem; color:var(--text-secondary)">${t("inventory.specs.sell")} ${sellValue}$</div>
                <button class="btn-buy" style="border-color:var(--color-crimson); color:var(--color-crimson); background:rgba(255,0,85,0.05)" id="btn-sell-${item.id}">
                    ${t("inventory.btnSell")}
                </button>
            </div>
        `;

        grid.appendChild(card);

        document.getElementById(`btn-sell-${item.id}`).addEventListener("click", () => {
            sellInventoryItem(item, sellValue);
        });
    });
}

function sellInventoryItem(item, val) {
    state.inventory = state.inventory.filter(i => i.id !== item.id);
    state.money += val;
    saveGame();
    showToast(`${t("toast.partSold")} ${val}$ !`, "success");
    window.updateHud();
    renderInventoryTab();
}
