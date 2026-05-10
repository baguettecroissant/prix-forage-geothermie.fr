// Régions de France — contenu géothermie spécifique par région

export const regionsContent: Record<string, RegionContent> = {
    "Île-De-France": {
        specificite_geo: "L'Île-de-France est un territoire pionnier de la géothermie en France grâce à la nappe du Dogger, située entre 1 500 et 2 000 m de profondeur, qui alimente déjà des réseaux de chaleur à Chevilly-Larue, Créteil et Villejuif. Pour les maisons individuelles, les sondes géothermiques verticales (80-150 m) et l'aquathermie sur nappe de Beauce sont les solutions les plus courantes.",
        tendance: "Le marché francilien de la géothermie individuelle connaît une croissance de 25% par an, portée par l'interdiction du gaz en construction neuve et les aides renforcées. Les installateurs certifiés QualiPAC sont nombreux mais les délais d'intervention s'allongent (2-3 mois d'attente).",
        marche: "Le prix moyen d'une installation géothermique en Île-de-France est supérieur de 15 à 25% à la moyenne nationale, en raison des contraintes logistiques urbaines et du coût de la main-d'œuvre. Les aides (MaPrimeRénov' + CEE) peuvent couvrir jusqu'à 15 000€ du coût total.",
    },
    "Auvergne-Rhône-Alpes": {
        specificite_geo: "La région Auvergne-Rhône-Alpes est exceptionnellement dotée en ressources géothermiques. La chaîne des Puys (Puy-de-Dôme) offre un flux géothermique parmi les plus élevés de France métropolitaine. Les nappes alluviales du Rhône, de l'Isère et de la Saône sont idéales pour l'aquathermie. En montagne (Savoie, Haute-Savoie), les besoins de chauffage importants justifient pleinement l'investissement géothermique.",
        tendance: "Le tissu d'installateurs et de foreurs est particulièrement dense (ENGIE Homes, Atlantic, Viessmann). La région est la 2e en France pour le nombre d'installations géothermiques individuelles. La tendance est aux PAC géothermiques haute température (65°C) pour les rénovations de maisons anciennes conservant des radiateurs.",
        marche: "Le marché est dynamique, tiré par la construction neuve en Rhône-Alpes et la rénovation du bâti ancien en Auvergne. Les prix sont dans la moyenne nationale avec un avantage concurrentiel grâce à la densité d'installateurs.",
    },
    "Nouvelle-Aquitaine": {
        specificite_geo: "En Nouvelle-Aquitaine, le sous-sol sédimentaire du bassin aquitain offre des conditions géologiques favorables à la géothermie. Les nappes alluviales de la Garonne et de la Dordogne sont accessibles à faible profondeur (10-30 m). Les sources thermales pyrénéennes (Dax, Bagnères-de-Bigorre) témoignent de la richesse du sous-sol. Le climat doux permet un amortissement rapide grâce au géocooling estival.",
        tendance: "La tendance néo-aquitaine est à la géothermie en remplacement du chauffage fioul (encore très présent dans les zones rurales de Charente, Dordogne et Limousin). Les PAC géothermiques couplées à un plancher chauffant basse température sont le standard des constructions neuves.",
        marche: "Le marché est en forte croissance (+30% par an), porté par l'attractivité résidentielle de Bordeaux et du littoral. Les prix sont dans la moyenne nationale avec un bon rapport qualité-coût des foreurs locaux.",
    },
    "Occitanie": {
        specificite_geo: "L'Occitanie bénéficie d'un double avantage : les nappes alluviales de la Garonne et de l'Hérault pour l'aquathermie, et le potentiel géothermique profond du bassin languedocien. Le climat méditerranéen rend la PAC géothermique réversible (chauffage + rafraîchissement) particulièrement attractive. Les Pyrénées offrent des sources thermales témoignant de la chaleur du sous-sol.",
        tendance: "La géothermie en Occitanie est tirée par la construction neuve (forte croissance démographique à Toulouse et Montpellier) et par l'intérêt pour le rafraîchissement passif (géocooling). Les installateurs spécialisés se concentrent autour des métropoles.",
        marche: "Les prix sont légèrement inférieurs à la moyenne nationale grâce aux conditions de forage favorables (sols sédimentaires). L'amortissement est accéléré par la double fonction chauffage/rafraîchissement.",
    },
    "Hauts-De-France": {
        specificite_geo: "Les Hauts-de-France, avec leurs hivers froids et leurs sols crayeux de Picardie, sont un terrain favorable à la géothermie individuelle. La nappe de la craie, présente sur une grande partie du territoire, est accessible à faible profondeur (15-40 m) et permet l'aquathermie à moindre coût. Les besoins de chauffage élevés (2 500-3 000 DJU) maximisent le retour sur investissement.",
        tendance: "Le marché nordiste est en forte progression, porté par le remplacement massif du chauffage fioul et gaz dans les maisons individuelles. Les installateurs sont de plus en plus spécialisés et les délais d'intervention restent raisonnables (1-2 mois).",
        marche: "Les prix sont parmi les plus compétitifs de France grâce à la facilité de forage dans les sols crayeux et à la concurrence entre installateurs. Le retour sur investissement est excellent (7-10 ans) grâce aux besoins de chauffage importants.",
    },
    "Provence-Alpes-Côte D'azur": {
        specificite_geo: "En PACA, la géothermie individuelle est particulièrement intéressante pour sa fonction de rafraîchissement estival (géocooling). Les sols calcaires et alluviaux de la Provence offrent des conditions de forage correctes. La nappe alluviale de la Durance et du Rhône est une ressource pour l'aquathermie. En montagne (Alpes), les besoins de chauffage élevés justifient pleinement l'investissement.",
        tendance: "La tendance est aux PAC géothermiques réversibles avec plancher chauffant-rafraîchissant. Le marché est tiré par les constructions neuves sur la Côte d'Azur et la rénovation des maisons provençales. Les installateus spécialisés se concentrent autour de Nice, Marseille et Aix.",
        marche: "Les prix sont supérieurs de 10 à 15% à la moyenne nationale en raison du coût de la main-d'œuvre azuréenne. L'amortissement est bon grâce à la double fonction chauffage/rafraîchissement.",
    },
    "Grand Est": {
        specificite_geo: "Le Grand Est est une région stratégique pour la géothermie grâce au fossé rhénan alsacien, l'une des zones les plus favorables d'Europe pour la géothermie profonde. La nappe phréatique rhénane (la plus grande d'Europe) est une ressource exceptionnelle pour l'aquathermie individuelle. Les hivers continentaux rigoureux maximisent le rendement de la PAC géothermique par rapport aux alternatives aérothermiques.",
        tendance: "L'Alsace est la région la plus avancée en France pour l'adoption de la géothermie individuelle, avec une culture germanique de l'efficacité énergétique. Les installateurs certifiés sont nombreux et les marques allemandes (Viessmann, Vaillant, Stiebel Eltron) très présentes.",
        marche: "Les prix sont dans la moyenne nationale avec un avantage en Alsace grâce à la nappe rhénane (forage peu profond = coût réduit). Le retour sur investissement est parmi les meilleurs de France (7-9 ans) grâce aux besoins de chauffage importants.",
    },
    "Pays De La Loire": {
        specificite_geo: "Les Pays de la Loire offrent un terrain favorable à la géothermie avec des sols sédimentaires (calcaire, schiste) et des nappes alluviales accessibles. La Loire et ses affluents constituent des ressources pour l'aquathermie. Le climat océanique garantit des besoins de chauffage modérés mais constants (2 000-2 200 DJU), optimisant le fonctionnement de la PAC.",
        tendance: "Le marché ligérien est en croissance, porté par la construction neuve dans la métropole nantaise et la rénovation des pavillons périurbains. Les installateurs locaux ont développé une expertise solide en géothermie horizontale, favorisée par la disponibilité foncière.",
        marche: "Les prix sont légèrement inférieurs à la moyenne nationale grâce à des conditions de forage favorables et à une bonne concurrence entre installateurs. L'amortissement est de 9 à 12 ans en remplacement du gaz.",
    },
    "Bretagne": {
        specificite_geo: "La Bretagne, avec son socle granitique et ses sols schisteux, impose des techniques de forage spécifiques mais offre un potentiel géothermique sous-exploité. Les nappes phréatiques, bien que moins abondantes que dans les bassins sédimentaires, sont présentes dans les zones de fracture du granite. Le climat océanique avec des hivers doux rend la géothermie compétitive face au chauffage électrique, historiquement dominant en Bretagne.",
        tendance: "La Bretagne rattrape son retard en géothermie, avec une croissance de 35% par an. Les foreurs bretons se spécialisent dans le forage en socle granitique. La région bénéficie d'aides complémentaires régionales pour la transition énergétique.",
        marche: "Les prix sont dans la moyenne nationale malgré les contraintes de forage en sol granitique. Le retour sur investissement est bon (9-12 ans) grâce à l'écart de prix entre l'électricité (historiquement chauffage en Bretagne) et la géothermie.",
    },
    "Normandie": {
        specificite_geo: "La Normandie, avec ses sols crayeux et ses nappes phréatiques accessibles, offre un bon potentiel pour la géothermie individuelle. Les formations géologiques du Bassin parisien (craie, calcaire) permettent des forages à coût maîtrisé. Le climat océanique frais avec des hivers humides maximise le rendement de la PAC géothermique grâce à la bonne conductivité thermique des sols.",
        tendance: "Le marché normand est en progression, porté par le remplacement du fioul dans les maisons rurales et la construction neuve dans l'agglomération rouennaise et caennaise. Les installateurs sont de plus en plus spécialisés.",
        marche: "Les prix sont compétitifs, inférieurs de 5% à la moyenne nationale grâce à la facilité de forage en terrain crayeux. Le retour sur investissement est excellent en remplacement du fioul (7-9 ans).",
    },
    "Bourgogne-Franche-Comté": {
        specificite_geo: "La Bourgogne-Franche-Comté offre des conditions géologiques variées mais globalement favorables à la géothermie. Les nappes alluviales de la Saône, les calcaires jurassiens et les granites du Morvan permettent différentes approches de captage. Les hivers continentaux rigoureux (Jura, Morvan) justifient pleinement l'investissement géothermique.",
        tendance: "Le marché est stable et qualitatif, avec des installateurs expérimentés habitués aux conditions de forage variées. La tendance est aux PAC géothermiques haute température pour les maisons anciennes de Bourgogne.",
        marche: "Les prix sont parmi les plus accessibles de France, avec des foreurs locaux proposant des tarifs compétitifs. Le retour sur investissement est excellent en zone continentale (7-10 ans).",
    },
    "Centre-Val De Loire": {
        specificite_geo: "Le Centre-Val de Loire est idéalement positionné pour la géothermie grâce à la nappe de Beauce, l'une des plus grandes nappes libres d'Europe. L'aquathermie (géothermie sur eau de nappe) y est particulièrement développée et économique. Les sols calcaires du Bassin parisien se forent facilement. Le circuit géothermique est optimisé par la proximité de la nappe (10-30 m de profondeur).",
        tendance: "La région connaît une croissance stable de la géothermie, portée par la rénovation du bâti ancien (châteaux de la Loire reconvertis, longères) et les constructions neuves des communes péri-urbaines de Tours et Orléans.",
        marche: "Les prix sont avantageux, inférieurs de 5 à 10% à la moyenne nationale grâce à la facilité d'accès à la nappe de Beauce et aux sols faciles à forer.",
    },
    "Corse": {
        specificite_geo: "En Corse, la géothermie reste peu développée malgré un potentiel intéressant. Les sols granitiques de l'intérieur imposent des forages techniques, mais les plaines côtières (Plaine orientale, vallée du Tavignano) offrent des nappes alluviales accessibles. Le climat méditerranéen rend la PAC géothermique réversible attractive pour le rafraîchissement estival.",
        tendance: "Le marché corse est émergent, avec peu d'installateurs spécialisés. Les projets se concentrent sur les constructions neuves dans les zones périurbaines d'Ajaccio et Bastia. L'insularité impose des surcoûts de transport du matériel.",
        marche: "Les prix sont les plus élevés de France continentale (+25 à 35% par rapport à la moyenne), en raison du transport maritime des équipements, de la rareté des foreurs locaux et des contraintes logistiques insulaires.",
    },
};

export interface RegionContent {
    specificite_geo: string;
    tendance: string;
    marche: string;
}
