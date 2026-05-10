// Population tiers — 5 niveaux avec contenu adapté "prix forage géothermie"
// Angle éditorial : coût du forage, tarif au mètre, budget technique, ROI
// XS (<2000), S (2000-10000), M (10000-50000), L (50000-200000), XL (>200000)

export type PopTier = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface PopTierContent {
    tier: PopTier;
    label: string;
    intro: string;
    cas_usage: string;
    conseil_pratique: string;
    logistique: string;
    budget_contexte: string;
    checklist_items: string[];
    marques_recommandees: string[];
}

export function getPopTier(population?: number): PopTier {
    if (population === undefined || population === null || population === 0) return 'S';
    if (population < 2000) return 'XS';
    if (population < 10000) return 'S';
    if (population < 50000) return 'M';
    if (population < 200000) return 'L';
    return 'XL';
}

export const populationTiers: Record<PopTier, PopTierContent> = {
    XS: {
        tier: 'XS',
        label: 'commune rurale',
        intro: `En commune rurale, le prix d'un forage géothermique est souvent le plus attractif de France. La disponibilité foncière permet d'opter pour le captage horizontal (4 000 à 8 000€) au lieu du forage vertical (8 000 à 15 000€). Les foreurs locaux, habitués aux terrains agricoles et aux grandes parcelles, proposent des tarifs au mètre linéaire compétitifs : de 45€/ml en terrain meuble à 75€/ml en roche compacte. Le principal surcoût à anticiper est le déplacement de la foreuse (500 à 1 200€ selon la distance).`,
        cas_usage: `Estimations de coûts les plus fréquentes : remplacement d'une cuve fioul par une PAC géothermique avec captage horizontal (budget total 12 000 à 18 000€), forage vertical simple sonde 100 m pour pavillon 120 m² (coût forage seul : 5 500 à 7 500€), et installation complète neuve en maison RT2020 avec plancher chauffant (15 000 à 22 000€ tout compris avant aides).`,
        conseil_pratique: `En zone rurale, vous disposez d'un levier budgétaire majeur : le choix entre captage horizontal et vertical. Le captage horizontal (tranchées à 1,2 m de profondeur sur 200 à 400 m²) coûte 40 à 60% moins cher que le forage vertical. Pour un pavillon de 100 m², la différence atteint 4 000 à 7 000€. Demandez systématiquement les deux chiffrages pour comparer.`,
        logistique: `L'accès terrain en zone rurale est rarement un problème : portail large, sol porteur, espace de manœuvre. Le coût de mobilisation de la foreuse (transport sur remorque) représente 800 à 1 500€ forfaitaires. Le forage vertical dure 1 à 2 jours (40 à 60 ml/jour selon la roche). Le terrassement horizontal prend 2 à 4 jours avec une mini-pelle (location : 250 à 350€/jour).`,
        budget_contexte: `le prix au mètre linéaire de forage est parmi les plus bas de France (45 à 70€/ml) grâce à l'absence de contraintes urbaines. Le poste principal de surcoût reste le transport de la foreuse si aucun foreur n'est basé dans un rayon de 30 km (supplément de 500 à 1 200€).`,
        checklist_items: [
            "Faire estimer la surface de terrain disponible pour comparer captage horizontal vs vertical",
            "Demander la carte géologique BRGM de votre parcelle pour anticiper le prix/ml de forage",
            "Obtenir 3 devis détaillés de foreurs certifiés QualiForage — comparer le coût au mètre",
            "Vérifier si l'étude de sol préalable (500-1 000€) est incluse dans le devis de forage",
            "Déposer la déclaration de forage auprès de la DREAL (délai 1-2 mois, gratuit)",
            "Chiffrer le reste à charge après MaPrimeRénov' + CEE (économie de 10 000 à 15 000€)",
            "Comparer le coût total PAC géothermique vs remplacement chaudière fioul sur 15 ans",
            "Vérifier que le devis inclut le transport de la foreuse et l'évacuation des boues",
        ],
        marques_recommandees: ["viessmann", "nibe", "atlantic", "stiebel-eltron"],
    },
    S: {
        tier: 'S',
        label: 'bourg ou petite ville',
        intro: `Dans les petites villes, le coût d'un forage géothermique se situe dans la fourchette basse nationale. Les foreurs interviennent dans un rayon de 30 à 50 km, ce qui limite les frais de déplacement (300 à 800€). Le tarif moyen constaté est de 50 à 75€ par mètre linéaire de sonde géothermique. Pour un pavillon standard de 120 m², le budget forage seul (2 sondes de 80 m) s'établit entre 8 000 et 12 000€. La PAC géothermique ajoute 7 000 à 15 000€ selon la marque et la puissance choisie.`,
        cas_usage: `Budgets types les plus demandés : remplacement chaudière fioul par PAC géothermique avec forage vertical 2×80 m (budget total : 18 000 à 25 000€), installation complète en lotissement neuf avec plancher chauffant (16 000 à 22 000€), rénovation globale isolation + PAC géothermique horizontale (25 000 à 35 000€ tout compris avant aides), et aquathermie sur puits existant (12 000 à 18 000€).`,
        conseil_pratique: `Exigez un devis de forage au forfait plutôt qu'au réel. Un devis au réel expose au risque d'aléa géologique : si le foreur rencontre une couche de granite dur imprévue, le prix au mètre peut doubler (passage au marteau fond de trou). Un bon foreur assume ce risque dans son forfait. Vérifiez aussi que le devis inclut la cimentation des sondes (norme NF X10-970), poste souvent facturé en supplément (800 à 1 500€).`,
        logistique: `Le forage en bourg est facilement réalisable avec un accès portail de 3 m minimum. Le chantier de forage dure 1 à 3 jours selon le nombre de sondes. Le coût de la gestion des boues de forage (évacuation en décharge agréée) représente 500 à 1 200€ selon le volume. Total chantier complet (forage + PAC + raccordements) : 4 à 6 jours ouvrés.`,
        budget_contexte: `les tarifs de forage sont proches de la moyenne nationale (55 à 70€/ml). La présence de plusieurs foreurs dans un rayon raisonnable assure une concurrence saine. Le rapport qualité-prix est optimal pour les propriétaires de pavillons.`,
        checklist_items: [
            "Faire réaliser un diagnostic thermique pour dimensionner la puissance de PAC (éviter surdimensionnement = surcoût inutile)",
            "Comparer le coût de 3 foreurs QualiForage — prix au mètre linéaire, forfait vs réel",
            "Vérifier que le devis inclut : étude de sol, forage, cimentation, PAC, raccordements, mise en service",
            "Demander le détail du poste forage : profondeur, diamètre, nombre de sondes, type de cimentation",
            "Déposer la déclaration DREAL + mairie pour le forage (gratuit, délai 1-2 mois)",
            "Simuler le reste à charge sur MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ",
            "Calculer le temps de retour sur investissement vs votre chauffage actuel (gaz, fioul, électrique)",
            "Prévoir le budget annuel d'entretien PAC (contrat : 180 à 300€/an)",
        ],
        marques_recommandees: ["viessmann", "nibe", "vaillant", "atlantic"],
    },
    M: {
        tier: 'M',
        label: 'ville moyenne',
        intro: `En ville moyenne, le marché du forage géothermique est suffisamment concurrentiel pour obtenir des prix compétitifs. Le tarif au mètre linéaire se situe entre 55 et 80€/ml selon la géologie locale. Le budget global d'une installation complète (forage + PAC + raccordements) varie de 18 000 à 28 000€ pour une maison de 120 m². La présence de plusieurs foreurs et installateurs certifiés dans un rayon de 20 à 40 km permet de négocier efficacement les devis. Le captage vertical est le plus courant (terrains limités), mais le captage horizontal reste envisageable en périphérie.`,
        cas_usage: `Grilles tarifaires les plus demandées : forage vertical 2×100 m avec PAC sol-eau 12 kW (budget : 22 000 à 30 000€), forage simple 1×120 m avec PAC compacte 8 kW (16 000 à 22 000€), aquathermie sur nappe avec doublet de puits (18 000 à 25 000€), et rénovation globale avec isolation + captage horizontal (30 000 à 40 000€ tout compris avant aides).`,
        conseil_pratique: `En ville moyenne, les écarts de prix entre foreurs atteignent 15 à 25% pour un même projet. Analysez les devis ligne par ligne : le poste "forage" doit détailler la profondeur en ml, le diamètre de sonde (32 ou 40 mm PE-HD), le type de cimentation (thermo-ciment), et la gestion des boues. Le poste "PAC" doit préciser la marque, le modèle exact, la puissance nominale et le SCOP certifié. Méfiez-vous des devis globaux sans détail.`,
        logistique: `En ville moyenne, l'accès de la foreuse peut nécessiter une dépose temporaire de portail ou de clôture (coût : 200 à 500€). Le stationnement de la foreuse sur voirie requiert une autorisation municipale (délai 15 jours). Le coût de mobilisation du chantier représente 1 000 à 1 500€. Durée totale : 4 à 6 jours ouvrés.`,
        budget_contexte: `les prix de forage sont dans la moyenne nationale avec une bonne densité de foreurs permettant de mettre en concurrence 3 à 5 entreprises. Le surcoût urbain reste modéré (5 à 10% vs zone rurale).`,
        checklist_items: [
            "Réaliser un audit énergétique pour calculer le dimensionnement exact de la PAC (puissance en kW)",
            "Consulter le PLU pour les contraintes de forage — distance aux limites de propriété (3 m minimum)",
            "Obtenir 3 à 5 devis comparatifs de foreurs QualiForage — analyser le prix/ml et les inclusions",
            "Vérifier que le devis de forage inclut : étude de sol, cimentation NF X10-970, test de pression",
            "Comparer le coût total forage vertical (8 000-15 000€) vs horizontal (4 000-8 000€) si terrain disponible",
            "Monter le dossier financier complet : MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ + aides locales",
            "Calculer le ROI sur 15 et 20 ans : économies annuelles vs investissement net après aides",
            "Planifier le chantier 3-4 mois à l'avance (délai DREAL + disponibilité du foreur)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "atlantic"],
    },
    L: {
        tier: 'L',
        label: 'grande ville',
        intro: `En grande ville, le prix d'un forage géothermique intègre un surcoût logistique urbain de 10 à 20%. Le tarif au mètre linéaire grimpe à 65 à 95€/ml en raison des contraintes d'accès (rues étroites, portails limités), des autorisations de voirie et de la gestion renforcée des boues. Le budget global d'une installation complète atteint 22 000 à 32 000€ pour un pavillon de 120 m². Le captage vertical par sondes (100 à 200 m) est quasi-systématique car les terrains sont trop exigus pour le captage horizontal. L'aquathermie sur nappe phréatique est une alternative économique quand la ressource est disponible.`,
        cas_usage: `Budgets types en agglomération : forage vertical profond 2×120 m avec PAC 14 kW (budget : 25 000 à 35 000€), aquathermie sur nappe alluviale avec doublet de puits 30 m (20 000 à 28 000€), remplacement chaudière gaz en maison de ville avec forage 1×150 m (22 000 à 30 000€), et géothermie collective en copropriété (80 000 à 150 000€ pour 6 à 10 logements).`,
        conseil_pratique: `En grande ville, le poste de forage représente 40 à 50% du budget total contre 30 à 40% en zone rurale. Ce surcoût vient des contraintes logistiques : foreuse compacte (plus lente), autorisation de voirie (150 à 300€), protection du voisinage (panneaux, bâches anti-bruit), et évacuation des boues en filière agréée (1 000 à 2 000€). Négociez ces postes un par un dans le devis.`,
        logistique: `Le forage en milieu urbain impose : une autorisation de voirie (délai 15-30 jours, 150-300€), un constat d'huissier préalable (protection façades voisines, 300-500€ optionnel), des horaires réglementés (7h-19h en semaine), et une foreuse compacte (diamètre d'accès minimal 2,5 m). Le surcoût logistique total représente 2 000 à 4 000€ par rapport à la zone rurale. Durée : 5 à 8 jours.`,
        budget_contexte: `les tarifs de forage sont supérieurs de 10 à 20% à la moyenne nationale en raison des contraintes logistiques urbaines. Toutefois, la forte concurrence entre installateurs (5 à 10 entreprises dans un rayon de 30 km) permet de négocier les prix de la PAC et des raccordements.`,
        checklist_items: [
            "Mandater un bureau d'études thermiques pour le dimensionnement et l'étude de faisabilité (800-1 500€)",
            "Vérifier les contraintes du PLU et du règlement de copropriété pour le forage",
            "Demander l'autorisation de voirie pour le stationnement de la foreuse (délai 15-30 jours)",
            "Obtenir 3 à 5 devis avec détail du surcoût logistique urbain (voirie, bruit, boues)",
            "Comparer le coût au mètre linéaire entre foreurs spécialisés milieu urbain",
            "Anticiper le budget cimentation renforcée en zone urbaine (norme NF X10-970)",
            "Constituer le dossier MaPrimeRénov' + CEE (jusqu'à 15 000€ d'aides sur le coût total)",
            "Prévoir le budget de remise en état du terrain après forage (gazon, allée : 500-1 000€)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
    XL: {
        tier: 'XL',
        label: 'métropole',
        intro: `En métropole, le coût d'un forage géothermique atteint les niveaux les plus élevés de France : 75 à 110€ par mètre linéaire de sonde. Le budget global d'une installation individuelle complète se situe entre 25 000 et 38 000€ pour un pavillon de 120 m². Ce surcoût de 15 à 30% par rapport à la moyenne nationale s'explique par la logistique lourde (foreuse compacte, créneau horaire imposé 7h-18h, gestion des boues réglementée, protection du voisinage), le coût de la main-d'œuvre qualifiée et les autorisations administratives multiples. En revanche, les aides financières (MaPrimeRénov' + CEE) sont identiques partout en France et compensent une part significative de ce surcoût.`,
        cas_usage: `Grilles budgétaires métropolitaines : forage vertical profond 2×150 m avec PAC premium 16 kW (30 000 à 42 000€), aquathermie sur nappe phréatique en zone alluviale (22 000 à 32 000€), géothermie collective en copropriété avec réseau basse température (100 000 à 250 000€ pour 10-20 logements), et hybridation géothermie + solaire thermique en maison BBC (28 000 à 38 000€).`,
        conseil_pratique: `En métropole, le coût du forage est le poste le plus sensible aux négociations. Trois leviers pour réduire la facture : 1) Grouper votre forage avec un voisin (la foreuse est déjà sur place, économie de 1 000 à 2 000€ par chantier), 2) Planifier hors saison (novembre-février = foreurs moins chargés = prix négociables), 3) Opter pour l'aquathermie si la nappe est accessible (30% moins cher que le forage vertical profond).`,
        logistique: `La logistique de forage en métropole est la plus complexe et coûteuse : autorisation de voirie (délai 20-45 jours, 200-400€), constat d'huissier (500-800€), foreuse ultra-compacte (surcoût matériel de 1 500€), créneau horaire imposé (7h-18h, pénalité si dépassement), protection acoustique (panneaux, 300-600€), et filière boues réglementée (1 500 à 2 500€). Le surcoût logistique total atteint 3 000 à 5 000€. Durée : 6 à 10 jours.`,
        budget_contexte: `les tarifs sont les plus élevés de France (75 à 110€/ml de forage, +15 à 30% sur le budget total). Ce surcoût est structurel : main-d'œuvre qualifiée, logistique urbaine contrainte, autorisations administratives multiples. Les aides financières nationales (MaPrimeRénov' + CEE = jusqu'à 15 000€) sont identiques et compensent partiellement cet écart.`,
        checklist_items: [
            "Mandater un bureau d'études thermiques certifié pour le dimensionnement et l'étude géologique (1 000-2 000€)",
            "Vérifier la ressource géothermique sur InfoTerre (BRGM) : profondeur de nappe, lithologie, forages voisins",
            "Obtenir l'autorisation de voirie et de forage — anticiper 2-3 mois de délai administratif",
            "Demander 3 à 5 devis avec ventilation détaillée : forage (€/ml), PAC (marque/modèle), logistique urbaine",
            "Comparer forage vertical profond vs aquathermie sur nappe (économie de 30% si nappe accessible)",
            "Calculer le budget total TTC puis le reste à charge après MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ",
            "Négocier le forage hors saison (novembre-février) pour obtenir 5 à 10% de remise",
            "Prévoir le budget maintenance annuel (contrat d'entretien PAC : 200 à 400€/an en métropole)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
};
