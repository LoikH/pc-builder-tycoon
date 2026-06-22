/* ==========================================
   PC ARCHITECT TYCOON - CLIENT JOB GENERATOR
   ========================================== */

import { getComponentById } from "./components.js";
import { state, generateUniqueId } from "./state.js";

// SENDER NAMES AND CLIENTS
const CLIENT_NAMES = [
    "Jean-Michel Tech", "Sophie.Gamer", "Kévin Du 93", "Thomas.Dev", "Lucas.Stream",
    "Emma.Designer", "Alexandre.V", "Mélanie Pro", "Léa.Youtuber", "Julien.Hardcore"
];

// EMAIL SUBJECTS
const REPAIR_SUBJECTS = [
    "Mon PC s'éteint tout seul !",
    "Besoin d'un diagnostic en urgence",
    "Écran bleu à répétition...",
    "Mon PC refuse de démarrer !",
    "Bruit bizarre venant de l'alimentation"
];

const UPGRADE_RAM_SUBJECTS = [
    "Besoin de plus de puissance pour Cyberpunk",
    "Mon PC rame sur Photoshop !",
    "Besoin de plus de mémoire vive",
    "Passer à {targetGb} Go de RAM"
];

const UPGRADE_STORAGE_SUBJECTS = [
    "Besoin de plus de stockage pour mes vidéos",
    "Mon disque dur est plein !",
    "Besoin d'un SSD plus rapide"
];

const VIRUS_SUBJECTS = [
    "Mon ordinateur est extrêmement lent !",
    "Des pubs bizarres s'affichent partout",
    "Aide ! Je crois que j'ai été piraté",
    "Nettoyage de printemps nécessaire",
    "PC infecté, SOS !"
];

const BENCHMARK_SUBJECTS = [
    "Mon PC doit tourner plus vite !",
    "Je veux battre le score de mon frère",
    "Aide pour optimiser mon score 3DMark",
    "Config Overclocking stable demandée",
    "Besoin de performances maximales"
];

// HELPER TO SELECT RANDOM ITEM
function randArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// GENERATE DYNAMIC CLIENT EMAIL
export function generateNewJobs(playerLevel, count = 1) {
    const jobs = [];
    
    for (let i = 0; i < count; i++) {
        const id = "job-" + generateUniqueId();
        const clientName = randArr(CLIENT_NAMES);
        
        // Pick job type based on player level (more complex jobs unlock at higher levels)
        let types = ["virus", "upgrade"];
        if (playerLevel >= 2) types.push("repair");
        if (playerLevel >= 3) types.push("benchmark");
        if (playerLevel >= 4) types.push("build");
        
        const type = randArr(types);
        let subject = "";
        let text = "";
        let budget = 0;
        let reward = 0;
        let xpReward = 0;
        let pc = null;
        let requirements = [];

        // Build base PC templates for clients
        const clientPc = createBaseClientPc(type, playerLevel);

        if (type === "virus") {
            subject = randArr(VIRUS_SUBJECTS);
            text = `Bonjour,\n\nDepuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.\n\nPouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?\n\nMerci,\n${clientName}`;
            budget = 0; // No hardware needed
            reward = 120 + playerLevel * 20;
            xpReward = 80;
            
            clientPc.isClean = false; // Virus loaded
            
            requirements = [
                { id: "clean_os", desc: "Supprimer tous les virus", done: false },
                { id: "boot_os", desc: "S'assurer que le PC démarre sous l'OS", done: false }
            ];
            pc = clientPc;
        } 
        else if (type === "upgrade") {
            const upgradeType = Math.random() > 0.5 ? "ram" : "storage";
            
            if (upgradeType === "ram") {
                // Customer wants 16GB or 32GB RAM
                const targetGb = clientPc.ram && getComponentById(clientPc.ram.partId).specs.capacity.includes("8") ? 16 : 32;
                subject = randArr(UPGRADE_RAM_SUBJECTS).replace("{targetGb}", targetGb);
                text = `Salut,\n\nJe joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.\n\nPourriez-vous mettre à niveau ma RAM pour atteindre au moins ${targetGb} Go ?\n\nCordialement,\n${clientName}`;
                budget = targetGb === 16 ? 80 : 160;
                reward = 150 + playerLevel * 15;
                xpReward = 100;
                
                requirements = [
                    { id: "ram_capacity", desc: `Avoir au moins ${targetGb} Go de RAM`, target: targetGb, done: false },
                    { id: "boot_os", desc: "Vérifier que le PC démarre sous l'OS", done: false }
                ];
            } else {
                // Customer wants SSD upgrade or more storage
                subject = randArr(UPGRADE_STORAGE_SUBJECTS);
                text = `Bonjour,\n\nMon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.\n\nMerci d'avance,\n${clientName}`;
                budget = 120;
                reward = 140 + playerLevel * 15;
                xpReward = 100;
                
                // Downgrade client pc storage to HDD so they must upgrade
                clientPc.storage = { partId: "storage-barracuda-1tb", condition: "used" };
                clientPc.bootedOnce = false; // Must boot to test after swap
                
                requirements = [
                    { id: "fast_ssd", desc: "Installer un SSD M.2 NVMe d'au moins 1 To", done: false },
                    { id: "boot_os", desc: "Vérifier que le PC démarre sous l'OS", done: false }
                ];
            }
            pc = clientPc;
        } 
        else if (type === "repair") {
            subject = randArr(REPAIR_SUBJECTS);
            const repairTarget = Math.random() > 0.5 ? "cpu" : "gpu";
            
            if (repairTarget === "cpu") {
                text = `Bonjour,\n\nMon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.\n\nPourriez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?\n\nMerci,\n${clientName}`;
                
                // Break the CPU
                if (clientPc.cpu) clientPc.cpu.condition = "broken";
                clientPc.bootedOnce = false; // Must replace and boot to test
                
                const originalCpu = getComponentById(clientPc.cpu.partId);
                budget = originalCpu.price + 30;
                reward = 200 + playerLevel * 30;
                xpReward = 150;

                requirements = [
                    { id: "no_broken_parts", desc: "Aucun composant en panne dans le PC", done: false },
                    { id: "cpu_tier", desc: `Installer un processeur équivalent ou supérieur (${originalCpu.name})`, target: originalCpu.specs.score, done: false },
                    { id: "boot_os", desc: "Le PC doit démarrer correctement", done: false }
                ];
            } else {
                text = `Bonjour,\n\nJe n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.\n\nPourriez-vous remplacer ma carte graphique défectueuse ?\n\nBien à vous,\n${clientName}`;
                
                // Break GPU
                if (clientPc.gpu) clientPc.gpu.condition = "broken";
                clientPc.bootedOnce = false; // Must replace and boot to test
                
                const originalGpu = getComponentById(clientPc.gpu.partId);
                budget = originalGpu.price + 40;
                reward = 220 + playerLevel * 30;
                xpReward = 150;

                requirements = [
                    { id: "no_broken_parts", desc: "Aucun composant en panne", done: false },
                    { id: "gpu_tier", desc: `Installer une carte graphique équivalente ou supérieure (${originalGpu.name})`, target: originalGpu.specs.score, done: false },
                    { id: "boot_os", desc: "Le PC doit démarrer correctement", done: false }
                ];
            }
            pc = clientPc;
        } 
        else if (type === "benchmark") {
            subject = randArr(BENCHMARK_SUBJECTS);
            
            // Calculate a target score that is slightly challenging for their tier
            const currentScore = clientPc.score || 3000;
            const targetScore = Math.round(currentScore * 1.25);
            
            text = `Salut,\n\nJ'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de ${targetScore} sur l'outil de test.\n\nVous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !\n\nMerci,\n${clientName}`;
            
            budget = 300;
            reward = 280 + playerLevel * 40;
            xpReward = 200;
            
            requirements = [
                { id: "benchmark_score", desc: `Atteindre un score de benchmark d'au moins ${targetScore}`, target: targetScore, done: false },
                { id: "boot_os", desc: "Le PC doit démarrer sous l'OS", done: false }
            ];
            pc = clientPc;
        } 
        else if (type === "build") {
            subject = "Création d'un PC sur mesure de toutes pièces";
            
            // Targeted score for a custom build
            const targetScore = playerLevel * 1800 + 1000;
            budget = playerLevel * 250 + 500;
            reward = 350 + playerLevel * 50;
            xpReward = 300;

            text = `Bonjour,\n\nJe pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de ${budget}$.\n\nJ'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins ${targetScore} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !\n\nCordialement,\n${clientName}`;
            
            requirements = [
                { id: "has_all_parts", desc: "Installer tous les composants obligatoires", done: false },
                { id: "benchmark_score", desc: `Atteindre un score de benchmark de ${targetScore}`, target: targetScore, done: false },
                { id: "pc_budget", desc: `Ne pas dépasser le budget de pièces de ${budget}$`, target: budget, done: false },
                { id: "boot_os", desc: "Le PC démarre et l'OS est installé", done: false }
            ];
            pc = {
                case: null, motherboard: null, cpu: null, cooler: null,
                ram: null, gpu: null, storage: null, psu: null,
                thermalPasteApplied: false, cablesConnected: false,
                hasOs: false, isClean: true, score: 0, diagnosed: false,
                bootedOnce: false
            };
        }

        // Targeted virus wave multiplier
        if (state.currentEvent && state.currentEvent.id === "virus_wave" && type === "virus") {
            reward *= 2;
            xpReward *= 2;
        }

        const isUrgent = playerLevel >= 2 && Math.random() < 0.25; // 25% chance of urgent contracts
        const finalReward = isUrgent ? Math.round(reward * 1.8) : reward;
        const finalXpReward = isUrgent ? Math.round(xpReward * 1.8) : xpReward;

        jobs.push({
            id,
            clientName,
            subject: isUrgent ? "🚨 [URGENT 24H] " + subject : subject,
            text,
            type,
            status: "available",
            requirements,
            budget,
            reward: finalReward,
            xpReward: finalXpReward,
            pc,
            isUrgent,
            expiryDay: isUrgent ? (state ? state.day : 1) : null
        });
    }

    return jobs;
}

// CREATE BALANCED CLIENT PC ACCORDING TO PLAYER LEVEL
function createBaseClientPc(jobType, level) {
    // Generate different tier parts based on player level
    let mb = "mb-msi-b550";
    let cpu = "cpu-ryzen5-5600x";
    let cooler = "cooler-hyper-212";
    let ram = "ram-corsair-16-ddr4";
    let storage = "storage-kingston-480gb";
    let gpu = "gpu-rtx3060";
    let psu = "psu-corsair-650";
    let pcCase = "case-nzxt-h5";

    if (level === 1) {
        mb = "mb-prime-h410";
        cpu = "cpu-i3-10100f";
        cooler = "cooler-intel-stock";
        ram = "ram-crucial-8-ddr4";
        storage = "storage-barracuda-1tb";
        gpu = "gpu-gtx1650";
        psu = "psu-evga-500";
        pcCase = "case-office";
    } 
    else if (level >= 5 && level < 8) {
        mb = "mb-aorus-z690";
        cpu = "cpu-i7-12700k";
        cooler = "cooler-corsair-h100i";
        ram = "ram-kingston-32-ddr5";
        storage = "storage-samsung-1tb";
        gpu = "gpu-rtx3080";
        psu = "psu-seasonic-850";
        pcCase = "case-lianli-o11";
    }
    else if (level >= 8) {
        mb = "mb-asus-x670";
        cpu = "cpu-ryzen9-7950x";
        cooler = "cooler-nzxt-kraken-360";
        ram = "ram-corsair-64-ddr5";
        storage = "storage-crucial-2tb";
        gpu = "gpu-rtx4090";
        psu = "psu-bequiet-1300";
        pcCase = "case-fractal-north";
    }

    // Default fully functioning PC
    return {
        case: { partId: pcCase, condition: "used" },
        motherboard: { partId: mb, condition: "used" },
        cpu: { partId: cpu, condition: "used" },
        cooler: { partId: cooler, condition: "used" },
        ram: { partId: ram, condition: "used" },
        gpu: { partId: gpu, condition: "used" },
        storage: { partId: storage, condition: "used" },
        psu: { partId: psu, condition: "used" },
        
        thermalPasteApplied: true,
        cablesConnected: true,
        hasOs: true,
        isClean: true,
        score: calculatePcBenchmark(cpu, gpu, ram),
        diagnosed: true,
        bootedOnce: true
    };
}

// PC BENCHMARK FORMULA
export function calculatePcBenchmark(cpuId, gpuId, ramId, cpuClockMult = 1, gpuClockMult = 1, rams = null) {
    if (!cpuId || !gpuId || !ramId) return 0;
    
    const cpu = getComponentById(cpuId);
    const gpu = getComponentById(gpuId);
    const ram = getComponentById(ramId);

    if (!cpu || !gpu || !ram) return 0;

    const cpuScore = cpu.specs.score * cpuClockMult;
    const gpuScore = gpu.specs.score * gpuClockMult;
    
    let ramScore = ram.specs.score;
    if (rams && rams.length > 0) {
        const activeRams = rams.filter(r => r !== null);
        if (activeRams.length > 0) {
            const scores = activeRams.map(r => getComponentById(r.partId)?.specs.score || 0);
            const maxScore = Math.max(...scores);
            // Multi-channel bonus: +15% performance score for each additional RAM stick!
            const bonus = 1 + (activeRams.length - 1) * 0.15;
            ramScore = Math.round(maxScore * bonus);
        }
    }

    // Standard scoring formula
    const finalScore = Math.round((gpuScore * 0.7) + (cpuScore * 0.2) + (ramScore * 0.1));
    return finalScore;
}

// CHECK JOB STATUS REQUIREMENTS
export function checkJobRequirements(job) {
    const pc = job.pc;
    let allDone = true;
    
    const reqs = job.requirements.map(req => {
        let done = false;
        
        switch (req.id) {
            case "boot_os":
                done = pc && pc.case && pc.motherboard && pc.cpu && pc.cooler && pc.ram && pc.gpu && pc.storage && pc.psu &&
                       pc.cablesConnected && pc.thermalPasteApplied && pc.hasOs && pc.bootedOnce && !isAnyPartBroken(pc);
                break;
                
            case "clean_os":
                done = pc && pc.isClean && pc.hasOs;
                break;
                
            case "ram_capacity":
                if (pc) {
                    let totalCap = 0;
                    const ramList = pc.rams ? pc.rams.filter(r => r !== null) : (pc.ram ? [pc.ram] : []);
                    const processedKits = new Set();
                    ramList.forEach(r => {
                        if (r.kitId) {
                            if (processedKits.has(r.kitId)) return;
                            processedKits.add(r.kitId);
                        }
                        const rComp = getComponentById(r.partId);
                        if (rComp) {
                            totalCap += parseInt(rComp.specs.capacity.replace("GB", "").replace("Go", "").trim());
                        }
                    });
                    done = totalCap >= req.target;
                }
                break;
                
            case "fast_ssd":
                if (pc) {
                    const storageList = pc.storages ? pc.storages.filter(s => s !== null) : (pc.storage ? [pc.storage] : []);
                    done = storageList.some(s => {
                        const storeComp = getComponentById(s.partId);
                        if (storeComp) {
                            const isNVMe = storeComp.specs.storageType === "NVMe M.2";
                            const cap = parseInt(storeComp.specs.capacity.replace("TB", "").replace("To", "").trim()) || 0.5;
                            return isNVMe && (cap >= 1 || storeComp.id.includes("1tb") || storeComp.id.includes("2tb"));
                        }
                        return false;
                    });
                }
                break;

            case "no_broken_parts":
                done = pc && !isAnyPartBroken(pc);
                break;

            case "cpu_tier":
                if (pc && pc.cpu && pc.cpu.condition !== "broken") {
                    const cpuComp = getComponentById(pc.cpu.partId);
                    done = cpuComp && cpuComp.specs.score >= req.target;
                }
                break;

            case "gpu_tier":
                if (pc && pc.gpu && pc.gpu.condition !== "broken") {
                    const gpuComp = getComponentById(pc.gpu.partId);
                    done = gpuComp && gpuComp.specs.score >= req.target;
                }
                break;

            case "benchmark_score":
                done = pc && pc.score >= req.target && pc.hasOs && !isAnyPartBroken(pc);
                break;

            case "has_all_parts":
                done = pc && pc.case && pc.motherboard && pc.cpu && pc.cooler && pc.ram && pc.gpu && pc.storage && pc.psu;
                break;

            case "pc_budget":
                // Calculate parts total cost installed
                let cost = 0;
                Object.keys(pc).forEach(key => {
                    if (pc[key] && pc[key].partId && pc[key].condition !== "used") { // count cost of items player installed from shop
                        // If it came from customer inventory it was "used", so we only check if player bought new ones
                        const comp = getComponentById(pc[key].partId);
                        if (comp) cost += comp.price;
                    }
                });
                done = cost <= req.target;
                break;
        }

        if (!done) allDone = false;
        return { ...req, done };
    });

    return { requirements: reqs, allDone };
}

function isAnyPartBroken(pc) {
    if (!pc) return true;
    let broken = false;
    Object.keys(pc).forEach(key => {
        if (pc[key] && pc[key].condition === "broken") {
            broken = true;
        }
    });
    return broken;
}
