export const metadata = {
  title: "FAQ — Questions sur le Forage Géothermique",
  description: "Prix au mètre, profondeur, types de sol, réglementation : toutes les réponses sur le forage géothermique.",
  alternates: { canonical: "https://www.prix-forage-geothermie.fr/faq" },
};

const faqItems = [
  { q: "Combien coûte un forage géothermique au mètre linéaire ?", a: "Le prix varie de 40€/ml en terrain sédimentaire (calcaire, craie) à 120€/ml en roche volcanique (basalte). Budget moyen pour 160 ml (maison 120 m²) : 8 000 à 14 000€." },
  { q: "Quelle profondeur de forage pour ma maison ?", a: "Comptez 20 m de sonde par kW de besoin. Maison 80 m² : 100 m. Maison 120 m² : 160 m (2 × 80 m). Maison 180 m² : 260 m (2 × 130 m)." },
  { q: "Faut-il une autorisation DREAL pour forer ?", a: "Oui, tout forage > 10 m nécessite une déclaration sur georisques.gouv.fr. Au-delà de 100 m : déclaration renforcée. Délai : 1 à 3 mois." },
  { q: "Quel type de sol est le plus favorable ?", a: "Le granite et le grès offrent la meilleure conductivité (55-70 W/m de sonde) mais coûtent plus cher à forer. Le calcaire offre le meilleur rapport coût/rendement." },
  { q: "Combien de forages sont nécessaires ?", a: "En général 2 forages de 80 m pour une maison standard. L'espacement minimum entre forages est de 6 à 8 m pour éviter l'interférence thermique." },
  { q: "Le test de réponse thermique est-il obligatoire ?", a: "Non, mais recommandé pour les installations > 30 kW. Il coûte 2 000 à 4 000€ et mesure la conductivité thermique exacte de votre sous-sol." },
  { q: "Combien de temps dure un forage ?", a: "1 à 3 jours selon la profondeur et le sous-sol. La foreuse progresse de 20-30 m/jour en calcaire et 8-15 m/jour en granite." },
  { q: "Le forage peut-il endommager ma maison ?", a: "Non, si la distance minimale de 3 m par rapport aux fondations est respectée. Les vibrations sont faibles et le risque d'affaissement est quasi-nul avec un foreur QualiForage." },
  { q: "Peut-on forer n'importe où ?", a: "Non. Le forage est interdit dans les périmètres de protection de captage d'eau, en zone karstique et sur certains sites classés. Vérifiez sur georisques.gouv.fr." },
  { q: "Les sondes de forage ont-elles une durée de vie limitée ?", a: "Non, les sondes géothermiques en PEHD ont une durée de vie de 50 ans et plus. Seule la PAC est à remplacer tous les 20-25 ans." },
];

export default function FAQPage() {
  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Questions Fréquentes — Forage Géothermique</h1>
          <p className="text-slate-600 text-lg">Prix au mètre, profondeur, réglementation et types de sol : tout sur le forage.</p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-slate-50 transition-colors text-lg">{faq.q}<span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span></summary>
              <div className="p-5 pt-0 text-slate-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
