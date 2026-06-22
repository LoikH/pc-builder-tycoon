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

        let offerHtml = "";
        if (item.activeOffer) {
            const offer = item.activeOffer;
            if (offer.isFullPrice) {
                offerHtml = `
                    <div style="background:rgba(0, 255, 136, 0.05); border:1px solid rgba(0, 255, 136, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--text-emerald)">🟢 OFFRE D'ACHAT FERME</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${offer.buyerName}</strong> achète le PC au prix demandé de <strong class="text-emerald font-mono">${offer.offeredPrice}$</strong> !
                        </p>
                        <button class="btn-primary glow-btn" style="width:100%; margin-top:8px; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.75rem; padding:5px" id="btn-accept-offer-${index}">
                            Confirmer la vente
                        </button>
                    </div>
                `;
            } else {
                offerHtml = `
                    <div style="background:rgba(255, 170, 0, 0.05); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px" id="offer-container-${index}">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--color-amber)">🟡 PROPOSITION DE NÉGOCIATION</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${offer.buyerName}</strong> vous propose <strong class="text-emerald font-mono">${offer.offeredPrice}$</strong> (Demande : ${item.price}$ - Rabais : ${Math.round((1 - offer.offeredPrice/item.price)*100)}%).
                        </p>
                        <div style="display:flex; gap:6px; margin-top:8px" id="offer-actions-${index}">
                            <button class="btn-primary glow-btn" style="flex:1; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.7rem; padding:4px" id="btn-accept-offer-${index}">
                                Accepter
                            </button>
                            <button class="btn-secondary" style="flex:1; border-color:rgba(189,0,255,0.3); color:var(--color-purple); font-size:0.7rem; padding:4px" id="btn-counter-offer-${index}">
                                Contre-proposer
                            </button>
                            <button class="btn-secondary text-crimson" style="flex:1; border-color:rgba(255,0,85,0.15); font-size:0.7rem; padding:4px" id="btn-refuse-offer-${index}">
                                Refuser
                            </button>
                        </div>
                        <div id="counter-form-${index}" style="display:none; flex-direction:column; gap:6px; margin-top:8px">
                            <input type="number" id="input-counter-${index}" placeholder="Entrez votre prix ($)" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.75rem">
                            <div style="display:flex; gap:6px">
                                <button class="btn-primary glow-btn" style="flex:1; font-size:0.7rem; padding:4px" id="btn-submit-counter-${index}">Valider</button>
                                <button class="btn-secondary" style="flex:1; font-size:0.7rem; padding:4px" id="btn-cancel-counter-${index}">Annuler</button>
                            </div>
                        </div>
                    </div>
                `;
            }
        } else {
            offerHtml = `
                <div style="font-size:0.75rem; color:var(--text-muted); background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:6px; padding:8px; margin-top:8px; margin-bottom:12px; text-align:center">
                    En attente d'acheteurs... (Transition de nuit requise)
                </div>
            `;
        }

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

            ${offerHtml}

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${index}">
                Retirer de la vente (Récupérer)
            </button>
        `;

        list.appendChild(card);

        // Bind basic cancel click
        document.getElementById(`btn-cancel-listing-${index}`).addEventListener("click", () => {
            cancelListing(index);
        });

        // Bind offer events
        if (item.activeOffer) {
            document.getElementById(`btn-accept-offer-${index}`).addEventListener("click", () => {
                acceptOffer(index);
            });

            if (!item.activeOffer.isFullPrice) {
                document.getElementById(`btn-refuse-offer-${index}`).addEventListener("click", () => {
                    refuseOffer(index);
                });

                const counterBtn = document.getElementById(`btn-counter-offer-${index}`);
                const counterForm = document.getElementById(`counter-form-${index}`);
                const offerActions = document.getElementById(`offer-actions-${index}`);

                counterBtn.addEventListener("click", () => {
                    counterForm.style.display = "flex";
                    offerActions.style.display = "none";
                });

                document.getElementById(`btn-cancel-counter-${index}`).addEventListener("click", () => {
                    counterForm.style.display = "none";
                    offerActions.style.display = "flex";
                });

                document.getElementById(`btn-submit-counter-${index}`).addEventListener("click", () => {
                    const price = parseFloat(document.getElementById(`input-counter-${index}`).value);
                    if (isNaN(price) || price <= 0) {
                        showToast("Veuillez saisir un prix valide !", "error");
                        return;
                    }
                    submitCounterOffer(index, Math.round(price));
                });
            }
        }
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

function acceptOffer(idx) {
    const listing = state.customPcs[idx];
    const offer = listing.activeOffer;

    state.money += offer.offeredPrice;
    state.xp += 50; // gain flip XP

    // Remove PC from customPcs
    state.customPcs.splice(idx, 1);
    
    saveGame();
    showToast(`Félicitations ! PC vendu à ${offer.buyerName} pour ${offer.offeredPrice}$ !`, "success");
    window.updateHud();
    renderBargainBinTab();
}

function refuseOffer(idx) {
    const listing = state.customPcs[idx];
    listing.activeOffer = null; // buyer walks away
    
    saveGame();
    showToast("Offre déclinée. L'acheteur s'en va.", "info");
    renderBargainBinTab();
}

function submitCounterOffer(idx, counterPrice) {
    const listing = state.customPcs[idx];
    const offer = listing.activeOffer;

    if (counterPrice <= offer.offeredPrice) {
        // Player counter-offered less than what buyer already offered!
        // Instant sell
        state.money += counterPrice;
        state.xp += 50;
        state.customPcs.splice(idx, 1);
        saveGame();
        showToast(`L'acheteur accepte immédiatement cette contre-proposition ! Vendu pour ${counterPrice}$ !`, "success");
        window.updateHud();
        renderBargainBinTab();
        return;
    }

    if (counterPrice >= listing.price) {
        // Player counter-offered more than original list price!
        // Offended reject
        listing.activeOffer = null;
        saveGame();
        showToast("L'acheteur s'est senti offensé par votre proposition déraisonnable et a quitté la table des négociations !", "error");
        renderBargainBinTab();
        return;
    }

    // Ratio formula
    const diffOriginal = listing.price - offer.offeredPrice;
    const diffCounter = counterPrice - offer.offeredPrice;
    const ratio = diffCounter / (diffOriginal || 1);

    const acceptanceProbability = 1 - ratio; // closer to offer price = higher chance

    if (Math.random() < acceptanceProbability) {
        // Accept
        state.money += counterPrice;
        state.xp += 50;
        state.customPcs.splice(idx, 1);
        saveGame();
        showToast(`Négociation réussie ! ${offer.buyerName} accepte votre contre-proposition de ${counterPrice}$ !`, "success");
        window.updateHud();
    } else {
        // Reject and leave
        listing.activeOffer = null;
        saveGame();
        showToast(`${offer.buyerName} a refusé votre contre-proposition de ${counterPrice}$ et préfère chercher ailleurs.`, "warning");
    }

    renderBargainBinTab();
}

// RESOLVE PC SALES OVERNIGHT (Now generates buyer offers instead of silent sales)
export function resolveFlipSales() {
    if (!state.customPcs || state.customPcs.length === 0) return { soldCount: 0, totalSales: 0 };
    
    let totalSales = 0;
    let soldCount = 0;
    
    const potentialBuyerNames = ["GamerPro99", "MamanGamer", "TechEnthusiast", "DirectProd", "KevinDarty", "RetroLover", "FPS_King", "SophieSlay"];

    state.customPcs.forEach(listing => {
        // Remove previous daily offers (buyer walked away)
        listing.activeOffer = null;

        const pc = listing.pc;
        let retailCost = 0;
        Object.keys(pc).forEach(key => {
            if (pc[key] && pc[key].partId) {
                const comp = getComponentById(pc[key].partId);
                if (comp) retailCost += comp.price;
            }
        });

        // Profit ratio: price requested vs retail parts cost
        const priceRatio = listing.price / (retailCost || 1);
        let probability = 0.5;
        
        if (priceRatio < 0.8) probability = 0.95;  // underpriced, instant sell
        else if (priceRatio < 1.2) probability = 0.75; // standard high chance
        else if (priceRatio < 1.5) probability = 0.45; // moderate chance
        else if (priceRatio < 2.0) probability = 0.15; // low chance
        else probability = 0.03; // extremely overpriced

        // Benchmark bonus
        if (pc.score > 8000) probability += 0.1;

        if (Math.random() < probability) {
            // A buyer is interested!
            const buyerName = potentialBuyerNames[Math.floor(Math.random() * potentialBuyerNames.length)];
            
            // Determine if they accept full price or negotiate
            const isFullPrice = Math.random() < 0.35 || priceRatio < 0.9; // 35% chance of full price buy (or if underpriced)
            
            if (isFullPrice) {
                listing.activeOffer = {
                    id: "off-" + generateUniqueId(),
                    buyerName,
                    offeredPrice: listing.price,
                    isFullPrice: true,
                    status: "pending"
                };
            } else {
                // Negotiate: offer between 75% and 92% of the price
                const discountFactor = 0.75 + Math.random() * 0.17;
                const offeredPrice = Math.round(listing.price * discountFactor);
                listing.activeOffer = {
                    id: "off-" + generateUniqueId(),
                    buyerName,
                    offeredPrice,
                    isFullPrice: false,
                    status: "pending"
                };
            }
        }
    });

    saveGame();
    return { soldCount, totalSales };
}
