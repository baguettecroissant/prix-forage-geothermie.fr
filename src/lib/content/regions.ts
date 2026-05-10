// Régions de France — contenu PRIX/FORAGE spécifique par région
// Angle éditorial Site 1 : tarifs régionaux, coût des foreurs, géologie vs budget

export const regionsContent: Record<string, RegionContent> = {
    "Île-De-France": {
        specificite_geo: "L'Île-de-France affiche les tarifs de forage les plus élevés de France métropolitaine : 75 à 110€/ml en raison des contraintes logistiques urbaines. Les sols du Bassin parisien (calcaire, marne, meulière) se forent correctement mais les surcoûts de voirie, de gestion des boues et de protection du voisinage ajoutent 3 000 à 5 000€ au budget. L'aquathermie sur nappe de Beauce (sud IDF) est l'option la plus économique quand la nappe est accessible.",
        tendance: "Le marché francilien est en surchauffe : +25%/an de demande, ce qui tire les prix vers le haut. Les devis reçus en 2026 sont 10 à 15% supérieurs à ceux de 2024 pour un même projet. Astuce : les foreurs basés en petite couronne sont souvent 15 à 20% moins chers que ceux de Paris intra-muros pour un même niveau de service.",
        marche: "Budget moyen en IDF : 25 000 à 38 000€ tout compris (forage + PAC + raccordements). Après aides : 12 000 à 25 000€ de reste à charge. Les écarts de prix entre foreurs atteignent 25 à 35% pour un même projet — la mise en concurrence est indispensable.",
    },
    "Auvergne-Rhône-Alpes": {
        specificite_geo: "La région ARA offre une géologie contrastée impactant fortement les tarifs : 55 à 70€/ml dans les alluvions du Rhône et de la Saône, mais 80 à 110€/ml dans les granites du Massif Central ou les calcaires alpins. La chaîne des Puys offre un flux géothermique élevé permettant des sondes plus courtes (-15% de budget forage). Les nappes alluviales (Isère, Rhône) sont idéales pour l'aquathermie économique.",
        tendance: "La région est la 2e en France pour le nombre d'installations géothermiques, ce qui maintient une concurrence saine entre foreurs. Les prix sont stables à légèrement haussiers (+5%/an). Le tissu dense d'installateurs (ENGIE, Atlantic, Viessmann) permet de négocier efficacement.",
        marche: "Budget moyen ARA : 18 000 à 30 000€. En plaine (Lyon, Grenoble) : 18 000-25 000€. En montagne (Savoie) : 22 000-32 000€. L'aquathermie sur nappe du Rhône est la solution la plus économique de la région (budget total : 14 000-20 000€).",
    },
    "Nouvelle-Aquitaine": {
        specificite_geo: "La Nouvelle-Aquitaine bénéficie de tarifs de forage compétitifs grâce aux sols sédimentaires du bassin aquitain : 50 à 70€/ml en moyenne. Les nappes alluviales de la Garonne et de la Dordogne, accessibles à 10-30 m, permettent l'aquathermie à moindre coût (doublet de puits : 3 000-6 000€). Les sources thermales pyrénéennes témoignent d'un sous-sol particulièrement favorable.",
        tendance: "Le marché néo-aquitain est en forte croissance (+30%/an), tiré par le remplacement du fioul en zone rurale. Les tarifs restent compétitifs grâce à l'arrivée de nouveaux foreurs. Le prix du captage horizontal dans les alluvions est parmi les plus bas de France (3 500-6 000€).",
        marche: "Budget moyen : 15 000 à 25 000€ tout compris. C'est l'une des régions où le budget total est le plus accessible. L'amortissement est de 9-12 ans en remplacement du gaz et 7-10 ans en remplacement du fioul.",
    },
    "Occitanie": {
        specificite_geo: "L'Occitanie présente des tarifs de forage contrastés : 50-65€/ml dans les alluvions de la Garonne (Toulouse) et 70-90€/ml dans les calcaires et schistes du Languedoc (Montpellier). Le double avantage financier du climat méditerranéen est le géocooling gratuit en été, qui évite l'achat d'une climatisation (économie de 3 000-5 000€).",
        tendance: "Le marché est en croissance rapide dans les métropoles (Toulouse +35%, Montpellier +40%) mais reste émergent dans les zones rurales. Les foreurs se concentrent autour des métropoles, ce qui peut entraîner des surcoûts de déplacement de 500-1 500€ dans les zones éloignées.",
        marche: "Budget moyen : 16 000 à 28 000€. Toulouse (alluvions) : 16 000-24 000€. Montpellier (calcaire) : 20 000-30 000€. L'amortissement est accéléré par la double économie chauffage/rafraîchissement (7-10 ans vs 10-13 ans en chauffage seul).",
    },
    "Hauts-De-France": {
        specificite_geo: "Les Hauts-de-France offrent les tarifs de forage les plus compétitifs de France après la Nouvelle-Aquitaine : 45 à 65€/ml grâce aux sols crayeux de Picardie, parmi les plus faciles à forer. La nappe de la craie, accessible à 15-40 m, permet une aquathermie très économique (doublet : 2 500-5 000€). La vitesse de forage élevée (80-100 ml/jour en craie) réduit le temps de chantier et donc le coût.",
        tendance: "Le marché nordiste est en forte progression (+35%/an), avec des tarifs qui restent très compétitifs grâce à la facilité de forage. Les nouveaux foreurs entrant sur le marché maintiennent la pression sur les prix. L'aquathermie se développe rapidement grâce à la nappe de la craie.",
        marche: "Budget moyen : 14 000 à 24 000€ — parmi les plus bas de France. L'aquathermie sur nappe de la craie abaisse le budget à 12 000-18 000€. Le retour sur investissement est le plus rapide du pays (6-9 ans) grâce aux besoins de chauffage élevés et aux coûts modérés.",
    },
    "Provence-Alpes-Côte D'azur": {
        specificite_geo: "En PACA, les tarifs de forage sont supérieurs à la moyenne nationale : 70 à 95€/ml en raison des sols calcaires et rocheux. Le coût de la main-d'œuvre azuréenne ajoute 10-15% au budget. En montagne alpine, le forage profond (150-200 m) peut atteindre 100€/ml. L'atout financier est le géocooling intégré qui remplace la climatisation.",
        tendance: "Le marché PACA est tiré par la construction neuve sur le littoral et la rénovation des maisons provençales. Les tarifs sont stables mais parmi les plus élevés de province. La concurrence entre installateurs se concentre autour de Nice, Marseille et Aix-en-Provence.",
        marche: "Budget moyen : 22 000 à 35 000€. Littoral (Côte d'Azur) : 25 000-35 000€. Intérieur (Var, Vaucluse) : 20 000-28 000€. Alpes : 25 000-38 000€. L'amortissement est bon grâce à la double fonction chauffage/clim (8-11 ans).",
    },
    "Grand Est": {
        specificite_geo: "Le Grand Est est une région stratégique pour les prix de forage grâce au fossé rhénan alsacien. L'aquathermie sur nappe rhénane (forage de 15-30 m) coûte seulement 3 000 à 6 000€ — c'est le tarif le plus bas de France pour un captage géothermique. En Lorraine et Champagne, les sols calcaires et crayeux se forent à 50-70€/ml. En Vosges, le granite monte à 80-110€/ml.",
        tendance: "L'Alsace est la région la plus avancée en géothermie individuelle, avec des prix stabilisés et compétitifs. La culture germanique de l'efficacité énergétique tire le marché. Les marques allemandes (Viessmann, Vaillant, Stiebel Eltron) offrent un excellent rapport qualité-prix dans cette zone frontalière.",
        marche: "Budget moyen : 14 000 à 28 000€. Alsace (nappe rhénane) : 12 000-20 000€ (meilleur tarif national). Lorraine/Champagne : 16 000-26 000€. Vosges (granite) : 22 000-32 000€. Le ROI est parmi les meilleurs de France (6-9 ans).",
    },
    "Pays De La Loire": {
        specificite_geo: "Les Pays de la Loire offrent des tarifs de forage compétitifs : 50 à 70€/ml dans les sols sédimentaires (calcaire, schiste). Les nappes alluviales de la Loire permettent l'aquathermie à moindre coût. Le captage horizontal est très développé grâce à la disponibilité foncière en zone périurbaine et rurale (3 500-6 500€ de terrassement).",
        tendance: "Le marché ligérien est en croissance portée par la métropole nantaise. Les prix restent stables et compétitifs. Les installateurs locaux ont développé une expertise solide en captage horizontal, la solution la plus économique de la région.",
        marche: "Budget moyen : 15 000 à 25 000€. Le captage horizontal dans les sols alluviaux est le plus abordable (budget total : 14 000-20 000€). L'amortissement est de 9-12 ans en remplacement du gaz.",
    },
    "Bretagne": {
        specificite_geo: "La Bretagne impose des tarifs de forage supérieurs en socle granitique : 70 à 95€/ml contre 50-70€/ml dans les bassins sédimentaires. Le granite est le sol le plus difficile à forer (vitesse réduite à 20-40 ml/jour), ce qui allonge le chantier et augmente le coût. En revanche, la conductivité thermique élevée du granite (2,5-3,5 W/m·K) permet des sondes plus courtes.",
        tendance: "La Bretagne rattrape son retard avec +35%/an de croissance. Les foreurs bretons se spécialisent en socle granitique avec du matériel adapté. L'arrivée de nouveaux acteurs commence à faire pression sur les prix, mais le tarif reste supérieur de 10-15% à la moyenne nationale.",
        marche: "Budget moyen : 18 000 à 28 000€. Le surcoût du forage en granite est partiellement compensé par des sondes plus courtes. Le ROI est bon (9-12 ans) grâce à l'écart de prix entre l'électricité (chauffage historique en Bretagne) et la géothermie.",
    },
    "Normandie": {
        specificite_geo: "La Normandie offre des tarifs de forage très compétitifs : 45 à 65€/ml dans les sols crayeux et calcaires faciles à forer. Les nappes phréatiques accessibles permettent une aquathermie économique. Le climat frais mais doux garantit des besoins de chauffage suffisants pour un amortissement rapide.",
        tendance: "Le marché normand progresse, porté par le remplacement du fioul en zone rurale. Les prix sont parmi les plus bas de province grâce à la facilité de forage en terrain crayeux et à l'arrivée de nouveaux foreurs.",
        marche: "Budget moyen : 14 000 à 24 000€ — parmi les plus accessibles de France. Le forage en craie est rapide (80-100 ml/jour), ce qui réduit le coût de main-d'œuvre. Le ROI est excellent en remplacement du fioul (7-9 ans).",
    },
    "Bourgogne-Franche-Comté": {
        specificite_geo: "La Bourgogne-Franche-Comté offre des tarifs de forage variés : 50-65€/ml dans les alluvions de la Saône, 60-80€/ml dans les calcaires bourguignons, et 75-100€/ml dans les granites du Morvan. Les nappes alluviales de la Saône sont une ressource économique pour l'aquathermie.",
        tendance: "Le marché est stable avec des prix parmi les plus accessibles de France. Les foreurs locaux proposent des tarifs compétitifs et les installateurs sont expérimentés avec les conditions variées de la région.",
        marche: "Budget moyen : 15 000 à 26 000€. Plaine de Saône : 14 000-22 000€. Jura/Morvan : 20 000-28 000€. Le ROI est excellent en zone continentale (7-10 ans) grâce aux économies de chauffage importantes.",
    },
    "Centre-Val De Loire": {
        specificite_geo: "Le Centre-Val de Loire est la région la plus économique pour l'aquathermie grâce à la nappe de Beauce : forage de 10-30 m seulement, soit un doublet de puits à 2 500 à 5 000€. Les sols calcaires du Bassin parisien se forent facilement à 50-65€/ml. C'est la région au meilleur rapport coût/performance pour la géothermie individuelle.",
        tendance: "La croissance est stable, portée par la rénovation du bâti ancien. L'aquathermie sur nappe de Beauce se développe fortement et tire les prix vers le bas. Les foreurs locaux proposent des tarifs très compétitifs.",
        marche: "Budget moyen : 12 000 à 22 000€ — le plus bas de France en aquathermie sur nappe de Beauce. Forage vertical classique : 15 000-24 000€. Le ROI est excellent (7-10 ans).",
    },
    "Corse": {
        specificite_geo: "La Corse affiche les tarifs de forage les plus élevés de France : 90 à 130€/ml en raison du transport maritime des équipements, de la rareté des foreurs locaux et des sols granitiques difficiles. Les plaines côtières (Plaine orientale) offrent des conditions plus favorables (alluvions à 60-80€/ml).",
        tendance: "Le marché corse est émergent avec peu de concurrence entre foreurs, ce qui maintient des prix élevés. L'insularité impose un surcoût logistique de 3 000 à 8 000€ (transport maritime de la foreuse et des équipements).",
        marche: "Budget moyen : 28 000 à 45 000€ — le plus élevé de France. Plaine orientale : 22 000-32 000€. Intérieur (granite) : 30 000-45 000€. Malgré ces tarifs, les aides (MaPrimeRénov' + CEE) compensent partiellement le surcoût.",
    },
};

export interface RegionContent {
    specificite_geo: string;
    tendance: string;
    marche: string;
}
