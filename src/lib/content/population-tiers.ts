// Population tiers — 5 niveaux avec contenu adapté "géothermie"
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
        intro: `Dans les communes rurales, la géothermie s'impose comme une solution de chauffage particulièrement pertinente. Les maisons individuelles avec terrain disposent généralement de la surface nécessaire pour un captage horizontal (150 à 300 m² de terrain selon la surface à chauffer). Les foreurs et installateurs se déplacent sur rendez-vous et proposent une étude de sol préalable. La distance avec les agences peut imposer de bien préparer son projet en amont : relevé cadastral, étude thermique, et consultation de la carte géologique.`,
        cas_usage: `Les projets les plus fréquents : remplacement d'un chauffage fioul par une PAC géothermique (les communes rurales sont les plus touchées par la dépendance au fioul), installation géothermique dans une construction neuve RT2020, chauffage d'une longère ou d'un corps de ferme rénové, et géothermie sur eau de nappe (puits) dans les zones agricoles.`,
        conseil_pratique: `En zone rurale, le captage horizontal est souvent le plus économique si votre terrain le permet (1,5 à 2 fois la surface habitable). Les artisans foreurs locaux proposent des tarifs 10 à 20% inférieurs aux grandes entreprises nationales, avec l'avantage d'un suivi de chantier de proximité. Demandez systématiquement une étude de sol avant tout engagement.`,
        logistique: `Le forage en commune rurale est facilement réalisable (accès terrain, pas de contraintes de voisinage). Comptez 1 à 3 jours pour le forage vertical ou 3 à 5 jours pour la pose des capteurs horizontaux. Le surcoût de déplacement du foreur peut représenter 500 à 1 000€ selon l'éloignement.`,
        budget_contexte: `les prix sont souvent plus compétitifs que dans les grandes villes, avec des artisans locaux proposant des tarifs 10 à 15% inférieurs. Le principal poste de surcoût reste le déplacement du foreur si aucun professionnel n'est implanté à proximité.`,
        checklist_items: [
            "Vérifier la surface de terrain disponible (captage horizontal : 1,5× la surface à chauffer)",
            "Consulter la carte géologique du BRGM pour votre parcelle",
            "Demander 3 devis d'installateurs RGE — vérifier la qualification QualiPAC",
            "Faire réaliser une étude de sol (incluse dans le devis chez la majorité des foreurs)",
            "Déposer la déclaration préalable de forage auprès de la DREAL",
            "Vérifier votre éligibilité MaPrimeRénov' + CEE (jusqu'à 15 000€ d'aides)",
            "Planifier les travaux 3-4 mois avant la saison de chauffe",
            "Prévoir l'accès terrain pour la foreuse (largeur min. 3 m, portance suffisante)",
        ],
        marques_recommandees: ["viessmann", "nibe", "atlantic", "stiebel-eltron"],
    },
    S: {
        tier: 'S',
        label: 'bourg ou petite ville',
        intro: `Dans les petites villes, la géothermie séduit de plus en plus de propriétaires de pavillons, en construction neuve comme en rénovation lourde. Les maisons des années 70-90, grandes consommatrices d'énergie, sont les premières candidates au remplacement de la chaudière gaz ou fioul par une pompe à chaleur géothermique. Plusieurs foreurs et installateurs RGE interviennent dans un rayon de 30 à 50 km.`,
        cas_usage: `Les projets les plus courants : remplacement d'une chaudière fioul par une PAC géothermique eau-eau ou sol-eau, installation géothermique dans un pavillon neuf de lotissement, rénovation énergétique globale (isolation + géothermie), et mise en place d'un puits canadien couplé à la PAC pour le rafraîchissement d'été.`,
        conseil_pratique: `Comparez au moins 3 devis d'installateurs RGE. Vérifiez que le devis inclut : l'étude de sol, le forage ou la pose des capteurs, la fourniture de la PAC, les raccordements hydrauliques et électriques. Les enseignes comme Viessmann ou NIBE ont des réseaux d'installateurs certifiés qui proposent des garanties étendues (5 à 10 ans).`,
        logistique: `Le forage géothermique nécessite un accès pour la foreuse (largeur minimale 3 m, portance du sol). Dans les bourgs, l'espace peut être plus contraint qu'en zone rurale. Comptez 2 à 4 jours de chantier pour l'ensemble de l'installation (forage + PAC + raccordements).`,
        budget_contexte: `les tarifs pratiqués sont proches de la moyenne nationale, avec un bon équilibre entre installateurs indépendants et réseaux de marques. La concurrence locale maintient des prix compétitifs.`,
        checklist_items: [
            "Faire réaliser un diagnostic thermique de votre logement (DPE ou audit énergétique)",
            "Vérifier la faisabilité géotechnique (type de sol, profondeur de nappe)",
            "Comparer 3 devis d'installateurs certifiés QualiPAC / RGE",
            "Choisir le type de captage adapté : horizontal, vertical ou nappe phréatique",
            "Déposer la déclaration de forage en mairie et auprès de la DREAL",
            "Constituer le dossier d'aides : MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ",
            "Prévoir le raccordement électrique (PAC = 3 à 5 kW de puissance absorbée)",
            "Planifier la mise en service 2-3 semaines avant le début de la saison de chauffe",
        ],
        marques_recommandees: ["viessmann", "nibe", "vaillant", "atlantic"],
    },
    M: {
        tier: 'M',
        label: 'ville moyenne',
        intro: `Dans les villes moyennes, le marché de la géothermie est structuré avec plusieurs installateurs RGE certifiés. Les propriétaires de maisons individuelles bénéficient d'un choix large entre différentes technologies : captage vertical (sondes), horizontal (nappe de capteurs), ou sur nappe phréatique (aquathermie). Le parc immobilier varié — des pavillons de périphérie aux maisons de ville avec jardin — génère une demande croissante de solutions géothermiques.`,
        cas_usage: `Les travaux les plus fréquents : installation d'une PAC géothermique avec sondes verticales (quand le terrain est limité), remplacement d'un chauffage gaz par une pompe à chaleur sol-eau, géothermie en maison neuve avec plancher chauffant, et rénovation globale couplant isolation thermique et PAC géothermique pour atteindre l'étiquette B ou C.`,
        conseil_pratique: `Profitez de la densité d'installateurs pour négocier. Les marques comme Viessmann, Vaillant et NIBE ont des réseaux denses dans les villes moyennes. Demandez systématiquement une étude thermique (800 à 1 500€, souvent prise en charge par l'installateur) pour dimensionner correctement la PAC. Un surdimensionnement coûte cher, un sous-dimensionnement entraîne une surconsommation.`,
        logistique: `Le forage vertical en ville moyenne peut nécessiter une autorisation de voirie si le foreur doit stationner sur la voie publique. Vérifiez les règles d'urbanisme (PLU) concernant les forages. Le chantier complet dure 3 à 5 jours ouvrés.`,
        budget_contexte: `les prix sont dans la moyenne nationale avec une bonne couverture d'installateurs. La concurrence entre professionnels maintient des tarifs compétitifs et vous permet de négocier efficacement.`,
        checklist_items: [
            "Réaliser un audit énergétique complet (obligatoire pour les passoires thermiques F-G)",
            "Consulter le PLU de votre commune pour les contraintes de forage",
            "Obtenir 3 à 5 devis comparatifs d'installateurs RGE certifiés QualiPAC",
            "Faire réaliser une étude géothermique préalable (sol + dimensionnement PAC)",
            "Choisir entre captage vertical (compact) ou horizontal (économique, si terrain disponible)",
            "Monter le dossier financier : MaPrimeRénov' + CEE + éco-PTZ + aides locales",
            "Vérifier la compatibilité avec votre système de chauffage (plancher chauffant idéal, radiateurs = haute température)",
            "Planifier le chantier en coordination avec les travaux d'isolation éventuels",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "atlantic"],
    },
    L: {
        tier: 'L',
        label: 'grande ville',
        intro: `Dans les grandes villes, la géothermie connaît un essor significatif, portée par les objectifs de décarbonation et les interdictions progressives du chauffage gaz en neuf. Les installateurs spécialisés sont nombreux et proposent des solutions adaptées aux contraintes urbaines : sondes verticales sur petites parcelles, aquathermie sur nappe, et même géothermie de surface pour les immeubles collectifs. Les bureaux d'études thermiques et les architectes intègrent de plus en plus la géothermie dans leurs projets.`,
        cas_usage: `Les projets les plus fréquents : installation géothermique en maison de ville avec jardin réduit (sondes verticales obligatoires), géothermie sur nappe phréatique en zone alluviale, remplacement de chaudière gaz dans les quartiers pavillonnaires, et projets collectifs de géothermie en copropriété ou écoquartier.`,
        conseil_pratique: `En grande ville, les contraintes d'accès (rues étroites, voisinage) et les réglementations (forages soumis à déclaration en mairie) imposent de s'adresser à des professionnels expérimentés. Les sondes verticales (100 à 200 m de profondeur) sont souvent la seule option en zone pavillonnaire dense. Prévoyez un surcoût de 1 000 à 3 000€ pour les contraintes logistiques urbaines.`,
        logistique: `Le forage en milieu urbain nécessite une déclaration préalable en mairie et parfois une autorisation de voirie. L'accès de la foreuse doit être anticipé (stationnement, protection du voisinage). Les nuisances sonores du forage durent 1 à 2 jours. L'ensemble du chantier dure 4 à 7 jours.`,
        budget_contexte: `les tarifs sont 10 à 20% supérieurs à la moyenne nationale en raison des contraintes logistiques urbaines, du coût de la main-d'œuvre et des autorisations administratives. La concurrence entre installateurs permet cependant de négocier.`,
        checklist_items: [
            "Vérifier les contraintes urbanistiques du PLU et du règlement de copropriété",
            "Mandater un bureau d'études thermiques pour l'étude de faisabilité",
            "Demander l'autorisation de voirie pour le stationnement de la foreuse",
            "Obtenir 3 à 5 devis d'installateurs RGE spécialisés milieu urbain",
            "Déposer la déclaration de forage (DREAL + mairie) — délai 1-2 mois",
            "Anticiper le surcoût logistique urbain (stationnement, accès, bruit)",
            "Constituer le dossier MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ",
            "Prévenir les voisins et organiser le chantier pour limiter les nuisances",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
    XL: {
        tier: 'XL',
        label: 'métropole',
        intro: `Dans les métropoles, la géothermie atteint son potentiel maximal grâce aux infrastructures existantes (réseaux de chaleur géothermiques en Île-de-France) et à la concentration de bureaux d'études spécialisés. La nappe du Dogger en région parisienne alimente déjà 300 000 logements. Pour les maisons individuelles, les sondes géothermiques verticales et l'aquathermie sur nappe phréatique sont les solutions privilégiées. Les programmes immobiliers neufs intègrent de plus en plus la géothermie collective.`,
        cas_usage: `Les projets les plus fréquents : géothermie sur nappe phréatique dans les quartiers avec ressource en eau souterraine, sondes verticales profondes (150-200 m) en maison de ville avec petit jardin, géothermie collective en copropriété avec réseau de chaleur basse température, et hybridation géothermie + solaire thermique pour les maisons BBC.`,
        conseil_pratique: `En métropole, faites appel à un bureau d'études thermiques référencé pour les projets supérieurs à 20 000€ : son expertise en réglementation et en dimensionnement vous évitera les erreurs coûteuses. Les installateurs certifiés QualiPAC sont garants de la qualité de l'installation et de l'éligibilité aux aides financières. Comptez 2 à 3 mois entre le premier devis et le début des travaux.`,
        logistique: `La logistique de forage en métropole est la plus contrainte : autorisation de voirie obligatoire (délai 15 à 30 jours), créneau de forage imposé (7h-18h), protection acoustique du voisinage, et gestion des boues de forage. Les foreurs spécialisés en milieu urbain facturent un surcoût de 2 000 à 4 000€ par rapport à la zone rurale.`,
        budget_contexte: `les tarifs sont les plus élevés de France (15 à 25% au-dessus de la moyenne nationale). Les contraintes logistiques urbaines, le coût de la main-d'œuvre qualifiée et les autorisations administratives expliquent ces surcoûts. Toutefois, les aides financières (MaPrimeRénov', CEE) sont identiques partout en France.`,
        checklist_items: [
            "Mandater un bureau d'études thermiques certifié pour l'audit et le dimensionnement",
            "Vérifier la ressource géothermique locale (carte du BRGM, présence de nappe)",
            "Consulter les services d'urbanisme pour les contraintes de forage en zone dense",
            "Demander l'autorisation de voirie et de forage — prévoir 2-3 mois de délai",
            "Obtenir 3 à 5 devis d'installateurs RGE spécialisés en milieu urbain dense",
            "Constituer le dossier d'aides complet : MaPrimeRénov' + CEE + TVA 5,5% + éco-PTZ",
            "Organiser la logistique de chantier : accès foreuse, créneau horaire, protection voisinage",
            "Planifier la mise en service et le contrat d'entretien annuel (150-300€/an)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
};
