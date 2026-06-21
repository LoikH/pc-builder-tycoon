/* ==========================================
   PC ARCHITECT TYCOON - GAME STATE MANAGEMENT
   ========================================== */

import { COMPONENTS, getComponentById } from "./components.js";
import { generateNewJobs, checkJobRequirements } from "./jobs.js";

// INITIAL STATE STRUCTURE
const DEFAULT_STATE = {
    money: 1500.00,
    level: 1,
    xp: 0,
    day: 1,
    inventory: [], // items: { id, partId, condition: 'new'|'used'|'broken', pricePaid }
    activeJobs: [], // jobs: { id, clientName, subject, text, type, status: 'available'|'active'|'ready'|'completed', requirements: [], budget, reward, xpReward, pc }
    workbenches: [
        { id: 1, pc: null, unlocked: true },
        { id: 2, pc: null, unlocked: false, cost: 800 },
        { id: 3, pc: null, unlocked: false, cost: 2000 }
    ],
    selectedWorkbenchId: 1,
    deliveryQueue: [], // items: { partId, condition, deliveryDay }
    bargainBin: [], // computers or high end parts up for bid/buy
    customPcs: [], // player built PCs for sale on BargainBin: { id, pc, name, price }
    completedJobsCount: 0
};

export let state = { ...DEFAULT_STATE };

// UTILITY TO GENERATE UNIQUE ID
export function generateUniqueId() {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
}

// XP TABLE (Level 1: 100XP, Level 2: 250XP, Level 3: 500XP, etc.)
export function getRequiredXpForLevel(lvl) {
    if (lvl === 1) return 100;
    return Math.round(100 * Math.pow(1.8, lvl - 1));
}

// SAVE GAME TO LOCALSTORAGE
export function saveGame() {
    try {
        localStorage.setItem("pc_architect_tycoon_save", JSON.stringify(state));
    } catch (e) {
        console.error("Impossible de sauvegarder la partie :", e);
    }
}

// LOAD GAME FROM LOCALSTORAGE
export function loadGame() {
    try {
        const saved = localStorage.getItem("pc_architect_tycoon_save");
        if (saved) {
            state = JSON.parse(saved);
            // Ensure any new state properties are initialized
            state = { ...DEFAULT_STATE, ...state };
            return true;
        }
    } catch (e) {
        console.error("Erreur lors du chargement :", e);
    }
    // Set up initial standard emails on new game
    resetGame();
    return false;
}

// RESET GAMESTATE
export function resetGame() {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    
    // Add some initial starting components to inventory
    state.inventory.push(
        { id: generateUniqueId(), partId: "storage-kingston-480gb", condition: "new", pricePaid: 35 },
        { id: generateUniqueId(), partId: "ram-crucial-8-ddr4", condition: "new", pricePaid: 20 },
        { id: generateUniqueId(), partId: "cooler-intel-stock", condition: "new", pricePaid: 5 }
    );
    
    // Generate initial emails
    state.activeJobs = generateNewJobs(1, 3);
    generateBargainBin();
    saveGame();
}

// PROGRESS XP
export function addXp(amount) {
    state.xp += amount;
    let reqXp = getRequiredXpForLevel(state.level);
    let levelUp = false;
    
    while (state.xp >= reqXp) {
        state.xp -= reqXp;
        state.level += 1;
        reqXp = getRequiredXpForLevel(state.level);
        levelUp = true;
    }
    
    saveGame();
    return { levelUp, currentLevel: state.level };
}

// FINANCES
export function addMoney(amount) {
    state.money += amount;
    saveGame();
}

export function deductMoney(amount) {
    if (state.money >= amount) {
        state.money -= amount;
        saveGame();
        return true;
    }
    return false;
}

// ORDER COMPONENTS
export function orderParts(partIds, deliveryType = "standard") {
    let totalCost = 0;
    partIds.forEach(id => {
        const component = getComponentById(id);
        if (component) totalCost += component.price;
    });

    const shippingCost = deliveryType === "express" ? 50 : 10;
    totalCost += shippingCost;

    if (deductMoney(totalCost)) {
        partIds.forEach(id => {
            const deliveryDay = deliveryType === "express" ? state.day : state.day + 1;
            state.deliveryQueue.push({
                partId: id,
                condition: "new",
                deliveryDay: deliveryDay
            });
        });
        saveGame();
        return { success: true, cost: totalCost };
    }
    return { success: false, cost: totalCost };
}

// BARGAINBIN - USED PC MARKETS
export function generateBargainBin() {
    const pcNames = ["Gaming PC pas cher", "Bête de Bureautique", "Ancienne Station de travail", "PC Gamer HS", "PC Ne Démarre Plus"];
    const potentialCases = ["case-office", "case-nzxt-h5"];
    const potentialMbs = ["mb-prime-h410", "mb-msi-b550"];
    const potentialCpus = ["cpu-i3-10100f", "cpu-ryzen3-3100", "cpu-i5-11400f", "cpu-ryzen5-5600x"];
    const potentialCoolers = ["cooler-intel-stock", "cooler-amd-wraith", "cooler-hyper-212"];
    const potentialGpus = ["gpu-gtx1650", "gpu-rx580", "gpu-rtx3060"];
    const potentialRams = ["ram-crucial-8-ddr4", "ram-corsair-16-ddr4"];
    const potentialStorages = ["storage-barracuda-1tb", "storage-kingston-480gb"];
    const potentialPsus = ["psu-evga-500", "psu-corsair-650"];

    state.bargainBin = [];
    
    // Generate 2 broken PCs to flip
    for (let i = 0; i < 2; i++) {
        // Build a PC structure with some broken/missing parts
        const mb = potentialMbs[Math.floor(Math.random() * potentialMbs.length)];
        const mbComp = getComponentById(mb);
        
        // Find matching CPU socket
        const validCpus = potentialCpus.filter(c => getComponentById(c).specs.socket === mbComp.specs.socket);
        const cpu = validCpus[Math.floor(Math.random() * validCpus.length)] || "cpu-ryzen3-3100";
        
        const cooler = potentialCoolers[Math.floor(Math.random() * potentialCoolers.length)];
        const gpu = potentialGpus[Math.floor(Math.random() * potentialGpus.length)];
        const ram = potentialRams[Math.floor(Math.random() * potentialRams.length)];
        const storage = potentialStorages[Math.floor(Math.random() * potentialStorages.length)];
        const psu = potentialPsus[Math.floor(Math.random() * potentialPsus.length)];
        const pcCase = potentialCases[Math.floor(Math.random() * potentialCases.length)];

        // Decide which component is broken or missing
        // 0: CPU broken, 1: GPU broken, 2: PSU broken, 3: RAM missing
        const failType = Math.floor(Math.random() * 4);

        const pc = {
            case: { partId: pcCase, condition: "used" },
            motherboard: { partId: mb, condition: "used" },
            cpu: failType === 0 ? { partId: cpu, condition: "broken" } : { partId: cpu, condition: "used" },
            cooler: { partId: cooler, condition: "used" },
            ram: failType === 3 ? null : { partId: ram, condition: "used" },
            gpu: failType === 1 ? { partId: gpu, condition: "broken" } : { partId: gpu, condition: "used" },
            storage: { partId: storage, condition: "used" },
            psu: failType === 2 ? { partId: psu, condition: "broken" } : { partId: psu, condition: "used" },
            
            thermalPasteApplied: Math.random() > 0.3,
            cablesConnected: failType !== 3,
            hasOs: failType > 1,
            isClean: Math.random() > 0.5,
            score: 0,
            diagnosed: false
        };

        // Price calculations
        let baseValue = 0;
        Object.keys(pc).forEach(key => {
            if (pc[key] && pc[key].partId) {
                const comp = getComponentById(pc[key].partId);
                if (comp) {
                    if (pc[key].condition === "used") baseValue += comp.price * 0.6;
                    if (pc[key].condition === "broken") baseValue += comp.price * 0.1;
                }
            }
        });
        
        // Final price to buy PC is discounted due to problems
        const buyPrice = Math.round(baseValue * 0.8);

        state.bargainBin.push({
            id: "flip-" + generateUniqueId(),
            name: pcNames[Math.floor(Math.random() * pcNames.length)],
            pc: pc,
            price: buyPrice,
            description: "Ordinateur d'occasion. État inconnu. Peut nécessiter des réparations."
        });
    }
}

// NEXT DAY SYSTEM
export function processNextDay() {
    state.day += 1;

    // 1. Process Deliveries
    const arriving = state.deliveryQueue.filter(item => item.deliveryDay <= state.day);
    state.deliveryQueue = state.deliveryQueue.filter(item => item.deliveryDay > state.day);

    arriving.forEach(item => {
        state.inventory.push({
            id: generateUniqueId(),
            partId: item.partId,
            condition: item.condition, // new
            pricePaid: getComponentById(item.partId).price
        });
    });

    // 2. Generate new Emails
    const newJobsCount = Math.floor(Math.random() * 2) + 1; // 1 or 2 new jobs
    const generated = generateNewJobs(state.level, newJobsCount);
    state.activeJobs.push(...generated);

    // Limit active jobs display to avoid overwhelming
    if (state.activeJobs.filter(j => j.status === "available").length > 6) {
        const availableJobs = state.activeJobs.filter(j => j.status === "available");
        const extraCount = availableJobs.length - 6;
        for (let i = 0; i < extraCount; i++) {
            const index = state.activeJobs.indexOf(availableJobs[i]);
            state.activeJobs.splice(index, 1);
        }
    }

    // 3. Regene BargainBin
    generateBargainBin();

    // 4. Save state
    saveGame();

    return {
        deliveriesCount: arriving.length,
        newJobsCount: generated.length
    };
}

// WORKBENCH UNLOCK
export function unlockWorkbench(id) {
    const wb = state.workbenches.find(w => w.id === id);
    if (wb && !wb.unlocked && state.money >= wb.cost) {
        state.money -= wb.cost;
        wb.unlocked = true;
        saveGame();
        return true;
    }
    return false;
}

// UPDATE ACTIVE JOB REQUIREMENTS
export function updateActiveJobsRequirements() {
    state.activeJobs.forEach(job => {
        if (job.status === "active") {
            // Recalculate if conditions are met
            const result = checkJobRequirements(job);
            job.requirements = result.requirements;
            if (result.allDone) {
                job.status = "ready";
            } else {
                job.status = "active";
            }
        }
    });
    saveGame();
}
