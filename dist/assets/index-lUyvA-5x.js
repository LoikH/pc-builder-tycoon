(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const j=[{id:"cpu-i3-10100f",type:"cpu",name:"Intel Core i3-10100F",brand:"Intel",price:80,level:1,specs:{socket:"LGA1200",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1800}},{id:"cpu-ryzen3-3100",type:"cpu",name:"AMD Ryzen 3 3100",brand:"AMD",price:75,level:1,specs:{socket:"AM4",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1750}},{id:"cpu-ryzen5-3600",type:"cpu",name:"AMD Ryzen 5 3600",brand:"AMD",price:95,level:2,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.6 GHz",power:65,score:2800}},{id:"cpu-i5-11400f",type:"cpu",name:"Intel Core i5-11400F",brand:"Intel",price:130,level:2,specs:{socket:"LGA1200",cores:"6 Cores / 12 Threads",speed:"2.6 GHz",power:65,score:3200}},{id:"cpu-i5-12400f",type:"cpu",name:"Intel Core i5-12400F",brand:"Intel",price:140,level:3,specs:{socket:"LGA1700",cores:"6 Cores / 12 Threads",speed:"2.5 GHz",power:65,score:4100}},{id:"cpu-ryzen5-5600x",type:"cpu",name:"AMD Ryzen 5 5600X",brand:"AMD",price:150,level:3,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.7 GHz",power:65,score:4500}},{id:"cpu-ryzen5-7600",type:"cpu",name:"AMD Ryzen 5 7600",brand:"AMD",price:210,level:4,specs:{socket:"AM5",cores:"6 Cores / 12 Threads",speed:"3.8 GHz",power:65,score:5600}},{id:"cpu-i5-13600k",type:"cpu",name:"Intel Core i5-13600K",brand:"Intel",price:290,level:5,specs:{socket:"LGA1700",cores:"14 Cores / 20 Threads",speed:"3.5 GHz",power:125,score:6800}},{id:"cpu-i7-12700k",type:"cpu",name:"Intel Core i7-12700K",brand:"Intel",price:280,level:5,specs:{socket:"LGA1700",cores:"12 Cores / 20 Threads",speed:"3.6 GHz",power:125,score:7200}},{id:"cpu-ryzen7-5800x3d",type:"cpu",name:"AMD Ryzen 7 5800X3D",brand:"AMD",price:320,level:6,specs:{socket:"AM4",cores:"8 Cores / 16 Threads",speed:"3.4 GHz",power:105,score:8200}},{id:"cpu-ryzen7-7700x",type:"cpu",name:"AMD Ryzen 7 7700X",brand:"AMD",price:310,level:6,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.5 GHz",power:105,score:8800}},{id:"cpu-i7-14700k",type:"cpu",name:"Intel Core i7-14700K",brand:"Intel",price:380,level:7,specs:{socket:"LGA1700",cores:"20 Cores / 28 Threads",speed:"3.4 GHz",power:125,score:9900}},{id:"cpu-i9-13900k",type:"cpu",name:"Intel Core i9-13900K",brand:"Intel",price:550,level:8,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.0 GHz",power:150,score:11500}},{id:"cpu-ryzen7-7800x3d",type:"cpu",name:"AMD Ryzen 7 7800X3D",brand:"AMD",price:390,level:8,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.2 GHz",power:120,score:10800}},{id:"cpu-i9-14900ks",type:"cpu",name:"Intel Core i9-14900KS",brand:"Intel",price:690,level:9,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.2 GHz",power:150,score:12800}},{id:"cpu-ryzen9-7950x",type:"cpu",name:"AMD Ryzen 9 7950X",brand:"AMD",price:520,level:9,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.5 GHz",power:170,score:12400}},{id:"cpu-ryzen9-9950x",type:"cpu",name:"AMD Ryzen 9 9950X",brand:"AMD",price:640,level:10,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.3 GHz",power:170,score:14200}},{id:"gpu-rx580",type:"gpu",name:"AMD Radeon RX 580",brand:"AMD",price:90,level:1,specs:{vram:"8 GB GDDR5",speed:"1340 MHz",power:185,score:2200}},{id:"gpu-gtx1650",type:"gpu",name:"NVIDIA GeForce GTX 1650",brand:"NVIDIA",price:110,level:1,specs:{vram:"4 GB GDDR5",speed:"1485 MHz",power:75,score:1800}},{id:"gpu-rtx3050",type:"gpu",name:"NVIDIA GeForce RTX 3050",brand:"NVIDIA",price:180,level:2,specs:{vram:"8 GB GDDR6",speed:"1777 MHz",power:130,score:3400}},{id:"gpu-rtx3060",type:"gpu",name:"NVIDIA GeForce RTX 3060",brand:"NVIDIA",price:290,level:3,specs:{vram:"12 GB GDDR6",speed:"1777 MHz",power:170,score:5100}},{id:"gpu-rx6600xt",type:"gpu",name:"AMD Radeon RX 6600 XT",brand:"AMD",price:260,level:3,specs:{vram:"8 GB GDDR6",speed:"2589 MHz",power:160,score:4800}},{id:"gpu-rx6700xt",type:"gpu",name:"AMD Radeon RX 6700 XT",brand:"AMD",price:340,level:4,specs:{vram:"12 GB GDDR6",speed:"2424 MHz",power:230,score:6800}},{id:"gpu-rtx4060ti",type:"gpu",name:"NVIDIA GeForce RTX 4060 Ti",brand:"NVIDIA",price:399,level:5,specs:{vram:"8 GB GDDR6",speed:"2535 MHz",power:160,score:7400}},{id:"gpu-rtx3080",type:"gpu",name:"NVIDIA GeForce RTX 3080",brand:"NVIDIA",price:650,level:6,specs:{vram:"10 GB GDDR6X",speed:"1710 MHz",power:320,score:9200}},{id:"gpu-rx6800xt",type:"gpu",name:"AMD Radeon RX 6800 XT",brand:"AMD",price:500,level:6,specs:{vram:"16 GB GDDR6",speed:"2250 MHz",power:300,score:8800}},{id:"gpu-rtx4070super",type:"gpu",name:"NVIDIA GeForce RTX 4070 Super",brand:"NVIDIA",price:599,level:7,specs:{vram:"12 GB GDDR6X",speed:"2475 MHz",power:220,score:11800}},{id:"gpu-rx7800xt",type:"gpu",name:"AMD Radeon RX 7800 XT",brand:"AMD",price:510,level:7,specs:{vram:"16 GB GDDR6",speed:"2124 MHz",power:263,score:10400}},{id:"gpu-rtx4070ti",type:"gpu",name:"NVIDIA GeForce RTX 4070 Ti",brand:"NVIDIA",price:790,level:8,specs:{vram:"12 GB GDDR6X",speed:"2610 MHz",power:285,score:12500}},{id:"gpu-rtx4080super",type:"gpu",name:"NVIDIA GeForce RTX 4080 Super",brand:"NVIDIA",price:999,level:8,specs:{vram:"16 GB GDDR6X",speed:"2550 MHz",power:320,score:16500}},{id:"gpu-rx7900xtx",type:"gpu",name:"AMD Radeon RX 7900 XTX",brand:"AMD",price:950,level:9,specs:{vram:"24 GB GDDR6",speed:"2500 MHz",power:355,score:15e3}},{id:"gpu-rtx4090",type:"gpu",name:"NVIDIA GeForce RTX 4090",brand:"NVIDIA",price:1599,level:10,specs:{vram:"24 GB GDDR6X",speed:"2520 MHz",power:450,score:22e3}},{id:"gpu-rtx5090",type:"gpu",name:"NVIDIA GeForce RTX 5090 Black",brand:"NVIDIA",price:1999,level:10,specs:{vram:"32 GB GDDR7",speed:"2650 MHz",power:550,score:28500}},{id:"mb-prime-h410",type:"motherboard",name:"ASUS Prime H410M-E",brand:"ASUS",price:70,level:1,specs:{socket:"LGA1200",ramType:"DDR4",size:"Micro-ATX"}},{id:"mb-msi-b550",type:"motherboard",name:"MSI B550-A PRO",brand:"MSI",price:110,level:1,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-rog-b550",type:"motherboard",name:"ASUS ROG STRIX B550-F",brand:"ASUS",price:160,level:3,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-mag-b760",type:"motherboard",name:"MSI MAG B760 TOMAHAWK",brand:"MSI",price:180,level:4,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-aorus-z690",type:"motherboard",name:"Gigabyte Z690 AORUS ELITE",brand:"Gigabyte",price:220,level:5,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-b650-gaming",type:"motherboard",name:"Gigabyte B650 GAMING X AX",brand:"Gigabyte",price:190,level:5,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"mb-rog-z790",type:"motherboard",name:"ASUS ROG MAXIMUS Z790 HERO",brand:"ASUS",price:550,level:8,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-asus-x670",type:"motherboard",name:"ASUS ROG Crosshair X670E Hero",brand:"ASUS",price:480,level:8,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"ram-crucial-8-ddr4",type:"ram",name:"Crucial Basics 8GB DDR4",brand:"Crucial",price:20,level:1,specs:{ramType:"DDR4",capacity:"8 GB",speed:"2666 MHz",score:500}},{id:"ram-corsair-16-ddr4",type:"ram",name:"Corsair Vengeance LPX 16GB (2x8)",brand:"Corsair",price:45,level:1,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:1100}},{id:"ram-crucial-16-single-ddr4",type:"ram",name:"Crucial Basics 16GB DDR4",brand:"Crucial",price:35,level:2,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:950}},{id:"ram-corsair-rgb-32-ddr4",type:"ram",name:"Corsair Vengeance RGB 32GB (2x16)",brand:"Corsair",price:80,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2200}},{id:"ram-gskill-32-ddr4",type:"ram",name:"G.Skill Ripjaws V 32GB (2x16)",brand:"G.Skill",price:85,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2400}},{id:"ram-kingston-32-ddr5",type:"ram",name:"Kingston FURY Beast 32GB (2x16)",brand:"Kingston",price:120,level:4,specs:{ramType:"DDR5",capacity:"32 GB",speed:"5600 MHz",score:3100}},{id:"ram-gskill-rgb-32-ddr5",type:"ram",name:"G.Skill Trident Z5 RGB 32GB (2x16)",brand:"G.Skill",price:140,level:5,specs:{ramType:"DDR5",capacity:"32 GB",speed:"6000 MHz",score:3600}},{id:"ram-kingston-64-ddr5",type:"ram",name:"Kingston FURY Renegade 64GB (2x32)",brand:"Kingston",price:240,level:7,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6400 MHz",score:5200}},{id:"ram-corsair-64-ddr5",type:"ram",name:"Corsair Dominator Titanium 64GB (2x32)",brand:"Corsair",price:260,level:8,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6000 MHz",score:5800}},{id:"ram-gskill-96-ddr5",type:"ram",name:"G.Skill Trident Z5 Neo 96GB (2x48)",brand:"G.Skill",price:380,level:10,specs:{ramType:"DDR5",capacity:"96 GB",speed:"6400 MHz",score:7200}},{id:"storage-barracuda-1tb",type:"storage",name:"Seagate BarraCuda 1TB HDD",brand:"Seagate",price:45,level:1,specs:{storageType:"HDD",capacity:"1 TB",speed:"150 MB/s",score:200}},{id:"storage-kingston-480gb",type:"storage",name:"Kingston A400 480GB SATA SSD",brand:"Kingston",price:35,level:1,specs:{storageType:"SATA SSD",capacity:"480 GB",speed:"500 MB/s",score:600}},{id:"storage-crucial-1tb-sata",type:"storage",name:"Crucial MX500 1TB SATA SSD",brand:"Crucial",price:65,level:2,specs:{storageType:"SATA SSD",capacity:"1 TB",speed:"560 MB/s",score:1100}},{id:"storage-samsung-1tb",type:"storage",name:"Samsung 970 EVO Plus 1TB NVMe M.2",brand:"Samsung",price:80,level:2,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2200}},{id:"storage-wd-1tb-nvme",type:"storage",name:"WD Blue SN570 1TB NVMe M.2",brand:"Western Digital",price:70,level:3,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2100}},{id:"storage-samsung-990pro-2tb",type:"storage",name:"Samsung 990 PRO 2TB NVMe M.2",brand:"Samsung",price:170,level:6,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"7450 MB/s",score:4800}},{id:"storage-crucial-2tb",type:"storage",name:"Crucial T700 2TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:240,level:7,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"12400 MB/s",score:6500}},{id:"storage-crucial-4tb-pcie5",type:"storage",name:"Crucial T700 4TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:420,level:9,specs:{storageType:"NVMe M.2",capacity:"4 TB",speed:"12400 MB/s",score:8200}},{id:"psu-evga-500",type:"psu",name:"EVGA 500 W1 (500W)",brand:"EVGA",price:40,level:1,specs:{wattage:500,rating:"80+ White"}},{id:"psu-bequiet-600",type:"psu",name:"be quiet! System Power 10 600W",brand:"be quiet!",price:55,level:2,specs:{wattage:600,rating:"80+ Bronze"}},{id:"psu-corsair-650",type:"psu",name:"Corsair CX650M (650W)",brand:"Corsair",price:70,level:2,specs:{wattage:650,rating:"80+ Bronze"}},{id:"psu-msi-750",type:"psu",name:"MSI MAG A750GL (750W)",brand:"MSI",price:90,level:3,specs:{wattage:750,rating:"80+ Gold"}},{id:"psu-seasonic-850",type:"psu",name:"Seasonic Focus GX-850 (850W)",brand:"Seasonic",price:130,level:4,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-corsair-rm850x",type:"psu",name:"Corsair RM850x (850W)",brand:"Corsair",price:140,level:5,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-corsair-rm1000x",type:"psu",name:"Corsair RM1000x (1000W)",brand:"Corsair",price:190,level:7,specs:{wattage:1e3,rating:"80+ Gold"}},{id:"psu-bequiet-1300",type:"psu",name:"be quiet! Dark Power 13 (1300W)",brand:"be quiet!",price:290,level:8,specs:{wattage:1300,rating:"80+ Titanium"}},{id:"psu-rog-thor-1600",type:"psu",name:"ASUS ROG Thor 1600W",brand:"ASUS",price:450,level:10,specs:{wattage:1600,rating:"80+ Titanium"}},{id:"cooler-intel-stock",type:"cooler",name:"Intel Stock Cooler",brand:"Intel",price:5,level:1,specs:{socket:"LGA1200",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-amd-wraith",type:"cooler",name:"AMD Wraith Stealth",brand:"AMD",price:5,level:1,specs:{socket:"AM4",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-bequiet-rock2",type:"cooler",name:"be quiet! Pure Rock 2 Black",brand:"be quiet!",price:40,level:2,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-hyper-212",type:"cooler",name:"Cooler Master Hyper 212 Black",brand:"Cooler Master",price:45,level:2,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-corsair-h100i",type:"cooler",name:"Corsair H100i RGB Elite (240mm AIO)",brand:"Corsair",price:140,level:4,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"250W",style:"Liquid AIO"}},{id:"cooler-noctua-nhd15",type:"cooler",name:"Noctua NH-D15 chromax.black",brand:"Noctua",price:110,level:5,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"220W",style:"Air Cooler"}},{id:"cooler-nzxt-kraken-360",type:"cooler",name:"NZXT Kraken Elite 360",brand:"NZXT",price:220,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"350W",style:"Liquid AIO"}},{id:"cooler-deepcool-lt720",type:"cooler",name:"DeepCool LT720 (360mm AIO)",brand:"DeepCool",price:150,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"300W",style:"Liquid AIO"}},{id:"cooler-rog-ryujin-3",type:"cooler",name:"ASUS ROG Ryujin III 360 ARGB",brand:"ASUS",price:320,level:9,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"380W",style:"Liquid AIO"}},{id:"case-office",type:"case",name:"Generic Office Case Black",brand:"Generic",price:30,level:1,specs:{size:"ATX / Micro-ATX",airflow:"Faible"}},{id:"case-nzxt-h5",type:"case",name:"NZXT H5 Flow TG Black",brand:"NZXT",price:90,level:2,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-corsair-4000d",type:"case",name:"Corsair 4000D Airflow Black",brand:"Corsair",price:100,level:3,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-bequiet-500dx",type:"case",name:"be quiet! Pure Base 500DX",brand:"be quiet!",price:115,level:4,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-lianli-o11",type:"case",name:"Lian Li O11 Dynamic Clear",brand:"Lian Li",price:140,level:4,specs:{size:"ATX",airflow:"Très Bon"}},{id:"case-fractal-north",type:"case",name:"Fractal Design North Charcoal",brand:"Fractal Design",price:160,level:6,specs:{size:"ATX",airflow:"Excellent"}},{id:"case-phanteks-nv7",type:"case",name:"Phanteks NV7 Matte White",brand:"Phanteks",price:210,level:7,specs:{size:"ATX",airflow:"Excellent"}},{id:"case-rog-hyperion",type:"case",name:"ASUS ROG Hyperion GR701",brand:"ASUS",price:420,level:9,specs:{size:"ATX",airflow:"Excellent"}}];function d(e){return j.find(t=>t.id===e)||null}function K(e){if(!e)return{ram:1,nvme:0,sata:1};switch(e){case"mb-prime-h410":return{ram:2,nvme:1,sata:2};case"mb-msi-b550":case"mb-rog-b550":return{ram:4,nvme:2,sata:4};case"mb-mag-b760":case"mb-b650-gaming":return{ram:4,nvme:3,sata:4};case"mb-aorus-z690":return{ram:4,nvme:3,sata:4};case"mb-rog-z790":case"mb-asus-x670":return{ram:4,nvme:4,sata:6};default:return{ram:2,nvme:1,sata:2}}}const Ie=["Jean-Michel Tech","Sophie.Gamer","Kévin Du 93","Thomas.Dev","Lucas.Stream","Emma.Designer","Alexandre.V","Mélanie Pro","Léa.Youtuber","Julien.Hardcore"],Me=["Mon PC s'éteint tout seul !","Besoin d'un diagnostic en urgence","Écran bleu à répétition...","Mon PC refuse de démarrer !","Bruit bizarre venant de l'alimentation"],Ce=["Besoin de plus de puissance pour Cyberpunk","Mon PC rame sur Photoshop !","Besoin de plus de mémoire vive","Passer à {targetGb} Go de RAM"],$e=["Besoin de plus de stockage pour mes vidéos","Mon disque dur est plein !","Besoin d'un SSD plus rapide"],ke=["Mon ordinateur est extrêmement lent !","Des pubs bizarres s'affichent partout","Aide ! Je crois que j'ai été piraté","Nettoyage de printemps nécessaire","PC infecté, SOS !"],Ee=["Mon PC doit tourner plus vite !","Je veux battre le score de mon frère","Aide pour optimiser mon score 3DMark","Config Overclocking stable demandée","Besoin de performances maximales"];function F(e){return e[Math.floor(Math.random()*e.length)]}function ge(e,t=1){const s=[];for(let n=0;n<t;n++){const a="job-"+$(),i=F(Ie);let c=["virus","upgrade"];e>=2&&c.push("repair"),e>=3&&c.push("benchmark"),e>=4&&c.push("build");const p=F(c);let u="",l="",x=0,g=0,h=0,b=null,m=[];const f=Pe(p,e);if(p==="virus")u=F(ke),l=`Bonjour,

Depuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.

Pouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?

Merci,
${i}`,x=0,g=120+e*20,h=80,f.isClean=!1,m=[{id:"clean_os",desc:"Supprimer tous les virus",done:!1},{id:"boot_os",desc:"S'assurer que le PC démarre sous l'OS",done:!1}],b=f;else if(p==="upgrade"){if((Math.random()>.5?"ram":"storage")==="ram"){const y=f.ram&&d(f.ram.partId).specs.capacity.includes("8")?16:32;u=F(Ce).replace("{targetGb}",y),l=`Salut,

Je joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.

Pourriez-vous mettre à niveau ma RAM pour atteindre au moins ${y} Go ?

Cordialement,
${i}`,x=y===16?80:160,g=150+e*15,h=100,m=[{id:"ram_capacity",desc:`Avoir au moins ${y} Go de RAM`,target:y,done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}]}else u=F($e),l=`Bonjour,

Mon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.

Merci d'avance,
${i}`,x=120,g=140+e*15,h=100,f.storage={partId:"storage-barracuda-1tb",condition:"used"},f.bootedOnce=!1,m=[{id:"fast_ssd",desc:"Installer un SSD M.2 NVMe d'au moins 1 To",done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}];b=f}else if(p==="repair"){if(u=F(Me),(Math.random()>.5?"cpu":"gpu")==="cpu"){l=`Bonjour,

Mon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.

Pourriez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?

Merci,
${i}`,f.cpu&&(f.cpu.condition="broken"),f.bootedOnce=!1;const y=d(f.cpu.partId);x=y.price+30,g=200+e*30,h=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne dans le PC",done:!1},{id:"cpu_tier",desc:`Installer un processeur équivalent ou supérieur (${y.name})`,target:y.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}else{l=`Bonjour,

Je n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.

Pourriez-vous remplacer ma carte graphique défectueuse ?

Bien à vous,
${i}`,f.gpu&&(f.gpu.condition="broken"),f.bootedOnce=!1;const y=d(f.gpu.partId);x=y.price+40,g=220+e*30,h=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne",done:!1},{id:"gpu_tier",desc:`Installer une carte graphique équivalente ou supérieure (${y.name})`,target:y.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}b=f}else if(p==="benchmark"){u=F(Ee);const E=f.score||3e3,y=Math.round(E*1.25);l=`Salut,

J'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de ${y} sur l'outil de test.

Vous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !

Merci,
${i}`,x=300,g=280+e*40,h=200,m=[{id:"benchmark_score",desc:`Atteindre un score de benchmark d'au moins ${y}`,target:y,done:!1},{id:"boot_os",desc:"Le PC doit démarrer sous l'OS",done:!1}],b=f}else if(p==="build"){u="Création d'un PC sur mesure de toutes pièces";const E=e*1800+1e3;x=e*250+500,g=350+e*50,h=300,l=`Bonjour,

Je pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de ${x}$.

J'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins ${E} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !

Cordialement,
${i}`,m=[{id:"has_all_parts",desc:"Installer tous les composants obligatoires",done:!1},{id:"benchmark_score",desc:`Atteindre un score de benchmark de ${E}`,target:E,done:!1},{id:"pc_budget",desc:`Ne pas dépasser le budget de pièces de ${x}$`,target:x,done:!1},{id:"boot_os",desc:"Le PC démarre et l'OS est installé",done:!1}],b={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!1,bootedOnce:!1}}o.currentEvent&&o.currentEvent.id==="virus_wave"&&p==="virus"&&(g*=2,h*=2);const C=e>=2&&Math.random()<.25,M=C?Math.round(g*1.8):g,P=C?Math.round(h*1.8):h;s.push({id:a,clientName:i,subject:C?"🚨 [URGENT 24H] "+u:u,text:l,type:p,status:"available",requirements:m,budget:x,reward:M,xpReward:P,pc:b,isUrgent:C,expiryDay:C?o?o.day:1:null})}return s}function Pe(e,t){let s="mb-msi-b550",n="cpu-ryzen5-5600x",a="cooler-hyper-212",i="ram-corsair-16-ddr4",c="storage-kingston-480gb",p="gpu-rtx3060",u="psu-corsair-650",l="case-nzxt-h5";return t===1?(s="mb-prime-h410",n="cpu-i3-10100f",a="cooler-intel-stock",i="ram-crucial-8-ddr4",c="storage-barracuda-1tb",p="gpu-gtx1650",u="psu-evga-500",l="case-office"):t>=5&&t<8?(s="mb-aorus-z690",n="cpu-i7-12700k",a="cooler-corsair-h100i",i="ram-kingston-32-ddr5",c="storage-samsung-1tb",p="gpu-rtx3080",u="psu-seasonic-850",l="case-lianli-o11"):t>=8&&(s="mb-asus-x670",n="cpu-ryzen9-7950x",a="cooler-nzxt-kraken-360",i="ram-corsair-64-ddr5",c="storage-crucial-2tb",p="gpu-rtx4090",u="psu-bequiet-1300",l="case-fractal-north"),{case:{partId:l,condition:"used"},motherboard:{partId:s,condition:"used"},cpu:{partId:n,condition:"used"},cooler:{partId:a,condition:"used"},ram:{partId:i,condition:"used"},gpu:{partId:p,condition:"used"},storage:{partId:c,condition:"used"},psu:{partId:u,condition:"used"},thermalPasteApplied:!0,cablesConnected:!0,hasOs:!0,isClean:!0,score:Q(n,p,i),diagnosed:!0,bootedOnce:!0}}function Q(e,t,s,n=1,a=1,i=null){if(!e||!t||!s)return 0;const c=d(e),p=d(t),u=d(s);if(!c||!p||!u)return 0;const l=c.specs.score*n,x=p.specs.score*a;let g=u.specs.score;if(i&&i.length>0){const b=i.filter(m=>m!==null);if(b.length>0){const m=b.map(M=>{var P;return((P=d(M.partId))==null?void 0:P.specs.score)||0}),f=Math.max(...m),C=1+(b.length-1)*.15;g=Math.round(f*C)}}return Math.round(x*.7+l*.2+g*.1)}function Ae(e){const t=e.pc;let s=!0;return{requirements:e.requirements.map(a=>{let i=!1;switch(a.id){case"boot_os":i=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu&&t.cablesConnected&&t.thermalPasteApplied&&t.hasOs&&t.bootedOnce&&!se(t);break;case"clean_os":i=t&&t.isClean&&t.hasOs;break;case"ram_capacity":if(t){let p=0;const u=t.rams?t.rams.filter(x=>x!==null):t.ram?[t.ram]:[],l=new Set;u.forEach(x=>{if(x.kitId){if(l.has(x.kitId))return;l.add(x.kitId)}const g=d(x.partId);g&&(p+=parseInt(g.specs.capacity.replace("GB","").replace("Go","").trim()))}),i=p>=a.target}break;case"fast_ssd":t&&(i=(t.storages?t.storages.filter(u=>u!==null):t.storage?[t.storage]:[]).some(u=>{const l=d(u.partId);if(l){const x=l.specs.storageType==="NVMe M.2",g=parseInt(l.specs.capacity.replace("TB","").replace("To","").trim())||.5;return x&&(g>=1||l.id.includes("1tb")||l.id.includes("2tb"))}return!1}));break;case"no_broken_parts":i=t&&!se(t);break;case"cpu_tier":if(t&&t.cpu&&t.cpu.condition!=="broken"){const p=d(t.cpu.partId);i=p&&p.specs.score>=a.target}break;case"gpu_tier":if(t&&t.gpu&&t.gpu.condition!=="broken"){const p=d(t.gpu.partId);i=p&&p.specs.score>=a.target}break;case"benchmark_score":i=t&&t.score>=a.target&&t.hasOs&&!se(t);break;case"has_all_parts":i=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu;break;case"pc_budget":let c=0;Object.keys(t).forEach(p=>{if(t[p]&&t[p].partId&&t[p].condition!=="used"){const u=d(t[p].partId);u&&(c+=u.price)}}),i=c<=a.target;break}return i||(s=!1),{...a,done:i}}),allDone:s}}function se(e){if(!e)return!0;let t=!1;return Object.keys(e).forEach(s=>{e[s]&&e[s].condition==="broken"&&(t=!0)}),t}const ce={money:1500,level:1,xp:0,day:1,inventory:[],activeJobs:[],workbenches:[{id:1,pc:null,unlocked:!0},{id:2,pc:null,unlocked:!1,cost:800},{id:3,pc:null,unlocked:!1,cost:2e3}],selectedWorkbenchId:1,deliveryQueue:[],bargainBin:[],customPcs:[],completedJobsCount:0,currentEvent:null,liquidMetalCount:0,hasThermalProbe:!1,hasFastUsb:!1,showroomPcs:[],hasSeenIntro:!1},pe=[{id:"silicon_shortage",title:"🔥 Pénurie Mondiale de Silicium",text:"Des usines à Taiwan subissent des coupures d'électricité massives. Le prix d'achat de toutes les cartes graphiques (GPU) et processeurs (CPU) augmente de 40% aujourd'hui !",modifiers:{cpu:1.4,gpu:1.4}},{id:"memory_crisis",title:"⚡ Crise des Puces de Mémoire",text:"Un incendie s'est déclaré chez un important fabricant de plaquettes de silicium. Le prix de la mémoire RAM et des disques de stockage (SSD/HDD) augmente de 50% aujourd'hui !",modifiers:{ram:1.5,storage:1.5}},{id:"black_friday",title:"🛍️ Soldes de Folie (Black Friday)",text:"C'est le Black Friday ! Profitez d'une réduction de 15% sur toutes les pièces détachées de la boutique, et la livraison Express passe de 50$ à seulement 25$ !",modifiers:{global_discount:.85,express_shipping:25}},{id:"virus_wave",title:"🛡️ Cyber-Attaque Mondiale",text:"Un ransomware redoutable baptisé 'TycoonCrypt' infecte des milliers de PC. Les récompenses de Cash et d'XP pour toutes les missions de désinfection de virus sont DOUBLÉES aujourd'hui !",modifiers:{virus_reward:2}}];function J(e){if(!e)return 0;let t=e.price;const s=o.currentEvent;s&&s.modifiers&&(s.modifiers[e.type]&&(t*=s.modifiers[e.type]),s.modifiers.global_discount&&(t*=s.modifiers.global_discount));const n=(o.showroomPcs||[]).reduce((i,c)=>c&&c.pc?i+(c.pc.score||0):i,0),a=Math.min(Math.floor(n/2500),20);return a>0&&(t*=1-a/100),Math.round(t)}function Se(){if(Math.random()>.4)o.currentEvent=null;else{const e=pe[Math.floor(Math.random()*pe.length)];o.currentEvent=JSON.parse(JSON.stringify(e))}w()}let o={...ce};function $(){return Math.random().toString(36).substring(2,9)+Date.now().toString(36)}function re(e){return e===1?100:Math.round(100*Math.pow(1.8,e-1))}function w(){try{localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(o))}catch(e){console.error("Impossible de sauvegarder la partie :",e)}}function Te(){try{const e=localStorage.getItem("pc_architect_tycoon_save");if(e)return o=JSON.parse(e),o={...ce,...o},!0}catch(e){console.error("Erreur lors du chargement :",e)}return Be(),!1}function Be(){o=JSON.parse(JSON.stringify(ce)),o.inventory.push({id:$(),partId:"storage-kingston-480gb",condition:"new",pricePaid:35},{id:$(),partId:"ram-crucial-8-ddr4",condition:"new",pricePaid:20},{id:$(),partId:"cooler-intel-stock",condition:"new",pricePaid:5}),o.activeJobs=ge(1,3),ve(),w()}function ze(e){o.xp+=e;let t=re(o.level),s=!1;for(;o.xp>=t;)o.xp-=t,o.level+=1,t=re(o.level),s=!0;return w(),{levelUp:s,currentLevel:o.level}}function Le(e){o.money+=e,w()}function De(e){return o.money>=e?(o.money-=e,w(),!0):!1}function Re(e,t="standard"){let s=0;e.forEach(a=>{const i=d(a);i&&(s+=J(i))});let n=t==="express"?50:10;return o.currentEvent&&o.currentEvent.modifiers&&o.currentEvent.modifiers.express_shipping!==void 0&&t==="express"&&(n=o.currentEvent.modifiers.express_shipping),s+=n,De(s)?(e.forEach(a=>{const i=d(a);if(!i)return;const c=J(i);t==="express"?o.inventory.push({id:$(),partId:a,condition:"new",pricePaid:c}):o.deliveryQueue.push({partId:a,condition:"new",deliveryDay:o.day+1,pricePaid:c})}),w(),{success:!0,cost:s}):{success:!1,cost:s}}function ve(){const e=["Gaming PC pas cher","Bête de Bureautique","Ancienne Station de travail","PC Gamer HS","PC Ne Démarre Plus"],t=["case-office","case-nzxt-h5"],s=["mb-prime-h410","mb-msi-b550"],n=["cpu-i3-10100f","cpu-ryzen3-3100","cpu-i5-11400f","cpu-ryzen5-5600x"],a=["cooler-intel-stock","cooler-amd-wraith","cooler-hyper-212"],i=["gpu-gtx1650","gpu-rx580","gpu-rtx3060"],c=["ram-crucial-8-ddr4","ram-corsair-16-ddr4"],p=["storage-barracuda-1tb","storage-kingston-480gb"],u=["psu-evga-500","psu-corsair-650"];o.bargainBin=[];for(let l=0;l<2;l++){const x=s[Math.floor(Math.random()*s.length)],g=d(x),h=n.filter(S=>d(S).specs.socket===g.specs.socket),b=h[Math.floor(Math.random()*h.length)]||"cpu-ryzen3-3100",m=a[Math.floor(Math.random()*a.length)],f=i[Math.floor(Math.random()*i.length)],C=c[Math.floor(Math.random()*c.length)],M=p[Math.floor(Math.random()*p.length)],P=u[Math.floor(Math.random()*u.length)],E=t[Math.floor(Math.random()*t.length)],y=Math.floor(Math.random()*4),I={case:{partId:E,condition:"used"},motherboard:{partId:x,condition:"used"},cpu:y===0?{partId:b,condition:"broken"}:{partId:b,condition:"used"},cooler:{partId:m,condition:"used"},ram:y===3?null:{partId:C,condition:"used"},gpu:y===1?{partId:f,condition:"broken"}:{partId:f,condition:"used"},storage:{partId:M,condition:"used"},psu:y===2?{partId:P,condition:"broken"}:{partId:P,condition:"used"},thermalPasteApplied:Math.random()>.3,cablesConnected:y!==3,hasOs:y>1,isClean:Math.random()>.5,score:0,diagnosed:!1};let T=0;Object.keys(I).forEach(S=>{if(I[S]&&I[S].partId){const R=d(I[S].partId);R&&(I[S].condition==="used"&&(T+=R.price*.6),I[S].condition==="broken"&&(T+=R.price*.1))}});const X=Math.round(T*.8);o.bargainBin.push({id:"flip-"+$(),name:e[Math.floor(Math.random()*e.length)],pc:I,price:X,description:"Ordinateur d'occasion. État inconnu. Peut nécessiter des réparations."})}}function Ge(){const e=o.activeJobs.filter(a=>a.isUrgent&&a.status!=="completed"&&a.expiryDay<o.day);e.forEach(a=>{o.workbenches.forEach(i=>{i.pc&&i.pc.orderId===a.id&&(i.pc=null)})}),o.activeJobs=o.activeJobs.filter(a=>!a.isUrgent||a.status==="completed"||a.expiryDay>=o.day),o.day+=1;const t=o.deliveryQueue.filter(a=>a.deliveryDay<=o.day);o.deliveryQueue=o.deliveryQueue.filter(a=>a.deliveryDay>o.day),t.forEach(a=>{o.inventory.push({id:$(),partId:a.partId,condition:a.condition,pricePaid:a.pricePaid!==void 0?a.pricePaid:d(a.partId).price})}),Se();const s=Math.floor(Math.random()*2)+1,n=ge(o.level,s);if(o.activeJobs.push(...n),o.activeJobs.filter(a=>a.status==="available").length>6){const a=o.activeJobs.filter(c=>c.status==="available"),i=a.length-6;for(let c=0;c<i;c++){const p=o.activeJobs.indexOf(a[c]);o.activeJobs.splice(p,1)}}return ve(),w(),{deliveriesCount:t.length,newJobsCount:n.length,expiredCount:e.length}}function L(){o.activeJobs.forEach(e=>{if(e.status==="active"||e.status==="ready"){const t=o.workbenches.find(n=>n.pc&&n.pc.orderId===e.id);t&&(e.pc=t.pc);const s=Ae(e);e.requirements=s.requirements,s.allDone?e.status="ready":e.status="active"}}),w()}let Y=null;function W(){const e=document.getElementById("pane-emails");e.innerHTML="";const t=document.createElement("div");t.className="emails-container";const s=document.createElement("div");s.className="glass-panel",s.innerHTML=`
        <div class="panel-header">
            <h2>Boîte de Réception</h2>
            <span class="nav-badge" style="position:static" id="email-count">${o.activeJobs.length}</span>
        </div>
        <div class="email-list" id="email-list-items"></div>
    `,t.appendChild(s);const n=document.createElement("div");n.className="glass-panel",n.id="email-detail-panel",n.innerHTML=`
        <div class="email-view-empty">
            <span style="font-size: 3rem">✉️</span>
            <p>Sélectionnez un e-mail pour lire les détails du projet.</p>
        </div>
    `,t.appendChild(n),e.appendChild(t),be()}function be(){const e=document.getElementById("email-list-items");if(e.innerHTML="",o.activeJobs.length===0){e.innerHTML='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun message.</div>';return}o.activeJobs.forEach(t=>{const s=document.createElement("div");s.className=`email-item ${t.status==="available"?"unread":""} ${Y===t.id?"selected":""}`;let n="var(--color-cyan)",a="Nouveau";t.status==="active"?(n="var(--color-purple)",a="En Cours"):t.status==="ready"?(n="var(--color-emerald)",a="Prêt"):t.status==="on_hold"&&(n="var(--color-amber)",a="En Attente"),t.isUrgent&&(s.style.borderLeft="4px solid var(--color-crimson)",t.status==="available"?(n="var(--color-crimson)",a="🚨 Urgent 24h",s.style.background="rgba(255, 0, 85, 0.03)"):a="🚨 "+a),s.innerHTML=`
            <div class="email-sender">
                <span>${t.clientName}</span>
                <span class="status-badge" style="background:${n}20; color:${n}; font-size:0.6rem; padding:1px 4px">${a}</span>
            </div>
            <div class="email-subject">${t.subject}</div>
            <div class="email-snippet">${t.text.substring(0,45)}...</div>
        `,s.addEventListener("click",()=>{Y=t.id,be(),qe(t)}),e.appendChild(s)}),L()}function qe(e){const t=document.getElementById("email-detail-panel");let s=0;e.pc&&Object.keys(e.pc).forEach(a=>{if(e.pc[a]&&e.pc[a].partId&&e.pc[a].condition!=="used"){const i=d(e.pc[a].partId);i&&(s+=i.price)}}),t.innerHTML=`
        <div class="email-details">
            <div class="email-details-header">
                <div class="email-details-title">${e.subject}</div>
                <div class="email-meta">
                    <span>De : <strong>${e.clientName}</strong></span>
                    <span>Budget pièces : <strong class="text-emerald">${e.budget}$</strong></span>
                </div>
            </div>
            <div class="email-body">${e.text}</div>
            
            <div class="job-box">
                <div class="job-box-title">Objectifs du projet</div>
                <ul class="job-reqs">
                    ${e.requirements.map(a=>`
                        <li class="${a.done?"done text-emerald":"pending text-muted"}">
                            ${a.desc}
                        </li>
                    `).join("")}
                </ul>

                <div class="job-financials">
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Récompense</div>
                        <div class="text-emerald font-mono" style="font-size:1.1rem; font-weight:700">${e.reward.toFixed(2)}$</div>
                    </div>
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Expérience</div>
                        <div class="text-cyan font-mono" style="font-size:1.1rem; font-weight:700">+${e.xpReward} XP</div>
                    </div>
                    ${e.type==="build"?`
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Dépenses Pièces</div>
                        <div class="${s<=e.budget?"text-emerald":"text-crimson"} font-mono" style="font-size:1.1rem; font-weight:700">${s}$ / ${e.budget}$</div>
                    </div>
                    `:""}
                </div>
            </div>

            <div class="job-actions" id="job-actions-area"></div>
        </div>
    `;const n=document.getElementById("job-actions-area");e.status==="available"||e.status==="on_hold"?(n.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.8rem; color:var(--text-secondary)">
                    ${e.status==="on_hold"?"Ré-attribuer et reprendre ce projet sur un établi libre :":"Attribuer ce projet à un établi libre :"}
                </p>
                <div style="display:flex; gap:10px">
                    ${o.workbenches.map(a=>{if(!a.unlocked)return"";const i=a.pc!==null;return`
                            <button class="btn-secondary" style="flex:1" ${i?"disabled":""} id="btn-assign-wb-${a.id}">
                                Établi ${a.id} ${i?"(Occupé)":"(Libre)"}
                            </button>
                        `}).join("")}
                </div>
                ${e.status==="available"?`
                <button class="btn-secondary text-crimson" style="margin-top:5px; border-color:rgba(255,0,85,0.2)" id="btn-reject-job">
                    Refuser la mission
                </button>
                `:""}
            </div>
        `,o.workbenches.forEach(a=>{!a.unlocked||a.pc!==null||document.getElementById(`btn-assign-wb-${a.id}`).addEventListener("click",()=>{Ne(e,a.id)})}),e.status==="available"&&document.getElementById("btn-reject-job").addEventListener("click",()=>{He(e)})):e.status==="active"?(n.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.85rem; color:var(--text-amber)">
                    Le PC est en cours de montage sur l'Établi. Remplissez tous les objectifs à l'établi pour facturer le client.
                </p>
                <button class="btn-secondary text-amber" style="border-color:rgba(255,170,0,0.25); width:100%" id="btn-put-hold-job">
                    Ranger le PC et mettre la mission en attente (Libérer l'établi)
                </button>
            </div>
        `,document.getElementById("btn-put-hold-job").addEventListener("click",()=>{Oe(e)})):e.status==="ready"&&(n.innerHTML=`
            <button class="btn-primary glow-btn" id="btn-complete-job" style="width:100%">
                Livrer le PC et encaisser la facture (${e.reward.toFixed(2)}$)
            </button>
        `,document.getElementById("btn-complete-job").addEventListener("click",()=>{Ve(e)}))}function Ne(e,t){const s=o.workbenches.find(n=>n.id===t);s&&s.pc===null&&(e.status="active",s.pc=e.pc,s.pc.orderId=e.id,w(),v(e.status==="on_hold"?`PC d'occasion repris sur l'Établi ${t} !`:`Projet accepté et PC placé sur l'Établi ${t} !`,"success"),W(),L())}function He(e){o.activeJobs=o.activeJobs.filter(t=>t.id!==e.id),Y=null,w(),v("Mission déclinée.","info"),W()}function Oe(e){const t=o.workbenches.find(s=>s.pc&&s.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,e.status="on_hold",w(),v(`Mission "${e.subject}" mise en attente. Le PC a été rangé en réserve.`,"info"),W()}function Ve(e){o.workbenches.forEach(s=>{s.pc&&s.pc.orderId===e.id&&(s.pc=null)}),window.isPcRunning=!1,Le(e.reward);const t=ze(e.xpReward);o.activeJobs=o.activeJobs.filter(s=>s.id!==e.id),Y=null,o.completedJobsCount+=1,w(),t.levelUp?v(`NIVEAU SUPÉRIEUR ! Vous êtes maintenant niveau ${t.currentLevel} ! De nouvelles pièces sont disponibles en boutique !`,"success"):v(`Mission terminée ! +${e.reward}$ et +${e.xpReward} XP`,"success"),window.updateHud(),W()}let k=null,z={},_=[],q=1,U=1,N=1.2;function Fe(e){k=e;const t=document.getElementById("workbench-monitor-overlay");t.style.display="block",t.innerHTML="",q=1,U=1,N=1.2,Ue(t)}function G(){_.forEach(clearInterval),_=[],z={};const e=document.getElementById("workbench-monitor-overlay");e&&(e.style.display="none",e.innerHTML="")}function Ue(e){const t=document.createElement("div");t.className="os-boot",e.appendChild(t);const s=d(k.cpu.partId);d(k.motherboard.partId);const n=d(k.ram.partId),a=d(k.gpu.partId),i=d(k.storage.partId);t.innerHTML=`
        <div class="os-bios-text">
            AMERICAN MEGATRENDS BIOS v4.0621
            Processeurs détectés : ${s.name} @ ${s.specs.speed}
            Mémoire RAM active : ${n.specs.capacity} @ ${n.specs.speed} (${n.specs.ramType})
            Contrôleur Graphique : ${a.name}
            Disque de démarrage : ${i.name} (${i.specs.storageType})
            
            Vérification de l'alimentation... OK
            Test de la mémoire... Succès
            Recherche du système d'exploitation...
        </div>
    `,setTimeout(()=>{t.innerHTML="",k.hasOs?ye(e):(t.innerHTML=`
                <div style="text-align:center; font-family:var(--font-mono); padding:2rem">
                    <span style="font-size:3rem">⚠️</span>
                    <p style="margin-top:15px; font-weight:700">Aucun système d'exploitation trouvé.</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">Insérez la clé USB d'installation pour démarrer le programme d'installation.</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        Insérer clé USB (Installer VirtualOS)
                    </button>
                </div>
            `,document.getElementById("btn-os-install").addEventListener("click",()=>{_e(t)}))},1500)}function _e(e){e.innerHTML=`
        <div style="width:300px; text-align:center">
            <h3 style="margin-bottom:15px">Installation de VirtualOS v4.1</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">Formatage du disque de stockage...</p>
        </div>
    `;let t=0;const s=document.getElementById("install-progress"),n=document.getElementById("install-text"),a=["Création des partitions NTFS...","Copie des fichiers d'installation (12%)...","Copie des fichiers d'installation (45%)...","Copie des fichiers d'installation (78%)...","Configuration des pilotes de périphériques...","Finalisation des paramètres du bureau..."],i=setInterval(()=>{const c=o.hasFastUsb?20:10;if(t+=c,s&&(s.style.width=`${Math.min(t,100)}%`),n&&(n.textContent=a[Math.floor(t/17)]||"Presque fini..."),t>=100){clearInterval(i),k.hasOs=!0,w(),v("VirtualOS installé avec succès !","success");const p=document.getElementById("workbench-monitor-overlay");p.innerHTML="",ye(p),L(),A()}},400);_.push(i)}function ye(e){e.innerHTML="";const t=document.createElement("div");t.className="os-desktop",t.innerHTML=`
        <div class="os-icon" id="icon-sysinfo">
            <span class="os-icon-img">ℹ️</span>
            <span class="os-icon-label">Infos Système</span>
        </div>
        <div class="os-icon" id="icon-scanner">
            <span class="os-icon-img">🛡️</span>
            <span class="os-icon-label">Virus Scanner</span>
        </div>
        <div class="os-icon" id="icon-benchmark">
            <span class="os-icon-img">🏎️</span>
            <span class="os-icon-label">3D Benchmark</span>
        </div>
        <div class="os-icon" id="icon-overclock">
            <span class="os-icon-img">⚙️</span>
            <span class="os-icon-label">Overclocking</span>
        </div>

        <button class="btn-secondary" id="btn-os-shutdown" style="position:absolute; bottom:15px; right:15px; font-size:0.75rem; background:rgba(0,0,0,0.6)">
            Quitter l'OS ✕
        </button>
    `,e.appendChild(t),document.getElementById("icon-sysinfo").addEventListener("click",Je),document.getElementById("icon-scanner").addEventListener("click",he),document.getElementById("icon-benchmark").addEventListener("click",We),document.getElementById("icon-overclock").addEventListener("click",Ye),document.getElementById("btn-os-shutdown").addEventListener("click",()=>{window.isPcRunning=!1,G(),A()})}function ee(e,t=450,s=350){if(z[e])return z[e].style.zIndex=700,z[e];const n=document.createElement("div");return n.className="os-window",n.style.width=`${t}px`,n.style.height=`${s}px`,n.style.top=`${50+Object.keys(z).length*20}px`,n.style.left=`${50+Object.keys(z).length*20}px`,n.style.zIndex=650,n.innerHTML=`
        <div class="os-window-header">
            <span class="os-window-title">${e}</span>
            <button class="os-window-close">×</button>
        </div>
        <div class="os-window-body"></div>
    `,document.querySelector(".os-desktop").appendChild(n),z[e]=n,n.querySelector(".os-window-close").addEventListener("click",()=>{n.remove(),delete z[e]}),Xe(n),n}function Xe(e){let t=0,s=0,n=0,a=0;const i=e.querySelector(".os-window-header");i&&(i.onmousedown=c);function c(l){l=l||window.event,l.preventDefault(),n=l.clientX,a=l.clientY,document.onmouseup=u,document.onmousemove=p}function p(l){l=l||window.event,l.preventDefault(),t=n-l.clientX,s=a-l.clientY,n=l.clientX,a=l.clientY,e.style.top=e.offsetTop-s+"px",e.style.left=e.offsetLeft-t+"px"}function u(){document.onmouseup=null,document.onmousemove=null}}function Je(){const t=ee("Informations Système",400,320).querySelector(".os-window-body"),s=d(k.cpu.partId),n=d(k.gpu.partId),a=d(k.storage.partId);let i="Manquante";if(k.rams&&k.rams.some(x=>x)){const x=k.rams.filter(m=>m);let g=0,h="";const b=new Set;x.forEach(m=>{if(m.kitId){if(b.has(m.kitId))return;b.add(m.kitId)}const f=d(m.partId);f&&(g+=parseInt(f.specs.capacity.replace("GB","").replace("Go","").trim()),h=f.specs.ramType)}),i=`${g} Go ${h}`}else if(k.ram){const x=d(k.ram.partId);x&&(i=`${x.specs.capacity} ${x.specs.ramType}`)}let c=42;k.thermalPasteApplied?k.thermalPasteType==="liquid_metal"&&(c=34):c=95;const p=(N-1.2)*120;let u=Math.round(c+p);t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">Fiche Technique Matérielle</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${s.name} (${s.specs.cores})</p>
                <p><strong>Fréquence active :</strong> ${(parseFloat(s.specs.speed)*q).toFixed(2)} GHz</p>
                <p><strong>Température CPU :</strong> <span id="sysinfo-temp" style="font-weight:700">${u}°C</span></p>
                <p><strong>GPU :</strong> ${n.name} (${n.specs.vram})</p>
                <p><strong>Fréquence GPU :</strong> ${(parseFloat(n.specs.speed)*U).toFixed(0)} MHz</p>
                <p><strong>Mémoire Vive :</strong> ${i}</p>
                <p><strong>Stockage Principal :</strong> ${a.name} (${a.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                OS installé : VirtualOS Desktop Edition v4.1 build 2026.
            </div>
        </div>
    `;const l=document.getElementById("sysinfo-temp");l&&(u>=90?l.style.color="var(--color-crimson)":u>=75?l.style.color="var(--color-amber)":l.style.color="var(--color-emerald)")}function he(){const t=ee("SecuriGuard Virus Scanner",400,300).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">Scanner de Sécurité Intégré</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">Protection résidente active. Prêt pour l'analyse.</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                Lancer une Analyse Complète
            </button>
        </div>
    `,document.getElementById("btn-start-scan").addEventListener("click",()=>{je(t)})}function je(e){e.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px">
            <div style="font-weight:600" id="scan-step-title">Analyse en cours...</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Analyse de System32...</div>
        </div>
    `;const t=document.getElementById("scan-progress");document.getElementById("scan-step-title");const s=document.getElementById("scan-file-text");let n=0;const a=setInterval(()=>{n+=10,t&&(t.style.width=`${n}%`),n===30?s.textContent="Recherche de logiciels espions...":n===60?s.textContent="Analyse des clés de registre infectées...":n===80&&(s.textContent="Examen de la mémoire vive active..."),n>=100&&(clearInterval(a),k.isClean?(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">Système Sain !</div>
                        <p style="font-size:0.75rem; color:#888">Aucun virus, cheval de troie ou logiciel publicitaire détecté.</p>
                        <button class="btn-secondary" onclick="window.closeSecuriGuard()" style="margin-top:10px; font-size:0.75rem">Fermer</button>
                    </div>
                `,window.closeSecuriGuard=()=>{const i=z["SecuriGuard Virus Scanner"];i&&(i.remove(),delete z["SecuriGuard Virus Scanner"])}):(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">2 Menaces Détectées !</div>
                        <p style="font-size:0.75rem; color:#aaa">Trojan.Miner.Bitcoin & Adware.PopUpMagic infectent vos registres.</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            Nettoyer et Désinfecter
                        </button>
                    </div>
                `,document.getElementById("btn-clean-viruses").addEventListener("click",()=>{k.isClean=!0,w(),v("Système nettoyé avec succès !","success"),L(),A(),he()})))},300);_.push(a)}function We(){const t=ee("3D Benchmark Tool v3.0",450,360).querySelector(".os-window-body");t.innerHTML=`
        <div class="bench-runner" id="bench-app-container">
            <span style="font-size:2.5rem">🏎️</span>
            <div style="font-weight:600">Simulateur de Rendu Graphique 3D</div>
            <p style="font-size:0.8rem; text-align:center; color:#888; max-width:300px">
                Ce test va solliciter le processeur et la carte graphique à 100% de leur charge thermique pour mesurer les performances.
            </p>
            <button class="btn-primary" id="btn-run-benchmark" style="font-size:0.85rem">
                Lancer le Test Graphique
            </button>
        </div>
    `,document.getElementById("btn-run-benchmark").addEventListener("click",()=>{Ke(t)})}function Ke(e){e.innerHTML=`
        <div class="bench-runner" style="width:100%; height:100%">
            <div class="bench-gauge-container">
                <canvas class="bench-canvas-simulation" id="bench-canvas"></canvas>
                <div class="bench-progress-card">
                    <div style="font-size:0.75rem; color:#aaa; margin-bottom:5px">Rendu Graphique en cours...</div>
                    <div class="bench-score-large" id="bench-live-score">0</div>
                    <div class="bench-temp-indicator">CPU Temp : <span id="bench-live-temp">42</span>°C</div>
                </div>
            </div>
            <div class="xp-bar-container" style="width:100%; height:6px">
                <div class="xp-bar-fill" id="bench-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="bench-phase-label">Chargement des géométries polygonales...</p>
        </div>
    `;const t=document.getElementById("bench-canvas"),s=t.getContext("2d");t.width=400,t.height=180;let n=[];for(let M=0;M<30;M++)n.push({x:Math.random()*t.width,y:Math.random()*t.height,speed:Math.random()*3+1,size:Math.random()*3});let a=null;function i(){s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(0,0,t.width,t.height),s.fillStyle="rgba(0, 240, 255, 0.6)",n.forEach(M=>{s.beginPath(),s.arc(M.x,M.y,M.size,0,Math.PI*2),s.fill(),M.x+=M.speed,M.x>t.width&&(M.x=0)}),a=requestAnimationFrame(i)}i();let c=0,p=0,u=42;const l=k.thermalPasteApplied?k.thermalPasteType==="liquid_metal"?37:45:95,x=(N-1.2)*110,g=Q(k.cpu.partId,k.gpu.partId,k.ram.partId,q,U,k.rams),h=document.getElementById("bench-progress"),b=document.getElementById("bench-live-score"),m=document.getElementById("bench-live-temp"),f=document.getElementById("bench-phase-label"),C=setInterval(()=>{c+=4,p=Math.round(c/100*g),b&&(b.textContent=p),h&&(h.style.width=`${c}%`);const M=Math.round(l+c*.3+x);if(u=Math.min(M,140),m&&(m.textContent=u,u>=90?(m.style.color="var(--color-crimson)",o.hasThermalProbe&&(f.innerHTML=`<span class="text-crimson font-mono" style="animation: blink 1s infinite">⚠️ ALERTE SURCHAUFFE CPU (${u}°C) - LIMITE CRITIQUE !</span>`)):u>=72&&(m.style.color="var(--color-amber)")),c===20?f.textContent="Test CPU : Simulation physique complexe...":c===50?f.textContent="Test GPU : Shaders d'illumination globale...":c===80&&(f.textContent="Test final combiné : Calcul des FPS..."),u>=98){clearInterval(C),cancelAnimationFrame(a),ue("WHEA_UNCORRECTABLE_ERROR","Le processeur a dépassé le seuil de sécurité thermique de 98°C.");return}const P=1.2+(q-1)*.5;if(q>1.15&&N<P){clearInterval(C),cancelAnimationFrame(a),ue("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED","Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.");return}c>=100&&(clearInterval(C),cancelAnimationFrame(a),k.score=g,w(),e.innerHTML=`
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
                    <span class="text-emerald" style="font-size:3rem">🏆</span>
                    <div>
                        <div class="stat-label">Rapport de performances</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${g} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        CPU stable à max ${u}°C.<br>
                        Tension VCore : ${N.toFixed(2)}V
                    </div>
                    <button class="btn-primary" onclick="window.closeBench()" style="font-size:0.8rem">Accepter</button>
                </div>
            `,window.closeBench=()=>{const E=z["3D Benchmark Tool v3.0"];E&&(E.remove(),delete z["3D Benchmark Tool v3.0"]),L(),A()})},250);_.push(C)}function Ye(){const t=ee("Overclock-O-Matic Pro",400,340).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">Optimisation Fréquences</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>Coefficient Fréquence CPU</span>
                    <span id="oc-cpu-mult-val">${q.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${q}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>Tension VCore (Alimentation CPU)</span>
                    <span id="oc-voltage-val">${N.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${N}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>Fréquence GPU Clock</span>
                    <span id="oc-gpu-mult-val">${U.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${U}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ⚠️ <strong>Attention :</strong> L'augmentation de la tension augmente exponentiellement la chaleur dégagée. Un overclock instable provoquera un plantage système (BSOD).
            </div>
        </div>
    `;const s=document.getElementById("oc-cpu-mult-range"),n=document.getElementById("oc-cpu-mult-val");s.addEventListener("input",u=>{q=parseFloat(u.target.value),n.textContent=`${q.toFixed(2)}x`});const a=document.getElementById("oc-voltage-range"),i=document.getElementById("oc-voltage-val");a.addEventListener("input",u=>{N=parseFloat(u.target.value),i.textContent=`${N.toFixed(2)} V`});const c=document.getElementById("oc-gpu-mult-range"),p=document.getElementById("oc-gpu-mult-val");c.addEventListener("input",u=>{U=parseFloat(u.target.value),p.textContent=`${U.toFixed(2)}x`})}function ue(e,t){_.forEach(clearInterval),_=[],z={},window.isPcRunning=!1;const s=document.getElementById("workbench-monitor-overlay");s.innerHTML=`
        <div class="os-bsod">
            <div class="os-bsod-sad">:(</div>
            <div class="os-bsod-title">Votre PC virtuel a rencontré un problème et doit redémarrer. Nous collectons simplement quelques informations relatives aux erreurs.</div>
            
            <div class="os-bsod-details">
                Code d'arrêt système : <strong style="color:#ffef56">${e}</strong><br>
                Rapport technique : ${t}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">Cliquez n'importe où pour forcer l'extinction et retourner à l'établi.</span>
            </div>
        </div>
    `,s.querySelector(".os-bsod").addEventListener("click",()=>{G(),A()})}let r=null;function A(){var l,x;const e=document.getElementById("pane-workbench"),t=o.workbenches.find(g=>g.id===o.selectedWorkbenchId);r=t?t.pc:null;const s=document.getElementById("workbench-monitor-overlay"),n=s&&s.style.display!=="none"&&window.isPcRunning;if(n||(e.innerHTML=""),r){const g=(l=r.motherboard)==null?void 0:l.partId,h=K(g);if(!r.rams)r.rams=new Array(h.ram).fill(null),r.ram&&(r.rams[0]=r.ram);else if(r.rams.length!==h.ram){const m=r.rams;r.rams=new Array(h.ram).fill(null);for(let f=0;f<Math.min(m.length,h.ram);f++)r.rams[f]=m[f];for(let f=h.ram;f<m.length;f++)m[f]&&o.inventory.push({id:$(),partId:m[f].partId,condition:m[f].condition,pricePaid:d(m[f].partId).price})}const b=h.nvme+h.sata;if(r.storages){if(r.storages.length!==b){const m=r.storages;r.storages=new Array(b).fill(null);for(let f=0;f<Math.min(m.length,b);f++)r.storages[f]=m[f];for(let f=b;f<m.length;f++)m[f]&&o.inventory.push({id:$(),partId:m[f].partId,condition:m[f].condition,pricePaid:d(m[f].partId).price})}}else if(r.storages=new Array(b).fill(null),r.storage){const m=d(r.storage.partId);m&&m.specs.storageType==="NVMe M.2"&&h.nvme>0?r.storages[0]=r.storage:r.storages[h.nvme]=r.storage}for(let m=0;m<b;m++){const f=r.storages[m];if(f){const C=d(f.partId);if(C){const M=C.specs.storageType==="NVMe M.2",P=m<h.nvme;if(P&&!M){const E=r.storages.indexOf(null,h.nvme);E!==-1&&(r.storages[E]=f,r.storages[m]=null)}else if(!P&&M){const E=r.storages.indexOf(null,0);E!==-1&&E<h.nvme&&(r.storages[E]=f,r.storages[m]=null)}}}}for(let m=0;m<h.ram;m++){const f=r.rams[m];if(f&&!f.kitId){const C=d(f.partId);if(C&&C.name.includes("(2x")){f.kitId="kit-"+$();const P=r.rams.findIndex((E,y)=>y!==m&&E===null);P!==-1&&(r.rams[P]={partId:f.partId,condition:f.condition,kitId:f.kitId})}}}r.ram=r.rams.find(m=>m!==null)||null,r.storage=r.storages.find(m=>m!==null)||null}const a=document.createElement("div");a.className="workbench-grid";const i=document.createElement("div");if(i.className="workbench-case-view",!r)i.innerHTML=`
            <div style="text-align:center; color:var(--text-muted)">
                <span style="font-size:4rem">🔧</span>
                <h3 style="margin-top:15px; color:#fff">Établi ${o.selectedWorkbenchId} Vide</h3>
                <p style="font-size:0.85rem; margin-top:5px; max-width:300px">Sélectionnez une commande dans vos e-mails ou importez un ordinateur d'occasion pour commencer.</p>
                <div style="margin-top:20px" id="workbench-import-area"></div>
            </div>
        `,a.appendChild(i);else{const g=K((x=r.motherboard)==null?void 0:x.partId);i.innerHTML=`
            <div class="case-schematic">
                <!-- Case Slot -->
                <div class="case-slot ${r.case?"filled":""}" id="slot-case" data-slot="case" style="top: 15px; left: 40px; width: 420px; height: 45px; z-index: 5;">
                    <span class="case-slot-label">Boîtier PC</span>
                    <span class="case-slot-partname">${r.case?d(r.case.partId).name:"Aucun Boîtier (Composants à nu)"}</span>
                </div>

                <!-- Motherboard Slot -->
                <div class="case-slot ${r.motherboard?"filled":""}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">Carte Mère</span>
                    <span class="case-slot-partname">${r.motherboard?d(r.motherboard.partId).name:"Emplacement Vide"}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area, stacked, non-overlapping) -->
                ${r.motherboard?`
                <div class="case-slot ${r.cpu?"filled":""}" id="slot-cpu" data-slot="cpu" style="top: 80px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">CPU</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${r.cpu?d(r.cpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- CPU Cooler Slot (Stacked vertically below CPU, non-overlapping) -->
                ${r.cpu?`
                <div class="case-slot ${r.cooler?"filled":""}" id="slot-cooler" data-slot="cooler" style="top: 155px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">Refroidisseur</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${r.cooler?d(r.cooler.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- Multi-slot RAM (DIMM slots to the right of CPU) -->
                ${r.motherboard?r.rams.map((h,b)=>`
                        <div class="case-slot ram-slot ${h?"filled":""}" id="slot-ram-${b}" data-slot="ram" data-index="${b}" title="${h?d(h.partId).name:"Slot RAM "+(b+1)}" style="top: 80px; left: ${265+b*25}px; width: 20px; height: 145px; z-index: 10;">
                            <span class="case-slot-label" style="font-size: 0.55rem; line-height: 1;">R${b+1}</span>
                        </div>
                    `).join(""):""}

                <!-- GPU Slot (PCIe slot) -->
                ${r.motherboard?`
                <div class="case-slot ${r.gpu?"filled":""}" id="slot-gpu" data-slot="gpu" style="top: 235px; left: 115px; width: 250px; height: 75px; z-index: 12;">
                    <span class="case-slot-label">Carte Graphique</span>
                    <span class="case-slot-partname">${r.gpu?d(r.gpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- Power Supply Slot -->
                <div class="case-slot ${r.psu?"filled":""}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">Alimentation (PSU)</span>
                    <span class="case-slot-partname">${r.psu?d(r.psu.partId).name:"Emplacement Vide"}</span>
                </div>

                <!-- Multi-slot Storage: NVMe on Motherboard -->
                ${r.motherboard?new Array(g.nvme).fill(null).map((h,b)=>{const m=r.storages[b];return`
                            <div class="case-slot nvme-slot ${m?"filled":""}" id="slot-nvme-${b}" data-slot="storage" data-index="${b}" title="${m?d(m.partId).name:"Slot M.2 NVMe "+(b+1)}" style="top: ${155+b*18}px; left: 60px; width: 80px; height: 15px; z-index: 10; font-size: 0.55rem; padding: 0;">
                                <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">M.2_${b+1}</span>
                            </div>
                        `}).join(""):""}

                <!-- Multi-slot Storage: SATA Drive Bays in Case bottom -->
                ${new Array(g.sata).fill(null).map((h,b)=>{const m=g.nvme+b,f=r.storages[m],C=b%3,M=Math.floor(b/3);return`
                        <div class="case-slot sata-slot ${f?"filled":""}" id="slot-sata-${b}" data-slot="storage" data-index="${m}" title="${f?d(f.partId).name:"Slot SATA "+(b+1)}" style="top: ${380+M*45}px; left: ${40+C*55}px; width: 50px; height: 38px; font-size: 0.55rem; padding: 2px 0;">
                            <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">SATA_${b+1}</span>
                        </div>
                    `}).join("")}
            </div>
            
            <!-- Virtual Screen overlay -->
            <div id="workbench-monitor-overlay" style="display:none"></div>
        `,a.appendChild(i)}const c=document.createElement("div");c.className="workbench-sidebar";let p="";if(o.workbenches.forEach(g=>{g.unlocked?p+=`
                <div class="pc-tab ${o.selectedWorkbenchId===g.id?"active":""}" id="tab-wb-${g.id}">
                    Établi ${g.id} ${g.pc?"🛠️":""}
                </div>
            `:p+=`<div class="pc-tab text-muted" style="opacity:0.5; cursor:not-allowed">🔒 Établi ${g.id}</div>`}),c.innerHTML=`
        <div class="glass-panel workbench-details-card">
            <div class="stat-label" style="margin-bottom:8px">Choisir mon établi</div>
            <div class="pc-selector-row">${p}</div>
        </div>
    `,r){const g=o.activeJobs.find(y=>y.id===r.orderId);if(g){const y=document.createElement("div");y.className="glass-panel workbench-details-card",y.style.border="1px solid rgba(0, 240, 255, 0.25)",y.style.boxShadow="inset 0 0 10px rgba(0, 240, 255, 0.05)",y.style.marginBottom="8px",y.innerHTML=`
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; margin-bottom: 8px;">
                    🎯 Objectifs de la Mission
                </div>
                <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 8px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${g.subject}">
                    ${g.subject}
                </div>
                <ul class="job-reqs" style="display: flex; flex-direction: column; gap: 5px; list-style: none; padding: 0;">
                    ${g.requirements.map(I=>`
                        <li class="${I.done?"done text-emerald":"pending text-muted"}" style="font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 0.9rem;">${I.done?"✅":"○"}</span>
                            <span style="${I.done?"text-decoration: line-through; opacity: 0.85;":""}">${I.desc}</span>
                        </li>
                    `).join("")}
                </ul>
            `,c.appendChild(y)}const h=document.createElement("div");h.className="glass-panel workbench-details-card",h.style.flex="1";let b=0,m=0;r.cpu&&(b+=d(r.cpu.partId).specs.power),r.gpu&&(b+=d(r.gpu.partId).specs.power),r.psu&&(m=d(r.psu.partId).specs.wattage);const f=m>=b;let C="Manquante";if(r.rams&&r.rams.some(y=>y)){const y=r.rams.filter(S=>S);let I=0,T="";const X=new Set;y.forEach(S=>{if(S.kitId){if(X.has(S.kitId))return;X.add(S.kitId)}const R=d(S.partId);R&&(I+=parseInt(R.specs.capacity.replace("GB","").replace("Go","").trim()),T=R.specs.ramType)}),C=`${I} Go ${T} (${y.length}/${r.rams.length} Slots)`}let M="Manquant";if(r.storages&&r.storages.some(y=>y)){const y=r.storages.filter(R=>R),I=y.filter(R=>d(R.partId).specs.storageType==="NVMe M.2").length,T=y.length-I;let X=I>0?`${I}x NVMe`:"",S=T>0?`${T}x SATA`:"";M=[X,S].filter(Boolean).join(", ")+` (${y.length}/${r.storages.length} Disques)`}let P=0;if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(y=>{if(r[y]&&r[y].partId){const I=d(r[y].partId);I&&(P+=I.price)}}),r.rams){const y=new Set;r.rams.forEach(I=>{if(I&&I.partId){if(I.kitId){if(y.has(I.kitId))return;y.add(I.kitId)}const T=d(I.partId);T&&(P+=T.price)}})}r.storages&&r.storages.forEach(y=>{if(y&&y.partId){const I=d(y.partId);I&&(P+=I.price)}}),h.innerHTML=`
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>Configuration Actuelle</span>
                <span class="status-badge ${window.isPcRunning?"on":"off"}">${window.isPcRunning?"En marche":"Éteint"}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">Boîtier</span><span class="pc-spec-val">${r.case?d(r.case.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Carte Mère</span><span class="pc-spec-val">${r.motherboard?d(r.motherboard.partId).name:"Manquante"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Processeur</span><span class="pc-spec-val">${r.cpu?d(r.cpu.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Ventirad</span><span class="pc-spec-val">${r.cooler?d(r.cooler.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Mémoire RAM</span><span class="pc-spec-val" title="${r.rams?r.rams.filter(y=>y).map(y=>d(y.partId).name).join(", "):""}">${C}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Graphismes</span><span class="pc-spec-val">${r.gpu?d(r.gpu.partId).name:"Manquants"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Stockage</span><span class="pc-spec-val" title="${r.storages?r.storages.filter(y=>y).map(y=>d(y.partId).name).join(", "):""}">${M}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Alimentation</span><span class="pc-spec-val">${r.psu?`${d(r.psu.partId).name} (${m}W)`:"Manquante"}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>Consommation estimée :</span>
                    <span class="${f?"text-emerald":"text-crimson"}" style="font-weight:600">${b}W / ${m}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Pâte thermique :</span>
                    <span class="${r.thermalPasteApplied?"text-emerald":"text-crimson"}">${r.thermalPasteApplied?r.thermalPasteType==="liquid_metal"?"Métal Liquide ✓":"Standard ✓":"Manquante ✗"}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Câbles d'alimentation :</span>
                    <span class="${r.cablesConnected?"text-emerald":"text-crimson"}">${r.cablesConnected?"Branchés ✓":"Débranchés ✗"}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 4px; margin-top: 8px;">
                    <span class="text-cyan">Coût total des pièces :</span>
                    <span class="text-emerald font-mono">${P.toFixed(2)}$</span>
                </div>
            </div>

            <div class="workbench-actions-box">
                <button class="btn-secondary" id="btn-toggle-paste" style="width:100%">
                    ${r.thermalPasteApplied?"Nettoyer la pâte thermique":"Appliquer pâte thermique"}
                </button>
                <button class="btn-secondary" id="btn-toggle-cables" style="width:100%">
                    ${r.cablesConnected?"Débrancher les câbles":"Brancher les câbles"}
                </button>
                
                ${window.isPcRunning?`
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-crimson), #c00); box-shadow: 0 4px 15px rgba(255,0,85,0.2)">
                        Éteindre le PC (Power OFF)
                    </button>
                `:`
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow: 0 4px 15px rgba(0,255,136,0.2)">
                        Allumer le PC (Power ON)
                    </button>
                `}

                ${g?`
                    <button class="btn-secondary text-amber" id="btn-put-hold-workbench" style="width:100%; border-color:rgba(255,170,0,0.25); margin-top:5px; font-weight: 500;">
                        📦 Ranger le PC (Mettre en attente)
                    </button>
                `:""}

                ${g?"":`
                    <div style="border-top:1px solid var(--border-color); margin-top:10px; padding-top:10px; display:flex; flex-direction:column; gap:5px">
                        <div class="stat-label">PC Libre (Flip BargainBin)</div>
                        <input type="text" id="flip-build-name" placeholder="Nom de l'ordinateur" value="${t.pc.name||"PC Gamer Flip"}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <input type="number" id="flip-build-price" placeholder="Prix de vente ($)" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <button class="btn-secondary text-purple" style="border-color:rgba(189,0,255,0.3)" id="btn-sell-flip-pc">
                            Mettre en vente sur BargainBin
                        </button>
                        <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.2); font-size:0.75rem; margin-top:5px" id="btn-scrap-pc">
                            Démonter le PC (Récupérer les pièces)
                        </button>
                    </div>
                `}
            </div>
        `,c.appendChild(h)}const u=e.querySelector(".workbench-sidebar");if(n&&u?u.innerHTML=c.innerHTML:(a.appendChild(i),a.appendChild(c),e.appendChild(a)),o.workbenches.forEach(g=>{g.unlocked&&document.getElementById(`tab-wb-${g.id}`).addEventListener("click",()=>{o.selectedWorkbenchId=g.id,window.isPcRunning=!1,G(),w(),A()})}),r){document.getElementById("btn-toggle-paste").addEventListener("click",()=>{r.thermalPasteApplied?(r.thermalPasteApplied=!1,r.thermalPasteType=null,w(),L(),A()):o.liquidMetalCount>0?at():(r.thermalPasteApplied=!0,r.thermalPasteType="standard",w(),L(),A())}),document.getElementById("btn-toggle-cables").addEventListener("click",()=>{r.cablesConnected=!r.cablesConnected,w(),L(),A()}),document.getElementById("btn-power-pc").addEventListener("click",()=>{Qe()}),n||e.querySelectorAll(".case-schematic .case-slot").forEach(h=>{h.addEventListener("click",b=>{const m=h.getAttribute("data-slot"),f=h.getAttribute("data-index");et(m,f!==null?parseInt(f):null)})});const g=o.activeJobs.find(h=>h.id===r.orderId);g?document.getElementById("btn-put-hold-workbench").addEventListener("click",()=>{rt(g)}):(document.getElementById("btn-sell-flip-pc").addEventListener("click",()=>{st()}),document.getElementById("btn-scrap-pc").addEventListener("click",()=>{nt()}))}else Ze()}function Ze(){const e=document.getElementById("workbench-import-area");if(!e)return;const t=o.inventory.filter(n=>n.type==="pc_flip");let s="";t.length>0?s=`
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px">
                <span class="stat-label">Importer un PC d'occasion</span>
                <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                    ${t.map(n=>`<option value="${n.id}">${n.name} (${n.pricePaid}$)</option>`).join("")}
                </select>
                <button class="btn-primary glow-btn" id="btn-import-pc-action">
                    Placer sur l'Établi
                </button>
            </div>
        `:s=`
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:15px">Aucun PC d'occasion en stock.</div>
        `,e.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:8px">
            ${s}
            <button class="btn-primary glow-btn" id="btn-create-scratch-build" style="background:linear-gradient(135deg, var(--color-purple), #90f); width:100%">
                Commencer un montage de zéro
            </button>
        </div>
    `,t.length>0&&document.getElementById("btn-import-pc-action").addEventListener("click",()=>{const n=document.getElementById("select-import-pc").value,a=o.inventory.find(i=>i.id===n);if(a){const i=o.workbenches.find(c=>c.id===o.selectedWorkbenchId);i.pc=a.pc,i.pc.name=a.name,i.pc.isCustom=!0,o.inventory=o.inventory.filter(c=>c.id!==n),w(),v("PC d'occasion importé sur l'établi !","success"),A()}}),document.getElementById("btn-create-scratch-build").addEventListener("click",()=>{const n=o.workbenches.find(a=>a.id===o.selectedWorkbenchId);n.pc={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!0},w(),v("Boîtier vide placé sur l'établi !","info"),A()})}function Qe(){if(window.isPcRunning)window.isPcRunning=!1,G(),A(),v("Ordinateur éteint.","info");else{if(!r.psu){v("Boot échoué : Aucune alimentation installée !","error");return}if(!r.motherboard){v("Boot échoué : Aucune carte mère installée !","error");return}if(!r.cpu){v("Boot échoué : Aucun processeur installé !","error");return}if(!r.cooler){v("Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !","error");return}if(!r.ram){v("Boot échoué : Aucune mémoire vive (RAM) !","error");return}if(!r.gpu){v("Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !","error");return}if(!r.storage){v("Boot échoué : Aucun disque de stockage détecté !","error");return}if(!r.cablesConnected){v("Boot échoué : Les câbles d'alimentation ne sont pas branchés !","error");return}if(r.psu.condition==="broken"){v("Boot échoué : L'alimentation est défectueuse. Impossible d'allumer la machine !","error");return}if(r.motherboard.condition==="broken"){v("Boot échoué : La carte mère est défectueuse (Court-circuit sur le PCB) !","error");return}if(r.cpu.condition==="broken"){v("Boot échoué : Écran noir. Le processeur (CPU) est défectueux ou grillé !","error");return}if(r.rams.some(s=>s&&s.condition==="broken")){v("Boot échoué : Erreur de mémoire vive (RAM). Une ou plusieurs barrettes sont défectueuses !","error");return}if(r.gpu.condition==="broken"){v("Boot échoué : Aucun signal d'affichage. La carte graphique (GPU) est défectueuse !","error");return}if(r.storages.some(s=>s&&s.condition==="broken")){v("Boot échoué : Erreur de lecture de disque. Le périphérique de stockage est défectueux !","error");return}let e=0;if(r.cpu&&(e+=d(r.cpu.partId).specs.power),r.gpu&&(e+=d(r.gpu.partId).specs.power),d(r.psu.partId).specs.wattage<e){v("Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.","error");return}window.isPcRunning=!0,r.bootedOnce=!0,w(),L(),A(),v("Boot en cours... Signal vidéo détecté !","success"),Fe(r)}}function et(e,t=null){const s=e==="ram"||e==="storage"?r[e+"s"][t]:r[e],n=document.createElement("div");n.className="modal-overlay",n.id="part-drawer-modal";const a=document.createElement("div");a.className="modal-content";const i=document.createElement("div");i.className="panel-header";const c=t!==null?`${e.toUpperCase()} (Slot ${t+1})`:e.toUpperCase();i.innerHTML=`
        <h2>Sélectionner un composant : ${c}</h2>
        <button class="os-window-close" id="btn-close-drawer">×</button>
    `;const p=document.createElement("div");p.className="modal-body";const u=o.inventory.filter(x=>{const g=d(x.partId);return g&&g.type===e});let l="";s&&(l+=`
            <div style="background:rgba(255,0,85,0.05); padding:1rem; border-radius:6px; border:1px solid rgba(255,0,85,0.2); margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center">
                <div>
                    <span class="stat-label">Composant installé</span>
                    <div style="font-weight:600; font-size:0.9rem">${d(s.partId).name} (${s.condition==="used"?"Occasion":s.condition==="broken"?"En Panne":"Neuf"})</div>
                </div>
                <button class="btn-secondary text-crimson" id="btn-uninstall-part">
                    Retirer la pièce
                </button>
            </div>
        `),u.length===0?l+='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun composant de ce type disponible dans votre inventaire.</div>':l+=`
            <div style="font-weight:700; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px">Pièces en stock :</div>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${u.map(x=>`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center">
                            <div>
                                <div style="font-weight:600; font-size:0.85rem">${d(x.partId).name}</div>
                                <div style="font-size:0.7rem; color:var(--text-secondary)">État : ${x.condition==="new"?"Neuf":x.condition==="used"?"Occasion":"En Panne"}</div>
                            </div>
                            <button class="btn-buy" id="btn-install-part-${x.id}">Installer</button>
                        </div>
                    `).join("")}
            </div>
        `,p.innerHTML=l,a.appendChild(i),a.appendChild(p),n.appendChild(a),document.body.appendChild(n),document.getElementById("btn-close-drawer").addEventListener("click",()=>{document.body.removeChild(n)}),s&&document.getElementById("btn-uninstall-part").addEventListener("click",()=>{ae(e,t),document.body.removeChild(n)}),u.forEach(x=>{document.getElementById(`btn-install-part-${x.id}`).addEventListener("click",()=>{tt(e,x,t),document.body.removeChild(n)})})}function tt(e,t,s=null){const n=d(t.partId);if(e==="cpu"){if(r.motherboard){const a=d(r.motherboard.partId);if(a.specs.socket!==n.specs.socket){v(`Incompatible : Socket de carte mère (${a.specs.socket}) incompatible avec le processeur (${n.specs.socket}) !`,"error");return}}}else if(e==="motherboard"){if(r.cpu){const a=d(r.cpu.partId);if(a.specs.socket!==n.specs.socket){v(`Incompatible : Le processeur déjà présent (${a.specs.socket}) ne rentre pas sur ce socket (${n.specs.socket}) !`,"error");return}}if(r.rams&&r.rams.some(a=>a)){const a=r.rams.find(c=>c),i=d(a.partId);if(i.specs.ramType!==n.specs.ramType){v(`Incompatible : Type de RAM de la carte mère (${n.specs.ramType}) incompatible avec la RAM installée (${i.specs.ramType}) !`,"error");return}}}else if(e==="cooler"){if(r.cpu){const a=d(r.cpu.partId);if(!n.specs.socket.includes(a.specs.socket)){v(`Incompatible : Le système d'accroche du ventirad ne supporte pas le socket ${a.specs.socket} !`,"error");return}}}else if(e==="ram"){if(r.motherboard){const i=d(r.motherboard.partId);if(i.specs.ramType!==n.specs.ramType){v(`Incompatible : La carte mère requiert de la mémoire ${i.specs.ramType} (${n.specs.ramType} fournie) !`,"error");return}}if(n.name.includes("(2x")&&r.rams.findIndex((c,p)=>p!==s&&c===null)===-1){v("Incompatible : Ce kit de mémoire (2 barrettes) nécessite au moins 2 emplacements RAM libres sur la carte mère !","error");return}}else if(e==="storage"){if(r.motherboard){const a=n.specs.storageType==="NVMe M.2",i=K(r.motherboard.partId);if(s<i.nvme){if(!a){v("Incompatible : Cet emplacement M.2 requiert un SSD de type NVMe M.2 (disque de type SATA/HDD fourni) !","error");return}}else if(a){v("Incompatible : Les emplacements SATA ne supportent pas les disques de type NVMe M.2 (requiert un HDD ou SSD SATA) !","error");return}}else if(n.specs.storageType==="NVMe M.2"){v("Incompatible : Installez d'abord une carte mère pour utiliser un slot M.2 NVMe !","error");return}}if(e==="ram"||e==="storage"){if(r[e+"s"][s]&&ae(e,s),e==="ram"&&n.name.includes("(2x")){const a="kit-"+$(),i=r.rams.findIndex((c,p)=>p!==s&&c===null);r.rams[s]={partId:t.partId,condition:t.condition,kitId:a},r.rams[i]={partId:t.partId,condition:t.condition,kitId:a}}else r[e+"s"][s]={partId:t.partId,condition:t.condition};e==="ram"?r.ram=r.rams.find(a=>a!==null)||null:r.storage=r.storages.find(a=>a!==null)||null}else r[e]&&ae(e),r[e]={partId:t.partId,condition:t.condition};o.inventory=o.inventory.filter(a=>a.id!==t.id),r.cpu&&r.gpu&&r.ram?r.score=Q(r.cpu.partId,r.gpu.partId,r.ram.partId,1,1,r.rams):r.score=0,w(),L(),A(),v(`${n.name} installé !`,"success")}function ae(e,t=null){const s=e==="ram"||e==="storage"?r[e+"s"][t]:r[e];if(s){if(e==="ram"||e==="storage")e==="ram"&&s.kitId?(o.inventory.push({id:$(),partId:s.partId,condition:s.condition,pricePaid:d(s.partId).price}),r.rams.forEach((n,a)=>{n&&n.kitId===s.kitId&&(r.rams[a]=null)}),r.ram=r.rams.find(n=>n!==null)||null):(o.inventory.push({id:$(),partId:s.partId,condition:s.condition,pricePaid:d(s.partId).price}),r[e+"s"][t]=null,e==="ram"?r.ram=r.rams.find(n=>n!==null)||null:(r.storage=r.storages.find(n=>n!==null)||null,r.storage||(window.isPcRunning=!1,G())));else{if(o.inventory.push({id:$(),partId:s.partId,condition:s.condition,pricePaid:d(s.partId).price}),r[e]=null,(e==="motherboard"||e==="cpu")&&(window.isPcRunning=!1,G()),e==="motherboard"){if(["cpu","cooler","gpu"].forEach(a=>{r[a]&&(o.inventory.push({id:$(),partId:r[a].partId,condition:r[a].condition,pricePaid:d(r[a].partId).price}),r[a]=null)}),r.rams){const a=new Set;r.rams.forEach(i=>{if(i){if(i.kitId){if(a.has(i.kitId))return;a.add(i.kitId)}o.inventory.push({id:$(),partId:i.partId,condition:i.condition,pricePaid:d(i.partId).price})}}),r.rams=[],r.ram=null}if(r.storages){const a=K(s.partId);for(let i=0;i<a.nvme;i++)r.storages[i]&&(o.inventory.push({id:$(),partId:r.storages[i].partId,condition:r.storages[i].condition,pricePaid:d(r.storages[i].partId).price}),r.storages[i]=null);r.storage=r.storages.find(i=>i!==null)||null,r.storage||(window.isPcRunning=!1,G())}}e==="cpu"&&r.cooler&&(o.inventory.push({id:$(),partId:r.cooler.partId,condition:r.cooler.condition,pricePaid:d(r.cooler.partId).price}),r.cooler=null)}r.cpu&&r.gpu&&r.ram?r.score=Q(r.cpu.partId,r.gpu.partId,r.ram.partId,1,1,r.rams):r.score=0,w(),L(),A(),v("Composant démonté et replacé en inventaire.","info")}}function st(){const e=document.getElementById("flip-build-name").value.trim(),t=parseFloat(document.getElementById("flip-build-price").value);if(!e){v("Veuillez donner un nom à votre PC !","error");return}if(isNaN(t)||t<=0){v("Veuillez saisir un prix valide supérieur à 0 !","error");return}if(!r.case||!r.motherboard||!r.cpu||!r.cooler||!r.ram||!r.gpu||!r.storage||!r.psu||!r.hasOs||!r.cablesConnected||!r.thermalPasteApplied){v("Vente impossible : Le PC n'est pas opérationnel ou des pièces manquent !","error");return}o.customPcs.push({id:"listed-"+$(),name:e,price:Math.round(t),pc:JSON.parse(JSON.stringify(r))});const s=o.workbenches.find(n=>n.id===o.selectedWorkbenchId);s.pc=null,r=null,window.isPcRunning=!1,G(),w(),v(`Ordinateur "${e}" mis en vente pour ${Math.round(t)}$ !`,"success"),A()}function nt(){if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(s=>{r[s]&&o.inventory.push({id:$(),partId:r[s].partId,condition:r[s].condition,pricePaid:d(r[s].partId).price})}),r.rams){const s=new Set;r.rams.forEach(n=>{if(n){if(n.kitId){if(s.has(n.kitId))return;s.add(n.kitId)}o.inventory.push({id:$(),partId:n.partId,condition:n.condition,pricePaid:d(n.partId).price})}})}r.storages&&r.storages.forEach(s=>{s&&o.inventory.push({id:$(),partId:s.partId,condition:s.condition,pricePaid:d(s.partId).price})});const t=o.workbenches.find(s=>s.id===o.selectedWorkbenchId);t.pc=null,r=null,window.isPcRunning=!1,G(),w(),v("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !","info"),A()}function rt(e){const t=o.workbenches.find(s=>s.pc&&s.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,G(),e.status="on_hold",w(),v(`Mission "${e.subject}" mise en attente. Le PC a été rangé en réserve.`,"info"),A()}function at(){const e=document.createElement("div");e.className="modal-overlay",e.id="paste-choice-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="400px",t.innerHTML=`
        <div class="panel-header">
            <h2>Choix de la pâte thermique</h2>
            <button class="os-window-close" id="btn-close-paste-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; display:flex; flex-direction:column; gap:12px; text-align:center">
            <p style="font-size:0.85rem; color:var(--text-secondary)">Sélectionnez le type de pâte thermique à appliquer sur le processeur :</p>
            <button class="btn-secondary" id="btn-apply-std-paste" style="width:100%">
                Pâte Thermique Standard (Gratuit, Illimité)
            </button>
            <button class="btn-primary glow-btn" id="btn-apply-lm-paste" style="width:100%; background:linear-gradient(135deg, var(--color-purple), #90f)">
                Métal Liquide Premium (Stock : ${o.liquidMetalCount} seringues)
            </button>
        </div>
    `,e.appendChild(t),document.body.appendChild(e),document.getElementById("btn-close-paste-modal").addEventListener("click",()=>{e.remove()}),document.getElementById("btn-apply-std-paste").addEventListener("click",()=>{r.thermalPasteApplied=!0,r.thermalPasteType="standard",w(),L(),e.remove(),A()}),document.getElementById("btn-apply-lm-paste").addEventListener("click",()=>{o.liquidMetalCount>0?(o.liquidMetalCount-=1,r.thermalPasteApplied=!0,r.thermalPasteType="liquid_metal",w(),L(),e.remove(),A(),v("Métal Liquide Premium appliqué avec succès sur le CPU !","success")):v("Plus de seringues de Métal Liquide en stock !","error")})}let B="cpu",H=[];function ot(){const e=document.getElementById("pane-shop");e.innerHTML="";const t=document.createElement("div");t.className="shop-layout";const s=document.createElement("div");s.className="glass-panel shop-filters",s.innerHTML=`
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; padding:0 8px">Composants</div>
        <button class="filter-btn ${B==="cpu"?"active":""}" data-cat="cpu">💾 Processeurs <span class="badge font-mono">${O("cpu")}</span></button>
        <button class="filter-btn ${B==="motherboard"?"active":""}" data-cat="motherboard">🔌 Cartes Mères <span class="badge font-mono">${O("motherboard")}</span></button>
        <button class="filter-btn ${B==="gpu"?"active":""}" data-cat="gpu">🎮 Cartes Graphiques <span class="badge font-mono">${O("gpu")}</span></button>
        <button class="filter-btn ${B==="ram"?"active":""}" data-cat="ram">⚡ Mémoires RAM <span class="badge font-mono">${O("ram")}</span></button>
        <button class="filter-btn ${B==="storage"?"active":""}" data-cat="storage">💽 Stockages SSD/HDD <span class="badge font-mono">${O("storage")}</span></button>
        <button class="filter-btn ${B==="psu"?"active":""}" data-cat="psu">🔌 Alimentations <span class="badge font-mono">${O("psu")}</span></button>
        <button class="filter-btn ${B==="cooler"?"active":""}" data-cat="cooler">❄️ Refroidissements <span class="badge font-mono">${O("cooler")}</span></button>
        <button class="filter-btn ${B==="case"?"active":""}" data-cat="case">🖥️ Boîtiers PC <span class="badge font-mono">${O("case")}</span></button>
        
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:15px 0 8px; padding:0 8px">Améliorations</div>
        <button class="filter-btn ${B==="upgrades"?"active":""}" data-cat="upgrades">🛠️ Atelier & Établis</button>
    `;const n=document.createElement("div");n.style.display="grid",n.style.gridTemplateColumns="1fr 280px",n.style.gap="1.5rem",n.style.height="100%",n.style.minHeight="0";const a=document.createElement("div");a.className="glass-panel",a.style.overflow="hidden",a.style.display="flex",a.style.flexDirection="column",a.innerHTML=`
        <div class="panel-header">
            <h2 id="catalog-title">${me()}</h2>
        </div>
        <div class="shop-catalog" id="shop-catalog-items"></div>
    `;const i=document.createElement("div");i.className="glass-panel",i.style.padding="1rem",i.style.display="flex",i.style.flexDirection="column",i.id="shop-cart-panel",n.appendChild(a),n.appendChild(i),t.appendChild(s),t.appendChild(n),e.appendChild(t),s.querySelectorAll(".filter-btn").forEach(c=>{c.addEventListener("click",()=>{B=c.getAttribute("data-cat"),s.querySelectorAll(".filter-btn").forEach(p=>p.classList.remove("active")),c.classList.add("active"),document.getElementById("catalog-title").textContent=me(),Z()})}),Z(),te()}function O(e){return j.filter(t=>t.type===e).length}function me(){switch(B){case"cpu":return"Processeurs (Intel & AMD)";case"motherboard":return"Cartes Mères";case"gpu":return"Cartes Graphiques (NVIDIA RTX & AMD RX)";case"ram":return"Mémoire Vive (DDR4 / DDR5)";case"storage":return"Disques Durs & SSD (NVMe / SATA)";case"psu":return"Alimentations Énergétiques";case"cooler":return"Ventirads & Watercoolings AIO";case"case":return"Boîtiers PC Desktop";case"upgrades":return"Agrandir mon Magasin";default:return"Boutique d'informatique"}}function Z(){const e=document.getElementById("shop-catalog-items");if(e.innerHTML="",B==="upgrades"){it(e);return}j.filter(s=>s.type===B).forEach(s=>{const n=o.level<s.level,a=document.createElement("div");a.className="part-card";let i="";s.type==="cpu"?i=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>Cœurs:</span><span>${s.specs.cores.split(" ")[0]}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${s.specs.speed}</span></div>
            `:s.type==="gpu"?i=`
                <div class="part-spec-item"><span>VRAM:</span><span>${s.specs.vram}</span></div>
                <div class="part-spec-item"><span>Fréquence:</span><span>${s.specs.speed}</span></div>
                <div class="part-spec-item"><span>TDP:</span><span>${s.specs.power}W</span></div>
            `:s.type==="motherboard"?i=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>RAM:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Taille:</span><span>${s.specs.size}</span></div>
            `:s.type==="ram"?i=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${s.specs.speed}</span></div>
            `:s.type==="storage"?i=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.storageType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Débit:</span><span>${s.specs.speed}</span></div>
            `:s.type==="psu"?i=`
                <div class="part-spec-item"><span>Puissance:</span><span>${s.specs.wattage}W</span></div>
                <div class="part-spec-item"><span>Certif:</span><span>${s.specs.rating}</span></div>
            `:s.type==="cooler"?i=`
                <div class="part-spec-item"><span>Style:</span><span>${s.specs.style}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.coolingPower}</span></div>
                <div class="part-spec-item"><span>Socket:</span><span style="max-width:130px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap" title="${s.specs.socket}">${s.specs.socket}</span></div>
            `:s.type==="case"&&(i=`
                <div class="part-spec-item"><span>Facteur:</span><span>${s.specs.size}</span></div>
                <div class="part-spec-item"><span>Airflow:</span><span>${s.specs.airflow}</span></div>
            `),a.innerHTML=`
            <div>
                <div class="part-category">${s.brand}</div>
                <div class="part-name">${s.name}</div>
                <div class="part-specs">${i}</div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price">${J(s).toFixed(2)}$</div>
                ${n?`<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">Niveau ${s.level}</button>`:`<button class="btn-buy" id="btn-add-${s.id}">Ajouter</button>`}
            </div>
        `,e.appendChild(a),n||document.getElementById(`btn-add-${s.id}`).addEventListener("click",()=>{lt(s.id)})})}function it(e){o.workbenches.forEach(a=>{if(a.id===1)return;const i=document.createElement("div");i.className="part-card",i.innerHTML=`
            <div>
                <div class="part-category">Atelier</div>
                <div class="part-name">Établi de Montage n°${a.id}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">Permet de travailler sur un PC supplémentaire en simultané.</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${a.cost.toFixed(2)}$</div>
                ${a.unlocked?'<button class="btn-buy" disabled>Acheté</button>':`<button class="btn-buy" id="btn-buy-wb-${a.id}" ${o.money<a.cost?"disabled":""}>Acheter</button>`}
            </div>
        `,e.appendChild(i),a.unlocked||document.getElementById(`btn-buy-wb-${a.id}`).addEventListener("click",()=>{ct(a)})});const t=document.createElement("div");t.className="part-card",t.innerHTML=`
        <div>
            <div class="part-category">Consommable</div>
            <div class="part-name">Métal Liquide Premium</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">Réduit la température sous charge de <strong>-8°C</strong>. Stock : <strong>${o.liquidMetalCount||0}</strong>.</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">30.00$</div>
            <button class="btn-buy" id="btn-buy-lm" ${o.money<30?"disabled":""}>Acheter</button>
        </div>
    `,e.appendChild(t),document.getElementById("btn-buy-lm").addEventListener("click",()=>{ne("liquid_metal",30)});const s=document.createElement("div");s.className="part-card",s.innerHTML=`
        <div>
            <div class="part-category">Outil Permanent</div>
            <div class="part-name">Sonde Thermique Pro</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">Alerte de sécurité orange clignotante dans VirtualOS dès que la température CPU approche des 90°C.</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">150.00$</div>
            ${o.hasThermalProbe?'<button class="btn-buy" disabled>Acquis</button>':`<button class="btn-buy" id="btn-buy-tp" ${o.money<150?"disabled":""}>Acheter</button>`}
        </div>
    `,e.appendChild(s),o.hasThermalProbe||document.getElementById("btn-buy-tp").addEventListener("click",()=>{ne("thermal_probe",150)});const n=document.createElement("div");n.className="part-card",n.innerHTML=`
        <div>
            <div class="part-category">Outil Permanent</div>
            <div class="part-name">Clé USB Bootable Pro</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">Installation de VirtualOS deux fois plus rapide (vitesse d'écriture accélérée x2).</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">200.00$</div>
            ${o.hasFastUsb?'<button class="btn-buy" disabled>Acquis</button>':`<button class="btn-buy" id="btn-buy-fu" ${o.money<200?"disabled":""}>Acheter</button>`}
        </div>
    `,e.appendChild(n),o.hasFastUsb||document.getElementById("btn-buy-fu").addEventListener("click",()=>{ne("fast_usb",200)})}function ct(e){o.money>=e.cost&&(o.money-=e.cost,e.unlocked=!0,w(),v(`Établi ${e.id} débloqué !`,"success"),window.updateHud(),Z())}function ne(e,t){o.money>=t?(o.money-=t,e==="liquid_metal"?(o.liquidMetalCount=(o.liquidMetalCount||0)+1,v(`Seringue de Pâte Métal Liquide achetée ! (Stock : ${o.liquidMetalCount})`,"success")):e==="thermal_probe"?(o.hasThermalProbe=!0,v("Sonde Thermique de Précision installée dans l'atelier !","success")):e==="fast_usb"&&(o.hasFastUsb=!0,v("Clé USB Bootable Pro acquise ! L'installation de VirtualOS sera deux fois plus rapide.","success")),w(),window.updateHud(),Z()):v("Fonds insuffisants !","error")}function lt(e){H.push(e),te(),v("Pièce ajoutée au panier.","info")}function dt(e){H.splice(e,1),te()}function te(){const e=document.getElementById("shop-cart-panel");if(!e)return;if(H.length===0){e.innerHTML=`
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">Votre panier est vide</p>
            </div>
        `;return}let t=0;const s=H.map((n,a)=>{const i=j.find(p=>p.id===n);if(!i)return"";const c=J(i);return t+=c,`
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${i.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${c}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${a})">×</button>
                </div>
            </div>
        `}).join("");e.innerHTML=`
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat (${H.length})</div>
        <div style="flex:1; overflow-y:auto; margin-bottom:1rem">
            ${s}
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:10px; margin-bottom:15px">
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:5px">
                <span>Sous-total:</span>
                <span class="font-mono text-emerald" style="font-weight:600">${t.toFixed(2)}$</span>
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
    `,document.getElementById("btn-checkout").addEventListener("click",pt),window.removeCartItem=n=>{dt(n)}}function pt(){if(H.length===0)return;const e=document.getElementById("shipping-method").value,n=H.reduce((a,i)=>a+J(j.find(c=>c.id===i)),0)+(e==="express"?50:10);o.money>=n?Re(H,e).success&&(H=[],te(),window.updateHud(),v(e==="express"?"Commande livrée instantanément par Express !":"Commande passée ! Vos pièces arriveront demain matin.","success")):v("Fonds insuffisants pour finaliser la commande.","error")}let D="all";function le(){const e=document.getElementById("pane-inventory");e.innerHTML="";const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem",t.style.height="100%";const s=document.createElement("div");s.className="flex-row-justify",s.innerHTML=`
        <h2 style="font-size:1.3rem; font-weight:700">Mon Stock de Pièces Detachées</h2>
        <div style="display:flex; gap:8px" id="inventory-cat-buttons">
            <button class="btn-secondary ${D==="all"?"text-cyan":""}" data-cat="all">Tout</button>
            <button class="btn-secondary ${D==="cpu"?"text-cyan":""}" data-cat="cpu">💾 CPU</button>
            <button class="btn-secondary ${D==="motherboard"?"text-cyan":""}" data-cat="motherboard">🔌 MB</button>
            <button class="btn-secondary ${D==="gpu"?"text-cyan":""}" data-cat="gpu">🎮 GPU</button>
            <button class="btn-secondary ${D==="ram"?"text-cyan":""}" data-cat="ram">⚡ RAM</button>
            <button class="btn-secondary ${D==="storage"?"text-cyan":""}" data-cat="storage">💽 Stock</button>
            <button class="btn-secondary ${D==="psu"?"text-cyan":""}" data-cat="psu">🔌 PSU</button>
            <button class="btn-secondary ${D==="cooler"?"text-cyan":""}" data-cat="cooler">❄️ Vent</button>
            <button class="btn-secondary ${D==="case"?"text-cyan":""}" data-cat="case">🖥️ Cases</button>
        </div>
    `;const n=document.createElement("div");n.className="inventory-grid",n.id="inventory-items-grid",t.appendChild(s),t.appendChild(n),e.appendChild(t),s.querySelector("#inventory-cat-buttons").querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{D=a.getAttribute("data-cat"),le()})}),ut()}function ut(){const e=document.getElementById("inventory-items-grid");e.innerHTML="";const t=o.inventory.filter(s=>{if(D==="all")return!0;const n=d(s.partId);return n&&n.type===D});if(t.length===0){e.innerHTML=`
            <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--text-muted)">
                <span style="font-size:3rem">📦</span>
                <p style="margin-top:10px">Aucune pièce disponible dans cette catégorie.</p>
            </div>
        `;return}t.forEach(s=>{const n=d(s.partId);if(!n)return;const a=document.createElement("div");a.className=`part-card ${s.condition}`;let i="Neuf",c=.5;s.condition==="used"?(i="Occasion",c=.3):s.condition==="broken"&&(i="En Panne",c=.05);const p=Math.round(n.price*c);let u="";n.type==="cpu"?u=`${n.specs.socket} | ${n.specs.cores.split(" ")[0]}`:n.type==="gpu"?u=`${n.specs.vram} | ${n.specs.power}W`:n.type==="motherboard"?u=`${n.specs.socket} | ${n.specs.ramType}`:n.type==="ram"?u=`${n.specs.ramType} | ${n.specs.capacity}`:n.type==="storage"?u=`${n.specs.storageType} | ${n.specs.capacity}`:n.type==="psu"?u=`${n.specs.wattage}W`:n.type==="cooler"?u=`${n.specs.style}`:n.type==="case"&&(u=`${n.specs.airflow} Airflow`),a.innerHTML=`
            <span class="part-badge">${i}</span>
            <div>
                <div class="part-category">${n.brand}</div>
                <div class="part-name">${n.name}</div>
                <div class="part-specs">
                    <div class="part-spec-item"><span>Caractéristiques :</span><span>${u}</span></div>
                    <div class="part-spec-item"><span>Valeur achat :</span><span>${n.price}$</span></div>
                </div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price" style="font-size:0.95rem; color:var(--text-secondary)">Occase : ${p}$</div>
                <button class="btn-buy" style="border-color:var(--color-crimson); color:var(--color-crimson); background:rgba(255,0,85,0.05)" id="btn-sell-${s.id}">
                    Vendre
                </button>
            </div>
        `,e.appendChild(a),document.getElementById(`btn-sell-${s.id}`).addEventListener("click",()=>{mt(s,p)})})}function mt(e,t){o.inventory=o.inventory.filter(s=>s.id!==e.id),o.money+=t,w(),v(`Pièce revendue pour ${t}$ !`,"success"),window.updateHud(),le()}function V(){const e=document.getElementById("pane-bargainbin");e.innerHTML="";const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr",t.style.gap="1.5rem",t.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto",s.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-cyan)">🔥 Offres en cours (Achats)</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem" id="bargain-listings"></div>
    `;const n=document.createElement("div");n.className="glass-panel",n.style.padding="1.5rem",n.style.overflowY="auto",n.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-purple)">📈 Mes PC en Vente (Flips)</h2>
        <div style="display:flex; flex-direction:column; gap:1rem" id="my-listings"></div>
    `,t.appendChild(s),t.appendChild(n),e.appendChild(t),ft(),vt()}function ft(){const e=document.getElementById("bargain-listings");if(e.innerHTML="",o.bargainBin.length===0){e.innerHTML=`<div style="text-align:center; padding:3rem; color:var(--text-muted)">Aucune offre d'occasion aujourd'hui. Revenez demain !</div>`;return}o.bargainBin.forEach(t=>{const s=document.createElement("div");s.className="part-card",s.style.flexDirection="column";let n=[];Object.keys(t.pc).forEach(a=>{if(t.pc[a]&&t.pc[a].partId){const i=d(t.pc[a].partId);i&&n.push(i.name)}}),s.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-amber">PC d'occasion</span>
                <span class="part-price text-emerald">${t.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px; font-size:1.05rem">${t.name}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px">${t.description}</p>
            
            <div style="font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:6px; border-radius:4px; margin-bottom:12px">
                <strong>Composants inclus :</strong> ${n.join(", ")}
            </div>

            <button class="btn-primary glow-btn" style="width:100%" id="btn-buy-flip-${t.id}">
                Acheter pour ${t.price}$
            </button>
        `,e.appendChild(s),document.getElementById(`btn-buy-flip-${t.id}`).addEventListener("click",()=>{gt(t)})})}function gt(e){if(o.money>=e.price){o.money-=e.price;const t={id:"pc-flip-"+$(),partId:"special-pc-case",type:"pc_flip",name:e.name,condition:"used",pc:e.pc,pricePaid:e.price};o.inventory.push(t),o.bargainBin=o.bargainBin.filter(s=>s.id!==e.id),w(),v(`PC "${e.name}" acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.`,"success"),window.updateHud(),V()}else v("Fonds insuffisants !","error")}function vt(){const e=document.getElementById("my-listings");e.innerHTML="";const t=o.customPcs||[];if(t.length===0){e.innerHTML=`
            <div style="text-align:center; padding:3rem; color:var(--text-muted)">
                <p>Aucun ordinateur mis en vente.</p>
                <small>Montez un PC libre sur un établi et mettez-le en vente pour générer du profit !</small>
            </div>
        `;return}t.forEach((s,n)=>{var c,p,u,l;const a=document.createElement("div");a.className="part-card",a.style.flexDirection="column";let i="";if(s.activeOffer){const x=s.activeOffer;x.isFullPrice?i=`
                    <div style="background:rgba(0, 255, 136, 0.05); border:1px solid rgba(0, 255, 136, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--text-emerald)">🟢 OFFRE D'ACHAT FERME</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${x.buyerName}</strong> achète le PC au prix demandé de <strong class="text-emerald font-mono">${x.offeredPrice}$</strong> !
                        </p>
                        <button class="btn-primary glow-btn" style="width:100%; margin-top:8px; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.75rem; padding:5px" id="btn-accept-offer-${n}">
                            Confirmer la vente
                        </button>
                    </div>
                `:i=`
                    <div style="background:rgba(255, 170, 0, 0.05); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px" id="offer-container-${n}">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--color-amber)">🟡 PROPOSITION DE NÉGOCIATION</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${x.buyerName}</strong> vous propose <strong class="text-emerald font-mono">${x.offeredPrice}$</strong> (Demande : ${s.price}$ - Rabais : ${Math.round((1-x.offeredPrice/s.price)*100)}%).
                        </p>
                        <div style="display:flex; gap:6px; margin-top:8px" id="offer-actions-${n}">
                            <button class="btn-primary glow-btn" style="flex:1; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.7rem; padding:4px" id="btn-accept-offer-${n}">
                                Accepter
                            </button>
                            <button class="btn-secondary" style="flex:1; border-color:rgba(189,0,255,0.3); color:var(--color-purple); font-size:0.7rem; padding:4px" id="btn-counter-offer-${n}">
                                Contre-proposer
                            </button>
                            <button class="btn-secondary text-crimson" style="flex:1; border-color:rgba(255,0,85,0.15); font-size:0.7rem; padding:4px" id="btn-refuse-offer-${n}">
                                Refuser
                            </button>
                        </div>
                        <div id="counter-form-${n}" style="display:none; flex-direction:column; gap:6px; margin-top:8px">
                            <input type="number" id="input-counter-${n}" placeholder="Entrez votre prix ($)" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.75rem">
                            <div style="display:flex; gap:6px">
                                <button class="btn-primary glow-btn" style="flex:1; font-size:0.7rem; padding:4px" id="btn-submit-counter-${n}">Valider</button>
                                <button class="btn-secondary" style="flex:1; font-size:0.7rem; padding:4px" id="btn-cancel-counter-${n}">Annuler</button>
                            </div>
                        </div>
                    </div>
                `}else i=`
                <div style="font-size:0.75rem; color:var(--text-muted); background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:6px; padding:8px; margin-top:8px; margin-bottom:12px; text-align:center">
                    En attente d'acheteurs... (Transition de nuit requise)
                </div>
            `;if(a.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-purple">En vente</span>
                <span class="part-price text-emerald">${s.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px">${s.name}</div>
            
            <div class="part-specs">
                <div class="part-spec-item"><span>Benchmark :</span><span class="text-cyan font-mono">${s.pc.score} Pts</span></div>
                <div class="part-spec-item"><span>CPU :</span><span>${((p=d((c=s.pc.cpu)==null?void 0:c.partId))==null?void 0:p.name)||"Aucun"}</span></div>
                <div class="part-spec-item"><span>GPU :</span><span>${((l=d((u=s.pc.gpu)==null?void 0:u.partId))==null?void 0:l.name)||"Aucun"}</span></div>
            </div>

            ${i}

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${n}">
                Retirer de la vente (Récupérer)
            </button>
        `,e.appendChild(a),document.getElementById(`btn-cancel-listing-${n}`).addEventListener("click",()=>{bt(n)}),s.activeOffer&&(document.getElementById(`btn-accept-offer-${n}`).addEventListener("click",()=>{yt(n)}),!s.activeOffer.isFullPrice)){document.getElementById(`btn-refuse-offer-${n}`).addEventListener("click",()=>{ht(n)});const x=document.getElementById(`btn-counter-offer-${n}`),g=document.getElementById(`counter-form-${n}`),h=document.getElementById(`offer-actions-${n}`);x.addEventListener("click",()=>{g.style.display="flex",h.style.display="none"}),document.getElementById(`btn-cancel-counter-${n}`).addEventListener("click",()=>{g.style.display="none",h.style.display="flex"}),document.getElementById(`btn-submit-counter-${n}`).addEventListener("click",()=>{const b=parseFloat(document.getElementById(`input-counter-${n}`).value);if(isNaN(b)||b<=0){v("Veuillez saisir un prix valide !","error");return}xt(n,Math.round(b))})}})}function bt(e){const t=o.customPcs[e],s={id:"pc-flip-"+$(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:t.price*.5};o.inventory.push(s),o.customPcs.splice(e,1),w(),v("Ordinateur retiré du marché BargainBin.","info"),V()}function yt(e){const s=o.customPcs[e].activeOffer;o.money+=s.offeredPrice,o.xp+=50,o.customPcs.splice(e,1),w(),v(`Félicitations ! PC vendu à ${s.buyerName} pour ${s.offeredPrice}$ !`,"success"),window.updateHud(),V()}function ht(e){const t=o.customPcs[e];t.activeOffer=null,w(),v("Offre déclinée. L'acheteur s'en va.","info"),V()}function xt(e,t){const s=o.customPcs[e],n=s.activeOffer;if(t<=n.offeredPrice){o.money+=t,o.xp+=50,o.customPcs.splice(e,1),w(),v(`L'acheteur accepte immédiatement cette contre-proposition ! Vendu pour ${t}$ !`,"success"),window.updateHud(),V();return}if(t>=s.price){s.activeOffer=null,w(),v("L'acheteur s'est senti offensé par votre proposition déraisonnable et a quitté la table des négociations !","error"),V();return}const a=s.price-n.offeredPrice,p=1-(t-n.offeredPrice)/(a||1);Math.random()<p?(o.money+=t,o.xp+=50,o.customPcs.splice(e,1),w(),v(`Négociation réussie ! ${n.buyerName} accepte votre contre-proposition de ${t}$ !`,"success"),window.updateHud()):(s.activeOffer=null,w(),v(`${n.buyerName} a refusé votre contre-proposition de ${t}$ et préfère chercher ailleurs.`,"warning")),V()}function wt(){if(!o.customPcs||o.customPcs.length===0)return{soldCount:0,totalSales:0};let e=0,t=0;const s=["GamerPro99","MamanGamer","TechEnthusiast","DirectProd","KevinDarty","RetroLover","FPS_King","SophieSlay"];return o.customPcs.forEach(n=>{n.activeOffer=null;const a=n.pc;let i=0;Object.keys(a).forEach(u=>{if(a[u]&&a[u].partId){const l=d(a[u].partId);l&&(i+=l.price)}});const c=n.price/(i||1);let p=.5;if(c<.8?p=.95:c<1.2?p=.75:c<1.5?p=.45:c<2?p=.15:p=.03,a.score>8e3&&(p+=.1),Math.random()<p){const u=s[Math.floor(Math.random()*s.length)];if(Math.random()<.35||c<.9)n.activeOffer={id:"off-"+$(),buyerName:u,offeredPrice:n.price,isFullPrice:!0,status:"pending"};else{const x=.75+Math.random()*.17,g=Math.round(n.price*x);n.activeOffer={id:"off-"+$(),buyerName:u,offeredPrice:g,isFullPrice:!1,status:"pending"}}}}),w(),{soldCount:t,totalSales:e}}function de(){const e=document.getElementById("pane-showroom");e.innerHTML="";const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr 340px",t.style.gap="1.5rem",t.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto";const n=[{id:0,requiredLevel:1,unlocked:!0},{id:1,requiredLevel:3,unlocked:o.level>=3},{id:2,requiredLevel:6,unlocked:o.level>=6}];if(!o.showroomPcs||!Array.isArray(o.showroomPcs))o.showroomPcs=[null,null,null];else if(o.showroomPcs.length<3)for(;o.showroomPcs.length<3;)o.showroomPcs.push(null);let a="";n.forEach((h,b)=>{var f,C,M,P,E,y,I,T;const m=o.showroomPcs[b];h.unlocked?m===null?a+=`
                <div style="background:rgba(255,255,255,0.02); border:1.5px dashed rgba(189,0,255,0.25); border-radius:10px; padding:2rem; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem; filter:drop-shadow(0 0 10px rgba(189,0,255,0.3))">🏆</span>
                    <div style="font-weight:700; font-size:0.95rem">Emplacement Libre n°${b+1}</div>
                    <p style="font-size:0.75rem; color:var(--text-muted); max-width:320px">Exposez un ordinateur libre assemblé avec succès pour accroître votre prestige et débloquer des remises en magasin.</p>
                    <button class="btn-primary glow-btn" style="background:linear-gradient(135deg, var(--color-purple), #90f); padding:6px 12px; font-size:0.75rem; box-shadow:none" id="btn-expose-pc-${b}">
                        Exposer un Ordinateur
                    </button>
                </div>
            `:a+=`
                <div class="part-card" style="padding:1.2rem; min-height:160px; display:flex; flex-direction:row; gap:1.5rem; justify-content:space-between; align-items:center; border-color:rgba(189,0,255,0.3)">
                    <div style="display:flex; flex-direction:column; gap:8px; flex:1">
                        <div style="display:flex; align-items:center; gap:10px">
                            <span class="status-badge on" style="background:rgba(189,0,255,0.15); color:var(--color-purple); font-size:0.6rem">En Exposition n°${b+1}</span>
                            <span class="part-price" style="font-size:1.15rem; color:var(--color-cyan)">★ ${m.pc.score} Pts</span>
                        </div>
                        <div style="font-weight:700; font-size:1.1rem; color:var(--text-primary)">${m.name}</div>
                        <div style="font-size:0.75rem; color:var(--text-secondary); display:grid; grid-template-columns:1fr 1fr; gap:4px">
                            <div><strong>CPU :</strong> ${((C=d((f=m.pc.cpu)==null?void 0:f.partId))==null?void 0:C.name)||"Aucun"}</div>
                            <div><strong>GPU :</strong> ${((P=d((M=m.pc.gpu)==null?void 0:M.partId))==null?void 0:P.name)||"Aucun"}</div>
                            <div><strong>RAM :</strong> ${((y=d((E=m.pc.ram)==null?void 0:E.partId))==null?void 0:y.name)||"Aucun"}</div>
                            <div><strong>Boîtier :</strong> ${((T=d((I=m.pc.case)==null?void 0:I.partId))==null?void 0:T.name)||"Aucun"}</div>
                        </div>
                    </div>
                    <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.15); font-size:0.75rem; padding:6px 12px; align-self:center" id="btn-retrieve-pc-${b}">
                        Récupérer le PC
                    </button>
                </div>
            `:a+=`
                <div style="background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:10px; padding:2rem; text-align:center; opacity:0.6; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem">🔒</span>
                    <div style="font-weight:700; font-size:0.95rem">Emplacement Bloqué</div>
                    <p style="font-size:0.75rem; color:var(--text-muted)">Débloqué de manière permanente au Niveau ${h.requiredLevel}</p>
                </div>
            `}),s.innerHTML=`
        <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-purple)">✨ Ordinateurs en Vitrine (Prestige Showroom)</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem">${a}</div>
    `;const i=document.createElement("div");i.className="glass-panel",i.style.padding="1.5rem",i.style.overflowY="auto";const p=o.showroomPcs.filter(h=>h!==null).reduce((h,b)=>h+(b.pc.score||0),0),u=Math.min(Math.floor(p/2500),20),l=(Math.floor(p/2500)+1)*2500,x=Math.min(p%2500/2500*100,100);let g="";u>0?g=`
            <div style="display:flex; flex-direction:column; gap:6px; font-size:0.8rem; color:var(--text-secondary)">
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>ASUS ROG & Prime</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>Intel & AMD processors</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>NVIDIA GeForce & Radeon</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.03); padding-bottom:4px">
                    <span>Corsair, G.Skill, Kingston</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
                <div style="display:flex; justify-content:space-between">
                    <span>Alimentations & Boîtiers</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
            </div>
        `:g=`
            <div style="text-align:center; padding:1.2rem; color:var(--text-muted); font-size:0.75rem; border:1px dashed var(--border-color); border-radius:6px">
                Atteignez 2500 pts de prestige cumulés pour débloquer votre premier sponsor permanent !
            </div>
        `,i.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-cyan)">🏆 Statut de Prestige</h2>
        
        <div style="background:rgba(0,0,0,0.15); border:1px solid var(--border-color); border-radius:8px; padding:12px; margin-bottom:1.5rem">
            <div class="stat-label">Score de Prestige Cumulé</div>
            <div style="font-size:2rem; font-weight:800; color:var(--color-cyan); font-family:var(--font-mono); text-shadow:0 0 10px rgba(0,240,255,0.25)">${p} Pts</div>
            
            <div class="xp-bar-container" style="height:6px; margin-top:10px; margin-bottom:4px">
                <div class="xp-bar-fill" style="width: ${x}%; background:linear-gradient(90deg, var(--color-cyan), var(--color-purple))"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:var(--text-muted)">
                <span>Progression remise</span>
                <span>${p} / ${l} Pts</span>
            </div>
        </div>

        <div style="background:rgba(0, 255, 136, 0.03); border:1px solid rgba(0, 255, 136, 0.2); border-radius:8px; padding:12px; margin-bottom:1.5rem">
            <div class="stat-label" style="color:var(--color-emerald)">Remise Permanente Débloquée</div>
            <div style="font-size:2.2rem; font-weight:800; color:var(--color-emerald); font-family:var(--font-mono)">-${u}%</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px; line-height:1.4">Appliqué automatiquement sur l'achat de tous les composants de la boutique en ligne !</p>
        </div>

        <div class="job-box" style="margin-top:0">
            <div class="job-box-title" style="color:var(--color-purple)">Sponsors Permanent Actifs</div>
            ${g}
        </div>
    `,t.appendChild(s),t.appendChild(i),e.appendChild(t),n.forEach((h,b)=>{if(!h.unlocked)return;o.showroomPcs[b]===null?document.getElementById(`btn-expose-pc-${b}`).addEventListener("click",()=>{It(b)}):document.getElementById(`btn-retrieve-pc-${b}`).addEventListener("click",()=>{Mt(b)})})}function It(e){const t=[];o.workbenches.forEach(l=>{l.pc&&!l.pc.orderId&&l.pc.score&&l.pc.score>0&&t.push({source:"workbench",workbenchId:l.id,name:l.pc.name||`PC de l'Établi ${l.id}`,score:l.pc.score,pc:l.pc})});const s=[];o.inventory.forEach(l=>{l.type==="pc_flip"&&l.pc&&l.pc.score&&l.pc.score>0&&s.push({source:"inventory",inventoryId:l.id,name:l.name||"PC d'occasion réparé",score:l.pc.score,pc:l.pc})});const n=[...t,...s],a=document.createElement("div");a.className="modal-overlay",a.id="expose-pc-selector-modal";const i=document.createElement("div");i.className="modal-content",i.style.maxWidth="550px";const c=document.createElement("div");c.className="panel-header",c.innerHTML=`
        <h2>Sélectionner un PC pour la Vitrine ${e+1}</h2>
        <button class="os-window-close" id="btn-close-expose-modal">×</button>
    `;const p=document.createElement("div");p.className="modal-body",p.style.padding="1.5rem";let u="";n.length===0?u=`
            <div style="text-align:center; padding:2rem; color:var(--text-muted)">
                <span style="font-size:2.5rem">⚠️</span>
                <p style="margin-top:10px; font-weight:600">Aucun PC éligible trouvé.</p>
                <p style="font-size:0.75rem; margin-top:4px">Pour exposer un PC, il doit être entièrement fonctionnel, monté en tant que PC libre (pas pour un contrat client) et avoir effectué au moins un test de benchmark 3D réussi pour enregistrer son score !</p>
            </div>
        `:u=`
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:12px">Sélectionnez le PC que vous souhaitez exposer dans le showroom :</p>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${n.map((l,x)=>{var m,f,C,M;const g=((f=d((m=l.pc.cpu)==null?void 0:m.partId))==null?void 0:f.name)||"Aucun",h=((M=d((C=l.pc.gpu)==null?void 0:C.partId))==null?void 0:M.name)||"Aucun",b=l.source==="workbench"?`Établi ${l.workbenchId}`:"Stock";return`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center; border-color:var(--border-color)">
                            <div style="display:flex; flex-direction:column; gap:3px">
                                <div style="font-weight:700; font-size:0.9rem">${l.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-muted)">CPU : ${g} | GPU : ${h}</div>
                                <div style="font-size:0.65rem; color:var(--color-purple)">Source : ${b}</div>
                            </div>
                            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:5px">
                                <span class="text-cyan font-mono" style="font-weight:700; font-size:0.9rem">★ ${l.score} Pts</span>
                                <button class="btn-buy" id="btn-select-expose-${x}">Exposer</button>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `,p.innerHTML=u,i.appendChild(c),i.appendChild(p),a.appendChild(i),document.body.appendChild(a),document.getElementById("btn-close-expose-modal").addEventListener("click",()=>{a.remove()}),n.forEach((l,x)=>{document.getElementById(`btn-select-expose-${x}`).addEventListener("click",()=>{if(o.showroomPcs[e]={id:"showroom-"+$(),name:l.name,pc:l.pc},l.source==="workbench"){const g=o.workbenches.find(h=>h.id===l.workbenchId);g.pc=null}else l.source==="inventory"&&(o.inventory=o.inventory.filter(g=>g.id!==l.inventoryId));w(),a.remove(),v(`PC "${l.name}" placé en vitrine de prestige ! Vos remises en magasin augmentent !`,"success"),window.updateHud(),de()})})}function Mt(e){const t=o.showroomPcs[e];if(!t)return;const s={id:"pc-flip-"+$(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:0};o.inventory.push(s),o.showroomPcs[e]=null,w(),v(`PC "${t.name}" retiré du showroom et renvoyé dans votre inventaire.`,"info"),window.updateHud(),de()}let xe="emails";function v(e,t="info"){const s=document.getElementById("notification-container");if(!s)return;const n=document.createElement("div");n.className=`toast ${t}`;let a="ℹ️";t==="success"?a="✅":t==="error"?a="❌":t==="warning"&&(a="⚠️"),n.innerHTML=`
        <span style="font-size:1.1rem">${a}</span>
        <span class="toast-msg">${e}</span>
    `,s.appendChild(n),setTimeout(()=>{n.classList.add("show")},10),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>{n.remove()},300)},4e3)}function oe(){document.getElementById("hud-level").textContent=o.level,document.getElementById("hud-money").textContent=`${o.money.toLocaleString("fr-FR",{minimumFractionDigits:2})}$`,document.getElementById("hud-day").textContent=`Jour ${o.day}`;const e=re(o.level),t=Math.min(o.xp/e*100,100);document.getElementById("hud-xp-fill").style.width=`${t}%`,document.getElementById("hud-xp-text").textContent=`${o.xp} / ${e} XP`;const s=o.activeJobs.filter(a=>a.status==="available"||a.status==="ready").length,n=document.getElementById("badge-emails");s>0?(n.style.display="block",n.textContent=s):n.style.display="none"}function ie(e){xe=e,document.querySelectorAll(".sidebar .nav-item").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll(".viewport .tab-pane").forEach(t=>{t.id===`pane-${e}`?t.classList.add("active"):t.classList.remove("active")}),e==="emails"?W():e==="workbench"?A():e==="shop"?ot():e==="inventory"?le():e==="bargainbin"?V():e==="showroom"&&de(),w()}function we(){const e=o.currentEvent;if(!e)return;const t=document.createElement("div");t.className="modal-overlay",t.id="daily-event-modal";const s=document.createElement("div");s.className="modal-content",s.style.maxWidth="500px",s.style.border="2px solid var(--color-purple)",s.style.boxShadow="0 0 20px rgba(189, 0, 255, 0.2)",s.innerHTML=`
        <div class="panel-header" style="background:rgba(189, 0, 255, 0.1); border-bottom:1px solid rgba(189, 0, 255, 0.3)">
            <h2 style="color:var(--text-primary); display:flex; align-items:center; gap:8px">
                📰 Tech News Flash
            </h2>
            <button class="os-window-close" id="btn-close-event-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; text-align:center; display:flex; flex-direction:column; gap:15px">
            <h3 style="color:var(--color-amber); font-size:1.3rem; font-weight:700">${e.title}</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--text-primary)">
                ${e.text}
            </p>
            <button class="btn-primary glow-btn" id="btn-ok-event-modal" style="width:100%; margin-top:10px">
                Compris !
            </button>
        </div>
    `,t.appendChild(s),document.body.appendChild(t);const n=()=>{t.remove()};s.querySelector("#btn-close-event-modal").addEventListener("click",n),s.querySelector("#btn-ok-event-modal").addEventListener("click",n)}function Ct(){const e=wt(),t=Ge();oe();let s="Journée terminée !";t.deliveriesCount>0&&(s+=` / ${t.deliveriesCount} Colis de pièces livrés.`),t.newJobsCount>0&&(s+=` / ${t.newJobsCount} Nouveaux e-mails de clients reçus.`),e.soldCount>0&&(s+=` / Flip vendu : +${e.totalSales}$ sur BargainBin !`),t.expiredCount>0&&(s+=` / ⚠️ [ANNULATION] ${t.expiredCount} contrat(s) urgent(s) annulé(s) par le client (délai dépassé) !`),v(s,t.expiredCount>0?"warning":"success"),ie(xe),setTimeout(()=>{we()},500)}function fe(){const e=document.createElement("div");e.className="modal-overlay",e.id="game-help-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="650px",t.style.maxHeight="90vh",t.style.border="1.5px solid var(--color-purple)",t.style.boxShadow="0 0 20px rgba(189, 0, 255, 0.2)",t.innerHTML=`
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
    `,e.appendChild(t),document.body.appendChild(e);const s=()=>{e.remove(),o.hasSeenIntro||(o.hasSeenIntro=!0,w())};t.querySelector("#btn-close-help-modal").addEventListener("click",s),t.querySelector("#btn-ok-help-modal").addEventListener("click",s)}document.addEventListener("DOMContentLoaded",()=>{Te(),window.updateHud=oe,oe(),document.querySelectorAll(".sidebar .nav-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");ie(t)})}),document.getElementById("btn-next-day").addEventListener("click",Ct),document.getElementById("btn-show-help").addEventListener("click",fe),document.getElementById("btn-export-save").addEventListener("click",()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(o)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`pc_architect_save_jour_${o.day}.json`),document.body.appendChild(t),t.click(),t.remove(),v("Sauvegarde exportée avec succès !","success")}),document.getElementById("btn-import-save").addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",t=>{const s=t.target.files[0];if(!s)return;const n=new FileReader;n.onload=a=>{try{const i=JSON.parse(a.target.result);i.money!==void 0&&i.level!==void 0&&i.inventory!==void 0?(localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(i)),v("Sauvegarde importée avec succès ! Rechargement...","success"),setTimeout(()=>{window.location.reload()},1e3)):v("Erreur : Le fichier de sauvegarde est invalide !","error")}catch{v("Erreur de lecture du fichier de sauvegarde !","error")}},n.readAsText(s)}),e.click()}),document.getElementById("btn-reset-game").addEventListener("click",()=>{const e=document.createElement("div");e.className="modal-overlay",e.id="reset-confirm-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="400px",t.style.border="1.5px solid var(--color-crimson)",t.style.boxShadow="0 0 20px rgba(255, 0, 85, 0.2)",t.innerHTML=`
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
        `,e.appendChild(t),document.body.appendChild(e);const s=()=>{e.remove()};document.getElementById("btn-close-reset-modal").addEventListener("click",s),document.getElementById("btn-cancel-reset").addEventListener("click",s),document.getElementById("btn-confirm-reset").addEventListener("click",()=>{localStorage.removeItem("pc_architect_tycoon_save"),e.remove(),v("Partie réinitialisée ! Rechargement...","success"),setTimeout(()=>{window.location.reload()},500)})}),ie("emails"),setTimeout(()=>{o.hasSeenIntro?(v("Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.","success"),we()):fe()},1e3)});
