/* ==========================================
   PC ARCHITECT TYCOON - ONLINE PART SHOP & UPGRADES
   ========================================== */

import { COMPONENTS } from "../components.js";
import { state, orderParts, saveGame } from "../state.js";
import { showToast } from "../main.js";

let currentCategory = "cpu";
let shoppingCart = []; // list of component IDs

export function renderShopTab() {
    const pane = document.getElementById("pane-shop");
    pane.innerHTML = "";

    const layout = document.createElement("div");
    layout.className = "shop-layout";

    // 1. LEFT SIDEBAR: Categories & Upgrades
    const sidebar = document.createElement("div");
    sidebar.className = "glass-panel shop-filters";
    sidebar.innerHTML = `
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; padding:0 8px">Composants</div>
        <button class="filter-btn ${currentCategory === 'cpu' ? 'active' : ''}" data-cat="cpu">💾 Processeurs <span class="badge font-mono">${getCategoryCount('cpu')}</span></button>
        <button class="filter-btn ${currentCategory === 'motherboard' ? 'active' : ''}" data-cat="motherboard">🔌 Cartes Mères <span class="badge font-mono">${getCategoryCount('motherboard')}</span></button>
        <button class="filter-btn ${currentCategory === 'gpu' ? 'active' : ''}" data-cat="gpu">🎮 Cartes Graphiques <span class="badge font-mono">${getCategoryCount('gpu')}</span></button>
        <button class="filter-btn ${currentCategory === 'ram' ? 'active' : ''}" data-cat="ram">⚡ Mémoires RAM <span class="badge font-mono">${getCategoryCount('ram')}</span></button>
        <button class="filter-btn ${currentCategory === 'storage' ? 'active' : ''}" data-cat="storage">💽 Stockages SSD/HDD <span class="badge font-mono">${getCategoryCount('storage')}</span></button>
        <button class="filter-btn ${currentCategory === 'psu' ? 'active' : ''}" data-cat="psu">🔌 Alimentations <span class="badge font-mono">${getCategoryCount('psu')}</span></button>
        <button class="filter-btn ${currentCategory === 'cooler' ? 'active' : ''}" data-cat="cooler">❄️ Refroidissements <span class="badge font-mono">${getCategoryCount('cooler')}</span></button>
        <button class="filter-btn ${currentCategory === 'case' ? 'active' : ''}" data-cat="case">🖥️ Boîtiers PC <span class="badge font-mono">${getCategoryCount('case')}</span></button>
        
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:15px 0 8px; padding:0 8px">Améliorations</div>
        <button class="filter-btn ${currentCategory === 'upgrades' ? 'active' : ''}" data-cat="upgrades">🛠️ Atelier & Établis</button>
    `;

    // 2. RIGHT CONTAINER: Catalog & Cart Split
    const rightContainer = document.createElement("div");
    rightContainer.style.display = "grid";
    rightContainer.style.gridTemplateColumns = "1fr 280px";
    rightContainer.style.gap = "1.5rem";
    rightContainer.style.height = "100%";
    rightContainer.style.minHeight = "0";

    const catalogPanel = document.createElement("div");
    catalogPanel.className = "glass-panel";
    catalogPanel.style.overflow = "hidden";
    catalogPanel.style.display = "flex";
    catalogPanel.style.flexDirection = "column";

    catalogPanel.innerHTML = `
        <div class="panel-header">
            <h2 id="catalog-title">${getCategoryTitle()}</h2>
        </div>
        <div class="shop-catalog" id="shop-catalog-items"></div>
    `;

    const cartPanel = document.createElement("div");
    cartPanel.className = "glass-panel";
    cartPanel.style.padding = "1rem";
    cartPanel.style.display = "flex";
    cartPanel.style.flexDirection = "column";
    cartPanel.id = "shop-cart-panel";

    rightContainer.appendChild(catalogPanel);
    rightContainer.appendChild(cartPanel);
    layout.appendChild(sidebar);
    layout.appendChild(rightContainer);
    pane.appendChild(layout);

    // Event Delegation for categories
    sidebar.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentCategory = btn.getAttribute("data-cat");
            sidebar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById("catalog-title").textContent = getCategoryTitle();
            populateCatalog();
        });
    });

    populateCatalog();
    updateCartUI();
}

function getCategoryCount(cat) {
    return COMPONENTS.filter(c => c.type === cat).length;
}

function getCategoryTitle() {
    switch (currentCategory) {
        case "cpu": return "Processeurs (Intel & AMD)";
        case "motherboard": return "Cartes Mères";
        case "gpu": return "Cartes Graphiques (NVIDIA RTX & AMD RX)";
        case "ram": return "Mémoire Vive (DDR4 / DDR5)";
        case "storage": return "Disques Durs & SSD (NVMe / SATA)";
        case "psu": return "Alimentations Énergétiques";
        case "cooler": return "Ventirads & Watercoolings AIO";
        case "case": return "Boîtiers PC Desktop";
        case "upgrades": return "Agrandir mon Magasin";
        default: return "Boutique d'informatique";
    }
}

function populateCatalog() {
    const grid = document.getElementById("shop-catalog-items");
    grid.innerHTML = "";

    if (currentCategory === "upgrades") {
        populateUpgrades(grid);
        return;
    }

    const items = COMPONENTS.filter(c => c.type === currentCategory);

    items.forEach(comp => {
        const isLocked = state.level < comp.level;
        const card = document.createElement("div");
        card.className = "part-card";
        
        let specHtml = "";
        if (comp.type === "cpu") {
            specHtml = `
                <div class="part-spec-item"><span>Socket:</span><span>${comp.specs.socket}</span></div>
                <div class="part-spec-item"><span>Cœurs:</span><span>${comp.specs.cores.split(" ")[0]}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "gpu") {
            specHtml = `
                <div class="part-spec-item"><span>VRAM:</span><span>${comp.specs.vram}</span></div>
                <div class="part-spec-item"><span>Fréquence:</span><span>${comp.specs.speed}</span></div>
                <div class="part-spec-item"><span>TDP:</span><span>${comp.specs.power}W</span></div>
            `;
        } else if (comp.type === "motherboard") {
            specHtml = `
                <div class="part-spec-item"><span>Socket:</span><span>${comp.specs.socket}</span></div>
                <div class="part-spec-item"><span>RAM:</span><span>${comp.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Taille:</span><span>${comp.specs.size}</span></div>
            `;
        } else if (comp.type === "ram") {
            specHtml = `
                <div class="part-spec-item"><span>Type:</span><span>${comp.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${comp.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "storage") {
            specHtml = `
                <div class="part-spec-item"><span>Type:</span><span>${comp.specs.storageType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${comp.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Débit:</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "psu") {
            specHtml = `
                <div class="part-spec-item"><span>Puissance:</span><span>${comp.specs.wattage}W</span></div>
                <div class="part-spec-item"><span>Certif:</span><span>${comp.specs.rating}</span></div>
            `;
        } else if (comp.type === "cooler") {
            specHtml = `
                <div class="part-spec-item"><span>Style:</span><span>${comp.specs.style}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${comp.specs.coolingPower}</span></div>
            `;
        } else if (comp.type === "case") {
            specHtml = `
                <div class="part-spec-item"><span>Facteur:</span><span>${comp.specs.size}</span></div>
                <div class="part-spec-item"><span>Airflow:</span><span>${comp.specs.airflow}</span></div>
            `;
        }

        card.innerHTML = `
            <div>
                <div class="part-category">${comp.brand}</div>
                <div class="part-name">${comp.name}</div>
                <div class="part-specs">${specHtml}</div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price">${comp.price.toFixed(2)}$</div>
                ${isLocked ? 
                    `<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">Niveau ${comp.level}</button>` :
                    `<button class="btn-buy" id="btn-add-${comp.id}">Ajouter</button>`
                }
            </div>
        `;

        grid.appendChild(card);

        if (!isLocked) {
            document.getElementById(`btn-add-${comp.id}`).addEventListener("click", () => {
                addToCart(comp.id);
            });
        }
    });
}

function populateUpgrades(grid) {
    state.workbenches.forEach(wb => {
        if (wb.id === 1) return; // Workbench 1 unlocked by default

        const card = document.createElement("div");
        card.className = "part-card";
        card.innerHTML = `
            <div>
                <div class="part-category">Atelier</div>
                <div class="part-name">Établi de Montage n°${wb.id}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">Permet de travailler sur un PC supplémentaire en simultané.</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${wb.cost.toFixed(2)}$</div>
                ${wb.unlocked ? 
                    `<button class="btn-buy" disabled>Acheté</button>` :
                    `<button class="btn-buy" id="btn-buy-wb-${wb.id}" ${state.money < wb.cost ? 'disabled' : ''}>Acheter</button>`
                }
            </div>
        `;
        grid.appendChild(card);

        if (!wb.unlocked) {
            document.getElementById(`btn-buy-wb-${wb.id}`).addEventListener("click", () => {
                buyUpgradeWorkbench(wb);
            });
        }
    });
}

function buyUpgradeWorkbench(wb) {
    if (state.money >= wb.cost) {
        state.money -= wb.cost;
        wb.unlocked = true;
        saveGame();
        showToast(`Établi ${wb.id} débloqué !`, "success");
        window.updateHud();
        populateCatalog();
    }
}

function addToCart(partId) {
    shoppingCart.push(partId);
    updateCartUI();
    showToast("Pièce ajoutée au panier.", "info");
}

function removeFromCart(index) {
    shoppingCart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartPanel = document.getElementById("shop-cart-panel");
    if (!cartPanel) return;

    if (shoppingCart.length === 0) {
        cartPanel.innerHTML = `
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">Votre panier est vide</p>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    const cartItemsHtml = shoppingCart.map((id, index) => {
        const comp = COMPONENTS.find(c => c.id === id);
        if (!comp) return "";
        subtotal += comp.price;
        return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${comp.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${comp.price}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${index})">×</button>
                </div>
            </div>
        `;
    }).join("");

    cartPanel.innerHTML = `
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat (${shoppingCart.length})</div>
        <div style="flex:1; overflow-y:auto; margin-bottom:1rem">
            ${cartItemsHtml}
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:10px; margin-bottom:15px">
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:5px">
                <span>Sous-total:</span>
                <span class="font-mono text-emerald" style="font-weight:600">${subtotal.toFixed(2)}$</span>
            </div>
            
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:10px">
                <span>Livraison :</span>
                <select id="shipping-method" style="background:#111; color:#fff; border:1px solid var(--border-color); border-radius:4px; font-size:0.75rem; padding:2px">
                    <option value="standard" selected>Standard (+10$, 1 Jour)</option>
                    <option value="express">Express (+50$, Instantané)</option>
                </select>
            </div>
        </div>

        <button class="btn-primary glow-btn" id="btn-checkout" style="width:100%">
            Passer la commande
        </button>
    `;

    document.getElementById("btn-checkout").addEventListener("click", checkout);

    // Bind remove global utility
    window.removeCartItem = (index) => {
        removeFromCart(index);
    };
}

function checkout() {
    if (shoppingCart.length === 0) return;

    const shipping = document.getElementById("shipping-method").value;
    const totalCost = shoppingCart.reduce((sum, id) => sum + (COMPONENTS.find(c => c.id === id)?.price || 0), 0);
    const shippingFee = shipping === "express" ? 50 : 10;
    const finalTotal = totalCost + shippingFee;

    if (state.money >= finalTotal) {
        const orderResult = orderParts(shoppingCart, shipping);
        if (orderResult.success) {
            shoppingCart = [];
            updateCartUI();
            window.updateHud();
            
            if (shipping === "express") {
                showToast("Commande livrée instantanément par Express !", "success");
            } else {
                showToast("Commande passée ! Vos pièces arriveront demain matin.", "success");
            }
        }
    } else {
        showToast("Fonds insuffisants pour finaliser la commande.", "error");
    }
}
