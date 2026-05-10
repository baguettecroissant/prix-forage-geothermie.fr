export interface Guide {
  slug: string; title: string; description: string; heroImage: string; readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}
export const guides: Guide[] = [
  {
    "slug": "prix-forage-metre-lineaire",
    "title": "Prix du forage géothermique au mètre linéaire en 2026",
    "description": "De 40€ à 120€/ml selon le sous-sol. Tarifs détaillés par type de roche et par région française.",
    "heroImage": "/images/guides/prix-forage-metre.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "Tarifs au mètre selon la géologie",
        "content": "Le prix du forage géothermique varie considérablement selon la nature du sous-sol traversé. En **terrain sédimentaire** (calcaire, craie, marne), comptez **40 à 60€/ml**. En **terrain granitique** (Bretagne, Massif central), les tarifs montent à **60 à 90€/ml**. En **roche volcanique** (basalte, Auvergne), le forage atteint **80 à 120€/ml**.\n\nCes écarts s'expliquent par la dureté de la roche, l'usure des outils de forage et la vitesse d'avancement. Un foreur progresse de 20 à 30 m/jour en calcaire, contre 8 à 15 m/jour en granite."
      },
      {
        "title": "Décomposition du coût de forage",
        "content": "Le budget forage se décompose en plusieurs postes :\n\n- **Mobilisation foreuse** : 1 500 à 3 000€ (transport, mise en place)\n- **Forage proprement dit** : 40 à 120€/ml (perçage + évacuation déblais)\n- **Pose des sondes** : inclus dans le prix au mètre\n- **Cimentation** : scellement au coulis de ciment-bentonite, inclus\n- **Test d'étanchéité** : 500 à 1 000€\n- **Test de réponse thermique** (optionnel) : 2 000 à 4 000€\n\nPour 160 ml (maison 120 m²), le budget forage total est de **6 400 à 19 200€**."
      },
      {
        "title": "Variations régionales des tarifs",
        "content": "Les prix varient aussi selon l'offre locale de foreurs :\n\n- **Île-de-France** : +10 à 15% (forte demande, accès chantier complexe)\n- **Alsace** : tarifs moyens, nappes peu profondes favorables\n- **Bretagne/Massif central** : +20 à 30% (sous-sol granitique)\n- **Sud-Est** : tarifs moyens, bonne disponibilité\n- **Auvergne** : +30 à 50% (basalte volcanique)\n\nConsultez la carte géologique sur infoterre.brgm.fr avant de demander des devis."
      },
      {
        "title": "Comment réduire le coût du forage",
        "content": "Plusieurs leviers permettent d'optimiser le budget forage :\n\n1. **Groupement de chantiers** : si des voisins veulent aussi forer, le foreur mutualise le déplacement (-10 à 15%)\n2. **Période creuse** : forer en hiver ou au printemps quand les foreurs sont moins sollicités\n3. **Captage horizontal** si terrain disponible : pas de forage, terrassement à 1,2 m seulement\n4. **Aquathermie** si nappe accessible : forages courts (10-30 m) au lieu de 80-200 m"
      }
    ],
    "faq": [
      {
        "question": "Quel est le prix moyen du forage géothermique ?",
        "answer": "Entre 40 et 120€ par mètre linéaire selon le sous-sol. Budget moyen pour une maison de 120 m² : 8 000 à 12 000€ de forage (2 × 80 m)."
      },
      {
        "question": "Le test de réponse thermique est-il obligatoire ?",
        "answer": "Non, mais il est recommandé pour les installations > 30 kW. Il coûte 2 000 à 4 000€ et permet d'optimiser le dimensionnement de 10 à 15%."
      }
    ]
  },
  {
    "slug": "profondeur-forage-calcul",
    "title": "Profondeur de forage géothermique : comment calculer la bonne dimension",
    "description": "De 80 à 200 m selon vos besoins. Méthode de calcul, puissance extractible et dimensionnement optimal.",
    "heroImage": "/images/guides/profondeur-forage.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "La règle de dimensionnement",
        "content": "La profondeur de forage dépend de deux paramètres : les **besoins énergétiques** du bâtiment et la **puissance thermique extractible** du sous-sol.\n\nEn moyenne, on extrait **40 à 60 W par mètre de sonde** selon le type de sol :\n- Argile sèche : 25-30 W/m\n- Sable humide : 55-65 W/m\n- Calcaire : 45-60 W/m\n- Granite : 55-70 W/m\n- Grès : 55-65 W/m\n\nFormule simplifiée : **Profondeur = Puissance PAC (kW) × 1000 / Puissance extractible (W/m)**"
      },
      {
        "title": "Exemples de dimensionnement par surface",
        "content": "**Maison 80 m² bien isolée** (RT2012) :\n- Besoin : 5 kW → 1 forage de 100 m\n- Budget forage : 4 000 à 7 000€\n\n**Maison 120 m² standard** :\n- Besoin : 8 kW → 2 forages de 80 m (160 ml total)\n- Budget forage : 6 400 à 14 400€\n\n**Maison 180 m² ancienne** (avant 1990) :\n- Besoin : 12 kW → 2 forages de 130 m (260 ml)\n- Budget forage : 10 400 à 19 200€\n\n**Maison 250 m²** :\n- Besoin : 16 kW → 3 forages de 110 m (330 ml)\n- Budget forage : 13 200 à 26 400€"
      },
      {
        "title": "Pourquoi plusieurs forages plutôt qu'un seul ?",
        "content": "Au-delà de 150 m de profondeur, un seul forage pose des problèmes techniques et réglementaires. Il est préférable de réaliser **2 ou 3 forages moins profonds** :\n\n- **Meilleure extraction thermique** : les sondes ne se refroidissent pas mutuellement\n- **Réglementation simplifiée** : < 100 m = déclaration simple\n- **Risque réduit** : si un forage rencontre un obstacle, les autres compensent\n- **Espacement minimum** : 6 à 8 m entre forages pour éviter l'interférence thermique"
      }
    ],
    "faq": [
      {
        "question": "Quelle profondeur pour une maison de 120 m² ?",
        "answer": "Pour une maison standard de 120 m² (8 kW), comptez 2 forages de 80 m soit 160 ml au total. Budget forage : 6 400 à 14 400€ selon le sous-sol."
      }
    ]
  },
  {
    "slug": "reglementation-forage-dreal",
    "title": "Réglementation forage géothermique : autorisations DREAL et déclarations",
    "description": "Tout forage > 10 m nécessite une déclaration. Démarches, formulaires et délais selon la profondeur.",
    "heroImage": "/images/guides/reglementation-forage.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "Les 3 niveaux d'autorisation",
        "content": "La réglementation française distingue 3 cas selon la profondeur :\n\n**Forage < 10 m** : Déclaration préalable simple en mairie. Délai : immédiat.\n\n**Forage de 10 à 100 m** (cas le plus courant) : Déclaration au titre du Code minier sur georisques.gouv.fr. Formulaire Cerfa en ligne. Délai : 1 mois. Pas d'étude d'impact.\n\n**Forage > 100 m** : Déclaration renforcée avec étude d'impact géologique. Avis du BRGM possible. Délai : 2 à 3 mois.\n\nDans tous les cas, votre installateur RGE se charge des formalités."
      },
      {
        "title": "Zones interdites au forage",
        "content": "Le forage géothermique est interdit ou très encadré dans certaines zones :\n\n- **Périmètres de protection de captage d'eau** : interdiction totale dans le périmètre immédiat, autorisation préfectorale dans le périmètre rapproché\n- **Sites classés ou inscrits** : autorisation spécifique de la DRAC\n- **Zones de Plan de Prévention des Risques** (PPR) : étude complémentaire\n- **Zones karstiques** (grottes, cavités) : risque de pollution des eaux souterraines\n\nVérifiez les contraintes de votre parcelle sur georisques.gouv.fr."
      },
      {
        "title": "Obligations post-forage",
        "content": "Après le forage, des obligations réglementaires subsistent :\n\n- **Déclaration de fin de travaux** : sous 30 jours\n- **BSS (Banque du Sous-Sol)** : enregistrement au BRGM obligatoire\n- **Registre des forages** : conservation du dossier technique pendant toute la durée de vie\n- **En cas d'abandon** : obligation de rebouchage selon les règles de l'art (coulis de ciment)"
      }
    ],
    "faq": [
      {
        "question": "Faut-il une autorisation pour un forage de 80 m ?",
        "answer": "Oui, une déclaration au titre du Code minier est obligatoire pour tout forage > 10 m. Formulaire en ligne sur georisques.gouv.fr. Délai : 1 mois."
      }
    ]
  },
  {
    "slug": "types-sol-geothermie",
    "title": "Types de sol et forage géothermique : impact sur le coût et le rendement",
    "description": "Calcaire, granite, basalte : chaque sol a un impact direct sur le prix du forage et la performance de votre installation.",
    "heroImage": "/images/guides/types-sol.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "La carte géologique de France et votre forage",
        "content": "La France présente une grande diversité géologique qui impacte directement le coût et les performances du forage :\n\n**Bassin parisien** : calcaire, craie, marne. Forage facile et économique (40-60€/ml). Conductivité thermique correcte (1,5-2,5 W/m·K).\n\n**Massif armoricain (Bretagne)** : granite et schiste. Forage plus lent (60-90€/ml) mais excellente conductivité thermique (2,5-3,5 W/m·K).\n\n**Massif central et Auvergne** : basalte volcanique. Forage difficile (80-120€/ml) mais rendement thermique exceptionnel (1,5-2,5 W/m·K).\n\n**Plaines alluviales** (vallées du Rhône, de la Loire, de la Garonne) : sable et gravier. Forage rapide (50-70€/ml). Souvent compatible avec l'aquathermie."
      },
      {
        "title": "Conductivité thermique par type de roche",
        "content": "La conductivité thermique détermine combien de watts vous pouvez extraire par mètre de sonde :\n\n| Roche | Conductivité (W/m·K) | Extraction (W/m) |\n|---|---|---|\n| Argile sèche | 0,4-1,0 | 25-30 |\n| Sable sec | 0,4-0,8 | 25-30 |\n| Sable saturé | 1,7-2,5 | 55-65 |\n| Calcaire | 2,0-3,0 | 45-60 |\n| Marne | 1,5-2,5 | 35-50 |\n| Granite | 2,5-3,5 | 55-70 |\n| Basalte | 1,3-2,3 | 40-55 |\n| Grès | 2,3-3,5 | 55-65 |\n\nPlus la conductivité est élevée, moins il faut forer profond — ce qui compense le prix au mètre en terrain dur."
      },
      {
        "title": "Comment connaître votre sous-sol",
        "content": "Avant de demander des devis, identifiez votre géologie locale :\n\n1. **InfoTerre** (infoterre.brgm.fr) : carte géologique interactive du BRGM\n2. **Géorisques** (georisques.gouv.fr) : contraintes réglementaires de votre parcelle\n3. **Étude de sol G1** : si votre maison est récente, le rapport de sol du constructeur contient des informations utiles\n4. **Foreur local** : un foreur expérimenté dans votre département connaît le sous-sol par cœur"
      }
    ],
    "faq": [
      {
        "question": "Quel est le meilleur sol pour la géothermie ?",
        "answer": "Le granite et le grès offrent la meilleure conductivité thermique (55-70 W/m). Mais le calcaire reste le meilleur compromis coût/performance avec un forage facile et un rendement correct."
      }
    ]
  },
  {
    "slug": "pac-sol-eau-vs-eau-eau",
    "title": "PAC sol-eau vs eau-eau : quelle technologie pour votre terrain ?",
    "description": "Comparatif technique des deux types de PAC géothermique. COP, prix, conditions et performances réelles.",
    "heroImage": "/images/guides/sol-eau-vs-eau-eau.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Deux technologies, deux sources d'énergie",
        "content": "La **PAC sol-eau** (glycol-eau) capte la chaleur du sol via des sondes géothermiques verticales ou des collecteurs horizontaux. Un fluide caloporteur (eau glycolée) circule en boucle fermée.\n\nLa **PAC eau-eau** (aquathermie) puise directement dans une nappe phréatique via un puits de captage et rejette l'eau refroidie dans un puits de rejet. Circuit ouvert.\n\nLa PAC eau-eau offre un COP supérieur (4,5-5,5 vs 4,0-5,0) car l'eau de nappe est à température plus stable et la conductivité thermique est meilleure."
      },
      {
        "title": "Comparatif technique détaillé",
        "content": "| Critère | PAC sol-eau | PAC eau-eau |\n|---|---|---|\n| COP réel | 4,0-5,0 | 4,5-5,5 |\n| Prix installation | 18 000-30 000€ | 16 000-28 000€ |\n| Forage | 80-200 m (vertical) | 10-30 m (2 puits) |\n| Terrain requis | Quelques m² | Nappe phréatique |\n| Entretien spécifique | Minimal | Filtres puits + analyse eau |\n| Durabilité | 50+ ans (sondes) | 30+ ans (puits) |\n| Risque | Quasi nul | Colmatage puits possible |"
      },
      {
        "title": "Comment choisir entre les deux",
        "content": "**Choisissez la PAC sol-eau si** :\n- Pas de nappe phréatique accessible\n- Vous voulez une installation simple et durable\n- Terrain accessible pour le forage vertical\n\n**Choisissez la PAC eau-eau si** :\n- Nappe phréatique à moins de 30 m\n- Débit suffisant (2-3 m³/h)\n- Vous visez le meilleur COP possible\n- Zones favorables : Alsace, Beauce, vallées fluviales"
      }
    ],
    "faq": [
      {
        "question": "Quelle PAC a le meilleur rendement ?",
        "answer": "La PAC eau-eau (aquathermie) avec un COP de 4,5 à 5,5, contre 4,0 à 5,0 pour la PAC sol-eau. Mais elle nécessite une nappe phréatique accessible."
      }
    ]
  },
  {
    "slug": "cop-scop-performance",
    "title": "COP et SCOP géothermique : comprendre le rendement réel de votre installation",
    "description": "COP de 4 à 5 en labo, mais combien en conditions réelles ? Décryptage du coefficient de performance saisonnier.",
    "heroImage": "/images/guides/cop-scop.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "COP vs SCOP : quelle différence ?",
        "content": "Le **COP** (Coefficient de Performance) mesure le rendement instantané à une température donnée. Le fabricant l'affiche à +7°C (norme EN 14511).\n\nLe **SCOP** (Seasonal COP) mesure le rendement moyen sur une saison de chauffe complète, en intégrant les variations de charge et de température.\n\nPour la géothermie, l'écart entre COP et SCOP est faible (< 10%) car la source (sous-sol) est à température constante. Pour l'aérothermie, l'écart atteint 20-30%."
      },
      {
        "title": "Performances réelles par technologie",
        "content": "**PAC géothermique sol-eau** :\n- COP nominal : 4,5-5,2\n- SCOP réel : 4,0-4,8\n- Stable toute l'année\n\n**PAC géothermique eau-eau** :\n- COP nominal : 5,0-5,8\n- SCOP réel : 4,5-5,2\n- Meilleur rendement du marché\n\n**PAC air-eau (comparaison)** :\n- COP nominal à +7°C : 3,5-4,0\n- SCOP réel : 2,5-3,2\n- Chute de 30-50% par grand froid\n\nLa géothermie surpasse l'aérothermie de 40 à 80% en SCOP réel, surtout en climat continental."
      },
      {
        "title": "Impact du COP sur votre facture",
        "content": "Pour une maison de 120 m² (10 000 kWh/an de chauffage, électricité à 0,25€/kWh) :\n\n- COP 1,0 (résistif) : 10 000 kWh → **2 500€/an**\n- COP 3,0 (PAC air-eau) : 3 333 kWh → **833€/an**\n- COP 4,5 (PAC sol-eau) : 2 222 kWh → **556€/an**\n- COP 5,0 (PAC eau-eau) : 2 000 kWh → **500€/an**\n\nPasser d'une PAC air-eau à une géothermique économise 280 à 333€/an supplémentaires."
      }
    ],
    "faq": [
      {
        "question": "Quel est le SCOP réel d'une PAC géothermique ?",
        "answer": "Le SCOP saisonnier réel est de 4,0 à 4,8 pour une PAC sol-eau et de 4,5 à 5,2 pour une PAC eau-eau. C'est 40 à 80% supérieur à une PAC air-eau."
      }
    ]
  },
  {
    "slug": "etude-sol-geothermique",
    "title": "Étude de sol géothermique : déroulement, coût et résultats",
    "description": "L'étude de sol est la première étape technique. De l'analyse géologique au test de réponse thermique.",
    "heroImage": "/images/guides/etude-sol.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "Pourquoi une étude de sol est indispensable",
        "content": "L'étude de sol permet de déterminer avec précision la **faisabilité** et le **dimensionnement optimal** de votre installation géothermique. Sans elle, le foreur travaille à l'aveugle et risque de sur-dimensionner (coût inutile) ou sous-dimensionner (performances insuffisantes).\n\nElle répond à 3 questions :\n1. Quelle est la nature du sous-sol ? (type de roche, présence d'eau)\n2. Combien de watts peut-on extraire par mètre de sonde ?\n3. Quelle profondeur et combien de forages sont nécessaires ?"
      },
      {
        "title": "Les étapes de l'étude",
        "content": "**1. Analyse documentaire** (gratuit) :\nConsultation de la carte géologique BRGM, des forages existants à proximité (base BSS), et des contraintes réglementaires.\n\n**2. Visite terrain** (incluse dans le devis) :\nAccessibilité foreuse, distance au bâtiment, pentes, obstacles.\n\n**3. Test de réponse thermique (TRT)** (2 000-4 000€, optionnel) :\nUn forage pilote de 50-100 m est réalisé. On injecte de la chaleur pendant 48-72h et on mesure la réponse thermique du sol. Résultat : conductivité thermique exacte en W/m·K."
      },
      {
        "title": "Interpréter les résultats",
        "content": "Le rapport d'étude vous donne :\n\n- **Conductivité thermique** : en W/m·K (bon : > 2,0 ; excellent : > 3,0)\n- **Puissance extractible** : en W/m (bon : > 45 ; excellent : > 60)\n- **Profondeur recommandée** : en mètres linéaires totaux\n- **Nombre de forages** : et espacement entre eux\n- **Type de captage recommandé** : vertical, horizontal ou aquathermie\n\nCes données permettent au foreur de chiffrer précisément son intervention."
      }
    ],
    "faq": [
      {
        "question": "Combien coûte une étude de sol géothermique ?",
        "answer": "L'analyse documentaire est gratuite (incluse dans le devis). Le test de réponse thermique (TRT) coûte 2 000 à 4 000€ et n'est recommandé que pour les installations > 30 kW."
      }
    ]
  },
  {
    "slug": "corbeilles-geostructures",
    "title": "Corbeilles géothermiques et géostructures : les alternatives au forage classique",
    "description": "Capteurs en spirale, pieux énergétiques : des solutions intermédiaires entre horizontal et vertical.",
    "heroImage": "/images/guides/corbeilles-geo.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "Les corbeilles géothermiques",
        "content": "Les **corbeilles géothermiques** (ou paniers) sont des capteurs en spirale enterrés à **3 à 5 m de profondeur**. Chaque corbeille mesure 1,5 à 2 m de diamètre et capte 600 à 1 200 W.\n\nPour une maison de 120 m² (8 kW), il faut **8 à 12 corbeilles** espacées de 5 m minimum.\n\n**Avantages** : pas de forage profond, terrassement simple (mini-pelle), coût 20-30% inférieur au forage vertical.\n\n**Inconvénients** : surface de terrain nécessaire (40-60 m²), performances inférieures au vertical (-15 à 20%), sensibilité au gel en surface."
      },
      {
        "title": "Les géostructures énergétiques",
        "content": "Les **géostructures** intègrent des tubes d'échange thermique dans les éléments de fondation du bâtiment : pieux, parois moulées, radiers.\n\nDouble fonction : **fondation structurelle + captage géothermique**. Le surcoût est de seulement 10 à 20% par rapport à des fondations classiques.\n\n**Idéal pour** : constructions neuves avec fondations profondes (immeubles, équipements publics). Peu adapté à la rénovation.\n\n**Puissance extractible** : 25 à 50 W/m de pieu, selon le diamètre et la géologie."
      },
      {
        "title": "Quelle alternative choisir ?",
        "content": "**Corbeilles** si :\n- Terrain de 40-60 m² disponible\n- Budget limité (pas de forage profond)\n- Construction neuve ou rénovation avec jardin\n\n**Géostructures** si :\n- Construction neuve avec fondations profondes\n- Budget d'ensemble à optimiser\n- Bâtiment collectif ou tertiaire\n\n**Forage vertical classique** si :\n- Petit terrain (< 40 m²)\n- Performance maximale recherchée\n- Tout type de bâtiment existant ou neuf"
      }
    ],
    "faq": [
      {
        "question": "Les corbeilles géothermiques sont-elles aussi performantes que le forage vertical ?",
        "answer": "Non, les corbeilles offrent 15 à 20% de performances en moins que les sondes verticales. Mais elles coûtent 20-30% moins cher et ne nécessitent pas de forage profond."
      }
    ]
  }
];
export function getAllGuides() { return guides; }
