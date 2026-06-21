# 🖥️ PC Architect Tycoon - Spécifications Techniques & Guide d'Architecture

Ce document sert de guide de référence et d'analyse technique complète pour le projet **PC Architect Tycoon** (situé sous `pc-builder-tycoon/`). Il détaille l'architecture du code, les modèles d'état, les formules mathématiques, les contraintes de conception et les règles de compatibilité matérielle simulées dans le jeu.

---

## 🗺️ 1. Structure du Projet & Cartographie des Fichiers

L'application est construite de manière modulaire en utilisant du JavaScript ES6 (modules ESM) et est propulsée par le bundler ultra-rapide **Vite**.

```
pc-builder-tycoon/
├── index.html                  # Structure DOM principale (HUD, Barres de navigation, volet d'affichage)
├── package.json                # Scripts d'exécution (dev, build, preview) et dépendances (Vite)
├── package-lock.json           # Arbre d'installation figé pour l'environnement Node/npm
├── .gitattributes              # Configuration Git pour la normalisation des fins de lignes (LF)
└── src/
    ├── main.js                 # Entrée principale de l'application, gestionnaire d'onglets, toasts et HUD
    ├── components.js           # Base de données statique complète de tous les composants matériels (CPU, GPU, etc.)
    ├── jobs.js                 # Générateur de contrats d'e-mails clients et validateurs d'objectifs
    ├── state.js                # Machine d'état globale, gestionnaire de sauvegarde, livraison et progression
    ├── style.css               # Feuille de style CSS Premium avec thèmes néon cyberpunk et interface holographique
    └── ui/                     # Vues dynamiques injectées dans le viewport principal
        ├── emails.js           # Vue "Emails & Commandes" : lecture des mails, acceptation et livraison des PC clients
        ├── workbench.js        # Vue "Établi de Montage" : modélisation visuelle du boîtier, câblage et pâte thermique
        ├── shop.js             # Vue "Boutique de Pièces" : catalogue filtré et panier d'achats (Standard ou Express)
        ├── inventory.js        # Vue "Mon Inventaire" : affichage du stock de pièces détachées et revente d'occasion
        └── bargainbin.js       # Vue "BargainBin" : achat d'ordinateurs en panne et mise en vente de PC assemblés (Flips)
        └── virtualos.js        # Vue "VirtualOS" : émulateur d'OS (BIOS, virus scanner, overclocking, 3D benchmark, BSOD)
```

---

## ⚡ 2. Contraintes Architecturales & Choix Techniques

Afin de garantir un jeu performant, portable et moderne, les conventions suivantes sont appliquées au projet :
1. **Modularité ES6 native (ESM) :** Contrairement aux builds d'anciennes architectures, le projet utilise pleinement les instructions `import` et `export` en JS vanilla. Vite compile ensuite ces modules pour la production dans le dossier `dist/`.
2. **Séparation Stricte de l'État et de l'UI :** L'état du jeu (`src/state.js`) est le seul garant de la vérité. Les scripts UI (`src/ui/*.js`) lisent l'état global et injectent dynamiquement du HTML dans le DOM à chaque transition d'action. La fonction `saveGame()` est systématiquement appelée après chaque action impactant l'état pour assurer la persistance via `localStorage`.
3. **Pas de Modales Natives du Navigateur :** Pour préserver l'immersion visuelle et éviter de bloquer l'exécution asynchrone, les alertes et invites d'interactions matérielles sont intégrées à l'aide d'un conteneur de notifications personnalisé (`showToast`) ou de panneaux d'overlay fluides (`.modal-overlay`).
4. **Identifiants uniques robustes :** Chaque pièce d'inventaire ou projet client en cours reçoit un identifiant cryptographique unique généré via `generateUniqueId()` pour éviter les collisions d'état lors du désassemblage ou de la vente.

---

## 📈 3. Progression, Finances & Formules Économiques

### A. Table d'Expérience (XP)
Le joueur démarre au Niveau 1. La progression de niveau requis pour passer au niveau supérieur suit une courbe de puissance exponentielle :
* **Niveau 1 :** $100$ XP requis.
* **Niveau $lvl \ge 2$ :** 
  $$\text{XP requis} = \text{Arrondir}(100 \times 1.8^{lvl - 1})$$
  *Chaque montée de niveau débloque du matériel de plus en plus performant et onéreux dans la boutique.*

### B. Commande & Logistique de livraison
Lors d'un achat de composants sur la boutique en ligne (`shop.js`) :
* **Livraison Standard :** Coût additionnel fixe de $+10\$$. Les pièces sont placées dans une file d'attente (`deliveryQueue`) et livrées le lendemain matin ($state.day + 1$) lors du clic sur le bouton "Terminer la journée".
* **Livraison Express :** Coût additionnel fixe de $+50\$$. Les pièces sont livrées instantanément dans l'inventaire du joueur ($state.day$).

### C. Évaluation de l'Inventaire & Revente
Les pièces détenues en stock ont une valeur de revente calculée selon leur état de vétusté :
* **Neuf (`new`) :** $50\%$ du prix de vente d'origine.
* **Occasion (`used`) :** $30\%$ du prix de vente d'origine.
* **En Panne (`broken`) :** $5\%$ du prix de vente d'origine.

---

## 🔧 4. Le Marché d'Occasion & Flips (BargainBin)

Le cœur spéculatif du jeu repose sur l'achat et la revente (flipping) d'ordinateurs usagés :
1. **Génération d'Offres d'Occasion (Achat) :** Chaque jour, le système génère 2 PC d'occasion défectueux. Le prix d'achat d'un PC d'occasion est calculé par rapport à la valeur résiduelle cumulée de ses pièces, assorti d'une réduction substantielle :
   $$\text{Valeur de base} = \sum_{\text{pièces}} \left( \text{Prix d'origine} \times M \right)$$
   *où $M = 0.6$ pour une pièce d'occasion, $M = 0.1$ pour une pièce en panne, et $M = 0$ pour une pièce absente.*
   $$\text{Prix d'achat de l'offre} = \text{Arrondir}(\text{Valeur de base} \times 0.8)$$
2. **Revente de PC assemblés par le joueur (Vente) :** Le joueur peut configurer librement le nom et le prix de vente souhaité de son PC libre sur l'établi. Pendant la nuit, lors de la transition vers le jour suivant, le moteur calcule la probabilité de vente de la machine :
   $$\text{Ratio de prix} = \frac{\text{Prix demandé}}{\text{Valeur totale d'achat neuve des composants installés}}$$
   * **Ratio $< 0.8$ (Sous-évalué) :** $90\%$ de chances de vente instantanée.
   * **Ratio entre $0.8$ et $1.2$ (Évaluation standard) :** $70\%$ de chances de vente.
   * **Ratio entre $1.2$ et $1.5$ (Marge agressive) :** $40\%$ de chances de vente.
   * **Ratio entre $1.5$ et $2.0$ (Surévalué) :** $15\%$ de chances de vente.
   * **Ratio $\ge 2.0$ (Excessif) :** $2\%$ de chances de vente.
   * *Bonus de performance :* Si le score de benchmark du PC dépasse $8000$ points, la probabilité est accrue de $+10\%$ ($+0.10$). Une vente réussie octroie un montant de cash équivalent au prix fixé et $+50$ XP bonus de flip !

---

## 🔌 5. Règles de Compatibilité, Montage & Overclocking

Le simulateur de montage de PC intègre des contraintes d'ingénierie et de compatibilité logicielle/matérielle réalistes :

### A. Règles de Montage & Dépendances
* **Carte Mère obligatoire :** Aucun composant (CPU, Cooler, RAM, GPU) ne peut être monté si l'emplacement Carte Mère est vide. Démonter la Carte Mère renvoie automatiquement toutes les pièces filles connectées vers l'inventaire du joueur.
* **Refroidisseur (Cooler) dépendant du CPU :** Le ventirad ne peut être posé que si un CPU est d'abord installé. Retirer le CPU désinstalle automatiquement le ventirad.

### B. Filtres de Compatibilité Matérielle
* **Socket CPU $\leftrightarrow$ Carte Mère :** Le processeur et la carte mère doivent posséder le même socket exact (`LGA1200`, `AM4`, `LGA1700`, `AM5`).
* **Type de RAM $\leftrightarrow$ Carte Mère :** La mémoire vive doit correspondre au type supporté par la carte mère (`DDR4` ou `DDR5`).
* **Socket Cooler $\leftrightarrow$ CPU :** La fiche technique du ventirad doit lister explicitement le socket du CPU installé sous peine d'échec de pose.

### C. Alimentation (PSU) & Surchauffe
* **Budget Énergétique (TDP) :** Au démarrage de la machine, le système calcule la puissance électrique cumulée requise par le CPU et le GPU. Si cette consommation excède la capacité en Watts fournie par l'alimentation installée, le PC subit un court-circuit de sécurité et refuse de s'allumer.
* **Pâte Thermique & Dissipation :** Si la pâte thermique est absente lors de la mise sous tension, le CPU surchauffe instantanément sous charge et atteint une température critique de $95^\circ\text{C}$ au repos.

### D. Overclocking de Précision & "Silicon Lottery"
Grâce à l'application *Overclock-O-Matic Pro* de VirtualOS, le joueur peut augmenter le coefficient multiplicateur du CPU, sa tension d'alimentation (VCore) et la fréquence de sa carte graphique (GPU). Cependant, cela modifie dynamiquement la stabilité électrique et thermique :
1. **Génération de Chaleur sous Charge :**
   $$\text{Température CPU sous Benchmark} = \text{Arrondir}(\text{Temp de base} + (\text{Progression} \times 0.3) + \text{Pénalité VCore})$$
   *où la température de base est de $45^\circ\text{C}$ (pâte appliquée) ou $95^\circ\text{C}$ (pâte absente), progression désigne le pourcentage d'avancement du benchmark, et la pénalité de tension thermique vaut $(\text{Tension VCore} - 1.20) \times 110^\circ\text{C}$.*
   * *Crash Thermique :* Si la température atteint ou dépasse **$98^\circ\text{C}$**, le PC plante immédiatement avec un écran bleu de la mort (BSOD) affichant l'erreur `WHEA_UNCORRECTABLE_ERROR`.
2. **Équation de Stabilité Électrique :**
   Pour fonctionner correctement à une fréquence élevée, le CPU nécessite une augmentation proportionnelle de sa tension d'alimentation :
   $$\text{Tension VCore Requise} = 1.20 + (\text{cpuOverclockMult} - 1.0) \times 0.5$$
   * *Crash Électrique (Instabilité) :* Si le coefficient multiplicateur du CPU dépasse $1.15\text{x}$ alors que la tension VCore réglée est inférieure à la tension requise par la formule ci-dessus, le système subit une panne de stabilité et déclenche un BSOD affichant l'erreur `SYSTEM_THREAD_EXCEPTION_NOT_HANDLED`.

---

## 💻 6. Système d'Exploitation Virtuel (VirtualOS)

Lorsque la machine s'allume avec succès (tous composants vitaux montés, alimentation branchée, câbles connectés et pâte thermique appliquée), l'écran de l'établi s'illumine et boot sur **VirtualOS** :
* **BIOS POST :** Affiche une séquence de détection de la configuration matérielle (processeur, capacité RAM, contrôleur graphique, disque de démarrage).
* **Installation de l'OS :** Si le disque dur est vierge (nouvel assemblage complet), le PC n'a aucun système d'exploitation. Le joueur doit installer l'OS à l'aide d'une clé USB bootable contenant un utilitaire interactif de formatage et de décompression de fichiers système.
* **Applications du Bureau Virtuel :**
  * **ℹ️ Infos Système :** Donne accès en temps réel aux fréquences physiques appliquées et à la température des cœurs.
  * **🛡️ SecuriGuard Virus Scanner :** Analyse pas à pas le système à la recherche de logiciels malveillants pour remplir les contrats de désinfection des clients (recherche et purge des chevaux de Troie de type mineur de crypto ou adwares publicitaires).
  * **🏎️ 3D Benchmark Tool :** Lance une simulation dynamique sur un canvas HTML5 (simulation de défilement d'étoiles polygonales à haute charge thermique) pour mesurer la puissance du PC. Le score de performance finale est calculé selon la formule pondérée officielle du jeu :
    $$\text{Score final} = \text{Arrondir}\left( (\text{gpuScore} \times \text{gpuClockMult}) \times 0.7 + (\text{cpuScore} \times \text{cpuClockMult}) \times 0.2 + \text{ramScore} \times 0.1 \right)$$
  * **⚙️ Overclocking :** Contrôles interactifs pour pousser la machine dans ses derniers retranchements et battre les scores cibles de certains clients.
