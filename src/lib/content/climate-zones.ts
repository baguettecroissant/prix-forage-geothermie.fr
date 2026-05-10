// Zones climatiques — impact sur le COÛT du forage géothermique
// Angle éditorial Site 1 : tarif au mètre, budget, géologie vs prix

export interface ClimateZone {
    id: string;
    label: string;
    conseil_geothermie: string;
    captage_recommande: string;
    saison_travaux: string;
    conseil_saisonnier: string;
    sol_type: string;
}

export function getClimateZone(lat: number, lng: number): ClimateZone {
    if (lat > 48.5) return climateZones.oceanique_nord;
    if (lat > 46.5 && lng < 0) return climateZones.oceanique;
    if (lat > 46.5 && lng >= 0 && lng < 5) return climateZones.semi_continental;
    if (lat > 46.5 && lng >= 5) return climateZones.continental;
    if (lat > 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44) return climateZones.oceanique_sud;
    return climateZones.oceanique;
}

export const climateZones: Record<string, ClimateZone> = {
    oceanique_nord: {
        id: "oceanique_nord",
        label: "Climat océanique tempéré (Nord)",
        conseil_geothermie: "En zone océanique nord, le tarif moyen du forage est parmi les plus compétitifs : 50 à 70€/ml grâce aux sols argileux faciles à forer. La conductivité thermique élevée (1,5-2,5 W/m·K) permet des sondes plus courtes (80-120 m), réduisant le budget forage de 10 à 15%. Le COP annuel de 4,5 à 5,2 garantit un retour sur investissement rapide (8-10 ans).",
        captage_recommande: "Le captage horizontal est le plus économique ici : 4 000 à 7 000€ contre 8 000 à 12 000€ pour le vertical. Les sols naturellement humides offrent une conductivité optimale. Si le terrain est trop petit, le forage vertical reste très abordable à 55-65€/ml.",
        saison_travaux: "La période mars-octobre offre les meilleurs tarifs. En hiver, les sols gorgés d'eau compliquent le terrassement et génèrent un surcoût de 500 à 1 000€ pour la gestion des eaux de ruissellement.",
        conseil_saisonnier: "Les précipitations fréquentes rendent le sol humide — bon pour les performances, mais coûteux en chantier hivernal (+300 à 600€ de gestion des eaux). Les foreurs les plus disponibles et négociables sont en mai-juin.",
        sol_type: "Sols argileux, limoneux et crayeux — tarif bas (50-70€/ml). Nappes phréatiques entre 5 et 30 m permettant l'aquathermie à moindre coût (doublet de puits : 3 000-6 000€).",
    },
    oceanique: {
        id: "oceanique",
        label: "Climat océanique doux (Ouest)",
        conseil_geothermie: "Le climat doux de l'Ouest permet un dimensionnement compact : une PAC de 8-10 kW au lieu de 12-14 kW en zone continentale, soit une économie de 2 000 à 4 000€ sur le poste PAC. Le forage est tarifé entre 55 et 70€/ml dans les sols sableux et limoneux.",
        captage_recommande: "Le captage horizontal coûte 4 000 à 7 000€ dans les sols sableux faciles à terrasser. En zone littorale, l'aquathermie nécessite une analyse de salinité (600-1 200€ de test chimique supplémentaire).",
        saison_travaux: "Travaux possibles toute l'année — négociez en basse saison (janvier-mars) pour obtenir 5 à 10% de remise sur le forage. Le meilleur rapport qualité-prix reste septembre-novembre.",
        conseil_saisonnier: "Le climat doux réduit les risques de surcoût. Les tempêtes atlantiques (octobre-février) peuvent coûter 200-500€/jour de retard. Les sols sableux du littoral nécessitent un tubage renforcé (surcoût de 15-25€/ml).",
        sol_type: "Sols sableux, limoneux et schisteux — tarif moyen (55-75€/ml). Le schiste au-delà de 40 m nécessite un marteau fond de trou (surcoût de 10-20€/ml).",
    },
    semi_continental: {
        id: "semi_continental",
        label: "Climat semi-continental",
        conseil_geothermie: "En zone semi-continentale, le rapport coût/économies est optimal. Besoins de chauffage élevés (2 500-3 000 DJU) = amortissement rapide (7-10 ans). Le forage dans les sols calcaires du Bassin parisien coûte 55 à 80€/ml. Pour une maison de 130 m², comptez 2 sondes de 100 m soit 11 000 à 16 000€ de forage.",
        captage_recommande: "Le captage vertical (80-150 m) offre le meilleur rapport coût/performance. Le calcaire tendre se fore à 55-70€/ml, le calcaire dur monte à 70-85€/ml. L'aquathermie sur nappe de Beauce est la solution la plus économique (doublet : 4 000-8 000€).",
        saison_travaux: "Planifiez entre avril et octobre. En hiver, le gel impose un surcoût de terrassement de 500 à 1 000€. Le forage vertical n'est pas impacté car le sous-sol reste à 12°C.",
        conseil_saisonnier: "Le gel n'affecte pas le forage vertical mais alourdit le captage horizontal de 15-25%. Les terrains argileux nécessitent une étude de retrait-gonflement (300-600€) pour sécuriser le dimensionnement.",
        sol_type: "Sols calcaires, argileux et alluviaux — tarif correct (55-80€/ml). Alternance couches tendres/dures = prix variable de ±20% selon la stratigraphie de votre parcelle.",
    },
    continental: {
        id: "continental",
        label: "Climat continental (Est, massifs)",
        conseil_geothermie: "C'est la zone où l'investissement géothermique est le plus rentable. Avec 2 800-3 500 DJU, l'économie annuelle atteint 1 800 à 2 500€. Le coût de forage varie fortement : 50-65€/ml en alluvions rhénanes et 70-100€/ml en granite vosgien.",
        captage_recommande: "Le captage vertical profond (100-200 m) est fortement recommandé. En Alsace, la nappe rhénane permet l'aquathermie à 3 000-6 000€ au lieu de 10 000-15 000€ en forage vertical. Le granite est le sol le plus cher (80-110€/ml) mais le plus conducteur (2,0-3,5 W/m·K).",
        saison_travaux: "Fenêtre optimale : mai-septembre. En altitude (>800 m), le forage n'est rentable qu'en été (+20-30% de surcoût hivernal). En plaine, les foreurs sont négociables en novembre-mars.",
        conseil_saisonnier: "Les hivers rigoureux imposent un surcoût de +20% sur le forage vertical (gestion du gel en surface). Paradoxalement, le forage en sol gelé est plus propre — certains foreurs proposent des tarifs d'hiver en plaine.",
        sol_type: "Tarif variable : 50-65€/ml en alluvions rhénanes (facile), 65-85€/ml en calcaire jurassien, 80-110€/ml en granite vosgien (le plus dur). La nappe rhénane est l'option aquathermie la plus économique.",
    },
    mediterraneen: {
        id: "mediterraneen",
        label: "Climat méditerranéen (Sud-Est)",
        conseil_geothermie: "En Méditerranée, le budget est impacté par deux facteurs opposés : sols rocheux = forage cher (65-90€/ml), mais besoins modérés = PAC compacte (économie de 2 000-4 000€). L'atout majeur : le géocooling évite l'achat d'une clim (économie de 3 000-5 000€ + 400-800€/an).",
        captage_recommande: "Le captage vertical est quasi-obligatoire : les sols secs en été réduisent les performances du captage horizontal. Le forage dans le calcaire dur coûte 70-90€/ml. L'aquathermie sur nappe de la Durance est l'option la plus économique (doublet : 5 000-8 000€).",
        saison_travaux: "Travaux possibles toute l'année — avantage tarifaire. Négociez en décembre-février (basse saison) pour 5-10% de remise. La chaleur estivale peut ralentir les travaux intérieurs.",
        conseil_saisonnier: "La sécheresse estivale est favorable au forage vertical (sol sec = moins de boue, vitesse élevée). Pour le captage horizontal, attendez novembre-mars quand le sol est réhumidifié. Le mistral n'impacte pas les coûts souterrains.",
        sol_type: "Sols calcaires et schisteux — tarif élevé (65-90€/ml). Les sols secs réduisent la performance du captage horizontal de -20%. Nappes alluviales du Rhône et de la Durance (aquathermie à 40-60€/ml).",
    },
    oceanique_sud: {
        id: "oceanique_sud",
        label: "Climat océanique aquitain (Sud-Ouest)",
        conseil_geothermie: "Le Sud-Ouest offre un excellent rapport qualité-prix : sols sédimentaires faciles à forer (50-70€/ml) et besoins modérés (1 800-2 200 DJU) permettant un dimensionnement compact. Le budget global est 15-20% inférieur aux zones continentales. Amortissement en 9 à 12 ans.",
        captage_recommande: "Le captage horizontal est très compétitif dans les alluvions : 3 500-6 500€ de terrassement. Le vertical coûte 50-65€/ml en alluvions et 65-80€/ml en coteaux calcaires. L'aquathermie sur nappe alluviale est possible à faible profondeur (doublet : 3 000-5 500€).",
        saison_travaux: "Meilleure période : mars-novembre. Les foreurs sont très demandés en été — anticipez de 3-4 mois ou négociez en automne pour de meilleurs tarifs.",
        conseil_saisonnier: "Les sols molassiques instables en saison humide augmentent le coût du terrassement horizontal de 10-20%. Vérifiez la classification RGA : un terrain B2/B3 impose le captage vertical (surcoût de 4 000-7 000€ vs horizontal).",
        sol_type: "Sols alluviaux et molassiques — tarif compétitif (50-70€/ml en alluvions, 65-80€/ml en calcaire). Les argiles gonflantes nécessitent une cimentation renforcée (surcoût de 5-10€/ml).",
    },
};
