export const metadata = {
  title: "FAQ — Questions Fréquentes sur la Géothermie",
  description: "Réponses aux questions les plus fréquentes sur la géothermie : prix, forage, aides, entretien, durée de vie et rentabilité.",
  alternates: {
    canonical: "https://www.cout-geothermie.fr/faq",
  },
};

const faqItems = [
  { q: "Combien coûte une installation géothermique en 2026 ?", a: "Le prix moyen d'une installation géothermique complète (forage + PAC + raccordements) est de 22 000€ TTC. Il varie de 13 000€ pour un captage horizontal à 35 000€ pour un forage vertical profond. Après aides, le reste à charge descend entre 8 000€ et 18 000€." },
  { q: "Quelles sont les aides financières pour la géothermie ?", a: "Les aides disponibles en 2026 : MaPrimeRénov' (5 000 à 11 000€), CEE (2 000 à 4 000€), TVA réduite à 5,5%, et Éco-PTZ (prêt à taux zéro jusqu'à 50 000€). Au total, jusqu'à 15 000€ d'aides cumulables." },
  { q: "Quelle est la différence entre captage vertical et horizontal ?", a: "Le captage horizontal enterre des collecteurs à 1,2 m de profondeur sur une grande surface (150-300 m²), coût 13 000-20 000€. Le captage vertical fore des sondes à 80-200 m de profondeur, coût 18 000-30 000€ mais ne nécessite que quelques m² de surface." },
  { q: "La géothermie est-elle rentable ?", a: "Oui. La PAC géothermique divise les factures de chauffage par 3 à 4 (COP 4-5). L'amortissement est de 8 à 12 ans, et la durée de vie du système dépasse 25 ans pour la PAC et 50 ans pour les sondes." },
  { q: "Faut-il une autorisation pour un forage géothermique ?", a: "Oui. Tout forage de plus de 10 m nécessite une déclaration auprès de la DREAL via georisques.gouv.fr. Délai : 1 à 3 mois. Votre installateur RGE se charge généralement des formalités." },
  { q: "Combien de temps durent les travaux ?", a: "Comptez 3 à 7 jours ouvrés pour l'installation complète (forage + pose PAC + raccordements). Le forage vertical dure 1 à 2 jours. Prévoyez 2 à 3 mois entre le premier devis et le début des travaux." },
  { q: "La géothermie fonctionne-t-elle par grand froid ?", a: "Oui, c'est son principal avantage par rapport aux PAC air-eau. La température du sous-sol étant stable (12-14°C), la PAC géothermique maintient un COP de 4-5 même quand il fait -10°C dehors." },
  { q: "Quel entretien pour une PAC géothermique ?", a: "L'entretien est obligatoire tous les 2 ans. Coût : 150 à 300€/an (visite + contrôle du circuit frigorigène). Un contrat de maintenance coûte 200 à 400€/an et inclut le dépannage prioritaire." },
  { q: "La géothermie peut-elle aussi rafraîchir en été ?", a: "Oui, grâce au géocooling (rafraîchissement passif). La PAC géothermique réversible utilise la fraîcheur du sous-sol (12-14°C) pour refroidir la maison en été sans consommation supplémentaire. Un avantage unique par rapport aux autres systèmes de chauffage." },
  { q: "Peut-on installer la géothermie en rénovation ?", a: "Oui, 70% des installations sont réalisées en rénovation (remplacement fioul, gaz ou électrique). Les PAC haute température (65°C) sont compatibles avec les radiateurs existants. Le forage vertical s'adapte aux petits terrains urbains." },
];

export default function FAQPage() {
  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Questions Fréquentes — Géothermie</h1>
          <p className="text-stone-600 text-lg">
            Toutes les réponses sur le prix, le forage, les aides et l&apos;entretien de la géothermie.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map(faq => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            })
          }}
        />

        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-stone-50 transition-colors text-lg">
                {faq.q}
                <span className="text-stone-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
              </summary>
              <div className="p-5 pt-0 text-stone-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
