(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}})();const ee=[{id:"cpu-i3-10100f",type:"cpu",name:"Intel Core i3-10100F",brand:"Intel",price:80,level:1,specs:{socket:"LGA1200",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1800}},{id:"cpu-ryzen3-3100",type:"cpu",name:"AMD Ryzen 3 3100",brand:"AMD",price:75,level:1,specs:{socket:"AM4",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1750}},{id:"cpu-ryzen5-3600",type:"cpu",name:"AMD Ryzen 5 3600",brand:"AMD",price:95,level:2,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.6 GHz",power:65,score:2800}},{id:"cpu-i5-11400f",type:"cpu",name:"Intel Core i5-11400F",brand:"Intel",price:130,level:2,specs:{socket:"LGA1200",cores:"6 Cores / 12 Threads",speed:"2.6 GHz",power:65,score:3200}},{id:"cpu-i5-12400f",type:"cpu",name:"Intel Core i5-12400F",brand:"Intel",price:140,level:3,specs:{socket:"LGA1700",cores:"6 Cores / 12 Threads",speed:"2.5 GHz",power:65,score:4100}},{id:"cpu-ryzen5-5600x",type:"cpu",name:"AMD Ryzen 5 5600X",brand:"AMD",price:150,level:3,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.7 GHz",power:65,score:4500}},{id:"cpu-ryzen5-7600",type:"cpu",name:"AMD Ryzen 5 7600",brand:"AMD",price:210,level:4,specs:{socket:"AM5",cores:"6 Cores / 12 Threads",speed:"3.8 GHz",power:65,score:5600}},{id:"cpu-i5-13600k",type:"cpu",name:"Intel Core i5-13600K",brand:"Intel",price:290,level:5,specs:{socket:"LGA1700",cores:"14 Cores / 20 Threads",speed:"3.5 GHz",power:125,score:6800}},{id:"cpu-i7-12700k",type:"cpu",name:"Intel Core i7-12700K",brand:"Intel",price:280,level:5,specs:{socket:"LGA1700",cores:"12 Cores / 20 Threads",speed:"3.6 GHz",power:125,score:7200}},{id:"cpu-ryzen7-5800x3d",type:"cpu",name:"AMD Ryzen 7 5800X3D",brand:"AMD",price:320,level:6,specs:{socket:"AM4",cores:"8 Cores / 16 Threads",speed:"3.4 GHz",power:105,score:8200}},{id:"cpu-ryzen7-7700x",type:"cpu",name:"AMD Ryzen 7 7700X",brand:"AMD",price:310,level:6,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.5 GHz",power:105,score:8800}},{id:"cpu-i7-14700k",type:"cpu",name:"Intel Core i7-14700K",brand:"Intel",price:380,level:7,specs:{socket:"LGA1700",cores:"20 Cores / 28 Threads",speed:"3.4 GHz",power:125,score:9900}},{id:"cpu-i9-13900k",type:"cpu",name:"Intel Core i9-13900K",brand:"Intel",price:550,level:8,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.0 GHz",power:150,score:11500}},{id:"cpu-ryzen7-7800x3d",type:"cpu",name:"AMD Ryzen 7 7800X3D",brand:"AMD",price:390,level:8,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.2 GHz",power:120,score:10800}},{id:"cpu-i9-14900ks",type:"cpu",name:"Intel Core i9-14900KS",brand:"Intel",price:690,level:9,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.2 GHz",power:150,score:12800}},{id:"cpu-ryzen9-7950x",type:"cpu",name:"AMD Ryzen 9 7950X",brand:"AMD",price:520,level:9,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.5 GHz",power:170,score:12400}},{id:"cpu-ryzen9-9950x",type:"cpu",name:"AMD Ryzen 9 9950X",brand:"AMD",price:640,level:10,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.3 GHz",power:170,score:14200}},{id:"gpu-rx580",type:"gpu",name:"AMD Radeon RX 580",brand:"AMD",price:90,level:1,specs:{vram:"8 GB GDDR5",speed:"1340 MHz",power:185,score:2200}},{id:"gpu-gtx1650",type:"gpu",name:"NVIDIA GeForce GTX 1650",brand:"NVIDIA",price:110,level:1,specs:{vram:"4 GB GDDR5",speed:"1485 MHz",power:75,score:1800}},{id:"gpu-rtx3050",type:"gpu",name:"NVIDIA GeForce RTX 3050",brand:"NVIDIA",price:180,level:2,specs:{vram:"8 GB GDDR6",speed:"1777 MHz",power:130,score:3400}},{id:"gpu-rtx3060",type:"gpu",name:"NVIDIA GeForce RTX 3060",brand:"NVIDIA",price:290,level:3,specs:{vram:"12 GB GDDR6",speed:"1777 MHz",power:170,score:5100}},{id:"gpu-rx6600xt",type:"gpu",name:"AMD Radeon RX 6600 XT",brand:"AMD",price:260,level:3,specs:{vram:"8 GB GDDR6",speed:"2589 MHz",power:160,score:4800}},{id:"gpu-rx6700xt",type:"gpu",name:"AMD Radeon RX 6700 XT",brand:"AMD",price:340,level:4,specs:{vram:"12 GB GDDR6",speed:"2424 MHz",power:230,score:6800}},{id:"gpu-rtx4060ti",type:"gpu",name:"NVIDIA GeForce RTX 4060 Ti",brand:"NVIDIA",price:399,level:5,specs:{vram:"8 GB GDDR6",speed:"2535 MHz",power:160,score:7400}},{id:"gpu-rtx3080",type:"gpu",name:"NVIDIA GeForce RTX 3080",brand:"NVIDIA",price:650,level:6,specs:{vram:"10 GB GDDR6X",speed:"1710 MHz",power:320,score:9200}},{id:"gpu-rx6800xt",type:"gpu",name:"AMD Radeon RX 6800 XT",brand:"AMD",price:500,level:6,specs:{vram:"16 GB GDDR6",speed:"2250 MHz",power:300,score:8800}},{id:"gpu-rtx4070super",type:"gpu",name:"NVIDIA GeForce RTX 4070 Super",brand:"NVIDIA",price:599,level:7,specs:{vram:"12 GB GDDR6X",speed:"2475 MHz",power:220,score:11800}},{id:"gpu-rx7800xt",type:"gpu",name:"AMD Radeon RX 7800 XT",brand:"AMD",price:510,level:7,specs:{vram:"16 GB GDDR6",speed:"2124 MHz",power:263,score:10400}},{id:"gpu-rtx4070ti",type:"gpu",name:"NVIDIA GeForce RTX 4070 Ti",brand:"NVIDIA",price:790,level:8,specs:{vram:"12 GB GDDR6X",speed:"2610 MHz",power:285,score:12500}},{id:"gpu-rtx4080super",type:"gpu",name:"NVIDIA GeForce RTX 4080 Super",brand:"NVIDIA",price:999,level:8,specs:{vram:"16 GB GDDR6X",speed:"2550 MHz",power:320,score:16500}},{id:"gpu-rx7900xtx",type:"gpu",name:"AMD Radeon RX 7900 XTX",brand:"AMD",price:950,level:9,specs:{vram:"24 GB GDDR6",speed:"2500 MHz",power:355,score:15e3}},{id:"gpu-rtx4090",type:"gpu",name:"NVIDIA GeForce RTX 4090",brand:"NVIDIA",price:1599,level:10,specs:{vram:"24 GB GDDR6X",speed:"2520 MHz",power:450,score:22e3}},{id:"gpu-rtx5090",type:"gpu",name:"NVIDIA GeForce RTX 5090 Black",brand:"NVIDIA",price:1999,level:10,specs:{vram:"32 GB GDDR7",speed:"2650 MHz",power:550,score:28500}},{id:"mb-prime-h410",type:"motherboard",name:"ASUS Prime H410M-E",brand:"ASUS",price:70,level:1,specs:{socket:"LGA1200",ramType:"DDR4",size:"Micro-ATX"}},{id:"mb-msi-b550",type:"motherboard",name:"MSI B550-A PRO",brand:"MSI",price:110,level:1,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-rog-b550",type:"motherboard",name:"ASUS ROG STRIX B550-F",brand:"ASUS",price:160,level:3,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-mag-b760",type:"motherboard",name:"MSI MAG B760 TOMAHAWK",brand:"MSI",price:180,level:4,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-aorus-z690",type:"motherboard",name:"Gigabyte Z690 AORUS ELITE",brand:"Gigabyte",price:220,level:5,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-b650-gaming",type:"motherboard",name:"Gigabyte B650 GAMING X AX",brand:"Gigabyte",price:190,level:5,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"mb-rog-z790",type:"motherboard",name:"ASUS ROG MAXIMUS Z790 HERO",brand:"ASUS",price:550,level:8,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-asus-x670",type:"motherboard",name:"ASUS ROG Crosshair X670E Hero",brand:"ASUS",price:480,level:8,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"ram-crucial-8-ddr4",type:"ram",name:"Crucial Basics 8GB DDR4",brand:"Crucial",price:20,level:1,specs:{ramType:"DDR4",capacity:"8 GB",speed:"2666 MHz",score:500}},{id:"ram-corsair-16-ddr4",type:"ram",name:"Corsair Vengeance LPX 16GB (2x8)",brand:"Corsair",price:45,level:1,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:1100}},{id:"ram-crucial-16-single-ddr4",type:"ram",name:"Crucial Basics 16GB DDR4",brand:"Crucial",price:35,level:2,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:950}},{id:"ram-corsair-rgb-32-ddr4",type:"ram",name:"Corsair Vengeance RGB 32GB (2x16)",brand:"Corsair",price:80,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2200}},{id:"ram-gskill-32-ddr4",type:"ram",name:"G.Skill Ripjaws V 32GB (2x16)",brand:"G.Skill",price:85,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2400}},{id:"ram-kingston-32-ddr5",type:"ram",name:"Kingston FURY Beast 32GB (2x16)",brand:"Kingston",price:120,level:4,specs:{ramType:"DDR5",capacity:"32 GB",speed:"5600 MHz",score:3100}},{id:"ram-gskill-rgb-32-ddr5",type:"ram",name:"G.Skill Trident Z5 RGB 32GB (2x16)",brand:"G.Skill",price:140,level:5,specs:{ramType:"DDR5",capacity:"32 GB",speed:"6000 MHz",score:3600}},{id:"ram-kingston-64-ddr5",type:"ram",name:"Kingston FURY Renegade 64GB (2x32)",brand:"Kingston",price:240,level:7,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6400 MHz",score:5200}},{id:"ram-corsair-64-ddr5",type:"ram",name:"Corsair Dominator Titanium 64GB (2x32)",brand:"Corsair",price:260,level:8,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6000 MHz",score:5800}},{id:"ram-gskill-96-ddr5",type:"ram",name:"G.Skill Trident Z5 Neo 96GB (2x48)",brand:"G.Skill",price:380,level:10,specs:{ramType:"DDR5",capacity:"96 GB",speed:"6400 MHz",score:7200}},{id:"storage-barracuda-1tb",type:"storage",name:"Seagate BarraCuda 1TB HDD",brand:"Seagate",price:45,level:1,specs:{storageType:"HDD",capacity:"1 TB",speed:"150 MB/s",score:200}},{id:"storage-kingston-480gb",type:"storage",name:"Kingston A400 480GB SATA SSD",brand:"Kingston",price:35,level:1,specs:{storageType:"SATA SSD",capacity:"480 GB",speed:"500 MB/s",score:600}},{id:"storage-crucial-1tb-sata",type:"storage",name:"Crucial MX500 1TB SATA SSD",brand:"Crucial",price:65,level:2,specs:{storageType:"SATA SSD",capacity:"1 TB",speed:"560 MB/s",score:1100}},{id:"storage-samsung-1tb",type:"storage",name:"Samsung 970 EVO Plus 1TB NVMe M.2",brand:"Samsung",price:80,level:2,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2200}},{id:"storage-wd-1tb-nvme",type:"storage",name:"WD Blue SN570 1TB NVMe M.2",brand:"Western Digital",price:70,level:3,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2100}},{id:"storage-samsung-990pro-2tb",type:"storage",name:"Samsung 990 PRO 2TB NVMe M.2",brand:"Samsung",price:170,level:6,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"7450 MB/s",score:4800}},{id:"storage-crucial-2tb",type:"storage",name:"Crucial T700 2TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:240,level:7,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"12400 MB/s",score:6500}},{id:"storage-crucial-4tb-pcie5",type:"storage",name:"Crucial T700 4TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:420,level:9,specs:{storageType:"NVMe M.2",capacity:"4 TB",speed:"12400 MB/s",score:8200}},{id:"psu-evga-500",type:"psu",name:"EVGA 500 W1 (500W)",brand:"EVGA",price:40,level:1,specs:{wattage:500,rating:"80+ White"}},{id:"psu-bequiet-600",type:"psu",name:"be quiet! System Power 10 600W",brand:"be quiet!",price:55,level:2,specs:{wattage:600,rating:"80+ Bronze"}},{id:"psu-corsair-650",type:"psu",name:"Corsair CX650M (650W)",brand:"Corsair",price:70,level:2,specs:{wattage:650,rating:"80+ Bronze"}},{id:"psu-msi-750",type:"psu",name:"MSI MAG A750GL (750W)",brand:"MSI",price:90,level:3,specs:{wattage:750,rating:"80+ Gold"}},{id:"psu-seasonic-850",type:"psu",name:"Seasonic Focus GX-850 (850W)",brand:"Seasonic",price:130,level:4,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-corsair-rm850x",type:"psu",name:"Corsair RM850x (850W)",brand:"Corsair",price:140,level:5,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-corsair-rm1000x",type:"psu",name:"Corsair RM1000x (1000W)",brand:"Corsair",price:190,level:7,specs:{wattage:1e3,rating:"80+ Gold"}},{id:"psu-bequiet-1300",type:"psu",name:"be quiet! Dark Power 13 (1300W)",brand:"be quiet!",price:290,level:8,specs:{wattage:1300,rating:"80+ Titanium"}},{id:"psu-rog-thor-1600",type:"psu",name:"ASUS ROG Thor 1600W",brand:"ASUS",price:450,level:10,specs:{wattage:1600,rating:"80+ Titanium"}},{id:"cooler-intel-stock",type:"cooler",name:"Intel Stock Cooler",brand:"Intel",price:5,level:1,specs:{socket:"LGA1200",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-amd-wraith",type:"cooler",name:"AMD Wraith Stealth",brand:"AMD",price:5,level:1,specs:{socket:"AM4",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-bequiet-rock2",type:"cooler",name:"be quiet! Pure Rock 2 Black",brand:"be quiet!",price:40,level:2,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-hyper-212",type:"cooler",name:"Cooler Master Hyper 212 Black",brand:"Cooler Master",price:45,level:2,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-corsair-h100i",type:"cooler",name:"Corsair H100i RGB Elite (240mm AIO)",brand:"Corsair",price:140,level:4,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"250W",style:"Liquid AIO"}},{id:"cooler-noctua-nhd15",type:"cooler",name:"Noctua NH-D15 chromax.black",brand:"Noctua",price:110,level:5,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"220W",style:"Air Cooler"}},{id:"cooler-nzxt-kraken-360",type:"cooler",name:"NZXT Kraken Elite 360",brand:"NZXT",price:220,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"350W",style:"Liquid AIO"}},{id:"cooler-deepcool-lt720",type:"cooler",name:"DeepCool LT720 (360mm AIO)",brand:"DeepCool",price:150,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"300W",style:"Liquid AIO"}},{id:"cooler-rog-ryujin-3",type:"cooler",name:"ASUS ROG Ryujin III 360 ARGB",brand:"ASUS",price:320,level:9,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"380W",style:"Liquid AIO"}},{id:"case-office",type:"case",name:"Generic Office Case Black",brand:"Generic",price:30,level:1,specs:{size:"ATX / Micro-ATX",airflow:"Faible"}},{id:"case-nzxt-h5",type:"case",name:"NZXT H5 Flow TG Black",brand:"NZXT",price:90,level:2,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-corsair-4000d",type:"case",name:"Corsair 4000D Airflow Black",brand:"Corsair",price:100,level:3,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-bequiet-500dx",type:"case",name:"be quiet! Pure Base 500DX",brand:"be quiet!",price:115,level:4,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-lianli-o11",type:"case",name:"Lian Li O11 Dynamic Clear",brand:"Lian Li",price:140,level:4,specs:{size:"ATX",airflow:"Très Bon"}},{id:"case-fractal-north",type:"case",name:"Fractal Design North Charcoal",brand:"Fractal Design",price:160,level:6,specs:{size:"ATX",airflow:"Excellent"}},{id:"case-phanteks-nv7",type:"case",name:"Phanteks NV7 Matte White",brand:"Phanteks",price:210,level:7,specs:{size:"ATX",airflow:"Excellent"}},{id:"case-rog-hyperion",type:"case",name:"ASUS ROG Hyperion GR701",brand:"ASUS",price:420,level:9,specs:{size:"ATX",airflow:"Excellent"}}];function b(e){return ee.find(t=>t.id===e)||null}function se(e){if(!e)return{ram:1,nvme:0,sata:1};switch(e){case"mb-prime-h410":return{ram:2,nvme:1,sata:2};case"mb-msi-b550":case"mb-rog-b550":return{ram:4,nvme:2,sata:4};case"mb-mag-b760":case"mb-b650-gaming":return{ram:4,nvme:3,sata:4};case"mb-aorus-z690":return{ram:4,nvme:3,sata:4};case"mb-rog-z790":case"mb-asus-x670":return{ram:4,nvme:4,sata:6};default:return{ram:2,nvme:1,sata:2}}}const qe=["Jean-Michel Tech","Sophie.Gamer","Kévin Du 93","Thomas.Dev","Lucas.Stream","Emma.Designer","Alexandre.V","Mélanie Pro","Léa.Youtuber","Julien.Hardcore"],ve=["Mon PC s'éteint tout seul !","Besoin d'un diagnostic en urgence","Écran bleu à répétition...","Mon PC refuse de démarrer !","Bruit bizarre venant de l'alimentation"],ye=["Besoin de plus de puissance pour Cyberpunk","Mon PC rame sur Photoshop !","Besoin de plus de mémoire vive","Passer à {targetGb} Go de RAM"],xe=["Besoin de plus de stockage pour mes vidéos","Mon disque dur est plein !","Besoin d'un SSD plus rapide"],we=["Mon ordinateur est extrêmement lent !","Des pubs bizarres s'affichent partout","Aide ! Je crois que j'ai été piraté","Nettoyage de printemps nécessaire","PC infecté, SOS !"],ke=["Mon PC doit tourner plus vite !","Je veux battre le score de mon frère","Aide pour optimiser mon score 3DMark","Config Overclocking stable demandée","Besoin de performances maximales"];function $e(e){return e[Math.floor(Math.random()*e.length)]}function Pe(e,t=1){const s=[];for(let o=0;o<t;o++){const i="job-"+B(),c=$e(qe);let l=["virus","upgrade"];e>=2&&l.push("repair"),e>=3&&l.push("benchmark"),e>=4&&l.push("build");const d=$e(l);let u="",p="",y=0,g=0,v=0,x=null,m=[],h=null,P=null,M=null;const $=ze(d,e);if(d==="virus"){const A=Math.floor(Math.random()*we.length);u=we[A],p=`Bonjour,

Depuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.

Pouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?

Merci,
${c}`,y=0,g=120+e*20,v=80,$.isClean=!1,m=[{id:"clean_os",desc:"Supprimer tous les virus",done:!1},{id:"boot_os",desc:"S'assurer que le PC démarre sous l'OS",done:!1}],x=$,h=`jobs.virus.subject_${A}`,P="jobs.virus.text",M={clientName:c}}else if(d==="upgrade"){if((Math.random()>.5?"ram":"storage")==="ram"){const w=$.ram&&b($.ram.partId).specs.capacity.includes("8")?16:32,k=Math.floor(Math.random()*ye.length);u=ye[k].replace("{targetGb}",w),p=`Salut,

Je joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.

Pourriez-vous mettre à niveau ma RAM pour atteindre au moins ${w} Go ?

Cordialement,
${c}`,y=w===16?80:160,g=150+e*15,v=100,m=[{id:"ram_capacity",desc:`Avoir au moins ${w} Go de RAM`,target:w,done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}],h=`jobs.upgrade.ram.subject_${k}`,P="jobs.upgrade.ram.text",M={clientName:c,targetGb:w}}else{const w=Math.floor(Math.random()*xe.length);u=xe[w],p=`Bonjour,

Mon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.

Merci d'avance,
${c}`,y=120,g=140+e*15,v=100,$.storage={partId:"storage-barracuda-1tb",condition:"used"},$.bootedOnce=!1,m=[{id:"fast_ssd",desc:"Installer un SSD M.2 NVMe d'au moins 1 To",done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}],h=`jobs.upgrade.storage.subject_${w}`,P="jobs.upgrade.storage.text",M={clientName:c}}x=$}else if(d==="repair"){const A=Math.floor(Math.random()*ve.length);if(u=ve[A],(Math.random()>.5?"cpu":"gpu")==="cpu"){p=`Bonjour,

Mon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.

Pourriez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?

Merci,
${c}`,$.cpu&&($.cpu.condition="broken"),$.bootedOnce=!1;const k=b($.cpu.partId);y=k.price+30,g=200+e*30,v=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne dans le PC",done:!1},{id:"cpu_tier",desc:`Installer un processeur équivalent ou supérieur (${k.name})`,target:k.specs.score,targetName:k.name,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}],h=`jobs.repair.subject_${A}`,P="jobs.repair.cpu.text",M={clientName:c}}else{p=`Bonjour,

Je n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.

Pourriez-vous remplacer ma carte graphique défectueuse ?

Bien à vous,
${c}`,$.gpu&&($.gpu.condition="broken"),$.bootedOnce=!1;const k=b($.gpu.partId);y=k.price+40,g=220+e*30,v=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne",done:!1},{id:"gpu_tier",desc:`Installer une carte graphique équivalente ou supérieure (${k.name})`,target:k.specs.score,targetName:k.name,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}],h=`jobs.repair.subject_${A}`,P="jobs.repair.gpu.text",M={clientName:c}}x=$}else if(d==="benchmark"){const A=Math.floor(Math.random()*ke.length);u=ke[A];const w=$.score||3e3,k=Math.round(w*1.25);p=`Salut,

J'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de ${k} sur l'outil de test.

Vous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !

Merci,
${c}`,y=300,g=280+e*40,v=200,m=[{id:"benchmark_score",desc:`Atteindre un score de benchmark d'au moins ${k}`,target:k,done:!1},{id:"boot_os",desc:"Le PC doit démarrer sous l'OS",done:!1}],h=`jobs.benchmark.subject_${A}`,P="jobs.benchmark.text",M={clientName:c,targetScore:k},x=$}else if(d==="build"){u="Création d'un PC sur mesure de toutes pièces";const A=e*1800+1e3;y=e*250+500,g=350+e*50,v=300,p=`Bonjour,

Je pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de ${y}$.

J'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins ${A} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !

Cordialement,
${c}`,m=[{id:"has_all_parts",desc:"Installer tous les composants obligatoires",done:!1},{id:"benchmark_score",desc:`Atteindre un score de benchmark de ${A}`,target:A,done:!1},{id:"pc_budget",desc:`Ne pas dépasser le budget de pièces de ${y}$`,target:y,done:!1},{id:"boot_os",desc:"Le PC démarre et l'OS est installé",done:!1}],x={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!1,bootedOnce:!1},h="jobs.build.subject",P="jobs.build.text",M={clientName:c,budget:y,targetScore:A}}n.currentEvent&&n.currentEvent.id==="virus_wave"&&d==="virus"&&(g*=2,v*=2);const I=e>=2&&Math.random()<.25,E=I?Math.round(g*1.8):g,S=I?Math.round(v*1.8):v;s.push({id:i,clientName:c,subject:I?"🚨 [URGENT 24H] "+u:u,text:p,type:d,status:"available",requirements:m,budget:y,reward:E,xpReward:S,pc:x,isUrgent:I,expiryDay:I?n?n.day:1:null,subjectKey:h,textKey:P,textVars:M})}return s}function ze(e,t){let s="mb-msi-b550",o="cpu-ryzen5-5600x",i="cooler-hyper-212",c="ram-corsair-16-ddr4",l="storage-kingston-480gb",d="gpu-rtx3060",u="psu-corsair-650",p="case-nzxt-h5";return t===1?(s="mb-prime-h410",o="cpu-i3-10100f",i="cooler-intel-stock",c="ram-crucial-8-ddr4",l="storage-barracuda-1tb",d="gpu-gtx1650",u="psu-evga-500",p="case-office"):t>=5&&t<8?(s="mb-aorus-z690",o="cpu-i7-12700k",i="cooler-corsair-h100i",c="ram-kingston-32-ddr5",l="storage-samsung-1tb",d="gpu-rtx3080",u="psu-seasonic-850",p="case-lianli-o11"):t>=8&&(s="mb-asus-x670",o="cpu-ryzen9-7950x",i="cooler-nzxt-kraken-360",c="ram-corsair-64-ddr5",l="storage-crucial-2tb",d="gpu-rtx4090",u="psu-bequiet-1300",p="case-fractal-north"),{case:{partId:p,condition:"used"},motherboard:{partId:s,condition:"used"},cpu:{partId:o,condition:"used"},cooler:{partId:i,condition:"used"},ram:{partId:c,condition:"used"},gpu:{partId:d,condition:"used"},storage:{partId:l,condition:"used"},psu:{partId:u,condition:"used"},thermalPasteApplied:!0,cablesConnected:!0,hasOs:!0,isClean:!0,score:ae(o,d,c),diagnosed:!0,bootedOnce:!0}}function ae(e,t,s,o=1,i=1,c=null){if(!e||!t||!s)return 0;const l=b(e),d=b(t),u=b(s);if(!l||!d||!u)return 0;const p=l.specs.score*o,y=d.specs.score*i;let g=u.specs.score;if(c&&c.length>0){const x=c.filter(m=>m!==null);if(x.length>0){const m=x.map(M=>{var $;return(($=b(M.partId))==null?void 0:$.specs.score)||0}),h=Math.max(...m),P=1+(x.length-1)*.15;g=Math.round(h*P)}}return Math.round(y*.7+p*.2+g*.1)}function Re(e){const t=e.pc;let s=!0;return{requirements:e.requirements.map(i=>{let c=!1;switch(i.id){case"boot_os":c=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu&&t.cablesConnected&&t.thermalPasteApplied&&t.hasOs&&t.bootedOnce&&!de(t);break;case"clean_os":c=t&&t.isClean&&t.hasOs;break;case"ram_capacity":if(t){let d=0;const u=t.rams?t.rams.filter(y=>y!==null):t.ram?[t.ram]:[],p=new Set;u.forEach(y=>{if(y.kitId){if(p.has(y.kitId))return;p.add(y.kitId)}const g=b(y.partId);g&&(d+=parseInt(g.specs.capacity.replace("GB","").replace("Go","").trim()))}),c=d>=i.target}break;case"fast_ssd":t&&(c=(t.storages?t.storages.filter(u=>u!==null):t.storage?[t.storage]:[]).some(u=>{const p=b(u.partId);if(p){const y=p.specs.storageType==="NVMe M.2",g=parseInt(p.specs.capacity.replace("TB","").replace("To","").trim())||.5;return y&&(g>=1||p.id.includes("1tb")||p.id.includes("2tb"))}return!1}));break;case"no_broken_parts":c=t&&!de(t);break;case"cpu_tier":if(t&&t.cpu&&t.cpu.condition!=="broken"){const d=b(t.cpu.partId);c=d&&d.specs.score>=i.target}break;case"gpu_tier":if(t&&t.gpu&&t.gpu.condition!=="broken"){const d=b(t.gpu.partId);c=d&&d.specs.score>=i.target}break;case"benchmark_score":c=t&&t.score>=i.target&&t.hasOs&&!de(t);break;case"has_all_parts":c=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu;break;case"pc_budget":let l=0;Object.keys(t).forEach(d=>{if(t[d]&&t[d].partId&&t[d].condition!=="used"){const u=b(t[d].partId);u&&(l+=u.price)}}),c=l<=i.target;break}return c||(s=!1),{...i,done:c}}),allDone:s}}function de(e){if(!e)return!0;let t=!1;return Object.keys(e).forEach(s=>{e[s]&&e[s].condition==="broken"&&(t=!0)}),t}const ge={money:1500,level:1,xp:0,day:1,inventory:[],activeJobs:[],workbenches:[{id:1,pc:null,unlocked:!0},{id:2,pc:null,unlocked:!1,cost:800},{id:3,pc:null,unlocked:!1,cost:2e3}],selectedWorkbenchId:1,deliveryQueue:[],bargainBin:[],customPcs:[],completedJobsCount:0,currentEvent:null,liquidMetalCount:0,hasThermalProbe:!1,hasFastUsb:!1,showroomPcs:[],hasSeenIntro:!1,language:"fr"},Ce=[{id:"silicon_shortage",title:"🔥 Pénurie Mondiale de Silicium",text:"Des usines à Taiwan subissent des coupures d'électricité massives. Le prix d'achat de toutes les cartes graphiques (GPU) et processeurs (CPU) augmente de 40% aujourd'hui !",modifiers:{cpu:1.4,gpu:1.4}},{id:"memory_crisis",title:"⚡ Crise des Puces de Mémoire",text:"Un incendie s'est déclaré chez un important fabricant de plaquettes de silicium. Le prix de la mémoire RAM et des disques de stockage (SSD/HDD) augmente de 50% aujourd'hui !",modifiers:{ram:1.5,storage:1.5}},{id:"black_friday",title:"🛍️ Soldes de Folie (Black Friday)",text:"C'est le Black Friday ! Profitez d'une réduction de 15% sur toutes les pièces détachées de la boutique, et la livraison Express passe de 50$ à seulement 25$ !",modifiers:{global_discount:.85,express_shipping:25}},{id:"virus_wave",title:"🛡️ Cyber-Attaque Mondiale",text:"Un ransomware redoutable baptisé 'TycoonCrypt' infecte des milliers de PC. Les récompenses de Cash et d'XP pour toutes les missions de désinfection de virus sont DOUBLÉES aujourd'hui !",modifiers:{virus_reward:2}}];function Q(e){if(!e)return 0;let t=e.price;const s=n.currentEvent;s&&s.modifiers&&(s.modifiers[e.type]&&(t*=s.modifiers[e.type]),s.modifiers.global_discount&&(t*=s.modifiers.global_discount));const o=(n.showroomPcs||[]).reduce((c,l)=>l&&l.pc?c+(l.pc.score||0):c,0),i=Math.min(Math.floor(o/2500),20);return i>0&&(t*=1-i/100),Math.round(t)}function je(){if(Math.random()>.4)n.currentEvent=null;else{const e=Ce[Math.floor(Math.random()*Ce.length)];n.currentEvent=JSON.parse(JSON.stringify(e))}C()}let n={...ge};function B(){return Math.random().toString(36).substring(2,9)+Date.now().toString(36)}function me(e){return e===1?100:Math.round(100*Math.pow(1.8,e-1))}function C(){try{localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(n))}catch(e){console.error("Impossible de sauvegarder la partie :",e)}}function Ne(){try{const e=localStorage.getItem("pc_architect_tycoon_save");if(e)return n=JSON.parse(e),n={...ge,...n},!0}catch(e){console.error("Erreur lors du chargement :",e)}return _e(),!1}function _e(){n=JSON.parse(JSON.stringify(ge)),n.inventory.push({id:B(),partId:"storage-kingston-480gb",condition:"new",pricePaid:35},{id:B(),partId:"ram-crucial-8-ddr4",condition:"new",pricePaid:20},{id:B(),partId:"cooler-intel-stock",condition:"new",pricePaid:5}),n.activeJobs=Pe(1,3),Ae(),C()}function Ge(e){n.xp+=e;let t=me(n.level),s=!1;for(;n.xp>=t;)n.xp-=t,n.level+=1,t=me(n.level),s=!0;return C(),{levelUp:s,currentLevel:n.level}}function Oe(e){n.money+=e,C()}function He(e){return n.money>=e?(n.money-=e,C(),!0):!1}function Fe(e,t="standard"){let s=0;e.forEach(i=>{const c=b(i);c&&(s+=Q(c))});let o=t==="express"?50:10;return n.currentEvent&&n.currentEvent.modifiers&&n.currentEvent.modifiers.express_shipping!==void 0&&t==="express"&&(o=n.currentEvent.modifiers.express_shipping),s+=o,He(s)?(e.forEach(i=>{const c=b(i);if(!c)return;const l=Q(c);t==="express"?n.inventory.push({id:B(),partId:i,condition:"new",pricePaid:l}):n.deliveryQueue.push({partId:i,condition:"new",deliveryDay:n.day+1,pricePaid:l})}),C(),{success:!0,cost:s}):{success:!1,cost:s}}function Ae(){const e=["Gaming PC pas cher","Bête de Bureautique","Ancienne Station de travail","PC Gamer HS","PC Ne Démarre Plus"],t=["case-office","case-nzxt-h5"],s=["mb-prime-h410","mb-msi-b550"],o=["cpu-i3-10100f","cpu-ryzen3-3100","cpu-i5-11400f","cpu-ryzen5-5600x"],i=["cooler-intel-stock","cooler-amd-wraith","cooler-hyper-212"],c=["gpu-gtx1650","gpu-rx580","gpu-rtx3060"],l=["ram-crucial-8-ddr4","ram-corsair-16-ddr4"],d=["storage-barracuda-1tb","storage-kingston-480gb"],u=["psu-evga-500","psu-corsair-650"];n.bargainBin=[];for(let p=0;p<2;p++){const y=s[Math.floor(Math.random()*s.length)],g=b(y),v=o.filter(k=>b(k).specs.socket===g.specs.socket),x=v[Math.floor(Math.random()*v.length)]||"cpu-ryzen3-3100",m=i[Math.floor(Math.random()*i.length)],h=c[Math.floor(Math.random()*c.length)],P=l[Math.floor(Math.random()*l.length)],M=d[Math.floor(Math.random()*d.length)],$=u[Math.floor(Math.random()*u.length)],I=t[Math.floor(Math.random()*t.length)],E=Math.floor(Math.random()*4),S={case:{partId:I,condition:"used"},motherboard:{partId:y,condition:"used"},cpu:E===0?{partId:x,condition:"broken"}:{partId:x,condition:"used"},cooler:{partId:m,condition:"used"},ram:E===3?null:{partId:P,condition:"used"},gpu:E===1?{partId:h,condition:"broken"}:{partId:h,condition:"used"},storage:{partId:M,condition:"used"},psu:E===2?{partId:$,condition:"broken"}:{partId:$,condition:"used"},thermalPasteApplied:Math.random()>.3,cablesConnected:E!==3,hasOs:E>1,isClean:Math.random()>.5,score:0,diagnosed:!1};let A=0;Object.keys(S).forEach(k=>{if(S[k]&&S[k].partId){const D=b(S[k].partId);D&&(S[k].condition==="used"&&(A+=D.price*.6),S[k].condition==="broken"&&(A+=D.price*.1))}});const w=Math.round(A*.8);n.bargainBin.push({id:"flip-"+B(),name:e[Math.floor(Math.random()*e.length)],pc:S,price:w,description:"Ordinateur d'occasion. État inconnu. Peut nécessiter des réparations."})}}function Ue(){const e=n.activeJobs.filter(i=>i.isUrgent&&i.status!=="completed"&&i.expiryDay<n.day);e.forEach(i=>{n.workbenches.forEach(c=>{c.pc&&c.pc.orderId===i.id&&(c.pc=null)})}),n.activeJobs=n.activeJobs.filter(i=>!i.isUrgent||i.status==="completed"||i.expiryDay>=n.day),n.day+=1;const t=n.deliveryQueue.filter(i=>i.deliveryDay<=n.day);n.deliveryQueue=n.deliveryQueue.filter(i=>i.deliveryDay>n.day),t.forEach(i=>{n.inventory.push({id:B(),partId:i.partId,condition:i.condition,pricePaid:i.pricePaid!==void 0?i.pricePaid:b(i.partId).price})}),je();const s=Math.floor(Math.random()*2)+1,o=Pe(n.level,s);if(n.activeJobs.push(...o),n.activeJobs.filter(i=>i.status==="available").length>6){const i=n.activeJobs.filter(l=>l.status==="available"),c=i.length-6;for(let l=0;l<c;l++){const d=n.activeJobs.indexOf(i[l]);n.activeJobs.splice(d,1)}}return Ae(),C(),{deliveriesCount:t.length,newJobsCount:o.length,expiredCount:e.length}}function R(){n.activeJobs.forEach(e=>{if(e.status==="active"||e.status==="ready"){const t=n.workbenches.find(o=>o.pc&&o.pc.orderId===e.id);t&&(e.pc=t.pc);const s=Re(e);e.requirements=s.requirements,s.allDone?e.status="ready":e.status="active"}}),C()}const K={fr:{"nav.emails":"Emails & Commandes","nav.workbench":"Établi de Montage","nav.shop":"Boutique de Pièces","nav.inventory":"Mon Inventaire","nav.bargainbin":"BargainBin (Occasions)","nav.showroom":"Showroom Prestige","nav.help":"📖 Scénario & Aide","nav.export":"📤 Exporter","nav.import":"📥 Importer","nav.reset":"⚠️ Réinitialiser","hud.level":"Niveau","hud.budget":"Budget","hud.day":"Jour","hud.endDay":"Terminer la journée","hud.endDaySub":"Arrivée des livraisons","toast.endDay":"Journée terminée !","toast.deliveries":"Colis de pièces livrés.","toast.newJobs":"Nouveaux e-mails de clients reçus.","toast.flipSold":"Flip vendu","toast.cancelledJobs":"contrat(s) urgent(s) annulé(s) par le client (délai dépassé) !","toast.welcome":"Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.","toast.saveExported":"Sauvegarde exportée avec succès !","toast.saveImported":"Sauvegarde importée avec succès ! Rechargement...","toast.saveError":"Erreur : Le fichier de sauvegarde est invalide !","toast.gameReset":"Partie réinitialisée ! Rechargement...","toast.fundsInsufficient":"Fonds insuffisants !","toast.orderPlaced":"Commande passée ! Vos pièces arriveront demain matin.","toast.expressDelivered":"Commande livrée instantanément par Express !","toast.liquidMetalApplied":"Métal Liquide Premium appliqué avec succès sur le CPU !","toast.metalLiquidCountError":"Plus de seringues de Métal Liquide en stock !","toast.partInstalled":"installé !","toast.partUninstalled":"Composant démonté et replacé en inventaire.","toast.partSold":"Pièce revendue pour","toast.flipBought":"PC acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.","toast.flipSoldSuccess":"Félicitations ! PC vendu à","toast.flipWalkAway":"Offre déclinée. L'acheteur s'en va.","toast.counterAccept":"L'acheteur accepte immédiatement cette contre-proposition !","toast.counterReject":"L'acheteur a refusé votre contre-proposition et préfère chercher ailleurs.","toast.counterOffended":"L'acheteur s'est senti offensé par votre proposition déraisonnable et a quitté la table des négociations !","toast.counterSuccess":"Négociation réussie !","toast.enterValidPrice":"Veuillez saisir un prix valide !","toast.enterPriceName":"Veuillez donner un nom et un prix valide !","toast.scrapSuccess":"Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !","toast.pcExposed":"placé en vitrine de prestige ! Vos remises en magasin augmentent !","toast.pcRetrieved":"retiré du showroom et renvoyé dans votre inventaire.","toast.casePlaced":"Boîtier vide placé sur l'établi !","toast.pcImported":"PC d'occasion importé sur l'établi !","emails.inbox":"Boîte de Réception","emails.empty":"Sélectionnez un e-mail pour lire les détails du projet.","emails.from":"De :","emails.partBudget":"Budget pièces :","emails.objectives":"Objectifs du projet","emails.reward":"Récompense","emails.experience":"Expérience","emails.partsCost":"Dépenses Pièces","emails.assignWorkbench":"Attribuer ce projet à un établi libre :","emails.reassignWorkbench":"Ré-attribuer et reprendre ce projet sur un établi libre :","emails.rejectJob":"Refuser la mission","emails.putHold":"Ranger le PC et mettre la mission en attente (Libérer l'établi)","emails.deliverPC":"Livrer le PC et encaisser la facture","emails.activeText":"Le PC est en cours de montage sur l'Établi. Remplissez tous les objectifs à l'établi pour facturer le client.","workbench.empty":"Établi vide","workbench.emptySub":"Sélectionnez une commande dans vos e-mails ou importez un ordinateur d'occasion pour commencer.","workbench.choosetab":"Choisir mon établi","workbench.currentConfig":"Configuration Actuelle","workbench.part.case":"Boîtier","workbench.part.motherboard":"Carte Mère","workbench.part.cpu":"Processeur","workbench.part.cooler":"Ventirad","workbench.part.ram":"Mémoire RAM","workbench.part.gpu":"Graphismes","workbench.part.storage":"Stockage","workbench.part.psu":"Alimentation","workbench.status":"Statut","workbench.status.on":"En marche","workbench.status.off":"Éteint","workbench.status.missing":"Manquant","workbench.status.missingF":"Manquante","workbench.specs.wattage":"Consommation estimée :","workbench.specs.paste":"Pâte thermique :","workbench.specs.paste.standard":"Standard ✓","workbench.specs.paste.liquid_metal":"Métal Liquide ✓","workbench.specs.paste.missing":"Manquante ✗","workbench.specs.cables":"Câbles d'alimentation :","workbench.specs.cables.on":"Branchés ✓","workbench.specs.cables.off":"Débranchés ✗","workbench.specs.cost":"Coût total des pièces :","workbench.btn.paste.apply":"Appliquer pâte thermique","workbench.btn.paste.clean":"Nettoyer la pâte thermique","workbench.btn.cables.connect":"Brancher les câbles","workbench.btn.cables.disconnect":"Débrancher les câbles","workbench.btn.power.on":"Allumer le PC (Power ON)","workbench.btn.power.off":"Éteindre le PC (Power OFF)","workbench.btn.scrap":"Démonter le PC (Récupérer les pièces)","workbench.btn.sell":"Mettre en vente sur BargainBin","workbench.btn.putHold":"📦 Ranger le PC (Mettre en attente)","workbench.flip.title":"PC Libre (Flip BargainBin)","workbench.flip.name":"Nom de l'ordinateur","workbench.flip.price":"Prix de vente ($)","workbench.import.title":"Importer un PC d'occasion","workbench.import.scratch":"Commencer un montage de zéro","workbench.import.empty":"Aucun PC d'occasion en stock.","workbench.import.action":"Placer sur l'Établi","workbench.pasteModal.title":"Choix de la pâte thermique","workbench.pasteModal.sub":"Sélectionnez le type de pâte thermique à appliquer sur le processeur :","workbench.pasteModal.std":"Pâte Thermique Standard (Gratuit, Illimité)","workbench.pasteModal.lm":"Métal Liquide Premium (Stock : {count} seringues)","boot.error.no_psu":"Boot échoué : Aucune alimentation installée !","boot.error.no_mb":"Boot échoué : Aucune carte mère installée !","boot.error.no_cpu":"Boot échoué : Aucun processeur installé !","boot.error.no_cooler":"Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !","boot.error.no_ram":"Boot échoué : Aucune mémoire vive (RAM) !","boot.error.no_gpu":"Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !","boot.error.no_storage":"Boot échoué : Aucun disque de stockage détecté !","boot.error.no_cables":"Boot échoué : Les câbles d'alimentation ne sont pas branchés !","boot.error.low_psu":"Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.","boot.error.broken_psu":"Boot échoué : L'alimentation est défectueuse. Impossible d'allumer la machine !","boot.error.broken_mb":"Boot échoué : La carte mère est défectueuse (Court-circuit sur le PCB) !","boot.error.broken_cpu":"Boot échoué : Écran noir. Le processeur (CPU) est défectueux ou grillé !","boot.error.broken_ram":"Boot échoué : Erreur de mémoire vive (RAM). Une ou plusieurs barrettes sont défectueuses !","boot.error.broken_gpu":"Boot échoué : Aucun signal d'affichage. La carte graphique (GPU) est défectueuse !","boot.error.broken_storage":"Boot échoué : Erreur de lecture de disque. Le périphérique de stockage est défectueux !","boot.success":"Boot en cours... Signal vidéo détecté !","shop.title.cpu":"Processeurs (Intel & AMD)","shop.title.motherboard":"Cartes Mères","shop.title.gpu":"Cartes Graphiques (NVIDIA RTX & AMD RX)","shop.title.ram":"Mémoire Vive (DDR4 / DDR5)","shop.title.storage":"Disques Durs & SSD (NVMe / SATA)","shop.title.psu":"Alimentations Énergétiques","shop.title.cooler":"Ventirads & Watercoolings AIO","shop.title.case":"Boîtiers PC Desktop","shop.title.upgrades":"Agrandir mon Magasin","shop.tab.hardware":"Composants","shop.tab.upgrades":"Améliorations","shop.upgrades.title":"Atelier & Établis","shop.cart.title":"Panier d'achat","shop.cart.empty":"Votre panier est vide","shop.cart.subtotal":"Sous-total :","shop.cart.shipping":"Livraison :","shop.cart.shipping.std":"Standard (+10$, 1 Jour)","shop.cart.shipping.exp":"Express (+50$, Instantané)","shop.cart.btnCheckout":"Passer la commande","shop.btnBuy":"Ajouter","shop.btnLocked":"Niveau","inventory.title":"Mon Stock de Pièces Detachées","inventory.cat.all":"Tout","inventory.empty":"Aucune pièce disponible dans cette catégorie.","inventory.cond.new":"Neuf","inventory.cond.used":"Occasion","inventory.cond.broken":"En Panne","inventory.specs.buy":"Valeur achat :","inventory.specs.sell":"Occase :","inventory.btnSell":"Vendre","bargain.buy.title":"🔥 Offres en cours (Achats)","bargain.sell.title":"📈 Mes PC en Vente (Flips)","bargain.empty":"Aucune offre d'occasion aujourd'hui. Revenez demain !","bargain.noFlips":"Aucun ordinateur mis en vente.<br><small>Montez un PC libre sur un établi et mettez-le en vente pour générer du profit !</small>","bargain.included":"Composants inclus :","bargain.btnBuy":"Acheter pour","bargain.listed":"En vente","bargain.specs.bench":"Benchmark :","bargain.btnCancel":"Retirer de la vente (Récupérer)","bargain.offer.firm":"🟢 OFFRE D'ACHAT FERME","bargain.offer.firmSub":"accepte votre prix et achète le PC pour","bargain.offer.firmBtn":"Confirmer la vente","bargain.offer.negotiation":"🟡 PROPOSITION DE NÉGOCIATION","bargain.offer.negotiationSub":"vous propose","bargain.offer.accept":"Accepter","bargain.offer.counter":"Contre-proposer","bargain.offer.refuse":"Refuser","bargain.offer.counterTitle":"Entrez votre prix ($)","bargain.offer.submit":"Valider","bargain.offer.cancel":"Annuler","bargain.waiting":"En attente d'acheteurs... (Transition de nuit requise)","os.boot.post":"AMERICAN MEGATRENDS BIOS v4.0621","os.boot.cpu":"Processeurs détectés :","os.boot.ram":"Mémoire RAM active :","os.boot.gpu":"Contrôleur Graphique :","os.boot.storage":"Disque de démarrage :","os.boot.psu":"Vérification de l'alimentation... OK","os.boot.memory":"Test de la mémoire... Succès","os.boot.searching":"Recherche du système d'exploitation...","os.boot.no_os":"Aucun système d'exploitation trouvé.","os.boot.no_os_sub":"Insérez la clé USB d'installation pour démarrer le programme d'installation.","os.boot.btn_os_install":"Insérer clé USB (Installer VirtualOS)","os.install.title":"Installation de VirtualOS v4.1","os.install.step0":"Formatage du disque de stockage...","os.install.step1":"Création des partitions NTFS...","os.install.step2":"Copie des fichiers d'installation (12%)...","os.install.step3":"Copie des fichiers d'installation (45%)...","os.install.step4":"Copie des fichiers d'installation (78%)...","os.install.step5":"Configuration des pilotes de périphériques...","os.install.step6":"Finalisation des paramètres du bureau...","os.desktop.sysinfo":"Infos Système","os.desktop.scanner":"Virus Scanner","os.desktop.benchmark":"3D Benchmark","os.desktop.overclock":"Overclocking","os.desktop.shutdown":"Quitter l'OS ✕","os.sysinfo.title":"Informations Système","os.sysinfo.subtitle":"Fiche Technique Matérielle","os.sysinfo.activeFreq":"Fréquence active :","os.sysinfo.temp":"Température CPU :","os.sysinfo.activeGpu":"Fréquence GPU :","os.sysinfo.osVersion":"OS installé : VirtualOS Desktop Edition v4.1 build 2026.","os.scanner.title":"SecuriGuard Virus Scanner","os.scanner.sub":"Scanner de Sécurité Intégré","os.scanner.ready":"Protection résidente active. Prêt pour l'analyse.","os.scanner.btnScan":"Lancer une Analyse Complète","os.scanner.scanning":"Analyse en cours...","os.scanner.step1":"Recherche de logiciels espions...","os.scanner.step2":"Analyse des clés de registre infectées...","os.scanner.step3":"Examen de la mémoire vive active...","os.scanner.alert":"2 Menaces Détectées !","os.scanner.alertSub":"Trojan.Miner.Bitcoin & Adware.PopUpMagic infectent vos registres.","os.scanner.btnClean":"Nettoyer et Désinfecter","os.scanner.cleanSuccess":"Système Sain !","os.scanner.cleanSuccessSub":"Aucun virus, cheval de troie ou logiciel publicitaire détecté.","os.scanner.btnClose":"Fermer","os.bench.title":"3D Benchmark Tool v3.0","os.bench.sub":"Simulateur de Rendu Graphique 3D","os.bench.text":"Ce test va solliciter le processeur et la carte graphique à 100% de leur charge thermique pour mesurer les performances.","os.bench.btnRun":"Lancer le Test Graphique","os.bench.rendering":"Rendu Graphique en cours...","os.bench.step1":"Test CPU : Simulation physique complexe...","os.bench.step2":"Test GPU : Shaders d'illumination globale...","os.bench.step3":"Test final combiné : Calcul des FPS...","os.bench.overheatWarning":"⚠️ ALERTE SURCHAUFFE CPU ({temp}°C) - LIMITE CRITIQUE !","os.bench.report":"Rapport de performances","os.bench.stable":"CPU stable à max {temp}°C.","os.bench.vcore":"Tension VCore :","os.bench.btnAccept":"Accepter","os.oc.title":"Overclock-O-Matic Pro","os.oc.sub":"Optimisation Fréquences","os.oc.cpuMult":"Coefficient Fréquence CPU","os.oc.vcore":"Tension VCore (Alimentation CPU)","os.oc.gpuFreq":"Fréquence GPU Clock","os.oc.warning":"⚠️ <strong>Attention :</strong> L'augmentation de la tension augmente exponentiellement la chaleur dégagée. Un overclock instable provoquera un plantage système (BSOD).","os.bsod.title":"Votre PC virtuel a rencontré un problème et doit redémarrer. Nous collectons simplement quelques informations relatives aux erreurs.","os.bsod.text":"Code d'arrêt système :","os.bsod.sub":"Cliquez n'importe où pour forcer l'extinction et retourner à l'établi.","showroom.title":"✨ Ordinateurs en Vitrine (Prestige Showroom)","showroom.locked":"Emplacement Bloqué","showroom.lockedSub":"Débloqué de manière permanente au Niveau {level}","showroom.empty":"Emplacement Libre n°{num}","showroom.emptySub":"Exposez un ordinateur libre assemblé avec succès pour accroître votre prestige et débloquer des remises en magasin.","showroom.btnExpose":"Exposer un Ordinateur","showroom.active":"En Exposition n°{num}","showroom.btnRetrieve":"Récupérer le PC","showroom.prestige":"Prestige","showroom.status.title":"🏆 Statut de Prestige","showroom.status.scoreLabel":"Score de Prestige Cumulé","showroom.status.milestone":"Progression remise","showroom.status.discount":"Remise Permanente Débloquée","showroom.status.discountSub":"Appliqué automatiquement sur l'achat de tous les composants de la boutique en ligne !","showroom.status.sponsors":"Sponsors Permanents Actifs","showroom.status.noSponsors":"Atteignez 2500 pts de prestige cumulés pour débloquer votre premier sponsor permanent !","showroom.modal.title":"Sélectionner un PC pour la Vitrine {num}","showroom.modal.empty":"Aucun PC éligible trouvé.<br><small>Pour exposer un PC, il doit être entièrement fonctionnel, monté en tant que PC libre (pas pour un contrat client) et avoir effectué au moins un test de benchmark 3D réussi pour enregistrer son score !</small>","showroom.modal.sub":"Sélectionnez le PC que vous souhaitez exposer dans le showroom :","showroom.modal.btnExpose":"Exposer","drawer.title":"Sélectionner un composant :","drawer.empty":"Aucun composant de ce type disponible dans votre inventaire.","drawer.installed":"Composant installé","drawer.uninstall":"Retirer la pièce","drawer.btnInstall":"Installer","drawer.condition":"État :","drawer.stock":"Pièces en stock :","reset.title":"Réinitialiser la partie","reset.text":"Êtes-vous sûr de vouloir réinitialiser complètement votre partie ? Toute votre progression (argent, niveau, inventaire, étables) sera définitivement perdue !","reset.btnYes":"Oui, réinitialiser","reset.btnNo":"Non, annuler","help.title":"🖥️ PC Architect Tycoon - Scénario & Aide","help.scenario.title":"📖 Le Scénario","help.scenario.text":"Vous commencez votre aventure en tant que jeune monteur de PC indépendant dans un modeste atelier cyberpunk. Votre objectif est de développer votre notoriété (Niveau d'XP), de fructifier votre budget, de débloquer de nouveaux composants de pointe et de bâtir l'atelier le plus renommé de la ville !","help.mechanics.title":"🎮 Mécaniques Clés du Jeu","help.mechanics.inbox.title":"📧 Boîte de Réception (Contrats & Urgences) :","help.mechanics.inbox.text":"Lisez vos mails pour accepter des missions variées (virus, mises à niveau, diagnostics ou montages sur mesure). Attention aux contrats marqués <strong>🚨 Urgent 24h</strong> : ils expirent et s'annulent dès la fin de la journée si vous ne les livrez pas à temps !","help.mechanics.workbench.title":"🔧 Établi de Montage (Simulateur Matériel) :","help.mechanics.workbench.text":"Installez les pièces (Boîtier, Carte Mère, CPU, Cooler, RAM, GPU, PSU, Storage). Câblez la machine, appliquez de la pâte thermique (Standard ou <strong>Métal Liquide 🔥</strong>) et démarrez l'ordinateur. Installez le système d'exploitation et lancez le <strong>3D Benchmark</strong> sous <strong>VirtualOS</strong> pour valider les performances !","help.mechanics.shop.title":"🛒 Boutique de Pièces (Fluctuations du Marché) :","help.mechanics.shop.text":"Commandez vos composants en livraison Standard (1 jour) ou Express (instantané). Restez à l'affût des <strong>Tech News 📰</strong> du matin : des crises mondiales de silicium, des inondations ou le Black Friday feront fluctuer drastiquement les prix du marché !","help.mechanics.bargain.title":"🔄 BargainBin & Négociations :","help.mechanics.bargain.text":"Achetez des PC en panne à bas coût, réparez-les, et revendez-les (flips). Vous recevrez des offres d'achat fermes ou des propositions de négociation le matin. Libre à vous d'accepter, de refuser, ou de contre-proposer un prix au plus juste !","help.mechanics.showroom.title":"🏆 Showroom de Prestige :","help.mechanics.showroom.text":"Exposez vos PC libres aux scores de benchmark légendaires. Votre prestige cumulé débloque des sponsors officiels et vous offre des <strong>remises permanentes cumulables (jusqu'à -20%)</strong> sur toutes les pièces de la boutique !","help.btnOk":"C'est parti !","event.newsTitle":"📰 Tech News Flash","event.btnOk":"Compris !","event.silicon_shortage.title":"🔥 Pénurie Mondiale de Silicium","event.silicon_shortage.text":"Des usines à Taiwan subissent des coupures d'électricité massives. Le prix d'achat de toutes les cartes graphiques (GPU) et processeurs (CPU) augmente de 40% aujourd'hui !","event.memory_crisis.title":"⚡ Crise des Puces de Mémoire","event.memory_crisis.text":"Un incendie s'est déclaré chez un important fabricant de plaquettes de silicium. Le prix de la mémoire RAM et des disques de stockage (SSD/HDD) augmente de 50% aujourd'hui !","event.black_friday.title":"🛍️ Soldes de Folie (Black Friday)","event.black_friday.text":"C'est le Black Friday ! Profitez d'une réduction de 15% sur toutes les pièces détachées de la boutique, et la livraison Express passe de 50$ à seulement 25$ !","event.virus_wave.title":"🛡️ Cyber-Attaque Mondiale","event.virus_wave.text":"Un ransomware redoutable baptisé 'TycoonCrypt' infecte des milliers de PC. Les récompenses de Cash et d'XP pour toutes les missions de désinfection de virus sont DOUBLÉES aujourd'hui !","job.req.boot_os":"Le PC doit démarrer sous l'OS","job.req.clean_os":"Supprimer tous les virus","job.req.ram_capacity":"Avoir au moins {target} Go de RAM","job.req.fast_ssd":"Installer un SSD M.2 NVMe d'au moins 1 To","job.req.no_broken_parts":"Aucun composant en panne dans le PC","job.req.cpu_tier":"Installer un processeur équivalent ou supérieur ({name})","job.req.gpu_tier":"Installer une carte graphique équivalente ou supérieure ({name})","job.req.benchmark_score":"Atteindre un score de benchmark d'au moins {target}","job.req.has_all_parts":"Installer tous les composants obligatoires","job.req.pc_budget":"Ne pas dépasser le budget de pièces de {target}$","jobs.virus.subject_0":"Mon ordinateur est extrêmement lent !","jobs.virus.subject_1":"Des pubs bizarres s'affichent partout","jobs.virus.subject_2":"Aide ! Je crois que j'ai été piraté","jobs.virus.subject_3":"Nettoyage de printemps nécessaire","jobs.virus.subject_4":"PC infecté, SOS !","jobs.virus.text":`Bonjour,

Depuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.

Pouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?

Merci,
{clientName}`,"jobs.upgrade.ram.subject_0":"Besoin de plus de puissance pour Cyberpunk","jobs.upgrade.ram.subject_1":"Mon PC rame sur Photoshop !","jobs.upgrade.ram.subject_2":"Besoin de plus de mémoire vive","jobs.upgrade.ram.subject_3":"Passer à {targetGb} Go de RAM","jobs.upgrade.ram.text":`Salut,

Je joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.

Pourriez-vous mettre à niveau ma RAM pour atteindre au moins {targetGb} Go ?

Cordialement,
{clientName}`,"jobs.upgrade.storage.subject_0":"Besoin de plus de stockage pour mes vidéos","jobs.upgrade.storage.subject_1":"Mon disque dur est plein !","jobs.upgrade.storage.subject_2":"Besoin d'un SSD plus rapide","jobs.upgrade.storage.text":`Bonjour,

Mon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.

Merci d'avance,
{clientName}`,"jobs.repair.subject_0":"Mon PC s'éteint tout seul !","jobs.repair.subject_1":"Besoin d'un diagnostic en urgence","jobs.repair.subject_2":"Écran bleu à répétition...","jobs.repair.subject_3":"Mon PC refuse de démarrer !","jobs.repair.subject_4":"Bruit bizarre venant de l'alimentation","jobs.repair.cpu.text":`Bonjour,

Mon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.

Pouvez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?

Merci,
{clientName}`,"jobs.repair.gpu.text":`Bonjour,

Je n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.

Pouvez-vous remplacer ma carte graphique défectueuse ?

Bien à vous,
{clientName}`,"jobs.benchmark.subject_0":"Mon PC doit tourner plus vite !","jobs.benchmark.subject_1":"Je veux battre le score de mon frère","jobs.benchmark.subject_2":"Aide pour optimiser mon score 3DMark","jobs.benchmark.subject_3":"Config Overclocking stable demandée","jobs.benchmark.subject_4":"Besoin de performances maximales","jobs.benchmark.text":`Salut,

J'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de {targetScore} sur l'outil de test.

Vous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !

Merci,
{clientName}`,"jobs.build.subject":"Création d'un PC sur mesure de toutes pièces","jobs.build.text":`Bonjour,

Je pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de {budget}$.

J'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins {targetScore} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !

Cordialement,
{clientName}`},en:{"nav.emails":"Emails & Orders","nav.workbench":"Assembly Workbench","nav.shop":"Parts Shop","nav.inventory":"My Inventory","nav.bargainbin":"BargainBin (Used Market)","nav.showroom":"Prestige Showroom","nav.help":"📖 Story & Help","nav.export":"📤 Export","nav.import":"📥 Import","nav.reset":"⚠️ Reset Game","hud.level":"Level","hud.budget":"Budget","hud.day":"Day","hud.endDay":"End the day","hud.endDaySub":"Deliveries arrive","toast.endDay":"Day ended!","toast.deliveries":"Parts packages delivered.","toast.newJobs":"New client emails received.","toast.flipSold":"Flip sold","toast.cancelledJobs":"urgent contract(s) cancelled by client (time expired)!","toast.welcome":"Welcome to PC Architect Tycoon! Check your email inbox to accept your first contracts.","toast.saveExported":"Save exported successfully!","toast.saveImported":"Save imported successfully! Reloading...","toast.saveError":"Error: Invalid save file!","toast.gameReset":"Game reset! Reloading...","toast.fundsInsufficient":"Insufficient funds!","toast.orderPlaced":"Order placed! Your parts will arrive tomorrow morning.","toast.expressDelivered":"Order delivered instantly via Express!","toast.liquidMetalApplied":"Liquid Metal Premium applied successfully to the CPU!","toast.metalLiquidCountError":"No Liquid Metal syringes left in stock!","toast.partInstalled":"installed!","toast.partUninstalled":"Component dismantled and returned to inventory.","toast.partSold":"Component resold for","toast.flipBought":"PC bought! Place it on a free workbench from the Workbench tab to repair it.","toast.flipSoldSuccess":"Congratulations! PC sold to","toast.flipWalkAway":"Offer declined. The buyer left.","toast.counterAccept":"The buyer accepts this counter-offer immediately!","toast.counterReject":"The buyer refused your counter-offer and prefers to look elsewhere.","toast.counterOffended":"The buyer felt offended by your unreasonable offer and walked away from negotiations!","toast.counterSuccess":"Negotiation successful!","toast.enterValidPrice":"Please enter a valid price!","toast.enterPriceName":"Please enter a valid name and price!","toast.scrapSuccess":"Computer disassembled. All parts returned to inventory!","toast.pcExposed":"placed in the prestige showroom! Your shop discounts increased!","toast.pcRetrieved":"retrieved from showroom and returned to your inventory.","toast.casePlaced":"Empty case placed on the workbench!","toast.pcImported":"Second-hand PC imported to workbench!","emails.inbox":"Inbox","emails.empty":"Select an email to read project details.","emails.from":"From:","emails.partBudget":"Parts budget:","emails.objectives":"Project objectives","emails.reward":"Reward","emails.experience":"Experience","emails.partsCost":"Parts Expenses","emails.assignWorkbench":"Assign this project to a free workbench:","emails.reassignWorkbench":"Reassign and resume this project on a free workbench:","emails.rejectJob":"Decline Mission","emails.putHold":"Store PC and put mission on hold (Free workbench)","emails.deliverPC":"Deliver PC and cash invoice","emails.activeText":"The PC is being assembled on the Workbench. Complete all objectives on the workbench to invoice the client.","workbench.empty":"Workbench empty","workbench.emptySub":"Select an order in your emails or import a second-hand computer to begin.","workbench.choosetab":"Choose my workbench","workbench.currentConfig":"Current Configuration","workbench.part.case":"Case","workbench.part.motherboard":"Motherboard","workbench.part.cpu":"Processor","workbench.part.cooler":"Cooler","workbench.part.ram":"Memory RAM","workbench.part.gpu":"Graphics GPU","workbench.part.storage":"Storage","workbench.part.psu":"Power Supply","workbench.status":"Status","workbench.status.on":"Running","workbench.status.off":"Off","workbench.status.missing":"Missing","workbench.status.missingF":"Missing","workbench.specs.wattage":"Estimated power draw:","workbench.specs.paste":"Thermal paste:","workbench.specs.paste.standard":"Standard ✓","workbench.specs.paste.liquid_metal":"Liquid Metal ✓","workbench.specs.paste.missing":"Missing ✗","workbench.specs.cables":"Power cables:","workbench.specs.cables.on":"Connected ✓","workbench.specs.cables.off":"Disconnected ✗","workbench.specs.cost":"Total parts cost:","workbench.btn.paste.apply":"Apply thermal paste","workbench.btn.paste.clean":"Clean thermal paste","workbench.btn.cables.connect":"Connect power cables","workbench.btn.cables.disconnect":"Disconnect power cables","workbench.btn.power.on":"Turn ON (Power ON)","workbench.btn.power.off":"Turn OFF (Power OFF)","workbench.btn.scrap":"Scrap PC (Dismantle parts)","workbench.btn.sell":"Put up for sale on BargainBin","workbench.btn.putHold":"📦 Store PC (Put on hold)","workbench.flip.title":"Free PC Build (BargainBin Flip)","workbench.flip.name":"Computer Name","workbench.flip.price":"Selling Price ($)","workbench.import.title":"Import second-hand PC","workbench.import.scratch":"Start a build from scratch","workbench.import.empty":"No second-hand PCs in stock.","workbench.import.action":"Place on Workbench","workbench.pasteModal.title":"Choose Thermal Paste","workbench.pasteModal.sub":"Select the type of thermal paste to apply to the CPU:","workbench.pasteModal.std":"Standard Thermal Paste (Free, Unlimited)","workbench.pasteModal.lm":"Premium Liquid Metal (Stock: {count} syringes)","boot.error.no_psu":"Boot failed: No power supply installed!","boot.error.no_mb":"Boot failed: No motherboard installed!","boot.error.no_cpu":"Boot failed: No processor installed!","boot.error.no_cooler":"Boot failed: No cooler. CPU would overheat instantly!","boot.error.no_ram":"Boot failed: No memory RAM!","boot.error.no_gpu":"Boot failed: No graphics card (GPU) for display!","boot.error.no_storage":"Boot failed: No storage drive detected!","boot.error.no_cables":"Boot failed: Power cables are not connected!","boot.error.low_psu":"Boot failed: Power supply saturated (Safety short-circuit)! Too much wattage required.","boot.error.broken_psu":"Boot failed: Power supply is faulty. Impossible to turn on the machine!","boot.error.broken_mb":"Boot failed: Motherboard is faulty (Short-circuit detected on PCB)!","boot.error.broken_cpu":"Boot failed: Black screen. Processor (CPU) is faulty or fried!","boot.error.broken_ram":"Boot failed: Memory RAM error. One or more sticks are faulty!","boot.error.broken_gpu":"Boot failed: No video signal. Graphics card (GPU) is faulty!","boot.error.broken_storage":"Boot failed: Disk read error. Storage device is faulty!","boot.success":"Booting... Video signal detected!","shop.title.cpu":"Processors (Intel & AMD)","shop.title.motherboard":"Motherboards","shop.title.gpu":"Graphics Cards (NVIDIA RTX & AMD RX)","shop.title.ram":"Memory RAM (DDR4 / DDR5)","shop.title.storage":"SSD & HDD Storage (NVMe / SATA)","shop.title.psu":"Power Supply Units","shop.title.cooler":"Coolers & Liquid AIOs","shop.title.case":"PC Cases","shop.title.upgrades":"Shop Upgrades","shop.tab.hardware":"Components","shop.tab.upgrades":"Upgrades","shop.upgrades.title":"Workshop & Workbenches","shop.cart.title":"Shopping Cart","shop.cart.empty":"Your cart is empty","shop.cart.subtotal":"Subtotal:","shop.cart.shipping":"Shipping:","shop.cart.shipping.std":"Standard (+10$, 1 Day)","shop.cart.shipping.exp":"Express (+50$, Instant)","shop.cart.btnCheckout":"Place Order","shop.btnBuy":"Add to Cart","shop.btnLocked":"Level","inventory.title":"My Inventory of Parts","inventory.cat.all":"All","inventory.empty":"No parts available in this category.","inventory.cond.new":"New","inventory.cond.used":"Used","inventory.cond.broken":"Broken","inventory.specs.buy":"Purchase Value:","inventory.specs.sell":"Used Value:","inventory.btnSell":"Sell","bargain.buy.title":"🔥 Active Deals (Buying)","bargain.sell.title":"📈 My PCs for Sale (Flips)","bargain.empty":"No used deals today. Come back tomorrow!","bargain.noFlips":"No computers listed for sale.<br><small>Assemble a free PC on a workbench and put it up for sale to generate profit!</small>","bargain.included":"Components included:","bargain.btnBuy":"Buy for","bargain.listed":"For sale","bargain.specs.bench":"Benchmark:","bargain.btnCancel":"Remove from Market (Retrieve)","bargain.offer.firm":"🟢 FIRM PURCHASE OFFER","bargain.offer.firmSub":"buys the PC at your requested price of","bargain.offer.firmBtn":"Confirm Sale","bargain.offer.negotiation":"🟡 NEGOTIATION PROPOSAL","bargain.offer.negotiationSub":"offers you","bargain.offer.accept":"Accept","bargain.offer.counter":"Counter-offer","bargain.offer.refuse":"Refuse","bargain.offer.counterTitle":"Enter your counter price ($)","bargain.offer.submit":"Submit","bargain.offer.cancel":"Cancel","bargain.waiting":"Waiting for buyers... (Overnight transition required)","os.boot.post":"AMERICAN MEGATRENDS BIOS v4.0621","os.boot.cpu":"Processors detected:","os.boot.ram":"Active Memory RAM:","os.boot.gpu":"Graphics Controller:","os.boot.storage":"Bootable Disk:","os.boot.psu":"Checking power supply... OK","os.boot.memory":"Memory post test... Success","os.boot.searching":"Searching for operating system...","os.boot.no_os":"No operating system found.","os.boot.no_os_sub":"Insert bootable USB drive to start the installation program.","os.boot.btn_os_install":"Insert USB Drive (Install VirtualOS)","os.install.title":"Installing VirtualOS v4.1","os.install.step0":"Formatting storage drive...","os.install.step1":"Creating NTFS partitions...","os.install.step2":"Copying OS files (12%)...","os.install.step3":"Copying OS files (45%)...","os.install.step4":"Copying OS files (78%)...","os.install.step5":"Configuring device drivers...","os.install.step6":"Finalizing desktop settings...","os.desktop.sysinfo":"System Info","os.desktop.scanner":"Virus Scanner","os.desktop.benchmark":"3D Benchmark","os.desktop.overclock":"Overclocking","os.desktop.shutdown":"Shutdown OS ✕","os.sysinfo.title":"System Info","os.sysinfo.subtitle":"Hardware Tech Sheet","os.sysinfo.activeFreq":"Active frequency:","os.sysinfo.temp":"CPU Temp:","os.sysinfo.activeGpu":"GPU clock:","os.sysinfo.osVersion":"OS installed: VirtualOS Desktop Edition v4.1 build 2026.","os.scanner.title":"SecuriGuard Virus Scanner","os.scanner.sub":"Integrated Security Scanner","os.scanner.ready":"Resident protection active. Ready for analysis.","os.scanner.btnScan":"Start Full Scan","os.scanner.scanning":"Scanning in progress...","os.scanner.step1":"Scanning for spyware malware...","os.scanner.step2":"Analyzing infected registry keys...","os.scanner.step3":"Examining active memory...","os.scanner.alert":"2 Threats Detected!","os.scanner.alertSub":"Trojan.Miner.Bitcoin & Adware.PopUpMagic infect your registry.","os.scanner.btnClean":"Clean and Disinfect","os.scanner.cleanSuccess":"System Clean!","os.scanner.cleanSuccessSub":"No virus, trojan, or adware detected.","os.scanner.btnClose":"Close","os.bench.title":"3D Benchmark Tool v3.0","os.bench.sub":"3D Graphical Render Simulator","os.bench.text":"This test will strain the processor and graphics card at 100% thermal load to measure performance.","os.bench.btnRun":"Run Graphics Test","os.bench.rendering":"Graphics Render in progress...","os.bench.step1":"CPU Test: Complex physical simulation...","os.bench.step2":"GPU Test: Global illumination shaders...","os.bench.step3":"Final combined test: FPS calculation...","os.bench.overheatWarning":"⚠️ CPU OVERHEAT ALERT ({temp}°C) - CRITICAL LIMIT !","os.bench.report":"Performance Report","os.bench.stable":"CPU stable at max {temp}°C.","os.bench.vcore":"VCore Voltage:","os.bench.btnAccept":"Accept","os.oc.title":"Overclock-O-Matic Pro","os.oc.sub":"Frequencies Tweak","os.oc.cpuMult":"CPU Frequency Multiplier","os.oc.vcore":"VCore Voltage (CPU Power)","os.oc.gpuFreq":"GPU Core Clock","os.oc.warning":"⚠️ <strong>Warning:</strong> Increasing voltage exponentially increases heat output. An unstable overclock will trigger a system crash (BSOD).","os.bsod.title":"Your virtual PC ran into a problem and needs to restart. We are just collecting some error info.","os.bsod.text":"System stop code:","os.bsod.sub":"Click anywhere to force shutdown and return to the workbench.","showroom.title":"✨ PC Display Case (Prestige Showroom)","showroom.locked":"Slot Locked","showroom.lockedSub":"Permanently unlocked at Level {level}","showroom.empty":"Free Showcase Slot #{num}","showroom.emptySub":"Expose a custom built PC that completed a benchmark successfully to increase your prestige and unlock store discounts.","showroom.btnExpose":"Expose Computer","showroom.active":"Exposing Showcase #{num}","showroom.btnRetrieve":"Retrieve PC","showroom.prestige":"Prestige","showroom.status.title":"🏆 Prestige Rank","showroom.status.scoreLabel":"Cumulative Prestige Score","showroom.status.milestone":"Discount progress","showroom.status.discount":"Permanent Discount Unlocked","showroom.status.discountSub":"Automatically applied on the purchase of all parts in the online shop!","showroom.status.sponsors":"Active Permanent Sponsors","showroom.status.noSponsors":"Reach 2500 cumulative prestige points to unlock your first permanent brand sponsor!","showroom.modal.title":"Select a PC for Showcase Slot #{num}","showroom.modal.empty":"No eligible PCs found.<br><small>To showcase a PC, it must be fully functional, built as a free PC (not for a client contract), and have completed at least one successful 3D benchmark to record its score!</small>","showroom.modal.sub":"Select the PC you wish to display in the showroom showcase:","showroom.modal.btnExpose":"Showcase","drawer.title":"Select Component:","drawer.empty":"No components of this type available in your inventory.","drawer.installed":"Component installed","drawer.uninstall":"Uninstall part","drawer.btnInstall":"Install","drawer.condition":"Condition:","drawer.stock":"Parts in inventory:","reset.title":"Reset Game","reset.text":"Are you sure you want to completely reset your game? All your progress (money, level, inventory, workbenches) will be permanently lost!","reset.btnYes":"Yes, reset","reset.btnNo":"No, cancel","help.title":"🖥️ PC Architect Tycoon - Story & Help","help.scenario.title":"📖 The Scenario","help.scenario.text":"You start your adventure as a young independent PC technician in a modest cyberpunk workshop. Your objective is to build your reputation (XP Level), grow your budget, unlock new cutting-edge components, and establish the most renowned workshop in the city!","help.mechanics.title":"🎮 Core Game Mechanics","help.mechanics.inbox.title":"📧 Inbox (Contracts & Urgencies):","help.mechanics.inbox.text":"Read your emails to accept a variety of missions (viruses, upgrades, diagnostics, or custom builds). Watch out for contracts marked <strong>🚨 Urgent 24h</strong>: they expire and cancel at the end of the day if you don't deliver them on time!","help.mechanics.workbench.title":"🔧 Assembly Workbench (Hardware Simulator):","help.mechanics.workbench.text":"Install parts (Case, Motherboard, CPU, Cooler, RAM, GPU, PSU, Storage). Cable up the machine, apply thermal paste (Standard or <strong>Premium Liquid Metal 🔥</strong>) and boot the computer. Install the operating system and run the <strong>3D Benchmark</strong> in <strong>VirtualOS</strong> to validate performance!","help.mechanics.shop.title":"🛒 Parts Shop (Market Fluctuations):","help.mechanics.shop.text":"Order your components with Standard shipping (1 day) or Express (instant). Keep an eye on the morning's <strong>Tech News 📰</strong>: global silicon shortages, floods, or Black Friday will cause market prices to fluctuate dramatically!","help.mechanics.bargain.title":"🔄 BargainBin & Negotiations:","help.mechanics.bargain.text":"Buy broken PCs at low cost, repair them, and resell them (flips). You will receive firm purchase offers or negotiation proposals in the morning. Feel free to accept, refuse, or counter-propose a fair price!","help.mechanics.showroom.title":"🏆 Prestige Showroom:","help.mechanics.showroom.text":"Expose your custom PCs with legendary benchmark scores. Your cumulative prestige unlocks official sponsors and gives you <strong>cumulative permanent discounts (up to -20%)</strong> on all parts in the shop!","help.btnOk":"Let's go!","event.newsTitle":"📰 Tech News Flash","event.btnOk":"Got it!","event.silicon_shortage.title":"🔥 Global Silicon Shortage","event.silicon_shortage.text":"Factories in Taiwan are experiencing massive power outages. The purchase price of all graphics cards (GPU) and processors (CPU) increases by 40% today!","event.memory_crisis.title":"⚡ Memory Chip Crisis","event.memory_crisis.text":"A fire broke out at a major silicon wafer manufacturer. The price of RAM memory and storage drives (SSD/HDD) increases by 50% today!","event.black_friday.title":"🛍️ Black Friday Madness Sale","event.black_friday.text":"It's Black Friday! Enjoy a 15% discount on all parts in the shop, and Express shipping drops from $50 to only $25!","event.virus_wave.title":"🛡️ Global Cyber-Attack","event.virus_wave.text":"A formidable ransomware named 'TycoonCrypt' infects thousands of PCs. Cash and XP rewards for all virus cleaning missions are DOUBLE today!","job.req.boot_os":"Verify that the PC boots into the OS","job.req.clean_os":"Remove all viruses","job.req.ram_capacity":"Have at least {target} GB of RAM","job.req.fast_ssd":"Install an NVMe M.2 SSD of at least 1 TB","job.req.no_broken_parts":"No broken parts in the PC","job.req.cpu_tier":"Install an equivalent or better processor ({name})","job.req.gpu_tier":"Install an equivalent or better graphics card ({name})","job.req.benchmark_score":"Reach a benchmark score of at least {target}","job.req.has_all_parts":"Install all mandatory components","job.req.pc_budget":"Do not exceed the parts budget of {target}$","jobs.virus.subject_0":"My computer is extremely slow!","jobs.virus.subject_1":"Strange ads are popping up everywhere","jobs.virus.subject_2":"Help! I think I've been hacked","jobs.virus.subject_3":"Spring cleaning needed","jobs.virus.subject_4":"PC infected, SOS!","jobs.virus.text":`Hello,

For the past few days, my computer has been exasperatingly slow. Pop-up windows keep opening with strange advertisements, and I fear that viruses have infected my files.

Could you clean the operating system and ensure there are no more threats?

Thanks,
{clientName}`,"jobs.upgrade.ram.subject_0":"Need more power for Cyberpunk","jobs.upgrade.ram.subject_1":"My PC lags on Photoshop!","jobs.upgrade.ram.subject_2":"Need more RAM","jobs.upgrade.ram.subject_3":"Upgrade to {targetGb} GB of RAM","jobs.upgrade.ram.text":`Hi,

I play games a lot these days, but my PC struggles when I open other applications in the background. I think I'm running out of memory.

Could you upgrade my RAM to reach at least {targetGb} GB?

Best regards,
{clientName}`,"jobs.upgrade.storage.subject_0":"Need more storage for my videos","jobs.upgrade.storage.subject_1":"My hard drive is full!","jobs.upgrade.storage.subject_2":"Need a faster SSD","jobs.upgrade.storage.text":`Hello,

My current hard drive is full and very slow. I would like to install a fast NVMe M.2 SSD of at least 1 TB to store my professional projects and games.

Thanks in advance,
{clientName}`,"jobs.repair.subject_0":"My PC turns off by itself!","jobs.repair.subject_1":"Emergency diagnostic needed","jobs.repair.subject_2":"Repeated Blue Screens...","jobs.repair.subject_3":"My PC refuses to start!","jobs.repair.subject_4":"Strange noise from the power supply","jobs.repair.cpu.text":`Hello,

My PC suddenly shuts down as soon as I launch it. I have the impression that there is a major hardware problem, maybe the processor? It got overheated.

Could you diagnose the breakdown, replace the faulty part with an equivalent or superior model, and send it back to me?

Thanks,
{clientName}`,"jobs.repair.gpu.text":`Hello,

I have no display signal on my screen and the graphics card makes a strange noise on startup. I think it is at the end of its life.

Could you replace my faulty graphics card?

Best regards,
{clientName}`,"jobs.benchmark.subject_0":"My PC needs to run faster!","jobs.benchmark.subject_1":"I want to beat my brother's score","jobs.benchmark.subject_2":"Help optimizing my 3DMark score","jobs.benchmark.subject_3":"Stable overclocking config requested","jobs.benchmark.subject_4":"In need of maximum performance","jobs.benchmark.text":`Hi,

I bought this PC recently but I find that it lacks a bit of punch in my benchmarks. I am aiming for a score of {targetScore} on the test tool.

You can either change parts (graphics card, processor), or try to overclock my current parts if the cooling and power supply allow it!

Thanks,
{clientName}`,"jobs.build.subject":"Custom PC build from scratch","jobs.build.text":`Hello,

I am starting from scratch and need a complete computer. My maximum budget is {budget}$.

I would like this machine to be capable of reaching a performance score of at least {targetScore} on the benchmark tool. I leave the choice of parts to you, just make sure it boots and respects the budget!

Best regards,
{clientName}`}};function r(e,t={}){const s=n.language||"fr";let o=e;return K[s]&&K[s][e]?o=K[s][e]:K.fr&&K.fr[e]&&(o=K.fr[e]),Object.keys(t).forEach(i=>{o=o.replace(`{${i}}`,t[i])}),o}function Ee(e){switch(e.id){case"boot_os":return r("job.req.boot_os");case"clean_os":return r("job.req.clean_os");case"ram_capacity":return r("job.req.ram_capacity",{target:e.target});case"fast_ssd":return r("job.req.fast_ssd");case"no_broken_parts":return r("job.req.no_broken_parts");case"cpu_tier":return r("job.req.cpu_tier",{name:e.targetName||e.target});case"gpu_tier":return r("job.req.gpu_tier",{name:e.targetName||e.target});case"benchmark_score":return r("job.req.benchmark_score",{target:e.target});case"has_all_parts":return r("job.req.has_all_parts");case"pc_budget":return r("job.req.pc_budget",{target:e.target});default:return e.desc}}let ne=null;function te(){const e=document.getElementById("pane-emails");e.innerHTML="";const t=document.createElement("div");t.className="emails-container";const s=document.createElement("div");s.className="glass-panel",s.innerHTML=`
        <div class="panel-header">
            <h2>${r("emails.inbox")}</h2>
            <span class="nav-badge" style="position:static" id="email-count">${n.activeJobs.length}</span>
        </div>
        <div class="email-list" id="email-list-items"></div>
    `,t.appendChild(s);const o=document.createElement("div");o.className="glass-panel",o.id="email-detail-panel",o.innerHTML=`
        <div class="email-view-empty">
            <span style="font-size: 3rem">✉️</span>
            <p>${r("emails.empty")}</p>
        </div>
    `,t.appendChild(o),e.appendChild(t),Be()}function Be(){const e=document.getElementById("email-list-items");if(e.innerHTML="",n.activeJobs.length===0){e.innerHTML=`<div style="text-align:center; padding:2rem; color:var(--text-muted)">${n.language==="en"?"No messages.":"Aucun message."}</div>`;return}n.activeJobs.forEach(t=>{const s=document.createElement("div");s.className=`email-item ${t.status==="available"?"unread":""} ${ne===t.id?"selected":""}`;let o="var(--color-cyan)",i=n.language==="en"?"New":"Nouveau";t.status==="active"?(o="var(--color-purple)",i=n.language==="en"?"In Progress":"En Cours"):t.status==="ready"?(o="var(--color-emerald)",i=n.language==="en"?"Ready":"Prêt"):t.status==="on_hold"&&(o="var(--color-amber)",i=n.language==="en"?"On Hold":"En Attente"),t.isUrgent&&(s.style.borderLeft="4px solid var(--color-crimson)",t.status==="available"?(o="var(--color-crimson)",i=n.language==="en"?"🚨 24h Urgent":"🚨 Urgent 24h",s.style.background="rgba(255, 0, 85, 0.03)"):i="🚨 "+i);const c=t.subjectKey?r(t.subjectKey,t.textVars):t.subject,l=t.textKey?r(t.textKey,t.textVars):t.text;s.innerHTML=`
            <div class="email-sender">
                <span>${t.clientName}</span>
                <span class="status-badge" style="background:${o}20; color:${o}; font-size:0.6rem; padding:1px 4px">${i}</span>
            </div>
            <div class="email-subject">${c}</div>
            <div class="email-snippet">${l.substring(0,45)}...</div>
        `,s.addEventListener("click",()=>{ne=t.id,Be(),Ve(t)}),e.appendChild(s)}),R()}function Ve(e){const t=document.getElementById("email-detail-panel");let s=0;e.pc&&Object.keys(e.pc).forEach(l=>{if(e.pc[l]&&e.pc[l].partId&&e.pc[l].condition!=="used"){const d=b(e.pc[l].partId);d&&(s+=d.price)}});const o=e.subjectKey?r(e.subjectKey,e.textVars):e.subject,i=e.textKey?r(e.textKey,e.textVars):e.text;t.innerHTML=`
        <div class="email-details">
            <div class="email-details-header">
                <div class="email-details-title">${o}</div>
                <div class="email-meta">
                    <span>${r("emails.from")} <strong>${e.clientName}</strong></span>
                    <span>${r("emails.partBudget")} <strong class="text-emerald">${e.budget}$</strong></span>
                </div>
            </div>
            <div class="email-body">${i}</div>
            
            <div class="job-box">
                <div class="job-box-title">${r("emails.objectives")}</div>
                <ul class="job-reqs">
                    ${e.requirements.map(l=>`
                        <li class="${l.done?"done text-emerald":"pending text-muted"}">
                            ${Ee(l)}
                        </li>
                    `).join("")}
                </ul>

                <div class="job-financials">
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">${r("emails.reward")}</div>
                        <div class="text-emerald font-mono" style="font-size:1.1rem; font-weight:700">${e.reward.toFixed(2)}$</div>
                    </div>
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">${r("emails.experience")}</div>
                        <div class="text-cyan font-mono" style="font-size:1.1rem; font-weight:700">+${e.xpReward} XP</div>
                    </div>
                    ${e.type==="build"?`
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">${r("emails.partsCost")}</div>
                        <div class="${s<=e.budget?"text-emerald":"text-crimson"} font-mono" style="font-size:1.1rem; font-weight:700">${s}$ / ${e.budget}$</div>
                    </div>
                    `:""}
                </div>
            </div>

            <div class="job-actions" id="job-actions-area"></div>
        </div>
    `;const c=document.getElementById("job-actions-area");e.status==="available"||e.status==="on_hold"?(c.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.8rem; color:var(--text-secondary)">
                    ${e.status==="on_hold"?r("emails.reassignWorkbench"):r("emails.assignWorkbench")}
                </p>
                <div style="display:flex; gap:10px">
                    ${n.workbenches.map(l=>{if(!l.unlocked)return"";const d=l.pc!==null,u=n.language==="en"?"(Busy)":"(Occupé)",p=n.language==="en"?"(Free)":"(Libre)",y=n.language==="en"?"Workbench":"Établi";return`
                            <button class="btn-secondary" style="flex:1" ${d?"disabled":""} id="btn-assign-wb-${l.id}">
                                ${y} ${l.id} ${d?u:p}
                            </button>
                        `}).join("")}
                </div>
                ${e.status==="available"?`
                <button class="btn-secondary text-crimson" style="margin-top:5px; border-color:rgba(255,0,85,0.2)" id="btn-reject-job">
                    ${r("emails.rejectJob")}
                </button>
                `:""}
            </div>
        `,n.workbenches.forEach(l=>{!l.unlocked||l.pc!==null||document.getElementById(`btn-assign-wb-${l.id}`).addEventListener("click",()=>{Je(e,l.id)})}),e.status==="available"&&document.getElementById("btn-reject-job").addEventListener("click",()=>{We(e)})):e.status==="active"?(c.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.85rem; color:var(--text-amber)">
                    ${r("emails.activeText")}
                </p>
                <button class="btn-secondary text-amber" style="border-color:rgba(255,170,0,0.25); width:100%" id="btn-put-hold-job">
                    ${r("emails.putHold")}
                </button>
            </div>
        `,document.getElementById("btn-put-hold-job").addEventListener("click",()=>{Xe(e)})):e.status==="ready"&&(c.innerHTML=`
            <button class="btn-primary glow-btn" id="btn-complete-job" style="width:100%">
                ${n.language==="en"?"Deliver PC and claim invoice":"Livrer le PC et encaisser la facture"} (${e.reward.toFixed(2)}$)
            </button>
        `,document.getElementById("btn-complete-job").addEventListener("click",()=>{Ke(e)}))}function Je(e,t){const s=n.workbenches.find(o=>o.id===t);if(s&&s.pc===null){e.status="active",s.pc=e.pc,s.pc.orderId=e.id,C();let o="";n.language==="en"?o=e.status==="on_hold"?`Used PC resumed on Workbench ${t}!`:`Project accepted and PC placed on Workbench ${t}!`:o=e.status==="on_hold"?`PC d'occasion repris sur l'Établi ${t} !`:`Projet accepté et PC placé sur l'Établi ${t} !`,f(o,"success"),te(),R()}}function We(e){n.activeJobs=n.activeJobs.filter(t=>t.id!==e.id),ne=null,C(),f(n.language==="en"?"Mission declined.":"Mission déclinée.","info"),te()}function Xe(e){const t=n.workbenches.find(o=>o.pc&&o.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,e.status="on_hold",C();const s=e.subjectKey?r(e.subjectKey,e.textVars):e.subject;f(n.language==="en"?`Mission "${s}" put on hold.`:`Mission "${s}" mise en attente. Le PC a été rangé en réserve.`,"info"),te()}function Ke(e){n.workbenches.forEach(s=>{s.pc&&s.pc.orderId===e.id&&(s.pc=null)}),window.isPcRunning=!1,Oe(e.reward);const t=Ge(e.xpReward);n.activeJobs=n.activeJobs.filter(s=>s.id!==e.id),ne=null,n.completedJobsCount+=1,C(),t.levelUp?f(n.language==="en"?`LEVEL UP! You are now level ${t.currentLevel}! New parts are available in the shop!`:`NIVEAU SUPÉRIEUR ! Vous êtes maintenant niveau ${t.currentLevel} ! De nouvelles pièces sont disponibles en boutique !`,"success"):f(n.language==="en"?`Mission completed! +${e.reward}$ and +${e.xpReward} XP`:`Mission terminée ! +${e.reward}$ et +${e.xpReward} XP`,"success"),window.updateHud(),te()}let T=null,z={},X=[],G=1,W=1,O=1.2;function Ye(e){T=e;const t=document.getElementById("workbench-monitor-overlay");t.style.display="block",t.innerHTML="",G=1,W=1,O=1.2,Ze(t)}function N(){X.forEach(clearInterval),X=[],z={};const e=document.getElementById("workbench-monitor-overlay");e&&(e.style.display="none",e.innerHTML="")}function Ze(e){const t=document.createElement("div");t.className="os-boot",e.appendChild(t);const s=b(T.cpu.partId);b(T.motherboard.partId);const o=b(T.ram.partId),i=b(T.gpu.partId),c=b(T.storage.partId);t.innerHTML=`
        <div class="os-bios-text">
            ${r("os.boot.post")}
            ${r("os.boot.cpu")} ${s.name} @ ${s.specs.speed}
            ${r("os.boot.ram")} ${o.specs.capacity} @ ${o.specs.speed} (${o.specs.ramType})
            ${r("os.boot.gpu")} ${i.name}
            ${r("os.boot.storage")} ${c.name} (${c.specs.storageType})
            
            ${r("os.boot.psu")}
            ${r("os.boot.memory")}
            ${r("os.boot.searching")}
        </div>
    `,setTimeout(()=>{t.innerHTML="",T.hasOs?Te(e):(t.innerHTML=`
                <div style="text-align:center; font-family:var(--font-mono); padding:2rem">
                    <span style="font-size:3rem">⚠️</span>
                    <p style="margin-top:15px; font-weight:700">${r("os.boot.no_os")}</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">${r("os.boot.no_os_sub")}</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        ${r("os.boot.btn_os_install")}
                    </button>
                </div>
            `,document.getElementById("btn-os-install").addEventListener("click",()=>{Qe(t)}))},1500)}function Qe(e){e.innerHTML=`
        <div style="width:300px; text-align:center">
            <h3 style="margin-bottom:15px">${r("os.install.title")}</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">${r("os.install.step0")}</p>
        </div>
    `;let t=0;const s=document.getElementById("install-progress"),o=document.getElementById("install-text"),i=[r("os.install.step1"),r("os.install.step2"),r("os.install.step3"),r("os.install.step4"),r("os.install.step5"),r("os.install.step6")],c=setInterval(()=>{const l=n.hasFastUsb?20:10;if(t+=l,s&&(s.style.width=`${Math.min(t,100)}%`),o&&(o.textContent=i[Math.floor(t/17)]||"Almost finished..."),t>=100){clearInterval(c),T.hasOs=!0,C();const d=n.language==="en"?"VirtualOS installed successfully!":"VirtualOS installé avec succès !";f(d,"success");const u=document.getElementById("workbench-monitor-overlay");u.innerHTML="",Te(u),R(),L()}},400);X.push(c)}function Te(e){e.innerHTML="";const t=document.createElement("div");t.className="os-desktop",t.innerHTML=`
        <div class="os-icon" id="icon-sysinfo">
            <span class="os-icon-img">ℹ️</span>
            <span class="os-icon-label">${r("os.desktop.sysinfo")}</span>
        </div>
        <div class="os-icon" id="icon-scanner">
            <span class="os-icon-img">🛡️</span>
            <span class="os-icon-label">${r("os.desktop.scanner")}</span>
        </div>
        <div class="os-icon" id="icon-benchmark">
            <span class="os-icon-img">🏎️</span>
            <span class="os-icon-label">${r("os.desktop.benchmark")}</span>
        </div>
        <div class="os-icon" id="icon-overclock">
            <span class="os-icon-img">⚙️</span>
            <span class="os-icon-label">${r("os.desktop.overclock")}</span>
        </div>

        <button class="btn-secondary" id="btn-os-shutdown" style="position:absolute; bottom:15px; right:15px; font-size:0.75rem; background:rgba(0,0,0,0.6)">
            ${r("os.desktop.shutdown")}
        </button>
    `,e.appendChild(t),document.getElementById("icon-sysinfo").addEventListener("click",tt),document.getElementById("icon-scanner").addEventListener("click",Le),document.getElementById("icon-benchmark").addEventListener("click",nt),document.getElementById("icon-overclock").addEventListener("click",rt),document.getElementById("btn-os-shutdown").addEventListener("click",()=>{window.isPcRunning=!1,N(),L()})}function ie(e,t=450,s=350){if(z[e])return z[e].style.zIndex=700,z[e];const o=document.createElement("div");return o.className="os-window",o.style.width=`${t}px`,o.style.height=`${s}px`,o.style.top=`${50+Object.keys(z).length*20}px`,o.style.left=`${50+Object.keys(z).length*20}px`,o.style.zIndex=650,o.innerHTML=`
        <div class="os-window-header">
            <span class="os-window-title">${e}</span>
            <button class="os-window-close">×</button>
        </div>
        <div class="os-window-body"></div>
    `,document.querySelector(".os-desktop").appendChild(o),z[e]=o,o.querySelector(".os-window-close").addEventListener("click",()=>{o.remove(),delete z[e]}),et(o),o}function et(e){let t=0,s=0,o=0,i=0;const c=e.querySelector(".os-window-header");c&&(c.onmousedown=l);function l(p){p=p||window.event,p.preventDefault(),o=p.clientX,i=p.clientY,document.onmouseup=u,document.onmousemove=d}function d(p){p=p||window.event,p.preventDefault(),t=o-p.clientX,s=i-p.clientY,o=p.clientX,i=p.clientY,e.style.top=e.offsetTop-s+"px",e.style.left=e.offsetLeft-t+"px"}function u(){document.onmouseup=null,document.onmousemove=null}}function tt(){const t=ie(r("os.sysinfo.title"),400,320).querySelector(".os-window-body"),s=b(T.cpu.partId),o=b(T.gpu.partId),i=b(T.storage.partId);let c=n.language==="en"?"Missing":"Manquante";if(T.rams&&T.rams.some(y=>y)){const y=T.rams.filter(m=>m);let g=0,v="";const x=new Set;y.forEach(m=>{if(m.kitId){if(x.has(m.kitId))return;x.add(m.kitId)}const h=b(m.partId);h&&(g+=parseInt(h.specs.capacity.replace("GB","").replace("Go","").trim()),v=h.specs.ramType)}),c=`${g} Go ${v}`}else if(T.ram){const y=b(T.ram.partId);y&&(c=`${y.specs.capacity} ${y.specs.ramType}`)}let l=42;T.thermalPasteApplied?T.thermalPasteType==="liquid_metal"&&(l=34):l=95;const d=(O-1.2)*120;let u=Math.round(l+d);t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">${r("os.sysinfo.subtitle")}</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${s.name} (${s.specs.cores})</p>
                <p><strong>${r("os.sysinfo.activeFreq")}</strong> ${(parseFloat(s.specs.speed)*G).toFixed(2)} GHz</p>
                <p><strong>${r("os.sysinfo.temp")}</strong> <span id="sysinfo-temp" style="font-weight:700">${u}°C</span></p>
                <p><strong>GPU :</strong> ${o.name} (${o.specs.vram})</p>
                <p><strong>${r("os.sysinfo.activeGpu")}</strong> ${(parseFloat(o.specs.speed)*W).toFixed(0)} MHz</p>
                <p><strong>${n.language==="en"?"RAM Memory:":"Mémoire Vive :"}</strong> ${c}</p>
                <p><strong>${n.language==="en"?"Primary Storage:":"Stockage Principal :"}</strong> ${i.name} (${i.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                ${r("os.sysinfo.osVersion")}
            </div>
        </div>
    `;const p=document.getElementById("sysinfo-temp");p&&(u>=90?p.style.color="var(--color-crimson)":u>=75?p.style.color="var(--color-amber)":p.style.color="var(--color-emerald)")}function Le(){const t=ie(r("os.scanner.title"),400,300).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">${r("os.scanner.sub")}</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">${r("os.scanner.ready")}</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                ${r("os.scanner.btnScan")}
            </button>
        </div>
    `,document.getElementById("btn-start-scan").addEventListener("click",()=>{st(t)})}function st(e){e.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px">
            <div style="font-weight:600" id="scan-step-title">${r("os.scanner.scanning")}</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Scanning System32...</div>
        </div>
    `;const t=document.getElementById("scan-progress"),s=document.getElementById("scan-file-text");let o=0;const i=setInterval(()=>{o+=10,t&&(t.style.width=`${o}%`),o===30?s.textContent=r("os.scanner.step1"):o===60?s.textContent=r("os.scanner.step2"):o===80&&(s.textContent=r("os.scanner.step3")),o>=100&&(clearInterval(i),T.isClean?(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">${r("os.scanner.cleanSuccess")}</div>
                        <p style="font-size:0.75rem; color:#888">${r("os.scanner.cleanSuccessSub")}</p>
                        <button class="btn-secondary" id="btn-close-securiguard" style="margin-top:10px; font-size:0.75rem">${r("os.scanner.btnClose")}</button>
                    </div>
                `,document.getElementById("btn-close-securiguard").addEventListener("click",()=>{const c=z[r("os.scanner.title")];c&&(c.remove(),delete z[r("os.scanner.title")])})):(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">${r("os.scanner.alert")}</div>
                        <p style="font-size:0.75rem; color:#aaa">${r("os.scanner.alertSub")}</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            ${r("os.scanner.btnClean")}
                        </button>
                    </div>
                `,document.getElementById("btn-clean-viruses").addEventListener("click",()=>{T.isClean=!0,C();const c=n.language==="en"?"System cleaned successfully!":"Système nettoyé avec succès !";f(c,"success"),R(),L(),Le()})))},300);X.push(i)}function nt(){const t=ie(r("os.bench.title"),450,360).querySelector(".os-window-body");t.innerHTML=`
        <div class="bench-runner" id="bench-app-container">
            <span style="font-size:2.5rem">🏎️</span>
            <div style="font-weight:600">${r("os.bench.sub")}</div>
            <p style="font-size:0.8rem; text-align:center; color:#888; max-width:300px">
                ${r("os.bench.text")}
            </p>
            <button class="btn-primary" id="btn-run-benchmark" style="font-size:0.85rem">
                ${r("os.bench.btnRun")}
            </button>
        </div>
    `,document.getElementById("btn-run-benchmark").addEventListener("click",()=>{ot(t)})}function ot(e){e.innerHTML=`
        <div class="bench-runner" style="width:100%; height:100%">
            <div class="bench-gauge-container">
                <canvas class="bench-canvas-simulation" id="bench-canvas"></canvas>
                <div class="bench-progress-card">
                    <div style="font-size:0.75rem; color:#aaa; margin-bottom:5px">${r("os.bench.rendering")}</div>
                    <div class="bench-score-large" id="bench-live-score">0</div>
                    <div class="bench-temp-indicator">CPU Temp : <span id="bench-live-temp">42</span>°C</div>
                </div>
            </div>
            <div class="xp-bar-container" style="width:100%; height:6px">
                <div class="xp-bar-fill" id="bench-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="bench-phase-label">Loading volumetric shaders...</p>
        </div>
    `;const t=document.getElementById("bench-canvas"),s=t.getContext("2d");t.width=400,t.height=180;let o=[];for(let M=0;M<30;M++)o.push({x:Math.random()*t.width,y:Math.random()*t.height,speed:Math.random()*3+1,size:Math.random()*3});let i=null;function c(){s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(0,0,t.width,t.height),s.fillStyle="rgba(0, 240, 255, 0.6)",o.forEach(M=>{s.beginPath(),s.arc(M.x,M.y,M.size,0,Math.PI*2),s.fill(),M.x+=M.speed,M.x>t.width&&(M.x=0)}),i=requestAnimationFrame(c)}c();let l=0,d=0,u=42;const p=T.thermalPasteApplied?T.thermalPasteType==="liquid_metal"?37:45:95,y=(O-1.2)*110,g=ae(T.cpu.partId,T.gpu.partId,T.ram.partId,G,W,T.rams),v=document.getElementById("bench-progress"),x=document.getElementById("bench-live-score"),m=document.getElementById("bench-live-temp"),h=document.getElementById("bench-phase-label"),P=setInterval(()=>{l+=4,d=Math.round(l/100*g),x&&(x.textContent=d),v&&(v.style.width=`${l}%`);const M=Math.round(p+l*.3+y);if(u=Math.min(M,140),m&&(m.textContent=u,u>=90?(m.style.color="var(--color-crimson)",n.hasThermalProbe&&(h.innerHTML=`<span class="text-crimson font-mono" style="animation: blink 1s infinite">${r("os.bench.overheatWarning",{temp:u})}</span>`)):u>=72&&(m.style.color="var(--color-amber)")),l===20?h.textContent=r("os.bench.step1"):l===50?h.textContent=r("os.bench.step2"):l===80&&(h.textContent=r("os.bench.step3")),u>=98){clearInterval(P),cancelAnimationFrame(i);const I=n.language==="en"?"Processor exceeded critical safe thermal threshold of 98°C.":"Le processeur a dépassé le seuil de sécurité thermique de 98°C.";Me("WHEA_UNCORRECTABLE_ERROR",I);return}const $=1.2+(G-1)*.5;if(G>1.15&&O<$){clearInterval(P),cancelAnimationFrame(i);const I=n.language==="en"?"Unstable Overclock: Insufficient VCore voltage for requested CPU Frequency.":"Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.";Me("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED",I);return}l>=100&&(clearInterval(P),cancelAnimationFrame(i),T.score=g,C(),e.innerHTML=`
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
                    <span class="text-emerald" style="font-size:3rem">🏆</span>
                    <div>
                        <div class="stat-label">${r("os.bench.report")}</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${g} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        ${r("os.bench.stable",{temp:u})}<br>
                        ${r("os.bench.vcore")} ${O.toFixed(2)}V
                    </div>
                    <button class="btn-primary" id="btn-close-bench" style="font-size:0.8rem">${r("os.bench.btnAccept")}</button>
                </div>
            `,document.getElementById("btn-close-bench").addEventListener("click",()=>{const I=z[r("os.bench.title")];I&&(I.remove(),delete z[r("os.bench.title")]),R(),L()}))},250);X.push(P)}function rt(){const t=ie(r("os.oc.title"),400,340).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">${r("os.oc.sub")}</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>${r("os.oc.cpuMult")}</span>
                    <span id="oc-cpu-mult-val">${G.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${G}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>${r("os.oc.vcore")}</span>
                    <span id="oc-voltage-val">${O.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${O}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>${r("os.oc.gpuFreq")}</span>
                    <span id="oc-gpu-mult-val">${W.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${W}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ${r("os.oc.warning")}
            </div>
        </div>
    `;const s=document.getElementById("oc-cpu-mult-range"),o=document.getElementById("oc-cpu-mult-val");s.addEventListener("input",u=>{G=parseFloat(u.target.value),o.textContent=`${G.toFixed(2)}x`});const i=document.getElementById("oc-voltage-range"),c=document.getElementById("oc-voltage-val");i.addEventListener("input",u=>{O=parseFloat(u.target.value),c.textContent=`${O.toFixed(2)} V`});const l=document.getElementById("oc-gpu-mult-range"),d=document.getElementById("oc-gpu-mult-val");l.addEventListener("input",u=>{W=parseFloat(u.target.value),d.textContent=`${W.toFixed(2)}x`})}function Me(e,t){X.forEach(clearInterval),X=[],z={},window.isPcRunning=!1;const s=document.getElementById("workbench-monitor-overlay");s.innerHTML=`
        <div class="os-bsod">
            <div class="os-bsod-sad">:(</div>
            <div class="os-bsod-title">${r("os.bsod.title")}</div>
            
            <div class="os-bsod-details">
                ${r("os.bsod.text")} <strong style="color:#ffef56">${e}</strong><br>
                Technical report: ${t}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">${r("os.bsod.sub")}</span>
            </div>
        </div>
    `,s.querySelector(".os-bsod").addEventListener("click",()=>{N(),L()})}let a=null;function L(){var p,y;const e=document.getElementById("pane-workbench"),t=n.workbenches.find(g=>g.id===n.selectedWorkbenchId);a=t?t.pc:null;const s=document.getElementById("workbench-monitor-overlay"),o=s&&s.style.display!=="none"&&window.isPcRunning;if(o||(e.innerHTML=""),a){const g=(p=a.motherboard)==null?void 0:p.partId,v=se(g);if(!a.rams)a.rams=new Array(v.ram).fill(null),a.ram&&(a.rams[0]=a.ram);else if(a.rams.length!==v.ram){const m=a.rams;a.rams=new Array(v.ram).fill(null);for(let h=0;h<Math.min(m.length,v.ram);h++)a.rams[h]=m[h];for(let h=v.ram;h<m.length;h++)m[h]&&n.inventory.push({id:B(),partId:m[h].partId,condition:m[h].condition,pricePaid:b(m[h].partId).price})}const x=v.nvme+v.sata;if(a.storages){if(a.storages.length!==x){const m=a.storages;a.storages=new Array(x).fill(null);for(let h=0;h<Math.min(m.length,x);h++)a.storages[h]=m[h];for(let h=x;h<m.length;h++)m[h]&&n.inventory.push({id:B(),partId:m[h].partId,condition:m[h].condition,pricePaid:b(m[h].partId).price})}}else if(a.storages=new Array(x).fill(null),a.storage){const m=b(a.storage.partId);m&&m.specs.storageType==="NVMe M.2"&&v.nvme>0?a.storages[0]=a.storage:a.storages[v.nvme]=a.storage}for(let m=0;m<x;m++){const h=a.storages[m];if(h){const P=b(h.partId);if(P){const M=P.specs.storageType==="NVMe M.2",$=m<v.nvme;if($&&!M){const I=a.storages.indexOf(null,v.nvme);I!==-1&&(a.storages[I]=h,a.storages[m]=null)}else if(!$&&M){const I=a.storages.indexOf(null,0);I!==-1&&I<v.nvme&&(a.storages[I]=h,a.storages[m]=null)}}}}for(let m=0;m<v.ram;m++){const h=a.rams[m];if(h&&!h.kitId){const P=b(h.partId);if(P&&P.name.includes("(2x")){h.kitId="kit-"+B();const $=a.rams.findIndex((I,E)=>E!==m&&I===null);$!==-1&&(a.rams[$]={partId:h.partId,condition:h.condition,kitId:h.kitId})}}}a.ram=a.rams.find(m=>m!==null)||null,a.storage=a.storages.find(m=>m!==null)||null}const i=document.createElement("div");i.className="workbench-grid";const c=document.createElement("div");if(c.className="workbench-case-view",a){const g=se((y=a.motherboard)==null?void 0:y.partId),v=r("workbench.part.case"),x=r("workbench.part.motherboard"),m=r("workbench.part.cpu"),h=r("workbench.part.cooler"),P=r("workbench.part.gpu"),M=r("workbench.part.psu"),$=n.language==="en"?"No Case (Open Test Bench)":"Aucun Boîtier (Composants à nu)",I=n.language==="en"?"Empty Slot":"Emplacement Vide";c.innerHTML=`
            <div class="case-schematic">
                <!-- Case Slot -->
                <div class="case-slot ${a.case?"filled":""}" id="slot-case" data-slot="case" style="top: 15px; left: 40px; width: 420px; height: 45px; z-index: 5;">
                    <span class="case-slot-label">${v}</span>
                    <span class="case-slot-partname">${a.case?b(a.case.partId).name:$}</span>
                </div>

                <!-- Motherboard Slot -->
                <div class="case-slot ${a.motherboard?"filled":""}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">${x}</span>
                    <span class="case-slot-partname">${a.motherboard?b(a.motherboard.partId).name:I}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area, stacked, non-overlapping) -->
                ${a.motherboard?`
                <div class="case-slot ${a.cpu?"filled":""}" id="slot-cpu" data-slot="cpu" style="top: 80px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">${m}</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${a.cpu?b(a.cpu.partId).name:I}</span>
                </div>
                `:""}

                <!-- CPU Cooler Slot (Stacked vertically below CPU, non-overlapping) -->
                ${a.cpu?`
                <div class="case-slot ${a.cooler?"filled":""}" id="slot-cooler" data-slot="cooler" style="top: 155px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">${h}</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${a.cooler?b(a.cooler.partId).name:I}</span>
                </div>
                `:""}

                <!-- Multi-slot RAM (DIMM slots to the right of CPU) -->
                ${a.motherboard?a.rams.map((E,S)=>`
                        <div class="case-slot ram-slot ${E?"filled":""}" id="slot-ram-${S}" data-slot="ram" data-index="${S}" title="${E?b(E.partId).name:"Slot RAM "+(S+1)}" style="top: 80px; left: ${265+S*25}px; width: 20px; height: 145px; z-index: 10;">
                            <span class="case-slot-label" style="font-size: 0.55rem; line-height: 1;">R${S+1}</span>
                        </div>
                    `).join(""):""}

                <!-- GPU Slot (PCIe slot) -->
                ${a.motherboard?`
                <div class="case-slot ${a.gpu?"filled":""}" id="slot-gpu" data-slot="gpu" style="top: 235px; left: 115px; width: 250px; height: 75px; z-index: 12;">
                    <span class="case-slot-label">${P}</span>
                    <span class="case-slot-partname">${a.gpu?b(a.gpu.partId).name:I}</span>
                </div>
                `:""}

                <!-- Power Supply Slot -->
                <div class="case-slot ${a.psu?"filled":""}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">${M}</span>
                    <span class="case-slot-partname">${a.psu?b(a.psu.partId).name:I}</span>
                </div>

                <!-- Multi-slot Storage: NVMe on Motherboard -->
                ${a.motherboard?new Array(g.nvme).fill(null).map((E,S)=>{const A=a.storages[S];return`
                            <div class="case-slot nvme-slot ${A?"filled":""}" id="slot-nvme-${S}" data-slot="storage" data-index="${S}" title="${A?b(A.partId).name:"Slot M.2 NVMe "+(S+1)}" style="top: ${155+S*18}px; left: 60px; width: 80px; height: 15px; z-index: 10; font-size: 0.55rem; padding: 0;">
                                <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">M.2_${S+1}</span>
                            </div>
                        `}).join(""):""}

                <!-- Multi-slot Storage: SATA Drive Bays in Case bottom -->
                ${new Array(g.sata).fill(null).map((E,S)=>{const A=g.nvme+S,w=a.storages[A],k=S%3,D=Math.floor(S/3);return`
                        <div class="case-slot sata-slot ${w?"filled":""}" id="slot-sata-${S}" data-slot="storage" data-index="${A}" title="${w?b(w.partId).name:"Slot SATA "+(S+1)}" style="top: ${380+D*45}px; left: ${40+k*55}px; width: 50px; height: 38px; font-size: 0.55rem; padding: 2px 0;">
                            <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">SATA_${S+1}</span>
                        </div>
                    `}).join("")}
            </div>
            
            <!-- Virtual Screen overlay -->
            <div id="workbench-monitor-overlay" style="display:none"></div>
        `,i.appendChild(c)}else{const g=n.language==="en"?`Workbench ${n.selectedWorkbenchId} Empty`:`Établi ${n.selectedWorkbenchId} Vide`;c.innerHTML=`
            <div style="text-align:center; color:var(--text-muted)">
                <span style="font-size:4rem">🔧</span>
                <h3 style="margin-top:15px; color:#fff">${g}</h3>
                <p style="font-size:0.85rem; margin-top:5px; max-width:300px">${r("workbench.emptySub")}</p>
                <div style="margin-top:20px" id="workbench-import-area"></div>
            </div>
        `,i.appendChild(c)}const l=document.createElement("div");l.className="workbench-sidebar";let d="";if(n.workbenches.forEach(g=>{g.unlocked?d+=`
                <div class="pc-tab ${n.selectedWorkbenchId===g.id?"active":""}" id="tab-wb-${g.id}">
                    ${n.language==="en"?"Workbench":"Établi"} ${g.id} ${g.pc?"🛠️":""}
                </div>
            `:d+=`<div class="pc-tab text-muted" style="opacity:0.5; cursor:not-allowed">🔒 ${n.language==="en"?"Workbench":"Établi"} ${g.id}</div>`}),l.innerHTML=`
        <div class="glass-panel workbench-details-card">
            <div class="stat-label" style="margin-bottom:8px">${r("workbench.choosetab")}</div>
            <div class="pc-selector-row">${d}</div>
        </div>
    `,a){const g=n.activeJobs.find(w=>w.id===a.orderId);if(g){const w=document.createElement("div");w.className="glass-panel workbench-details-card",w.style.border="1px solid rgba(0, 240, 255, 0.25)",w.style.boxShadow="inset 0 0 10px rgba(0, 240, 255, 0.05)",w.style.marginBottom="8px";const k=n.language==="en"?"🎯 Project Objectives":"🎯 Objectifs de la Mission",D=g.subjectKey?r(g.subjectKey,g.textVars):g.subject;w.innerHTML=`
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; margin-bottom: 8px;">
                    ${k}
                </div>
                <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 8px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${D}">
                    ${D}
                </div>
                <ul class="job-reqs" style="display: flex; flex-direction: column; gap: 5px; list-style: none; padding: 0;">
                    ${g.requirements.map(_=>`
                        <li class="${_.done?"done text-emerald":"pending text-muted"}" style="font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 0.9rem;">${_.done?"✅":"○"}</span>
                            <span style="${_.done?"text-decoration: line-through; opacity: 0.85;":""}">${Ee(_)}</span>
                        </li>
                    `).join("")}
                </ul>
            `,l.appendChild(w)}const v=document.createElement("div");v.className="glass-panel workbench-details-card",v.style.flex="1";let x=0,m=0;a.cpu&&(x+=b(a.cpu.partId).specs.power),a.gpu&&(x+=b(a.gpu.partId).specs.power),a.psu&&(m=b(a.psu.partId).specs.wattage);const h=m>=x;let P=r("workbench.status.missingF");if(a.rams&&a.rams.some(w=>w)){const w=a.rams.filter(F=>F);let k=0,D="";const _=new Set;w.forEach(F=>{if(F.kitId){if(_.has(F.kitId))return;_.add(F.kitId)}const J=b(F.partId);J&&(k+=parseInt(J.specs.capacity.replace("GB","").replace("Go","").trim()),D=J.specs.ramType)});const le=(n.language==="en","Slots");P=`${k} Go ${D} (${w.length}/${a.rams.length} ${le})`}let M=r("workbench.status.missing");if(a.storages&&a.storages.some(w=>w)){const w=a.storages.filter(J=>J),k=w.filter(J=>b(J.partId).specs.storageType==="NVMe M.2").length,D=w.length-k;let _=k>0?`${k}x NVMe`:"",le=D>0?`${D}x SATA`:"";const F=n.language==="en"?"Drives":"Disques";M=[_,le].filter(Boolean).join(", ")+` (${w.length}/${a.storages.length} ${F})`}let $=0;if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(w=>{if(a[w]&&a[w].partId){const k=b(a[w].partId);k&&($+=k.price)}}),a.rams){const w=new Set;a.rams.forEach(k=>{if(k&&k.partId){if(k.kitId){if(w.has(k.kitId))return;w.add(k.kitId)}const D=b(k.partId);D&&($+=D.price)}})}a.storages&&a.storages.forEach(w=>{if(w&&w.partId){const k=b(w.partId);k&&($+=k.price)}});const E=r("workbench.status.missing"),S=r("workbench.status.missingF"),A=window.isPcRunning?r("workbench.status.on"):r("workbench.status.off");v.innerHTML=`
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>${r("workbench.currentConfig")}</span>
                <span class="status-badge ${window.isPcRunning?"on":"off"}">${A}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.case")}</span><span class="pc-spec-val">${a.case?b(a.case.partId).name:E}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.motherboard")}</span><span class="pc-spec-val">${a.motherboard?b(a.motherboard.partId).name:S}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.cpu")}</span><span class="pc-spec-val">${a.cpu?b(a.cpu.partId).name:E}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.cooler")}</span><span class="pc-spec-val">${a.cooler?b(a.cooler.partId).name:E}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.ram")}</span><span class="pc-spec-val" title="${a.rams?a.rams.filter(w=>w).map(w=>b(w.partId).name).join(", "):""}">${P}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.gpu")}</span><span class="pc-spec-val">${a.gpu?b(a.gpu.partId).name:E}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.storage")}</span><span class="pc-spec-val" title="${a.storages?a.storages.filter(w=>w).map(w=>b(w.partId).name).join(", "):""}">${M}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">${r("workbench.part.psu")}</span><span class="pc-spec-val">${a.psu?`${b(a.psu.partId).name} (${m}W)`:S}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>${r("workbench.specs.wattage")}</span>
                    <span class="${h?"text-emerald":"text-crimson"}" style="font-weight:600">${x}W / ${m}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>${r("workbench.specs.paste")}</span>
                    <span class="${a.thermalPasteApplied?"text-emerald":"text-crimson"}">${a.thermalPasteApplied?a.thermalPasteType==="liquid_metal"?r("workbench.specs.paste.liquid_metal"):r("workbench.specs.paste.standard"):r("workbench.specs.paste.missing")}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>${r("workbench.specs.cables")}</span>
                    <span class="${a.cablesConnected?"text-emerald":"text-crimson"}">${a.cablesConnected?r("workbench.specs.cables.on"):r("workbench.specs.cables.off")}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 4px; margin-top: 8px;">
                    <span class="text-cyan">${r("workbench.specs.cost")}</span>
                    <span class="text-emerald font-mono">${$.toFixed(2)}$</span>
                </div>
            </div>

            <div class="workbench-actions-box">
                <button class="btn-secondary" id="btn-toggle-paste" style="width:100%">
                    ${a.thermalPasteApplied?n.language==="en"?"Clean thermal paste":"Nettoyer la pâte thermique":n.language==="en"?"Apply thermal paste":"Appliquer la pâte thermique"}
                </button>
                <button class="btn-secondary" id="btn-toggle-cables" style="width:100%">
                    ${a.cablesConnected?n.language==="en"?"Disconnect power cables":"Débrancher les câbles":n.language==="en"?"Connect power cables":"Brancher les câbles"}
                </button>
                
                ${window.isPcRunning?`
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-crimson), #c00); box-shadow: 0 4px 15px rgba(255,0,85,0.2)">
                        ${n.language==="en"?"Turn OFF (Power OFF)":"Éteindre le PC (Power OFF)"}
                    </button>
                `:`
                    <button class="btn-primary glow-btn" id="btn-power-pc" style="width:100%; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow: 0 4px 15px rgba(0,255,136,0.2)">
                        ${n.language==="en"?"Turn ON (Power ON)":"Allumer le PC (Power ON)"}
                    </button>
                `}

                ${g?`
                    <button class="btn-secondary text-amber" id="btn-put-hold-workbench" style="width:100%; border-color:rgba(255,170,0,0.25); margin-top:5px; font-weight: 500;">
                        ${r("workbench.btn.putHold")}
                    </button>
                `:""}

                ${g?"":`
                    <div style="border-top:1px solid var(--border-color); margin-top:10px; padding-top:10px; display:flex; flex-direction:column; gap:5px">
                        <div class="stat-label">${r("workbench.flip.title")}</div>
                        <input type="text" id="flip-build-name" placeholder="${r("workbench.flip.name")}" value="${t.pc.name||"PC Gamer Flip"}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <input type="number" id="flip-build-price" placeholder="${r("workbench.flip.price")}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
                        <button class="btn-secondary text-purple" style="border-color:rgba(189,0,255,0.3)" id="btn-sell-flip-pc">
                            ${r("workbench.btn.sell")}
                        </button>
                        <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.2); font-size:0.75rem; margin-top:5px" id="btn-scrap-pc">
                            ${r("workbench.btn.scrap")}
                        </button>
                    </div>
                `}
            </div>
        `,l.appendChild(v)}const u=e.querySelector(".workbench-sidebar");if(o&&u?u.innerHTML=l.innerHTML:(i.appendChild(c),i.appendChild(l),e.appendChild(i)),n.workbenches.forEach(g=>{g.unlocked&&document.getElementById(`tab-wb-${g.id}`).addEventListener("click",()=>{n.selectedWorkbenchId=g.id,window.isPcRunning=!1,N(),C(),L()})}),a){document.getElementById("btn-toggle-paste").addEventListener("click",()=>{a.thermalPasteApplied?(a.thermalPasteApplied=!1,a.thermalPasteType=null,C(),R(),L()):n.liquidMetalCount>0?mt():(a.thermalPasteApplied=!0,a.thermalPasteType="standard",C(),R(),L())}),document.getElementById("btn-toggle-cables").addEventListener("click",()=>{a.cablesConnected=!a.cablesConnected,C(),R(),L()}),document.getElementById("btn-power-pc").addEventListener("click",()=>{it()}),o||e.querySelectorAll(".case-schematic .case-slot").forEach(v=>{v.addEventListener("click",x=>{const m=v.getAttribute("data-slot"),h=v.getAttribute("data-index");ct(m,h!==null?parseInt(h):null)})});const g=n.activeJobs.find(v=>v.id===a.orderId);g?document.getElementById("btn-put-hold-workbench").addEventListener("click",()=>{ut(g)}):(document.getElementById("btn-sell-flip-pc").addEventListener("click",()=>{dt()}),document.getElementById("btn-scrap-pc").addEventListener("click",()=>{pt()}))}else at()}function at(){const e=document.getElementById("workbench-import-area");if(!e)return;const t=n.inventory.filter(o=>o.type==="pc_flip");let s="";t.length>0?s=`
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px">
                <span class="stat-label">${r("workbench.import.title")}</span>
                <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                    ${t.map(o=>`<option value="${o.id}">${o.name} (${o.pricePaid}$)</option>`).join("")}
                </select>
                <button class="btn-primary glow-btn" id="btn-import-pc-action">
                    ${r("workbench.import.action")}
                </button>
            </div>
        `:s=`
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:15px">${r("workbench.import.empty")}</div>
        `,e.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:8px">
            ${s}
            <button class="btn-primary glow-btn" id="btn-create-scratch-build" style="background:linear-gradient(135deg, var(--color-purple), #90f); width:100%">
                ${r("workbench.import.scratch")}
            </button>
        </div>
    `,t.length>0&&document.getElementById("btn-import-pc-action").addEventListener("click",()=>{const o=document.getElementById("select-import-pc").value,i=n.inventory.find(c=>c.id===o);if(i){const c=n.workbenches.find(l=>l.id===n.selectedWorkbenchId);c.pc=i.pc,c.pc.name=i.name,c.pc.isCustom=!0,n.inventory=n.inventory.filter(l=>l.id!==o),C(),f(r("toast.pcImported"),"success"),L()}}),document.getElementById("btn-create-scratch-build").addEventListener("click",()=>{const o=n.workbenches.find(i=>i.id===n.selectedWorkbenchId);o.pc={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!0},C(),f(r("toast.casePlaced"),"info"),L()})}function it(){if(window.isPcRunning)window.isPcRunning=!1,N(),L(),f("Ordinateur éteint.","info");else{if(!a.psu){f("Boot échoué : Aucune alimentation installée !","error");return}if(!a.motherboard){f("Boot échoué : Aucune carte mère installée !","error");return}if(!a.cpu){f("Boot échoué : Aucun processeur installé !","error");return}if(!a.cooler){f("Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !","error");return}if(!a.ram){f("Boot échoué : Aucune mémoire vive (RAM) !","error");return}if(!a.gpu){f("Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !","error");return}if(!a.storage){f("Boot échoué : Aucun disque de stockage détecté !","error");return}if(!a.cablesConnected){f("Boot échoué : Les câbles d'alimentation ne sont pas branchés !","error");return}if(a.psu.condition==="broken"){f("Boot échoué : L'alimentation est défectueuse. Impossible d'allumer la machine !","error");return}if(a.motherboard.condition==="broken"){f("Boot échoué : La carte mère est défectueuse (Court-circuit sur le PCB) !","error");return}if(a.cpu.condition==="broken"){f("Boot échoué : Écran noir. Le processeur (CPU) est défectueux ou grillé !","error");return}if(a.rams.some(s=>s&&s.condition==="broken")){f("Boot échoué : Erreur de mémoire vive (RAM). Une ou plusieurs barrettes sont défectueuses !","error");return}if(a.gpu.condition==="broken"){f("Boot échoué : Aucun signal d'affichage. La carte graphique (GPU) est défectueuse !","error");return}if(a.storages.some(s=>s&&s.condition==="broken")){f("Boot échoué : Erreur de lecture de disque. Le périphérique de stockage est défectueux !","error");return}let e=0;if(a.cpu&&(e+=b(a.cpu.partId).specs.power),a.gpu&&(e+=b(a.gpu.partId).specs.power),b(a.psu.partId).specs.wattage<e){f("Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.","error");return}window.isPcRunning=!0,a.bootedOnce=!0,C(),R(),L(),f("Boot en cours... Signal vidéo détecté !","success"),Ye(a)}}function ct(e,t=null){const s=e==="ram"||e==="storage"?a[e+"s"][t]:a[e],o=document.createElement("div");o.className="modal-overlay",o.id="part-drawer-modal";const i=document.createElement("div");i.className="modal-content";const c=document.createElement("div");c.className="panel-header";const l=t!==null?`${e.toUpperCase()} (Slot ${t+1})`:e.toUpperCase();c.innerHTML=`
        <h2>${r("drawer.title")} ${l}</h2>
        <button class="os-window-close" id="btn-close-drawer">×</button>
    `;const d=document.createElement("div");d.className="modal-body";const u=n.inventory.filter(y=>{const g=b(y.partId);return g&&g.type===e});let p="";if(s){const y=s.condition==="new"?r("inventory.cond.new"):s.condition==="used"?r("inventory.cond.used"):r("inventory.cond.broken");p+=`
            <div style="background:rgba(255,0,85,0.05); padding:1rem; border-radius:6px; border:1px solid rgba(255,0,85,0.2); margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center">
                <div>
                    <span class="stat-label">${r("drawer.installed")}</span>
                    <div style="font-weight:600; font-size:0.9rem">${b(s.partId).name} (${y})</div>
                </div>
                <button class="btn-secondary text-crimson" id="btn-uninstall-part">
                    ${r("drawer.uninstall")}
                </button>
            </div>
        `}u.length===0?p+=`<div style="text-align:center; padding:2rem; color:var(--text-muted)">${r("drawer.empty")}</div>`:p+=`
            <div style="font-weight:700; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px">${r("drawer.stock")}</div>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${u.map(y=>{const g=b(y.partId),v=y.condition==="new"?r("inventory.cond.new"):y.condition==="used"?r("inventory.cond.used"):r("inventory.cond.broken");return`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center">
                            <div>
                                <div style="font-weight:600; font-size:0.85rem">${g.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-secondary)">${r("drawer.condition")} ${v}</div>
                            </div>
                            <button class="btn-buy" id="btn-install-part-${y.id}">${r("drawer.btnInstall")}</button>
                        </div>
                    `}).join("")}
            </div>
        `,d.innerHTML=p,i.appendChild(c),i.appendChild(d),o.appendChild(i),document.body.appendChild(o),document.getElementById("btn-close-drawer").addEventListener("click",()=>{document.body.removeChild(o)}),s&&document.getElementById("btn-uninstall-part").addEventListener("click",()=>{be(e,t),document.body.removeChild(o)}),u.forEach(y=>{document.getElementById(`btn-install-part-${y.id}`).addEventListener("click",()=>{lt(e,y,t),document.body.removeChild(o)})})}function lt(e,t,s=null){const o=b(t.partId);if(e==="cpu"){if(a.motherboard){const i=b(a.motherboard.partId);if(i.specs.socket!==o.specs.socket){f(`Incompatible : Socket de carte mère (${i.specs.socket}) incompatible avec le processeur (${o.specs.socket}) !`,"error");return}}}else if(e==="motherboard"){if(a.cpu){const i=b(a.cpu.partId);if(i.specs.socket!==o.specs.socket){f(`Incompatible : Le processeur déjà présent (${i.specs.socket}) ne rentre pas sur ce socket (${o.specs.socket}) !`,"error");return}}if(a.rams&&a.rams.some(i=>i)){const i=a.rams.find(l=>l),c=b(i.partId);if(c.specs.ramType!==o.specs.ramType){f(`Incompatible : Type de RAM de la carte mère (${o.specs.ramType}) incompatible avec la RAM installée (${c.specs.ramType}) !`,"error");return}}}else if(e==="cooler"){if(a.cpu){const i=b(a.cpu.partId);if(!o.specs.socket.includes(i.specs.socket)){f(`Incompatible : Le système d'accroche du ventirad ne supporte pas le socket ${i.specs.socket} !`,"error");return}}}else if(e==="ram"){if(a.motherboard){const c=b(a.motherboard.partId);if(c.specs.ramType!==o.specs.ramType){f(`Incompatible : La carte mère requiert de la mémoire ${c.specs.ramType} (${o.specs.ramType} fournie) !`,"error");return}}if(o.name.includes("(2x")&&a.rams.findIndex((l,d)=>d!==s&&l===null)===-1){f("Incompatible : Ce kit de mémoire (2 barrettes) nécessite au moins 2 emplacements RAM libres sur la carte mère !","error");return}}else if(e==="storage"){if(a.motherboard){const i=o.specs.storageType==="NVMe M.2",c=se(a.motherboard.partId);if(s<c.nvme){if(!i){f("Incompatible : Cet emplacement M.2 requiert un SSD de type NVMe M.2 (disque de type SATA/HDD fourni) !","error");return}}else if(i){f("Incompatible : Les emplacements SATA ne supportent pas les disques de type NVMe M.2 (requiert un HDD ou SSD SATA) !","error");return}}else if(o.specs.storageType==="NVMe M.2"){f("Incompatible : Installez d'abord une carte mère pour utiliser un slot M.2 NVMe !","error");return}}if(e==="ram"||e==="storage"){if(a[e+"s"][s]&&be(e,s),e==="ram"&&o.name.includes("(2x")){const i="kit-"+B(),c=a.rams.findIndex((l,d)=>d!==s&&l===null);a.rams[s]={partId:t.partId,condition:t.condition,kitId:i},a.rams[c]={partId:t.partId,condition:t.condition,kitId:i}}else a[e+"s"][s]={partId:t.partId,condition:t.condition};e==="ram"?a.ram=a.rams.find(i=>i!==null)||null:a.storage=a.storages.find(i=>i!==null)||null}else a[e]&&be(e),a[e]={partId:t.partId,condition:t.condition};n.inventory=n.inventory.filter(i=>i.id!==t.id),a.cpu&&a.gpu&&a.ram?a.score=ae(a.cpu.partId,a.gpu.partId,a.ram.partId,1,1,a.rams):a.score=0,C(),R(),L(),f(`${o.name} installé !`,"success")}function be(e,t=null){const s=e==="ram"||e==="storage"?a[e+"s"][t]:a[e];if(s){if(e==="ram"||e==="storage")e==="ram"&&s.kitId?(n.inventory.push({id:B(),partId:s.partId,condition:s.condition,pricePaid:b(s.partId).price}),a.rams.forEach((o,i)=>{o&&o.kitId===s.kitId&&(a.rams[i]=null)}),a.ram=a.rams.find(o=>o!==null)||null):(n.inventory.push({id:B(),partId:s.partId,condition:s.condition,pricePaid:b(s.partId).price}),a[e+"s"][t]=null,e==="ram"?a.ram=a.rams.find(o=>o!==null)||null:(a.storage=a.storages.find(o=>o!==null)||null,a.storage||(window.isPcRunning=!1,N())));else{if(n.inventory.push({id:B(),partId:s.partId,condition:s.condition,pricePaid:b(s.partId).price}),a[e]=null,(e==="motherboard"||e==="cpu")&&(window.isPcRunning=!1,N()),e==="motherboard"){if(["cpu","cooler","gpu"].forEach(i=>{a[i]&&(n.inventory.push({id:B(),partId:a[i].partId,condition:a[i].condition,pricePaid:b(a[i].partId).price}),a[i]=null)}),a.rams){const i=new Set;a.rams.forEach(c=>{if(c){if(c.kitId){if(i.has(c.kitId))return;i.add(c.kitId)}n.inventory.push({id:B(),partId:c.partId,condition:c.condition,pricePaid:b(c.partId).price})}}),a.rams=[],a.ram=null}if(a.storages){const i=se(s.partId);for(let c=0;c<i.nvme;c++)a.storages[c]&&(n.inventory.push({id:B(),partId:a.storages[c].partId,condition:a.storages[c].condition,pricePaid:b(a.storages[c].partId).price}),a.storages[c]=null);a.storage=a.storages.find(c=>c!==null)||null,a.storage||(window.isPcRunning=!1,N())}}e==="cpu"&&a.cooler&&(n.inventory.push({id:B(),partId:a.cooler.partId,condition:a.cooler.condition,pricePaid:b(a.cooler.partId).price}),a.cooler=null)}a.cpu&&a.gpu&&a.ram?a.score=ae(a.cpu.partId,a.gpu.partId,a.ram.partId,1,1,a.rams):a.score=0,C(),R(),L(),f("Composant démonté et replacé en inventaire.","info")}}function dt(){const e=document.getElementById("flip-build-name").value.trim(),t=parseFloat(document.getElementById("flip-build-price").value);if(!e){f("Veuillez donner un nom à votre PC !","error");return}if(isNaN(t)||t<=0){f("Veuillez saisir un prix valide supérieur à 0 !","error");return}if(!a.case||!a.motherboard||!a.cpu||!a.cooler||!a.ram||!a.gpu||!a.storage||!a.psu||!a.hasOs||!a.cablesConnected||!a.thermalPasteApplied){f("Vente impossible : Le PC n'est pas opérationnel ou des pièces manquent !","error");return}n.customPcs.push({id:"listed-"+B(),name:e,price:Math.round(t),pc:JSON.parse(JSON.stringify(a))});const s=n.workbenches.find(o=>o.id===n.selectedWorkbenchId);s.pc=null,a=null,window.isPcRunning=!1,N(),C(),f(`Ordinateur "${e}" mis en vente pour ${Math.round(t)}$ !`,"success"),L()}function pt(){if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(s=>{a[s]&&n.inventory.push({id:B(),partId:a[s].partId,condition:a[s].condition,pricePaid:b(a[s].partId).price})}),a.rams){const s=new Set;a.rams.forEach(o=>{if(o){if(o.kitId){if(s.has(o.kitId))return;s.add(o.kitId)}n.inventory.push({id:B(),partId:o.partId,condition:o.condition,pricePaid:b(o.partId).price})}})}a.storages&&a.storages.forEach(s=>{s&&n.inventory.push({id:B(),partId:s.partId,condition:s.condition,pricePaid:b(s.partId).price})});const t=n.workbenches.find(s=>s.id===n.selectedWorkbenchId);t.pc=null,a=null,window.isPcRunning=!1,N(),C(),f("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !","info"),L()}function ut(e){const t=n.workbenches.find(o=>o.pc&&o.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,N(),e.status="on_hold",C();const s=e.subjectKey?r(e.subjectKey,e.textVars):e.subject;f(n.language==="en"?`Mission "${s}" put on hold.`:`Mission "${s}" mise en attente. Le PC a été rangé en réserve.`,"info"),L()}function mt(){const e=document.createElement("div");e.className="modal-overlay",e.id="paste-choice-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="400px",t.innerHTML=`
        <div class="panel-header">
            <h2>${r("workbench.pasteModal.title")}</h2>
            <button class="os-window-close" id="btn-close-paste-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; display:flex; flex-direction:column; gap:12px; text-align:center">
            <p style="font-size:0.85rem; color:var(--text-secondary)">${r("workbench.pasteModal.sub")}</p>
            <button class="btn-secondary" id="btn-apply-std-paste" style="width:100%">
                ${r("workbench.pasteModal.std")}
            </button>
            <button class="btn-primary glow-btn" id="btn-apply-lm-paste" style="width:100%; background:linear-gradient(135deg, var(--color-purple), #90f)">
                ${r("workbench.pasteModal.lm",{count:n.liquidMetalCount})}
            </button>
        </div>
    `,e.appendChild(t),document.body.appendChild(e),document.getElementById("btn-close-paste-modal").addEventListener("click",()=>{e.remove()}),document.getElementById("btn-apply-std-paste").addEventListener("click",()=>{a.thermalPasteApplied=!0,a.thermalPasteType="standard",C(),R(),e.remove(),L()}),document.getElementById("btn-apply-lm-paste").addEventListener("click",()=>{n.liquidMetalCount>0?(n.liquidMetalCount-=1,a.thermalPasteApplied=!0,a.thermalPasteType="liquid_metal",C(),R(),e.remove(),L(),f(r("toast.liquidMetalApplied"),"success")):f(r("toast.metalLiquidCountError"),"error")})}let q="cpu",H=[];function bt(){const e=document.getElementById("pane-shop");e.innerHTML="";const t=document.createElement("div");t.className="shop-layout";const s=document.createElement("div");s.className="glass-panel shop-filters",s.innerHTML=`
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; padding:0 8px">${r("shop.tab.hardware")}</div>
        <button class="filter-btn ${q==="cpu"?"active":""}" data-cat="cpu">💾 ${n.language==="en"?"Processors":"Processeurs"} <span class="badge font-mono">${U("cpu")}</span></button>
        <button class="filter-btn ${q==="motherboard"?"active":""}" data-cat="motherboard">🔌 ${n.language==="en"?"Motherboards":"Cartes Mères"} <span class="badge font-mono">${U("motherboard")}</span></button>
        <button class="filter-btn ${q==="gpu"?"active":""}" data-cat="gpu">🎮 ${n.language==="en"?"Graphics Cards":"Cartes Graphiques"} <span class="badge font-mono">${U("gpu")}</span></button>
        <button class="filter-btn ${q==="ram"?"active":""}" data-cat="ram">⚡ ${n.language==="en"?"RAM Memory":"Mémoires RAM"} <span class="badge font-mono">${U("ram")}</span></button>
        <button class="filter-btn ${q==="storage"?"active":""}" data-cat="storage">💽 ${n.language==="en"?"SSD/HDD Storage":"Stockages SSD/HDD"} <span class="badge font-mono">${U("storage")}</span></button>
        <button class="filter-btn ${q==="psu"?"active":""}" data-cat="psu">🔌 ${n.language==="en"?"Power Supplies":"Alimentations"} <span class="badge font-mono">${U("psu")}</span></button>
        <button class="filter-btn ${q==="cooler"?"active":""}" data-cat="cooler">❄️ ${n.language==="en"?"Coolers":"Refroidissements"} <span class="badge font-mono">${U("cooler")}</span></button>
        <button class="filter-btn ${q==="case"?"active":""}" data-cat="case">🖥️ ${n.language==="en"?"PC Cases":"Boîtiers PC"} <span class="badge font-mono">${U("case")}</span></button>
        
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:15px 0 8px; padding:0 8px">${r("shop.tab.upgrades")}</div>
        <button class="filter-btn ${q==="upgrades"?"active":""}" data-cat="upgrades">🛠️ ${n.language==="en"?"Workshop & Upgrades":"Atelier & Établis"}</button>
    `;const o=document.createElement("div");o.style.display="grid",o.style.gridTemplateColumns="1fr 280px",o.style.gap="1.5rem",o.style.height="100%",o.style.minHeight="0";const i=document.createElement("div");i.className="glass-panel",i.style.overflow="hidden",i.style.display="flex",i.style.flexDirection="column",i.innerHTML=`
        <div class="panel-header">
            <h2 id="catalog-title">${Ie()}</h2>
        </div>
        <div class="shop-catalog" id="shop-catalog-items"></div>
    `;const c=document.createElement("div");c.className="glass-panel",c.style.padding="1rem",c.style.display="flex",c.style.flexDirection="column",c.id="shop-cart-panel",o.appendChild(i),o.appendChild(c),t.appendChild(s),t.appendChild(o),e.appendChild(t),s.querySelectorAll(".filter-btn").forEach(l=>{l.addEventListener("click",()=>{q=l.getAttribute("data-cat"),s.querySelectorAll(".filter-btn").forEach(d=>d.classList.remove("active")),l.classList.add("active"),document.getElementById("catalog-title").textContent=Ie(),oe()})}),oe(),ce()}function U(e){return ee.filter(t=>t.type===e).length}function Ie(){switch(q){case"cpu":return r("shop.title.cpu");case"motherboard":return r("shop.title.motherboard");case"gpu":return r("shop.title.gpu");case"ram":return r("shop.title.ram");case"storage":return r("shop.title.storage");case"psu":return r("shop.title.psu");case"cooler":return r("shop.title.cooler");case"case":return r("shop.title.case");case"upgrades":return r("shop.title.upgrades");default:return"Boutique d'informatique"}}function oe(){const e=document.getElementById("shop-catalog-items");if(e.innerHTML="",q==="upgrades"){gt(e);return}ee.filter(s=>s.type===q).forEach(s=>{const o=n.level<s.level,i=document.createElement("div");i.className="part-card";let c="";if(s.type==="cpu"){const l=n.language==="en"?"Cores:":"Cœurs:",d=n.language==="en"?"Speed:":"Vitesse:";c=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.cores.split(" ")[0]}</span></div>
                <div class="part-spec-item"><span>${d}</span><span>${s.specs.speed}</span></div>
            `}else if(s.type==="gpu"){const l=n.language==="en"?"Clock:":"Fréquence:";c=`
                <div class="part-spec-item"><span>VRAM:</span><span>${s.specs.vram}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.speed}</span></div>
                <div class="part-spec-item"><span>TDP:</span><span>${s.specs.power}W</span></div>
            `}else if(s.type==="motherboard"){const l=n.language==="en"?"Size:":"Taille:";c=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>RAM:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.size}</span></div>
            `}else if(s.type==="ram"){const l=n.language==="en"?"Capacity:":"Capacité:",d=n.language==="en"?"Speed:":"Vitesse:";c=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>${d}</span><span>${s.specs.speed}</span></div>
            `}else if(s.type==="storage"){const l=n.language==="en"?"Capacity:":"Capacité:",d=n.language==="en"?"Speed:":"Débit:";c=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.storageType}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>${d}</span><span>${s.specs.speed}</span></div>
            `}else if(s.type==="psu"){const l=n.language==="en"?"Power:":"Puissance:",d=n.language==="en"?"Cert:":"Certif:";c=`
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.wattage}W</span></div>
                <div class="part-spec-item"><span>${d}</span><span>${s.specs.rating}</span></div>
            `}else if(s.type==="cooler"){const l=n.language==="en"?"Cooling:":"Capacité:";c=`
                <div class="part-spec-item"><span>Style:</span><span>${s.specs.style}</span></div>
                <div class="part-spec-item"><span>${l}</span><span>${s.specs.coolingPower}</span></div>
                <div class="part-spec-item"><span>Socket:</span><span style="max-width:130px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap" title="${s.specs.socket}">${s.specs.socket}</span></div>
            `}else s.type==="case"&&(c=`
                <div class="part-spec-item"><span>${n.language==="en"?"Size:":"Facteur:"}</span><span>${s.specs.size}</span></div>
                <div class="part-spec-item"><span>Airflow:</span><span>${s.specs.airflow}</span></div>
            `);i.innerHTML=`
            <div>
                <div class="part-category">${s.brand}</div>
                <div class="part-name">${s.name}</div>
                <div class="part-specs">${c}</div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price">${Q(s).toFixed(2)}$</div>
                ${o?`<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">${r("shop.btnLocked")} ${s.level}</button>`:`<button class="btn-buy" id="btn-add-${s.id}">${r("shop.btnBuy")}</button>`}
            </div>
        `,e.appendChild(i),o||document.getElementById(`btn-add-${s.id}`).addEventListener("click",()=>{ft(s.id)})})}function gt(e){n.workbenches.forEach(m=>{if(m.id===1)return;const h=document.createElement("div");h.className="part-card";const P=n.language==="en"?"Workshop":"Atelier",M=n.language==="en"?`Assembly Workbench #${m.id}`:`Établi de Montage n°${m.id}`,$=n.language==="en"?"Allows working on an additional PC concurrently.":"Permet de travailler sur un PC supplémentaire en simultané.",I=n.language==="en"?"Buy":"Acheter",E=n.language==="en"?"Unlocked":"Acheté";h.innerHTML=`
            <div>
                <div class="part-category">${P}</div>
                <div class="part-name">${M}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">${$}</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${m.cost.toFixed(2)}$</div>
                ${m.unlocked?`<button class="btn-buy" disabled>${E}</button>`:`<button class="btn-buy" id="btn-buy-wb-${m.id}" ${n.money<m.cost?"disabled":""}>${I}</button>`}
            </div>
        `,e.appendChild(h),m.unlocked||document.getElementById(`btn-buy-wb-${m.id}`).addEventListener("click",()=>{ht(m)})});const t=document.createElement("div");t.className="part-card";const s=n.language==="en"?"Consumable":"Consommable",o=n.language==="en"?"Premium Liquid Metal":"Métal Liquide Premium",i=n.language==="en"?`Reduces load temperature by <strong>-8°C</strong>. Stock: <strong>${n.liquidMetalCount||0}</strong>.`:`Réduit la température sous charge de <strong>-8°C</strong>. Stock : <strong>${n.liquidMetalCount||0}</strong>.`,c=n.language==="en"?"Buy":"Acheter";t.innerHTML=`
        <div>
            <div class="part-category">${s}</div>
            <div class="part-name">${o}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${i}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">30.00$</div>
            <button class="btn-buy" id="btn-buy-lm" ${n.money<30?"disabled":""}>${c}</button>
        </div>
    `,e.appendChild(t),document.getElementById("btn-buy-lm").addEventListener("click",()=>{pe("liquid_metal",30)});const l=document.createElement("div");l.className="part-card";const d=n.language==="en"?"Permanent Tool":"Outil Permanent",u=n.language==="en"?"Pro Thermal Probe":"Sonde Thermique Pro",p=n.language==="en"?"Blinking orange safety warning inside VirtualOS as soon as CPU temperature approaches 90°C.":"Alerte de sécurité orange clignotante dans VirtualOS dès que la température CPU approche des 90°C.",y=n.language==="en"?"Acquired":"Acquis";l.innerHTML=`
        <div>
            <div class="part-category">${d}</div>
            <div class="part-name">${u}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${p}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">150.00$</div>
            ${n.hasThermalProbe?`<button class="btn-buy" disabled>${y}</button>`:`<button class="btn-buy" id="btn-buy-tp" ${n.money<150?"disabled":""}>${c}</button>`}
        </div>
    `,e.appendChild(l),n.hasThermalProbe||document.getElementById("btn-buy-tp").addEventListener("click",()=>{pe("thermal_probe",150)});const g=document.createElement("div");g.className="part-card";const v=n.language==="en"?"Bootable USB Drive Pro":"Clé USB Bootable Pro",x=n.language==="en"?"VirtualOS installation is twice as fast (x2 accelerated speed).":"Installation de VirtualOS deux fois plus rapide (vitesse d'écriture accélérée x2).";g.innerHTML=`
        <div>
            <div class="part-category">${d}</div>
            <div class="part-name">${v}</div>
            <div class="part-specs">
                <p style="font-size:0.75rem; color:var(--text-secondary)">${x}</p>
            </div>
        </div>
        <div class="part-price-row">
            <div class="part-price">200.00$</div>
            ${n.hasFastUsb?`<button class="btn-buy" disabled>${y}</button>`:`<button class="btn-buy" id="btn-buy-fu" ${n.money<200?"disabled":""}>${c}</button>`}
        </div>
    `,e.appendChild(g),n.hasFastUsb||document.getElementById("btn-buy-fu").addEventListener("click",()=>{pe("fast_usb",200)})}function ht(e){if(n.money>=e.cost){n.money-=e.cost,e.unlocked=!0,C();const t=n.language==="en"?`Workbench ${e.id} unlocked!`:`Établi ${e.id} débloqué !`;f(t,"success"),window.updateHud(),oe()}}function pe(e,t){if(n.money>=t){if(n.money-=t,e==="liquid_metal"){n.liquidMetalCount=(n.liquidMetalCount||0)+1;const s=n.language==="en"?`Premium Liquid Metal syringe bought! (Stock: ${n.liquidMetalCount})`:`Seringue de Pâte Métal Liquide achetée ! (Stock : ${n.liquidMetalCount})`;f(s,"success")}else if(e==="thermal_probe"){n.hasThermalProbe=!0;const s=n.language==="en"?"Precision Thermal Probe installed in the workshop!":"Sonde Thermique de Précision installée dans l'atelier !";f(s,"success")}else if(e==="fast_usb"){n.hasFastUsb=!0;const s=n.language==="en"?"Bootable USB Drive Pro acquired! VirtualOS setup will be twice as fast.":"Clé USB Bootable Pro acquise ! L'installation de VirtualOS sera deux fois plus rapide.";f(s,"success")}C(),window.updateHud(),oe()}else f(r("toast.fundsInsufficient"),"error")}function ft(e){H.push(e),ce();const t=n.language==="en"?"Part added to cart.":"Pièce ajoutée au panier.";f(t,"info")}function vt(e){H.splice(e,1),ce()}function ce(){const e=document.getElementById("shop-cart-panel");if(!e)return;if(H.length===0){e.innerHTML=`
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">${r("shop.cart.title")}</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">${r("shop.cart.empty")}</p>
            </div>
        `;return}let t=0;const s=H.map((o,i)=>{const c=ee.find(d=>d.id===o);if(!c)return"";const l=Q(c);return t+=l,`
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${c.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${l}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${i})">×</button>
                </div>
            </div>
        `}).join("");e.innerHTML=`
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">${r("shop.cart.title")} (${H.length})</div>
        <div style="flex:1; overflow-y:auto; margin-bottom:1rem">
            ${s}
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:10px; margin-bottom:15px">
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:5px">
                <span>${r("shop.cart.subtotal")}</span>
                <span class="font-mono text-emerald" style="font-weight:600">${t.toFixed(2)}$</span>
            </div>
            
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:10px">
                <span>${r("shop.cart.shipping")}</span>
                <select id="shipping-method" style="background:#111; color:#fff; border:1px solid var(--border-color); border-radius:4px; font-size:0.75rem; padding:2px">
                    <option value="standard" selected>${r("shop.cart.shipping.std")}</option>
                    <option value="express">${r("shop.cart.shipping.exp")}</option>
                </select>
            </div>
        </div>

        <button class="btn-primary glow-btn" id="btn-checkout" style="width:100%">
            ${r("shop.cart.btnCheckout")}
        </button>
    `,document.getElementById("btn-checkout").addEventListener("click",yt),window.removeCartItem=o=>{vt(o)}}function yt(){if(H.length===0)return;const e=document.getElementById("shipping-method").value,o=H.reduce((i,c)=>i+Q(ee.find(l=>l.id===c)),0)+(e==="express"?50:10);n.money>=o?Fe(H,e).success&&(H=[],ce(),window.updateHud(),f(r(e==="express"?"toast.expressDelivered":"toast.orderPlaced"),"success")):f(r("toast.fundsInsufficient"),"error")}let j="all";function he(){const e=document.getElementById("pane-inventory");e.innerHTML="";const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem",t.style.height="100%";const s=document.createElement("div");s.className="flex-row-justify";const o=r("inventory.cat.all"),i=n.language==="en"?"Cooler":"Vent",c=n.language==="en"?"Store":"Stock";s.innerHTML=`
        <h2 style="font-size:1.3rem; font-weight:700">${r("inventory.title")}</h2>
        <div style="display:flex; gap:8px" id="inventory-cat-buttons">
            <button class="btn-secondary ${j==="all"?"text-cyan":""}" data-cat="all">${o}</button>
            <button class="btn-secondary ${j==="cpu"?"text-cyan":""}" data-cat="cpu">💾 CPU</button>
            <button class="btn-secondary ${j==="motherboard"?"text-cyan":""}" data-cat="motherboard">🔌 MB</button>
            <button class="btn-secondary ${j==="gpu"?"text-cyan":""}" data-cat="gpu">🎮 GPU</button>
            <button class="btn-secondary ${j==="ram"?"text-cyan":""}" data-cat="ram">⚡ RAM</button>
            <button class="btn-secondary ${j==="storage"?"text-cyan":""}" data-cat="storage">💽 ${c}</button>
            <button class="btn-secondary ${j==="psu"?"text-cyan":""}" data-cat="psu">🔌 PSU</button>
            <button class="btn-secondary ${j==="cooler"?"text-cyan":""}" data-cat="cooler">❄️ ${i}</button>
            <button class="btn-secondary ${j==="case"?"text-cyan":""}" data-cat="case">🖥️ Cases</button>
        </div>
    `;const l=document.createElement("div");l.className="inventory-grid",l.id="inventory-items-grid",t.appendChild(s),t.appendChild(l),e.appendChild(t),s.querySelector("#inventory-cat-buttons").querySelectorAll("button").forEach(d=>{d.addEventListener("click",()=>{j=d.getAttribute("data-cat"),he()})}),xt()}function xt(){const e=document.getElementById("inventory-items-grid");e.innerHTML="";const t=n.inventory.filter(s=>{if(j==="all")return!0;const o=b(s.partId);return o&&o.type===j});if(t.length===0){e.innerHTML=`
            <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--text-muted)">
                <span style="font-size:3rem">📦</span>
                <p style="margin-top:10px">${r("inventory.empty")}</p>
            </div>
        `;return}t.forEach(s=>{const o=b(s.partId);if(!o)return;const i=document.createElement("div");i.className=`part-card ${s.condition}`;let c=r("inventory.cond.new"),l=.5;s.condition==="used"?(c=r("inventory.cond.used"),l=.3):s.condition==="broken"&&(c=r("inventory.cond.broken"),l=.05);const d=Math.round(o.price*l);let u="";o.type==="cpu"?u=`${o.specs.socket} | ${o.specs.cores.split(" ")[0]}`:o.type==="gpu"?u=`${o.specs.vram} | ${o.specs.power}W`:o.type==="motherboard"?u=`${o.specs.socket} | ${o.specs.ramType}`:o.type==="ram"?u=`${o.specs.ramType} | ${o.specs.capacity}`:o.type==="storage"?u=`${o.specs.storageType} | ${o.specs.capacity}`:o.type==="psu"?u=`${o.specs.wattage}W`:o.type==="cooler"?u=`${o.specs.style}`:o.type==="case"&&(u=`${o.specs.airflow} Airflow`);const p=n.language==="en"?"Specs:":"Caractéristiques :";i.innerHTML=`
            <span class="part-badge">${c}</span>
            <div>
                <div class="part-category">${o.brand}</div>
                <div class="part-name">${o.name}</div>
                <div class="part-specs">
                    <div class="part-spec-item"><span>${p}</span><span>${u}</span></div>
                    <div class="part-spec-item"><span>${r("inventory.specs.buy")}</span><span>${o.price}$</span></div>
                </div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price" style="font-size:0.95rem; color:var(--text-secondary)">${r("inventory.specs.sell")} ${d}$</div>
                <button class="btn-buy" style="border-color:var(--color-crimson); color:var(--color-crimson); background:rgba(255,0,85,0.05)" id="btn-sell-${s.id}">
                    ${r("inventory.btnSell")}
                </button>
            </div>
        `,e.appendChild(i),document.getElementById(`btn-sell-${s.id}`).addEventListener("click",()=>{wt(s,d)})})}function wt(e,t){n.inventory=n.inventory.filter(s=>s.id!==e.id),n.money+=t,C(),f(`${r("toast.partSold")} ${t}$ !`,"success"),window.updateHud(),he()}function V(){const e=document.getElementById("pane-bargainbin");e.innerHTML="";const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr",t.style.gap="1.5rem",t.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto",s.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-cyan)">${r("bargain.buy.title")}</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem" id="bargain-listings"></div>
    `;const o=document.createElement("div");o.className="glass-panel",o.style.padding="1.5rem",o.style.overflowY="auto",o.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-purple)">${r("bargain.sell.title")}</h2>
        <div style="display:flex; flex-direction:column; gap:1rem" id="my-listings"></div>
    `,t.appendChild(s),t.appendChild(o),e.appendChild(t),kt(),Ct()}function kt(){const e=document.getElementById("bargain-listings");if(e.innerHTML="",n.bargainBin.length===0){e.innerHTML=`<div style="text-align:center; padding:3rem; color:var(--text-muted)">${r("bargain.empty")}</div>`;return}n.bargainBin.forEach(t=>{const s=document.createElement("div");s.className="part-card",s.style.flexDirection="column";let o=[];Object.keys(t.pc).forEach(c=>{if(t.pc[c]&&t.pc[c].partId){const l=b(t.pc[c].partId);l&&o.push(l.name)}});const i=n.language==="en"?"Used PC":"PC d'occasion";s.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-amber">${i}</span>
                <span class="part-price text-emerald">${t.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px; font-size:1.05rem">${t.name}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px">${t.description}</p>
            
            <div style="font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:6px; border-radius:4px; margin-bottom:12px">
                <strong>${r("bargain.included")}</strong> ${o.join(", ")}
            </div>

            <button class="btn-primary glow-btn" style="width:100%" id="btn-buy-flip-${t.id}">
                ${r("bargain.btnBuy")} ${t.price}$
            </button>
        `,e.appendChild(s),document.getElementById(`btn-buy-flip-${t.id}`).addEventListener("click",()=>{$t(t)})})}function $t(e){if(n.money>=e.price){n.money-=e.price;const t={id:"pc-flip-"+B(),partId:"special-pc-case",type:"pc_flip",name:e.name,condition:"used",pc:e.pc,pricePaid:e.price};n.inventory.push(t),n.bargainBin=n.bargainBin.filter(o=>o.id!==e.id),C();const s=n.language==="en"?`PC "${e.name}" bought! Install it on a free workbench from the Workbench tab to repair it.`:`PC "${e.name}" acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.`;f(s,"success"),window.updateHud(),V()}else f(r("toast.fundsInsufficient"),"error")}function Ct(){const e=document.getElementById("my-listings");e.innerHTML="";const t=n.customPcs||[];if(t.length===0){e.innerHTML=`
            <div style="text-align:center; padding:3rem; color:var(--text-muted)">
                <p>${r("bargain.noFlips")}</p>
            </div>
        `;return}t.forEach((s,o)=>{var d,u,p,y;const i=document.createElement("div");i.className="part-card",i.style.flexDirection="column";let c="";if(s.activeOffer){const g=s.activeOffer;if(g.isFullPrice)c=`
                    <div style="background:rgba(0, 255, 136, 0.05); border:1px solid rgba(0, 255, 136, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--text-emerald)">${r("bargain.offer.firm")}</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${g.buyerName}</strong> ${r("bargain.offer.firmSub")} <strong class="text-emerald font-mono">${g.offeredPrice}$</strong> !
                        </p>
                        <button class="btn-primary glow-btn" style="width:100%; margin-top:8px; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.75rem; padding:5px" id="btn-accept-offer-${o}">
                            ${r("bargain.offer.firmBtn")}
                        </button>
                    </div>
                `;else{const v=Math.round((1-g.offeredPrice/s.price)*100),x=n.language==="en"?"offers you":"vous propose",m=n.language==="en"?"Asking":"Demande",h=n.language==="en"?"Discount":"Rabais";c=`
                    <div style="background:rgba(255, 170, 0, 0.05); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:10px; margin-bottom:12px; margin-top:8px" id="offer-container-${o}">
                        <div style="font-weight:600; font-size:0.8rem; color:var(--color-amber)">${r("bargain.offer.negotiation")}</div>
                        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px">
                            <strong>${g.buyerName}</strong> ${x} <strong class="text-emerald font-mono">${g.offeredPrice}$</strong> (${m}: ${s.price}$ - ${h}: ${v}%).
                        </p>
                        <div style="display:flex; gap:6px; margin-top:8px" id="offer-actions-${o}">
                            <button class="btn-primary glow-btn" style="flex:1; background:linear-gradient(135deg, var(--color-emerald), #080); box-shadow:none; font-size:0.7rem; padding:4px" id="btn-accept-offer-${o}">
                                ${r("bargain.offer.accept")}
                            </button>
                            <button class="btn-secondary" style="flex:1; border-color:rgba(189,0,255,0.3); color:var(--color-purple); font-size:0.7rem; padding:4px" id="btn-counter-offer-${o}">
                                ${r("bargain.offer.counter")}
                            </button>
                            <button class="btn-secondary text-crimson" style="flex:1; border-color:rgba(255,0,85,0.15); font-size:0.7rem; padding:4px" id="btn-refuse-offer-${o}">
                                ${r("bargain.offer.refuse")}
                            </button>
                        </div>
                        <div id="counter-form-${o}" style="display:none; flex-direction:column; gap:6px; margin-top:8px">
                            <input type="number" id="input-counter-${o}" placeholder="${r("bargain.offer.counterTitle")}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.75rem">
                            <div style="display:flex; gap:6px">
                                <button class="btn-primary glow-btn" style="flex:1; font-size:0.7rem; padding:4px" id="btn-submit-counter-${o}">${r("bargain.offer.submit")}</button>
                                <button class="btn-secondary" style="flex:1; font-size:0.7rem; padding:4px" id="btn-cancel-counter-${o}">${r("bargain.offer.cancel")}</button>
                            </div>
                        </div>
                    </div>
                `}}else c=`
                <div style="font-size:0.75rem; color:var(--text-muted); background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:6px; padding:8px; margin-top:8px; margin-bottom:12px; text-align:center">
                    ${r("bargain.waiting")}
                </div>
            `;const l=n.language==="en"?"None":"Aucun";if(i.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-purple">${r("bargain.listed")}</span>
                <span class="part-price text-emerald">${s.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px">${s.name}</div>
            
            <div class="part-specs">
                <div class="part-spec-item"><span>${r("bargain.specs.bench")}</span><span class="text-cyan font-mono">${s.pc.score} Pts</span></div>
                <div class="part-spec-item"><span>CPU :</span><span>${((u=b((d=s.pc.cpu)==null?void 0:d.partId))==null?void 0:u.name)||l}</span></div>
                <div class="part-spec-item"><span>GPU :</span><span>${((y=b((p=s.pc.gpu)==null?void 0:p.partId))==null?void 0:y.name)||l}</span></div>
            </div>

            ${c}

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${o}">
                ${r("bargain.btnCancel")}
            </button>
        `,e.appendChild(i),document.getElementById(`btn-cancel-listing-${o}`).addEventListener("click",()=>{Mt(o)}),s.activeOffer&&(document.getElementById(`btn-accept-offer-${o}`).addEventListener("click",()=>{It(o)}),!s.activeOffer.isFullPrice)){document.getElementById(`btn-refuse-offer-${o}`).addEventListener("click",()=>{St(o)});const g=document.getElementById(`btn-counter-offer-${o}`),v=document.getElementById(`counter-form-${o}`),x=document.getElementById(`offer-actions-${o}`);g.addEventListener("click",()=>{v.style.display="flex",x.style.display="none"}),document.getElementById(`btn-cancel-counter-${o}`).addEventListener("click",()=>{v.style.display="none",x.style.display="flex"}),document.getElementById(`btn-submit-counter-${o}`).addEventListener("click",()=>{const m=parseFloat(document.getElementById(`input-counter-${o}`).value);if(isNaN(m)||m<=0){f(r("toast.enterValidPrice"),"error");return}Pt(o,Math.round(m))})}})}function Mt(e){const t=n.customPcs[e],s={id:"pc-flip-"+B(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:t.price*.5};n.inventory.push(s),n.customPcs.splice(e,1),C();const o=n.language==="en"?"Computer retrieved from BargainBin market.":"Ordinateur retiré du marché BargainBin.";f(o,"info"),V()}function It(e){const s=n.customPcs[e].activeOffer;n.money+=s.offeredPrice,n.xp+=50,n.customPcs.splice(e,1),C(),f(`${r("toast.flipSoldSuccess")} ${s.buyerName} ${n.language==="en"?"for":"pour"} ${s.offeredPrice}$ !`,"success"),window.updateHud(),V()}function St(e){const t=n.customPcs[e];t.activeOffer=null,C(),f(r("toast.flipWalkAway"),"info"),V()}function Pt(e,t){const s=n.customPcs[e],o=s.activeOffer;if(t<=o.offeredPrice){n.money+=t,n.xp+=50,n.customPcs.splice(e,1),C(),f(r("toast.counterAccept")+` ${n.language==="en"?"Sold for":"Vendu pour"} ${t}$ !`,"success"),window.updateHud(),V();return}if(t>=s.price){s.activeOffer=null,C(),f(r("toast.counterOffended"),"error"),V();return}const i=s.price-o.offeredPrice,d=1-(t-o.offeredPrice)/(i||1);if(Math.random()<d){n.money+=t,n.xp+=50,n.customPcs.splice(e,1),C();const u=n.language==="en"?`Negotiation successful! ${o.buyerName} accepts your counter-offer of ${t}$!`:`Négociation réussie ! ${o.buyerName} accepte votre contre-proposition de ${t}$ !`;f(u,"success"),window.updateHud()}else{s.activeOffer=null,C();const u=n.language==="en"?`${o.buyerName} rejected your counter-offer of ${t}$ and left.`:`${o.buyerName} a refusé votre contre-proposition de ${t}$ et préfère chercher ailleurs.`;f(u,"warning")}V()}function At(){if(!n.customPcs||n.customPcs.length===0)return{soldCount:0,totalSales:0};let e=0,t=0;const s=["GamerPro99","MamanGamer","TechEnthusiast","DirectProd","KevinDarty","RetroLover","FPS_King","SophieSlay"];return n.customPcs.forEach(o=>{o.activeOffer=null;const i=o.pc;let c=0;Object.keys(i).forEach(u=>{if(i[u]&&i[u].partId){const p=b(i[u].partId);p&&(c+=p.price)}});const l=o.price/(c||1);let d=.5;if(l<.8?d=.95:l<1.2?d=.75:l<1.5?d=.45:l<2?d=.15:d=.03,i.score>8e3&&(d+=.1),Math.random()<d){const u=s[Math.floor(Math.random()*s.length)];if(Math.random()<.35||l<.9)o.activeOffer={id:"off-"+B(),buyerName:u,offeredPrice:o.price,isFullPrice:!0,status:"pending"};else{const y=.75+Math.random()*.17,g=Math.round(o.price*y);o.activeOffer={id:"off-"+B(),buyerName:u,offeredPrice:g,isFullPrice:!1,status:"pending"}}}}),C(),{soldCount:t,totalSales:e}}function fe(){const e=document.getElementById("pane-showroom");e.innerHTML="";const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr 340px",t.style.gap="1.5rem",t.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto";const o=[{id:0,requiredLevel:1,unlocked:!0},{id:1,requiredLevel:3,unlocked:n.level>=3},{id:2,requiredLevel:6,unlocked:n.level>=6}];if(!n.showroomPcs||!Array.isArray(n.showroomPcs))n.showroomPcs=[null,null,null];else if(n.showroomPcs.length<3)for(;n.showroomPcs.length<3;)n.showroomPcs.push(null);let i="";o.forEach((v,x)=>{var h,P,M,$,I,E,S,A;const m=n.showroomPcs[x];if(!v.unlocked)i+=`
                <div style="background:rgba(255,255,255,0.01); border:1px dashed var(--border-color); border-radius:10px; padding:2rem; text-align:center; opacity:0.6; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem">🔒</span>
                    <div style="font-weight:700; font-size:0.95rem">${r("showroom.locked")}</div>
                    <p style="font-size:0.75rem; color:var(--text-muted)">${r("showroom.lockedSub",{level:v.requiredLevel})}</p>
                </div>
            `;else if(m===null)i+=`
                <div style="background:rgba(255,255,255,0.02); border:1.5px dashed rgba(189,0,255,0.25); border-radius:10px; padding:2rem; text-align:center; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; min-height:160px">
                    <span style="font-size:2rem; filter:drop-shadow(0 0 10px rgba(189,0,255,0.3))">🏆</span>
                    <div style="font-weight:700; font-size:0.95rem">${r("showroom.empty",{num:x+1})}</div>
                    <p style="font-size:0.75rem; color:var(--text-muted); max-width:320px">${r("showroom.emptySub")}</p>
                    <button class="btn-primary glow-btn" style="background:linear-gradient(135deg, var(--color-purple), #90f); padding:6px 12px; font-size:0.75rem; box-shadow:none" id="btn-expose-pc-${x}">
                        ${r("showroom.btnExpose")}
                    </button>
                </div>
            `;else{const w=n.language==="en"?"None":"Aucun";i+=`
                <div class="part-card" style="padding:1.2rem; min-height:160px; display:flex; flex-direction:row; gap:1.5rem; justify-content:space-between; align-items:center; border-color:rgba(189,0,255,0.3)">
                    <div style="display:flex; flex-direction:column; gap:8px; flex:1">
                        <div style="display:flex; align-items:center; gap:10px">
                            <span class="status-badge on" style="background:rgba(189,0,255,0.15); color:var(--color-purple); font-size:0.6rem">${r("showroom.active",{num:x+1})}</span>
                            <span class="part-price" style="font-size:1.15rem; color:var(--color-cyan)">★ ${m.pc.score} ${r("showroom.prestige")}</span>
                        </div>
                        <div style="font-weight:700; font-size:1.1rem; color:var(--text-primary)">${m.name}</div>
                        <div style="font-size:0.75rem; color:var(--text-secondary); display:grid; grid-template-columns:1fr 1fr; gap:4px">
                            <div><strong>CPU :</strong> ${((P=b((h=m.pc.cpu)==null?void 0:h.partId))==null?void 0:P.name)||w}</div>
                            <div><strong>GPU :</strong> ${(($=b((M=m.pc.gpu)==null?void 0:M.partId))==null?void 0:$.name)||w}</div>
                            <div><strong>RAM :</strong> ${((E=b((I=m.pc.ram)==null?void 0:I.partId))==null?void 0:E.name)||w}</div>
                            <div><strong>Boîtier :</strong> ${((A=b((S=m.pc.case)==null?void 0:S.partId))==null?void 0:A.name)||w}</div>
                        </div>
                    </div>
                    <button class="btn-secondary text-crimson" style="border-color:rgba(255,0,85,0.15); font-size:0.75rem; padding:6px 12px; align-self:center" id="btn-retrieve-pc-${x}">
                        ${r("showroom.btnRetrieve")}
                    </button>
                </div>
            `}}),s.innerHTML=`
        <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-purple)">${r("showroom.title")}</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem">${i}</div>
    `;const c=document.createElement("div");c.className="glass-panel",c.style.padding="1.5rem",c.style.overflowY="auto";const d=n.showroomPcs.filter(v=>v!==null).reduce((v,x)=>v+(x.pc.score||0),0),u=Math.min(Math.floor(d/2500),20),p=(Math.floor(d/2500)+1)*2500,y=Math.min(d%2500/2500*100,100);let g="";if(u>0){const v=n.language==="en"?"Power Supplies & Cases":"Alimentations & Boîtiers";g=`
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
                    <span>${v}</span><span class="text-emerald" style="font-weight:600">-${u}%</span>
                </div>
            </div>
        `}else g=`
            <div style="text-align:center; padding:1.2rem; color:var(--text-muted); font-size:0.75rem; border:1px dashed var(--border-color); border-radius:6px">
                ${r("showroom.status.noSponsors")}
            </div>
        `;c.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1.2rem; color:var(--color-cyan)">${r("showroom.status.title")}</h2>
        
        <div style="background:rgba(0,0,0,0.15); border:1px solid var(--border-color); border-radius:8px; padding:12px; margin-bottom:1.5rem">
            <div class="stat-label">${r("showroom.status.scoreLabel")}</div>
            <div style="font-size:2rem; font-weight:800; color:var(--color-cyan); font-family:var(--font-mono); text-shadow:0 0 10px rgba(0,240,255,0.25)">${d} ${r("showroom.prestige")}</div>
            
            <div class="xp-bar-container" style="height:6px; margin-top:10px; margin-bottom:4px">
                <div class="xp-bar-fill" style="width: ${y}%; background:linear-gradient(90deg, var(--color-cyan), var(--color-purple))"></div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.65rem; color:var(--text-muted)">
                <span>${r("showroom.status.milestone")}</span>
                <span>${d} / ${p} Pts</span>
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
    `,t.appendChild(s),t.appendChild(c),e.appendChild(t),o.forEach((v,x)=>{if(!v.unlocked)return;n.showroomPcs[x]===null?document.getElementById(`btn-expose-pc-${x}`).addEventListener("click",()=>{Et(x)}):document.getElementById(`btn-retrieve-pc-${x}`).addEventListener("click",()=>{Bt(x)})})}function Et(e){const t=[];n.workbenches.forEach(p=>{p.pc&&!p.pc.orderId&&p.pc.score&&p.pc.score>0&&t.push({source:"workbench",workbenchId:p.id,name:p.pc.name||`PC de l'Établi ${p.id}`,score:p.pc.score,pc:p.pc})});const s=[];n.inventory.forEach(p=>{p.type==="pc_flip"&&p.pc&&p.pc.score&&p.pc.score>0&&s.push({source:"inventory",inventoryId:p.id,name:p.name||"PC d'occasion réparé",score:p.pc.score,pc:p.pc})});const o=[...t,...s],i=document.createElement("div");i.className="modal-overlay",i.id="expose-pc-selector-modal";const c=document.createElement("div");c.className="modal-content",c.style.maxWidth="550px";const l=document.createElement("div");l.className="panel-header",l.innerHTML=`
        <h2>${r("showroom.modal.title",{num:e+1})}</h2>
        <button class="os-window-close" id="btn-close-expose-modal">×</button>
    `;const d=document.createElement("div");d.className="modal-body",d.style.padding="1.5rem";let u="";if(o.length===0)u=`
            <div style="text-align:center; padding:2rem; color:var(--text-muted)">
                <span style="font-size:2.5rem">⚠️</span>
                <p style="margin-top:10px; font-weight:600">${n.language==="en"?"No eligible PCs found.":"Aucun PC éligible trouvé."}</p>
                <p style="font-size:0.75rem; margin-top:4px">${r("showroom.modal.empty")}</p>
            </div>
        `;else{const p=n.language==="en"?"None":"Aucun",y=n.language==="en"?"Workbench":"Établi",g=(n.language==="en","Stock"),v=n.language==="en"?"Source:":"Source :";u=`
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:12px">${r("showroom.modal.sub")}</p>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${o.map((x,m)=>{var $,I,E,S;const h=((I=b(($=x.pc.cpu)==null?void 0:$.partId))==null?void 0:I.name)||p,P=((S=b((E=x.pc.gpu)==null?void 0:E.partId))==null?void 0:S.name)||p,M=x.source==="workbench"?`${y} ${x.workbenchId}`:g;return`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center; border-color:var(--border-color)">
                            <div style="display:flex; flex-direction:column; gap:3px">
                                <div style="font-weight:700; font-size:0.9rem">${x.name}</div>
                                <div style="font-size:0.7rem; color:var(--text-muted)">CPU : ${h} | GPU : ${P}</div>
                                <div style="font-size:0.65rem; color:var(--color-purple)">${v} ${M}</div>
                            </div>
                            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:5px">
                                <span class="text-cyan font-mono" style="font-weight:700; font-size:0.9rem">★ ${x.score} ${r("showroom.prestige")}</span>
                                <button class="btn-buy" id="btn-select-expose-${m}">${r("showroom.modal.btnExpose")}</button>
                            </div>
                        </div>
                    `}).join("")}
            </div>
        `}d.innerHTML=u,c.appendChild(l),c.appendChild(d),i.appendChild(c),document.body.appendChild(i),document.getElementById("btn-close-expose-modal").addEventListener("click",()=>{i.remove()}),o.forEach((p,y)=>{document.getElementById(`btn-select-expose-${y}`).addEventListener("click",()=>{if(n.showroomPcs[e]={id:"showroom-"+B(),name:p.name,pc:p.pc},p.source==="workbench"){const v=n.workbenches.find(x=>x.id===p.workbenchId);v.pc=null}else p.source==="inventory"&&(n.inventory=n.inventory.filter(v=>v.id!==p.inventoryId));C(),i.remove();const g=n.language==="en"?`PC "${p.name}" placed in prestige showcase! Your store discounts increased!`:`PC "${p.name}" placé en vitrine de prestige ! Vos remises en magasin augmentent !`;f(g,"success"),window.updateHud(),fe()})})}function Bt(e){const t=n.showroomPcs[e];if(!t)return;const s={id:"pc-flip-"+B(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:0};n.inventory.push(s),n.showroomPcs[e]=null,C();const o=n.language==="en"?`PC "${t.name}" retrieved from showroom and returned to your inventory.`:`PC "${t.name}" retiré du showroom et renvoyé dans votre inventaire.`;f(o,"info"),window.updateHud(),fe()}let re="emails";function f(e,t="info"){const s=document.getElementById("notification-container");if(!s)return;const o=document.createElement("div");o.className=`toast ${t}`;let i="ℹ️";t==="success"?i="✅":t==="error"?i="❌":t==="warning"&&(i="⚠️"),o.innerHTML=`
        <span style="font-size:1.1rem">${i}</span>
        <span class="toast-msg">${e}</span>
    `,s.appendChild(o),setTimeout(()=>{o.classList.add("show")},10),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>{o.remove()},300)},4e3)}function Y(){document.getElementById("hud-level").textContent=n.level,document.getElementById("hud-money").textContent=`${n.money.toLocaleString("fr-FR",{minimumFractionDigits:2})}$`,document.getElementById("hud-day").textContent=`Jour ${n.day}`;const e=me(n.level),t=Math.min(n.xp/e*100,100);document.getElementById("hud-xp-fill").style.width=`${t}%`,document.getElementById("hud-xp-text").textContent=`${n.xp} / ${e} XP`;const s=n.activeJobs.filter(i=>i.status==="available"||i.status==="ready").length,o=document.getElementById("badge-emails");s>0?(o.style.display="block",o.textContent=s):o.style.display="none"}function Z(e){re=e,document.querySelectorAll(".sidebar .nav-item").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll(".viewport .tab-pane").forEach(t=>{t.id===`pane-${e}`?t.classList.add("active"):t.classList.remove("active")}),e==="emails"?te():e==="workbench"?L():e==="shop"?bt():e==="inventory"?he():e==="bargainbin"?V():e==="showroom"&&fe(),C()}function De(){if(document.getElementById("daily-event-modal"))return;const e=n.currentEvent;if(!e)return;const t=document.createElement("div");t.className="modal-overlay",t.id="daily-event-modal";const s=document.createElement("div");s.className="modal-content",s.style.maxWidth="500px",s.style.border="2px solid var(--color-purple)",s.style.boxShadow="0 0 20px rgba(189, 0, 255, 0.2)";const o=r(`event.${e.id}.title`),i=r(`event.${e.id}.text`);s.innerHTML=`
        <div class="panel-header" style="background:rgba(189, 0, 255, 0.1); border-bottom:1px solid rgba(189, 0, 255, 0.3)">
            <h2 style="color:var(--text-primary); display:flex; align-items:center; gap:8px">
                ${r("event.newsTitle")}
            </h2>
            <button class="os-window-close" id="btn-close-event-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; text-align:center; display:flex; flex-direction:column; gap:15px">
            <h3 style="color:var(--color-amber); font-size:1.3rem; font-weight:700">${o}</h3>
            <p style="font-size:0.95rem; line-height:1.6; color:var(--text-primary)">
                ${i}
            </p>
            <button class="btn-primary glow-btn" id="btn-ok-event-modal" style="width:100%; margin-top:10px">
                ${r("event.btnOk")}
            </button>
        </div>
    `,t.appendChild(s),document.body.appendChild(t);const c=()=>{t.remove()};s.querySelector("#btn-close-event-modal").addEventListener("click",c),s.querySelector("#btn-ok-event-modal").addEventListener("click",c)}function Tt(){const e=At(),t=Ue();Y();let s="Journée terminée !";t.deliveriesCount>0&&(s+=` / ${t.deliveriesCount} Colis de pièces livrés.`),t.newJobsCount>0&&(s+=` / ${t.newJobsCount} Nouveaux e-mails de clients reçus.`),e.soldCount>0&&(s+=` / Flip vendu : +${e.totalSales}$ sur BargainBin !`),t.expiredCount>0&&(s+=` / ⚠️ [ANNULATION] ${t.expiredCount} contrat(s) urgent(s) annulé(s) par le client (délai dépassé) !`),f(s,t.expiredCount>0?"warning":"success"),Z(re),setTimeout(()=>{De()},500)}function Se(){if(document.getElementById("game-help-modal"))return;const e=document.createElement("div");e.className="modal-overlay",e.id="game-help-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="650px",t.style.maxHeight="90vh",t.style.border="1.5px solid var(--color-purple)",t.style.boxShadow="0 0 20px rgba(189, 0, 255, 0.2)",t.innerHTML=`
        <div class="panel-header" style="background:rgba(189, 0, 255, 0.1); border-bottom:1px solid rgba(189, 0, 255, 0.3)">
            <h2 style="color:var(--text-primary); display:flex; align-items:center; gap:8px">
                ${r("help.title")}
            </h2>
            <button class="os-window-close" id="btn-close-help-modal">×</button>
        </div>
        <div class="modal-body" style="padding:1.5rem; overflow-y:auto; display:flex; flex-direction:column; gap:15px; font-size:0.88rem; line-height:1.5; text-align:left">
            <div>
                <h3 style="color:var(--color-purple); font-size:1.05rem; font-weight:700; margin-bottom:5px">${r("help.scenario.title")}</h3>
                <p style="color:var(--text-secondary)">
                    ${r("help.scenario.text")}
                </p>
            </div>

            <div style="border-top:1px dashed var(--border-color); padding-top:10px">
                <h3 style="color:var(--color-cyan); font-size:1.05rem; font-weight:700; margin-bottom:8px">${r("help.mechanics.title")}</h3>
                <ul style="list-style-type:none; display:flex; flex-direction:column; gap:10px; padding-left:0">
                    <li>
                        <strong>${r("help.mechanics.inbox.title")}</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">${r("help.mechanics.inbox.text")}</p>
                    </li>
                    <li>
                        <strong>${r("help.mechanics.workbench.title")}</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">${r("help.mechanics.workbench.text")}</p>
                    </li>
                    <li>
                        <strong>${r("help.mechanics.shop.title")}</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">${r("help.mechanics.shop.text")}</p>
                    </li>
                    <li>
                        <strong>${r("help.mechanics.bargain.title")}</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">${r("help.mechanics.bargain.text")}</p>
                    </li>
                    <li>
                        <strong>${r("help.mechanics.showroom.title")}</strong>
                        <p style="color:var(--text-secondary); margin-top:2px">${r("help.mechanics.showroom.text")}</p>
                    </li>
                </ul>
            </div>

            <button class="btn-primary glow-btn" id="btn-ok-help-modal" style="width:100%; margin-top:10px">
                ${r("help.btnOk")}
            </button>
        </div>
    `,e.appendChild(t),document.body.appendChild(e);const s=()=>{e.remove(),n.hasSeenIntro||(n.hasSeenIntro=!0,C())};t.querySelector("#btn-close-help-modal").addEventListener("click",s),t.querySelector("#btn-ok-help-modal").addEventListener("click",s)}document.addEventListener("DOMContentLoaded",()=>{Ne(),window.updateHud=Y,Y(),document.querySelectorAll(".sidebar .nav-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");Z(t)})}),document.getElementById("btn-next-day").addEventListener("click",Tt),document.getElementById("btn-show-help").addEventListener("click",Se),document.getElementById("btn-export-save").addEventListener("click",()=>{const e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(n)),t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("download",`pc_architect_save_jour_${n.day}.json`),document.body.appendChild(t),t.click(),t.remove(),f("Sauvegarde exportée avec succès !","success")}),document.getElementById("btn-import-save").addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept=".json",e.addEventListener("change",t=>{const s=t.target.files[0];if(!s)return;const o=new FileReader;o.onload=i=>{try{const c=JSON.parse(i.target.result);c.money!==void 0&&c.level!==void 0&&c.inventory!==void 0?(localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(c)),f("Sauvegarde importée avec succès ! Rechargement...","success"),setTimeout(()=>{window.location.reload()},1e3)):f("Erreur : Le fichier de sauvegarde est invalide !","error")}catch{f("Erreur de lecture du fichier de sauvegarde !","error")}},o.readAsText(s)}),e.click()}),document.getElementById("btn-reset-game").addEventListener("click",()=>{if(document.getElementById("reset-confirm-modal"))return;const e=document.createElement("div");e.className="modal-overlay",e.id="reset-confirm-modal";const t=document.createElement("div");t.className="modal-content",t.style.maxWidth="400px",t.style.border="1.5px solid var(--color-crimson)",t.style.boxShadow="0 0 20px rgba(255, 0, 85, 0.2)",t.innerHTML=`
            <div class="panel-header" style="background:rgba(255, 0, 85, 0.1); border-bottom:1px solid rgba(255, 0, 85, 0.3)">
                <h2 style="color:var(--text-primary)">${r("reset.title")}</h2>
                <button class="os-window-close" id="btn-close-reset-modal">×</button>
            </div>
            <div class="modal-body" style="padding:1.5rem; text-align:center; display:flex; flex-direction:column; gap:12px">
                <p style="font-size:0.88rem; line-height:1.5; color:var(--text-primary)">
                    ${r("reset.text")}
                </p>
                <div style="display:flex; gap:10px; margin-top:10px">
                    <button class="btn-primary glow-btn" id="btn-confirm-reset" style="flex:1; background:linear-gradient(135deg, var(--color-crimson), #c00); box-shadow:none">
                        ${r("reset.btnYes")}
                    </button>
                    <button class="btn-secondary" id="btn-cancel-reset" style="flex:1">
                        ${r("reset.btnNo")}
                    </button>
                </div>
            </div>
        `,e.appendChild(t),document.body.appendChild(e);const s=()=>{e.remove()};t.querySelector("#btn-close-reset-modal").addEventListener("click",s),t.querySelector("#btn-cancel-reset").addEventListener("click",s),t.querySelector("#btn-confirm-reset").addEventListener("click",()=>{localStorage.removeItem("pc_architect_tycoon_save"),e.remove(),f(r("toast.gameReset"),"success"),setTimeout(()=>{window.location.reload()},500)})}),document.getElementById("btn-lang-fr").addEventListener("click",()=>{n.language="fr",C(),ue(),Y(),Z(re),f("Langue réglée sur Français !","success")}),document.getElementById("btn-lang-en").addEventListener("click",()=>{n.language="en",C(),ue(),Y(),Z(re),f("Language set to English!","success")}),ue(),Z("emails"),setTimeout(()=>{n.hasSeenIntro?(f(r("toast.welcome"),"success"),De()):Se()},1e3)});function ue(){document.querySelector('[data-tab="emails"] .nav-text').textContent=r("nav.emails"),document.querySelector('[data-tab="workbench"] .nav-text').textContent=r("nav.workbench"),document.querySelector('[data-tab="shop"] .nav-text').textContent=r("nav.shop"),document.querySelector('[data-tab="inventory"] .nav-text').textContent=r("nav.inventory"),document.querySelector('[data-tab="bargainbin"] .nav-text').textContent=r("nav.bargainbin"),document.querySelector('[data-tab="showroom"] .nav-text').textContent=r("nav.showroom"),document.getElementById("btn-show-help").textContent=r("nav.help"),document.getElementById("btn-export-save").textContent=r("nav.export"),document.getElementById("btn-import-save").textContent=r("nav.import"),document.getElementById("btn-reset-game").textContent=r("nav.reset"),document.querySelector(".level-box .stat-label").textContent=r("hud.level"),document.querySelector(".money-box .stat-label").textContent=r("hud.budget"),document.querySelector(".day-box .stat-label").textContent=r("hud.day");const e=document.getElementById("btn-next-day");e.querySelector("span").textContent=r("hud.endDay"),e.querySelector("small").textContent=r("hud.endDaySub");const t=n.language||"fr",s=document.getElementById("btn-lang-fr"),o=document.getElementById("btn-lang-en");s&&o&&(t==="fr"?(s.classList.add("active"),s.style.borderColor="var(--color-cyan)",s.style.color="var(--color-cyan)",o.classList.remove("active"),o.style.borderColor="",o.style.color=""):(o.classList.add("active"),o.style.borderColor="var(--color-cyan)",o.style.color="var(--color-cyan)",s.classList.remove("active"),s.style.borderColor="",s.style.color=""))}
