// Content Engine — Prix Forage Géothermie : tarifs et devis par ville
// Axe éditorial : PRIX, TARIFS, COÛTS DE FORAGE
// 12 variantes d'intro × 5 tiers × 6 climats × 13 régions = milliers de combinaisons uniques

import { City } from "@/types";
import { getPopTier, populationTiers } from "./population-tiers";
import { regionsContent } from "./regions";
import { getClimateZone } from "./climate-zones";

export interface CityPageContent {
    introTitle: string;
    introParagraph: string;
    regionSpecificite: string;
    regionTendance: string;
    regionMarche: string;
    climateAdvice: string;
    captageRecommande: string;
    saisonTravaux: string;
    conseilSaisonnier: string;
    solType: string;
    casUsage: string;
    conseilPratique: string;
    logistique: string;
    budgetContexte: string;
    faqItems: FaqItem[];
    tierLabel: string;
    checklistItems: string[];
    marquesRecommandees: string[];
    pricingContext: string;
    displayPopulation: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

// Deterministic hash for selecting intro variants
function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// 12 intro variants — AXE PRIX & FORAGE — contenu 100% unique vs cout-geothermie.fr
const introVariants = [
    (city: string, dept: string, region: string) => `Quel budget prévoir pour un forage géothermique à ${city} en 2026 ? Le tarif moyen oscille entre 50€ et 80€ par mètre linéaire de sonde, soit 5 000€ à 12 000€ pour le forage seul. À ce montant s'ajoute la PAC géothermique (7 000€ à 18 000€ selon la puissance). Les foreurs certifiés du ${dept} en ${region} proposent des devis détaillés incluant l'étude de sol préalable.`,
    (city: string, dept: string, region: string) => `Le prix d'un forage géothermique à ${city} dépend de trois facteurs clés : la profondeur de sonde nécessaire (80 à 200 m), la nature du sous-sol dans le ${dept} et le nombre de forages requis. En ${region}, les tarifs des foreurs varient de 4 500€ à 15 000€ pour le forage, auxquels s'ajoute le coût de la PAC. Demander 3 devis minimum permet d'économiser 15 à 25% sur la facture totale.`,
    (city: string, dept: string, region: string) => `Combien coûte réellement un forage pour pompe à chaleur géothermique à ${city} ? Notre analyse des tarifs pratiqués dans le ${dept} révèle un prix moyen de 60€ à 75€/ml pour un forage vertical classique. Pour une maison de 120 m² en ${region}, comptez 2 sondes de 100 m soit un budget forage d'environ 12 000€ à 15 000€, hors PAC et raccordements.`,
    (city: string, dept: string, region: string) => `Le tarif d'un forage géothermique à ${city} n'a jamais été aussi accessible grâce aux aides 2026. Le coût brut (forage + PAC + mise en service) se situe entre 15 000€ et 30 000€, mais MaPrimeRénov' et les CEE réduisent la facture de 10 000€ à 15 000€. Dans le ${dept}, les entreprises de forage qualifiées RGE intègrent ces aides directement dans leurs devis.`,
    (city: string, dept: string, region: string) => `À ${city}, le prix du mètre linéaire de forage géothermique varie selon la géologie locale : 50€/ml en terrain meuble (alluvions, sable), 65€/ml en terrain mixte et jusqu'à 90€/ml en roche dure. Les foreurs implantés dans le ${dept} connaissent parfaitement le sous-sol de ${region} et dimensionnent leurs devis en fonction de la stratigraphie réelle de votre parcelle.`,
    (city: string, dept: string, region: string) => `Un forage géothermique à ${city} représente un investissement initial de 15 000€ à 28 000€ tout compris (étude de sol, forage, PAC, raccordements). Mais le calcul économique est implacable : en ${region}, les propriétaires amortissent ce coût en 7 à 10 ans grâce à des factures de chauffage divisées par 4. Les foreurs du ${dept} réalisent l'étude thermique gratuite avant tout engagement.`,
    (city: string, dept: string, region: string) => `Avant de demander un devis de forage géothermique à ${city}, comprenez la structure des coûts : le forage représente 35 à 45% du budget total, la PAC géothermique 40 à 50%, et les raccordements 10 à 15%. Dans le ${dept} en ${region}, la concurrence entre foreurs certifiés permet de négocier des prix 10 à 20% inférieurs à ceux des zones moins concurrentielles.`,
    (city: string, dept: string, region: string) => `Forage vertical ou captage horizontal à ${city} ? Le choix impacte directement votre budget. Le forage vertical (sondes de 80-150 m) coûte 10 000€ à 15 000€ dans le ${dept} mais s'adapte aux petits terrains. Le captage horizontal ne coûte que 4 000€ à 8 000€ mais nécessite 200 à 300 m² de terrain libre. En ${region}, les deux techniques sont maîtrisées par les professionnels locaux.`,
    (city: string, dept: string, region: string) => `Le devis d'un forage géothermique à ${city} doit inclure 6 postes obligatoires : étude de faisabilité (800-1 500€), forage proprement dit (5 000-12 000€), scellement des sondes (inclus), PAC géothermique (7 000-18 000€), raccordements hydrauliques (1 500-3 000€) et mise en service (500-800€). Les foreurs sérieux du ${dept} détaillent chaque poste dans leur offre.`,
    (city: string, dept: string, region: string) => `Investir dans un forage géothermique à ${city}, c'est placer 15 000€ à 25 000€ dans un système qui rapporte 1 200€ à 1 800€ d'économies annuelles pendant 25 ans minimum. Le rendement financier est de 6 à 8% par an, supérieur à la plupart des placements. En ${region}, les foreurs du ${dept} garantissent la performance de leurs installations sur 10 ans.`,
    (city: string, dept: string, region: string) => `À ${city}, comparer les tarifs de forage géothermique entre 3 professionnels du ${dept} peut vous faire économiser 3 000€ à 5 000€ sur le même projet. Les écarts de prix s'expliquent par le matériel de forage utilisé, les marques de PAC proposées et les frais de déplacement. En ${region}, la densité de foreurs qualifiés joue en faveur du consommateur.`,
    (city: string, dept: string, region: string) => `Le budget total d'une installation géothermique à ${city} se décompose ainsi en 2026 : forage vertical (55-75€/ml × profondeur), PAC sol-eau (8 000-16 000€ selon puissance), raccordements et mise en service (2 500-4 000€). Après déduction des aides dans le ${dept} en ${region}, le reste à charge moyen descend entre 7 000€ et 18 000€ — soit l'équivalent de 6 à 8 ans de factures de gaz.`,
];

function getDisplayPopulation(city: City): number {
    let pop = city.population || 0;
    if (pop === 0) {
        if (city.name.includes("Paris")) pop = 2100000;
        else if (city.name.includes("Marseille")) pop = 870000;
        else if (city.name.includes("Lyon")) pop = 522000;
    }
    return pop;
}

export function generateCityContent(city: City): CityPageContent {
    const pop = getDisplayPopulation(city);
    const tier = getPopTier(pop);
    const tierData = populationTiers[tier];
    const regionData = regionsContent[city.region];
    const climateZone = getClimateZone(city.coordinates.lat, city.coordinates.lng);

    const introTitle = `Prix Forage Géothermique à ${city.name}`;

    // Deterministic intro variant selection — 12 variants × dept × region = unique
    const variantIndex = hashSlug(city.slug) % introVariants.length;
    const introVariant = introVariants[variantIndex](city.name, city.department_name, city.region);
    const introParagraph = `${introVariant}\n\n${tierData.intro}`;

    const regionSpecificite = regionData?.specificite_geo || '';
    const regionTendance = regionData?.tendance || '';
    const regionMarche = regionData?.marche || '';

    const climateAdvice = climateZone.conseil_geothermie;
    const captageRecommande = climateZone.captage_recommande;
    const saisonTravaux = climateZone.saison_travaux;
    const conseilSaisonnier = climateZone.conseil_saisonnier;
    const solType = climateZone.sol_type;

    const casUsage = tierData.cas_usage;
    const conseilPratique = tierData.conseil_pratique;
    const logistique = tierData.logistique;
    const budgetContexte = tierData.budget_contexte;

    const faqItems = buildFaq(city, pop, climateZone.saison_travaux);

    // Pricing context — unique paragraph combining dept + tier + climate
    const pricingContext = buildPricingContext(city, pop, climateZone.label);

    return {
        introTitle,
        introParagraph,
        regionSpecificite,
        regionTendance,
        regionMarche,
        climateAdvice,
        captageRecommande,
        saisonTravaux,
        conseilSaisonnier,
        solType,
        casUsage,
        conseilPratique,
        logistique,
        budgetContexte,
        faqItems,
        tierLabel: tierData.label,
        checklistItems: tierData.checklist_items,
        marquesRecommandees: tierData.marques_recommandees,
        pricingContext,
        displayPopulation: pop,
    };
}

function buildPricingContext(city: City, pop: number, climateLabel: string): string {
    const dept = city.department_name;
    const region = city.region;
    
    if (pop > 200000) {
        return `En tant que métropole, ${city.name} présente des tarifs d'installation géothermique parmi les plus élevés du ${dept}. Les contraintes logistiques (accès chantier, autorisations de voirie, voisinage) génèrent un surcoût de 15 à 25% par rapport à la moyenne nationale. Cependant, la densité d'installateurs certifiés en ${region} permet de négocier et d'obtenir des devis compétitifs. Le captage vertical est quasi-systématique en raison de la taille réduite des terrains. Les aides financières (MaPrimeRénov' + CEE) compensent efficacement ce surcoût : le reste à charge après aides reste dans la moyenne nationale.`;
    }
    if (pop > 50000) {
        return `À ${city.name}, les tarifs d'installation géothermique sont légèrement supérieurs à la moyenne du ${dept}, avec un surcoût de 5 à 15% lié aux contraintes urbaines. En ${region}, zone ${climateLabel.toLowerCase()}, le réseau d'installateurs RGE est suffisamment dense pour maintenir une concurrence saine. Le choix entre captage vertical et horizontal dépend de votre terrain — les deux solutions sont régulièrement mises en œuvre. Profitez de la présence de plusieurs professionnels pour comparer les offres et les technologies proposées (PAC sol-eau, eau-eau, avec ou sans géocooling).`;
    }
    if (pop > 10000) {
        return `${city.name} bénéficie de tarifs proches de la moyenne nationale pour l'installation géothermique. En ${region}, ${climateLabel.toLowerCase()}, les installateurs du ${dept} proposent des prix compétitifs grâce à des conditions de chantier favorables (accès terrain, espace disponible). Le rapport qualité-prix est optimal dans les villes de cette taille : vous bénéficiez de l'expertise des professionnels tout en évitant les surcoûts métropolitains.`;
    }
    if (pop > 2000) {
        return `Dans les communes comme ${city.name}, les prix sont souvent plus avantageux que dans les grandes villes du ${dept}. Les installateurs locaux en ${region} proposent des tarifs 5 à 15% inférieurs à la moyenne nationale, avec l'avantage d'un suivi de proximité. Le captage horizontal, possible sur les terrains spacieux de cette commune, permet de réduire encore le budget de 3 000 à 5 000€ par rapport au forage vertical.`;
    }
    return `En commune rurale comme ${city.name}, vous bénéficiez des tarifs les plus compétitifs du ${dept} pour la géothermie. Les foreurs locaux en ${region} proposent des prix attractifs, et la disponibilité foncière permet d'opter pour le captage horizontal — la solution la plus économique. Le principal poste de coût à anticiper est le déplacement du foreur si aucun professionnel n'est basé à proximité immédiate (surcoût de 500 à 1 000€).`;
}

function buildFaq(city: City, pop: number, saisonTravaux: string): FaqItem[] {
    const dept = city.department_name;
    const region = city.region;

    return [
        {
            question: `Combien coûte une installation géothermique à ${city.name} ?`,
            answer: pop > 200000
                ? `À ${city.name}, le prix moyen d'une installation géothermique complète (forage + PAC + raccordements) se situe entre 18 000€ et 35 000€. Les tarifs sont 15 à 25% supérieurs à la moyenne nationale en raison des contraintes logistiques métropolitaines. Après déduction des aides (MaPrimeRénov' + CEE), le reste à charge descend entre 8 000€ et 20 000€.`
                : pop > 50000
                    ? `À ${city.name}, le prix moyen d'une installation géothermique complète se situe entre 15 000€ et 30 000€. Les tarifs sont proches de la moyenne nationale. Après déduction des aides financières (MaPrimeRénov' jusqu'à 11 000€ + CEE jusqu'à 4 000€), le reste à charge est de 6 000€ à 18 000€.`
                    : pop > 10000
                        ? `À ${city.name}, le prix moyen d'une installation géothermique se situe entre 14 000€ et 28 000€, conforme à la moyenne nationale. Les installateurs locaux et les réseaux de marques proposent des tarifs compétitifs. Avec les aides, le reste à charge peut descendre sous 10 000€.`
                        : `À ${city.name}, le prix moyen d'une installation géothermique se situe entre 13 000€ et 25 000€. Les tarifs sont légèrement inférieurs à la moyenne nationale. Le captage horizontal, possible si vous disposez de terrain, réduit le coût de 3 000 à 5 000€ par rapport au forage vertical.`
        },
        {
            question: `Quel type de captage géothermique choisir à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, le captage vertical par sondes géothermiques (80-150 m de profondeur) est le plus courant car il ne nécessite que peu d'espace. Si votre terrain le permet et que le sous-sol est favorable dans le ${dept}, le captage horizontal (nappe de collecteurs à 1,2 m de profondeur) est 30 à 40% moins cher. L'aquathermie (sur nappe phréatique) est aussi envisageable selon la ressource en eau locale.`
                : `À ${city.name}, le choix entre captage vertical et horizontal dépend de votre terrain. Le captage horizontal nécessite une surface libre de 1,5 à 2 fois la surface habitable. Le captage vertical (sondes de 80-150 m) s'adapte à tous les terrains mais coûte 3 000 à 5 000€ de plus. Un foreur qualifié dans le ${dept} vous conseillera après étude du sol.`
        },
        {
            question: `La géothermie est-elle rentable à ${city.name} ?`,
            answer: `Oui, la géothermie est le système de chauffage le plus rentable à long terme à ${city.name}. ${saisonTravaux} En remplacement du fioul, l'économie annuelle atteint 1 500 à 2 000€/an. En remplacement du gaz, 800 à 1 200€/an. L'amortissement est de 8 à 12 ans, et la durée de vie du système dépasse 25 ans (50 ans pour les sondes).`
        },
        {
            question: `Quelles aides pour la géothermie à ${city.name} en 2026 ?`,
            answer: `Les aides financières pour la géothermie à ${city.name} (${dept}) sont les plus généreuses du secteur de la rénovation énergétique : MaPrimeRénov' (jusqu'à 11 000€ pour les ménages très modestes), Certificats d'Économies d'Énergie – CEE (jusqu'à 4 000€), TVA réduite à 5,5%, éco-PTZ (jusqu'à 50 000€ à taux zéro), et éventuellement des aides locales du département ${dept} ou de la région ${region}. Au total, jusqu'à 15 000€ d'aides cumulables.`
        },
        {
            question: `Faut-il une autorisation pour un forage géothermique à ${city.name} ?`,
            answer: `Oui, tout forage géothermique à ${city.name} nécessite une déclaration préalable auprès de la DREAL (formulaire en ligne sur le site du BRGM). Pour les forages de moins de 10 m, une simple déclaration suffit. Pour les forages de plus de 10 m (sondes verticales), un dossier plus complet est requis avec un délai de traitement de 1 à 2 mois dans le ${dept}. Votre installateur RGE se charge généralement des formalités.`
        },
        {
            question: `Combien de temps durent les travaux de géothermie à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, comptez 4 à 7 jours ouvrés pour l'ensemble du chantier (forage + installation PAC + raccordements). Le forage vertical dure 1 à 2 jours, la pose de la PAC et les raccordements hydrauliques/électriques 2 à 3 jours. En zone urbaine, les autorisations administratives peuvent ajouter 1 à 2 mois de délai. Planifiez votre projet 3 à 4 mois avant la saison de chauffe.`
                : `À ${city.name}, comptez 3 à 5 jours ouvrés pour l'installation complète. Le forage vertical dure 1 à 2 jours, le captage horizontal 2 à 3 jours. La mise en service est immédiate après le raccordement. Prévoyez 2 à 3 mois entre le premier devis et le début des travaux.`
        },
        {
            question: `Quelle est la durée de vie d'une installation géothermique à ${city.name} ?`,
            answer: `Une installation géothermique à ${city.name} a une durée de vie exceptionnelle. La pompe à chaleur (PAC) fonctionne 25 à 30 ans avec un entretien annuel (150 à 300€/an). Les sondes géothermiques enterrées dans le sous-sol du ${dept} durent 50 ans et plus — elles survivent à la PAC et peuvent être réutilisées lors d'un remplacement. C'est un investissement patrimonial qui se transmet avec la maison.`
        },
        {
            question: `La géothermie fonctionne-t-elle aussi pour le rafraîchissement à ${city.name} ?`,
            answer: `Oui, la géothermie offre le "géocooling" : en été, la température du sous-sol à ${city.name} (12-14°C) est naturellement inférieure à la température extérieure. La PAC géothermique réversible peut rafraîchir votre logement à moindre coût — bien moins cher qu'une climatisation classique. En ${region}, cette double fonction chauffage/rafraîchissement accélère le retour sur investissement de votre installation.`
        },
    ];
}

// Helper: find nearby cities from the same department
export function findNearbyCities(allCities: City[], currentCity: City, limit: number = 8): City[] {
    const sameDept = allCities.filter(c => c.department_code === currentCity.department_code && c.slug !== currentCity.slug);

    if (currentCity.coordinates.lat === 0 && currentCity.coordinates.lng === 0) {
        return sameDept.slice(0, limit);
    }

    return sameDept
        .map(c => ({
            city: c,
            distance: Math.sqrt(
                Math.pow(c.coordinates.lat - currentCity.coordinates.lat, 2) +
                Math.pow(c.coordinates.lng - currentCity.coordinates.lng, 2)
            )
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit)
        .map(c => c.city);
}
