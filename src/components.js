/* ==========================================
   PC ARCHITECT TYCOON - COMPONENTS DATABASE
   ========================================== */

export const COMPONENTS = [
    // --- PROCESSORS (CPUs) ---
    {
        id: "cpu-i3-10100f",
        type: "cpu",
        name: "Intel Core i3-10100F",
        brand: "Intel",
        price: 80,
        level: 1,
        specs: {
            socket: "LGA1200",
            cores: "4 Cores / 8 Threads",
            speed: "3.6 GHz",
            power: 65,      // Watts
            score: 1800     // Benchmark coefficient
        }
    },
    {
        id: "cpu-ryzen3-3100",
        type: "cpu",
        name: "AMD Ryzen 3 3100",
        brand: "AMD",
        price: 75,
        level: 1,
        specs: {
            socket: "AM4",
            cores: "4 Cores / 8 Threads",
            speed: "3.6 GHz",
            power: 65,
            score: 1750
        }
    },
    {
        id: "cpu-i5-11400f",
        type: "cpu",
        name: "Intel Core i5-11400F",
        brand: "Intel",
        price: 130,
        level: 2,
        specs: {
            socket: "LGA1200",
            cores: "6 Cores / 12 Threads",
            speed: "2.6 GHz",
            power: 65,
            score: 3200
        }
    },
    {
        id: "cpu-ryzen5-5600x",
        type: "cpu",
        name: "AMD Ryzen 5 5600X",
        brand: "AMD",
        price: 150,
        level: 3,
        specs: {
            socket: "AM4",
            cores: "6 Cores / 12 Threads",
            speed: "3.7 GHz",
            power: 65,
            score: 4500
        }
    },
    {
        id: "cpu-i7-12700k",
        type: "cpu",
        name: "Intel Core i7-12700K",
        brand: "Intel",
        price: 280,
        level: 4,
        specs: {
            socket: "LGA1700",
            cores: "12 Cores / 20 Threads",
            speed: "3.6 GHz",
            power: 125,
            score: 7200
        }
    },
    {
        id: "cpu-ryzen7-5800x3d",
        type: "cpu",
        name: "AMD Ryzen 7 5800X3D",
        brand: "AMD",
        price: 320,
        level: 5,
        specs: {
            socket: "AM4",
            cores: "8 Cores / 16 Threads",
            speed: "3.4 GHz",
            power: 105,
            score: 8200
        }
    },
    {
        id: "cpu-i9-13900k",
        type: "cpu",
        name: "Intel Core i9-13900K",
        brand: "Intel",
        price: 550,
        level: 7,
        specs: {
            socket: "LGA1700",
            cores: "24 Cores / 32 Threads",
            speed: "3.0 GHz",
            power: 150,
            score: 11500
        }
    },
    {
        id: "cpu-ryzen7-7800x3d",
        type: "cpu",
        name: "AMD Ryzen 7 7800X3D",
        brand: "AMD",
        price: 390,
        level: 8,
        specs: {
            socket: "AM5",
            cores: "8 Cores / 16 Threads",
            speed: "4.2 GHz",
            power: 120,
            score: 10800
        }
    },
    {
        id: "cpu-i9-14900ks",
        type: "cpu",
        name: "Intel Core i9-14900KS",
        brand: "Intel",
        price: 690,
        level: 9,
        specs: {
            socket: "LGA1700",
            cores: "24 Cores / 32 Threads",
            speed: "3.2 GHz",
            power: 150,
            score: 12800
        }
    },
    {
        id: "cpu-ryzen9-7950x",
        type: "cpu",
        name: "AMD Ryzen 9 7950X",
        brand: "AMD",
        price: 520,
        level: 10,
        specs: {
            socket: "AM5",
            cores: "16 Cores / 32 Threads",
            speed: "4.5 GHz",
            power: 170,
            score: 12400
        }
    },

    // --- GRAPHICS CARDS (GPUs) ---
    {
        id: "gpu-rx580",
        type: "gpu",
        name: "AMD Radeon RX 580",
        brand: "AMD",
        price: 90,
        level: 1,
        specs: {
            vram: "8 GB GDDR5",
            speed: "1340 MHz",
            power: 185,
            score: 2200
        }
    },
    {
        id: "gpu-gtx1650",
        type: "gpu",
        name: "NVIDIA GeForce GTX 1650",
        brand: "NVIDIA",
        price: 110,
        level: 1,
        specs: {
            vram: "4 GB GDDR5",
            speed: "1485 MHz",
            power: 75,
            score: 1800
        }
    },
    {
        id: "gpu-rtx3060",
        type: "gpu",
        name: "NVIDIA GeForce RTX 3060",
        brand: "NVIDIA",
        price: 290,
        level: 2,
        specs: {
            vram: "12 GB GDDR6",
            speed: "1777 MHz",
            power: 170,
            score: 5100
        }
    },
    {
        id: "gpu-rx6600xt",
        type: "gpu",
        name: "AMD Radeon RX 6600 XT",
        brand: "AMD",
        price: 260,
        level: 3,
        specs: {
            vram: "8 GB GDDR6",
            speed: "2589 MHz",
            power: 160,
            score: 4800
        }
    },
    {
        id: "gpu-rtx3080",
        type: "gpu",
        name: "NVIDIA GeForce RTX 3080",
        brand: "NVIDIA",
        price: 650,
        level: 5,
        specs: {
            vram: "10 GB GDDR6X",
            speed: "1710 MHz",
            power: 320,
            score: 9200
        }
    },
    {
        id: "gpu-rx6800xt",
        type: "gpu",
        name: "AMD Radeon RX 6800 XT",
        brand: "AMD",
        price: 500,
        level: 6,
        specs: {
            vram: "16 GB GDDR6",
            speed: "2250 MHz",
            power: 300,
            score: 8800
        }
    },
    {
        id: "gpu-rtx4070ti",
        type: "gpu",
        name: "NVIDIA GeForce RTX 4070 Ti",
        brand: "NVIDIA",
        price: 790,
        level: 7,
        specs: {
            vram: "12 GB GDDR6X",
            speed: "2610 MHz",
            power: 285,
            score: 12500
        }
    },
    {
        id: "gpu-rx7900xtx",
        type: "gpu",
        name: "AMD Radeon RX 7900 XTX",
        brand: "AMD",
        price: 950,
        level: 8,
        specs: {
            vram: "24 GB GDDR6",
            speed: "2500 MHz",
            power: 355,
            score: 15000
        }
    },
    {
        id: "gpu-rtx4090",
        type: "gpu",
        name: "NVIDIA GeForce RTX 4090",
        brand: "NVIDIA",
        price: 1599,
        level: 10,
        specs: {
            vram: "24 GB GDDR6X",
            speed: "2520 MHz",
            power: 450,
            score: 22000
        }
    },

    // --- MOTHERBOARDS (MBs) ---
    {
        id: "mb-prime-h410",
        type: "motherboard",
        name: "ASUS Prime H410M-E",
        brand: "ASUS",
        price: 70,
        level: 1,
        specs: {
            socket: "LGA1200",
            ramType: "DDR4",
            size: "Micro-ATX"
        }
    },
    {
        id: "mb-msi-b550",
        type: "motherboard",
        name: "MSI B550-A PRO",
        brand: "MSI",
        price: 110,
        level: 1,
        specs: {
            socket: "AM4",
            ramType: "DDR4",
            size: "ATX"
        }
    },
    {
        id: "mb-aorus-z690",
        type: "motherboard",
        name: "Gigabyte Z690 AORUS ELITE",
        brand: "Gigabyte",
        price: 220,
        level: 4,
        specs: {
            socket: "LGA1700",
            ramType: "DDR5",
            size: "ATX"
        }
    },
    {
        id: "mb-asus-x670",
        type: "motherboard",
        name: "ASUS ROG Crosshair X670E Hero",
        brand: "ASUS",
        price: 480,
        level: 8,
        specs: {
            socket: "AM5",
            ramType: "DDR5",
            size: "ATX"
        }
    },

    // --- RAM ---
    {
        id: "ram-crucial-8-ddr4",
        type: "ram",
        name: "Crucial Basics 8GB DDR4",
        brand: "Crucial",
        price: 20,
        level: 1,
        specs: {
            ramType: "DDR4",
            capacity: "8 GB",
            speed: "2666 MHz",
            score: 500
        }
    },
    {
        id: "ram-corsair-16-ddr4",
        type: "ram",
        name: "Corsair Vengeance LPX 16GB (2x8)",
        brand: "Corsair",
        price: 45,
        level: 1,
        specs: {
            ramType: "DDR4",
            capacity: "16 GB",
            speed: "3200 MHz",
            score: 1100
        }
    },
    {
        id: "ram-gskill-32-ddr4",
        type: "ram",
        name: "G.Skill Ripjaws V 32GB (2x16)",
        brand: "G.Skill",
        price: 85,
        level: 3,
        specs: {
            ramType: "DDR4",
            capacity: "32 GB",
            speed: "3600 MHz",
            score: 2400
        }
    },
    {
        id: "ram-kingston-32-ddr5",
        type: "ram",
        name: "Kingston FURY Beast 32GB (2x16)",
        brand: "Kingston",
        price: 120,
        level: 4,
        specs: {
            ramType: "DDR5",
            capacity: "32 GB",
            speed: "5600 MHz",
            score: 3100
        }
    },
    {
        id: "ram-corsair-64-ddr5",
        type: "ram",
        name: "Corsair Dominator Titanium 64GB (2x32)",
        brand: "Corsair",
        price: 260,
        level: 8,
        specs: {
            ramType: "DDR5",
            capacity: "64 GB",
            speed: "6000 MHz",
            score: 5800
        }
    },

    // --- STORAGE ---
    {
        id: "storage-barracuda-1tb",
        type: "storage",
        name: "Seagate BarraCuda 1TB HDD",
        brand: "Seagate",
        price: 45,
        level: 1,
        specs: {
            storageType: "HDD",
            capacity: "1 TB",
            speed: "150 MB/s",
            score: 200
        }
    },
    {
        id: "storage-kingston-480gb",
        type: "storage",
        name: "Kingston A400 480GB SATA SSD",
        brand: "Kingston",
        price: 35,
        level: 1,
        specs: {
            storageType: "SATA SSD",
            capacity: "480 GB",
            speed: "500 MB/s",
            score: 600
        }
    },
    {
        id: "storage-samsung-1tb",
        type: "storage",
        name: "Samsung 970 EVO Plus 1TB NVMe M.2",
        brand: "Samsung",
        price: 80,
        level: 2,
        specs: {
            storageType: "NVMe M.2",
            capacity: "1 TB",
            speed: "3500 MB/s",
            score: 2200
        }
    },
    {
        id: "storage-crucial-2tb",
        type: "storage",
        name: "Crucial T700 2TB PCIe 5.0 NVMe M.2",
        brand: "Crucial",
        price: 240,
        level: 7,
        specs: {
            storageType: "NVMe M.2",
            capacity: "2 TB",
            speed: "12400 MB/s",
            score: 6500
        }
    },

    // --- POWER SUPPLY UNITS (PSUs) ---
    {
        id: "psu-evga-500",
        type: "psu",
        name: "EVGA 500 W1 (500W)",
        brand: "EVGA",
        price: 40,
        level: 1,
        specs: {
            wattage: 500,
            rating: "80+ White"
        }
    },
    {
        id: "psu-corsair-650",
        type: "psu",
        name: "Corsair CX650M (650W)",
        brand: "Corsair",
        price: 70,
        level: 2,
        specs: {
            wattage: 650,
            rating: "80+ Bronze"
        }
    },
    {
        id: "psu-seasonic-850",
        type: "psu",
        name: "Seasonic Focus GX-850 (850W)",
        brand: "Seasonic",
        price: 130,
        level: 4,
        specs: {
            wattage: 850,
            rating: "80+ Gold"
        }
    },
    {
        id: "psu-bequiet-1300",
        type: "psu",
        name: "be quiet! Dark Power 13 (1300W)",
        brand: "be quiet!",
        price: 290,
        level: 8,
        specs: {
            wattage: 1300,
            rating: "80+ Titanium"
        }
    },

    // --- COOLERS ---
    {
        id: "cooler-intel-stock",
        type: "cooler",
        name: "Intel Stock Cooler",
        brand: "Intel",
        price: 5,
        level: 1,
        specs: {
            socket: "LGA1200",
            coolingPower: "65W",
            style: "Air Cooler"
        }
    },
    {
        id: "cooler-amd-wraith",
        type: "cooler",
        name: "AMD Wraith Stealth",
        brand: "AMD",
        price: 5,
        level: 1,
        specs: {
            socket: "AM4",
            coolingPower: "65W",
            style: "Air Cooler"
        }
    },
    {
        id: "cooler-hyper-212",
        type: "cooler",
        name: "Cooler Master Hyper 212 Black",
        brand: "Cooler Master",
        price: 45,
        level: 1,
        specs: {
            socket: "AM4, AM5, LGA1200, LGA1700",
            coolingPower: "150W",
            style: "Air Cooler"
        }
    },
    {
        id: "cooler-corsair-h100i",
        type: "cooler",
        name: "Corsair H100i RGB Elite (240mm AIO)",
        brand: "Corsair",
        price: 140,
        level: 4,
        specs: {
            socket: "AM4, AM5, LGA1200, LGA1700",
            coolingPower: "250W",
            style: "Liquid AIO"
        }
    },
    {
        id: "cooler-nzxt-kraken-360",
        type: "cooler",
        name: "NZXT Kraken Elite 360",
        brand: "NZXT",
        price: 220,
        level: 7,
        specs: {
            socket: "AM4, AM5, LGA1200, LGA1700",
            coolingPower: "350W",
            style: "Liquid AIO"
        }
    },

    // --- CASES ---
    {
        id: "case-office",
        type: "case",
        name: "Generic Office Case Black",
        brand: "Generic",
        price: 30,
        level: 1,
        specs: {
            size: "ATX / Micro-ATX",
            airflow: "Faible"
        }
    },
    {
        id: "case-nzxt-h5",
        type: "case",
        name: "NZXT H5 Flow TG Black",
        brand: "NZXT",
        price: 90,
        level: 2,
        specs: {
            size: "ATX / Micro-ATX",
            airflow: "Excellent"
        }
    },
    {
        id: "case-lianli-o11",
        type: "case",
        name: "Lian Li O11 Dynamic Clear",
        brand: "Lian Li",
        price: 140,
        level: 4,
        specs: {
            size: "ATX",
            airflow: "Très Bon"
        }
    },
    {
        id: "case-fractal-north",
        type: "case",
        name: "Fractal Design North Charcoal",
        brand: "Fractal Design",
        price: 160,
        level: 6,
        specs: {
            size: "ATX",
            airflow: "Excellent"
        }
    }
];

// Helper to find a component by ID
export function getComponentById(id) {
    return COMPONENTS.find(c => c.id === id) || null;
}
