(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const U=[{id:"cpu-i3-10100f",type:"cpu",name:"Intel Core i3-10100F",brand:"Intel",price:80,level:1,specs:{socket:"LGA1200",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1800}},{id:"cpu-ryzen3-3100",type:"cpu",name:"AMD Ryzen 3 3100",brand:"AMD",price:75,level:1,specs:{socket:"AM4",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1750}},{id:"cpu-i5-11400f",type:"cpu",name:"Intel Core i5-11400F",brand:"Intel",price:130,level:2,specs:{socket:"LGA1200",cores:"6 Cores / 12 Threads",speed:"2.6 GHz",power:65,score:3200}},{id:"cpu-ryzen5-5600x",type:"cpu",name:"AMD Ryzen 5 5600X",brand:"AMD",price:150,level:3,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.7 GHz",power:65,score:4500}},{id:"cpu-i7-12700k",type:"cpu",name:"Intel Core i7-12700K",brand:"Intel",price:280,level:4,specs:{socket:"LGA1700",cores:"12 Cores / 20 Threads",speed:"3.6 GHz",power:125,score:7200}},{id:"cpu-ryzen7-5800x3d",type:"cpu",name:"AMD Ryzen 7 5800X3D",brand:"AMD",price:320,level:5,specs:{socket:"AM4",cores:"8 Cores / 16 Threads",speed:"3.4 GHz",power:105,score:8200}},{id:"cpu-i9-13900k",type:"cpu",name:"Intel Core i9-13900K",brand:"Intel",price:550,level:7,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.0 GHz",power:150,score:11500}},{id:"cpu-ryzen7-7800x3d",type:"cpu",name:"AMD Ryzen 7 7800X3D",brand:"AMD",price:390,level:8,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.2 GHz",power:120,score:10800}},{id:"cpu-i9-14900ks",type:"cpu",name:"Intel Core i9-14900KS",brand:"Intel",price:690,level:9,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.2 GHz",power:150,score:12800}},{id:"cpu-ryzen9-7950x",type:"cpu",name:"AMD Ryzen 9 7950X",brand:"AMD",price:520,level:10,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.5 GHz",power:170,score:12400}},{id:"gpu-rx580",type:"gpu",name:"AMD Radeon RX 580",brand:"AMD",price:90,level:1,specs:{vram:"8 GB GDDR5",speed:"1340 MHz",power:185,score:2200}},{id:"gpu-gtx1650",type:"gpu",name:"NVIDIA GeForce GTX 1650",brand:"NVIDIA",price:110,level:1,specs:{vram:"4 GB GDDR5",speed:"1485 MHz",power:75,score:1800}},{id:"gpu-rtx3060",type:"gpu",name:"NVIDIA GeForce RTX 3060",brand:"NVIDIA",price:290,level:2,specs:{vram:"12 GB GDDR6",speed:"1777 MHz",power:170,score:5100}},{id:"gpu-rx6600xt",type:"gpu",name:"AMD Radeon RX 6600 XT",brand:"AMD",price:260,level:3,specs:{vram:"8 GB GDDR6",speed:"2589 MHz",power:160,score:4800}},{id:"gpu-rtx3080",type:"gpu",name:"NVIDIA GeForce RTX 3080",brand:"NVIDIA",price:650,level:5,specs:{vram:"10 GB GDDR6X",speed:"1710 MHz",power:320,score:9200}},{id:"gpu-rx6800xt",type:"gpu",name:"AMD Radeon RX 6800 XT",brand:"AMD",price:500,level:6,specs:{vram:"16 GB GDDR6",speed:"2250 MHz",power:300,score:8800}},{id:"gpu-rtx4070ti",type:"gpu",name:"NVIDIA GeForce RTX 4070 Ti",brand:"NVIDIA",price:790,level:7,specs:{vram:"12 GB GDDR6X",speed:"2610 MHz",power:285,score:12500}},{id:"gpu-rx7900xtx",type:"gpu",name:"AMD Radeon RX 7900 XTX",brand:"AMD",price:950,level:8,specs:{vram:"24 GB GDDR6",speed:"2500 MHz",power:355,score:15e3}},{id:"gpu-rtx4090",type:"gpu",name:"NVIDIA GeForce RTX 4090",brand:"NVIDIA",price:1599,level:10,specs:{vram:"24 GB GDDR6X",speed:"2520 MHz",power:450,score:22e3}},{id:"mb-prime-h410",type:"motherboard",name:"ASUS Prime H410M-E",brand:"ASUS",price:70,level:1,specs:{socket:"LGA1200",ramType:"DDR4",size:"Micro-ATX"}},{id:"mb-msi-b550",type:"motherboard",name:"MSI B550-A PRO",brand:"MSI",price:110,level:1,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-aorus-z690",type:"motherboard",name:"Gigabyte Z690 AORUS ELITE",brand:"Gigabyte",price:220,level:4,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-asus-x670",type:"motherboard",name:"ASUS ROG Crosshair X670E Hero",brand:"ASUS",price:480,level:8,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"ram-crucial-8-ddr4",type:"ram",name:"Crucial Basics 8GB DDR4",brand:"Crucial",price:20,level:1,specs:{ramType:"DDR4",capacity:"8 GB",speed:"2666 MHz",score:500}},{id:"ram-corsair-16-ddr4",type:"ram",name:"Corsair Vengeance LPX 16GB (2x8)",brand:"Corsair",price:45,level:1,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:1100}},{id:"ram-gskill-32-ddr4",type:"ram",name:"G.Skill Ripjaws V 32GB (2x16)",brand:"G.Skill",price:85,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2400}},{id:"ram-kingston-32-ddr5",type:"ram",name:"Kingston FURY Beast 32GB (2x16)",brand:"Kingston",price:120,level:4,specs:{ramType:"DDR5",capacity:"32 GB",speed:"5600 MHz",score:3100}},{id:"ram-corsair-64-ddr5",type:"ram",name:"Corsair Dominator Titanium 64GB (2x32)",brand:"Corsair",price:260,level:8,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6000 MHz",score:5800}},{id:"storage-barracuda-1tb",type:"storage",name:"Seagate BarraCuda 1TB HDD",brand:"Seagate",price:45,level:1,specs:{storageType:"HDD",capacity:"1 TB",speed:"150 MB/s",score:200}},{id:"storage-kingston-480gb",type:"storage",name:"Kingston A400 480GB SATA SSD",brand:"Kingston",price:35,level:1,specs:{storageType:"SATA SSD",capacity:"480 GB",speed:"500 MB/s",score:600}},{id:"storage-samsung-1tb",type:"storage",name:"Samsung 970 EVO Plus 1TB NVMe M.2",brand:"Samsung",price:80,level:2,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2200}},{id:"storage-crucial-2tb",type:"storage",name:"Crucial T700 2TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:240,level:7,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"12400 MB/s",score:6500}},{id:"psu-evga-500",type:"psu",name:"EVGA 500 W1 (500W)",brand:"EVGA",price:40,level:1,specs:{wattage:500,rating:"80+ White"}},{id:"psu-corsair-650",type:"psu",name:"Corsair CX650M (650W)",brand:"Corsair",price:70,level:2,specs:{wattage:650,rating:"80+ Bronze"}},{id:"psu-seasonic-850",type:"psu",name:"Seasonic Focus GX-850 (850W)",brand:"Seasonic",price:130,level:4,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-bequiet-1300",type:"psu",name:"be quiet! Dark Power 13 (1300W)",brand:"be quiet!",price:290,level:8,specs:{wattage:1300,rating:"80+ Titanium"}},{id:"cooler-intel-stock",type:"cooler",name:"Intel Stock Cooler",brand:"Intel",price:5,level:1,specs:{socket:"LGA1200",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-amd-wraith",type:"cooler",name:"AMD Wraith Stealth",brand:"AMD",price:5,level:1,specs:{socket:"AM4",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-hyper-212",type:"cooler",name:"Cooler Master Hyper 212 Black",brand:"Cooler Master",price:45,level:1,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-corsair-h100i",type:"cooler",name:"Corsair H100i RGB Elite (240mm AIO)",brand:"Corsair",price:140,level:4,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"250W",style:"Liquid AIO"}},{id:"cooler-nzxt-kraken-360",type:"cooler",name:"NZXT Kraken Elite 360",brand:"NZXT",price:220,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"350W",style:"Liquid AIO"}},{id:"case-office",type:"case",name:"Generic Office Case Black",brand:"Generic",price:30,level:1,specs:{size:"ATX / Micro-ATX",airflow:"Faible"}},{id:"case-nzxt-h5",type:"case",name:"NZXT H5 Flow TG Black",brand:"NZXT",price:90,level:2,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-lianli-o11",type:"case",name:"Lian Li O11 Dynamic Clear",brand:"Lian Li",price:140,level:4,specs:{size:"ATX",airflow:"Très Bon"}},{id:"case-fractal-north",type:"case",name:"Fractal Design North Charcoal",brand:"Fractal Design",price:160,level:6,specs:{size:"ATX",airflow:"Excellent"}}];function c(e){return U.find(t=>t.id===e)||null}function j(e){if(!e)return{ram:1,nvme:0,sata:1};switch(e){case"mb-prime-h410":return{ram:2,nvme:1,sata:2};case"mb-msi-b550":return{ram:4,nvme:2,sata:4};case"mb-aorus-z690":return{ram:4,nvme:3,sata:4};case"mb-asus-x670":return{ram:4,nvme:4,sata:6};default:return{ram:2,nvme:1,sata:2}}}const ve=["Jean-Michel Tech","Sophie.Gamer","Kévin Du 93","Thomas.Dev","Lucas.Stream","Emma.Designer","Alexandre.V","Mélanie Pro","Léa.Youtuber","Julien.Hardcore"],be=["Mon PC s'éteint tout seul !","Besoin d'un diagnostic en urgence","Écran bleu à répétition...","Mon PC refuse de démarrer !","Bruit bizarre venant de l'alimentation"],ye=["Besoin de plus de puissance pour Cyberpunk","Mon PC rame sur Photoshop !","Besoin de plus de mémoire vive","Passer à {targetGb} Go de RAM"],he=["Besoin de plus de stockage pour mes vidéos","Mon disque dur est plein !","Besoin d'un SSD plus rapide"],xe=["Mon ordinateur est extrêmement lent !","Des pubs bizarres s'affichent partout","Aide ! Je crois que j'ai été piraté","Nettoyage de printemps nécessaire","PC infecté, SOS !"],Ie=["Mon PC doit tourner plus vite !","Je veux battre le score de mon frère","Aide pour optimiser mon score 3DMark","Config Overclocking stable demandée","Besoin de performances maximales"];function V(e){return e[Math.floor(Math.random()*e.length)]}function de(e,t=1){const s=[];for(let a=0;a<t;a++){const r="job-"+M(),i=V(ve);let l=["virus","upgrade"];e>=2&&l.push("repair"),e>=3&&l.push("benchmark"),e>=4&&l.push("build");const p=V(l);let u="",f="",I=0,v=0,h=0,b=null,m=[];const d=we(p,e);if(p==="virus")u=V(xe),f=`Bonjour,

Depuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.

Pouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?

Merci,
${i}`,I=0,v=120+e*20,h=80,d.isClean=!1,m=[{id:"clean_os",desc:"Supprimer tous les virus",done:!1},{id:"boot_os",desc:"S'assurer que le PC démarre sous l'OS",done:!1}],b=d;else if(p==="upgrade"){if((Math.random()>.5?"ram":"storage")==="ram"){const x=d.ram&&c(d.ram.partId).specs.capacity.includes("8")?16:32;u=V(ye).replace("{targetGb}",x),f=`Salut,

Je joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.

Pourriez-vous mettre à niveau ma RAM pour atteindre au moins ${x} Go ?

Cordialement,
${i}`,I=x===16?80:160,v=150+e*15,h=100,m=[{id:"ram_capacity",desc:`Avoir au moins ${x} Go de RAM`,target:x,done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}]}else u=V(he),f=`Bonjour,

Mon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.

Merci d'avance,
${i}`,I=120,v=140+e*15,h=100,d.storage={partId:"storage-barracuda-1tb",condition:"used"},d.bootedOnce=!1,m=[{id:"fast_ssd",desc:"Installer un SSD M.2 NVMe d'au moins 1 To",done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}];b=d}else if(p==="repair"){if(u=V(be),(Math.random()>.5?"cpu":"gpu")==="cpu"){f=`Bonjour,

Mon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.

Pourriez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?

Merci,
${i}`,d.cpu&&(d.cpu.condition="broken"),d.bootedOnce=!1;const x=c(d.cpu.partId);I=x.price+30,v=200+e*30,h=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne dans le PC",done:!1},{id:"cpu_tier",desc:`Installer un processeur équivalent ou supérieur (${x.name})`,target:x.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}else{f=`Bonjour,

Je n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.

Pourriez-vous remplacer ma carte graphique défectueuse ?

Bien à vous,
${i}`,d.gpu&&(d.gpu.condition="broken"),d.bootedOnce=!1;const x=c(d.gpu.partId);I=x.price+40,v=220+e*30,h=150,m=[{id:"no_broken_parts",desc:"Aucun composant en panne",done:!1},{id:"gpu_tier",desc:`Installer une carte graphique équivalente ou supérieure (${x.name})`,target:x.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}b=d}else if(p==="benchmark"){u=V(Ie);const C=d.score||3e3,x=Math.round(C*1.25);f=`Salut,

J'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de ${x} sur l'outil de test.

Vous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !

Merci,
${i}`,I=300,v=280+e*40,h=200,m=[{id:"benchmark_score",desc:`Atteindre un score de benchmark d'au moins ${x}`,target:x,done:!1},{id:"boot_os",desc:"Le PC doit démarrer sous l'OS",done:!1}],b=d}else if(p==="build"){u="Création d'un PC sur mesure de toutes pièces";const C=e*1800+1e3;I=e*250+500,v=350+e*50,h=300,f=`Bonjour,

Je pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de ${I}$.

J'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins ${C} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !

Cordialement,
${i}`,m=[{id:"has_all_parts",desc:"Installer tous les composants obligatoires",done:!1},{id:"benchmark_score",desc:`Atteindre un score de benchmark de ${C}`,target:C,done:!1},{id:"pc_budget",desc:`Ne pas dépasser le budget de pièces de ${I}$`,target:I,done:!1},{id:"boot_os",desc:"Le PC démarre et l'OS est installé",done:!1}],b={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!1,bootedOnce:!1}}s.push({id:r,clientName:i,subject:u,text:f,type:p,status:"available",requirements:m,budget:I,reward:v,xpReward:h,pc:b})}return s}function we(e,t){let s="mb-msi-b550",a="cpu-ryzen5-5600x",r="cooler-hyper-212",i="ram-corsair-16-ddr4",l="storage-kingston-480gb",p="gpu-rtx3060",u="psu-corsair-650",f="case-nzxt-h5";return t===1?(s="mb-prime-h410",a="cpu-i3-10100f",r="cooler-intel-stock",i="ram-crucial-8-ddr4",l="storage-barracuda-1tb",p="gpu-gtx1650",u="psu-evga-500",f="case-office"):t>=5&&t<8?(s="mb-aorus-z690",a="cpu-i7-12700k",r="cooler-corsair-h100i",i="ram-kingston-32-ddr5",l="storage-samsung-1tb",p="gpu-rtx3080",u="psu-seasonic-850",f="case-lianli-o11"):t>=8&&(s="mb-asus-x670",a="cpu-ryzen9-7950x",r="cooler-nzxt-kraken-360",i="ram-corsair-64-ddr5",l="storage-crucial-2tb",p="gpu-rtx4090",u="psu-bequiet-1300",f="case-fractal-north"),{case:{partId:f,condition:"used"},motherboard:{partId:s,condition:"used"},cpu:{partId:a,condition:"used"},cooler:{partId:r,condition:"used"},ram:{partId:i,condition:"used"},gpu:{partId:p,condition:"used"},storage:{partId:l,condition:"used"},psu:{partId:u,condition:"used"},thermalPasteApplied:!0,cablesConnected:!0,hasOs:!0,isClean:!0,score:K(a,p,i),diagnosed:!0,bootedOnce:!0}}function K(e,t,s,a=1,r=1,i=null){if(!e||!t||!s)return 0;const l=c(e),p=c(t),u=c(s);if(!l||!p||!u)return 0;const f=l.specs.score*a,I=p.specs.score*r;let v=u.specs.score;if(i&&i.length>0){const b=i.filter(m=>m!==null);if(b.length>0){const m=b.map(x=>{var E;return((E=c(x.partId))==null?void 0:E.specs.score)||0}),d=Math.max(...m),C=1+(b.length-1)*.15;v=Math.round(d*C)}}return Math.round(I*.7+f*.2+v*.1)}function $e(e){const t=e.pc;let s=!0;return{requirements:e.requirements.map(r=>{let i=!1;switch(r.id){case"boot_os":i=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu&&t.cablesConnected&&t.thermalPasteApplied&&t.hasOs&&t.bootedOnce&&!Z(t);break;case"clean_os":i=t&&t.isClean&&t.hasOs;break;case"ram_capacity":if(t){let p=0;(t.rams?t.rams.filter(f=>f!==null):t.ram?[t.ram]:[]).forEach(f=>{const I=c(f.partId);I&&(p+=parseInt(I.specs.capacity.replace("GB","").replace("Go","").trim()))}),i=p>=r.target}break;case"fast_ssd":t&&(i=(t.storages?t.storages.filter(u=>u!==null):t.storage?[t.storage]:[]).some(u=>{const f=c(u.partId);if(f){const I=f.specs.storageType==="NVMe M.2",v=parseInt(f.specs.capacity.replace("TB","").replace("To","").trim())||.5;return I&&(v>=1||f.id.includes("1tb")||f.id.includes("2tb"))}return!1}));break;case"no_broken_parts":i=t&&!Z(t);break;case"cpu_tier":if(t&&t.cpu&&t.cpu.condition!=="broken"){const p=c(t.cpu.partId);i=p&&p.specs.score>=r.target}break;case"gpu_tier":if(t&&t.gpu&&t.gpu.condition!=="broken"){const p=c(t.gpu.partId);i=p&&p.specs.score>=r.target}break;case"benchmark_score":i=t&&t.score>=r.target&&t.hasOs&&!Z(t);break;case"has_all_parts":i=t&&t.case&&t.motherboard&&t.cpu&&t.cooler&&t.ram&&t.gpu&&t.storage&&t.psu;break;case"pc_budget":let l=0;Object.keys(t).forEach(p=>{if(t[p]&&t[p].partId&&t[p].condition!=="used"){const u=c(t[p].partId);u&&(l+=u.price)}}),i=l<=r.target;break}return i||(s=!1),{...r,done:i}}),allDone:s}}function Z(e){if(!e)return!0;let t=!1;return Object.keys(e).forEach(s=>{e[s]&&e[s].condition==="broken"&&(t=!0)}),t}const re={money:1500,level:1,xp:0,day:1,inventory:[],activeJobs:[],workbenches:[{id:1,pc:null,unlocked:!0},{id:2,pc:null,unlocked:!1,cost:800},{id:3,pc:null,unlocked:!1,cost:2e3}],selectedWorkbenchId:1,deliveryQueue:[],bargainBin:[],customPcs:[],completedJobsCount:0};let o={...re};function M(){return Math.random().toString(36).substring(2,9)+Date.now().toString(36)}function ee(e){return e===1?100:Math.round(100*Math.pow(1.8,e-1))}function $(){try{localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(o))}catch(e){console.error("Impossible de sauvegarder la partie :",e)}}function Ce(){try{const e=localStorage.getItem("pc_architect_tycoon_save");if(e)return o=JSON.parse(e),o={...re,...o},!0}catch(e){console.error("Erreur lors du chargement :",e)}return Me(),!1}function Me(){o=JSON.parse(JSON.stringify(re)),o.inventory.push({id:M(),partId:"storage-kingston-480gb",condition:"new",pricePaid:35},{id:M(),partId:"ram-crucial-8-ddr4",condition:"new",pricePaid:20},{id:M(),partId:"cooler-intel-stock",condition:"new",pricePaid:5}),o.activeJobs=de(1,3),pe(),$()}function ke(e){o.xp+=e;let t=ee(o.level),s=!1;for(;o.xp>=t;)o.xp-=t,o.level+=1,t=ee(o.level),s=!0;return $(),{levelUp:s,currentLevel:o.level}}function Ee(e){o.money+=e,$()}function Ae(e){return o.money>=e?(o.money-=e,$(),!0):!1}function Pe(e,t="standard"){let s=0;return e.forEach(r=>{const i=c(r);i&&(s+=i.price)}),s+=t==="express"?50:10,Ae(s)?(e.forEach(r=>{const i=t==="express"?o.day:o.day+1;o.deliveryQueue.push({partId:r,condition:"new",deliveryDay:i})}),$(),{success:!0,cost:s}):{success:!1,cost:s}}function pe(){const e=["Gaming PC pas cher","Bête de Bureautique","Ancienne Station de travail","PC Gamer HS","PC Ne Démarre Plus"],t=["case-office","case-nzxt-h5"],s=["mb-prime-h410","mb-msi-b550"],a=["cpu-i3-10100f","cpu-ryzen3-3100","cpu-i5-11400f","cpu-ryzen5-5600x"],r=["cooler-intel-stock","cooler-amd-wraith","cooler-hyper-212"],i=["gpu-gtx1650","gpu-rx580","gpu-rtx3060"],l=["ram-crucial-8-ddr4","ram-corsair-16-ddr4"],p=["storage-barracuda-1tb","storage-kingston-480gb"],u=["psu-evga-500","psu-corsair-650"];o.bargainBin=[];for(let f=0;f<2;f++){const I=s[Math.floor(Math.random()*s.length)],v=c(I),h=a.filter(P=>c(P).specs.socket===v.specs.socket),b=h[Math.floor(Math.random()*h.length)]||"cpu-ryzen3-3100",m=r[Math.floor(Math.random()*r.length)],d=i[Math.floor(Math.random()*i.length)],C=l[Math.floor(Math.random()*l.length)],x=p[Math.floor(Math.random()*p.length)],E=u[Math.floor(Math.random()*u.length)],S=t[Math.floor(Math.random()*t.length)],y=Math.floor(Math.random()*4),w={case:{partId:S,condition:"used"},motherboard:{partId:I,condition:"used"},cpu:y===0?{partId:b,condition:"broken"}:{partId:b,condition:"used"},cooler:{partId:m,condition:"used"},ram:y===3?null:{partId:C,condition:"used"},gpu:y===1?{partId:d,condition:"broken"}:{partId:d,condition:"used"},storage:{partId:x,condition:"used"},psu:y===2?{partId:E,condition:"broken"}:{partId:E,condition:"used"},thermalPasteApplied:Math.random()>.3,cablesConnected:y!==3,hasOs:y>1,isClean:Math.random()>.5,score:0,diagnosed:!1};let L=0;Object.keys(w).forEach(P=>{if(w[P]&&w[P].partId){const D=c(w[P].partId);D&&(w[P].condition==="used"&&(L+=D.price*.6),w[P].condition==="broken"&&(L+=D.price*.1))}});const J=Math.round(L*.8);o.bargainBin.push({id:"flip-"+M(),name:e[Math.floor(Math.random()*e.length)],pc:w,price:J,description:"Ordinateur d'occasion. État inconnu. Peut nécessiter des réparations."})}}function Se(){o.day+=1;const e=o.deliveryQueue.filter(a=>a.deliveryDay<=o.day);o.deliveryQueue=o.deliveryQueue.filter(a=>a.deliveryDay>o.day),e.forEach(a=>{o.inventory.push({id:M(),partId:a.partId,condition:a.condition,pricePaid:c(a.partId).price})});const t=Math.floor(Math.random()*2)+1,s=de(o.level,t);if(o.activeJobs.push(...s),o.activeJobs.filter(a=>a.status==="available").length>6){const a=o.activeJobs.filter(i=>i.status==="available"),r=a.length-6;for(let i=0;i<r;i++){const l=o.activeJobs.indexOf(a[i]);o.activeJobs.splice(l,1)}}return pe(),$(),{deliveriesCount:e.length,newJobsCount:s.length}}function q(){o.activeJobs.forEach(e=>{if(e.status==="active"||e.status==="ready"){const t=o.workbenches.find(a=>a.pc&&a.pc.orderId===e.id);t&&(e.pc=t.pc);const s=$e(e);e.requirements=s.requirements,s.allDone?e.status="ready":e.status="active"}}),$()}let W=null;function X(){const e=document.getElementById("pane-emails");e.innerHTML="";const t=document.createElement("div");t.className="emails-container";const s=document.createElement("div");s.className="glass-panel",s.innerHTML=`
        <div class="panel-header">
            <h2>Boîte de Réception</h2>
            <span class="nav-badge" style="position:static" id="email-count">${o.activeJobs.length}</span>
        </div>
        <div class="email-list" id="email-list-items"></div>
    `,t.appendChild(s);const a=document.createElement("div");a.className="glass-panel",a.id="email-detail-panel",a.innerHTML=`
        <div class="email-view-empty">
            <span style="font-size: 3rem">✉️</span>
            <p>Sélectionnez un e-mail pour lire les détails du projet.</p>
        </div>
    `,t.appendChild(a),e.appendChild(t),ue()}function ue(){const e=document.getElementById("email-list-items");if(e.innerHTML="",o.activeJobs.length===0){e.innerHTML='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun message.</div>';return}o.activeJobs.forEach(t=>{const s=document.createElement("div");s.className=`email-item ${t.status==="available"?"unread":""} ${W===t.id?"selected":""}`;let a="var(--color-cyan)",r="Nouveau";t.status==="active"?(a="var(--color-purple)",r="En Cours"):t.status==="ready"?(a="var(--color-emerald)",r="Prêt"):t.status==="on_hold"&&(a="var(--color-amber)",r="En Attente"),s.innerHTML=`
            <div class="email-sender">
                <span>${t.clientName}</span>
                <span class="status-badge" style="background:${a}20; color:${a}; font-size:0.6rem; padding:1px 4px">${r}</span>
            </div>
            <div class="email-subject">${t.subject}</div>
            <div class="email-snippet">${t.text.substring(0,45)}...</div>
        `,s.addEventListener("click",()=>{W=t.id,ue(),Be(t)}),e.appendChild(s)}),q()}function Be(e){const t=document.getElementById("email-detail-panel");let s=0;e.pc&&Object.keys(e.pc).forEach(r=>{if(e.pc[r]&&e.pc[r].partId&&e.pc[r].condition!=="used"){const i=c(e.pc[r].partId);i&&(s+=i.price)}}),t.innerHTML=`
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
                    ${e.requirements.map(r=>`
                        <li class="${r.done?"done text-emerald":"pending text-muted"}">
                            ${r.desc}
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
    `;const a=document.getElementById("job-actions-area");e.status==="available"||e.status==="on_hold"?(a.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.8rem; color:var(--text-secondary)">
                    ${e.status==="on_hold"?"Ré-attribuer et reprendre ce projet sur un établi libre :":"Attribuer ce projet à un établi libre :"}
                </p>
                <div style="display:flex; gap:10px">
                    ${o.workbenches.map(r=>{if(!r.unlocked)return"";const i=r.pc!==null;return`
                            <button class="btn-secondary" style="flex:1" ${i?"disabled":""} id="btn-assign-wb-${r.id}">
                                Établi ${r.id} ${i?"(Occupé)":"(Libre)"}
                            </button>
                        `}).join("")}
                </div>
                ${e.status==="available"?`
                <button class="btn-secondary text-crimson" style="margin-top:5px; border-color:rgba(255,0,85,0.2)" id="btn-reject-job">
                    Refuser la mission
                </button>
                `:""}
            </div>
        `,o.workbenches.forEach(r=>{!r.unlocked||r.pc!==null||document.getElementById(`btn-assign-wb-${r.id}`).addEventListener("click",()=>{Te(e,r.id)})}),e.status==="available"&&document.getElementById("btn-reject-job").addEventListener("click",()=>{Le(e)})):e.status==="active"?(a.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.85rem; color:var(--text-amber)">
                    Le PC est en cours de montage sur l'Établi. Remplissez tous les objectifs à l'établi pour facturer le client.
                </p>
                <button class="btn-secondary text-amber" style="border-color:rgba(255,170,0,0.25); width:100%" id="btn-put-hold-job">
                    Ranger le PC et mettre la mission en attente (Libérer l'établi)
                </button>
            </div>
        `,document.getElementById("btn-put-hold-job").addEventListener("click",()=>{ze(e)})):e.status==="ready"&&(a.innerHTML=`
            <button class="btn-primary glow-btn" id="btn-complete-job" style="width:100%">
                Livrer le PC et encaisser la facture (${e.reward.toFixed(2)}$)
            </button>
        `,document.getElementById("btn-complete-job").addEventListener("click",()=>{De(e)}))}function Te(e,t){const s=o.workbenches.find(a=>a.id===t);s&&s.pc===null&&(e.status="active",s.pc=e.pc,s.pc.orderId=e.id,$(),g(e.status==="on_hold"?`PC d'occasion repris sur l'Établi ${t} !`:`Projet accepté et PC placé sur l'Établi ${t} !`,"success"),X(),q())}function Le(e){o.activeJobs=o.activeJobs.filter(t=>t.id!==e.id),W=null,$(),g("Mission déclinée.","info"),X()}function ze(e){const t=o.workbenches.find(s=>s.pc&&s.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,e.status="on_hold",$(),g(`Mission "${e.subject}" mise en attente. Le PC a été rangé en réserve.`,"info"),X()}function De(e){o.workbenches.forEach(s=>{s.pc&&s.pc.orderId===e.id&&(s.pc=null)}),Ee(e.reward);const t=ke(e.xpReward);o.activeJobs=o.activeJobs.filter(s=>s.id!==e.id),W=null,o.completedJobsCount+=1,$(),t.levelUp?g(`NIVEAU SUPÉRIEUR ! Vous êtes maintenant niveau ${t.currentLevel} ! De nouvelles pièces sont disponibles en boutique !`,"success"):g(`Mission terminée ! +${e.reward}$ et +${e.xpReward} XP`,"success"),window.updateHud(),X()}let k=null,T={},_=[],G=1,F=1,H=1.2;function Re(e){k=e;const t=document.getElementById("workbench-monitor-overlay");t.style.display="block",t.innerHTML="",G=1,F=1,H=1.2,qe(t)}function R(){_.forEach(clearInterval),_=[],T={};const e=document.getElementById("workbench-monitor-overlay");e&&(e.style.display="none",e.innerHTML="")}function qe(e){const t=document.createElement("div");t.className="os-boot",e.appendChild(t);const s=c(k.cpu.partId);c(k.motherboard.partId);const a=c(k.ram.partId),r=c(k.gpu.partId),i=c(k.storage.partId);t.innerHTML=`
        <div class="os-bios-text">
            AMERICAN MEGATRENDS BIOS v4.0621
            Processeurs détectés : ${s.name} @ ${s.specs.speed}
            Mémoire RAM active : ${a.specs.capacity} @ ${a.specs.speed} (${a.specs.ramType})
            Contrôleur Graphique : ${r.name}
            Disque de démarrage : ${i.name} (${i.specs.storageType})
            
            Vérification de l'alimentation... OK
            Test de la mémoire... Succès
            Recherche du système d'exploitation...
        </div>
    `,setTimeout(()=>{t.innerHTML="",k.hasOs?me(e):(t.innerHTML=`
                <div style="text-align:center; font-family:var(--font-mono); padding:2rem">
                    <span style="font-size:3rem">⚠️</span>
                    <p style="margin-top:15px; font-weight:700">Aucun système d'exploitation trouvé.</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">Insérez la clé USB d'installation pour démarrer le programme d'installation.</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        Insérer clé USB (Installer VirtualOS)
                    </button>
                </div>
            `,document.getElementById("btn-os-install").addEventListener("click",()=>{Ge(t)}))},1500)}function Ge(e){e.innerHTML=`
        <div style="width:300px; text-align:center">
            <h3 style="margin-bottom:15px">Installation de VirtualOS v4.1</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">Formatage du disque de stockage...</p>
        </div>
    `;let t=0;const s=document.getElementById("install-progress"),a=document.getElementById("install-text"),r=["Création des partitions NTFS...","Copie des fichiers d'installation (12%)...","Copie des fichiers d'installation (45%)...","Copie des fichiers d'installation (78%)...","Configuration des pilotes de périphériques...","Finalisation des paramètres du bureau..."],i=setInterval(()=>{if(t+=10,s&&(s.style.width=`${t}%`),a&&(a.textContent=r[Math.floor(t/17)]||"Presque fini..."),t>=100){clearInterval(i),k.hasOs=!0,$(),g("VirtualOS installé avec succès !","success");const l=document.getElementById("workbench-monitor-overlay");l.innerHTML="",me(l),q(),A()}},400);_.push(i)}function me(e){e.innerHTML="";const t=document.createElement("div");t.className="os-desktop",t.innerHTML=`
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
    `,e.appendChild(t),document.getElementById("icon-sysinfo").addEventListener("click",Ne),document.getElementById("icon-scanner").addEventListener("click",fe),document.getElementById("icon-benchmark").addEventListener("click",Ve),document.getElementById("icon-overclock").addEventListener("click",_e),document.getElementById("btn-os-shutdown").addEventListener("click",()=>{window.isPcRunning=!1,R(),A()})}function Y(e,t=450,s=350){if(T[e])return T[e].style.zIndex=700,T[e];const a=document.createElement("div");return a.className="os-window",a.style.width=`${t}px`,a.style.height=`${s}px`,a.style.top=`${50+Object.keys(T).length*20}px`,a.style.left=`${50+Object.keys(T).length*20}px`,a.style.zIndex=650,a.innerHTML=`
        <div class="os-window-header">
            <span class="os-window-title">${e}</span>
            <button class="os-window-close">×</button>
        </div>
        <div class="os-window-body"></div>
    `,document.querySelector(".os-desktop").appendChild(a),T[e]=a,a.querySelector(".os-window-close").addEventListener("click",()=>{a.remove(),delete T[e]}),He(a),a}function He(e){let t=0,s=0,a=0,r=0;const i=e.querySelector(".os-window-header");i&&(i.onmousedown=l);function l(f){f=f||window.event,f.preventDefault(),a=f.clientX,r=f.clientY,document.onmouseup=u,document.onmousemove=p}function p(f){f=f||window.event,f.preventDefault(),t=a-f.clientX,s=r-f.clientY,a=f.clientX,r=f.clientY,e.style.top=e.offsetTop-s+"px",e.style.left=e.offsetLeft-t+"px"}function u(){document.onmouseup=null,document.onmousemove=null}}function Ne(){const t=Y("Informations Système",400,320).querySelector(".os-window-body"),s=c(k.cpu.partId),a=c(k.gpu.partId),r=c(k.ram.partId),i=c(k.storage.partId);let l=42;k.thermalPasteApplied||(l=95);const p=(H-1.2)*120;let u=Math.round(l+p);t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">Fiche Technique Matérielle</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${s.name} (${s.specs.cores})</p>
                <p><strong>Fréquence active :</strong> ${(parseFloat(s.specs.speed)*G).toFixed(2)} GHz</p>
                <p><strong>Température CPU :</strong> <span id="sysinfo-temp" style="font-weight:700">${u}°C</span></p>
                <p><strong>GPU :</strong> ${a.name} (${a.specs.vram})</p>
                <p><strong>Fréquence GPU :</strong> ${(parseFloat(a.specs.speed)*F).toFixed(0)} MHz</p>
                <p><strong>Mémoire Vive :</strong> ${r.specs.capacity} (${r.specs.ramType})</p>
                <p><strong>Stockage Principal :</strong> ${i.name} (${i.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                OS installé : VirtualOS Desktop Edition v4.1 build 2026.
            </div>
        </div>
    `;const f=document.getElementById("sysinfo-temp");f&&(u>=90?f.style.color="var(--color-crimson)":u>=75?f.style.color="var(--color-amber)":f.style.color="var(--color-emerald)")}function fe(){const t=Y("SecuriGuard Virus Scanner",400,300).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">Scanner de Sécurité Intégré</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">Protection résidente active. Prêt pour l'analyse.</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                Lancer une Analyse Complète
            </button>
        </div>
    `,document.getElementById("btn-start-scan").addEventListener("click",()=>{Oe(t)})}function Oe(e){e.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px">
            <div style="font-weight:600" id="scan-step-title">Analyse en cours...</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Analyse de System32...</div>
        </div>
    `;const t=document.getElementById("scan-progress");document.getElementById("scan-step-title");const s=document.getElementById("scan-file-text");let a=0;const r=setInterval(()=>{a+=10,t&&(t.style.width=`${a}%`),a===30?s.textContent="Recherche de logiciels espions...":a===60?s.textContent="Analyse des clés de registre infectées...":a===80&&(s.textContent="Examen de la mémoire vive active..."),a>=100&&(clearInterval(r),k.isClean?(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">Système Sain !</div>
                        <p style="font-size:0.75rem; color:#888">Aucun virus, cheval de troie ou logiciel publicitaire détecté.</p>
                        <button class="btn-secondary" onclick="window.closeSecuriGuard()" style="margin-top:10px; font-size:0.75rem">Fermer</button>
                    </div>
                `,window.closeSecuriGuard=()=>{const i=T["SecuriGuard Virus Scanner"];i&&(i.remove(),delete T["SecuriGuard Virus Scanner"])}):(e.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">2 Menaces Détectées !</div>
                        <p style="font-size:0.75rem; color:#aaa">Trojan.Miner.Bitcoin & Adware.PopUpMagic infectent vos registres.</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            Nettoyer et Désinfecter
                        </button>
                    </div>
                `,document.getElementById("btn-clean-viruses").addEventListener("click",()=>{k.isClean=!0,$(),g("Système nettoyé avec succès !","success"),q(),A(),fe()})))},300);_.push(r)}function Ve(){const t=Y("3D Benchmark Tool v3.0",450,360).querySelector(".os-window-body");t.innerHTML=`
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
    `,document.getElementById("btn-run-benchmark").addEventListener("click",()=>{Fe(t)})}function Fe(e){e.innerHTML=`
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
    `;const t=document.getElementById("bench-canvas"),s=t.getContext("2d");t.width=400,t.height=180;let a=[];for(let x=0;x<30;x++)a.push({x:Math.random()*t.width,y:Math.random()*t.height,speed:Math.random()*3+1,size:Math.random()*3});let r=null;function i(){s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(0,0,t.width,t.height),s.fillStyle="rgba(0, 240, 255, 0.6)",a.forEach(x=>{s.beginPath(),s.arc(x.x,x.y,x.size,0,Math.PI*2),s.fill(),x.x+=x.speed,x.x>t.width&&(x.x=0)}),r=requestAnimationFrame(i)}i();let l=0,p=0,u=42;const f=k.thermalPasteApplied?45:95,I=(H-1.2)*110,v=K(k.cpu.partId,k.gpu.partId,k.ram.partId,G,F,k.rams),h=document.getElementById("bench-progress"),b=document.getElementById("bench-live-score"),m=document.getElementById("bench-live-temp"),d=document.getElementById("bench-phase-label"),C=setInterval(()=>{l+=4,p=Math.round(l/100*v),b&&(b.textContent=p),h&&(h.style.width=`${l}%`);const x=Math.round(f+l*.3+I);if(u=Math.min(x,140),m&&(m.textContent=u,u>=90?m.style.color="var(--color-crimson)":u>=72&&(m.style.color="var(--color-amber)")),l===20?d.textContent="Test CPU : Simulation physique complexe...":l===50?d.textContent="Test GPU : Shaders d'illumination globale...":l===80&&(d.textContent="Test final combiné : Calcul des FPS..."),u>=98){clearInterval(C),cancelAnimationFrame(r),ce("WHEA_UNCORRECTABLE_ERROR","Le processeur a dépassé le seuil de sécurité thermique de 98°C.");return}const E=1.2+(G-1)*.5;if(G>1.15&&H<E){clearInterval(C),cancelAnimationFrame(r),ce("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED","Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.");return}l>=100&&(clearInterval(C),cancelAnimationFrame(r),k.score=v,$(),e.innerHTML=`
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
                    <span class="text-emerald" style="font-size:3rem">🏆</span>
                    <div>
                        <div class="stat-label">Rapport de performances</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${v} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        CPU stable à max ${u}°C.<br>
                        Tension VCore : ${H.toFixed(2)}V
                    </div>
                    <button class="btn-primary" onclick="window.closeBench()" style="font-size:0.8rem">Accepter</button>
                </div>
            `,window.closeBench=()=>{const S=T["3D Benchmark Tool v3.0"];S&&(S.remove(),delete T["3D Benchmark Tool v3.0"]),q(),A()})},250);_.push(C)}function _e(){const t=Y("Overclock-O-Matic Pro",400,340).querySelector(".os-window-body");t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">Optimisation Fréquences</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>Coefficient Fréquence CPU</span>
                    <span id="oc-cpu-mult-val">${G.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${G}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>Tension VCore (Alimentation CPU)</span>
                    <span id="oc-voltage-val">${H.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${H}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>Fréquence GPU Clock</span>
                    <span id="oc-gpu-mult-val">${F.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${F}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ⚠️ <strong>Attention :</strong> L'augmentation de la tension augmente exponentiellement la chaleur dégagée. Un overclock instable provoquera un plantage système (BSOD).
            </div>
        </div>
    `;const s=document.getElementById("oc-cpu-mult-range"),a=document.getElementById("oc-cpu-mult-val");s.addEventListener("input",u=>{G=parseFloat(u.target.value),a.textContent=`${G.toFixed(2)}x`});const r=document.getElementById("oc-voltage-range"),i=document.getElementById("oc-voltage-val");r.addEventListener("input",u=>{H=parseFloat(u.target.value),i.textContent=`${H.toFixed(2)} V`});const l=document.getElementById("oc-gpu-mult-range"),p=document.getElementById("oc-gpu-mult-val");l.addEventListener("input",u=>{F=parseFloat(u.target.value),p.textContent=`${F.toFixed(2)}x`})}function ce(e,t){_.forEach(clearInterval),_=[],T={},window.isPcRunning=!1;const s=document.getElementById("workbench-monitor-overlay");s.innerHTML=`
        <div class="os-bsod">
            <div class="os-bsod-sad">:(</div>
            <div class="os-bsod-title">Votre PC virtuel a rencontré un problème et doit redémarrer. Nous collectons simplement quelques informations relatives aux erreurs.</div>
            
            <div class="os-bsod-details">
                Code d'arrêt système : <strong style="color:#ffef56">${e}</strong><br>
                Rapport technique : ${t}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">Cliquez n'importe où pour forcer l'extinction et retourner à l'établi.</span>
            </div>
        </div>
    `,s.querySelector(".os-bsod").addEventListener("click",()=>{R(),A()})}let n=null;function A(){var f,I;const e=document.getElementById("pane-workbench"),t=o.workbenches.find(v=>v.id===o.selectedWorkbenchId);n=t?t.pc:null;const s=document.getElementById("workbench-monitor-overlay"),a=s&&s.style.display!=="none"&&window.isPcRunning;if(a||(e.innerHTML=""),n){const v=(f=n.motherboard)==null?void 0:f.partId,h=j(v);if(!n.rams)n.rams=new Array(h.ram).fill(null),n.ram&&(n.rams[0]=n.ram);else if(n.rams.length!==h.ram){const m=n.rams;n.rams=new Array(h.ram).fill(null);for(let d=0;d<Math.min(m.length,h.ram);d++)n.rams[d]=m[d];for(let d=h.ram;d<m.length;d++)m[d]&&o.inventory.push({id:M(),partId:m[d].partId,condition:m[d].condition,pricePaid:c(m[d].partId).price})}const b=h.nvme+h.sata;if(n.storages){if(n.storages.length!==b){const m=n.storages;n.storages=new Array(b).fill(null);for(let d=0;d<Math.min(m.length,b);d++)n.storages[d]=m[d];for(let d=b;d<m.length;d++)m[d]&&o.inventory.push({id:M(),partId:m[d].partId,condition:m[d].condition,pricePaid:c(m[d].partId).price})}}else if(n.storages=new Array(b).fill(null),n.storage){const m=c(n.storage.partId);m&&m.specs.storageType==="NVMe M.2"&&h.nvme>0?n.storages[0]=n.storage:n.storages[h.nvme]=n.storage}for(let m=0;m<b;m++){const d=n.storages[m];if(d){const C=c(d.partId);if(C){const x=C.specs.storageType==="NVMe M.2",E=m<h.nvme;if(E&&!x){const S=n.storages.indexOf(null,h.nvme);S!==-1&&(n.storages[S]=d,n.storages[m]=null)}else if(!E&&x){const S=n.storages.indexOf(null,0);S!==-1&&S<h.nvme&&(n.storages[S]=d,n.storages[m]=null)}}}}for(let m=0;m<h.ram;m++){const d=n.rams[m];if(d&&!d.kitId){const C=c(d.partId);if(C&&C.name.includes("(2x")){d.kitId="kit-"+M();const E=n.rams.findIndex((S,y)=>y!==m&&S===null);E!==-1&&(n.rams[E]={partId:d.partId,condition:d.condition,kitId:d.kitId})}}}n.ram=n.rams.find(m=>m!==null)||null,n.storage=n.storages.find(m=>m!==null)||null}const r=document.createElement("div");r.className="workbench-grid";const i=document.createElement("div");if(i.className="workbench-case-view",!n)i.innerHTML=`
            <div style="text-align:center; color:var(--text-muted)">
                <span style="font-size:4rem">🔧</span>
                <h3 style="margin-top:15px; color:#fff">Établi ${o.selectedWorkbenchId} Vide</h3>
                <p style="font-size:0.85rem; margin-top:5px; max-width:300px">Sélectionnez une commande dans vos e-mails ou importez un ordinateur d'occasion pour commencer.</p>
                <div style="margin-top:20px" id="workbench-import-area"></div>
            </div>
        `,r.appendChild(i);else{const v=j((I=n.motherboard)==null?void 0:I.partId);i.innerHTML=`
            <div class="case-schematic">
                <!-- Case Slot -->
                <div class="case-slot ${n.case?"filled":""}" id="slot-case" data-slot="case" style="top: 15px; left: 40px; width: 420px; height: 45px; z-index: 5;">
                    <span class="case-slot-label">Boîtier PC</span>
                    <span class="case-slot-partname">${n.case?c(n.case.partId).name:"Aucun Boîtier (Composants à nu)"}</span>
                </div>

                <!-- Motherboard Slot -->
                <div class="case-slot ${n.motherboard?"filled":""}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">Carte Mère</span>
                    <span class="case-slot-partname">${n.motherboard?c(n.motherboard.partId).name:"Emplacement Vide"}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area, stacked, non-overlapping) -->
                ${n.motherboard?`
                <div class="case-slot ${n.cpu?"filled":""}" id="slot-cpu" data-slot="cpu" style="top: 80px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">CPU</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${n.cpu?c(n.cpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- CPU Cooler Slot (Stacked vertically below CPU, non-overlapping) -->
                ${n.cpu?`
                <div class="case-slot ${n.cooler?"filled":""}" id="slot-cooler" data-slot="cooler" style="top: 155px; left: 145px; width: 110px; height: 70px; z-index: 10;">
                    <span class="case-slot-label">Refroidisseur</span>
                    <span class="case-slot-partname" style="font-size: 0.7rem; line-height: 1.2;">${n.cooler?c(n.cooler.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- Multi-slot RAM (DIMM slots to the right of CPU) -->
                ${n.motherboard?n.rams.map((h,b)=>`
                        <div class="case-slot ram-slot ${h?"filled":""}" id="slot-ram-${b}" data-slot="ram" data-index="${b}" title="${h?c(h.partId).name:"Slot RAM "+(b+1)}" style="top: 80px; left: ${265+b*25}px; width: 20px; height: 145px; z-index: 10;">
                            <span class="case-slot-label" style="font-size: 0.55rem; line-height: 1;">R${b+1}</span>
                        </div>
                    `).join(""):""}

                <!-- GPU Slot (PCIe slot) -->
                ${n.motherboard?`
                <div class="case-slot ${n.gpu?"filled":""}" id="slot-gpu" data-slot="gpu" style="top: 235px; left: 115px; width: 250px; height: 75px; z-index: 12;">
                    <span class="case-slot-label">Carte Graphique</span>
                    <span class="case-slot-partname">${n.gpu?c(n.gpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- Power Supply Slot -->
                <div class="case-slot ${n.psu?"filled":""}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">Alimentation (PSU)</span>
                    <span class="case-slot-partname">${n.psu?c(n.psu.partId).name:"Emplacement Vide"}</span>
                </div>

                <!-- Multi-slot Storage: NVMe on Motherboard -->
                ${n.motherboard?new Array(v.nvme).fill(null).map((h,b)=>{const m=n.storages[b];return`
                            <div class="case-slot nvme-slot ${m?"filled":""}" id="slot-nvme-${b}" data-slot="storage" data-index="${b}" title="${m?c(m.partId).name:"Slot M.2 NVMe "+(b+1)}" style="top: ${155+b*18}px; left: 60px; width: 80px; height: 15px; z-index: 10; font-size: 0.55rem; padding: 0;">
                                <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">M.2_${b+1}</span>
                            </div>
                        `}).join(""):""}

                <!-- Multi-slot Storage: SATA Drive Bays in Case bottom -->
                ${new Array(v.sata).fill(null).map((h,b)=>{const m=v.nvme+b,d=n.storages[m],C=b%3,x=Math.floor(b/3);return`
                        <div class="case-slot sata-slot ${d?"filled":""}" id="slot-sata-${b}" data-slot="storage" data-index="${m}" title="${d?c(d.partId).name:"Slot SATA "+(b+1)}" style="top: ${380+x*45}px; left: ${40+C*55}px; width: 50px; height: 38px; font-size: 0.55rem; padding: 2px 0;">
                            <span class="case-slot-label" style="font-size: 0.5rem; line-height: 1;">SATA_${b+1}</span>
                        </div>
                    `}).join("")}
            </div>
            
            <!-- Virtual Screen overlay -->
            <div id="workbench-monitor-overlay" style="display:none"></div>
        `,r.appendChild(i)}const l=document.createElement("div");l.className="workbench-sidebar";let p="";if(o.workbenches.forEach(v=>{v.unlocked?p+=`
                <div class="pc-tab ${o.selectedWorkbenchId===v.id?"active":""}" id="tab-wb-${v.id}">
                    Établi ${v.id} ${v.pc?"🛠️":""}
                </div>
            `:p+=`<div class="pc-tab text-muted" style="opacity:0.5; cursor:not-allowed">🔒 Établi ${v.id}</div>`}),l.innerHTML=`
        <div class="glass-panel workbench-details-card">
            <div class="stat-label" style="margin-bottom:8px">Choisir mon établi</div>
            <div class="pc-selector-row">${p}</div>
        </div>
    `,n){const v=o.activeJobs.find(y=>y.id===n.orderId);if(v){const y=document.createElement("div");y.className="glass-panel workbench-details-card",y.style.border="1px solid rgba(0, 240, 255, 0.25)",y.style.boxShadow="inset 0 0 10px rgba(0, 240, 255, 0.05)",y.style.marginBottom="8px",y.innerHTML=`
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--color-cyan); text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid var(--border-color); padding-bottom: 6px; margin-bottom: 8px;">
                    🎯 Objectifs de la Mission
                </div>
                <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 8px; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${v.subject}">
                    ${v.subject}
                </div>
                <ul class="job-reqs" style="display: flex; flex-direction: column; gap: 5px; list-style: none; padding: 0;">
                    ${v.requirements.map(w=>`
                        <li class="${w.done?"done text-emerald":"pending text-muted"}" style="font-size: 0.8rem; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 0.9rem;">${w.done?"✅":"○"}</span>
                            <span style="${w.done?"text-decoration: line-through; opacity: 0.85;":""}">${w.desc}</span>
                        </li>
                    `).join("")}
                </ul>
            `,l.appendChild(y)}const h=document.createElement("div");h.className="glass-panel workbench-details-card",h.style.flex="1";let b=0,m=0;n.cpu&&(b+=c(n.cpu.partId).specs.power),n.gpu&&(b+=c(n.gpu.partId).specs.power),n.psu&&(m=c(n.psu.partId).specs.wattage);const d=m>=b;let C="Manquante";if(n.rams&&n.rams.some(y=>y)){const y=n.rams.filter(P=>P);let w=0,L="";const J=new Set;y.forEach(P=>{if(P.kitId){if(J.has(P.kitId))return;J.add(P.kitId)}const D=c(P.partId);D&&(w+=parseInt(D.specs.capacity.replace("GB","").replace("Go","").trim()),L=D.specs.ramType)}),C=`${w} Go ${L} (${y.length}/${n.rams.length} Slots)`}let x="Manquant";if(n.storages&&n.storages.some(y=>y)){const y=n.storages.filter(D=>D),w=y.filter(D=>c(D.partId).specs.storageType==="NVMe M.2").length,L=y.length-w;let J=w>0?`${w}x NVMe`:"",P=L>0?`${L}x SATA`:"";x=[J,P].filter(Boolean).join(", ")+` (${y.length}/${n.storages.length} Disques)`}let E=0;if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(y=>{if(n[y]&&n[y].partId){const w=c(n[y].partId);w&&(E+=w.price)}}),n.rams){const y=new Set;n.rams.forEach(w=>{if(w&&w.partId){if(w.kitId){if(y.has(w.kitId))return;y.add(w.kitId)}const L=c(w.partId);L&&(E+=L.price)}})}n.storages&&n.storages.forEach(y=>{if(y&&y.partId){const w=c(y.partId);w&&(E+=w.price)}}),h.innerHTML=`
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>Configuration Actuelle</span>
                <span class="status-badge ${window.isPcRunning?"on":"off"}">${window.isPcRunning?"En marche":"Éteint"}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">Boîtier</span><span class="pc-spec-val">${n.case?c(n.case.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Carte Mère</span><span class="pc-spec-val">${n.motherboard?c(n.motherboard.partId).name:"Manquante"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Processeur</span><span class="pc-spec-val">${n.cpu?c(n.cpu.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Ventirad</span><span class="pc-spec-val">${n.cooler?c(n.cooler.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Mémoire RAM</span><span class="pc-spec-val" title="${n.rams?n.rams.filter(y=>y).map(y=>c(y.partId).name).join(", "):""}">${C}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Graphismes</span><span class="pc-spec-val">${n.gpu?c(n.gpu.partId).name:"Manquants"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Stockage</span><span class="pc-spec-val" title="${n.storages?n.storages.filter(y=>y).map(y=>c(y.partId).name).join(", "):""}">${x}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Alimentation</span><span class="pc-spec-val">${n.psu?`${c(n.psu.partId).name} (${m}W)`:"Manquante"}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>Consommation estimée :</span>
                    <span class="${d?"text-emerald":"text-crimson"}" style="font-weight:600">${b}W / ${m}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Pâte thermique :</span>
                    <span class="${n.thermalPasteApplied?"text-emerald":"text-crimson"}">${n.thermalPasteApplied?"Appliquée ✓":"Manquante ✗"}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Câbles d'alimentation :</span>
                    <span class="${n.cablesConnected?"text-emerald":"text-crimson"}">${n.cablesConnected?"Branchés ✓":"Débranchés ✗"}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px; font-weight: 600; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 4px; margin-top: 8px;">
                    <span class="text-cyan">Coût total des pièces :</span>
                    <span class="text-emerald font-mono">${E.toFixed(2)}$</span>
                </div>
            </div>

            <div class="workbench-actions-box">
                <button class="btn-secondary" id="btn-toggle-paste" style="width:100%">
                    ${n.thermalPasteApplied?"Nettoyer la pâte thermique":"Appliquer pâte thermique"}
                </button>
                <button class="btn-secondary" id="btn-toggle-cables" style="width:100%">
                    ${n.cablesConnected?"Débrancher les câbles":"Brancher les câbles"}
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

                ${v?`
                    <button class="btn-secondary text-amber" id="btn-put-hold-workbench" style="width:100%; border-color:rgba(255,170,0,0.25); margin-top:5px; font-weight: 500;">
                        📦 Ranger le PC (Mettre en attente)
                    </button>
                `:""}

                ${v?"":`
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
        `,l.appendChild(h)}const u=e.querySelector(".workbench-sidebar");if(a&&u?u.innerHTML=l.innerHTML:(r.appendChild(i),r.appendChild(l),e.appendChild(r)),o.workbenches.forEach(v=>{v.unlocked&&document.getElementById(`tab-wb-${v.id}`).addEventListener("click",()=>{o.selectedWorkbenchId=v.id,window.isPcRunning=!1,R(),$(),A()})}),n){document.getElementById("btn-toggle-paste").addEventListener("click",()=>{n.thermalPasteApplied=!n.thermalPasteApplied,$(),q(),A()}),document.getElementById("btn-toggle-cables").addEventListener("click",()=>{n.cablesConnected=!n.cablesConnected,$(),q(),A()}),document.getElementById("btn-power-pc").addEventListener("click",()=>{Ue()}),a||e.querySelectorAll(".case-schematic .case-slot").forEach(h=>{h.addEventListener("click",b=>{const m=h.getAttribute("data-slot"),d=h.getAttribute("data-index");Xe(m,d!==null?parseInt(d):null)})});const v=o.activeJobs.find(h=>h.id===n.orderId);v?document.getElementById("btn-put-hold-workbench").addEventListener("click",()=>{Ye(v)}):(document.getElementById("btn-sell-flip-pc").addEventListener("click",()=>{We()}),document.getElementById("btn-scrap-pc").addEventListener("click",()=>{Ke()}))}else Je()}function Je(){const e=document.getElementById("workbench-import-area");if(!e)return;const t=o.inventory.filter(a=>a.type==="pc_flip");let s="";t.length>0?s=`
            <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px">
                <span class="stat-label">Importer un PC d'occasion</span>
                <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                    ${t.map(a=>`<option value="${a.id}">${a.name} (${a.pricePaid}$)</option>`).join("")}
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
    `,t.length>0&&document.getElementById("btn-import-pc-action").addEventListener("click",()=>{const a=document.getElementById("select-import-pc").value,r=o.inventory.find(i=>i.id===a);if(r){const i=o.workbenches.find(l=>l.id===o.selectedWorkbenchId);i.pc=r.pc,i.pc.name=r.name,i.pc.isCustom=!0,o.inventory=o.inventory.filter(l=>l.id!==a),$(),g("PC d'occasion importé sur l'établi !","success"),A()}}),document.getElementById("btn-create-scratch-build").addEventListener("click",()=>{const a=o.workbenches.find(r=>r.id===o.selectedWorkbenchId);a.pc={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!0},$(),g("Boîtier vide placé sur l'établi !","info"),A()})}function Ue(){if(window.isPcRunning)window.isPcRunning=!1,R(),A(),g("Ordinateur éteint.","info");else{if(!n.psu){g("Boot échoué : Aucune alimentation installée !","error");return}if(!n.motherboard){g("Boot échoué : Aucune carte mère installée !","error");return}if(!n.cpu){g("Boot échoué : Aucun processeur installé !","error");return}if(!n.cooler){g("Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !","error");return}if(!n.ram){g("Boot échoué : Aucune mémoire vive (RAM) !","error");return}if(!n.gpu){g("Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !","error");return}if(!n.storage){g("Boot échoué : Aucun disque de stockage détecté !","error");return}if(!n.cablesConnected){g("Boot échoué : Les câbles d'alimentation ne sont pas branchés !","error");return}if(n.psu.condition==="broken"){g("Boot échoué : L'alimentation est défectueuse. Impossible d'allumer la machine !","error");return}if(n.motherboard.condition==="broken"){g("Boot échoué : La carte mère est défectueuse (Court-circuit sur le PCB) !","error");return}if(n.cpu.condition==="broken"){g("Boot échoué : Écran noir. Le processeur (CPU) est défectueux ou grillé !","error");return}if(n.rams.some(s=>s&&s.condition==="broken")){g("Boot échoué : Erreur de mémoire vive (RAM). Une ou plusieurs barrettes sont défectueuses !","error");return}if(n.gpu.condition==="broken"){g("Boot échoué : Aucun signal d'affichage. La carte graphique (GPU) est défectueuse !","error");return}if(n.storages.some(s=>s&&s.condition==="broken")){g("Boot échoué : Erreur de lecture de disque. Le périphérique de stockage est défectueux !","error");return}let e=0;if(n.cpu&&(e+=c(n.cpu.partId).specs.power),n.gpu&&(e+=c(n.gpu.partId).specs.power),c(n.psu.partId).specs.wattage<e){g("Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.","error");return}window.isPcRunning=!0,n.bootedOnce=!0,$(),q(),A(),g("Boot en cours... Signal vidéo détecté !","success"),Re(n)}}function Xe(e,t=null){const s=e==="ram"||e==="storage"?n[e+"s"][t]:n[e],a=document.createElement("div");a.className="modal-overlay",a.id="part-drawer-modal";const r=document.createElement("div");r.className="modal-content";const i=document.createElement("div");i.className="panel-header";const l=t!==null?`${e.toUpperCase()} (Slot ${t+1})`:e.toUpperCase();i.innerHTML=`
        <h2>Sélectionner un composant : ${l}</h2>
        <button class="os-window-close" id="btn-close-drawer">×</button>
    `;const p=document.createElement("div");p.className="modal-body";const u=o.inventory.filter(I=>{const v=c(I.partId);return v&&v.type===e});let f="";s&&(f+=`
            <div style="background:rgba(255,0,85,0.05); padding:1rem; border-radius:6px; border:1px solid rgba(255,0,85,0.2); margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center">
                <div>
                    <span class="stat-label">Composant installé</span>
                    <div style="font-weight:600; font-size:0.9rem">${c(s.partId).name} (${s.condition==="used"?"Occasion":s.condition==="broken"?"En Panne":"Neuf"})</div>
                </div>
                <button class="btn-secondary text-crimson" id="btn-uninstall-part">
                    Retirer la pièce
                </button>
            </div>
        `),u.length===0?f+='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun composant de ce type disponible dans votre inventaire.</div>':f+=`
            <div style="font-weight:700; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px">Pièces en stock :</div>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${u.map(I=>`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center">
                            <div>
                                <div style="font-weight:600; font-size:0.85rem">${c(I.partId).name}</div>
                                <div style="font-size:0.7rem; color:var(--text-secondary)">État : ${I.condition==="new"?"Neuf":I.condition==="used"?"Occasion":"En Panne"}</div>
                            </div>
                            <button class="btn-buy" id="btn-install-part-${I.id}">Installer</button>
                        </div>
                    `).join("")}
            </div>
        `,p.innerHTML=f,r.appendChild(i),r.appendChild(p),a.appendChild(r),document.body.appendChild(a),document.getElementById("btn-close-drawer").addEventListener("click",()=>{document.body.removeChild(a)}),s&&document.getElementById("btn-uninstall-part").addEventListener("click",()=>{te(e,t),document.body.removeChild(a)}),u.forEach(I=>{document.getElementById(`btn-install-part-${I.id}`).addEventListener("click",()=>{je(e,I,t),document.body.removeChild(a)})})}function je(e,t,s=null){const a=c(t.partId);if(e==="cpu"){if(n.motherboard){const r=c(n.motherboard.partId);if(r.specs.socket!==a.specs.socket){g(`Incompatible : Socket de carte mère (${r.specs.socket}) incompatible avec le processeur (${a.specs.socket}) !`,"error");return}}}else if(e==="motherboard"){if(n.cpu){const r=c(n.cpu.partId);if(r.specs.socket!==a.specs.socket){g(`Incompatible : Le processeur déjà présent (${r.specs.socket}) ne rentre pas sur ce socket (${a.specs.socket}) !`,"error");return}}if(n.rams&&n.rams.some(r=>r)){const r=n.rams.find(l=>l),i=c(r.partId);if(i.specs.ramType!==a.specs.ramType){g(`Incompatible : Type de RAM de la carte mère (${a.specs.ramType}) incompatible avec la RAM installée (${i.specs.ramType}) !`,"error");return}}}else if(e==="cooler"){if(n.cpu){const r=c(n.cpu.partId);if(!a.specs.socket.includes(r.specs.socket)){g(`Incompatible : Le système d'accroche du ventirad ne supporte pas le socket ${r.specs.socket} !`,"error");return}}}else if(e==="ram"){if(n.motherboard){const i=c(n.motherboard.partId);if(i.specs.ramType!==a.specs.ramType){g(`Incompatible : La carte mère requiert de la mémoire ${i.specs.ramType} (${a.specs.ramType} fournie) !`,"error");return}}if(a.name.includes("(2x")&&n.rams.findIndex((l,p)=>p!==s&&l===null)===-1){g("Incompatible : Ce kit de mémoire (2 barrettes) nécessite au moins 2 emplacements RAM libres sur la carte mère !","error");return}}else if(e==="storage"){if(n.motherboard){const r=a.specs.storageType==="NVMe M.2",i=j(n.motherboard.partId);if(s<i.nvme){if(!r){g("Incompatible : Cet emplacement M.2 requiert un SSD de type NVMe M.2 (disque de type SATA/HDD fourni) !","error");return}}else if(r){g("Incompatible : Les emplacements SATA ne supportent pas les disques de type NVMe M.2 (requiert un HDD ou SSD SATA) !","error");return}}else if(a.specs.storageType==="NVMe M.2"){g("Incompatible : Installez d'abord une carte mère pour utiliser un slot M.2 NVMe !","error");return}}if(e==="ram"||e==="storage"){if(n[e+"s"][s]&&te(e,s),e==="ram"&&a.name.includes("(2x")){const r="kit-"+M(),i=n.rams.findIndex((l,p)=>p!==s&&l===null);n.rams[s]={partId:t.partId,condition:t.condition,kitId:r},n.rams[i]={partId:t.partId,condition:t.condition,kitId:r}}else n[e+"s"][s]={partId:t.partId,condition:t.condition};e==="ram"?n.ram=n.rams.find(r=>r!==null)||null:n.storage=n.storages.find(r=>r!==null)||null}else n[e]&&te(e),n[e]={partId:t.partId,condition:t.condition};o.inventory=o.inventory.filter(r=>r.id!==t.id),n.cpu&&n.gpu&&n.ram?n.score=K(n.cpu.partId,n.gpu.partId,n.ram.partId,1,1,n.rams):n.score=0,$(),q(),A(),g(`${a.name} installé !`,"success")}function te(e,t=null){const s=e==="ram"||e==="storage"?n[e+"s"][t]:n[e];if(s){if(e==="ram"||e==="storage")e==="ram"&&s.kitId?(o.inventory.push({id:M(),partId:s.partId,condition:s.condition,pricePaid:c(s.partId).price}),n.rams.forEach((a,r)=>{a&&a.kitId===s.kitId&&(n.rams[r]=null)}),n.ram=n.rams.find(a=>a!==null)||null):(o.inventory.push({id:M(),partId:s.partId,condition:s.condition,pricePaid:c(s.partId).price}),n[e+"s"][t]=null,e==="ram"?n.ram=n.rams.find(a=>a!==null)||null:(n.storage=n.storages.find(a=>a!==null)||null,n.storage||(window.isPcRunning=!1,R())));else{if(o.inventory.push({id:M(),partId:s.partId,condition:s.condition,pricePaid:c(s.partId).price}),n[e]=null,(e==="motherboard"||e==="cpu")&&(window.isPcRunning=!1,R()),e==="motherboard"){if(["cpu","cooler","gpu"].forEach(r=>{n[r]&&(o.inventory.push({id:M(),partId:n[r].partId,condition:n[r].condition,pricePaid:c(n[r].partId).price}),n[r]=null)}),n.rams){const r=new Set;n.rams.forEach(i=>{if(i){if(i.kitId){if(r.has(i.kitId))return;r.add(i.kitId)}o.inventory.push({id:M(),partId:i.partId,condition:i.condition,pricePaid:c(i.partId).price})}}),n.rams=[],n.ram=null}if(n.storages){const r=j(s.partId);for(let i=0;i<r.nvme;i++)n.storages[i]&&(o.inventory.push({id:M(),partId:n.storages[i].partId,condition:n.storages[i].condition,pricePaid:c(n.storages[i].partId).price}),n.storages[i]=null);n.storage=n.storages.find(i=>i!==null)||null,n.storage||(window.isPcRunning=!1,R())}}e==="cpu"&&n.cooler&&(o.inventory.push({id:M(),partId:n.cooler.partId,condition:n.cooler.condition,pricePaid:c(n.cooler.partId).price}),n.cooler=null)}n.cpu&&n.gpu&&n.ram?n.score=K(n.cpu.partId,n.gpu.partId,n.ram.partId,1,1,n.rams):n.score=0,$(),q(),A(),g("Composant démonté et replacé en inventaire.","info")}}function We(){const e=document.getElementById("flip-build-name").value.trim(),t=parseFloat(document.getElementById("flip-build-price").value);if(!e){g("Veuillez donner un nom à votre PC !","error");return}if(isNaN(t)||t<=0){g("Veuillez saisir un prix valide supérieur à 0 !","error");return}if(!n.case||!n.motherboard||!n.cpu||!n.cooler||!n.ram||!n.gpu||!n.storage||!n.psu||!n.hasOs||!n.cablesConnected||!n.thermalPasteApplied){g("Vente impossible : Le PC n'est pas opérationnel ou des pièces manquent !","error");return}o.customPcs.push({id:"listed-"+M(),name:e,price:Math.round(t),pc:JSON.parse(JSON.stringify(n))});const s=o.workbenches.find(a=>a.id===o.selectedWorkbenchId);s.pc=null,n=null,window.isPcRunning=!1,R(),$(),g(`Ordinateur "${e}" mis en vente pour ${Math.round(t)}$ !`,"success"),A()}function Ke(){if(["case","motherboard","cpu","cooler","gpu","psu"].forEach(s=>{n[s]&&o.inventory.push({id:M(),partId:n[s].partId,condition:n[s].condition,pricePaid:c(n[s].partId).price})}),n.rams){const s=new Set;n.rams.forEach(a=>{if(a){if(a.kitId){if(s.has(a.kitId))return;s.add(a.kitId)}o.inventory.push({id:M(),partId:a.partId,condition:a.condition,pricePaid:c(a.partId).price})}})}n.storages&&n.storages.forEach(s=>{s&&o.inventory.push({id:M(),partId:s.partId,condition:s.condition,pricePaid:c(s.partId).price})});const t=o.workbenches.find(s=>s.id===o.selectedWorkbenchId);t.pc=null,n=null,window.isPcRunning=!1,R(),$(),g("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !","info"),A()}function Ye(e){const t=o.workbenches.find(s=>s.pc&&s.pc.orderId===e.id);t&&(e.pc=t.pc,t.pc=null),window.isPcRunning=!1,R(),e.status="on_hold",$(),g(`Mission "${e.subject}" mise en attente. Le PC a été rangé en réserve.`,"info"),A()}let B="cpu",N=[];function Qe(){const e=document.getElementById("pane-shop");e.innerHTML="";const t=document.createElement("div");t.className="shop-layout";const s=document.createElement("div");s.className="glass-panel shop-filters",s.innerHTML=`
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
    `;const a=document.createElement("div");a.style.display="grid",a.style.gridTemplateColumns="1fr 280px",a.style.gap="1.5rem",a.style.height="100%",a.style.minHeight="0";const r=document.createElement("div");r.className="glass-panel",r.style.overflow="hidden",r.style.display="flex",r.style.flexDirection="column",r.innerHTML=`
        <div class="panel-header">
            <h2 id="catalog-title">${le()}</h2>
        </div>
        <div class="shop-catalog" id="shop-catalog-items"></div>
    `;const i=document.createElement("div");i.className="glass-panel",i.style.padding="1rem",i.style.display="flex",i.style.flexDirection="column",i.id="shop-cart-panel",a.appendChild(r),a.appendChild(i),t.appendChild(s),t.appendChild(a),e.appendChild(t),s.querySelectorAll(".filter-btn").forEach(l=>{l.addEventListener("click",()=>{B=l.getAttribute("data-cat"),s.querySelectorAll(".filter-btn").forEach(p=>p.classList.remove("active")),l.classList.add("active"),document.getElementById("catalog-title").textContent=le(),se()})}),se(),Q()}function O(e){return U.filter(t=>t.type===e).length}function le(){switch(B){case"cpu":return"Processeurs (Intel & AMD)";case"motherboard":return"Cartes Mères";case"gpu":return"Cartes Graphiques (NVIDIA RTX & AMD RX)";case"ram":return"Mémoire Vive (DDR4 / DDR5)";case"storage":return"Disques Durs & SSD (NVMe / SATA)";case"psu":return"Alimentations Énergétiques";case"cooler":return"Ventirads & Watercoolings AIO";case"case":return"Boîtiers PC Desktop";case"upgrades":return"Agrandir mon Magasin";default:return"Boutique d'informatique"}}function se(){const e=document.getElementById("shop-catalog-items");if(e.innerHTML="",B==="upgrades"){Ze(e);return}U.filter(s=>s.type===B).forEach(s=>{const a=o.level<s.level,r=document.createElement("div");r.className="part-card";let i="";s.type==="cpu"?i=`
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
            `),r.innerHTML=`
            <div>
                <div class="part-category">${s.brand}</div>
                <div class="part-name">${s.name}</div>
                <div class="part-specs">${i}</div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price">${s.price.toFixed(2)}$</div>
                ${a?`<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">Niveau ${s.level}</button>`:`<button class="btn-buy" id="btn-add-${s.id}">Ajouter</button>`}
            </div>
        `,e.appendChild(r),a||document.getElementById(`btn-add-${s.id}`).addEventListener("click",()=>{tt(s.id)})})}function Ze(e){o.workbenches.forEach(t=>{if(t.id===1)return;const s=document.createElement("div");s.className="part-card",s.innerHTML=`
            <div>
                <div class="part-category">Atelier</div>
                <div class="part-name">Établi de Montage n°${t.id}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">Permet de travailler sur un PC supplémentaire en simultané.</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${t.cost.toFixed(2)}$</div>
                ${t.unlocked?'<button class="btn-buy" disabled>Acheté</button>':`<button class="btn-buy" id="btn-buy-wb-${t.id}" ${o.money<t.cost?"disabled":""}>Acheter</button>`}
            </div>
        `,e.appendChild(s),t.unlocked||document.getElementById(`btn-buy-wb-${t.id}`).addEventListener("click",()=>{et(t)})})}function et(e){o.money>=e.cost&&(o.money-=e.cost,e.unlocked=!0,$(),g(`Établi ${e.id} débloqué !`,"success"),window.updateHud(),se())}function tt(e){N.push(e),Q(),g("Pièce ajoutée au panier.","info")}function st(e){N.splice(e,1),Q()}function Q(){const e=document.getElementById("shop-cart-panel");if(!e)return;if(N.length===0){e.innerHTML=`
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">Votre panier est vide</p>
            </div>
        `;return}let t=0;const s=N.map((a,r)=>{const i=U.find(l=>l.id===a);return i?(t+=i.price,`
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${i.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${i.price}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${r})">×</button>
                </div>
            </div>
        `):""}).join("");e.innerHTML=`
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat (${N.length})</div>
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
    `,document.getElementById("btn-checkout").addEventListener("click",nt),window.removeCartItem=a=>{st(a)}}function nt(){if(N.length===0)return;const e=document.getElementById("shipping-method").value,a=N.reduce((r,i)=>{var l;return r+(((l=U.find(p=>p.id===i))==null?void 0:l.price)||0)},0)+(e==="express"?50:10);o.money>=a?Pe(N,e).success&&(N=[],Q(),window.updateHud(),g(e==="express"?"Commande livrée instantanément par Express !":"Commande passée ! Vos pièces arriveront demain matin.","success")):g("Fonds insuffisants pour finaliser la commande.","error")}let z="all";function ie(){const e=document.getElementById("pane-inventory");e.innerHTML="";const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem",t.style.height="100%";const s=document.createElement("div");s.className="flex-row-justify",s.innerHTML=`
        <h2 style="font-size:1.3rem; font-weight:700">Mon Stock de Pièces Detachées</h2>
        <div style="display:flex; gap:8px" id="inventory-cat-buttons">
            <button class="btn-secondary ${z==="all"?"text-cyan":""}" data-cat="all">Tout</button>
            <button class="btn-secondary ${z==="cpu"?"text-cyan":""}" data-cat="cpu">💾 CPU</button>
            <button class="btn-secondary ${z==="motherboard"?"text-cyan":""}" data-cat="motherboard">🔌 MB</button>
            <button class="btn-secondary ${z==="gpu"?"text-cyan":""}" data-cat="gpu">🎮 GPU</button>
            <button class="btn-secondary ${z==="ram"?"text-cyan":""}" data-cat="ram">⚡ RAM</button>
            <button class="btn-secondary ${z==="storage"?"text-cyan":""}" data-cat="storage">💽 Stock</button>
            <button class="btn-secondary ${z==="psu"?"text-cyan":""}" data-cat="psu">🔌 PSU</button>
            <button class="btn-secondary ${z==="cooler"?"text-cyan":""}" data-cat="cooler">❄️ Vent</button>
            <button class="btn-secondary ${z==="case"?"text-cyan":""}" data-cat="case">🖥️ Cases</button>
        </div>
    `;const a=document.createElement("div");a.className="inventory-grid",a.id="inventory-items-grid",t.appendChild(s),t.appendChild(a),e.appendChild(t),s.querySelector("#inventory-cat-buttons").querySelectorAll("button").forEach(r=>{r.addEventListener("click",()=>{z=r.getAttribute("data-cat"),ie()})}),at()}function at(){const e=document.getElementById("inventory-items-grid");e.innerHTML="";const t=o.inventory.filter(s=>{if(z==="all")return!0;const a=c(s.partId);return a&&a.type===z});if(t.length===0){e.innerHTML=`
            <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--text-muted)">
                <span style="font-size:3rem">📦</span>
                <p style="margin-top:10px">Aucune pièce disponible dans cette catégorie.</p>
            </div>
        `;return}t.forEach(s=>{const a=c(s.partId);if(!a)return;const r=document.createElement("div");r.className=`part-card ${s.condition}`;let i="Neuf",l=.5;s.condition==="used"?(i="Occasion",l=.3):s.condition==="broken"&&(i="En Panne",l=.05);const p=Math.round(a.price*l);let u="";a.type==="cpu"?u=`${a.specs.socket} | ${a.specs.cores.split(" ")[0]}`:a.type==="gpu"?u=`${a.specs.vram} | ${a.specs.power}W`:a.type==="motherboard"?u=`${a.specs.socket} | ${a.specs.ramType}`:a.type==="ram"?u=`${a.specs.ramType} | ${a.specs.capacity}`:a.type==="storage"?u=`${a.specs.storageType} | ${a.specs.capacity}`:a.type==="psu"?u=`${a.specs.wattage}W`:a.type==="cooler"?u=`${a.specs.style}`:a.type==="case"&&(u=`${a.specs.airflow} Airflow`),r.innerHTML=`
            <span class="part-badge">${i}</span>
            <div>
                <div class="part-category">${a.brand}</div>
                <div class="part-name">${a.name}</div>
                <div class="part-specs">
                    <div class="part-spec-item"><span>Caractéristiques :</span><span>${u}</span></div>
                    <div class="part-spec-item"><span>Valeur achat :</span><span>${a.price}$</span></div>
                </div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price" style="font-size:0.95rem; color:var(--text-secondary)">Occase : ${p}$</div>
                <button class="btn-buy" style="border-color:var(--color-crimson); color:var(--color-crimson); background:rgba(255,0,85,0.05)" id="btn-sell-${s.id}">
                    Vendre
                </button>
            </div>
        `,e.appendChild(r),document.getElementById(`btn-sell-${s.id}`).addEventListener("click",()=>{rt(s,p)})})}function rt(e,t){o.inventory=o.inventory.filter(s=>s.id!==e.id),o.money+=t,$(),g(`Pièce revendue pour ${t}$ !`,"success"),window.updateHud(),ie()}function oe(){const e=document.getElementById("pane-bargainbin");e.innerHTML="";const t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="1fr 1fr",t.style.gap="1.5rem",t.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto",s.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-cyan)">🔥 Offres en cours (Achats)</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem" id="bargain-listings"></div>
    `;const a=document.createElement("div");a.className="glass-panel",a.style.padding="1.5rem",a.style.overflowY="auto",a.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-purple)">📈 Mes PC en Vente (Flips)</h2>
        <div style="display:flex; flex-direction:column; gap:1rem" id="my-listings"></div>
    `,t.appendChild(s),t.appendChild(a),e.appendChild(t),it(),ct()}function it(){const e=document.getElementById("bargain-listings");if(e.innerHTML="",o.bargainBin.length===0){e.innerHTML=`<div style="text-align:center; padding:3rem; color:var(--text-muted)">Aucune offre d'occasion aujourd'hui. Revenez demain !</div>`;return}o.bargainBin.forEach(t=>{const s=document.createElement("div");s.className="part-card",s.style.flexDirection="column";let a=[];Object.keys(t.pc).forEach(r=>{if(t.pc[r]&&t.pc[r].partId){const i=c(t.pc[r].partId);i&&a.push(i.name)}}),s.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-amber">PC d'occasion</span>
                <span class="part-price text-emerald">${t.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px; font-size:1.05rem">${t.name}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px">${t.description}</p>
            
            <div style="font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:6px; border-radius:4px; margin-bottom:12px">
                <strong>Composants inclus :</strong> ${a.join(", ")}
            </div>

            <button class="btn-primary glow-btn" style="width:100%" id="btn-buy-flip-${t.id}">
                Acheter pour ${t.price}$
            </button>
        `,e.appendChild(s),document.getElementById(`btn-buy-flip-${t.id}`).addEventListener("click",()=>{ot(t)})})}function ot(e){if(o.money>=e.price){o.money-=e.price;const t={id:"pc-flip-"+M(),partId:"special-pc-case",type:"pc_flip",name:e.name,condition:"used",pc:e.pc,pricePaid:e.price};o.inventory.push(t),o.bargainBin=o.bargainBin.filter(s=>s.id!==e.id),$(),g(`PC "${e.name}" acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.`,"success"),window.updateHud(),oe()}else g("Fonds insuffisants !","error")}function ct(){const e=document.getElementById("my-listings");e.innerHTML="";const t=o.customPcs||[];if(t.length===0){e.innerHTML=`
            <div style="text-align:center; padding:3rem; color:var(--text-muted)">
                <p>Aucun ordinateur mis en vente.</p>
                <small>Montez un PC libre sur un établi et mettez-le en vente pour générer du profit !</small>
            </div>
        `;return}t.forEach((s,a)=>{var i,l,p,u;const r=document.createElement("div");r.className="part-card",r.style.flexDirection="column",r.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-purple">En vente</span>
                <span class="part-price text-emerald">${s.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px">${s.name}</div>
            
            <div class="part-specs">
                <div class="part-spec-item"><span>Benchmark :</span><span class="text-cyan font-mono">${s.pc.score} Pts</span></div>
                <div class="part-spec-item"><span>CPU :</span><span>${((l=c((i=s.pc.cpu)==null?void 0:i.partId))==null?void 0:l.name)||"Aucun"}</span></div>
                <div class="part-spec-item"><span>GPU :</span><span>${((u=c((p=s.pc.gpu)==null?void 0:p.partId))==null?void 0:u.name)||"Aucun"}</span></div>
            </div>

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${a}">
                Retirer de la vente (Récupérer)
            </button>
        `,e.appendChild(r),document.getElementById(`btn-cancel-listing-${a}`).addEventListener("click",()=>{lt(a)})})}function lt(e){const t=o.customPcs[e],s={id:"pc-flip-"+M(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:t.price*.5};o.inventory.push(s),o.customPcs.splice(e,1),$(),g("Ordinateur retiré du marché BargainBin.","info"),oe()}function dt(){if(!o.customPcs||o.customPcs.length===0)return 0;let e=0,t=0;const s=[];return o.customPcs.forEach(a=>{const r=a.pc;let i=0;Object.keys(r).forEach(u=>{if(r[u]&&r[u].partId){const f=c(r[u].partId);f&&(i+=f.price)}});const l=a.price/(i||1);r.score/1e4;let p=.5;l<.8?p=.9:l<1.2?p=.7:l<1.5?p=.4:l<2?p=.15:p=.02,r.score>8e3&&(p+=.1),Math.random()<p?(e+=a.price,t+=1,o.xp+=50):s.push(a)}),o.customPcs=s,o.money+=e,$(),{soldCount:t,totalSales:e}}let ge="emails";function g(e,t="info"){const s=document.getElementById("notification-container");if(!s)return;const a=document.createElement("div");a.className=`toast ${t}`;let r="ℹ️";t==="success"?r="✅":t==="error"?r="❌":t==="warning"&&(r="⚠️"),a.innerHTML=`
        <span style="font-size:1.1rem">${r}</span>
        <span class="toast-msg">${e}</span>
    `,s.appendChild(a),setTimeout(()=>{a.classList.add("show")},10),setTimeout(()=>{a.classList.remove("show"),setTimeout(()=>{a.remove()},300)},4e3)}function ne(){document.getElementById("hud-level").textContent=o.level,document.getElementById("hud-money").textContent=`${o.money.toLocaleString("fr-FR",{minimumFractionDigits:2})}$`,document.getElementById("hud-day").textContent=`Jour ${o.day}`;const e=ee(o.level),t=Math.min(o.xp/e*100,100);document.getElementById("hud-xp-fill").style.width=`${t}%`,document.getElementById("hud-xp-text").textContent=`${o.xp} / ${e} XP`;const s=o.activeJobs.filter(r=>r.status==="available"||r.status==="ready").length,a=document.getElementById("badge-emails");s>0?(a.style.display="block",a.textContent=s):a.style.display="none"}function ae(e){ge=e,document.querySelectorAll(".sidebar .nav-item").forEach(t=>{t.getAttribute("data-tab")===e?t.classList.add("active"):t.classList.remove("active")}),document.querySelectorAll(".viewport .tab-pane").forEach(t=>{t.id===`pane-${e}`?t.classList.add("active"):t.classList.remove("active")}),e==="emails"?X():e==="workbench"?A():e==="shop"?Qe():e==="inventory"?ie():e==="bargainbin"&&oe(),$()}function pt(){const e=dt(),t=Se();ne();let s="Journée terminée !";t.deliveriesCount>0&&(s+=` / ${t.deliveriesCount} Colis de pièces livrés.`),t.newJobsCount>0&&(s+=` / ${t.newJobsCount} Nouveaux e-mails de clients reçus.`),e.soldCount>0&&(s+=` / Flip vendu : +${e.totalSales}$ sur BargainBin !`),g(s,"success"),ae(ge)}document.addEventListener("DOMContentLoaded",()=>{Ce(),window.updateHud=ne,ne(),document.querySelectorAll(".sidebar .nav-item").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-tab");ae(t)})}),document.getElementById("btn-next-day").addEventListener("click",pt),ae("emails"),setTimeout(()=>{g("Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.","success")},1e3)});
