/* ==========================================
   PC ARCHITECT TYCOON - ONLINE PART SHOP & UPGRADES
   ========================================== */

import { COMPONENTS } from "../components.js";
import { state, orderParts, saveGame, getComponentMarketPrice } from "../state.js";
import { showToast } from "../main.js";
import { t } from "../translations.js";

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
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; padding:0 8px">${t("shop.tab.hardware")}</div>
        <button class="filter-btn ${currentCategory === 'cpu' ? 'active' : ''}" data-cat="cpu">💾 ${state.language === "en" ? "Processors" : "Processeurs"} <span class="badge font-mono">${getCategoryCount('cpu')}</span></button>
        <button class="filter-btn ${currentCategory === 'motherboard' ? 'active' : ''}" data-cat="motherboard">🔌 ${state.language === "en" ? "Motherboards" : "Cartes Mères"} <span class="badge font-mono">${getCategoryCount('motherboard')}</span></button>
        <button class="filter-btn ${currentCategory === 'gpu' ? 'active' : ''}" data-cat="gpu">🎮 ${state.language === "en" ? "Graphics Cards" : "Cartes Graphiques"} <span class="badge font-mono">${getCategoryCount('gpu')}</span></button>
        <button class="filter-btn ${currentCategory === 'ram' ? 'active' : ''}" data-cat="ram">⚡ ${state.language === "en" ? "RAM Memory" : "Mémoires RAM"} <span class="badge font-mono">${getCategoryCount('ram')}</span></button>
        <button class="filter-btn ${currentCategory === 'storage' ? 'active' : ''}" data-cat="storage">💽 ${state.language === "en" ? "SSD/HDD Storage" : "Stockages SSD/HDD"} <span class="badge font-mono">${getCategoryCount('storage')}</span></button>
        <button class="filter-btn ${currentCategory === 'psu' ? 'active' : ''}" data-cat="psu">🔌 ${state.language === "en" ? "Power Supplies" : "Alimentations"} <span class="badge font-mono">${getCategoryCount('psu')}</span></button>
        <button class="filter-btn ${currentCategory === 'cooler' ? 'active' : ''}" data-cat="cooler">❄️ ${state.language === "en" ? "Coolers" : "Refroidissements"} <span class="badge font-mono">${getCategoryCount('cooler')}</span></button>
        <button class="filter-btn ${currentCategory === 'case' ? 'active' : ''}" data-cat="case">🖥️ ${state.language === "en" ? "PC Cases" : "Boîtiers PC"} <span class="badge font-mono">${getCategoryCount('case')}</span></button>
        
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:15px 0 8px; padding:0 8px">${t("shop.tab.upgrades")}</div>
        <button class="filter-btn ${currentCategory === 'upgrades' ? 'active' : ''}" data-cat="upgrades">🛠️ ${state.language === "en" ? "Workshop & Upgrades" : "Atelier & Établis"}</button>
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
        case "cpu": return t("shop.title.cpu");
        case "motherboard": return t("shop.title.motherboard");
        case "gpu": return t("shop.title.gpu");
        case "ram": return t("shop.title.ram");
        case "storage": return t("shop.title.storage");
        case "psu": return t("shop.title.psu");
        case "cooler": return t("shop.title.cooler");
        case "case": return t("shop.title.case");
        case "upgrades": return t("shop.title.upgrades");
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
            const coresLabel = state.language === "en" ? "Cores:" : "Cœurs:";
            const speedLabel = state.language === "en" ? "Speed:" : "Vitesse:";
            specHtml = `
                <div class="part-spec-item"><span>Socket:</span><span>${comp.specs.socket}</span></div>
                <div class="part-spec-item"><span>${coresLabel}</span><span>${comp.specs.cores.split(" ")[0]}</span></div>
                <div class="part-spec-item"><span>${speedLabel}</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "gpu") {
            const freqLabel = state.language === "en" ? "Clock:" : "Fréquence:";
            specHtml = `
                <div class="part-spec-item"><span>VRAM:</span><span>${comp.specs.vram}</span></div>
                <div class="part-spec-item"><span>${freqLabel}</span><span>${comp.specs.speed}</span></div>
                <div class="part-spec-item"><span>TDP:</span><span>${comp.specs.power}W</span></div>
            `;
        } else if (comp.type === "motherboard") {
            const sizeLabel = state.language === "en" ? "Size:" : "Taille:";
            specHtml = `
                <div class="part-spec-item"><span>Socket:</span><span>${comp.specs.socket}</span></div>
                <div class="part-spec-item"><span>RAM:</span><span>${comp.specs.ramType}</span></div>
                <div class="part-spec-item"><span>${sizeLabel}</span><span>${comp.specs.size}</span></div>
            `;
        } else if (comp.type === "ram") {
            const capLabel = state.language === "en" ? "Capacity:" : "Capacité:";
            const speedLabel = state.language === "en" ? "Speed:" : "Vitesse:";
            specHtml = `
                <div class="part-spec-item"><span>Type:</span><span>${comp.specs.ramType}</span></div>
                <div class="part-spec-item"><span>${capLabel}</span><span>${comp.specs.capacity}</span></div>
                <div class="part-spec-item"><span>${speedLabel}</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "storage") {
            const capLabel = state.language === "en" ? "Capacity:" : "Capacité:";
            const flowLabel = state.language === "en" ? "Speed:" : "Débit:";
            specHtml = `
                <div class="part-spec-item"><span>Type:</span><span>${comp.specs.storageType}</span></div>
                <div class="part-spec-item"><span>${capLabel}</span><span>${comp.specs.capacity}</span></div>
                <div class="part-spec-item"><span>${flowLabel}</span><span>${comp.specs.speed}</span></div>
            `;
        } else if (comp.type === "psu") {
            const powLabel = state.language === "en" ? "Power:" : "Puissance:";
            const certLabel = state.language === "en" ? "Cert:" : "Certif:";
            specHtml = `
                <div class="part-spec-item"><span>${powLabel}</span><span>${comp.specs.wattage}W</span></div>
                <div class="part-spec-item"><span>${certLabel}</span><span>${comp.specs.rating}</span></div>
            `;
        } else if (comp.type === "cooler") {
            const capLabel = state.language === "en" ? "Cooling:" : "Capacité:";
            specHtml = `
                <div class="part-spec-item"><span>Style:</span><span>${comp.specs.style}</span></div>
                <div class="part-spec-item"><span>${capLabel}</span><span>${comp.specs.coolingPower}</span></div>
                <div class="part-spec-item"><span>Socket:</span><span style="max-width:130px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap" title="${comp.specs.socket}">${comp.specs.socket}</span></div>
            `;
        } else if (comp.type === "case") {
            const sizeLabel = state.language === "en" ? "Size:" : "Facteur:";
            specHtml = `
                <div class="part-spec-item"><span>${sizeLabel}</span><span>${comp.specs.size}</span></div>
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
                <div class="part-price">${getComponentMarketPrice(comp).toFixed(2)}$</div>
                ${isLocked ? 
                    `<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">${t("shop.btnLocked")} ${comp.level}</button>` :
                    `<button class="btn-buy" id="btn-add-${comp.id}">${t("shop.btnBuy")}</button>`
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
        
        const catLabel = state.language === "en" ? "Workshop" : "Atelier";
        const wbName = state.language === "en" ? `Assembly Workbench #${wb.id}` : `Établi de Montage n°${wb.id}`;
        const wbDesc = state.language === "en" ? "Allows working on an additional PC concurrently." : "Permet de travailler sur un PC supplémentaire en simultané.";
        const buyLabel = state.language === "en" ? "Buy" : "Acheter";
        const boughtLabel = state.language === "en" ? "Unlocked" : "Acheté";

        card.innerHTML = `
            <div>
                <div class="part-category">${catLabel}</div>
                <div class="part-name">${wbName}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">${wbDesc}</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${wb.cost.toFixed(2)}$</div>
                ${wb.unlocked ? 
                    `<button class="btn-buy" disabled>${boughtLabel}</button>` :
                    `<button class="btn-buy" id="btn-buy-wb-${wb.id}" ${state.money < wb.cost ? 'disabled' : ''}>${buyLabel}</button>`
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

    // Liquid Metal Consumable
    const lmCard = document.createElement("div");
    lmCard.className = "part-card";
    
    const catConsumable = state.language === "en" ? "Consumable" : "Consommable";
    const lmName = state.language === "en" ? "Premium Liquid Metal" : "Métal Liquide Premium";
    const lmDesc = state.language === "en" ? `Reduces load temperature by <strong>-8°C</strong>. Stock: <strong>${state.liquidMetalCount || 0}</strong>.` : `Réduit la température sous charge de <strong>-8°C</strong>. Stock : <strong>${state.liquidMetalCount || 0}</strong>.`;
    const buyActionLabel = state.language === "en" ? "Buy" : "Acheter";

    lmCard.innerHTML = `
        <div>
            <div class="part-category">${catConsumable}</div>
            <div class="part-name">${lmName}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${lmDesc}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">30.00$</div>
            <button class="btn-buy" id="btn-buy-lm" ${state.money < 30 ? 'disabled' : ''}>${buyActionLabel}</button>
        </div>
    `;
    grid.appendChild(lmCard);
    document.getElementById("btn-buy-lm").addEventListener("click", () => {
        buyPremiumUpgrade("liquid_metal", 30);
    });

    // Thermal Probe permanent
    const tpCard = document.createElement("div");
    tpCard.className = "part-card";
    
    const toolLabel = state.language === "en" ? "Permanent Tool" : "Outil Permanent";
    const tpName = state.language === "en" ? "Pro Thermal Probe" : "Sonde Thermique Pro";
    const tpDesc = state.language === "en" ? "Blinking orange safety warning inside VirtualOS as soon as CPU temperature approaches 90°C." : "Alerte de sécurité orange clignotante dans VirtualOS dès que la température CPU approche des 90°C.";
    const acquiredLabel = state.language === "en" ? "Acquired" : "Acquis";

    tpCard.innerHTML = `
        <div>
            <div class="part-category">${toolLabel}</div>
            <div class="part-name">${tpName}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${tpDesc}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">150.00$</div>
            ${state.hasThermalProbe ? 
                `<button class="btn-buy" disabled>${acquiredLabel}</button>` :
                `<button class="btn-buy" id="btn-buy-tp" ${state.money < 150 ? 'disabled' : ''}>${buyActionLabel}</button>`
            }
        </div>
    `;
    grid.appendChild(tpCard);
    if (!state.hasThermalProbe) {
        document.getElementById("btn-buy-tp").addEventListener("click", () => {
            buyPremiumUpgrade("thermal_probe", 150);
        });
    }

    // Fast USB boot permanent
    const fuCard = document.createElement("div");
    fuCard.className = "part-card";
    
    const usbName = state.language === "en" ? "Bootable USB Drive Pro" : "Clé USB Bootable Pro";
    const usbDesc = state.language === "en" ? "VirtualOS installation is twice as fast (x2 accelerated speed)." : "Installation de VirtualOS deux fois plus rapide (vitesse d'écriture accélérée x2).";

    fuCard.innerHTML = `
        <div>
            <div class="part-category">${toolLabel}</div>
            <div class="part-name">${usbName}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${usbDesc}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">200.00$</div>
            ${state.hasFastUsb ? 
                `<button class="btn-buy" disabled>${acquiredLabel}</button>` :
                `<button class="btn-buy" id="btn-buy-fu" ${state.money < 200 ? 'disabled' : ''}>${buyActionLabel}</button>`
            }
        </div>
    `;
    grid.appendChild(fuCard);
    if (!state.hasFastUsb) {
        document.getElementById("btn-buy-fu").addEventListener("click", () => {
            buyPremiumUpgrade("fast_usb", 200);
        });
    }
}

function buyUpgradeWorkbench(wb) {
    if (state.money >= wb.cost) {
        state.money -= wb.cost;
        wb.unlocked = true;
        saveGame();
        
        const successMsg = state.language === "en" ? `Workbench ${wb.id} unlocked!` : `Établi ${wb.id} débloqué !`;
        showToast(successMsg, "success");
        window.updateHud();
        populateCatalog();
    }
}

function buyPremiumUpgrade(type, cost) {
    if (state.money >= cost) {
        state.money -= cost;
        if (type === "liquid_metal") {
            state.liquidMetalCount = (state.liquidMetalCount || 0) + 1;
            const msg = state.language === "en" ? `Premium Liquid Metal syringe bought! (Stock: ${state.liquidMetalCount})` : `Seringue de Pâte Métal Liquide achetée ! (Stock : ${state.liquidMetalCount})`;
            showToast(msg, "success");
        } else if (type === "thermal_probe") {
            state.hasThermalProbe = true;
            const msg = state.language === "en" ? "Precision Thermal Probe installed in the workshop!" : "Sonde Thermique de Précision installée dans l'atelier !";
            showToast(msg, "success");
        } else if (type === "fast_usb") {
            state.hasFastUsb = true;
            const msg = state.language === "en" ? "Bootable USB Drive Pro acquired! VirtualOS setup will be twice as fast." : "Clé USB Bootable Pro acquise ! L'installation de VirtualOS sera deux fois plus rapide.";
            showToast(msg, "success");
        }
        saveGame();
        window.updateHud();
        populateCatalog(); // refresh
    } else {
        showToast(t("toast.fundsInsufficient"), "error");
    }
}

function addToCart(partId) {
    shoppingCart.push(partId);
    updateCartUI();
    const msg = state.language === "en" ? "Part added to cart." : "Pièce ajoutée au panier.";
    showToast(msg, "info");
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
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">${t("shop.cart.title")}</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">${t("shop.cart.empty")}</p>
            </div>
        `;
        return;
    }

    let subtotal = 0;
    const cartItemsHtml = shoppingCart.map((id, index) => {
        const comp = COMPONENTS.find(c => c.id === id);
        if (!comp) return "";
        const mPrice = getComponentMarketPrice(comp);
        subtotal += mPrice;
        return `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${comp.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${mPrice}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${index})">×</button>
                </div>
            </div>
        `;
    }).join("");

    cartPanel.innerHTML = `
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">${t("shop.cart.title")} (${shoppingCart.length})</div>
        <div style="flex:1; overflow-y:auto; margin-bottom:1rem">
            ${cartItemsHtml}
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:10px; margin-bottom:15px">
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:5px">
                <span>${t("shop.cart.subtotal")}</span>
                <span class="font-mono text-emerald" style="font-weight:600">${subtotal.toFixed(2)}$</span>
            </div>
            
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:10px">
                <span>${t("shop.cart.shipping")}</span>
                <select id="shipping-method" style="background:#111; color:#fff; border:1px solid var(--border-color); border-radius:4px; font-size:0.75rem; padding:2px">
                    <option value="standard" selected>${t("shop.cart.shipping.std")}</option>
                    <option value="express">${t("shop.cart.shipping.exp")}</option>
                </select>
            </div>
        </div>

        <button class="btn-primary glow-btn" id="btn-checkout" style="width:100%">
            ${t("shop.cart.btnCheckout")}
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
    const totalCost = shoppingCart.reduce((sum, id) => sum + getComponentMarketPrice(COMPONENTS.find(c => c.id === id)), 0);
    const shippingFee = shipping === "express" ? 50 : 10;
    const finalTotal = totalCost + shippingFee;

    if (state.money >= finalTotal) {
        const orderResult = orderParts(shoppingCart, shipping);
        if (orderResult.success) {
            shoppingCart = [];
            updateCartUI();
            window.updateHud();
            
            if (shipping === "express") {
                showToast(t("toast.expressDelivered"), "success");
            } else {
                showToast(t("toast.orderPlaced"), "success");
            }
        }
    } else {
        showToast(t("toast.fundsInsufficient"), "error");
    }
}
