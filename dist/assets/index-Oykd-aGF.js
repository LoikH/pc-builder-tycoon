(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const O=[{id:"cpu-i3-10100f",type:"cpu",name:"Intel Core i3-10100F",brand:"Intel",price:80,level:1,specs:{socket:"LGA1200",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1800}},{id:"cpu-ryzen3-3100",type:"cpu",name:"AMD Ryzen 3 3100",brand:"AMD",price:75,level:1,specs:{socket:"AM4",cores:"4 Cores / 8 Threads",speed:"3.6 GHz",power:65,score:1750}},{id:"cpu-i5-11400f",type:"cpu",name:"Intel Core i5-11400F",brand:"Intel",price:130,level:2,specs:{socket:"LGA1200",cores:"6 Cores / 12 Threads",speed:"2.6 GHz",power:65,score:3200}},{id:"cpu-ryzen5-5600x",type:"cpu",name:"AMD Ryzen 5 5600X",brand:"AMD",price:150,level:3,specs:{socket:"AM4",cores:"6 Cores / 12 Threads",speed:"3.7 GHz",power:65,score:4500}},{id:"cpu-i7-12700k",type:"cpu",name:"Intel Core i7-12700K",brand:"Intel",price:280,level:4,specs:{socket:"LGA1700",cores:"12 Cores / 20 Threads",speed:"3.6 GHz",power:125,score:7200}},{id:"cpu-ryzen7-5800x3d",type:"cpu",name:"AMD Ryzen 7 5800X3D",brand:"AMD",price:320,level:5,specs:{socket:"AM4",cores:"8 Cores / 16 Threads",speed:"3.4 GHz",power:105,score:8200}},{id:"cpu-i9-13900k",type:"cpu",name:"Intel Core i9-13900K",brand:"Intel",price:550,level:7,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.0 GHz",power:150,score:11500}},{id:"cpu-ryzen7-7800x3d",type:"cpu",name:"AMD Ryzen 7 7800X3D",brand:"AMD",price:390,level:8,specs:{socket:"AM5",cores:"8 Cores / 16 Threads",speed:"4.2 GHz",power:120,score:10800}},{id:"cpu-i9-14900ks",type:"cpu",name:"Intel Core i9-14900KS",brand:"Intel",price:690,level:9,specs:{socket:"LGA1700",cores:"24 Cores / 32 Threads",speed:"3.2 GHz",power:150,score:12800}},{id:"cpu-ryzen9-7950x",type:"cpu",name:"AMD Ryzen 9 7950X",brand:"AMD",price:520,level:10,specs:{socket:"AM5",cores:"16 Cores / 32 Threads",speed:"4.5 GHz",power:170,score:12400}},{id:"gpu-rx580",type:"gpu",name:"AMD Radeon RX 580",brand:"AMD",price:90,level:1,specs:{vram:"8 GB GDDR5",speed:"1340 MHz",power:185,score:2200}},{id:"gpu-gtx1650",type:"gpu",name:"NVIDIA GeForce GTX 1650",brand:"NVIDIA",price:110,level:1,specs:{vram:"4 GB GDDR5",speed:"1485 MHz",power:75,score:1800}},{id:"gpu-rtx3060",type:"gpu",name:"NVIDIA GeForce RTX 3060",brand:"NVIDIA",price:290,level:2,specs:{vram:"12 GB GDDR6",speed:"1777 MHz",power:170,score:5100}},{id:"gpu-rx6600xt",type:"gpu",name:"AMD Radeon RX 6600 XT",brand:"AMD",price:260,level:3,specs:{vram:"8 GB GDDR6",speed:"2589 MHz",power:160,score:4800}},{id:"gpu-rtx3080",type:"gpu",name:"NVIDIA GeForce RTX 3080",brand:"NVIDIA",price:650,level:5,specs:{vram:"10 GB GDDR6X",speed:"1710 MHz",power:320,score:9200}},{id:"gpu-rx6800xt",type:"gpu",name:"AMD Radeon RX 6800 XT",brand:"AMD",price:500,level:6,specs:{vram:"16 GB GDDR6",speed:"2250 MHz",power:300,score:8800}},{id:"gpu-rtx4070ti",type:"gpu",name:"NVIDIA GeForce RTX 4070 Ti",brand:"NVIDIA",price:790,level:7,specs:{vram:"12 GB GDDR6X",speed:"2610 MHz",power:285,score:12500}},{id:"gpu-rx7900xtx",type:"gpu",name:"AMD Radeon RX 7900 XTX",brand:"AMD",price:950,level:8,specs:{vram:"24 GB GDDR6",speed:"2500 MHz",power:355,score:15e3}},{id:"gpu-rtx4090",type:"gpu",name:"NVIDIA GeForce RTX 4090",brand:"NVIDIA",price:1599,level:10,specs:{vram:"24 GB GDDR6X",speed:"2520 MHz",power:450,score:22e3}},{id:"mb-prime-h410",type:"motherboard",name:"ASUS Prime H410M-E",brand:"ASUS",price:70,level:1,specs:{socket:"LGA1200",ramType:"DDR4",size:"Micro-ATX"}},{id:"mb-msi-b550",type:"motherboard",name:"MSI B550-A PRO",brand:"MSI",price:110,level:1,specs:{socket:"AM4",ramType:"DDR4",size:"ATX"}},{id:"mb-aorus-z690",type:"motherboard",name:"Gigabyte Z690 AORUS ELITE",brand:"Gigabyte",price:220,level:4,specs:{socket:"LGA1700",ramType:"DDR5",size:"ATX"}},{id:"mb-asus-x670",type:"motherboard",name:"ASUS ROG Crosshair X670E Hero",brand:"ASUS",price:480,level:8,specs:{socket:"AM5",ramType:"DDR5",size:"ATX"}},{id:"ram-crucial-8-ddr4",type:"ram",name:"Crucial Basics 8GB DDR4",brand:"Crucial",price:20,level:1,specs:{ramType:"DDR4",capacity:"8 GB",speed:"2666 MHz",score:500}},{id:"ram-corsair-16-ddr4",type:"ram",name:"Corsair Vengeance LPX 16GB (2x8)",brand:"Corsair",price:45,level:1,specs:{ramType:"DDR4",capacity:"16 GB",speed:"3200 MHz",score:1100}},{id:"ram-gskill-32-ddr4",type:"ram",name:"G.Skill Ripjaws V 32GB (2x16)",brand:"G.Skill",price:85,level:3,specs:{ramType:"DDR4",capacity:"32 GB",speed:"3600 MHz",score:2400}},{id:"ram-kingston-32-ddr5",type:"ram",name:"Kingston FURY Beast 32GB (2x16)",brand:"Kingston",price:120,level:4,specs:{ramType:"DDR5",capacity:"32 GB",speed:"5600 MHz",score:3100}},{id:"ram-corsair-64-ddr5",type:"ram",name:"Corsair Dominator Titanium 64GB (2x32)",brand:"Corsair",price:260,level:8,specs:{ramType:"DDR5",capacity:"64 GB",speed:"6000 MHz",score:5800}},{id:"storage-barracuda-1tb",type:"storage",name:"Seagate BarraCuda 1TB HDD",brand:"Seagate",price:45,level:1,specs:{storageType:"HDD",capacity:"1 TB",speed:"150 MB/s",score:200}},{id:"storage-kingston-480gb",type:"storage",name:"Kingston A400 480GB SATA SSD",brand:"Kingston",price:35,level:1,specs:{storageType:"SATA SSD",capacity:"480 GB",speed:"500 MB/s",score:600}},{id:"storage-samsung-1tb",type:"storage",name:"Samsung 970 EVO Plus 1TB NVMe M.2",brand:"Samsung",price:80,level:2,specs:{storageType:"NVMe M.2",capacity:"1 TB",speed:"3500 MB/s",score:2200}},{id:"storage-crucial-2tb",type:"storage",name:"Crucial T700 2TB PCIe 5.0 NVMe M.2",brand:"Crucial",price:240,level:7,specs:{storageType:"NVMe M.2",capacity:"2 TB",speed:"12400 MB/s",score:6500}},{id:"psu-evga-500",type:"psu",name:"EVGA 500 W1 (500W)",brand:"EVGA",price:40,level:1,specs:{wattage:500,rating:"80+ White"}},{id:"psu-corsair-650",type:"psu",name:"Corsair CX650M (650W)",brand:"Corsair",price:70,level:2,specs:{wattage:650,rating:"80+ Bronze"}},{id:"psu-seasonic-850",type:"psu",name:"Seasonic Focus GX-850 (850W)",brand:"Seasonic",price:130,level:4,specs:{wattage:850,rating:"80+ Gold"}},{id:"psu-bequiet-1300",type:"psu",name:"be quiet! Dark Power 13 (1300W)",brand:"be quiet!",price:290,level:8,specs:{wattage:1300,rating:"80+ Titanium"}},{id:"cooler-intel-stock",type:"cooler",name:"Intel Stock Cooler",brand:"Intel",price:5,level:1,specs:{socket:"LGA1200",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-amd-wraith",type:"cooler",name:"AMD Wraith Stealth",brand:"AMD",price:5,level:1,specs:{socket:"AM4",coolingPower:"65W",style:"Air Cooler"}},{id:"cooler-hyper-212",type:"cooler",name:"Cooler Master Hyper 212 Black",brand:"Cooler Master",price:45,level:1,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"150W",style:"Air Cooler"}},{id:"cooler-corsair-h100i",type:"cooler",name:"Corsair H100i RGB Elite (240mm AIO)",brand:"Corsair",price:140,level:4,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"250W",style:"Liquid AIO"}},{id:"cooler-nzxt-kraken-360",type:"cooler",name:"NZXT Kraken Elite 360",brand:"NZXT",price:220,level:7,specs:{socket:"AM4, AM5, LGA1200, LGA1700",coolingPower:"350W",style:"Liquid AIO"}},{id:"case-office",type:"case",name:"Generic Office Case Black",brand:"Generic",price:30,level:1,specs:{size:"ATX / Micro-ATX",airflow:"Faible"}},{id:"case-nzxt-h5",type:"case",name:"NZXT H5 Flow TG Black",brand:"NZXT",price:90,level:2,specs:{size:"ATX / Micro-ATX",airflow:"Excellent"}},{id:"case-lianli-o11",type:"case",name:"Lian Li O11 Dynamic Clear",brand:"Lian Li",price:140,level:4,specs:{size:"ATX",airflow:"Très Bon"}},{id:"case-fractal-north",type:"case",name:"Fractal Design North Charcoal",brand:"Fractal Design",price:160,level:6,specs:{size:"ATX",airflow:"Excellent"}}];function p(t){return O.find(e=>e.id===t)||null}const ge=["Jean-Michel Tech","Sophie.Gamer","Kévin Du 93","Thomas.Dev","Lucas.Stream","Emma.Designer","Alexandre.V","Mélanie Pro","Léa.Youtuber","Julien.Hardcore"],fe=["Mon PC s'éteint tout seul !","Besoin d'un diagnostic en urgence","Écran bleu à répétition...","Mon PC refuse de démarrer !","Bruit bizarre venant de l'alimentation"],be=["Besoin de plus de puissance pour Cyberpunk","Mon PC rame sur Photoshop !","Je veux passer à 16 Go de RAM","Mise à jour graphique nécessaire","Besoin de plus de stockage pour mes vidéos"],ye=["Mon ordinateur est extrêmement lent !","Des pubs bizarres s'affichent partout","Aide ! Je crois que j'ai été piraté","Nettoyage de printemps nécessaire","PC infecté, SOS !"],he=["Mon PC doit tourner plus vite !","Je veux battre le score de mon frère","Aide pour optimiser mon score 3DMark","Config Overclocking stable demandée","Besoin de performances maximales"];function N(t){return t[Math.floor(Math.random()*t.length)]}function oe(t,e=1){const s=[];for(let n=0;n<e;n++){const a="job-"+E(),r=N(ge);let c=["virus","upgrade"];t>=2&&c.push("repair"),t>=3&&c.push("benchmark"),t>=4&&c.push("build");const l=N(c);let d="",u="",b=0,h=0,w=0,k=null,$=[];const f=xe(l,t);if(l==="virus")d=N(ye),u=`Bonjour,

Depuis quelques jours, mon ordinateur est d'une lenteur exaspérante. Des fenêtres pop-up s'ouvrent sans arrêt avec des publicités bizarres, et je crains que des virus n'aient infecté mes fichiers.

Pouvez-vous nettoyer le système d'exploitation et vous assurer qu'il n'y a plus aucune menace ?

Merci,
${r}`,b=0,h=120+t*20,w=80,f.isClean=!1,$=[{id:"clean_os",desc:"Supprimer tous les virus",done:!1},{id:"boot_os",desc:"S'assurer que le PC démarre sous l'OS",done:!1}],k=f;else if(l==="upgrade"){if(d=N(be),(Math.random()>.5?"ram":"storage")==="ram"){const v=f.ram&&p(f.ram.partId).specs.capacity.includes("8")?16:32;u=`Salut,

Je joue beaucoup en ce moment, mais mon PC a du mal lorsque j'ouvre d'autres applications en arrière-plan. Je pense que je manque de mémoire vive.

Pourriez-vous mettre à niveau ma RAM pour atteindre au moins ${v} Go ?

Cordialement,
${r}`,b=v===16?80:160,h=150+t*15,w=100,$=[{id:"ram_capacity",desc:`Avoir au moins ${v} Go de RAM`,target:v,done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}]}else u=`Bonjour,

Mon disque dur actuel est plein et très lent. Je voudrais installer un SSD M.2 NVMe rapide d'au moins 1 To pour stocker mes projets professionnels et mes jeux.

Merci d'avance,
${r}`,b=120,h=140+t*15,w=100,f.storage={partId:"storage-barracuda-1tb",condition:"used"},$=[{id:"fast_ssd",desc:"Installer un SSD M.2 NVMe d'au moins 1 To",done:!1},{id:"boot_os",desc:"Vérifier que le PC démarre sous l'OS",done:!1}];k=f}else if(l==="repair"){if(d=N(fe),(Math.random()>.5?"cpu":"gpu")==="cpu"){u=`Bonjour,

Mon PC s'éteint brusquement dès que je le lance. J'ai l'impression qu'il y a un problème matériel majeur, peut-être le processeur ? Il a pris un coup de chaud.

Pourriez-vous diagnostiquer la panne, remplacer la pièce défectueuse par un modèle équivalent ou supérieur, et me le renvoyer ?

Merci,
${r}`,f.cpu&&(f.cpu.condition="broken");const v=p(f.cpu.partId);b=v.price+30,h=200+t*30,w=150,$=[{id:"no_broken_parts",desc:"Aucun composant en panne dans le PC",done:!1},{id:"cpu_tier",desc:`Installer un processeur équivalent ou supérieur (${v.name})`,target:v.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}else{u=`Bonjour,

Je n'ai plus d'affichage sur mon écran et la carte graphique fait un bruit étrange au démarrage. Je pense qu'elle est en fin de vie.

Pourriez-vous remplacer ma carte graphique défectueuse ?

Bien à vous,
${r}`,f.gpu&&(f.gpu.condition="broken");const v=p(f.gpu.partId);b=v.price+40,h=220+t*30,w=150,$=[{id:"no_broken_parts",desc:"Aucun composant en panne",done:!1},{id:"gpu_tier",desc:`Installer une carte graphique équivalente ou supérieure (${v.name})`,target:v.specs.score,done:!1},{id:"boot_os",desc:"Le PC doit démarrer correctement",done:!1}]}k=f}else if(l==="benchmark"){d=N(he);const C=f.score||3e3,v=Math.round(C*1.25);u=`Salut,

J'ai acheté ce PC récemment mais je trouve qu'il manque un peu de punch dans mes benchmarks. Je vise un score de ${v} sur l'outil de test.

Vous pouvez soit changer des pièces (carte graphique, processeur), soit essayer d'overclocker mes pièces actuelles si le refroidissement et l'alimentation le permettent !

Merci,
${r}`,b=300,h=280+t*40,w=200,$=[{id:"benchmark_score",desc:`Atteindre un score de benchmark d'au moins ${v}`,target:v,done:!1},{id:"boot_os",desc:"Le PC doit démarrer sous l'OS",done:!1}],k=f}else if(l==="build"){d="Création d'un PC sur mesure de toutes pièces";const C=t*1800+1e3;b=t*250+500,h=350+t*50,w=300,u=`Bonjour,

Je pars de zéro et j'ai besoin d'un ordinateur complet. Mon budget maximum est de ${b}$.

J'aimerais que cette machine soit capable d'atteindre un score de performance d'au moins ${C} sur l'outil de benchmark. Je vous laisse choisir les pièces, veillez simplement à ce qu'il démarre et qu'il respecte le budget !

Cordialement,
${r}`,$=[{id:"has_all_parts",desc:"Installer tous les composants obligatoires",done:!1},{id:"benchmark_score",desc:`Atteindre un score de benchmark de ${C}`,target:C,done:!1},{id:"pc_budget",desc:`Ne pas dépasser le budget de pièces de ${b}$`,target:b,done:!1},{id:"boot_os",desc:"Le PC démarre et l'OS est installé",done:!1}],k={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!1}}s.push({id:a,clientName:r,subject:d,text:u,type:l,status:"available",requirements:$,budget:b,reward:h,xpReward:w,pc:k})}return s}function xe(t,e){let s="mb-msi-b550",n="cpu-ryzen5-5600x",a="cooler-hyper-212",r="ram-corsair-16-ddr4",c="storage-kingston-480gb",l="gpu-rtx3060",d="psu-corsair-650",u="case-nzxt-h5";return e===1?(s="mb-prime-h410",n="cpu-i3-10100f",a="cooler-intel-stock",r="ram-crucial-8-ddr4",c="storage-barracuda-1tb",l="gpu-gtx1650",d="psu-evga-500",u="case-office"):e>=5&&e<8?(s="mb-aorus-z690",n="cpu-i7-12700k",a="cooler-corsair-h100i",r="ram-kingston-32-ddr5",c="storage-samsung-1tb",l="gpu-rtx3080",d="psu-seasonic-850",u="case-lianli-o11"):e>=8&&(s="mb-asus-x670",n="cpu-ryzen9-7950x",a="cooler-nzxt-kraken-360",r="ram-corsair-64-ddr5",c="storage-crucial-2tb",l="gpu-rtx4090",d="psu-bequiet-1300",u="case-fractal-north"),{case:{partId:u,condition:"used"},motherboard:{partId:s,condition:"used"},cpu:{partId:n,condition:"used"},cooler:{partId:a,condition:"used"},ram:{partId:r,condition:"used"},gpu:{partId:l,condition:"used"},storage:{partId:c,condition:"used"},psu:{partId:d,condition:"used"},thermalPasteApplied:!0,cablesConnected:!0,hasOs:!0,isClean:!0,score:te(n,l,r),diagnosed:!0}}function te(t,e,s,n=1,a=1){if(!t||!e||!s)return 0;const r=p(t),c=p(e),l=p(s);if(!r||!c||!l)return 0;const d=r.specs.score*n,u=c.specs.score*a,b=l.specs.score;return Math.round(u*.7+d*.2+b*.1)}function $e(t){const e=t.pc;let s=!0;return{requirements:t.requirements.map(a=>{let r=!1;switch(a.id){case"boot_os":r=e&&e.case&&e.motherboard&&e.cpu&&e.cooler&&e.ram&&e.gpu&&e.storage&&e.psu&&e.cablesConnected&&e.thermalPasteApplied&&e.hasOs&&!K(e);break;case"clean_os":r=e&&e.isClean&&e.hasOs;break;case"ram_capacity":if(e&&e.ram){const l=p(e.ram.partId);l&&(r=parseInt(l.specs.capacity.replace("GB","").replace("Go","").trim())>=a.target)}break;case"fast_ssd":if(e&&e.storage){const l=p(e.storage.partId);if(l){const d=l.specs.storageType==="NVMe M.2",u=parseInt(l.specs.capacity.replace("TB","").replace("To","").trim())||.5;r=d&&(u>=1||l.id.includes("1tb")||l.id.includes("2tb"))}}break;case"no_broken_parts":r=e&&!K(e);break;case"cpu_tier":if(e&&e.cpu&&e.cpu.condition!=="broken"){const l=p(e.cpu.partId);r=l&&l.specs.score>=a.target}break;case"gpu_tier":if(e&&e.gpu&&e.gpu.condition!=="broken"){const l=p(e.gpu.partId);r=l&&l.specs.score>=a.target}break;case"benchmark_score":r=e&&e.score>=a.target&&e.hasOs&&!K(e);break;case"has_all_parts":r=e&&e.case&&e.motherboard&&e.cpu&&e.cooler&&e.ram&&e.gpu&&e.storage&&e.psu;break;case"pc_budget":let c=0;Object.keys(e).forEach(l=>{if(e[l]&&e[l].partId&&e[l].condition!=="used"){const d=p(e[l].partId);d&&(c+=d.price)}}),r=c<=a.target;break}return r||(s=!1),{...a,done:r}}),allDone:s}}function K(t){if(!t)return!0;let e=!1;return Object.keys(t).forEach(s=>{t[s]&&t[s].condition==="broken"&&(e=!0)}),e}const se={money:1500,level:1,xp:0,day:1,inventory:[],activeJobs:[],workbenches:[{id:1,pc:null,unlocked:!0},{id:2,pc:null,unlocked:!1,cost:800},{id:3,pc:null,unlocked:!1,cost:2e3}],selectedWorkbenchId:1,deliveryQueue:[],bargainBin:[],customPcs:[],completedJobsCount:0};let o={...se};function E(){return Math.random().toString(36).substring(2,9)+Date.now().toString(36)}function Y(t){return t===1?100:Math.round(100*Math.pow(1.8,t-1))}function g(){try{localStorage.setItem("pc_architect_tycoon_save",JSON.stringify(o))}catch(t){console.error("Impossible de sauvegarder la partie :",t)}}function we(){try{const t=localStorage.getItem("pc_architect_tycoon_save");if(t)return o=JSON.parse(t),o={...se,...o},!0}catch(t){console.error("Erreur lors du chargement :",t)}return Ce(),!1}function Ce(){o=JSON.parse(JSON.stringify(se)),o.inventory.push({id:E(),partId:"storage-kingston-480gb",condition:"new",pricePaid:35},{id:E(),partId:"ram-crucial-8-ddr4",condition:"new",pricePaid:20},{id:E(),partId:"cooler-intel-stock",condition:"new",pricePaid:5}),o.activeJobs=oe(1,3),ce(),g()}function Ie(t){o.xp+=t;let e=Y(o.level),s=!1;for(;o.xp>=e;)o.xp-=e,o.level+=1,e=Y(o.level),s=!0;return g(),{levelUp:s,currentLevel:o.level}}function Me(t){o.money+=t,g()}function Ee(t){return o.money>=t?(o.money-=t,g(),!0):!1}function ke(t,e="standard"){let s=0;return t.forEach(a=>{const r=p(a);r&&(s+=r.price)}),s+=e==="express"?50:10,Ee(s)?(t.forEach(a=>{const r=e==="express"?o.day:o.day+1;o.deliveryQueue.push({partId:a,condition:"new",deliveryDay:r})}),g(),{success:!0,cost:s}):{success:!1,cost:s}}function ce(){const t=["Gaming PC pas cher","Bête de Bureautique","Ancienne Station de travail","PC Gamer HS","PC Ne Démarre Plus"],e=["case-office","case-nzxt-h5"],s=["mb-prime-h410","mb-msi-b550"],n=["cpu-i3-10100f","cpu-ryzen3-3100","cpu-i5-11400f","cpu-ryzen5-5600x"],a=["cooler-intel-stock","cooler-amd-wraith","cooler-hyper-212"],r=["gpu-gtx1650","gpu-rx580","gpu-rtx3060"],c=["ram-crucial-8-ddr4","ram-corsair-16-ddr4"],l=["storage-barracuda-1tb","storage-kingston-480gb"],d=["psu-evga-500","psu-corsair-650"];o.bargainBin=[];for(let u=0;u<2;u++){const b=s[Math.floor(Math.random()*s.length)],h=p(b),w=n.filter(D=>p(D).specs.socket===h.specs.socket),k=w[Math.floor(Math.random()*w.length)]||"cpu-ryzen3-3100",$=a[Math.floor(Math.random()*a.length)],f=r[Math.floor(Math.random()*r.length)],C=c[Math.floor(Math.random()*c.length)],v=l[Math.floor(Math.random()*l.length)],V=d[Math.floor(Math.random()*d.length)],F=e[Math.floor(Math.random()*e.length)],H=Math.floor(Math.random()*4),z={case:{partId:F,condition:"used"},motherboard:{partId:b,condition:"used"},cpu:H===0?{partId:k,condition:"broken"}:{partId:k,condition:"used"},cooler:{partId:$,condition:"used"},ram:H===3?null:{partId:C,condition:"used"},gpu:H===1?{partId:f,condition:"broken"}:{partId:f,condition:"used"},storage:{partId:v,condition:"used"},psu:H===2?{partId:V,condition:"broken"}:{partId:V,condition:"used"},thermalPasteApplied:Math.random()>.3,cablesConnected:H!==3,hasOs:H>1,isClean:Math.random()>.5,score:0,diagnosed:!1};let j=0;Object.keys(z).forEach(D=>{if(z[D]&&z[D].partId){const W=p(z[D].partId);W&&(z[D].condition==="used"&&(j+=W.price*.6),z[D].condition==="broken"&&(j+=W.price*.1))}});const ve=Math.round(j*.8);o.bargainBin.push({id:"flip-"+E(),name:t[Math.floor(Math.random()*t.length)],pc:z,price:ve,description:"Ordinateur d'occasion. État inconnu. Peut nécessiter des réparations."})}}function Pe(){o.day+=1;const t=o.deliveryQueue.filter(n=>n.deliveryDay<=o.day);o.deliveryQueue=o.deliveryQueue.filter(n=>n.deliveryDay>o.day),t.forEach(n=>{o.inventory.push({id:E(),partId:n.partId,condition:n.condition,pricePaid:p(n.partId).price})});const e=Math.floor(Math.random()*2)+1,s=oe(o.level,e);if(o.activeJobs.push(...s),o.activeJobs.filter(n=>n.status==="available").length>6){const n=o.activeJobs.filter(r=>r.status==="available"),a=n.length-6;for(let r=0;r<a;r++){const c=o.activeJobs.indexOf(n[r]);o.activeJobs.splice(c,1)}}return ce(),g(),{deliveriesCount:t.length,newJobsCount:s.length}}function S(){o.activeJobs.forEach(t=>{if(t.status==="active"){const e=$e(t);t.requirements=e.requirements,e.allDone?t.status="ready":t.status="active"}}),g()}let J=null;function U(){const t=document.getElementById("pane-emails");t.innerHTML="";const e=document.createElement("div");e.className="emails-container";const s=document.createElement("div");s.className="glass-panel",s.innerHTML=`
        <div class="panel-header">
            <h2>Boîte de Réception</h2>
            <span class="nav-badge" style="position:static" id="email-count">${o.activeJobs.length}</span>
        </div>
        <div class="email-list" id="email-list-items"></div>
    `,e.appendChild(s);const n=document.createElement("div");n.className="glass-panel",n.id="email-detail-panel",n.innerHTML=`
        <div class="email-view-empty">
            <span style="font-size: 3rem">✉️</span>
            <p>Sélectionnez un e-mail pour lire les détails du projet.</p>
        </div>
    `,e.appendChild(n),t.appendChild(e),le()}function le(){const t=document.getElementById("email-list-items");if(t.innerHTML="",o.activeJobs.length===0){t.innerHTML='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun message.</div>';return}o.activeJobs.forEach(e=>{const s=document.createElement("div");s.className=`email-item ${e.status==="available"?"unread":""} ${J===e.id?"selected":""}`;let n="var(--color-cyan)",a="Nouveau";e.status==="active"?(n="var(--color-purple)",a="En Cours"):e.status==="ready"&&(n="var(--color-emerald)",a="Prêt"),s.innerHTML=`
            <div class="email-sender">
                <span>${e.clientName}</span>
                <span class="status-badge" style="background:${n}20; color:${n}; font-size:0.6rem; padding:1px 4px">${a}</span>
            </div>
            <div class="email-subject">${e.subject}</div>
            <div class="email-snippet">${e.text.substring(0,45)}...</div>
        `,s.addEventListener("click",()=>{J=e.id,le(),Ae(e)}),t.appendChild(s)}),S()}function Ae(t){const e=document.getElementById("email-detail-panel");let s=0;t.pc&&Object.keys(t.pc).forEach(a=>{if(t.pc[a]&&t.pc[a].partId&&t.pc[a].condition!=="used"){const r=p(t.pc[a].partId);r&&(s+=r.price)}}),e.innerHTML=`
        <div class="email-details">
            <div class="email-details-header">
                <div class="email-details-title">${t.subject}</div>
                <div class="email-meta">
                    <span>De : <strong>${t.clientName}</strong></span>
                    <span>Budget pièces : <strong class="text-emerald">${t.budget}$</strong></span>
                </div>
            </div>
            <div class="email-body">${t.text}</div>
            
            <div class="job-box">
                <div class="job-box-title">Objectifs du projet</div>
                <ul class="job-reqs">
                    ${t.requirements.map(a=>`
                        <li class="${a.done?"done text-emerald":"pending text-muted"}">
                            ${a.desc}
                        </li>
                    `).join("")}
                </ul>

                <div class="job-financials">
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Récompense</div>
                        <div class="text-emerald font-mono" style="font-size:1.1rem; font-weight:700">${t.reward.toFixed(2)}$</div>
                    </div>
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Expérience</div>
                        <div class="text-cyan font-mono" style="font-size:1.1rem; font-weight:700">+${t.xpReward} XP</div>
                    </div>
                    ${t.type==="build"?`
                    <div>
                        <div class="stat-label" style="font-size:0.6rem">Dépenses Pièces</div>
                        <div class="${s<=t.budget?"text-emerald":"text-crimson"} font-mono" style="font-size:1.1rem; font-weight:700">${s}$ / ${t.budget}$</div>
                    </div>
                    `:""}
                </div>
            </div>

            <div class="job-actions" id="job-actions-area"></div>
        </div>
    `;const n=document.getElementById("job-actions-area");t.status==="available"?(n.innerHTML=`
            <div style="display:flex; flex-direction:column; gap:10px; width:100%">
                <p style="font-size:0.8rem; color:var(--text-secondary)">Attribuer ce projet à un établi libre :</p>
                <div style="display:flex; gap:10px">
                    ${o.workbenches.map(a=>{if(!a.unlocked)return"";const r=a.pc!==null;return`
                            <button class="btn-secondary" style="flex:1" ${r?"disabled":""} id="btn-assign-wb-${a.id}">
                                Établi ${a.id} ${r?"(Occupé)":"(Libre)"}
                            </button>
                        `}).join("")}
                </div>
                <button class="btn-secondary text-crimson" style="margin-top:5px; border-color:rgba(255,0,85,0.2)" id="btn-reject-job">
                    Refuser la mission
                </button>
            </div>
        `,o.workbenches.forEach(a=>{!a.unlocked||a.pc!==null||document.getElementById(`btn-assign-wb-${a.id}`).addEventListener("click",()=>{Te(t,a.id)})}),document.getElementById("btn-reject-job").addEventListener("click",()=>{Be(t)})):t.status==="active"?n.innerHTML=`
            <p style="font-size:0.85rem; color:var(--text-amber)">
                Le PC est en cours de montage sur l'Établi. Remplissez tous les objectifs à l'établi pour facturer le client.
            </p>
        `:t.status==="ready"&&(n.innerHTML=`
            <button class="btn-primary glow-btn" id="btn-complete-job" style="width:100%">
                Livrer le PC et encaisser la facture (${t.reward.toFixed(2)}$)
            </button>
        `,document.getElementById("btn-complete-job").addEventListener("click",()=>{Se(t)}))}function Te(t,e){const s=o.workbenches.find(n=>n.id===e);s&&s.pc===null&&(t.status="active",s.pc=t.pc,s.pc.orderId=t.id,g(),m(`Projet accepté et PC placé sur l'Établi ${e} !`,"success"),U(),S())}function Be(t){o.activeJobs=o.activeJobs.filter(e=>e.id!==t.id),J=null,g(),m("Mission déclinée.","info"),U()}function Se(t){o.workbenches.forEach(s=>{s.pc&&s.pc.orderId===t.id&&(s.pc=null)}),Me(t.reward);const e=Ie(t.xpReward);o.activeJobs=o.activeJobs.filter(s=>s.id!==t.id),J=null,o.completedJobsCount+=1,g(),e.levelUp?m(`NIVEAU SUPÉRIEUR ! Vous êtes maintenant niveau ${e.currentLevel} ! De nouvelles pièces sont disponibles en boutique !`,"success"):m(`Mission terminée ! +${t.reward}$ et +${t.xpReward} XP`,"success"),window.updateHud(),U()}let y=null,M={},q=[],A=1,R=1,T=1.2;function Le(t){y=t;const e=document.getElementById("workbench-monitor-overlay");e.style.display="block",e.innerHTML="",A=1,R=1,T=1.2,ze(e)}function G(){q.forEach(clearInterval),q=[],M={};const t=document.getElementById("workbench-monitor-overlay");t&&(t.style.display="none",t.innerHTML="")}function ze(t){const e=document.createElement("div");e.className="os-boot",t.appendChild(e);const s=p(y.cpu.partId);p(y.motherboard.partId);const n=p(y.ram.partId),a=p(y.gpu.partId),r=p(y.storage.partId);e.innerHTML=`
        <div class="os-bios-text">
            AMERICAN MEGATRENDS BIOS v4.0621
            Processeurs détectés : ${s.name} @ ${s.specs.speed}
            Mémoire RAM active : ${n.specs.capacity} @ ${n.specs.speed} (${n.specs.ramType})
            Contrôleur Graphique : ${a.name}
            Disque de démarrage : ${r.name} (${r.specs.storageType})
            
            Vérification de l'alimentation... OK
            Test de la mémoire... Succès
            Recherche du système d'exploitation...
        </div>
    `,setTimeout(()=>{e.innerHTML="",y.hasOs?de(t):(e.innerHTML=`
                <div style="text-align:center; font-family:var(--font-mono); padding:2rem">
                    <span style="font-size:3rem">⚠️</span>
                    <p style="margin-top:15px; font-weight:700">Aucun système d'exploitation trouvé.</p>
                    <p style="font-size:0.8rem; color:#888; margin-top:5px">Insérez la clé USB d'installation pour démarrer le programme d'installation.</p>
                    <button class="btn-primary" id="btn-os-install" style="margin-top:20px; font-size:0.8rem">
                        Insérer clé USB (Installer VirtualOS)
                    </button>
                </div>
            `,document.getElementById("btn-os-install").addEventListener("click",()=>{De(e)}))},1500)}function De(t){t.innerHTML=`
        <div style="width:300px; text-align:center">
            <h3 style="margin-bottom:15px">Installation de VirtualOS v4.1</h3>
            <div class="xp-bar-container" style="height:10px; margin-bottom:10px">
                <div class="xp-bar-fill" id="install-progress" style="width:0%"></div>
            </div>
            <p style="font-size:0.75rem; color:#888" id="install-text">Formatage du disque de stockage...</p>
        </div>
    `;let e=0;const s=document.getElementById("install-progress"),n=document.getElementById("install-text"),a=["Création des partitions NTFS...","Copie des fichiers d'installation (12%)...","Copie des fichiers d'installation (45%)...","Copie des fichiers d'installation (78%)...","Configuration des pilotes de périphériques...","Finalisation des paramètres du bureau..."],r=setInterval(()=>{if(e+=10,s&&(s.style.width=`${e}%`),n&&(n.textContent=a[Math.floor(e/17)]||"Presque fini..."),e>=100){clearInterval(r),y.hasOs=!0,g(),m("VirtualOS installé avec succès !","success");const c=document.getElementById("workbench-monitor-overlay");c.innerHTML="",de(c),S(),x()}},400);q.push(r)}function de(t){t.innerHTML="";const e=document.createElement("div");e.className="os-desktop",e.innerHTML=`
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
    `,t.appendChild(e),document.getElementById("icon-sysinfo").addEventListener("click",qe),document.getElementById("icon-scanner").addEventListener("click",pe),document.getElementById("icon-benchmark").addEventListener("click",He),document.getElementById("icon-overclock").addEventListener("click",Oe),document.getElementById("btn-os-shutdown").addEventListener("click",()=>{window.isPcRunning=!1,G(),x()})}function _(t,e=450,s=350){if(M[t])return M[t].style.zIndex=700,M[t];const n=document.createElement("div");return n.className="os-window",n.style.width=`${e}px`,n.style.height=`${s}px`,n.style.top=`${50+Object.keys(M).length*20}px`,n.style.left=`${50+Object.keys(M).length*20}px`,n.style.zIndex=650,n.innerHTML=`
        <div class="os-window-header">
            <span class="os-window-title">${t}</span>
            <button class="os-window-close">×</button>
        </div>
        <div class="os-window-body"></div>
    `,document.querySelector(".os-desktop").appendChild(n),M[t]=n,n.querySelector(".os-window-close").addEventListener("click",()=>{n.remove(),delete M[t]}),Re(n),n}function Re(t){let e=0,s=0,n=0,a=0;const r=t.querySelector(".os-window-header");r&&(r.onmousedown=c);function c(u){u=u||window.event,u.preventDefault(),n=u.clientX,a=u.clientY,document.onmouseup=d,document.onmousemove=l}function l(u){u=u||window.event,u.preventDefault(),e=n-u.clientX,s=a-u.clientY,n=u.clientX,a=u.clientY,t.style.top=t.offsetTop-s+"px",t.style.left=t.offsetLeft-e+"px"}function d(){document.onmouseup=null,document.onmousemove=null}}function qe(){const e=_("Informations Système",400,320).querySelector(".os-window-body"),s=p(y.cpu.partId),n=p(y.gpu.partId),a=p(y.ram.partId),r=p(y.storage.partId);let c=42;y.thermalPasteApplied||(c=95);const l=(T-1.2)*120;let d=Math.round(c+l);e.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:10px">
            <h3 style="color:var(--color-cyan)">Fiche Technique Matérielle</h3>
            <div style="display:flex; flex-direction:column; gap:5px; font-size:0.85rem">
                <p><strong>CPU :</strong> ${s.name} (${s.specs.cores})</p>
                <p><strong>Fréquence active :</strong> ${(parseFloat(s.specs.speed)*A).toFixed(2)} GHz</p>
                <p><strong>Température CPU :</strong> <span id="sysinfo-temp" style="font-weight:700">${d}°C</span></p>
                <p><strong>GPU :</strong> ${n.name} (${n.specs.vram})</p>
                <p><strong>Fréquence GPU :</strong> ${(parseFloat(n.specs.speed)*R).toFixed(0)} MHz</p>
                <p><strong>Mémoire Vive :</strong> ${a.specs.capacity} (${a.specs.ramType})</p>
                <p><strong>Stockage Principal :</strong> ${r.name} (${r.specs.capacity} M.2)</p>
            </div>
            
            <div style="border-top:1px solid rgba(255,255,255,0.08); padding-top:10px; margin-top:5px; font-size:0.75rem; color:#888">
                OS installé : VirtualOS Desktop Edition v4.1 build 2026.
            </div>
        </div>
    `;const u=document.getElementById("sysinfo-temp");u&&(d>=90?u.style.color="var(--color-crimson)":d>=75?u.style.color="var(--color-amber)":u.style.color="var(--color-emerald)")}function pe(){const e=_("SecuriGuard Virus Scanner",400,300).querySelector(".os-window-body");e.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
            <span style="font-size:2.5rem">🛡️</span>
            <div style="font-weight:600">Scanner de Sécurité Intégré</div>
            <div id="scan-log" style="font-size:0.8rem; color:#888">Protection résidente active. Prêt pour l'analyse.</div>
            
            <button class="btn-primary" id="btn-start-scan" style="font-size:0.8rem">
                Lancer une Analyse Complète
            </button>
        </div>
    `,document.getElementById("btn-start-scan").addEventListener("click",()=>{Ge(e)})}function Ge(t){t.innerHTML=`
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; gap:12px">
            <div style="font-weight:600" id="scan-step-title">Analyse en cours...</div>
            <div class="xp-bar-container" style="width:250px; height:8px">
                <div class="xp-bar-fill" id="scan-progress" style="width:0%"></div>
            </div>
            <div style="font-size:0.7rem; color:#888" id="scan-file-text">Analyse de System32...</div>
        </div>
    `;const e=document.getElementById("scan-progress");document.getElementById("scan-step-title");const s=document.getElementById("scan-file-text");let n=0;const a=setInterval(()=>{n+=10,e&&(e.style.width=`${n}%`),n===30?s.textContent="Recherche de logiciels espions...":n===60?s.textContent="Analyse des clés de registre infectées...":n===80&&(s.textContent="Examen de la mémoire vive active..."),n>=100&&(clearInterval(a),y.isClean?(t.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-emerald" style="font-size:2.5rem">✓</span>
                        <div style="font-weight:700" class="text-emerald">Système Sain !</div>
                        <p style="font-size:0.75rem; color:#888">Aucun virus, cheval de troie ou logiciel publicitaire détecté.</p>
                        <button class="btn-secondary" onclick="window.closeSecuriGuard()" style="margin-top:10px; font-size:0.75rem">Fermer</button>
                    </div>
                `,window.closeSecuriGuard=()=>{const r=M["SecuriGuard Virus Scanner"];r&&(r.remove(),delete M["SecuriGuard Virus Scanner"])}):(t.innerHTML=`
                    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:10px">
                        <span class="text-crimson" style="font-size:2.5rem">⚠️</span>
                        <div style="font-weight:700" class="text-crimson">2 Menaces Détectées !</div>
                        <p style="font-size:0.75rem; color:#aaa">Trojan.Miner.Bitcoin & Adware.PopUpMagic infectent vos registres.</p>
                        
                        <button class="btn-primary" id="btn-clean-viruses" style="margin-top:10px; background:linear-gradient(135deg, var(--color-purple), #90f)">
                            Nettoyer et Désinfecter
                        </button>
                    </div>
                `,document.getElementById("btn-clean-viruses").addEventListener("click",()=>{y.isClean=!0,g(),m("Système nettoyé avec succès !","success"),S(),x(),pe()})))},300);q.push(a)}function He(){const e=_("3D Benchmark Tool v3.0",450,360).querySelector(".os-window-body");e.innerHTML=`
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
    `,document.getElementById("btn-run-benchmark").addEventListener("click",()=>{Ne(e)})}function Ne(t){t.innerHTML=`
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
    `;const e=document.getElementById("bench-canvas"),s=e.getContext("2d");e.width=400,e.height=180;let n=[];for(let v=0;v<30;v++)n.push({x:Math.random()*e.width,y:Math.random()*e.height,speed:Math.random()*3+1,size:Math.random()*3});let a=null;function r(){s.fillStyle="rgba(0,0,0,0.15)",s.fillRect(0,0,e.width,e.height),s.fillStyle="rgba(0, 240, 255, 0.6)",n.forEach(v=>{s.beginPath(),s.arc(v.x,v.y,v.size,0,Math.PI*2),s.fill(),v.x+=v.speed,v.x>e.width&&(v.x=0)}),a=requestAnimationFrame(r)}r();let c=0,l=0,d=42;const u=y.thermalPasteApplied?45:95,b=(T-1.2)*110,h=te(y.cpu.partId,y.gpu.partId,y.ram.partId,A,R),w=document.getElementById("bench-progress"),k=document.getElementById("bench-live-score"),$=document.getElementById("bench-live-temp"),f=document.getElementById("bench-phase-label"),C=setInterval(()=>{c+=4,l=Math.round(c/100*h),k&&(k.textContent=l),w&&(w.style.width=`${c}%`);const v=Math.round(u+c*.3+b);if(d=Math.min(v,140),$&&($.textContent=d,d>=90?$.style.color="var(--color-crimson)":d>=72&&($.style.color="var(--color-amber)")),c===20?f.textContent="Test CPU : Simulation physique complexe...":c===50?f.textContent="Test GPU : Shaders d'illumination globale...":c===80&&(f.textContent="Test final combiné : Calcul des FPS..."),d>=98){clearInterval(C),cancelAnimationFrame(a),re("WHEA_UNCORRECTABLE_ERROR","Le processeur a dépassé le seuil de sécurité thermique de 98°C.");return}const V=1.2+(A-1)*.5;if(A>1.15&&T<V){clearInterval(C),cancelAnimationFrame(a),re("SYSTEM_THREAD_EXCEPTION_NOT_HANDLED","Overclock instable : Tension VCore insuffisante pour la fréquence CPU réclamée.");return}c>=100&&(clearInterval(C),cancelAnimationFrame(a),y.score=h,g(),t.innerHTML=`
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; gap:15px">
                    <span class="text-emerald" style="font-size:3rem">🏆</span>
                    <div>
                        <div class="stat-label">Rapport de performances</div>
                        <div style="font-size:1.8rem; font-weight:800; color:var(--color-emerald)">${h} Points</div>
                    </div>
                    <div style="font-size:0.8rem; color:#888">
                        CPU stable à max ${d}°C.<br>
                        Tension VCore : ${T.toFixed(2)}V
                    </div>
                    <button class="btn-primary" onclick="window.closeBench()" style="font-size:0.8rem">Accepter</button>
                </div>
            `,window.closeBench=()=>{const F=M["3D Benchmark Tool v3.0"];F&&(F.remove(),delete M["3D Benchmark Tool v3.0"]),S(),x()})},250);q.push(C)}function Oe(){const e=_("Overclock-O-Matic Pro",400,340).querySelector(".os-window-body");e.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:1.2rem">
            <h3 style="color:var(--color-purple); font-size:1rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:5px">Optimisation Fréquences</h3>
            
            <!-- CPU MULTIPLIER -->
            <div class="oc-slider-row">
                <label>
                    <span>Coefficient Fréquence CPU</span>
                    <span id="oc-cpu-mult-val">${A.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-cpu-mult-range" min="1.0" max="1.6" step="0.05" value="${A}">
            </div>

            <!-- CPU VOLTAGE -->
            <div class="oc-slider-row">
                <label>
                    <span>Tension VCore (Alimentation CPU)</span>
                    <span id="oc-voltage-val">${T.toFixed(2)} V</span>
                </label>
                <input type="range" id="oc-voltage-range" min="1.15" max="1.50" step="0.02" value="${T}">
            </div>

            <!-- GPU CORE CLOCK -->
            <div class="oc-slider-row">
                <label>
                    <span>Fréquence GPU Clock</span>
                    <span id="oc-gpu-mult-val">${R.toFixed(2)}x</span>
                </label>
                <input type="range" id="oc-gpu-mult-range" min="1.0" max="1.3" step="0.05" value="${R}">
            </div>

            <div style="background:rgba(255, 170, 0, 0.08); border:1px solid rgba(255, 170, 0, 0.2); border-radius:6px; padding:8px; font-size:0.7rem; color:var(--text-secondary)">
                ⚠️ <strong>Attention :</strong> L'augmentation de la tension augmente exponentiellement la chaleur dégagée. Un overclock instable provoquera un plantage système (BSOD).
            </div>
        </div>
    `;const s=document.getElementById("oc-cpu-mult-range"),n=document.getElementById("oc-cpu-mult-val");s.addEventListener("input",d=>{A=parseFloat(d.target.value),n.textContent=`${A.toFixed(2)}x`});const a=document.getElementById("oc-voltage-range"),r=document.getElementById("oc-voltage-val");a.addEventListener("input",d=>{T=parseFloat(d.target.value),r.textContent=`${T.toFixed(2)} V`});const c=document.getElementById("oc-gpu-mult-range"),l=document.getElementById("oc-gpu-mult-val");c.addEventListener("input",d=>{R=parseFloat(d.target.value),l.textContent=`${R.toFixed(2)}x`})}function re(t,e){q.forEach(clearInterval),q=[],M={},window.isPcRunning=!1;const s=document.getElementById("workbench-monitor-overlay");s.innerHTML=`
        <div class="os-bsod">
            <div class="os-bsod-sad">:(</div>
            <div class="os-bsod-title">Votre PC virtuel a rencontré un problème et doit redémarrer. Nous collectons simplement quelques informations relatives aux erreurs.</div>
            
            <div class="os-bsod-details">
                Code d'arrêt système : <strong style="color:#ffef56">${t}</strong><br>
                Rapport technique : ${e}<br><br>
                <span style="font-size:0.8rem; opacity:0.8">Cliquez n'importe où pour forcer l'extinction et retourner à l'établi.</span>
            </div>
        </div>
    `,s.querySelector(".os-bsod").addEventListener("click",()=>{G(),x()})}let i=null;function x(){const t=document.getElementById("pane-workbench");t.innerHTML="";const e=o.workbenches.find(c=>c.id===o.selectedWorkbenchId);i=e?e.pc:null;const s=document.createElement("div");s.className="workbench-grid";const n=document.createElement("div");n.className="workbench-case-view",i?(n.innerHTML=`
            <div class="case-schematic">
                <!-- Motherboard Slot -->
                <div class="case-slot ${i.motherboard?"filled":""}" id="slot-motherboard" data-slot="motherboard">
                    <span class="case-slot-label">Carte Mère</span>
                    <span class="case-slot-partname">${i.motherboard?p(i.motherboard.partId).name:"Emplacement Vide"}</span>
                </div>
                
                <!-- CPU Slot (Nested visually in motherboard area) -->
                ${i.motherboard?`
                <div class="case-slot ${i.cpu?"filled":""}" id="slot-cpu" data-slot="cpu">
                    <span class="case-slot-label">CPU</span>
                    <span class="case-slot-partname">${i.cpu?p(i.cpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- CPU Cooler Slot (Overlays CPU) -->
                ${i.cpu?`
                <div class="case-slot ${i.cooler?"filled":""}" id="slot-cooler" data-slot="cooler">
                    <span class="case-slot-label">Refroidissement</span>
                    <span class="case-slot-partname">${i.cooler?p(i.cooler.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- RAM Slot (Near CPU) -->
                ${i.motherboard?`
                <div class="case-slot ${i.ram?"filled":""}" id="slot-ram" data-slot="ram">
                    <span class="case-slot-label">RAM</span>
                    <span class="case-slot-partname">${i.ram?p(i.ram.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- GPU Slot (PCIe slot) -->
                ${i.motherboard?`
                <div class="case-slot ${i.gpu?"filled":""}" id="slot-gpu" data-slot="gpu">
                    <span class="case-slot-label">Carte Graphique</span>
                    <span class="case-slot-partname">${i.gpu?p(i.gpu.partId).name:"Emplacement Vide"}</span>
                </div>
                `:""}

                <!-- Power Supply Slot -->
                <div class="case-slot ${i.psu?"filled":""}" id="slot-psu" data-slot="psu">
                    <span class="case-slot-label">Alimentation (PSU)</span>
                    <span class="case-slot-partname">${i.psu?p(i.psu.partId).name:"Emplacement Vide"}</span>
                </div>

                <!-- Disk Storage Slot -->
                <div class="case-slot ${i.storage?"filled":""}" id="slot-storage" data-slot="storage">
                    <span class="case-slot-label">Stockage</span>
                    <span class="case-slot-partname">${i.storage?p(i.storage.partId).name:"Emplacement Vide"}</span>
                </div>
            </div>
            
            <!-- Virtual Screen overlay -->
            <div id="workbench-monitor-overlay" style="display:none"></div>
        `,s.appendChild(n)):(n.innerHTML=`
            <div style="text-align:center; color:var(--text-muted)">
                <span style="font-size:4rem">🔧</span>
                <h3 style="margin-top:15px; color:#fff">Établi ${o.selectedWorkbenchId} Vide</h3>
                <p style="font-size:0.85rem; margin-top:5px; max-width:300px">Sélectionnez une commande dans vos e-mails ou importez un ordinateur d'occasion pour commencer.</p>
                <div style="margin-top:20px" id="workbench-import-area"></div>
            </div>
        `,s.appendChild(n));const a=document.createElement("div");a.className="workbench-sidebar";let r="";if(o.workbenches.forEach(c=>{c.unlocked?r+=`
                <div class="pc-tab ${o.selectedWorkbenchId===c.id?"active":""}" id="tab-wb-${c.id}">
                    Établi ${c.id} ${c.pc?"🛠️":""}
                </div>
            `:r+=`<div class="pc-tab text-muted" style="opacity:0.5; cursor:not-allowed">🔒 Établi ${c.id}</div>`}),a.innerHTML=`
        <div class="glass-panel workbench-details-card">
            <div class="stat-label" style="margin-bottom:8px">Choisir mon établi</div>
            <div class="pc-selector-row">${r}</div>
        </div>
    `,i){const c=document.createElement("div");c.className="glass-panel workbench-details-card",c.style.flex="1";let l=0,d=0;i.cpu&&(l+=p(i.cpu.partId).specs.power),i.gpu&&(l+=p(i.gpu.partId).specs.power),i.psu&&(d=p(i.psu.partId).specs.wattage);const u=d>=l,b=o.activeJobs.find(h=>h.id===i.orderId);c.innerHTML=`
            <div style="font-weight:700; font-size:1rem; border-bottom:1px solid var(--border-color); padding-bottom:8px; display:flex; justify-content:space-between">
                <span>Configuration Actuelle</span>
                <span class="status-badge ${window.isPcRunning?"on":"off"}">${window.isPcRunning?"En marche":"Éteint"}</span>
            </div>

            <div class="pc-specs-list">
                <div class="pc-spec-row"><span class="pc-spec-name">Carte Mère</span><span class="pc-spec-val">${i.motherboard?p(i.motherboard.partId).name:"Manquante"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Processeur</span><span class="pc-spec-val">${i.cpu?p(i.cpu.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Ventirad</span><span class="pc-spec-val">${i.cooler?p(i.cooler.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Mémoire RAM</span><span class="pc-spec-val">${i.ram?p(i.ram.partId).name:"Manquante"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Graphismes</span><span class="pc-spec-val">${i.gpu?p(i.gpu.partId).name:"Manquants"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Stockage</span><span class="pc-spec-val">${i.storage?p(i.storage.partId).name:"Manquant"}</span></div>
                <div class="pc-spec-row"><span class="pc-spec-name">Alimentation</span><span class="pc-spec-val">${i.psu?`${p(i.psu.partId).name} (${d}W)`:"Manquante"}</span></div>
            </div>

            <div style="margin-top:15px; font-size:0.8rem; background:rgba(0,0,0,0.15); padding:8px; border-radius:6px">
                <div style="display:flex; justify-content:space-between">
                    <span>Consommation estimée :</span>
                    <span class="${u?"text-emerald":"text-crimson"}" style="font-weight:600">${l}W / ${d}W</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Pâte thermique :</span>
                    <span class="${i.thermalPasteApplied?"text-emerald":"text-crimson"}">${i.thermalPasteApplied?"Appliquée ✓":"Manquante ✗"}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:4px">
                    <span>Câbles d'alimentation :</span>
                    <span class="${i.cablesConnected?"text-emerald":"text-crimson"}">${i.cablesConnected?"Branchés ✓":"Débranchés ✗"}</span>
                </div>
            </div>

            <div class="workbench-actions-box">
                <button class="btn-secondary" id="btn-toggle-paste" style="width:100%">
                    ${i.thermalPasteApplied?"Nettoyer la pâte thermique":"Appliquer pâte thermique"}
                </button>
                <button class="btn-secondary" id="btn-toggle-cables" style="width:100%">
                    ${i.cablesConnected?"Débrancher les câbles":"Brancher les câbles"}
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

                ${b?"":`
                    <div style="border-top:1px solid var(--border-color); margin-top:10px; padding-top:10px; display:flex; flex-direction:column; gap:5px">
                        <div class="stat-label">PC Libre (Flip BargainBin)</div>
                        <input type="text" id="flip-build-name" placeholder="Nom de l'ordinateur" value="${e.pc.name||"PC Gamer Flip"}" style="background:#111; color:#fff; border:1px solid var(--border-color); padding:5px; border-radius:4px; font-size:0.8rem">
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
        `,a.appendChild(c)}s.appendChild(a),t.appendChild(s),o.workbenches.forEach(c=>{c.unlocked&&document.getElementById(`tab-wb-${c.id}`).addEventListener("click",()=>{o.selectedWorkbenchId=c.id,window.isPcRunning=!1,G(),g(),x()})}),i?(document.getElementById("btn-toggle-paste").addEventListener("click",()=>{i.thermalPasteApplied=!i.thermalPasteApplied,g(),x(),S()}),document.getElementById("btn-toggle-cables").addEventListener("click",()=>{i.cablesConnected=!i.cablesConnected,g(),x(),S()}),document.getElementById("btn-power-pc").addEventListener("click",()=>{Fe()}),t.querySelectorAll(".case-schematic .case-slot").forEach(l=>{l.addEventListener("click",d=>{const u=l.getAttribute("data-slot");Je(u)})}),o.activeJobs.find(l=>l.id===i.orderId)||(document.getElementById("btn-sell-flip-pc").addEventListener("click",()=>{_e()}),document.getElementById("btn-scrap-pc").addEventListener("click",()=>{Xe()}))):Ve()}function Ve(){const t=document.getElementById("workbench-import-area");if(!t)return;const e=o.inventory.filter(s=>s.type==="pc_flip");if(e.length===0){t.innerHTML=`
            <div style="font-size:0.75rem; color:var(--text-muted)">Aucun PC d'occasion en stock.</div>
        `;return}t.innerHTML=`
        <div style="display:flex; flex-direction:column; gap:8px">
            <span class="stat-label">Importer un PC d'occasion</span>
            <select id="select-import-pc" style="background:#111; color:#fff; border:1px solid var(--border-color); font-size:0.8rem; padding:6px; border-radius:6px">
                ${e.map(s=>`<option value="${s.id}">${s.name} (${s.pricePaid}$)</option>`).join("")}
            </select>
            <button class="btn-primary glow-btn" id="btn-import-pc-action">
                Placer sur l'Établi
            </button>
            <button class="btn-secondary" id="btn-create-scratch-build" style="margin-top:10px; font-size:0.75rem">
                Commencer un boitier vierge (Builder libre)
            </button>
        </div>
    `,document.getElementById("btn-import-pc-action").addEventListener("click",()=>{const s=document.getElementById("select-import-pc").value,n=o.inventory.find(a=>a.id===s);if(n){const a=o.workbenches.find(r=>r.id===o.selectedWorkbenchId);a.pc=n.pc,a.pc.name=n.name,a.pc.isCustom=!0,o.inventory=o.inventory.filter(r=>r.id!==s),g(),m("PC d'occasion importé sur l'établi !","success"),x()}}),document.getElementById("btn-create-scratch-build").addEventListener("click",()=>{const s=o.workbenches.find(n=>n.id===o.selectedWorkbenchId);s.pc={case:null,motherboard:null,cpu:null,cooler:null,ram:null,gpu:null,storage:null,psu:null,thermalPasteApplied:!1,cablesConnected:!1,hasOs:!1,isClean:!0,score:0,diagnosed:!0},g(),m("Boîtier vide placé sur l'établi !","info"),x()})}function Fe(){if(window.isPcRunning)window.isPcRunning=!1,G(),x(),m("Ordinateur éteint.","info");else{if(!i.psu){m("Boot échoué : Aucune alimentation installée !","error");return}if(!i.motherboard){m("Boot échoué : Aucune carte mère installée !","error");return}if(!i.cpu){m("Boot échoué : Aucun processeur installé !","error");return}if(!i.cooler){m("Boot échoué : Aucun ventirad. Le CPU surchaufferait immédiatement !","error");return}if(!i.ram){m("Boot échoué : Aucune mémoire vive (RAM) !","error");return}if(!i.gpu){m("Boot échoué : Aucun processeur graphique (GPU) pour l'affichage !","error");return}if(!i.storage){m("Boot échoué : Aucun disque de stockage détecté !","error");return}if(!i.cablesConnected){m("Boot échoué : Les câbles d'alimentation ne sont pas branchés !","error");return}let t=0;if(i.cpu&&(t+=p(i.cpu.partId).specs.power),i.gpu&&(t+=p(i.gpu.partId).specs.power),p(i.psu.partId).specs.wattage<t){m("Boot échoué : L'alimentation sature (Court-circuit de sécurité) ! Trop de puissance requise.","error");return}window.isPcRunning=!0,x(),m("Boot en cours... Signal vidéo détecté !","success"),Le(i)}}function Je(t){const e=i[t],s=document.createElement("div");s.className="modal-overlay",s.id="part-drawer-modal";const n=document.createElement("div");n.className="modal-content";const a=document.createElement("div");a.className="panel-header",a.innerHTML=`
        <h2>Sélectionner un composant : ${t.toUpperCase()}</h2>
        <button class="os-window-close" id="btn-close-drawer">×</button>
    `;const r=document.createElement("div");r.className="modal-body";const c=o.inventory.filter(d=>{const u=p(d.partId);return u&&u.type===t});let l="";e&&(l+=`
            <div style="background:rgba(255,0,85,0.05); padding:1rem; border-radius:6px; border:1px solid rgba(255,0,85,0.2); margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center">
                <div>
                    <span class="stat-label">Composant installé</span>
                    <div style="font-weight:600; font-size:0.9rem">${p(e.partId).name} (${e.condition==="used"?"Occasion":e.condition==="broken"?"En Panne":"Neuf"})</div>
                </div>
                <button class="btn-secondary text-crimson" id="btn-uninstall-part">
                    Retirer la pièce
                </button>
            </div>
        `),c.length===0?l+='<div style="text-align:center; padding:2rem; color:var(--text-muted)">Aucun composant de ce type disponible dans votre inventaire.</div>':l+=`
            <div style="font-weight:700; font-size:0.8rem; color:var(--text-muted); margin-bottom:10px">Pièces en stock :</div>
            <div style="display:flex; flex-direction:column; gap:10px">
                ${c.map(d=>`
                        <div class="part-card" style="padding:10px; flex-direction:row; justify-content:space-between; align-items:center">
                            <div>
                                <div style="font-weight:600; font-size:0.85rem">${p(d.partId).name}</div>
                                <div style="font-size:0.7rem; color:var(--text-secondary)">État : ${d.condition==="new"?"Neuf":d.condition==="used"?"Occasion":"En Panne"}</div>
                            </div>
                            <button class="btn-buy" id="btn-install-part-${d.id}">Installer</button>
                        </div>
                    `).join("")}
            </div>
        `,r.innerHTML=l,n.appendChild(a),n.appendChild(r),s.appendChild(n),document.body.appendChild(s),document.getElementById("btn-close-drawer").addEventListener("click",()=>{document.body.removeChild(s)}),e&&document.getElementById("btn-uninstall-part").addEventListener("click",()=>{ue(t),document.body.removeChild(s)}),c.forEach(d=>{document.getElementById(`btn-install-part-${d.id}`).addEventListener("click",()=>{Ue(t,d),document.body.removeChild(s)})})}function Ue(t,e){const s=p(e.partId);if(t==="cpu"){if(i.motherboard){const n=p(i.motherboard.partId);if(n.specs.socket!==s.specs.socket){m(`Incompatible : Socket de carte mère (${n.specs.socket}) incompatible avec le processeur (${s.specs.socket}) !`,"error");return}}}else if(t==="motherboard"){if(i.cpu){const n=p(i.cpu.partId);if(n.specs.socket!==s.specs.socket){m(`Incompatible : Le processeur déjà présent (${n.specs.socket}) ne rentre pas sur ce socket (${s.specs.socket}) !`,"error");return}}if(i.ram){const n=p(i.ram.partId);if(n.specs.ramType!==s.specs.ramType){m(`Incompatible : Type de RAM de la carte mère (${s.specs.ramType}) incompatible avec la RAM installée (${n.specs.ramType}) !`,"error");return}}}else if(t==="cooler"){if(i.cpu){const n=p(i.cpu.partId);if(!s.specs.socket.includes(n.specs.socket)){m(`Incompatible : Le système d'accroche du ventirad ne supporte pas le socket ${n.specs.socket} !`,"error");return}}}else if(t==="ram"&&i.motherboard){const n=p(i.motherboard.partId);if(n.specs.ramType!==s.specs.ramType){m(`Incompatible : La carte mère requiert de la mémoire ${n.specs.ramType} (${s.specs.ramType} fournie) !`,"error");return}}i[t]&&ue(t),i[t]={partId:e.partId,condition:e.condition},o.inventory=o.inventory.filter(n=>n.id!==e.id),i.cpu&&i.gpu&&i.ram?i.score=te(i.cpu.partId,i.gpu.partId,i.ram.partId):i.score=0,g(),m(`${s.name} installé !`,"success"),x(),S()}function ue(t){const e=i[t];e&&(o.inventory.push({id:E(),partId:e.partId,condition:e.condition,pricePaid:p(e.partId).price}),i[t]=null,(t==="motherboard"||t==="storage"||t==="cpu")&&(window.isPcRunning=!1,G()),t==="motherboard"&&["cpu","cooler","ram","gpu"].forEach(n=>{i[n]&&(o.inventory.push({id:E(),partId:i[n].partId,condition:i[n].condition,pricePaid:p(i[n].partId).price}),i[n]=null)}),t==="cpu"&&i.cooler&&(o.inventory.push({id:E(),partId:i.cooler.partId,condition:i.cooler.condition,pricePaid:p(i.cooler.partId).price}),i.cooler=null),i.score=0,g(),m("Composant démonté et replacé en inventaire.","info"),x(),S())}function _e(){const t=document.getElementById("flip-build-name").value.trim(),e=parseFloat(document.getElementById("flip-build-price").value);if(!t){m("Veuillez donner un nom à votre PC !","error");return}if(isNaN(e)||e<=0){m("Veuillez saisir un prix valide supérieur à 0 !","error");return}if(!i.case||!i.motherboard||!i.cpu||!i.cooler||!i.ram||!i.gpu||!i.storage||!i.psu||!i.hasOs||!i.cablesConnected||!i.thermalPasteApplied){m("Vente impossible : Le PC n'est pas opérationnel ou des pièces manquent !","error");return}o.customPcs.push({id:"listed-"+E(),name:t,price:Math.round(e),pc:JSON.parse(JSON.stringify(i))});const s=o.workbenches.find(n=>n.id===o.selectedWorkbenchId);s.pc=null,i=null,window.isPcRunning=!1,G(),g(),m(`Ordinateur "${t}" mis en vente pour ${Math.round(e)}$ !`,"success"),x()}function Xe(){["case","motherboard","cpu","cooler","ram","gpu","storage","psu"].forEach(s=>{i[s]&&o.inventory.push({id:E(),partId:i[s].partId,condition:i[s].condition,pricePaid:p(i[s].partId).price})});const e=o.workbenches.find(s=>s.id===o.selectedWorkbenchId);e.pc=null,i=null,window.isPcRunning=!1,G(),g(),m("Ordinateur désassemblé. Toutes les pièces ont été renvoyées à l'inventaire !","info"),x()}let I="cpu",B=[];function je(){const t=document.getElementById("pane-shop");t.innerHTML="";const e=document.createElement("div");e.className="shop-layout";const s=document.createElement("div");s.className="glass-panel shop-filters",s.innerHTML=`
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; padding:0 8px">Composants</div>
        <button class="filter-btn ${I==="cpu"?"active":""}" data-cat="cpu">💾 Processeurs <span class="badge font-mono">${L("cpu")}</span></button>
        <button class="filter-btn ${I==="motherboard"?"active":""}" data-cat="motherboard">🔌 Cartes Mères <span class="badge font-mono">${L("motherboard")}</span></button>
        <button class="filter-btn ${I==="gpu"?"active":""}" data-cat="gpu">🎮 Cartes Graphiques <span class="badge font-mono">${L("gpu")}</span></button>
        <button class="filter-btn ${I==="ram"?"active":""}" data-cat="ram">⚡ Mémoires RAM <span class="badge font-mono">${L("ram")}</span></button>
        <button class="filter-btn ${I==="storage"?"active":""}" data-cat="storage">💽 Stockages SSD/HDD <span class="badge font-mono">${L("storage")}</span></button>
        <button class="filter-btn ${I==="psu"?"active":""}" data-cat="psu">🔌 Alimentations <span class="badge font-mono">${L("psu")}</span></button>
        <button class="filter-btn ${I==="cooler"?"active":""}" data-cat="cooler">❄️ Refroidissements <span class="badge font-mono">${L("cooler")}</span></button>
        <button class="filter-btn ${I==="case"?"active":""}" data-cat="case">🖥️ Boîtiers PC <span class="badge font-mono">${L("case")}</span></button>
        
        <div style="font-weight:700; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:15px 0 8px; padding:0 8px">Améliorations</div>
        <button class="filter-btn ${I==="upgrades"?"active":""}" data-cat="upgrades">🛠️ Atelier & Établis</button>
    `;const n=document.createElement("div");n.style.display="grid",n.style.gridTemplateColumns="1fr 280px",n.style.gap="1.5rem",n.style.height="100%",n.style.minHeight="0";const a=document.createElement("div");a.className="glass-panel",a.style.overflow="hidden",a.style.display="flex",a.style.flexDirection="column",a.innerHTML=`
        <div class="panel-header">
            <h2 id="catalog-title">${ie()}</h2>
        </div>
        <div class="shop-catalog" id="shop-catalog-items"></div>
    `;const r=document.createElement("div");r.className="glass-panel",r.style.padding="1rem",r.style.display="flex",r.style.flexDirection="column",r.id="shop-cart-panel",n.appendChild(a),n.appendChild(r),e.appendChild(s),e.appendChild(n),t.appendChild(e),s.querySelectorAll(".filter-btn").forEach(c=>{c.addEventListener("click",()=>{I=c.getAttribute("data-cat"),s.querySelectorAll(".filter-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),document.getElementById("catalog-title").textContent=ie(),Q()})}),Q(),X()}function L(t){return O.filter(e=>e.type===t).length}function ie(){switch(I){case"cpu":return"Processeurs (Intel & AMD)";case"motherboard":return"Cartes Mères";case"gpu":return"Cartes Graphiques (NVIDIA RTX & AMD RX)";case"ram":return"Mémoire Vive (DDR4 / DDR5)";case"storage":return"Disques Durs & SSD (NVMe / SATA)";case"psu":return"Alimentations Énergétiques";case"cooler":return"Ventirads & Watercoolings AIO";case"case":return"Boîtiers PC Desktop";case"upgrades":return"Agrandir mon Magasin";default:return"Boutique d'informatique"}}function Q(){const t=document.getElementById("shop-catalog-items");if(t.innerHTML="",I==="upgrades"){We(t);return}O.filter(s=>s.type===I).forEach(s=>{const n=o.level<s.level,a=document.createElement("div");a.className="part-card";let r="";s.type==="cpu"?r=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>Cœurs:</span><span>${s.specs.cores.split(" ")[0]}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${s.specs.speed}</span></div>
            `:s.type==="gpu"?r=`
                <div class="part-spec-item"><span>VRAM:</span><span>${s.specs.vram}</span></div>
                <div class="part-spec-item"><span>Fréquence:</span><span>${s.specs.speed}</span></div>
                <div class="part-spec-item"><span>TDP:</span><span>${s.specs.power}W</span></div>
            `:s.type==="motherboard"?r=`
                <div class="part-spec-item"><span>Socket:</span><span>${s.specs.socket}</span></div>
                <div class="part-spec-item"><span>RAM:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Taille:</span><span>${s.specs.size}</span></div>
            `:s.type==="ram"?r=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.ramType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Vitesse:</span><span>${s.specs.speed}</span></div>
            `:s.type==="storage"?r=`
                <div class="part-spec-item"><span>Type:</span><span>${s.specs.storageType}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.capacity}</span></div>
                <div class="part-spec-item"><span>Débit:</span><span>${s.specs.speed}</span></div>
            `:s.type==="psu"?r=`
                <div class="part-spec-item"><span>Puissance:</span><span>${s.specs.wattage}W</span></div>
                <div class="part-spec-item"><span>Certif:</span><span>${s.specs.rating}</span></div>
            `:s.type==="cooler"?r=`
                <div class="part-spec-item"><span>Style:</span><span>${s.specs.style}</span></div>
                <div class="part-spec-item"><span>Capacité:</span><span>${s.specs.coolingPower}</span></div>
            `:s.type==="case"&&(r=`
                <div class="part-spec-item"><span>Facteur:</span><span>${s.specs.size}</span></div>
                <div class="part-spec-item"><span>Airflow:</span><span>${s.specs.airflow}</span></div>
            `),a.innerHTML=`
            <div>
                <div class="part-category">${s.brand}</div>
                <div class="part-name">${s.name}</div>
                <div class="part-specs">${r}</div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price">${s.price.toFixed(2)}$</div>
                ${n?`<button class="btn-buy" disabled style="border-color:var(--color-crimson); color:var(--color-crimson)">Niveau ${s.level}</button>`:`<button class="btn-buy" id="btn-add-${s.id}">Ajouter</button>`}
            </div>
        `,t.appendChild(a),n||document.getElementById(`btn-add-${s.id}`).addEventListener("click",()=>{Ye(s.id)})})}function We(t){o.workbenches.forEach(e=>{if(e.id===1)return;const s=document.createElement("div");s.className="part-card",s.innerHTML=`
            <div>
                <div class="part-category">Atelier</div>
                <div class="part-name">Établi de Montage n°${e.id}</div>
                <div class="part-specs">
                    <p style="font-size:0.75rem; color:var(--text-secondary)">Permet de travailler sur un PC supplémentaire en simultané.</p>
                </div>
            </div>
            <div class="part-price-row">
                <div class="part-price">${e.cost.toFixed(2)}$</div>
                ${e.unlocked?'<button class="btn-buy" disabled>Acheté</button>':`<button class="btn-buy" id="btn-buy-wb-${e.id}" ${o.money<e.cost?"disabled":""}>Acheter</button>`}
            </div>
        `,t.appendChild(s),e.unlocked||document.getElementById(`btn-buy-wb-${e.id}`).addEventListener("click",()=>{Ke(e)})})}function Ke(t){o.money>=t.cost&&(o.money-=t.cost,t.unlocked=!0,g(),m(`Établi ${t.id} débloqué !`,"success"),window.updateHud(),Q())}function Ye(t){B.push(t),X(),m("Pièce ajoutée au panier.","info")}function Qe(t){B.splice(t,1),X()}function X(){const t=document.getElementById("shop-cart-panel");if(!t)return;if(B.length===0){t.innerHTML=`
            <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat</div>
            <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-muted); gap:10px">
                <span style="font-size:2rem">🛒</span>
                <p style="font-size:0.8rem">Votre panier est vide</p>
            </div>
        `;return}let e=0;const s=B.map((n,a)=>{const r=O.find(c=>c.id===n);return r?(e+=r.price,`
            <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.03); font-size:0.8rem">
                <span style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap">${r.name}</span>
                <div style="display:flex; gap:10px; align-items:center">
                    <span class="text-emerald font-mono">${r.price}$</span>
                    <button style="background:transparent; border:none; color:var(--color-crimson); cursor:pointer; font-weight:bold" onclick="window.removeCartItem(${a})">×</button>
                </div>
            </div>
        `):""}).join("");t.innerHTML=`
        <div style="font-weight:700; font-size:1rem; margin-bottom:1rem">Panier d'achat (${B.length})</div>
        <div style="flex:1; overflow-y:auto; margin-bottom:1rem">
            ${s}
        </div>
        
        <div style="border-top:1px solid var(--border-color); padding-top:10px; margin-bottom:15px">
            <div class="flex-row-justify" style="font-size:0.85rem; margin-bottom:5px">
                <span>Sous-total:</span>
                <span class="font-mono text-emerald" style="font-weight:600">${e.toFixed(2)}$</span>
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
    `,document.getElementById("btn-checkout").addEventListener("click",Ze),window.removeCartItem=n=>{Qe(n)}}function Ze(){if(B.length===0)return;const t=document.getElementById("shipping-method").value,n=B.reduce((a,r)=>{var c;return a+(((c=O.find(l=>l.id===r))==null?void 0:c.price)||0)},0)+(t==="express"?50:10);o.money>=n?ke(B,t).success&&(B=[],X(),window.updateHud(),m(t==="express"?"Commande livrée instantanément par Express !":"Commande passée ! Vos pièces arriveront demain matin.","success")):m("Fonds insuffisants pour finaliser la commande.","error")}let P="all";function ne(){const t=document.getElementById("pane-inventory");t.innerHTML="";const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="1rem",e.style.height="100%";const s=document.createElement("div");s.className="flex-row-justify",s.innerHTML=`
        <h2 style="font-size:1.3rem; font-weight:700">Mon Stock de Pièces Detachées</h2>
        <div style="display:flex; gap:8px" id="inventory-cat-buttons">
            <button class="btn-secondary ${P==="all"?"text-cyan":""}" data-cat="all">Tout</button>
            <button class="btn-secondary ${P==="cpu"?"text-cyan":""}" data-cat="cpu">💾 CPU</button>
            <button class="btn-secondary ${P==="motherboard"?"text-cyan":""}" data-cat="motherboard">🔌 MB</button>
            <button class="btn-secondary ${P==="gpu"?"text-cyan":""}" data-cat="gpu">🎮 GPU</button>
            <button class="btn-secondary ${P==="ram"?"text-cyan":""}" data-cat="ram">⚡ RAM</button>
            <button class="btn-secondary ${P==="storage"?"text-cyan":""}" data-cat="storage">💽 Stock</button>
            <button class="btn-secondary ${P==="psu"?"text-cyan":""}" data-cat="psu">🔌 PSU</button>
            <button class="btn-secondary ${P==="cooler"?"text-cyan":""}" data-cat="cooler">❄️ Vent</button>
            <button class="btn-secondary ${P==="case"?"text-cyan":""}" data-cat="case">🖥️ Cases</button>
        </div>
    `;const n=document.createElement("div");n.className="inventory-grid",n.id="inventory-items-grid",e.appendChild(s),e.appendChild(n),t.appendChild(e),s.querySelector("#inventory-cat-buttons").querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{P=a.getAttribute("data-cat"),ne()})}),et()}function et(){const t=document.getElementById("inventory-items-grid");t.innerHTML="";const e=o.inventory.filter(s=>{if(P==="all")return!0;const n=p(s.partId);return n&&n.type===P});if(e.length===0){t.innerHTML=`
            <div style="grid-column:1/-1; text-align:center; padding:4rem; color:var(--text-muted)">
                <span style="font-size:3rem">📦</span>
                <p style="margin-top:10px">Aucune pièce disponible dans cette catégorie.</p>
            </div>
        `;return}e.forEach(s=>{const n=p(s.partId);if(!n)return;const a=document.createElement("div");a.className=`part-card ${s.condition}`;let r="Neuf",c=.5;s.condition==="used"?(r="Occasion",c=.3):s.condition==="broken"&&(r="En Panne",c=.05);const l=Math.round(n.price*c);let d="";n.type==="cpu"?d=`${n.specs.socket} | ${n.specs.cores.split(" ")[0]}`:n.type==="gpu"?d=`${n.specs.vram} | ${n.specs.power}W`:n.type==="motherboard"?d=`${n.specs.socket} | ${n.specs.ramType}`:n.type==="ram"?d=`${n.specs.ramType} | ${n.specs.capacity}`:n.type==="storage"?d=`${n.specs.storageType} | ${n.specs.capacity}`:n.type==="psu"?d=`${n.specs.wattage}W`:n.type==="cooler"?d=`${n.specs.style}`:n.type==="case"&&(d=`${n.specs.airflow} Airflow`),a.innerHTML=`
            <span class="part-badge">${r}</span>
            <div>
                <div class="part-category">${n.brand}</div>
                <div class="part-name">${n.name}</div>
                <div class="part-specs">
                    <div class="part-spec-item"><span>Caractéristiques :</span><span>${d}</span></div>
                    <div class="part-spec-item"><span>Valeur achat :</span><span>${n.price}$</span></div>
                </div>
            </div>
            
            <div class="part-price-row">
                <div class="part-price" style="font-size:0.95rem; color:var(--text-secondary)">Occase : ${l}$</div>
                <button class="btn-buy" style="border-color:var(--color-crimson); color:var(--color-crimson); background:rgba(255,0,85,0.05)" id="btn-sell-${s.id}">
                    Vendre
                </button>
            </div>
        `,t.appendChild(a),document.getElementById(`btn-sell-${s.id}`).addEventListener("click",()=>{tt(s,l)})})}function tt(t,e){o.inventory=o.inventory.filter(s=>s.id!==t.id),o.money+=e,g(),m(`Pièce revendue pour ${e}$ !`,"success"),window.updateHud(),ne()}function ae(){const t=document.getElementById("pane-bargainbin");t.innerHTML="";const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="1fr 1fr",e.style.gap="1.5rem",e.style.height="100%";const s=document.createElement("div");s.className="glass-panel",s.style.padding="1.5rem",s.style.overflowY="auto",s.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-cyan)">🔥 Offres en cours (Achats)</h2>
        <div style="display:flex; flex-direction:column; gap:1.2rem" id="bargain-listings"></div>
    `;const n=document.createElement("div");n.className="glass-panel",n.style.padding="1.5rem",n.style.overflowY="auto",n.innerHTML=`
        <h2 style="font-size:1.2rem; font-weight:700; margin-bottom:1rem; color:var(--color-purple)">📈 Mes PC en Vente (Flips)</h2>
        <div style="display:flex; flex-direction:column; gap:1rem" id="my-listings"></div>
    `,e.appendChild(s),e.appendChild(n),t.appendChild(e),st(),at()}function st(){const t=document.getElementById("bargain-listings");if(t.innerHTML="",o.bargainBin.length===0){t.innerHTML=`<div style="text-align:center; padding:3rem; color:var(--text-muted)">Aucune offre d'occasion aujourd'hui. Revenez demain !</div>`;return}o.bargainBin.forEach(e=>{const s=document.createElement("div");s.className="part-card",s.style.flexDirection="column";let n=[];Object.keys(e.pc).forEach(a=>{if(e.pc[a]&&e.pc[a].partId){const r=p(e.pc[a].partId);r&&n.push(r.name)}}),s.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-amber">PC d'occasion</span>
                <span class="part-price text-emerald">${e.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px; font-size:1.05rem">${e.name}</div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:8px">${e.description}</p>
            
            <div style="font-size:0.7rem; color:var(--text-muted); background:rgba(0,0,0,0.2); padding:6px; border-radius:4px; margin-bottom:12px">
                <strong>Composants inclus :</strong> ${n.join(", ")}
            </div>

            <button class="btn-primary glow-btn" style="width:100%" id="btn-buy-flip-${e.id}">
                Acheter pour ${e.price}$
            </button>
        `,t.appendChild(s),document.getElementById(`btn-buy-flip-${e.id}`).addEventListener("click",()=>{nt(e)})})}function nt(t){if(o.money>=t.price){o.money-=t.price;const e={id:"pc-flip-"+E(),partId:"special-pc-case",type:"pc_flip",name:t.name,condition:"used",pc:t.pc,pricePaid:t.price};o.inventory.push(e),o.bargainBin=o.bargainBin.filter(s=>s.id!==t.id),g(),m(`PC "${t.name}" acheté ! Installez-le sur un établi libre depuis l'onglet Établi pour le réparer.`,"success"),window.updateHud(),ae()}else m("Fonds insuffisants !","error")}function at(){const t=document.getElementById("my-listings");t.innerHTML="";const e=o.customPcs||[];if(e.length===0){t.innerHTML=`
            <div style="text-align:center; padding:3rem; color:var(--text-muted)">
                <p>Aucun ordinateur mis en vente.</p>
                <small>Montez un PC libre sur un établi et mettez-le en vente pour générer du profit !</small>
            </div>
        `;return}e.forEach((s,n)=>{var r,c,l,d;const a=document.createElement("div");a.className="part-card",a.style.flexDirection="column",a.innerHTML=`
            <div style="display:flex; justify-content:space-between; align-items:flex-start">
                <span class="part-category text-purple">En vente</span>
                <span class="part-price text-emerald">${s.price}$</span>
            </div>
            <div class="part-name" style="margin-top:5px">${s.name}</div>
            
            <div class="part-specs">
                <div class="part-spec-item"><span>Benchmark :</span><span class="text-cyan font-mono">${s.pc.score} Pts</span></div>
                <div class="part-spec-item"><span>CPU :</span><span>${((c=p((r=s.pc.cpu)==null?void 0:r.partId))==null?void 0:c.name)||"Aucun"}</span></div>
                <div class="part-spec-item"><span>GPU :</span><span>${((d=p((l=s.pc.gpu)==null?void 0:l.partId))==null?void 0:d.name)||"Aucun"}</span></div>
            </div>

            <button class="btn-secondary text-crimson" style="width:100%; border-color:rgba(255,0,85,0.2)" id="btn-cancel-listing-${n}">
                Retirer de la vente (Récupérer)
            </button>
        `,t.appendChild(a),document.getElementById(`btn-cancel-listing-${n}`).addEventListener("click",()=>{rt(n)})})}function rt(t){const e=o.customPcs[t],s={id:"pc-flip-"+E(),partId:"special-pc-case",type:"pc_flip",name:e.name,condition:"used",pc:e.pc,pricePaid:e.price*.5};o.inventory.push(s),o.customPcs.splice(t,1),g(),m("Ordinateur retiré du marché BargainBin.","info"),ae()}function it(){if(!o.customPcs||o.customPcs.length===0)return 0;let t=0,e=0;const s=[];return o.customPcs.forEach(n=>{const a=n.pc;let r=0;Object.keys(a).forEach(d=>{if(a[d]&&a[d].partId){const u=p(a[d].partId);u&&(r+=u.price)}});const c=n.price/(r||1);a.score/1e4;let l=.5;c<.8?l=.9:c<1.2?l=.7:c<1.5?l=.4:c<2?l=.15:l=.02,a.score>8e3&&(l+=.1),Math.random()<l?(t+=n.price,e+=1,o.xp+=50):s.push(n)}),o.customPcs=s,o.money+=t,g(),{soldCount:e,totalSales:t}}let me="emails";function m(t,e="info"){const s=document.getElementById("notification-container");if(!s)return;const n=document.createElement("div");n.className=`toast ${e}`;let a="ℹ️";e==="success"?a="✅":e==="error"?a="❌":e==="warning"&&(a="⚠️"),n.innerHTML=`
        <span style="font-size:1.1rem">${a}</span>
        <span class="toast-msg">${t}</span>
    `,s.appendChild(n),setTimeout(()=>{n.classList.add("show")},10),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>{n.remove()},300)},4e3)}function Z(){document.getElementById("hud-level").textContent=o.level,document.getElementById("hud-money").textContent=`${o.money.toLocaleString("fr-FR",{minimumFractionDigits:2})}$`,document.getElementById("hud-day").textContent=`Jour ${o.day}`;const t=Y(o.level),e=Math.min(o.xp/t*100,100);document.getElementById("hud-xp-fill").style.width=`${e}%`,document.getElementById("hud-xp-text").textContent=`${o.xp} / ${t} XP`;const s=o.activeJobs.filter(a=>a.status==="available"||a.status==="ready").length,n=document.getElementById("badge-emails");s>0?(n.style.display="block",n.textContent=s):n.style.display="none"}function ee(t){me=t,document.querySelectorAll(".sidebar .nav-item").forEach(e=>{e.getAttribute("data-tab")===t?e.classList.add("active"):e.classList.remove("active")}),document.querySelectorAll(".viewport .tab-pane").forEach(e=>{e.id===`pane-${t}`?e.classList.add("active"):e.classList.remove("active")}),t==="emails"?U():t==="workbench"?x():t==="shop"?je():t==="inventory"?ne():t==="bargainbin"&&ae(),g()}function ot(){const t=it(),e=Pe();Z();let s="Journée terminée !";e.deliveriesCount>0&&(s+=` / ${e.deliveriesCount} Colis de pièces livrés.`),e.newJobsCount>0&&(s+=` / ${e.newJobsCount} Nouveaux e-mails de clients reçus.`),t.soldCount>0&&(s+=` / Flip vendu : +${t.totalSales}$ sur BargainBin !`),m(s,"success"),ee(me)}document.addEventListener("DOMContentLoaded",()=>{we(),window.updateHud=Z,Z(),document.querySelectorAll(".sidebar .nav-item").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-tab");ee(e)})}),document.getElementById("btn-next-day").addEventListener("click",ot),ee("emails"),setTimeout(()=>{m("Bienvenue dans PC Architect Tycoon ! Consultez votre boîte de réception d'e-mails pour accepter vos premiers contrats.","success")},1e3)});
