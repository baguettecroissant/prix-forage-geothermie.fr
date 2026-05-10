export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    "slug": "prix-forage-metre-lineaire",
    "title": "Prix du forage géothermique au mètre linéaire en 2026 : Le guide ultime",
    "description": "De 40€ à 120€/ml selon le sous-sol. Tarifs ultra-détaillés par type de roche, région française et techniques de forage (Rotary vs MFT).",
    "heroImage": "/images/guides/prix-forage-metre.png",
    "readTime": "15 min",
    "sections": [
      {
        "title": "Le vrai prix au mètre selon la géologie",
        "content": "Le prix du forage géothermique varie du simple au triple selon la nature du sous-sol traversé. Cette variation s'explique par l'usure du matériel et la vitesse d'avancement de la foreuse.\n\nEn **terrain sédimentaire tendre** (argile, calcaire tendre, marne, craie), le forage est très rapide (jusqu'à 40 mètres par jour). Le foreur utilise souvent la technique Rotary classique. Comptez **40 à 60€ le mètre linéaire**.\n\nEn **terrain dur** (granite, gneiss, schiste dur, quartzite) typique de la Bretagne ou du Massif central, l'avancement tombe à 10-15 mètres par jour. La technique du Marteau Fond de Trou (MFT) est obligatoire, ce qui use rapidement les taillants en carbure de tungstène. Les tarifs montent à **60 à 90€/ml**.\n\nEn **roche volcanique très dure** (basalte, trachyte) typique de l'Auvergne, le forage devient un défi technique majeur. La progression peut chuter sous les 8 mètres par jour avec une usure extrême du matériel. Le forage atteint alors **80 à 120€/ml**.",
        "tip": "Demandez toujours au foreur quelle technique il compte utiliser (Rotary ou MFT). Un foreur mal équipé qui attaque du granite au Rotary va casser son outil et bloquer votre chantier pendant des semaines."
      },
      {
        "title": "Décomposition exhaustive du coût de forage",
        "content": "Un devis de forage géothermique professionnel ne se résume pas à un simple « prix au mètre ». Il doit détailler chaque étape du chantier :\n\n- **Étude de faisabilité et démarches DREAL** : souvent incluses ou facturées environ 500€.\n- **Amenée et repli du matériel (Mobilisation)** : de 1 500 à 3 000€ selon la distance et l'accessibilité du terrain (grutage éventuel de la foreuse).\n- **Le forage proprement dit** : facturé au mètre linéaire (40 à 120€/ml), incluant le perçage et la gestion des déblais (boues de forage).\n- **La fourniture et pose des sondes géothermiques** : sondes double U en PEHD 100-RC (haute résistance à la fissuration), généralement inclus dans le prix au mètre ou facturé à part (~15-25€/ml).\n- **La cimentation (scellement)** : étape cruciale. Injection d'un coulis thermiquement amélioré (ciment-bentonite + sable siliceux) de bas en haut via un tube plongeur pour garantir le transfert de chaleur. (~10-15€/ml).\n- **Tests de pression et d'étanchéité** : 500 à 1 000€, indispensables avant le raccordement.\n- **Tranchées et raccordement au collecteur** : 1 000 à 2 500€ selon la distance jusqu'à la chaufferie.\n\nPour une maison standard de 120 m² nécessitant 160 ml de forage (2 puits de 80 m), le budget global clés en main oscillera entre **8 500€ (terrain très favorable) et 22 000€ (terrain volcanique avec accès difficile)**."
      },
      {
        "title": "Variations régionales et contraintes d'accès",
        "content": "Les prix varient également en fonction de la tension du marché local et des contraintes d'accès à votre parcelle :\n\n- **Île-de-France et grandes métropoles** : Surcoût de 15 à 25%. Ce n'est pas la géologie (souvent du calcaire favorable) qui pose problème, mais l'accessibilité des terrains étroits, l'évacuation complexe des boues de forage et le coût de la main-d'œuvre.\n- **Alsace et Grand Est** : Tarifs très compétitifs (souvent dans la fourchette basse) grâce à une nappe phréatique abondante permettant souvent l'aquathermie (forages courts) et une forte concentration de foreurs qualifiés.\n- **Bretagne et Massif Central** : Surcoût de 20 à 30% lié directement à la présence de roche dure (granite) nécessitant du matériel MFT lourd.\n\nL'accessibilité est un critère majeur : si le foreur doit louer une grue pour passer sa machine de 3 tonnes par-dessus votre maison pour atteindre le jardin arrière, prévoyez un surcoût de 1 500 à 2 500€."
      },
      {
        "title": "Le Test de Réponse Thermique (TRT) : un investissement rentable ?",
        "content": "Le TRT est une mesure in situ de la conductivité thermique exacte de votre sous-sol. Il coûte entre 2 000 et 4 000€.\n\nPour une maison individuelle standard (PAC < 12 kW), le TRT est rarement justifié économiquement. Le foreur se base sur les données du BRGM et prend une petite marge de sécurité.\n\nEn revanche, pour les **grandes villas, les petits collectifs ou le tertiaire** (besoin > 20 kW), le TRT est crucial. Sans lui, les bureaux d'études surdimensionnent systématiquement le forage par sécurité de 20 à 30%. Pour un projet de 1 000 mètres de forage (budget de 60 000€), une optimisation de 20% grâce au TRT fait économiser 12 000€, rendant l'étude extrêmement rentable."
      },
      {
        "title": "Stratégies d'optimisation budgétaire",
        "content": "Comment réduire la facture sans compromettre la qualité ?\n\n1. **Le groupement de chantiers** : C'est le levier le plus puissant. Si vous convainquez un ou deux voisins de forer en même temps, le foreur mutualise ses frais de déplacement (mobilisation). L'économie peut atteindre 10 à 15% du devis total.\n2. **Anticiper la saisonnalité** : Les foreurs sont débordés à l'approche de l'hiver. Demandez vos devis au printemps et planifiez le chantier en été pour obtenir de meilleures conditions tarifaires.\n3. **Isoler avant de forer** : Chaque kW de déperdition évité grâce à l'isolation, c'est 20 à 25 mètres de forage en moins. Isoler vos combles (budget ~1 500€) peut vous faire économiser 2 000€ de forage tout en baissant la puissance de la PAC.\n4. **Gérer les déblais soi-même** : L'évacuation des boues de forage en décharge spécialisée coûte cher (transport + taxe). Si vous avez un grand terrain et que la boue n'est pas polluée (souvent juste un mélange d'eau et d'argile naturelle), vous pouvez la laisser décanter et l'étaler sur votre terrain."
      }
    ],
    "tableData": [
      {
        "label": "Argile / Limon (Sédimentaire)",
        "values": ["40€ - 55€", "Rotary", "Bas", "Rapide (>30m/j)"]
      },
      {
        "label": "Calcaire / Craie",
        "values": ["45€ - 60€", "Rotary ou MFT", "Moyen", "Rapide (20-30m/j)"]
      },
      {
        "label": "Grès / Schiste tendre",
        "values": ["55€ - 70€", "MFT", "Moyen", "Moyen (15-20m/j)"]
      },
      {
        "label": "Granite / Gneiss (Roche dure)",
        "values": ["65€ - 90€", "MFT oblig.", "Haut", "Lent (10-15m/j)"]
      },
      {
        "label": "Basalte (Roche volcanique)",
        "values": ["85€ - 120€", "MFT haute press.", "Très Haut", "Très lent (<10m/j)"]
      }
    ],
    "faq": [
      {
        "question": "Puis-je forer moi-même mon puits géothermique ?",
        "answer": "Absolument pas. Outre le fait qu'une foreuse géothermique coûte plusieurs centaines de milliers d'euros et nécessite des années d'expertise, le forage géothermique est strictement encadré par le Code minier (NF X10-970). Une déclaration DREAL est obligatoire et seuls les foreurs certifiés QualiForage RGE peuvent vous faire bénéficier des aides de l'État (MaPrimeRénov')."
      },
      {
        "question": "Que se passe-t-il si le foreur ne trouve pas d'eau ?",
        "answer": "En géothermie sur sondes verticales (sol-eau), on ne cherche pas d'eau ! Le système fonctionne en boucle fermée. Le tube plonge dans le sol et capte la chaleur de la terre et de la roche par simple conduction. La présence d'eau souterraine est un bonus (elle augmente la conductivité thermique du sol), mais la roche sèche fonctionne très bien à condition de forer un peu plus profond."
      },
      {
        "question": "Le prix au mètre inclut-il le coulis de cimentation ?",
        "answer": "Normalement oui. Un devis sérieux de forage géothermique est toujours présenté 'clés en main' (perçage, fourniture de la sonde double U, descente de la sonde, et injection du coulis géothermique de bas en haut). Méfiez-vous des devis anormalement bas qui factureraient la sonde ou le coulis en supplément."
      },
      {
        "question": "Combien de mètres faut-il forer pour une maison de 100m² ?",
        "answer": "En moyenne, pour une maison de 100m² moyennement isolée nécessitant une PAC de 6 kW, il faut extraire environ 50 Watts par mètre. Le calcul donne : 6000W / 50W = 120 mètres linéaires de forage. Cela peut se traduire par deux forages de 60 mètres ou un seul de 120 mètres."
      }
    ]
  },
  {
    "slug": "profondeur-forage-calcul",
    "title": "Profondeur de forage géothermique : la méthode de calcul experte",
    "description": "Apprenez à calculer la profondeur exacte de votre forage géothermique en fonction de votre puissance thermique, du type de sous-sol et du régime de température.",
    "heroImage": "/images/guides/profondeur-forage.png",
    "readTime": "14 min",
    "sections": [
      {
        "title": "Le principe fondamental : Équilibre énergétique",
        "content": "La géothermie ne consiste pas simplement à faire un trou dans le sol ; c'est la conception d'un échangeur thermique grandeur nature. La profondeur du forage doit être calculée pour garantir que l'énergie extraite du sol pendant l'hiver sera naturellement reconstituée par la chaleur du sous-sol et le soleil pendant l'été.\n\nSi le forage est sous-dimensionné (trop court), la pompe à chaleur (PAC) va extraire plus de chaleur que le sol ne peut en fournir. Année après année, le sol autour de la sonde va se refroidir progressivement, jusqu'à geler complètement (permafrost artificiel). Le rendement (COP) de la PAC va s'effondrer, et l'installation risque de tomber en panne.\n\nLa règle d'or est donc de dimensionner le champ de sondes pour que la température du fluide caloporteur ne descende jamais sous -3°C en plein hiver."
      },
      {
        "title": "La formule de calcul de profondeur",
        "content": "Le dimensionnement précis nécessite un logiciel spécifique (comme EED - Earth Energy Designer) utilisé par les bureaux d'études. Cependant, pour une estimation réaliste, la formule simplifiée est la suivante :\n\n**L = (Pf × (1 - 1/COP)) / q**\n\n- **L** = Longueur totale de forage nécessaire (en mètres)\n- **Pf** = Puissance frigorifique nécessaire, souvent assimilée à la puissance calorifique de la PAC (ex: 10 kW ou 10 000 W)\n- **COP** = Coefficient de performance estimé de la PAC (ex: 4,5)\n- **q** = Puissance thermique spécifique extractible du sol (en W/m)\n\nLe facteur (1 - 1/COP) correspond à la part d'énergie réellement puisée dans le sol. Par exemple, avec un COP de 4, pour fournir 4 kW de chauffage, la PAC consomme 1 kW d'électricité et puise 3 kW dans le sol. On ne dimensionne donc le forage que pour ces 3 kW."
      },
      {
        "title": "Déterminer le coefficient 'q' (Puissance spécifique du sol)",
        "content": "La valeur de 'q' dépend entièrement de la conductivité thermique de votre géologie, mesurée en W/m·K. Plus la roche conduit bien la chaleur, plus vous pouvez extraire de watts par mètre linéaire, et moins vous aurez besoin de forer profond.\n\nValeurs de 'q' recommandées par la norme VDI 4640 (pour 1800 à 2400 heures de fonctionnement par an) :\n\n- Sédiments secs (sable sec, gravier sec) : **20 à 25 W/m**\n- Sédiments saturés en eau (sable humide, argile humide) : **50 à 65 W/m**\n- Roche sédimentaire (calcaire massif) : **45 à 60 W/m**\n- Roche cristalline (granite, gneiss) : **55 à 70 W/m**\n\n*Exemple* : Pour une PAC de 10 kW avec un COP de 4 dans du calcaire (q = 50 W/m).\nPart extraite du sol = 10 000 × (1 - 1/4) = 7 500 W.\nProfondeur totale = 7 500 / 50 = **150 mètres linéaires**. Vous pouvez réaliser deux forages de 75 mètres."
      },
      {
        "title": "Impact du régime de température de la maison",
        "content": "La profondeur du forage dépend aussi de la température à laquelle vous chauffez votre eau : le régime d'émission.\n\n- **Plancher chauffant basse température (35°C)** : La PAC fonctionne avec un excellent COP (souvent > 4,5). Elle sollicite moins le compresseur et puise une quantité d'énergie stable dans le sol. Le forage peut être dimensionné au plus juste.\n- **Radiateurs haute température (65°C)** : En rénovation, si vous gardez d'anciens radiateurs en fonte, la PAC doit fournir de l'eau très chaude. Son COP chute (autour de 3). Le compresseur consomme plus d'électricité, ce qui compense paradoxalement l'énergie puisée dans le sol. Néanmoins, l'efficacité globale baisse considérablement.\n\nIl est toujours plus rentable d'améliorer l'isolation (pour baisser la température des radiateurs à 45-50°C) plutôt que de surdimensionner la PAC et le forage pour compenser une maison passoire."
      },
      {
        "title": "Pourquoi diviser le forage en plusieurs puits ?",
        "content": "Au-delà de 150 mètres de profondeur totale, il est souvent préférable de réaliser plusieurs puits moins profonds plutôt qu'un seul très profond.\n\n1. **Contraintes géologiques et matérielles** : Les foreuses compactes de jardin peinent souvent à dépasser les 120 mètres dans la roche dure sans équipement spécial. La pression de l'eau et le poids des tiges de forage rendent l'opération complexe et coûteuse.\n2. **Réglementation** : En France, tout forage dépassant les 100 mètres de profondeur entre dans un cadre réglementaire strict (Code Minier renforcé) nécessitant des études d'impact et des délais d'autorisation très longs (plusieurs mois).\n3. **Gestion hydraulique** : Pousser le fluide caloporteur à 200 mètres de profondeur nécessite un circulateur (pompe) très puissant, qui consommera beaucoup d'électricité, pénalisant ainsi le rendement global du système.\n\nPour plusieurs forages, une distance minimale de **6 à 8 mètres** doit être respectée entre chaque puits pour éviter que les sondes ne se \"volent\" mutuellement la chaleur du sol."
      }
    ],
    "faq": [
      {
        "question": "Faut-il surdimensionner le forage par sécurité ?",
        "answer": "Non. Un léger surdimensionnement de 5 à 10% est toléré pour pallier les incertitudes géologiques, mais un surdimensionnement excessif coûte très cher pour un gain de performance marginal (seulement +1 à +2°C sur la température du fluide). Il vaut mieux investir ce budget dans l'isolation du bâti."
      },
      {
        "question": "Que se passe-t-il si on manque de place pour espacer les forages ?",
        "answer": "Si vous n'avez pas la place d'espacer deux forages de 8 mètres, le foreur peut réaliser des forages dits \"en parapluie\" (ou divergents). La foreuse est positionnée au même point, mais fore avec un angle d'inclinaison de 10 à 15 degrés vers l'extérieur pour s'éloigner au fond."
      },
      {
        "question": "Peut-on forer sous la maison ?",
        "answer": "Oui, mais uniquement avant la construction ! C'est le principe des pieux énergétiques (ou géostructures). On intègre les sondes géothermiques directement dans les fondations de la maison. En rénovation, il est impossible de forer sous un bâtiment existant, on fore dans le jardin ou la cour."
      }
    ]
  },
  {
    "slug": "reglementation-forage-dreal",
    "title": "Réglementation du forage géothermique : Démarches, DREAL et Code Minier",
    "description": "Comprenez toutes les obligations légales, démarches administratives, déclarations DREAL et normes NF X10-970 pour forer en toute légalité en France.",
    "heroImage": "/images/guides/reglementation-forage.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Le cadre juridique : Le Code Minier",
        "content": "Contrairement à l'installation d'une PAC aérothermique (air-eau) qui ne nécessite qu'une simple déclaration préalable de travaux en mairie (pour l'unité extérieure), le forage géothermique touche au sous-sol. En France, le sous-sol appartient à l'État.\n\nToute intervention souterraine est donc encadrée par le **Code Minier** et le **Code de l'Environnement**, afin de protéger les nappes phréatiques de toute pollution et de prévenir les risques de désordres géologiques (effondrements, percement de couches artésiennes).\n\nDepuis le décret de 2015 sur la Géothermie de Minime Importance (GMI), les démarches ont été fortement simplifiées pour les installations résidentielles, mais elles restent obligatoires sous peine d'amendes administratives lourdes."
      },
      {
        "title": "Les 3 régimes d'autorisation selon la profondeur",
        "content": "La réglementation détermine le niveau d'autorisation en fonction de la profondeur du forage et de la puissance du système :\n\n1. **Forage < 10 mètres** : C'est le cas des capteurs horizontaux ou des corbeilles géothermiques. Aucune déclaration au titre du Code minier n'est requise. Seule une déclaration classique en mairie (urbanisme) est parfois nécessaire selon le PLU de votre commune.\n\n2. **Forage de 10 à 100 mètres (et PAC < 500 kW)** : C'est le régime de la **Géothermie de Minime Importance (GMI)**. C'est le cas de 99% des installations résidentielles. Le projet nécessite une simple télédéclaration en ligne sur un portail de l'État avant le début des travaux. Un expert agréé (votre installateur qualifié RGE Forage) valide la conception. Le délai est quasi immédiat après validation du dossier complet.\n\n3. **Forage > 100 mètres (ou > 10 mètres en zone rouge)** : Le projet passe en régime d'**Autorisation**. Il requiert un dossier lourd incluant une étude d'impact géologique, hydrologique, et parfois le passage d'un hydrogéologue agréé. L'instruction par la DREAL (Direction Régionale de l'Environnement, de l'Aménagement et du Logement) prend entre 2 et 6 mois. C'est pourquoi on limite souvent les forages résidentiels à 99 mètres."
      },
      {
        "title": "Le zonage réglementaire : Vert, Orange, Rouge",
        "content": "Même pour un forage de 80 mètres, vous ne pouvez pas toujours appliquer le régime déclaratif (GMI) simple. Le BRGM (Bureau de Recherches Géologiques et Minières) a découpé la France en 3 zones de risques, consultables sur le site **Géorisques** :\n\n- **Zone Verte** (absence de risque identifié) : Télédéclaration GMI standard par un foreur qualifié. Environ 60% du territoire français.\n- **Zone Orange** (risques géologiques ou hydrologiques possibles, ex: couches argileuses gonflantes, gypse, nappe affleurante) : La télédéclaration GMI est possible, mais elle doit obligatoirement s'accompagner de l'attestation d'un **Expert Agréé GMI** (expert indépendant ou bureau d'études spécialisé). Cela ajoute un coût de 800 à 1500€ à l'étude préalable.\n- **Zone Rouge** (risques majeurs : sismicité forte, périmètre de captage d'eau potable, présence de gaz souterrain, cavités souterraines karstiques) : Le régime déclaratif GMI est interdit. Tout projet de forage, même de 20 mètres, passe obligatoirement en régime d'Autorisation DREAL lourd. Souvent, les projets résidentiels sont abandonnés dans ces zones au profit de la PAC aérothermique."
      },
      {
        "title": "La Norme NF X10-970 : Les règles de l'art",
        "content": "Le forage géothermique doit respecter la stricte norme **NF X10-970** qui dicte les règles de l'art pour les foreurs professionnels. Parmi les points clés :\n\n- **L'obligation de cimentation intégrale** : L'espace annulaire (entre la sonde et le trou foré) doit être intégralement bouché avec un coulis géothermique injecté de bas en haut. Cela empêche les eaux de ruissellement polluées depuis la surface de descendre contaminer les nappes phréatiques, et empêche deux nappes phréatiques distinctes (séparées par une couche imperméable) de se mélanger.\n- **L'étanchéité de tête** : Le sommet du forage doit être scellé et protégé.\n- **Le maintien d'une distance de sécurité** par rapport aux fondations du bâtiment, aux limites de propriété (généralement 3 mètres) et aux canalisations enterrées (réseaux d'eau, gaz, électricité)."
      },
      {
        "title": "Les obligations post-chantier et BSS",
        "content": "Une fois la foreuse repartie, la réglementation impose de déclarer l'achèvement des travaux.\n\nLe foreur doit fournir une coupe géologique (description des sols traversés mètre par mètre), les données de forage et l'attestation de bonne exécution. \nLe forage recevra alors un **numéro BSS (Banque de Données du Sous-Sol)** attribué par le BRGM. Votre forage fait désormais partie du cadastre géologique de la France. En cas de revente de la maison, ce numéro BSS et le dossier technique associé devront être remis au nouvel acheteur."
      }
    ],
    "faq": [
      {
        "question": "Qui s'occupe de la déclaration DREAL ?",
        "answer": "C'est obligatoirement le professionnel en charge des travaux (l'entreprise de forage ou le contractant général). Le particulier maître d'ouvrage n'a pas les accès ni les compétences pour réaliser la télédéclaration GMI. Le professionnel doit joindre son attestation d'assurance décennale et sa certification QualiForage au dossier."
      },
      {
        "question": "Peut-on me refuser l'autorisation de forer ?",
        "answer": "En Zone Verte ou Orange, si le dossier GMI est conforme et déposé par un professionnel qualifié, c'est une déclaration : l'administration ne peut pas 'refuser', elle prend acte. En revanche, en Zone Rouge ou si le projet est incompatible (ex: périmètre de protection de captage d'eau potable immédiat), le préfet via la DREAL opposera un refus catégorique pour protéger la ressource en eau."
      },
      {
        "question": "Dois-je déclarer le fluide glycolé contenu dans les sondes ?",
        "answer": "Oui. Le fluide caloporteur (souvent du monopropylène glycol dilué à 25-30%) doit être écologique, non toxique et biodégradable en cas de fuite accidentelle dans le sol. Le type et le volume de fluide injecté font partie intégrante du dossier de déclaration GMI."
      }
    ]
  },
  {
    "slug": "types-sol-geothermie",
    "title": "Les types de sol en géothermie : Granite, calcaire, argile, quel impact ?",
    "description": "Découvrez comment la géologie de votre terrain influence drastiquement les performances et le prix de votre chauffage géothermique.",
    "heroImage": "/images/guides/types-sol.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "Le sol : votre batterie d'énergie inépuisable",
        "content": "En géothermie de surface (basse énergie), on exploite le sol non pas pour son magma bouillonnant (qui est beaucoup trop profond), mais comme une immense batterie qui stocke l'énergie du soleil et de l'air. À partir de 10 mètres de profondeur, le sol conserve une température constante toute l'année (entre 10°C et 14°C en France métropolitaine).\n\nCependant, toutes les roches ne se valent pas. La capacité de la roche à absorber et transmettre la chaleur, appelée **conductivité thermique** (mesurée en W/m·K), est le paramètre le plus critique de votre projet géothermique."
      },
      {
        "title": "Conductivité et Diffusivité thermique des roches",
        "content": "Deux phénomènes physiques gouvernent le comportement géothermique de votre terrain :\n\n- **La conductivité thermique** : C'est la capacité de la roche à laisser passer la chaleur. Plus elle est élevée, plus la chaleur voyage facilement depuis la roche lointaine vers votre sonde géothermique.\n- **La capacité thermique volumique** : C'est la quantité de chaleur que la roche peut stocker dans un volume donné.\n\nL'association des deux donne la diffusivité thermique. Les roches denses, compactes et cristallines sont d'excellentes conductrices. Les roches poreuses, aérées ou sèches sont de très mauvaises conductrices (elles agissent comme des isolants)."
      },
      {
        "title": "Analyse des sols sédimentaires (Calcaire, Craie, Argile)",
        "content": "Ce sont les roches les plus courantes en France (Bassin Parisien, Bassin Aquitain).\n\n- **Calcaire massif** : C'est un excellent compromis. Il est relativement tendre à forer (coûts de forage maîtrisés, 45-60€/ml) tout en offrant une bonne conductivité thermique (2,0 à 3,0 W/m·K). Puissance extractible : 45 à 60 W/m.\n- **Argiles et limons** : Plus délicats. Leur conductivité dépend entièrement de leur teneur en eau. Une argile sèche est un isolant (0,5 W/m·K, extractible : 25 W/m), nécessitant des forages très longs. Une argile saturée en eau devient très bonne (1,5 à 2,0 W/m·K). De plus, l'argile est un sol plastique : elle peut gonfler et rétracter, ce qui exige un coulis de cimentation très spécifique.\n- **Craie et marne** : Performance moyenne à bonne selon le degré de fracturation et la présence d'eau."
      },
      {
        "title": "Analyse des roches cristallines (Granite, Gneiss, Schiste)",
        "content": "Présentes dans les massifs anciens (Bretagne, Massif Central, Alpes).\n\n- **Le Granite** : C'est le roi de la conductivité thermique géothermique ! Très dense et cristallin, il offre une conductivité exceptionnelle de 2,5 à 3,8 W/m·K. La puissance extractible atteint facilement 55 à 70 W/m. Un forage dans le granite peut être 20% moins profond qu'un forage dans de l'argile.\n- **Le revers de la médaille** : Le granite est extrêmement dur à forer. Il requiert la technique du Marteau Fond de Trou (MFT) avec compresseur haute pression. L'usure des taillants est rapide, et le coût au mètre s'envole (70 à 100€/ml). Au final, l'économie sur la profondeur est souvent annulée par le surcoût au mètre linéaire."
      },
      {
        "title": "Analyse des roches volcaniques (Basalte)",
        "content": "Principalement en Auvergne et dans les DOM-TOM.\n\n- **Le Basalte** : Il présente un paradoxe géothermique. Issu du refroidissement de la lave, il est extraordinairement dur et abrasif, rendant le forage très lent, très coûteux et très bruyant (90 à 120€/ml). Pourtant, sa conductivité thermique n'est que moyenne (1,5 à 2,5 W/m·K). Forer dans le basalte est donc l'un des scénarios les moins avantageux économiquement en géothermie verticale."
      },
      {
        "title": "Le facteur magique : Les eaux souterraines",
        "content": "Quelle que soit la roche, la présence d'eau en mouvement (aquifère, circulations karstiques) change la donne.\n\nL'eau est le meilleur vecteur de chaleur naturel. Si votre forage vertical (sol-eau) traverse une nappe phréatique mobile (même si vous ne pompez pas cette eau), l'eau va constamment renouveler la chaleur autour de votre sonde en s'écoulant. Le rendement devient spectaculaire et dépasse largement les calculs théoriques de la roche sèche.\nÀ l'inverse, si votre sol est parfaitement sec et poreux (du sable sec par exemple), la sonde va rapidement épuiser la chaleur locale et créer un cône de froid autour d'elle."
      }
    ],
    "faq": [
      {
        "question": "Faut-il abandonner son projet si on est sur de l'argile sèche ?",
        "answer": "Non, mais il faut surdimensionner le captage. Sur un sol très défavorable (argile sèche à 25 W/m), un projet demandant 120 mètres de forage sur du calcaire nécessitera 240 mètres de forage dans l'argile pour la même pompe à chaleur. Le devis risque donc de doubler. Il devient parfois plus pertinent de s'orienter vers la géothermie horizontale ou l'aérothermie haut de gamme."
      },
      {
        "question": "Comment savoir sur quel sol je me trouve ?",
        "answer": "La méthode la plus rapide et gratuite est de consulter le site InfoTerre du BRGM (Bureau de Recherches Géologiques et Minières). La carte géologique de la France au 1/50000ème couvre tout le territoire. Votre installateur certifié l'utilise systématiquement avant d'éditer un devis."
      }
    ]
  },
  {
    "slug": "pac-sol-eau-vs-eau-eau",
    "title": "PAC Sol-Eau (Sondes) vs PAC Eau-Eau (Nappe) : Le Match Technologique",
    "description": "Faut-il capter l'énergie de la roche ou pomper directement l'eau de la nappe phréatique ? Comparatif complet, rendements, coûts et entretien des deux systèmes.",
    "heroImage": "/images/guides/sol-eau-vs-eau-eau.png",
    "readTime": "13 min",
    "sections": [
      {
        "title": "PAC Sol-Eau (Boucle Fermée) : La solution universelle",
        "content": "La pompe à chaleur (PAC) géothermique **sol-eau** utilise des sondes géothermiques (tubes en U en plastique) insérées dans un ou plusieurs forages profonds et scellées par un coulis de ciment. À l'intérieur de ces tubes circule en boucle fermée de l'eau additionnée de liquide antigel (eau glycolée).\n\nLe fluide descend froid, se réchauffe au contact de la chaleur de la roche par conduction à travers le plastique, remonte chaud, cède ses calories à la pompe à chaleur, et repart dans le sol.\n\n**Avantages :**\n- **Universelle** : S'installe quasiment partout en France (hors zones rouges réglementaires).\n- **Fiabilité absolue** : Le circuit est fermé et scellé dans le béton. Aucune pièce mécanique dans le sous-sol. Pas d'encrassement, pas de filtres à changer. Une sonde a une durée de vie théorique dépassant les 100 ans.\n- **Zéro maintenance souterraine** : Un simple contrôle de la pression du fluide glycolé tous les 2 ans suffit.\n\n**Inconvénients :**\n- **Coût de forage très élevé** : Il faut souvent forer entre 100 et 200 mètres linéaires cumulés dans la roche dure.\n- **COP légèrement inférieur** : Le double transfert de chaleur (roche -> coulis -> plastique -> fluide glycolé -> échangeur PAC) entraîne de légères pertes de rendement. COP réel de 4,0 à 4,8."
      },
      {
        "title": "PAC Eau-Eau (Aquathermie / Boucle Ouverte) : Le roi du rendement",
        "content": "La PAC géothermique **eau-eau** (ou aquathermie) ne fonctionne plus par conduction thermique avec la roche, mais par prélèvement direct d'eau dans une nappe phréatique (aquifère). On fore généralement deux puits à faible profondeur (10 à 30 mètres) :\n- Un puits de pompage d'où l'on extrait l'eau à 10-14°C.\n- Un puits de rejet d'où l'on renvoie l'eau refroidie à 6-10°C dans la même nappe (plus loin en aval).\n\nL'eau de nappe passe directement (ou via un échangeur de barrage) dans la PAC pour y céder ses calories.\n\n**Avantages :**\n- **Rendement maximal** : L'eau est le meilleur fluide caloporteur et sa température reste constante à 12-14°C. C'est le système de chauffage avec le meilleur rendement au monde, affichant des COP réels supérieurs à 5,0, voire 6,0.\n- **Coût de forage divisé** : Au lieu de forer 150m dans la roche, on fore deux puits de 15m dans du sable ou des alluvions. Le budget forage chute drastiquement (souvent de moitié).\n\n**Inconvénients :**\n- **Limitation géographique stricte** : Il faut une nappe phréatique accessible (moins de 30m de profondeur), abondante (débit de 1,5 à 3 m³/heure garanti l'hiver), et chimiquement compatible (eau non corrosive, peu ferreuse, peu de manganèse).\n- **Maintenance lourde** : Pompe immergée à changer tous les 10-15 ans, nettoyage des filtres régulier (risques de colmatage par des boues ou du fer bactérien), analyses d'eau obligatoires.\n- **Risques** : La nappe peut voir son niveau baisser lors de sécheresses intenses, mettant la pompe à l'air libre et stoppant le chauffage."
      },
      {
        "title": "Comparatif Technique & Budgétaire",
        "content": "Prenons l'exemple d'une maison ancienne de 150 m² (besoin 12 kW de puissance).\n\n**Système Sol-Eau (Sondes) :**\n- Forage : 2 puits de 120m dans le calcaire = ~14 000€\n- Matériel PAC & Pose : ~14 000€\n- Budget global : **28 000€**\n- Maintenance annuelle : 200€\n- Tranquillité : 10/10\n- Aides de l'état : Éligibilité maximale.\n\n**Système Eau-Eau (Aquathermie) :**\n- Forage : 2 puits de 20m dans des graviers alluvionnaires = ~5 000€\n- Pompe de puits + Échangeur de barrage : ~2 500€\n- Matériel PAC & Pose : ~13 000€\n- Budget global : **20 500€**\n- Maintenance annuelle : 350€\n- Tranquillité : 6/10 (nécessite une surveillance des filtres et de la pompe de puits).\n- Aides de l'état : Éligibilité maximale."
      },
      {
        "title": "La solution intermédiaire hybride : L'échangeur tubulaire",
        "content": "Face aux risques d'encrassement des échangeurs de la PAC eau-eau, certains foreurs proposent une solution ingénieuse : on plonge une sonde géothermique fermée directement dans une nappe phréatique ou un plan d'eau. \nC'est le meilleur des deux mondes : la conductivité thermique exceptionnelle de l'eau en mouvement, couplée à la sécurité absolue du circuit fermé (le fluide de la PAC ne se mélange jamais à l'eau de la nappe, et aucune pompe de puits n'est requise)."
      }
    ],
    "faq": [
      {
        "question": "Comment savoir si je peux installer une PAC eau-eau ?",
        "answer": "La présence d'un puits ancien dans votre jardin est un bon indice, mais il faut vérifier deux choses par un test de pompage : la profondeur de la nappe (au-delà de 30 mètres de profondeur, l'électricité consommée par la pompe de puits annule le gain du COP) et surtout le débit continu (une PAC résidentielle a besoin d'aspirer entre 1500 et 3000 litres par heure de façon ininterrompue)."
      },
      {
        "question": "L'eau pompée par l'aquathermie est-elle polluée ?",
        "answer": "Non, elle est simplement refroidie de 3 à 4 degrés avant d'être réinjectée intacte dans la même nappe via le puits de rejet. Le circuit thermique est physiquement séparé du fluide frigorigène de la PAC par un échangeur en plaques en acier inoxydable."
      }
    ]
  },
  {
    "slug": "cop-scop-performance",
    "title": "COP et SCOP en géothermie : Maîtrisez le rendement et l'amortissement",
    "description": "Au-delà des brochures commerciales, comprenez la différence entre COP nominal et SCOP réel. Découvrez comment la température de vos radiateurs détruit ou magnifie le rendement de votre PAC.",
    "heroImage": "/images/guides/cop-scop.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Le COP : L'indicateur commercial en laboratoire",
        "content": "Le **Coefficient de Performance (COP)** indique le rapport entre l'énergie électrique consommée par le compresseur de la pompe à chaleur et l'énergie thermique restituée dans la maison.\nUn COP de 4 signifie : je consomme 1 kWh d'électricité payante, je capte 3 kWh d'énergie gratuite dans le sol, et je restitue 4 kWh de chaleur utiles.\n\nCependant, le COP des brochures commerciales est un **COP nominal**. Il est mesuré en laboratoire à un instant T, selon une norme précise (EN 14511).\nPour la géothermie (Sol-Eau), il est généralement certifié selon le protocole **B0/W35** (Brine 0°C / Water 35°C), signifiant : le fluide du sol arrive à 0°C et l'eau part dans le plancher chauffant à 35°C. À ces températures idéales, le COP affiche fièrement 4,5 ou 5,0."
      },
      {
        "title": "Le SCOP : La vraie performance sur l'année",
        "content": "Le **SCOP (Seasonal Coefficient of Performance)**, ou COP saisonnier, est la seule métrique qui compte vraiment pour votre portefeuille.\nIl calcule le rendement moyen de la pompe à chaleur sur l'ensemble de la saison de chauffe (d'octobre à avril), en prenant en compte :\n- Les redémarrages fréquents à l'automne.\n- Les vagues de grand froid en janvier.\n- L'électricité consommée par les organes annexes (le circulateur du circuit primaire, l'électronique de veille, la résistance d'appoint électrique éventuelle).\n\nEn géothermie, le SCOP est souvent très proche du COP nominal (environ 4,0 à 4,5), car la température du sol reste incroyablement stable à 12°C même lorsqu'il fait -10°C dehors. La géothermie ne subit aucune perte de puissance par grand froid."
      },
      {
        "title": "La loi impitoyable de la thermodynamique : Le régime d'eau",
        "content": "Le secret du rendement exceptionnel réside dans le \"delta de température\" (l'écart entre la température du sol et la température de vos radiateurs). Plus la PAC doit 'hisser' la température haut, plus le compresseur s'épuise et le rendement s'effondre.\n\n- **Géothermie sur Plancher chauffant très basse température (30°C)** : Sol (12°C) -> Plancher (30°C). Delta = 18°C. L'effort est minime, le **SCOP atteint 5,0**. Votre facture d'électricité est divisée par 5.\n- **Géothermie sur gros radiateurs basse température (45°C)** : Sol (12°C) -> Radiateurs (45°C). Delta = 33°C. L'effort augmente. Le **SCOP descend à 3,8**. \n- **Géothermie sur anciens radiateurs fonte haute température (65°C)** : Sol (12°C) -> Radiateurs (65°C). Delta = 53°C. L'effort est colossal. Même la meilleure géothermie du monde verra son **SCOP chuter à 2,8 ou 3,0**. C'est mieux qu'une chaudière fioul (COP 0.9), mais loin des promesses."
      },
      {
        "title": "Comparaison frontale : Aérothermie vs Géothermie en hiver",
        "content": "La pompe à chaleur aérothermique (air-eau) séduit par son prix d'installation réduit. Elle affiche un COP commercial alléchant de 4,0 (protocole A7/W35, air à +7°C).\n\nMais que se passe-t-il la semaine du 15 janvier quand la température extérieure chute à -5°C la nuit ?\n- **PAC Air-Eau (Aérothermie)** : Le delta de température explose (-5°C à 45°C). L'humidité gèle sur l'échangeur extérieur, forçant la PAC à enclencher des cycles de dégivrage coûteux en électricité. Le compresseur peine. Le rendement s'effondre (COP instantané de 1,8 à 2,2). La résistance électrique s'enclenche souvent pour compenser, transformant votre PAC en simple radiateur électrique de luxe au moment où vous consommez le plus.\n- **PAC Sol-Eau (Géothermie)** : Dehors il fait -5°C, le blizzard souffle. Dans le sol à 80 mètres de profondeur, il fait toujours paisiblement +12°C. Le COP reste stoïque à 4,0. Vous chauffez votre maison pour 3 fois moins cher que votre voisin."
      }
    ],
    "faq": [
      {
        "question": "Une PAC géothermique peut-elle fonctionner sans résistance d'appoint ?",
        "answer": "Contrairement à l'aérothermie, la géothermie maintient 100% de sa puissance calorifique même au cœur de l'hiver. Si le champ de sondes géothermiques et le dimensionnement de la PAC ont été correctement calculés (dimensionnement monovalent), la résistance électrique d'appoint ne s'enclenchera rigoureusement jamais pour le chauffage, optimisant le SCOP de l'installation."
      },
      {
        "question": "Que vaut l'étiquette énergétique A+++ ?",
        "answer": "C'est une obligation légale de la directive européenne EcoDesign. Pour obtenir le graal A+++ à basse température (35°C), la PAC doit avoir une efficacité saisonnière (ETAs) supérieure à 175% (soit un SCOP d'environ 4,37). Quasiment toutes les pompes à chaleur géothermiques de grandes marques (Viessmann, Nibe, Vaillant, Lemasson) obtiennent cette classe énergétique maximale haut la main."
      }
    ]
  },
  {
    "slug": "etude-sol-geothermique",
    "title": "L'Étude de Sol en Géothermie : Test de réponse thermique et géologie",
    "description": "Comprenez pourquoi une étude géologique poussée est la clé de voûte de votre projet. Décryptage du Test de Réponse Thermique (TRT) et des rapports d'experts.",
    "heroImage": "/images/guides/etude-sol.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Forer à l'aveugle : la pire erreur en géothermie",
        "content": "Le succès technique et économique d'une installation géothermique sur sondes verticales repose à 80% sur une évaluation précise du sous-sol de votre jardin. Un bureau d'études ou un installateur sérieux ne vous fera jamais un devis définitif de forage en se basant uniquement sur Google Maps.\n\nUne étude de sol géothermique (à ne pas confondre avec l'étude de sol G2 pour les fondations) vise à cartographier le profil géologique, à évaluer l'hydrogéologie (nappes phréatiques, circulations d'eau souterraine), et surtout, à quantifier mathématiquement la **conductivité thermique** des différentes strates de roche que la foreuse va traverser."
      },
      {
        "title": "Phase 1 : L'étude de préfaisabilité (sur bureau)",
        "content": "C'est la phase incontournable (et souvent gratuite ou incluse dans l'étude globale) que réalise l'expert géothermicien avant même de se déplacer.\nIl consulte de nombreuses bases de données publiques :\n- **La BSS (Banque de Données du Sous-Sol) du BRGM** : Elle recense des centaines de milliers de forages existants en France. Il y a de fortes chances qu'un forage ancien (pour un puits agricole ou minier) existe à moins de 2 kilomètres de chez vous, dévoilant le profil géologique local profond.\n- **La carte géologique 1/50000** : Permet de définir si la roche dominante est calcaire, granitique, sédimentaire, etc.\n- **Les cartes réglementaires Géorisques** : Validation instantanée de la faisabilité légale (Zone Verte, Orange ou Rouge, zones de captage d'eau potable).\n\nÀ l'issue de cette phase, l'expert peut déjà vous donner une fourchette de profondeur (ex: entre 120 et 140 mètres) et un chiffrage préliminaire."
      },
      {
        "title": "Phase 2 : Le Test de Réponse Thermique (TRT)",
        "content": "Le TRT est l'outil suprême en géothermie. Plutôt que de deviner la capacité thermique du sol via des abaques théoriques, on va la mesurer en conditions réelles.\n\n**Comment se déroule un TRT ?**\n1. Le foreur réalise un premier forage complet à la profondeur estimée (ex: 100m) et installe la sonde et le coulis.\n2. On raccorde temporairement cette sonde à une remorque contenant une chaudière électrique de précision et une pompe de circulation de laboratoire.\n3. On injecte une puissance de chauffage constante et calibrée (ex: 50 Watts par mètre) dans la sonde pendant une durée ininterrompue de 48 à 72 heures.\n4. Des capteurs enregistrent minute par minute l'évolution de la température du fluide à l'aller et au retour.\n5. L'analyse mathématique complexe de cette courbe de montée en température permet de calculer la conductivité thermique exacte et effective du forage (ex: 2.34 W/m·K) ainsi que la résistance thermique du forage (Borehole Thermal Resistance).\n\nLe TRT est lourd et coûteux (2 500 à 4 500€). Il n'est **jamais recommandé pour une petite maison individuelle** (l'économie sur le forage final ne rentabilisera jamais l'étude). En résidentiel, l'expert applique une marge de sécurité de 10% sur les abaques théoriques. \nEn revanche, pour les **projets collectifs ou tertiaires (besoin > 25 kW)**, le TRT est obligatoire et extraordinairement rentable pour optimiser le dimensionnement d'un grand champ de sondes."
      },
      {
        "title": "L'expertise d'accès de chantier",
        "content": "La géologie n'est rien si la machine ne peut pas rentrer dans le jardin. Une étude de site comprend l'évaluation logistique :\n- Largeur du portail (une petite foreuse sur chenilles demande 1,20m de passage, mais un camion de forage puissant requiert 3m).\n- Pente du terrain et portance du sol (une foreuse pèse entre 3 et 15 tonnes et peut détruire une allée pavée).\n- Zone tampon : Il faut identifier une zone de 10 à 20m² pour la gestion des boues de forage (fosse à boues ou bacs de décantation) et le stationnement du compresseur d'air (très bruyant)."
      }
    ],
    "faq": [
      {
        "question": "Puis-je utiliser l'étude de sol G2 faite pour la construction de ma maison ?",
        "answer": "C'est un excellent point de départ pour l'expert géothermique, car la G2 confirme la nature géologique de la couche superficielle (les 5 à 15 premiers mètres). Cependant, l'étude géotechnique de fondation s'arrête là, alors que le forage géothermique va descendre jusqu'à 100 ou 150 mètres. La G2 ne suffit donc pas au dimensionnement, mais elle informe le foreur sur la difficulté des premiers mètres (présence de blocs, argile gonflante)."
      },
      {
        "question": "Qui paye le foreur si le chantier est bloqué par de la roche imprévue ?",
        "answer": "C'est le principe du contrat. Si le foreur a réalisé un devis forfaitaire avec étude géologique préalable, l'aléa géologique est généralement à sa charge. Si le devis stipule une clause de 'supplément pour changement de méthode de forage si roche inattendue', c'est vous qui paierez. Un installateur RGE sérieux assume généralement l'étude de faisabilité."
      }
    ]
  },
  {
    "slug": "corbeilles-geostructures",
    "title": "Géothermie de surface alternative : Corbeilles spirales et géostructures",
    "description": "Ni forage vertical coûteux, ni grand réseau horizontal nécessitant 300m² de terrain. Découvrez les alternatives ingénieuses de géothermie très basse profondeur.",
    "heroImage": "/images/guides/corbeilles-geo.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "L'entre-deux monde : La géothermie sur corbeilles",
        "content": "La géothermie horizontale classique capte la chaleur à 1,20m de profondeur, mais exige de décaper entièrement votre jardin sur une surface équivalente à 1,5 à 2 fois la surface habitable de la maison (soit souvent plus de 200m² détruits par les tractopelles).\nLe forage vertical prend peu de place mais coûte très cher.\n\n**Les corbeilles géothermiques** sont la solution intermédiaire géniale. Ce sont des tubes en PEHD (les mêmes que pour les sondes) mais enroulés en spirale tronconique ou cylindrique (comme un grand ressort de 2 à 3 mètres de hauteur et de 1,20m de diamètre). \n\nElles s'enterrent verticalement dans des puits creusés à la pelleteuse de chantier standard, jusqu'à environ 3 à 5 mètres de profondeur. Une fois la corbeille glissée dans le trou, on remblaie avec une terre sablonneuse saturée en eau (ou un coulis thermique pour un rendement maximal)."
      },
      {
        "title": "Performances et Dimensionnement des corbeilles",
        "content": "Chaque corbeille agit comme un mini-échangeur concentré. En moyenne, selon la nature du sol (l'humidité est cruciale ici), **une corbeille standard peut fournir entre 0,7 kW et 1,2 kW de puissance thermique**.\n\nPour une maison neuve de 120m² très bien isolée (RT2012 / RE2020) avec un besoin de chauffe de 6 kW, il faudra installer 6 à 8 corbeilles géothermiques.\n\n**Les contraintes d'espacement :**\nPour éviter que les corbeilles ne créent un permafrost (sol gelé en permanence en épuisant la chaleur locale), il faut impérativement respecter un espacement de 3 à 5 mètres entre l'axe de chaque corbeille. Elles sont souvent disposées en ligne, en quinconce, ou autour de la maison.\nLeur emprise au sol totale (avec les tranchées de raccordement) est bien inférieure au capteur horizontal classique, préservant ainsi les arbres existants."
      },
      {
        "title": "Les avantages budgétaires et réglementaires",
        "content": "1. **Pas de foreuse spécialisée** : N'importe quelle entreprise de terrassement local équipée d'une pelle mécanique de 8 tonnes peut creuser les trous de 4 mètres de profondeur. Vous économisez les milliers d'euros de la mobilisation d'un foreur spécialisé en forage profond.\n2. **Déclaration minime** : Ne dépassant pas 10 mètres de profondeur, les corbeilles échappent totalement aux obligations du Code minier (déclaration DREAL). C'est idéal en Zone Rouge réglementaire.\n3. **Rafraîchissement naturel optimal** : Bien qu'à seulement 4m de profondeur, la température du sol y est déjà remarquablement stable et fraîche en été (14-16°C). Les corbeilles permettent un excellent \"geocooling\" (rafraîchissement passif sans faire tourner le compresseur de la PAC) pour climatiser doucement votre maison en été."
      },
      {
        "title": "Les Géostructures Énergétiques : L'innovation du neuf",
        "content": "C'est l'intégration absolue. Plutôt que de creuser un réseau géothermique dans le jardin, on profite des fondations nécessaires à la construction du bâtiment (pieux de fondation profonds, parois moulées, dalles) pour y noyer directement les tubes géothermiques dans le béton armé avant le coulage.\n\nLe béton de fondation se transforme en échangeur thermique massif, en contact direct et permanent avec le sous-sol. Ce procédé est appelé \"pieux énergétiques\".\n\n**Avantages :**\n- Zéro surcoût de forage (les pieux devaient de toute façon être creusés pour soutenir le bâtiment).\n- Rendement thermique exceptionnel (le béton est très bon conducteur).\n\n**Inconvénients :**\n- Impossible en rénovation.\n- Uniquement réservé aux constructions lourdes nécessitant des fondations profondes (terrains meubles, bâtiments collectifs, immeubles tertiaires). Inutile pour un simple pavillon individuel reposant sur de simples semelles filantes de 60 cm de profondeur."
      }
    ],
    "faq": [
      {
        "question": "Puis-je planter des arbres au-dessus de mes corbeilles géothermiques ?",
        "answer": "Il faut éviter de planter des arbres à racines profondes (chênes, noyers) à l'aplomb exact des corbeilles et du réseau de tranchées collectrices, au risque d'endommager les tubes au fil des décennies. Les arbustes, haies et gazons ne posent aucun problème."
      },
      {
        "question": "Une corbeille est-elle suffisante pour chauffer une piscine l'été ?",
        "answer": "Absolument. Les corbeilles peuvent être détournées de leur usage de chauffage hivernal pour fonctionner comme un dissipateur ou un puits de chaleur en été. C'est idéal pour coupler la PAC à une piscine, offrant un rendement très intéressant."
      }
    ]
  }
];

export function getAllGuides() { return guides; }
