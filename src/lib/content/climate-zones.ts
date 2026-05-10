// Zones climatiques — influence sur la géothermie et le type de captage

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
        conseil_geothermie: "Dans votre zone climatique océanique, les hivers sont doux mais longs, ce qui rend la géothermie particulièrement rentable. La température du sous-sol reste stable autour de 12°C toute l'année, soit un différentiel idéal de 8 à 10°C avec l'extérieur en hiver. Le COP (coefficient de performance) de votre PAC géothermique sera excellent : 4,5 à 5,2 en moyenne annuelle, contre 3,2 pour une PAC air-eau dans cette même zone.",
        captage_recommande: "Captage horizontal recommandé si le terrain le permet (sols argileux et limoneux fréquents dans cette zone). Le sol humide améliore la conductivité thermique. Les sondes verticales restent la solution privilégiée en terrain réduit (100 à 150 m de profondeur).",
        saison_travaux: "La meilleure période pour les travaux de forage est de mars à octobre. Les sols trop gorgés d'eau en hiver peuvent rendre le captage horizontal délicat. Planifiez votre installation 3 à 4 mois à l'avance pour une mise en service avant l'hiver.",
        conseil_saisonnier: "Dans cette zone climatique, les précipitations fréquentes augmentent l'humidité du sol, ce qui améliore paradoxalement les performances du captage horizontal. Cependant, prévoyez une bâche de protection et un drainage périphérique si le chantier se déroule en automne. Les foreurs sont les plus disponibles en mai-juin.",
        sol_type: "Sols argileux, limoneux et crayeux — conductivité thermique bonne à très bonne (1,5-2,5 W/m·K). Présence fréquente de nappes phréatiques accessibles entre 5 et 30 m.",
    },
    oceanique: {
        id: "oceanique",
        label: "Climat océanique doux (Ouest)",
        conseil_geothermie: "Le climat océanique de l'Ouest, avec ses hivers doux et ses étés modérés, offre des conditions idéales pour la géothermie. Les besoins de chauffage sont modérés (2 000 à 2 500 DJU) mais constants sur 7 à 8 mois, ce qui optimise le rendement de la PAC géothermique. L'amortissement est rapide : 8 à 12 ans contre 12 à 15 ans en zone méditerranéenne.",
        captage_recommande: "Captage horizontal en nappe de capteurs (1,5 à 2 fois la surface habitable) dans les sols sableux et limoneux de l'Ouest. L'humidité océanique maintient une bonne conductivité thermique du sol. En zone littorale, attention à la salinité de la nappe phréatique pour l'aquathermie.",
        saison_travaux: "Les travaux de géothermie sont possibles presque toute l'année grâce au climat doux. La période idéale est d'avril à octobre. Profitez de l'arrière-saison (septembre-novembre) pour bénéficier de meilleures disponibilités de foreurs.",
        conseil_saisonnier: "Le climat doux permet un chantier confortable presque toute l'année. Attention cependant aux épisodes de tempête atlantique (octobre-février) qui peuvent retarder les travaux de terrassement. Les sols sableux du littoral facilitent le forage mais nécessitent un tubage renforcé.",
        sol_type: "Sols sableux, limoneux et schisteux — conductivité thermique moyenne à bonne (1,2-2,0 W/m·K). Nappe phréatique souvent accessible à faible profondeur dans les vallées fluviales.",
    },
    semi_continental: {
        id: "semi_continental",
        label: "Climat semi-continental",
        conseil_geothermie: "Le climat semi-continental, avec des hivers froids (-5 à -10°C en pointe) et des étés chauds, est la zone où la géothermie est la plus performante par rapport aux alternatives. Quand une PAC air-eau perd en rendement sous -5°C (COP < 2), la PAC géothermique maintient un COP de 4 à 5 grâce à la température stable du sous-sol. L'économie annuelle par rapport au gaz dépasse 70%.",
        captage_recommande: "Captage vertical recommandé (sondes géothermiques 80 à 150 m) pour garantir un rendement constant malgré les variations saisonnières extrêmes. Les sols du Bassin parisien et de la Bourgogne offrent une conductivité thermique correcte (1,5 à 2,5 W/m.K). L'aquathermie sur nappe est excellente en vallée de Saône et dans les plaines alluviales.",
        saison_travaux: "Planifiez vos travaux entre avril et octobre. Les forages ne sont pas impactés par le gel (le sous-sol reste à 12°C), mais la pose des capteurs horizontaux est plus difficile en sol gelé. Évitez les travaux de raccordement extérieur en décembre-février.",
        conseil_saisonnier: "Les gelées précoces (dès novembre) et tardives (jusqu'en avril) imposent de planifier le chantier en conséquence. Les terrains argileux gonflent et se rétractent selon les saisons, ce qui peut affecter les capteurs horizontaux superficiels. Privilégiez les sondes verticales pour une stabilité garantie.",
        sol_type: "Sols calcaires, argileux et alluviaux — conductivité thermique correcte à bonne (1,5-2,5 W/m·K). Formations du Bassin parisien avec nappes phréatiques abondantes (Beauce, Brie, Champagne).",
    },
    continental: {
        id: "continental",
        label: "Climat continental (Est, massifs)",
        conseil_geothermie: "Le climat continental, avec des hivers rigoureux et de fortes amplitudes thermiques, est le terrain d'excellence de la géothermie. Les besoins de chauffage élevés (2 800 à 3 500 DJU) justifient pleinement l'investissement initial. La PAC géothermique fonctionne à plein rendement quand les PAC aérothermiques décrochent sous -7°C. L'économie par rapport au chauffage fioul atteint 75 à 80%.",
        captage_recommande: "Captage vertical par sondes géothermiques (100 à 200 m) fortement recommandé pour les zones de montagne et les sols du massif vosgien ou jurassien. Les sols granitiques et gréseux offrent une bonne conductivité thermique. En Alsace, la nappe phréatique rhénane est une ressource exceptionnelle pour l'aquathermie.",
        saison_travaux: "La fenêtre optimale pour le forage est de mai à septembre en zone de montagne, et d'avril à octobre en plaine. Les foreurs sont les plus disponibles en été. Les délais d'obtention des autorisations de forage sont de 1 à 2 mois.",
        conseil_saisonnier: "Les hivers rigoureux (jusqu'à -15°C en altitude) interdisent les travaux de terrassement de décembre à mars. Le sol gelé en profondeur (30 à 60 cm) empêche toute pose de capteurs horizontaux. En revanche, le forage vertical reste possible toute l'année car le sous-sol conserve sa température. Profitez de l'été pour combiner forage et raccordement.",
        sol_type: "Sols granitiques, gréseux et calcaires jurassiens — conductivité thermique bonne (2,0-3,5 W/m·K). Nappe phréatique rhénane (la plus grande d'Europe) en Alsace, nappes alluviales dans les vallées.",
    },
    mediterraneen: {
        id: "mediterraneen",
        label: "Climat méditerranéen (Sud-Est)",
        conseil_geothermie: "Le climat méditerranéen, avec des hivers doux et des étés chauds et secs, offre un avantage unique à la géothermie : le géocooling (rafraîchissement gratuit en été). La PAC géothermique réversible peut refroidir la maison en été en utilisant la fraîcheur du sous-sol (12-14°C) sans consommation supplémentaire. Le COP chauffage est bon (4,0 à 4,5) et l'amortissement est accéléré par l'économie de climatisation.",
        captage_recommande: "Captage vertical privilégié en raison des sols secs et rocheux (calcaire, schiste) qui réduisent la performance du captage horizontal. Les sondes géothermiques de 80 à 120 m suffisent grâce aux besoins de chauffage modérés. En zone littorale, l'aquathermie sur nappe phréatique est une option intéressante.",
        saison_travaux: "Les travaux de forage sont possibles toute l'année grâce au climat sec. Évitez les mois de juillet-août pour les chantiers intérieurs (chaleur). La période février-juin et septembre-novembre est idéale, avec des foreurs disponibles et des températures agréables pour les travaux.",
        conseil_saisonnier: "La sécheresse estivale (juin-septembre) asseche les sols argileux et peut fissurer les terrains. C'est paradoxalement un bon moment pour le forage vertical car le sol sec facilite le passage de la foreuse. Pour le captage horizontal, préférez la fin d'automne quand le sol est à nouveau humidifié. Le mistral et la tramontane n'affectent pas les travaux souterrains.",
        sol_type: "Sols calcaires, schisteux et argilo-calcaires — conductivité thermique variable (1,0-2,5 W/m·K). Les sols secs en été réduisent les performances du captage horizontal. Nappes phréatiques localisées dans les plaines alluviales (Rhône, Durance).",
    },
    oceanique_sud: {
        id: "oceanique_sud",
        label: "Climat océanique aquitain (Sud-Ouest)",
        conseil_geothermie: "Le Sud-Ouest, doux et modérément humide, offre un contexte favorable à la géothermie avec des besoins de chauffage modérés (1 800 à 2 200 DJU). Les sols alluviaux de la Garonne et les formations molassiques du bassin aquitain présentent une bonne conductivité thermique. L'investissement géothermique est rentabilisé en 10 à 13 ans en remplacement du gaz.",
        captage_recommande: "Captage horizontal possible dans les sols alluviaux de la Garonne et de l'Adour (bonne conductivité). Captage vertical recommandé dans les coteaux gersois et les zones calcaires. L'aquathermie sur nappe est envisageable dans les vallées alluviales avec nappe phréatique peu profonde.",
        saison_travaux: "La meilleure période est de mars à novembre. L'été (juin-septembre) est la haute saison des chantiers, les foreurs sont très demandés. Anticipez votre projet de 3 à 4 mois pour garantir la mise en service avant l'hiver.",
        conseil_saisonnier: "Les sols molassiques du Sud-Ouest sont instables en période de pluie (retrait-gonflement des argiles). Vérifiez la classification RGA (retrait-gonflement des argiles) de votre parcelle avant de choisir le type de captage. Le captage vertical est plus sûr en terrain argileux instable. Les orages de grêle estivaux n'affectent pas les installations souterraines.",
        sol_type: "Sols alluviaux (Garonne, Adour), molassiques et calcaires — conductivité thermique moyenne à bonne (1,3-2,2 W/m·K). Nappes alluviales accessibles dans les vallées à 5-20 m de profondeur.",
    },
};
