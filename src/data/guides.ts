export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  readTime: string;
  sections: GuideSection[];
  tableData?: TableRow[];
  faq?: { question: string; answer: string }[];
}

interface GuideSection {
  title: string;
  content: string;
  tip?: string;
}

interface TableRow {
  label: string;
  values: string[];
}

export const guides: Guide[] = [
  {
    slug: "prix-geothermie-2026",
    title: "Prix géothermie 2026 : forage, PAC et installation complète",
    description: "De 15 000€ pour un captage horizontal à 35 000€ pour un forage vertical profond : décryptage complet du coût d'une installation géothermique en 2026.",
    heroImage: "/images/guides/prix-geothermie-2026.png",
    readTime: "14 min",
    sections: [
      {
        title: "Quel budget pour la géothermie en 2026 ?",
        content: "Le prix d'une installation géothermique complète en France en 2026 varie de **13 000€ à 35 000€ TTC** selon le type de captage, la puissance de la PAC et la complexité du chantier. Le budget moyen constaté est de **22 000€ TTC**, forage et PAC géothermique inclus.\n\nCe montant comprend : l'étude de sol et le dimensionnement, le forage ou la pose des capteurs, la pompe à chaleur géothermique, les raccordements hydrauliques et électriques, et la mise en service.\n\nAprès déduction des aides financières (MaPrimeRénov' + CEE), le **reste à charge moyen descend entre 8 000€ et 18 000€**, ce qui rend la géothermie compétitive avec les autres systèmes de chauffage sur la durée de vie.",
        tip: "Le poste le plus variable est le forage. Un forage vertical de 100 m coûte entre 5 000€ et 10 000€ selon le sous-sol. Le captage horizontal coûte 30 à 40% moins cher mais nécessite un terrain 1,5 à 2 fois plus grand que la surface habitable."
      },
      {
        title: "Prix par type de captage géothermique",
        content: "**Captage horizontal (13 000 – 20 000€)** : Les capteurs sont enterrés à 1,2 m de profondeur sur une grande surface. Solution la moins chère, idéale si vous disposez de terrain. Inconvénient : le terrain au-dessus ne peut pas être construit ni planté d'arbres.\n\n**Captage vertical par sondes (18 000 – 30 000€)** : Des sondes géothermiques sont descendues dans des forages de 80 à 200 m de profondeur. Solution compacte, adaptée aux petits terrains. C'est la technologie la plus courante en France.\n\n**Aquathermie / nappe phréatique (16 000 – 28 000€)** : La PAC eau-eau puise et rejette l'eau dans la nappe phréatique. Excellent rendement (COP 5+) mais nécessite une étude hydrogéologique et deux puits (captage + rejet).",
        tip: "Le captage vertical offre le meilleur compromis entre performance et encombrement. En zone urbaine, c'est souvent la seule option viable."
      },
      {
        title: "Le coût du forage géothermique en détail",
        content: "Le forage représente **30 à 40% du coût total** de l'installation :\n\n- **Forage en terrain sédimentaire** (calcaire, grès) : 40 à 60€/mètre linéaire\n- **Forage en terrain granitique** : 60 à 80€/mètre linéaire\n- **Forage en terrain rocheux dur** : 80 à 120€/mètre linéaire\n\nPour une maison de 120 m² en zone H2 (2 500 DJU), il faut typiquement 2 forages de 80 m ou 1 forage de 150 m. Budget forage seul : **5 000 à 12 000€**.",
      },
      {
        title: "Les aides financières en 2026",
        content: "La géothermie est le système de chauffage le plus aidé en France :\n\n- **MaPrimeRénov'** : de 5 000€ (ménages supérieurs) à 11 000€ (ménages très modestes)\n- **CEE (Certificats d'Économies d'Énergie)** : 2 000 à 4 000€ selon la zone et le type de logement\n- **TVA réduite à 5,5%** : applicable sur l'ensemble de l'installation (matériel + main-d'œuvre)\n- **Éco-PTZ** : prêt à taux zéro jusqu'à 50 000€ pour financer le reste à charge\n- **Aides locales** : certains départements et régions proposent des compléments de 500 à 3 000€\n\n**Total des aides cumulables : jusqu'à 15 000€**, ramenant le reste à charge d'un forage vertical + PAC de 25 000€ à environ 10 000€.",
        tip: "Attention : pour bénéficier des aides, l'installateur DOIT être certifié RGE (Reconnu Garant de l'Environnement). Vérifiez la certification sur france-renov.gouv.fr avant de signer."
      },
      {
        title: "Rentabilité et retour sur investissement",
        content: "La géothermie offre le meilleur **retour sur investissement** de tous les systèmes de chauffage :\n\n- **Remplacement fioul** : économie de 1 500 à 2 200€/an → amortissement en 7-10 ans\n- **Remplacement gaz** : économie de 800 à 1 300€/an → amortissement en 10-14 ans\n- **Remplacement électrique** : économie de 1 000 à 1 800€/an → amortissement en 8-12 ans\n\nLa durée de vie du système est de **25 à 30 ans pour la PAC** et **50 ans et plus pour les sondes géothermiques**. L'entretien annuel coûte 150 à 300€ (contre 200 à 400€ pour une chaudière gaz)."
      }
    ],
    tableData: [
      { label: "Type de captage", values: ["Horizontal", "Vertical (sondes)", "Aquathermie (nappe)"] },
      { label: "Prix total TTC", values: ["13 000 – 20 000€", "18 000 – 30 000€", "16 000 – 28 000€"] },
      { label: "Forage/Terrassement", values: ["3 000 – 6 000€", "5 000 – 12 000€", "4 000 – 8 000€"] },
      { label: "Terrain nécessaire", values: ["150 – 300 m²", "Quelques m²", "2 puits"] },
      { label: "COP moyen", values: ["3,5 – 4,5", "4,0 – 5,0", "4,5 – 5,5"] },
      { label: "Durabilité sondes", values: ["40+ ans", "50+ ans", "30+ ans (puits)"] },
    ],
    faq: [
      { question: "Quel est le prix moyen d'une géothermie en 2026 ?", answer: "Le prix moyen TTC d'une installation géothermique complète est de 22 000€, incluant le forage, la PAC et les raccordements. Après aides, le reste à charge moyen est de 10 000 à 15 000€." },
      { question: "La géothermie est-elle plus chère qu'une PAC air-eau ?", answer: "Oui, l'investissement initial est 40 à 60% plus élevé qu'une PAC air-eau. Mais la géothermie est 25 à 30% plus performante (COP 4-5 vs 3-3.5) et sa durée de vie est double. L'amortissement est comparable." },
    ]
  },
  {
    slug: "captage-vertical-vs-horizontal",
    title: "Captage vertical vs horizontal : quel système pour votre terrain ?",
    description: "Sondes verticales ou collecteurs horizontaux ? Comparaison détaillée : coût, rendement, surface nécessaire et contraintes de chaque technologie.",
    heroImage: "/images/guides/captage-vertical-horizontal.png",
    readTime: "11 min",
    sections: [
      {
        title: "Deux technologies, deux philosophies",
        content: "Le choix entre captage vertical et horizontal est la première décision technique de votre projet géothermique. Il dépend principalement de **3 facteurs** : la surface de terrain disponible, le budget, et la nature du sous-sol.\n\nLe **captage horizontal** enterre des tubes de polyéthylène à 1,2 m de profondeur sur une grande surface (150-300 m² pour une maison de 100-150 m²). C'est la solution la moins coûteuse.\n\nLe **captage vertical** consiste à forer un ou plusieurs puits de 80 à 200 m de profondeur dans lesquels sont insérées des sondes géothermiques. C'est la solution la plus performante et la plus compacte."
      },
      {
        title: "Captage horizontal : économique mais gourmand en surface",
        content: "**Prix : 13 000 – 20 000€ (installation complète)**\n\nLes capteurs horizontaux sont des boucles de tubes PEHD enterrées horizontalement à 1,2 m de profondeur. Ils captent la chaleur du soleil emmagasinée dans les premiers mètres du sol.\n\n**Avantages** : coût 30-40% inférieur au vertical, pas besoin de forage (terrassement suffisant), installation plus rapide (3-5 jours).\n\n**Inconvénients** : nécessite un terrain libre de 1,5 à 2 fois la surface habitable, le terrain au-dessus ne peut plus recevoir d'arbres ni de construction, performances moindres par grand froid (le sol superficiel se refroidit).",
        tip: "Le captage horizontal est idéal pour les constructions neuves avec un grand terrain plat. Profitez du terrassement initial pour poser les capteurs avant de planter la pelouse."
      },
      {
        title: "Captage vertical : compact et performant",
        content: "**Prix : 18 000 – 30 000€ (installation complète)**\n\nLes sondes géothermiques verticales sont des tubes en U descendants à 80-200 m de profondeur dans un forage de 15 cm de diamètre. À cette profondeur, la température est stable à 12-14°C toute l'année.\n\n**Avantages** : encombrement minimal (2-3 m² au sol par forage), performances constantes hiver comme été (pas d'influence météo), COP supérieur de 10-20% au captage horizontal, compatible avec tout type de terrain.\n\n**Inconvénients** : coût de forage élevé (40-120€/m linéaire), nécessite un foreur certifié, déclaration préalable en mairie, impossibilité de forer en zone protégée."
      },
      {
        title: "Aquathermie : quand la nappe est là",
        content: "**Prix : 16 000 – 28 000€ (installation complète)**\n\nL'aquathermie (ou géothermie sur nappe) utilise l'eau d'une nappe phréatique comme source de chaleur. Un puits de captage et un puits de rejet sont forés à 10-30 m de profondeur.\n\n**Avantages** : COP exceptionnel (4,5 à 5,5), coût de forage réduit (nappes peu profondes), eau à température constante toute l'année.\n\n**Inconvénients** : nécessite une nappe phréatique accessible et de débit suffisant (2-3 m³/h), étude hydrogéologique obligatoire (1 000-2 000€), entretien des puits (filtre, pompe de relevage), risque de colmatage à long terme.",
        tip: "L'aquathermie est la solution la plus performante quand les conditions sont réunies. En Alsace (nappe rhénane), en Beauce et en vallée de la Garonne, c'est souvent le meilleur choix."
      },
      {
        title: "Comment choisir ? Le guide de décision",
        content: "**Terrain > 300 m² libre + budget limité** → Captage horizontal. C'est le meilleur rapport qualité/prix.\n\n**Petit terrain ou terrain déjà aménagé** → Captage vertical. Les sondes ne nécessitent que quelques m² de surface.\n\n**Nappe phréatique accessible (< 30 m)** → Aquathermie. Le meilleur COP du marché, vérifié par une étude hydrogéologique.\n\n**Zone de montagne ou climat continental** → Captage vertical obligatoire. Le sol superficiel gèle trop en hiver pour le captage horizontal.\n\n**Rénovation en zone urbaine** → Captage vertical. Seule option compatible avec les petits jardins de ville."
      }
    ],
    faq: [
      { question: "Quelle est la durée de vie des sondes géothermiques ?", answer: "Les sondes géothermiques verticales ont une durée de vie de 50 ans et plus. Les capteurs horizontaux durent 40 ans et plus. Seule la PAC (pompe à chaleur) est à remplacer tous les 20-25 ans." },
      { question: "Peut-on faire de la géothermie sans grand terrain ?", answer: "Oui, le captage vertical par sondes ne nécessite que 2-3 m² de surface au sol par forage. C'est la solution idéale pour les petits terrains urbains." },
    ]
  },
  {
    slug: "forage-geothermique",
    title: "Forage géothermique : profondeur, coût et réglementation",
    description: "Tout savoir sur le forage géothermique : prix au mètre, profondeur optimale, types de sols, déclarations obligatoires et choix du foreur.",
    heroImage: "/images/guides/forage-geothermique.png",
    readTime: "12 min",
    sections: [
      {
        title: "Le forage : étape clé de l'installation",
        content: "Le forage géothermique est l'opération la plus technique et la plus coûteuse d'une installation géothermique. Il consiste à créer un puits vertical de 80 à 200 m de profondeur et 15 cm de diamètre dans lequel sera insérée la sonde géothermique.\n\nLe coût du forage représente **30 à 40% du budget total** de l'installation. Il varie selon : la profondeur nécessaire, la nature du sous-sol, l'accessibilité du chantier, et la région."
      },
      {
        title: "Prix du forage selon le type de sol",
        content: "Le sous-sol français est composé de formations géologiques très variées qui impactent directement le coût du forage :\n\n- **Sols sédimentaires (calcaire, craie, marne)** : 40 à 60€/ml — Forage facile, la majorité du Bassin parisien\n- **Sols alluviaux (sable, gravier)** : 50 à 70€/ml — Forage correct, vallées fluviales\n- **Sols argileux** : 45 à 65€/ml — Forage correct mais risque d'éboulement\n- **Sols granitiques (socle ancien)** : 60 à 90€/ml — Forage plus lent et plus coûteux (Bretagne, Massif central)\n- **Sols basaltiques (volcanique)** : 80 à 120€/ml — Forage difficile mais excellent rendement thermique\n\nPour une maison de 120 m², comptez 2 forages de 80 m (soit 160 ml au total) = **6 400€ à 14 400€** selon le sous-sol.",
        tip: "Consultez la carte géologique du BRGM (infoterre.brgm.fr) pour connaître la nature du sous-sol sous votre terrain avant de demander des devis."
      },
      {
        title: "Profondeur de forage : comment la déterminer ?",
        content: "La profondeur de forage dépend de deux paramètres : les **besoins énergétiques** de la maison et la **puissance thermique extractible** du sous-sol.\n\nEn moyenne, on extrait 40 à 60 W par mètre de sonde, soit :\n- **Maison 80 m² bien isolée (5 kW)** : 1 forage de 100 m\n- **Maison 120 m² standard (8 kW)** : 2 forages de 80 m ou 1 forage de 150 m\n- **Maison 180 m² ancienne (12 kW)** : 2 forages de 130 m ou 3 forages de 90 m\n\nUne étude thermique préalable (obligatoire pour les aides) détermine avec précision la profondeur nécessaire."
      },
      {
        title: "Réglementation et autorisations",
        content: "Tout forage géothermique en France est soumis à une réglementation spécifique :\n\n**Forage < 10 m** : Simple déclaration préalable.\n\n**Forage de 10 à 100 m** : Déclaration au titre du Code minier (formulaire en ligne sur georisques.gouv.fr). Délai : 1 mois.\n\n**Forage > 100 m** : Déclaration renforcée avec étude d'impact. Délai : 2 à 3 mois.\n\n**Zones protégées** : Dans les périmètres de protection de captage d'eau potable, le forage peut être interdit ou soumis à des conditions strictes.\n\nVotre installateur RGE se charge généralement des formalités administratives."
      },
      {
        title: "Choisir son foreur : les critères essentiels",
        content: "Le foreur est un acteur clé de votre projet. Voici les critères de sélection :\n\n1. **Certification QualiForage** : obligatoire pour la garantie et les assurances\n2. **Assurance décennale** à jour : couvre les 10 premières années\n3. **Expérience locale** : un foreur qui connaît le sous-sol de votre département travaille plus vite et prend moins de risques\n4. **Références vérifiables** : demandez des photos de chantiers précédents\n5. **Garantie de résultat** : certains foreurs garantissent la puissance thermique extractible"
      }
    ],
    faq: [
      { question: "Combien coûte un forage géothermique ?", answer: "Le forage coûte entre 40€ et 120€ par mètre linéaire selon le sous-sol. Pour une maison standard (120 m²), comptez 6 000€ à 14 000€ de forage (2 × 80 m)." },
      { question: "Faut-il une autorisation pour forer ?", answer: "Oui, tout forage de plus de 10 m de profondeur doit être déclaré auprès de la DREAL via le site georisques.gouv.fr. Le délai de traitement est de 1 à 3 mois." },
    ]
  },
  {
    slug: "geothermie-nappe-phreatique",
    title: "Géothermie sur nappe phréatique (aquathermie) : comment ça marche ?",
    description: "L'aquathermie offre le meilleur rendement géothermique (COP 5+). Fonctionnement, coût, étude hydrogéologique et zones favorables en France.",
    heroImage: "/images/guides/aquathermie.png",
    readTime: "10 min",
    sections: [
      {
        title: "L'aquathermie : la géothermie haut rendement",
        content: "L'aquathermie (géothermie sur eau de nappe) est la forme de géothermie la plus performante. Au lieu de capter la chaleur du sol via des sondes, la PAC eau-eau puise directement dans une nappe phréatique à température constante (10-14°C). Le COP peut atteindre **5 à 5,5** en conditions optimales.\n\nDeux puits sont nécessaires : un puits de captage (pompage) et un puits de rejet (réinjection). L'eau circule dans la PAC, cède sa chaleur, puis est renvoyée dans la nappe sans modification chimique."
      },
      {
        title: "Prix et conditions d'une installation aquathermique",
        content: "**Budget total : 16 000 – 28 000€ TTC** (pose comprise)\n\n- Étude hydrogéologique : 1 000 – 2 000€\n- Forage des 2 puits (10-30 m) : 4 000 – 8 000€\n- PAC eau-eau : 6 000 – 12 000€\n- Raccordements et mise en service : 3 000 – 5 000€\n\n**Conditions requises :**\n- Nappe phréatique accessible à moins de 30 m de profondeur\n- Débit suffisant : 2 à 3 m³/h minimum\n- Température de l'eau > 8°C toute l'année\n- Absence de contamination (zone protégée)\n- Autorisation du service de l'eau"
      },
      {
        title: "Les zones les plus favorables en France",
        content: "Les nappes phréatiques les plus favorables à l'aquathermie :\n\n- **Nappe rhénane (Alsace)** : la plus grande nappe libre d'Europe, profondeur 5-15 m, température 12-13°C\n- **Nappe de Beauce (Centre-Val de Loire)** : profondeur 10-30 m, très étendue\n- **Nappes alluviales de la Garonne, du Rhône et de la Loire** : profondeur 5-20 m\n- **Nappe de la craie (Hauts-de-France)** : profondeur 15-40 m\n- **Nappe du Dogger (Île-de-France)** : profondeur 1 500-2 000 m (géothermie profonde, réseaux de chaleur)\n\nConsultez la carte des nappes sur infoterre.brgm.fr pour vérifier la ressource sous votre terrain."
      },
      {
        title: "Entretien et durabilité",
        content: "L'aquathermie nécessite un entretien spécifique :\n\n- **Contrôle annuel de la PAC** : 150 à 250€ (obligatoire si > 2 kg de fluide)\n- **Analyse d'eau annuelle** : 50 à 100€\n- **Nettoyage des filtres de puits** : tous les 2 à 5 ans, 200 à 500€\n- **Risque de colmatage** : les puits de rejet peuvent se colmater en 15-25 ans. Le reconditionnement coûte 1 000 à 3 000€.\n\nLa durée de vie de l'installation est de 25 à 30 ans pour la PAC et 30 à 40 ans pour les puits."
      }
    ],
    faq: [
      { question: "L'aquathermie est-elle possible partout ?", answer: "Non, l'aquathermie nécessite une nappe phréatique accessible (< 30 m), de débit suffisant et de qualité. Une étude hydrogéologique préalable (1 000-2 000€) est obligatoire pour vérifier la faisabilité." },
    ]
  },
  {
    slug: "maprimerenov-geothermie-2026",
    title: "MaPrimeRénov' géothermie 2026 : montants et conditions",
    description: "Jusqu'à 11 000€ d'aide MaPrimeRénov' pour votre PAC géothermique. Barèmes 2026, conditions d'éligibilité et cumul avec les autres aides.",
    heroImage: "/images/guides/maprimerenov-geothermie.png",
    readTime: "9 min",
    sections: [
      {
        title: "La géothermie : le geste le plus aidé de MaPrimeRénov'",
        content: "En 2026, la pompe à chaleur géothermique bénéficie du **montant maximal de MaPrimeRénov'**, toutes catégories confondues. C'est le geste de rénovation énergétique le plus soutenu par l'État, ce qui témoigne de son efficacité exceptionnelle pour réduire les émissions de CO₂.\n\nLes montants de l'aide varient selon le niveau de revenus du ménage, mais même les ménages aux revenus les plus élevés bénéficient d'une aide substantielle."
      },
      {
        title: "Barèmes MaPrimeRénov' 2026 pour la géothermie",
        content: "| Profil | Couleur | Montant PAC géothermique |\n|---|---|---|\n| Très modeste | MaPrimeRénov' Bleu | **11 000€** |\n| Modeste | MaPrimeRénov' Jaune | **9 000€** |\n| Intermédiaire | MaPrimeRénov' Violet | **6 000€** |\n| Supérieur | MaPrimeRénov' Rose | **5 000€** |\n\nCes montants sont **identiques pour le captage vertical et horizontal**. L'aquathermie (PAC eau-eau) bénéficie des mêmes aides."
      },
      {
        title: "Conditions d'éligibilité",
        content: "Pour bénéficier de MaPrimeRénov' géothermie :\n\n1. **Le logement** doit être votre résidence principale, construit depuis plus de 15 ans\n2. **L'installateur** doit être certifié **RGE** (Reconnu Garant de l'Environnement)\n3. **La PAC** doit avoir un COP ≥ 3,5 et respecter les exigences de la norme NF PAC\n4. **Le devis** doit être signé APRÈS l'accord de MaPrimeRénov' (pas de travaux anticipés)\n5. **Les revenus** du ménage déterminent le profil (couleur) et le montant de l'aide",
        tip: "La demande se fait en ligne sur maprimerenov.gouv.fr. Le délai de traitement est de 4 à 6 semaines. Ne commencez JAMAIS les travaux avant l'accord officiel."
      },
      {
        title: "Cumul avec les autres aides",
        content: "MaPrimeRénov' est cumulable avec :\n\n- **CEE (Certificats d'Économies d'Énergie)** : 2 000 à 4 000€ supplémentaires. Proposés par les fournisseurs d'énergie (EDF, TotalEnergies, Engie).\n- **TVA à 5,5%** : appliquée automatiquement sur la facture (au lieu de 20%)\n- **Éco-PTZ** : prêt à taux zéro jusqu'à 50 000€ sur 20 ans. Aucune condition de revenus.\n- **Aides locales** : certains départements et régions proposent des aides complémentaires de 500 à 3 000€.\n\n**Exemple concret** : installation géothermique à 25 000€ TTC\n- MaPrimeRénov' (profil jaune) : 9 000€\n- CEE : 3 000€\n- TVA 5,5% (économie vs 20%) : ~3 400€\n- **Reste à charge : environ 9 600€** financé par éco-PTZ à taux zéro"
      }
    ],
    faq: [
      { question: "Quel est le montant de MaPrimeRénov' pour la géothermie ?", answer: "De 5 000€ (revenus supérieurs) à 11 000€ (revenus très modestes). La géothermie bénéficie du montant le plus élevé de MaPrimeRénov', toutes catégories confondues." },
      { question: "Peut-on cumuler MaPrimeRénov' et les CEE ?", answer: "Oui, MaPrimeRénov' est cumulable avec les CEE, la TVA à 5,5% et l'Éco-PTZ. Le cumul peut atteindre 15 000€ d'aides pour une installation de 25 000€." },
    ]
  },
  {
    slug: "cop-geothermique",
    title: "COP géothermique : pourquoi c'est le chauffage le plus performant",
    description: "Avec un COP de 4 à 5, la PAC géothermique produit 4 à 5 kWh de chaleur pour 1 kWh d'électricité. Explication du coefficient de performance.",
    heroImage: "/images/guides/cop-geothermique.png",
    readTime: "8 min",
    sections: [
      {
        title: "Qu'est-ce que le COP ?",
        content: "Le **COP (Coefficient de Performance)** mesure l'efficacité d'une pompe à chaleur. Un COP de 4 signifie que pour 1 kWh d'électricité consommée, la PAC produit 4 kWh de chaleur. C'est 4 fois plus efficace qu'un radiateur électrique (COP = 1) et 30 à 50% plus performant qu'une PAC air-eau.\n\n**Pourquoi la géothermie a le meilleur COP ?** Parce que la source de chaleur (le sous-sol) est à une température stable de 12-14°C toute l'année. Contrairement à l'air extérieur qui peut descendre à -10°C en hiver, le sous-sol ne varie que de 1 à 2°C. Résultat : la PAC géothermique travaille dans des conditions optimales en permanence."
      },
      {
        title: "COP en conditions réelles : géothermie vs aérothermie",
        content: "Les fabricants affichent un COP mesuré à +7°C extérieur (norme EN 14511). En conditions réelles, les performances divergent fortement :\n\n**PAC air-eau** :\n- COP à +7°C : 3,5\n- COP à 0°C : 2,8\n- COP à -7°C : 2,0\n- COP saisonnier (SCOP) : 2,8 à 3,2\n\n**PAC géothermique** :\n- COP constant : 4,0 à 5,0 (source à 12°C toute l'année)\n- COP saisonnier (SCOP) : 4,2 à 4,8\n\n**En hiver rigoureux, quand vous avez le plus besoin de chauffage, c'est précisément le moment où la PAC géothermique surpasse l'aérothermie de 50 à 100%.**"
      },
      {
        title: "Impact sur votre facture d'énergie",
        content: "Pour une maison de 120 m² avec un besoin de chauffage de 10 000 kWh/an :\n\n| Système | COP | Conso élec | Coût annuel (0,25€/kWh) |\n|---|---|---|---|\n| Radiateurs électriques | 1,0 | 10 000 kWh | **2 500€** |\n| PAC air-eau | 3,0 | 3 333 kWh | **833€** |\n| **PAC géothermique** | **4,5** | **2 222 kWh** | **556€** |\n| Chaudière gaz | 0,95 | 10 526 kWh gaz | **900€** (gaz) |\n\nAvec la géothermie, votre facture de chauffage passe de **2 500€/an (électrique)** ou **900€/an (gaz)** à **556€/an**."
      }
    ],
    faq: [
      { question: "Quel est le COP d'une PAC géothermique ?", answer: "Le COP d'une PAC géothermique est de 4,0 à 5,0 en conditions réelles, soit 40 à 50% supérieur à une PAC air-eau. Le COP saisonnier (SCOP) est de 4,2 à 4,8." },
    ]
  },
  {
    slug: "geothermie-renovation",
    title: "Géothermie en rénovation : est-ce possible et à quel prix ?",
    description: "Installer une PAC géothermique en rénovation : contraintes techniques, compatibilité avec radiateurs existants, et budget à prévoir.",
    heroImage: "/images/guides/geothermie-renovation.png",
    readTime: "10 min",
    sections: [
      {
        title: "La géothermie est-elle réaliste en rénovation ?",
        content: "**Oui**, la géothermie est tout à fait installable en rénovation, et c'est même le cas le plus courant en France. 70% des installations géothermiques individuelles sont réalisées en remplacement d'un système de chauffage existant (fioul, gaz, électrique).\n\nLes deux conditions essentielles : disposer d'un **accès terrain** pour le forage (même un petit jardin de 20 m² suffit pour des sondes verticales), et d'un **système de distribution de chaleur compatible** (plancher chauffant, radiateurs basse température, ou radiateurs classiques avec PAC haute température)."
      },
      {
        title: "Compatibilité avec les émetteurs existants",
        content: "**Plancher chauffant existant** (35-40°C) : compatibilité parfaite. COP optimal, aucune modification nécessaire.\n\n**Radiateurs basse température** (45-55°C) : compatible avec une PAC géothermique standard. COP bon (3,5-4,5).\n\n**Radiateurs haute température** (65-75°C) : compatible avec une PAC géothermique **haute température** (Viessmann Vitocal 300-G, Vaillant flexoTHERM exclusive). COP réduit (2,8-3,5) mais toujours rentable.\n\n**Recommandation** : si vos radiateurs sont anciens, un remplacement par des modèles basse température (1 500-3 000€) améliore considérablement le rendement de la PAC."
      },
      {
        title: "Budget géothermie en rénovation",
        content: "Le budget en rénovation est 10 à 20% supérieur à celui d'une construction neuve, en raison de la dépose de l'ancien système et des adaptations nécessaires :\n\n- **Remplacement fioul → géothermie verticale** : 20 000 – 30 000€\n- **Remplacement gaz → géothermie verticale** : 18 000 – 28 000€\n- **Remplacement électrique → géothermie** : 16 000 – 26 000€\n\nEstimation après aides (MaPrimeRénov' + CEE) : **8 000 – 18 000€ de reste à charge**.\n\nAjoutez le coût de la dépose de l'ancienne chaudière (500-1 500€) et du cuvelage de la cuve fioul (1 000-3 000€ si existante).",
        tip: "Le remplacement d'une chaudière fioul par une PAC géothermique est le projet le plus rentable : économie de 1 500 à 2 200€/an et aides maximales."
      }
    ],
    faq: [
      { question: "Peut-on installer la géothermie avec des radiateurs existants ?", answer: "Oui, à condition d'opter pour une PAC haute température (jusqu'à 65-70°C) si vos radiateurs fonctionnent à haute température. Le COP sera légèrement réduit mais l'installation reste rentable." },
    ]
  },
  {
    slug: "entretien-pac-geothermique",
    title: "Entretien PAC géothermique : obligations et coûts annuels",
    description: "L'entretien annuel d'une PAC géothermique coûte 150 à 300€. Obligations légales, contrat de maintenance et points de contrôle.",
    heroImage: "/images/guides/entretien-pac.png",
    readTime: "7 min",
    sections: [
      {
        title: "L'entretien est-il obligatoire ?",
        content: "**Oui**, depuis le décret du 30 juillet 2020, l'entretien d'une PAC géothermique est **obligatoire tous les 2 ans** si elle contient plus de 2 kg de fluide frigorigène (soit la quasi-totalité des installations).\n\nCet entretien doit être réalisé par un professionnel certifié (attestation de capacité fluides frigorigènes). Il permet de vérifier l'étanchéité du circuit frigorigène, les performances de la PAC, et la pression du circuit hydraulique."
      },
      {
        title: "Coût de l'entretien annuel",
        content: "**Entretien ponctuel** : 150 à 300€ par intervention\n**Contrat de maintenance** : 200 à 400€/an (visite annuelle + dépannage prioritaire)\n\nUn contrat de maintenance est recommandé : il inclut la visite annuelle, le dépannage en cas de panne (déplacement offert), et souvent des pièces d'usure.\n\n**Comparaison avec les autres systèmes** :\n- Chaudière gaz : 150 à 250€/an (entretien obligatoire)\n- Chaudière fioul : 200 à 300€/an (entretien + ramonage)\n- PAC air-eau : 150 à 250€/an\n- **PAC géothermique : 150 à 300€/an** (identique ou légèrement supérieur)"
      },
      {
        title: "Points de contrôle lors de l'entretien",
        content: "L'entretien d'une PAC géothermique comprend :\n\n1. **Circuit frigorigène** : vérification de l'étanchéité, contrôle de la charge de fluide, mesure des pressions\n2. **Circuit hydraulique** : pression, débit, antigel, filtre\n3. **Compresseur** : contrôle sonore, vibrations, intensité électrique\n4. **Performances** : mesure du COP réel, comparaison avec les données constructeur\n5. **Circuit de captage** : pression du circuit géothermique, niveau de glycol\n6. **Électricité** : serrage des connexions, contrôle du disjoncteur\n7. **Régulation** : vérification de la courbe de chauffe, programmation",
        tip: "Conservez toutes les factures d'entretien : elles sont nécessaires pour faire jouer la garantie constructeur et pour la revente du bien immobilier."
      }
    ],
    faq: [
      { question: "Combien coûte l'entretien d'une PAC géothermique ?", answer: "L'entretien annuel coûte 150 à 300€ en intervention ponctuelle, ou 200 à 400€/an en contrat de maintenance tout compris. C'est comparable à l'entretien d'une chaudière gaz." },
    ]
  },
  {
    slug: "types-captage-geothermique",
    title: "Types de captage géothermique : vertical, horizontal et eau de nappe",
    description: "Guide complet des 3 types de captage géothermique : fonctionnement, prix, avantages et inconvénients de chaque technologie.",
    heroImage: "/images/guides/types-captage.png",
    readTime: "9 min",
    sections: [
      {
        title: "3 technologies pour capter l'énergie du sous-sol",
        content: "La géothermie individuelle repose sur un principe simple : **capter la chaleur stable du sous-sol** (10-14°C en France) et la porter à la température voulue (35-65°C) via une pompe à chaleur. Trois technologies de captage coexistent, chacune adaptée à des contextes différents :\n\n1. **Captage vertical** (sondes géothermiques)\n2. **Captage horizontal** (nappe de collecteurs)\n3. **Captage sur eau de nappe** (aquathermie)"
      },
      {
        title: "Technologies et innovations 2026",
        content: "Les innovations récentes améliorent les performances et réduisent les coûts :\n\n- **Sondes co-axiales** : design innovant qui augmente la surface d'échange de 20% par rapport aux sondes en U classiques\n- **Géostructures énergétiques** : les fondations (pieux, parois moulées) intègrent des tubes d'échange thermique. Double fonction : fondation + captage géothermique\n- **Corbeilles géothermiques** : capteurs en spirale enterrés à 3-5 m de profondeur. Compromis entre horizontal (surface) et vertical (profondeur)\n- **PAC inverter** : régulation fine de la puissance, COP amélioré de 10-15% en charge partielle\n- **Stockage intersaisonnier** : le sol est « rechargé » en été par la chaleur excédentaire (solaire ou géocooling) pour améliorer le rendement hivernal"
      }
    ],
    faq: [
      { question: "Quel type de captage choisir pour ma maison ?", answer: "Le choix dépend de 3 facteurs : la surface de terrain disponible (horizontal = 150-300 m², vertical = quelques m²), le budget (horizontal 30-40% moins cher), et la nature du sous-sol. Un installateur RGE vous conseillera après étude de votre terrain." },
    ]
  },
];

export function getAllGuides() {
  return guides;
}
