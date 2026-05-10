export interface Brand {
  slug: string;
  name: string;
  description: string;
  origin: string;
  gamme: string;
  budget: string;
  points_forts: string[];
  modeles_phares: string[];
  garantie: string;
  certification: string;
  content: string;
}

export const brands: Brand[] = [
  {
    slug: "viessmann",
    name: "Viessmann",
    description: "Leader européen du chauffage, Viessmann est la référence en PAC géothermique avec la gamme Vitocal. Qualité allemande, fiabilité reconnue.",
    origin: "Allemagne (fondé en 1917)",
    gamme: "Haut de gamme",
    budget: "10 000 – 16 000€ (PAC seule)",
    points_forts: ["COP parmi les meilleurs du marché (jusqu'à 5,2)", "Gamme complète : sol-eau, eau-eau, haute température", "Fabrication allemande, fiabilité reconnue", "Application Viessmann One pour le pilotage à distance", "Réseau dense d'installateurs certifiés en France"],
    modeles_phares: ["Vitocal 300-G (sol-eau, référence)", "Vitocal 200-G (entrée de gamme)", "Vitocal 350-G (haute puissance, collectif)"],
    garantie: "5 ans pièces (extensible à 10 ans)",
    certification: "NF PAC, EcoDesign, QualiPAC",
    content: "Viessmann est le choix de référence pour les installations géothermiques résidentielles en France et en Europe. La gamme Vitocal 300-G offre un COP de 4,8 à 5,2 en conditions normalisées, avec un compresseur Scroll EVI capable de produire de l'eau à 65°C pour les rénovations conservant des radiateurs haute température. La marque dispose du réseau d'installateurs partenaires le plus dense de France."
  },
  {
    slug: "nibe",
    name: "NIBE",
    description: "Fabricant suédois spécialiste de la géothermie depuis 1952. NIBE est la marque la plus vendue en Scandinavie pour le chauffage géothermique.",
    origin: "Suède (fondé en 1952)",
    gamme: "Haut de gamme",
    budget: "9 000 – 15 000€ (PAC seule)",
    points_forts: ["Conception scandinave optimisée pour les climats froids", "Système NIBE S intégré (PAC + ECS + ventilation)", "Connectivité avancée (NIBE Uplink, API ouverte)", "Compresseur inverter avec régulation fine", "50 ans d'expertise géothermique"],
    modeles_phares: ["NIBE S1155 (sol-eau, référence résidentielle)", "NIBE F1345 (grande puissance, collectif)", "NIBE S1255 (système intégré PAC + ECS + ventilation)"],
    garantie: "5 ans pièces (extensible)",
    certification: "NF PAC, Keymark, EcoDesign",
    content: "NIBE est le leader mondial de la PAC géothermique avec une expertise de 50 ans dans les pays nordiques. La S1155 est la PAC géothermique la plus vendue en Europe, avec un compresseur inverter qui module la puissance de 20 à 100% pour un COP saisonnier exceptionnel. NIBE est le choix premium pour les maisons bien isolées et les projets exigeants."
  },
  {
    slug: "vaillant",
    name: "Vaillant",
    description: "Géant allemand du chauffage, Vaillant propose une gamme géothermique fiable et performante avec la flexoTHERM, adaptée aux rénovations et constructions neuves.",
    origin: "Allemagne (fondé en 1874)",
    gamme: "Haut de gamme",
    budget: "9 000 – 14 000€ (PAC seule)",
    points_forts: ["flexoTHERM exclusive : COP jusqu'à 5,0", "Compatible avec tous types de captage (sol, eau, air)", "Système hybride possible (PAC + chaudière gaz existante)", "Connectivité Vaillant sensoAPP", "Réseau installateurs Vaillant Pro"],
    modeles_phares: ["flexoTHERM exclusive (modèle premium, multi-source)", "flexoCOMPACT exclusive (PAC + ECS intégrée)", "geoTHERM (entrée de gamme sol-eau)"],
    garantie: "5 ans pièces (extensible à 7 ans)",
    certification: "NF PAC, EcoDesign",
    content: "Vaillant se distingue par la polyvalence de sa gamme flexoTHERM exclusive, compatible avec tous les types de captage géothermique (sol, eau, même air). C'est la solution idéale pour les rénovations où le mode hybride (PAC géothermique + chaudière gaz d'appoint) permet une transition progressive. La PAC produit de l'eau jusqu'à 65°C, compatible avec les radiateurs haute température."
  },
  {
    slug: "atlantic",
    name: "Atlantic",
    description: "Fabricant français de référence, Atlantic propose des PAC géothermiques made in France avec un excellent rapport qualité/prix et un SAV de proximité.",
    origin: "France (fondé en 1968, La Roche-sur-Yon)",
    gamme: "Milieu de gamme / Haut de gamme",
    budget: "7 000 – 12 000€ (PAC seule)",
    points_forts: ["Fabrication française (La Roche-sur-Yon)", "Excellent rapport qualité/prix", "SAV et pièces détachées en France", "Gamme Alfea adaptée au marché français", "Compatible avec la régulation Cozytouch"],
    modeles_phares: ["Alfea Extensa Duo (sol-eau + ECS)", "Alfea Excellia (haute puissance)", "Alfea Evolution (entrée de gamme)"],
    garantie: "5 ans pièces, 2 ans main-d'œuvre",
    certification: "NF PAC, EcoDesign",
    content: "Atlantic est le champion français de la PAC géothermique, avec une fabrication dans l'usine de La Roche-sur-Yon (Vendée). La gamme Alfea offre un rapport qualité/prix imbattable, avec un COP de 4,2 à 4,7 et une production d'eau chaude sanitaire intégrée. Le SAV français et la disponibilité des pièces détachées sont un atout majeur par rapport aux marques importées."
  },
  {
    slug: "stiebel-eltron",
    name: "Stiebel Eltron",
    description: "Spécialiste allemand de l'énergie renouvelable, Stiebel Eltron est le pionnier de la PAC géothermique en Europe avec 45 ans d'expertise.",
    origin: "Allemagne (fondé en 1924)",
    gamme: "Haut de gamme",
    budget: "10 000 – 16 000€ (PAC seule)",
    points_forts: ["Pionnier de la géothermie en Europe depuis 1976", "Technologie inverter avancée", "COP saisonnier exceptionnel (SCOP > 4,5)", "Système intégré ISG web (monitoring en ligne)", "Compresseur très silencieux (< 35 dB)"],
    modeles_phares: ["WPF (sol-eau, référence résidentielle)", "WPE-I (grande puissance, inverter)", "WPC (compact pour petites surfaces)"],
    garantie: "5 ans pièces (extensible à 10 ans)",
    certification: "NF PAC, Keymark, EcoDesign",
    content: "Stiebel Eltron est le pionnier européen de la PAC géothermique, avec la première PAC résidentielle commercialisée en 1976. La gamme WPF offre un COP saisonnier parmi les meilleurs du marché (SCOP > 4,5) grâce à une technologie inverter avancée. La marque est particulièrement implantée en Alsace et dans l'Est de la France, avec un réseau technique de proximité."
  },
  {
    slug: "daikin",
    name: "Daikin",
    description: "Leader mondial de la climatisation, Daikin se développe fortement en géothermie avec la gamme Altherma. Technologie japonaise, fiabilité éprouvée.",
    origin: "Japon (fondé en 1924, usine européenne à Ostende, Belgique)",
    gamme: "Milieu de gamme / Haut de gamme",
    budget: "8 000 – 14 000€ (PAC seule)",
    points_forts: ["Fabrication européenne (Ostende, Belgique)", "Fluide frigorigène R32 (GWP réduit)", "Mode géocooling natif (rafraîchissement passif)", "Application Daikin Onecta pour pilotage à distance", "Réseau installateurs Daikin très dense (2 000+ en France)"],
    modeles_phares: ["Altherma 3 GEO (dernière génération)", "EGSQH (eau-eau, aquathermie)", "EGSAH (sol-eau, haute puissance)"],
    garantie: "5 ans compresseur, 3 ans pièces",
    certification: "NF PAC, EcoDesign",
    content: "Daikin, leader mondial de la climatisation, a développé une offre géothermique de plus en plus étoffée avec la gamme Altherma 3 GEO. Le point fort de Daikin est le mode géocooling intégré (rafraîchissement passif gratuit en été) et le réseau de plus de 2 000 installateurs certifiés en France. La PAC fonctionne au R32, un fluide frigorigène à faible impact environnemental."
  },
];

export function getAllBrands() {
  return brands;
}
