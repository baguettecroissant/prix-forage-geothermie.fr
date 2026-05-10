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
        return `Le prix du forage géothermique à ${city.name} est le plus élevé du ${dept} : 75 à 110€ par mètre linéaire de sonde, soit un budget forage seul de 12 000 à 22 000€ pour un pavillon de 120 m². Ce surcoût de 15 à 30% s'explique par la logistique métropolitaine (foreuse compacte, autorisation de voirie, gestion des boues réglementée). Le budget total tout compris (forage + PAC + raccordements) atteint 25 000 à 38 000€. L'aquathermie sur nappe, quand elle est disponible en ${region}, réduit le poste forage de 30 à 50%.`;
    }
    if (pop > 50000) {
        return `À ${city.name}, le tarif de forage géothermique est de 60 à 85€/ml, avec un surcoût urbain de 5 à 15%. Le budget forage pour 2 sondes de 100 m s'établit à 12 000 à 17 000€. Le budget total (forage + PAC 12 kW + raccordements) est de 20 000 à 30 000€. En ${region}, zone ${climateLabel.toLowerCase()}, la présence de 5 à 10 foreurs dans le ${dept} permet de mettre en concurrence les devis et de négocier le prix au mètre.`;
    }
    if (pop > 10000) {
        return `Le prix du forage à ${city.name} est conforme à la moyenne du ${dept} : 55 à 75€/ml. Pour un pavillon de 120 m², le budget forage (2 sondes de 80-100 m) se situe entre 9 000 et 15 000€. Le budget total tout compris est de 18 000 à 28 000€. En ${region}, les foreurs proposent des tarifs compétitifs grâce à des conditions de chantier favorables (accès terrain, espace de manœuvre).`;
    }
    if (pop > 2000) {
        return `À ${city.name}, les tarifs de forage sont 5 à 15% inférieurs à la moyenne du ${dept} : 50 à 70€/ml. Le captage horizontal, réalisable sur les terrains spacieux de cette commune, abaisse le poste captage à 4 000 à 7 000€ au lieu de 9 000 à 14 000€ pour le forage vertical. Le budget total est de 14 000 à 22 000€ en captage horizontal et 18 000 à 26 000€ en forage vertical.`;
    }
    return `En commune rurale comme ${city.name}, le prix du forage est le plus compétitif du ${dept} : 45 à 65€/ml grâce à l'absence de contraintes logistiques. Le captage horizontal (3 500 à 6 500€) est la solution la plus économique si votre terrain le permet. Le budget total est de 12 000 à 20 000€ en horizontal et 16 000 à 24 000€ en forage vertical. Seul surcoût à prévoir en ${region} : le déplacement de la foreuse si le foreur est éloigné (500 à 1 200€).`;
}

function buildFaq(city: City, pop: number, saisonTravaux: string): FaqItem[] {
    const dept = city.department_name;
    const region = city.region;

    return [
        {
            question: `Quel est le prix du forage géothermique au mètre à ${city.name} ?`,
            answer: pop > 200000
                ? `À ${city.name}, le prix au mètre linéaire de forage géothermique se situe entre 75 et 110€/ml. Ce tarif inclut le forage, la pose de la sonde PE-HD, la cimentation thermo-ciment et la gestion des boues. Le surcoût métropolitain (foreuse compacte, voirie, bruit) représente 3 000 à 5 000€ supplémentaires par rapport à un forage en zone rurale du ${dept}.`
                : pop > 50000
                    ? `À ${city.name}, le tarif du forage géothermique est de 60 à 85€/ml selon la géologie du sous-sol. Pour 2 sondes de 100 m (standard pour un pavillon de 120 m²), comptez 12 000 à 17 000€ de forage. Les foreurs du ${dept} proposent des devis au forfait incluant forage, cimentation et test de pression.`
                    : pop > 10000
                        ? `À ${city.name}, le prix du forage est de 55 à 75€/ml, conforme à la moyenne du ${dept}. Un forage vertical de 2×80 m revient à 9 000 à 12 000€. Comparez les devis de 3 foreurs QualiForage pour obtenir le meilleur tarif au mètre.`
                        : `À ${city.name}, le forage géothermique coûte 45 à 70€/ml — un tarif parmi les plus compétitifs du ${dept}. Le captage horizontal, possible sur les terrains spacieux, ne coûte que 4 000 à 7 000€ de terrassement. Le budget global est de 30 à 40% inférieur aux grandes villes.`
        },
        {
            question: `Captage horizontal ou forage vertical : quel coût à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, le forage vertical (2 sondes de 80-150 m) coûte 10 000 à 17 000€. Le captage horizontal n'est possible que si vous disposez d'une surface libre de 200 à 400 m². Quand il est faisable, il réduit le poste captage de 40 à 60% (4 000 à 8 000€). L'aquathermie sur nappe (si disponible dans le ${dept}) coûte 3 000 à 7 000€ — la solution la moins chère.`
                : `À ${city.name}, le captage horizontal (4 000-7 000€) est 40 à 60% moins cher que le forage vertical (8 000-14 000€). Il nécessite un terrain libre de 1,5 à 2 fois la surface habitable. Un foreur qualifié du ${dept} évalue la faisabilité des deux options et vous recommande la solution au meilleur rapport coût/performance.`
        },
        {
            question: `Comment se décompose le budget d'un forage géothermique à ${city.name} ?`,
            answer: `Le budget se répartit ainsi à ${city.name} : forage et captage (35-45% du total, soit 6 000 à 16 000€), PAC géothermique (40-50%, soit 7 000 à 18 000€ selon la marque), raccordements hydrauliques et électriques (10-15%, soit 2 000 à 4 000€), et mise en service (2-3%, soit 500 à 800€). ${saisonTravaux} Les foreurs du ${dept} incluent généralement l'étude de sol dans le devis de forage.`
        },
        {
            question: `Quel est le prix d'une PAC géothermique à ${city.name} ?`,
            answer: `Le prix de la PAC géothermique seule (hors forage et raccordements) à ${city.name} varie de 7 000 à 18 000€ selon la marque et la puissance. Une PAC sol-eau de 8 kW (maison 100 m² bien isolée) coûte 7 000 à 10 000€. Une PAC de 14 kW (maison 150 m² ou ancienne) coûte 12 000 à 18 000€. Les marques les plus posées dans le ${dept} en ${region} : Viessmann, NIBE, Vaillant, Atlantic et Daikin.`
        },
        {
            question: `Le forage géothermique nécessite-t-il une autorisation à ${city.name} ?`,
            answer: `Oui, tout forage supérieur à 10 m à ${city.name} nécessite une déclaration préalable auprès de la DREAL du ${dept} (formulaire en ligne, délai de traitement 1-2 mois). Le foreur certifié QualiForage se charge généralement de cette formalité. En zone urbaine, une autorisation de voirie complémentaire est nécessaire (150-300€, délai 15-30 jours). Le coût administratif total est de 0€ (DREAL gratuit) à 300€ (voirie urbaine).`
        },
        {
            question: `Combien coûte l'entretien annuel d'un forage géothermique à ${city.name} ?`,
            answer: pop > 50000
                ? `L'entretien annuel d'une PAC géothermique à ${city.name} coûte 200 à 400€/an en contrat de maintenance (visite annuelle + dépannage prioritaire). Sans contrat : 150 à 250€ par visite d'entretien + dépannage au tarif horaire (80-120€/h dans le ${dept}). Les sondes géothermiques ne nécessitent aucun entretien — elles durent 50 ans. Le coût total de possession sur 25 ans : 5 000 à 10 000€ d'entretien.`
                : `L'entretien annuel d'une PAC géothermique à ${city.name} coûte 150 à 300€/an en contrat de maintenance. Un contrat 3 ou 5 ans est souvent plus avantageux (réduction de 10-20%). Les sondes géothermiques du ${dept} ne nécessitent aucun entretien. Sur 25 ans, le coût total d'entretien est de 3 750 à 7 500€ — bien moins qu'une chaudière gaz ou fioul.`
        },
        {
            question: `Combien de temps pour amortir un forage géothermique à ${city.name} ?`,
            answer: `Le temps de retour sur investissement d'un forage géothermique à ${city.name} dépend de votre chauffage actuel : remplacement fioul = amortissement en 6 à 9 ans (économie de 1 500-2 200€/an), remplacement gaz = 8 à 12 ans (économie de 800-1 400€/an), remplacement électrique = 7 à 10 ans (économie de 1 200-1 800€/an). Après amortissement, la PAC génère un gain net de 15 000 à 30 000€ sur sa durée de vie restante.`
        },
        {
            question: `Quels sont les surcoûts cachés d'un forage géothermique à ${city.name} ?`,
            answer: `Les surcoûts potentiels à ${city.name} : aléa géologique (couche de roche dure imprévue = +10-30€/ml sur le forage), déplacement de la foreuse si le foreur est distant (500-1 500€), gestion des boues en filière agréée (500-2 000€ selon le volume), remise en état du terrain après chantier (300-1 000€), et raccordement électrique triphasé si nécessaire (500-1 500€). Un devis forfaitaire du foreur dans le ${dept} couvre la majorité de ces risques.`
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
