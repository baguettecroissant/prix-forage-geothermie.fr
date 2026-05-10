import Link from "next/link";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { getAllGuides } from "@/data/guides";
import { IconArrowRight, IconCheck, IconStar, IconMapPin, IconClock, IconShieldCheck, IconRulerMeasure, IconMountain, IconBackhoe, IconChartBar } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.prix-forage-geothermie.fr",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — FORAGE FOCUS */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-b border-slate-700 py-20 lg:py-0 lg:h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
          <div className="absolute top-20 left-[30%] w-2 h-2 bg-cyan-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}} />
          <div className="absolute top-16 right-[20%] w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <IconStar className="h-4 w-4 fill-blue-400 text-blue-400" />
                <span>Barème Forage 2026 — Mis à jour</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-heading">
                Prix du Forage{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Géothermique</span>
              </h1>

              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                De 40€ à 120€ le mètre linéaire selon votre sous-sol. Comparez les tarifs de forage dans votre commune et estimez le coût total de votre installation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="inline-flex items-center justify-center bg-accent hover:bg-blue-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-blue-900/20 transition-all transform hover:scale-105 font-bold">
                  Estimer mon forage
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="flex items-center gap-3 text-slate-300 px-4">
                  <div className="text-sm">
                    <span className="font-bold text-white block">80-200 m</span>
                    profondeur standard
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-[400px] relative flex items-center justify-center bg-gradient-to-br from-slate-800 to-blue-950">
                  <div className="text-center p-8 relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border-2 border-blue-400/50 flex items-center justify-center">
                      <IconBackhoe className="h-12 w-12 text-blue-400" />
                    </div>
                    <div className="text-white font-heading font-bold text-2xl mb-2">40–120€/ml</div>
                    <div className="text-slate-300">Prix du forage au mètre</div>
                    <div className="text-slate-400 text-sm mt-1">Selon le type de sous-sol</div>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                        <div className="text-blue-400 font-bold text-lg">30-40%</div>
                        <div className="text-slate-400 text-xs">du budget total</div>
                      </div>
                      <div className="bg-slate-700/50 p-3 rounded-lg text-center">
                        <div className="text-cyan-400 font-bold text-lg">50+ ans</div>
                        <div className="text-slate-400 text-xs">durée des sondes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-blue-100 p-2 rounded-full">
                  <IconCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Foreur QualiForage</p>
                  <p className="text-xs text-slate-500">Certification vérifiée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><IconShieldCheck className="h-5 w-5 text-secondary" /> Foreurs QualiForage</div>
            <div className="flex items-center gap-2"><IconRulerMeasure className="h-5 w-5 text-secondary" /> Prix au mètre garanti</div>
            <div className="flex items-center gap-2"><IconClock className="h-5 w-5 text-secondary" /> Devis détaillé sous 48h</div>
            <div className="flex items-center gap-2"><IconMountain className="h-5 w-5 text-secondary" /> Étude géologique incluse</div>
          </div>
        </div>
      </section>

      {/* Prix par type de sol */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Coût du forage selon votre sous-sol</h2>
            <p className="text-slate-600 text-lg">
              Le prix au mètre linéaire varie du simple au triple selon la géologie de votre terrain.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Terrain sédimentaire", desc: "Calcaire, craie, marne — Bassin parisien, Aquitaine, Jura", prix: "40 – 60€/ml", total: "6 400 – 9 600€", icon: IconMountain, color: "bg-green-50 border-green-200", badge: "Forage facile" },
              { type: "Terrain granitique", desc: "Socle ancien — Bretagne, Massif central, Vosges", prix: "60 – 90€/ml", total: "9 600 – 14 400€", icon: IconBackhoe, color: "bg-amber-50 border-amber-200", badge: "Forage modéré" },
              { type: "Terrain basaltique", desc: "Roche volcanique — Auvergne, Cantal, Ardèche", prix: "80 – 120€/ml", total: "12 800 – 19 200€", icon: IconChartBar, color: "bg-red-50 border-red-200", badge: "Forage complexe" },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow ${item.color}`}>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-white text-secondary mb-3">{item.badge}</span>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.type}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                <p className="font-mono text-lg font-bold text-secondary">{item.prix}</p>
                <p className="text-xs text-slate-500 mt-1">Budget forage seul (2 × 80 m) : {item.total}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profondeur et dimensionnement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Quelle profondeur de forage pour votre maison ?</h2>
            <p className="text-slate-600 text-lg">
              La profondeur dépend de la surface habitable, de l&apos;isolation et de la puissance thermique extractible du sous-sol (40 à 60 W/m).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <IconRulerMeasure className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Maison 80 m² — Bien isolée</h3>
              <p className="text-slate-600 mb-4">
                Besoin : 5 kW. <strong>1 forage de 100 m</strong> suffit. Budget forage : 4 000 à 7 000€. Installation complète : 15 000 à 20 000€.
              </p>
              <p className="font-mono text-secondary font-bold">100 m de profondeur</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <IconRulerMeasure className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Maison 120 m² — Standard</h3>
              <p className="text-slate-600 mb-4">
                Besoin : 8 kW. <strong>2 forages de 80 m</strong> ou 1 forage de 150 m. Budget forage : 6 400 à 14 400€. Installation complète : 20 000 à 28 000€.
              </p>
              <p className="font-mono text-secondary font-bold">160 m (2 × 80 m)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <IconRulerMeasure className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Maison 180 m² — Ancienne</h3>
              <p className="text-slate-600 mb-4">
                Besoin : 12 kW. <strong>2 forages de 130 m</strong> ou 3 forages de 90 m. Budget forage : 10 400 à 19 200€. Installation complète : 25 000 à 35 000€.
              </p>
              <p className="font-mono text-secondary font-bold">260 m (2 × 130 m)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-20 bg-bg border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-slate">
            <h2 className="text-3xl font-extrabold text-primary not-prose mb-8 font-heading">
              Comment est calculé le prix d&apos;un forage géothermique ?
            </h2>
            <p>
              Le coût d&apos;un forage géothermique en France dépend de <strong>4 facteurs principaux</strong> : la nature du sous-sol (sédimentaire, granitique ou volcanique), la profondeur requise (80 à 200 m), l&apos;accessibilité du chantier (passage foreuse, évacuation déblais) et la région (tarifs foreurs locaux).
            </p>
            <p>
              Le forage représente <strong>30 à 40% du budget total</strong> d&apos;une installation géothermique. Pour une maison standard de 120 m², comptez 160 mètres linéaires de forage (2 puits de 80 m), soit un budget forage de <strong>6 400€ à 14 400€ TTC</strong> selon la géologie.
            </p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-primary min-w-[180px]">Mobilisation foreuse</span>
                <span className="text-slate-600">Forfait de <strong>1 500 à 3 000€</strong> pour le transport et la mise en place de la foreuse sur chantier.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-primary min-w-[180px]">Forage + cimentation</span>
                <span className="text-slate-600">De <strong>40 à 120€ par mètre</strong> selon le sous-sol. Comprend le forage, la pose des sondes et le scellement au coulis de ciment.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
                <span className="font-bold text-primary min-w-[180px]">Test de réponse thermique</span>
                <span className="text-slate-600">Optionnel mais recommandé : <strong>2 000 à 4 000€</strong>. Mesure la conductivité thermique réelle du sous-sol pour optimiser le dimensionnement.</span>
              </li>
            </ul>
            <p>
              <strong>Astuce budget :</strong> consultez la carte géologique du BRGM (<a href="https://infoterre.brgm.fr" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium underline">infoterre.brgm.fr</a>) pour anticiper la nature de votre sous-sol avant de demander des devis. Un sol calcaire peut diviser le budget forage par deux par rapport à du basalte.
            </p>
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2 font-heading">
                <IconBackhoe className="h-5 w-5" /> Besoin d&apos;un devis forage ?
              </h3>
              <p className="text-sm text-blue-800 mb-4">
                Recevez <strong>3 devis détaillés</strong> de foreurs QualiForage dans votre département. Prix au mètre garanti.
              </p>
              <Link href="/devis" className="block w-full bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Comparer les foreurs
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-primary flex items-center gap-2 font-heading">
                  <IconArrowRight className="h-5 w-5 text-secondary" /> Guides Forage
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {getAllGuides().slice(0, 4).map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-slate-50 transition-colors group">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                        {guide.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-slate-50 text-center">
                <Link href="/guides" className="text-sm font-medium text-secondary hover:text-secondary/80">
                  Voir tous les guides →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 font-heading">Prix du forage dans votre ville</h2>
              <p className="text-slate-400">
                Le tarif au mètre varie selon la géologie locale. Sélectionnez votre commune pour obtenir une estimation personnalisée.
              </p>
            </div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-secondary hover:text-blue-400 font-medium mt-4 md:mt-0">
              Toutes les villes <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/geothermie/paris-75001" className="dept-card">Paris (75)</Link>
            <Link href="/geothermie/lyon-69001" className="dept-card">Lyon (69)</Link>
            <Link href="/geothermie/marseille-13001" className="dept-card">Marseille (13)</Link>
            <Link href="/geothermie/bordeaux-33000" className="dept-card">Bordeaux (33)</Link>
            <Link href="/geothermie/toulouse-31000" className="dept-card">Toulouse (31)</Link>
            <Link href="/geothermie/nantes-44000" className="dept-card">Nantes (44)</Link>
            <Link href="/geothermie/lille-59000" className="dept-card">Lille (59)</Link>
            <Link href="/geothermie/strasbourg-67000" className="dept-card">Strasbourg (67)</Link>
            <Link href="/geothermie/nice-06000" className="dept-card">Nice (06)</Link>
            <Link href="/geothermie/montpellier-34000" className="dept-card">Montpellier (34)</Link>
            <Link href="/geothermie/rennes-35000" className="dept-card">Rennes (35)</Link>
            <Link href="/geothermie/grenoble-38000" className="dept-card">Grenoble (38)</Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/annuaire" className="text-secondary font-medium">Voir toutes les villes →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">Questions Fréquentes sur le Forage</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Combien coûte un forage géothermique au mètre ?", "acceptedAnswer": { "@type": "Answer", "text": "Le prix varie de 40€/ml en terrain sédimentaire à 120€/ml en terrain basaltique. Pour 160 ml (maison 120 m²), comptez 6 400 à 19 200€ de forage seul." } },
                  { "@type": "Question", "name": "Quelle profondeur de forage pour ma maison ?", "acceptedAnswer": { "@type": "Answer", "text": "Comptez environ 20 m de sonde par kW de besoin. Maison 80 m² : 100 m. Maison 120 m² : 160 m (2 × 80 m). Maison 180 m² : 260 m (2 × 130 m)." } },
                  { "@type": "Question", "name": "Faut-il une autorisation pour forer ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Tout forage de plus de 10 m nécessite une déclaration DREAL via georisques.gouv.fr. Au-delà de 100 m : déclaration renforcée. Délai : 1 à 3 mois." } },
                ]
              })
            }}
          />

          <div className="space-y-4">
            {[
              { q: "Combien coûte un forage géothermique au mètre ?", a: "Le prix du forage varie de 40€/ml en terrain sédimentaire (calcaire, craie) à 120€/ml en terrain basaltique (roche volcanique). Pour une maison standard de 120 m² nécessitant 160 ml de forage, le budget forage seul se situe entre 6 400€ et 19 200€ TTC." },
              { q: "Quelle profondeur de forage pour ma maison ?", a: "La règle simplifiée : comptez environ 20 mètres de sonde par kW de besoin. Pour une maison de 80 m² bien isolée (5 kW) : 1 forage de 100 m. Pour 120 m² (8 kW) : 2 forages de 80 m. Pour 180 m² mal isolée (12 kW) : 2 forages de 130 m." },
              { q: "Faut-il une autorisation pour forer ?", a: "Oui, tout forage de plus de 10 m nécessite une déclaration auprès de la DREAL via georisques.gouv.fr. Au-delà de 100 m, une déclaration renforcée avec étude d'impact est requise. Délai : 1 à 3 mois. Votre foreur se charge des formalités." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-slate-50 transition-colors text-lg">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center text-secondary font-medium hover:underline">
              Toutes les questions sur le forage <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Estimez le coût de votre forage</h2>
          <p className="text-xl text-blue-100 mb-10">
            Comparez les devis de foreurs certifiés QualiForage dans votre département. Prix au mètre garanti.
          </p>
          <Link href="/devis" className="inline-flex items-center bg-white text-blue-900 hover:bg-slate-100 text-xl px-12 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold">
            Obtenir mes devis forage
            <IconArrowRight className="ml-2 h-6 w-6" />
          </Link>
          <p className="mt-6 text-sm text-blue-200 opacity-80">
            Gratuit • Sans engagement • Étude géologique offerte
          </p>
        </div>
      </section>
    </div>
  );
}
