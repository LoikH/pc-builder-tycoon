/* ==========================================
   PC ARCHITECT TYCOON - USED FLIP MARKETPLACE (BargainBin)
   ========================================== */

import { state, saveGame, generateUniqueId } from "../state.js";
import { showToast } from "../main.js";
import { getComponentById } from "../components.js";

export function renderBargainBinTab() {
    const pane = document.getElementById("pane-bargainbin");
    pane.innerHTML = "";

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "1fr 1fr";
    container.style.gap = "1.5rem";
    container.style.height = "100%";

    // Left Panel: Buy Used/Broken rigs
    const buyPanel = document.createElement("div");
    buyPanel.className = "glass-panel";
    buyPanel.style.padding = "1.5rem";
    buyPanel.style.overflowY = "auto";
    buyPanel.innerHTML = `
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-cyan)">🔥 Offres en cours (Achats)</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem" id="bargain-listings"></div>
    `;

    // Right Panel: Sell Your Custom PC builds
    const sellPanel = document.createElement("div");
    sellPanel.className = "glass-panel";
    sellPanel.style.padding = "1.5rem";
    sellPanel.style.overflowY = "auto";
    sellPanel.innerHTML = `
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-purple)">📈 Mes PC en Vente (Flips)</h2>
        <div style="display:flex; flex-direction:column; gap:1rem" id="my-listings"></div>
    `;

    container.appendChild(buyPanel);
    container.appendChild(sellPanel);
    pane.appendChild(container);

    populateBargainListings();
    populateMyListings();
}

function populateBargainListings() {
    const list = document.getElementById("bargain-listings");
    list.innerHTML = "";

    if (state.bargainBin.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:3rem; color:var(--text-muted)">Aucune offre d'occasion aujourd'hui. Revenez demain !</div>`;
        return;
    }

    state.bargainBin.forEach(item => {
        const card = document.createElement("div");
        card.className = "part-card";
        card.style.flexDirection = "column";

        // Count parts inside
        let partsList = [];
        Object.keys(item.pc).forEach(key => {
            if (item.pc[key] && item.pc[key].partId) {
                const comp = getComponentById(item.pc[key].partId);
                if (comp) partsList.push(comp.name);
            }
        });

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-amber">PC d'occasion</span>
                <span class="part-price text-emerald">${item.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px; font-size:1.05rem">${item.name}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px">${item.description}</p>
            
            <div style="font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:6px; border-radius:4px; margin-bottom:12px">
                <strong>Composants inclus :</strong> ${partsList.join(", ")}
            </div>

            <button class="btn-primary glow-btn" style="width:100%" id="btn-buy-flip-${item.id}">
                Acheter pour ${item.price}$
            </button>
        `;

        list.appendChild(card);

        document.getElementById(`btn-buy-flip-${item.id}`).addEventListener("click", () => {
            buyFlipPC(item);
        });
    });
}

function buyFlipPC(item) {
    if (state.money >= item.price) {
        state.money -= item.price;
        
        // Wrap the PC object so we can store it in inventory or loading queue
        // A flip PC is stored in state.inventory as a special "pc-flip" item
        const flipPcItem = {
            id: "pc-flip-" + generateUniqueId(),
            partId: "special-pc-case", // placeholder
            type: "pc_flip",
            name: item.name,
            condition: "used",
            pc: item.pc,
            pricePaid: item.price
        };

        state.inventory.push(flipPcItem);
        state.bargainBin = state.bargainBin.filter(i => i.id !== item.id);
        
        saveGame();
        showToast(`PC "${item.name}" acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.`, "success");
        
        window.updateHud();
        renderBargainBinTab();
    } else {
        showToast("Fonds insuffisants !", "error");
    }
}

function populateMyListings() {
    const list = document.getElementById("my-listings");
    list.innerHTML = "";

    // Show PCs currently listed by player
    const customListings = state.customPcs || [];

    if (customListings.length === 0) {
        list.innerHTML = `
            <div style="text-align:center; padding:3rem; color:var(--text-muted)">
                <p>Aucun ordinateur mis en vente.</p>
                <small>Montez un PC libre sur un établi et mettez-le en vente pour générer du profit !</small>
            </div>
        `;
        return;
    }

    customListings.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "part-card";
        card.style.flexDirection = "column";

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-purple">En vente</span>
                <span class="part-price text-emerald">${item.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px">${item.name}</div>
            
            <div class="part-specs">
                <div class="part-spec-item"><span>Benchmark :</span><span class="text-cyan font-mono">${item.pc.score} Pts</span></div>
                <div class="part-spec-item"><span>CPU :</span><span>${getComponentById(item.pc.cpu?.partId)?.name || 'Aucun'}</span></div>
                <div class="part-spec-item"><span>GPU :</span><span>${getComponentById(item.pc.gpu?.partId)?.name || 'Aucun'}</span></div>
            </div>

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${index}">
                Retirer de la vente (Récupérer)
            </button>
        `;

        list.appendChild(card);

        document.getElementById(`btn-cancel-listing-${index}`).addEventListener("click", () => {
            cancelListing(index);
        });
    });
}

function cancelListing(idx) {
    const listing = state.customPcs[idx];
    
    // Move PC back into inventory as a flip PC item
    const flipPcItem = {
        id: "pc-flip-" + generateUniqueId(),
        partId: "special-pc-case",
        type: "pc_flip",
        name: listing.name,
        condition: "used",
        pc: listing.pc,
        pricePaid: listing.price * 0.5 // approximate
    };

    state.inventory.push(flipPcItem);
    state.customPcs.splice(idx, 1);
    
    saveGame();
    showToast("Ordinateur retiré du marché BargainBin.", "info");
    renderBargainBinTab();
}

// RESOLVE PC SALES OVERNIGHT
export function resolveFlipSales() {
    if (!state.customPcs || state.customPcs.length === 0) return 0;
    
    let totalSales = 0;
    let soldCount = 0;
    const remainingPcs = [];

    state.customPcs.forEach(listing => {
        // Calculate probability of sale based on price vs build cost + performance
        // If benchmark score is high and price is reasonable, it sells quickly.
        const pc = listing.pc;
        
        let retailCost = 0;
        Object.keys(pc).forEach(key => {
            if (pc[key] && pc[key].partId) {
                const comp = getComponentById(pc[key].partId);
                if (comp) retailCost += comp.price;
            }
        });

        // Profit ratio: requested price / raw retail component value
        const priceRatio = listing.price / (retailCost || 1);

        // Score ratio: benchmark / 10000
        const perfRatio = pc.score / 10000;

        // Base probability: lower ratio = higher chance
        let probability = 0.5;
        
        if (priceRatio < 0.8) probability = 0.9;  // underpriced, instant sell
        else if (priceRatio < 1.2) probability = 0.7; // standard mark-up, high chance
        else if (priceRatio < 1.5) probability = 0.4; // greedy mark-up, moderate chance
        else if (priceRatio < 2.0) probability = 0.15; // very overpriced
        else probability = 0.02; // extremely overpriced

        // Benchmark bonus
        if (pc.score > 8000) probability += 0.1;

        if (Math.random() < probability) {
            totalSales += listing.price;
            soldCount += 1;
            
            // Gain a tiny bit of experience for flips
            state.xp += 50;
        } else {
            remainingPcs.push(listing);
        }
    });

    state.customPcs = remainingPcs;
    state.money += totalSales;
    saveGame();

    return { soldCount, totalSales };
}
