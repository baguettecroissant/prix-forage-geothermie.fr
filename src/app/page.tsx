import Link from "next/link";
import Image from "next/image";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { getAllGuides } from "@/data/guides";
import { IconArrowRight, IconCheck, IconFlame, IconStar, IconMapPin, IconClock, IconShieldCheck, IconLeaf, IconTemperature, IconBuildingCommunity } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.cout-geothermie.fr",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 border-b border-stone-200 py-20 lg:py-0 lg:h-[600px] flex items-center overflow-hidden">
        {/* Ambient particles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[10%] w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
          <div className="absolute top-20 left-[30%] w-2 h-2 bg-amber-300 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}} />
          <div className="absolute top-16 right-[20%] w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}} />
          <div className="absolute top-32 right-[40%] w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '2.8s'}} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-amber-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <IconStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>Guide Complet Géothermie 2026</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-heading">
                L&apos;énergie de la Terre sous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">vos pieds</span>
              </h1>

              <p className="text-xl text-stone-200 mb-8 leading-relaxed">
                Comparez le prix du forage et de l&apos;installation d&apos;une PAC géothermique dans votre ville. Jusqu&apos;à 15 000€ d&apos;aides en 2026.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="inline-flex items-center justify-center bg-accent hover:bg-orange-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-orange-900/20 transition-all transform hover:scale-105 font-bold">
                  Estimer mon projet
                  <IconArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <div className="flex items-center gap-3 text-stone-300 px-4">
                  <div className="text-sm">
                    <span className="font-bold text-white block">COP 4-5</span>
                    rendement garanti
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-[400px] relative flex items-center justify-center bg-stone-900">
                  <Image src="/images/home/hero.png" alt="Installation géothermique" fill className="object-cover opacity-60" priority />
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-stone-900/80"></div>
                  <div className="text-center p-8 relative z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 border-2 border-accent/50 flex items-center justify-center">
                      <IconFlame className="h-12 w-12 text-accent" />
                    </div>
                    <div className="text-white font-heading font-bold text-2xl mb-2">12-14°C</div>
                    <div className="text-stone-300">Température stable du sous-sol</div>
                    <div className="text-stone-400 text-sm mt-1">365 jours par an</div>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="bg-stone-700/50 p-3 rounded-lg text-center">
                        <div className="text-accent font-bold text-lg">-75%</div>
                        <div className="text-stone-400 text-xs">facture énergie</div>
                      </div>
                      <div className="bg-stone-700/50 p-3 rounded-lg text-center">
                        <div className="text-green-400 font-bold text-lg">25 ans</div>
                        <div className="text-stone-400 text-xs">durée de vie</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-green-100 p-2 rounded-full">
                  <IconCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-900">Installateur RGE Certifié</p>
                  <p className="text-xs text-stone-500">Éligible MaPrimeRénov&apos;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-stone-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-stone-500 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><IconShieldCheck className="h-5 w-5 text-secondary" /> Installateurs RGE Vérifiés</div>
            <div className="flex items-center gap-2"><IconFlame className="h-5 w-5 text-secondary" /> Étude de sol gratuite</div>
            <div className="flex items-center gap-2"><IconClock className="h-5 w-5 text-secondary" /> Devis sous 48h</div>
            <div className="flex items-center gap-2"><IconLeaf className="h-5 w-5 text-secondary" /> Jusqu&apos;à 15 000€ d&apos;aides</div>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">3 technologies de captage, 3 budgets</h2>
            <p className="text-stone-600 text-lg">
              Vertical, horizontal ou sur nappe : chaque solution a ses avantages et son budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "Captage Horizontal", desc: "Collecteurs enterrés à 1,2 m, nécessite un grand terrain", prix: "13 000 – 20 000€", cop: "COP 3,5 – 4,5", icon: IconBuildingCommunity, color: "bg-green-50 border-green-200" },
              { type: "Captage Vertical", desc: "Sondes à 80-200 m de profondeur, compact et performant", prix: "18 000 – 30 000€", cop: "COP 4,0 – 5,0", icon: IconTemperature, color: "bg-amber-50 border-amber-200" },
              { type: "Aquathermie (nappe)", desc: "PAC eau-eau sur nappe phréatique, meilleur rendement", prix: "16 000 – 28 000€", cop: "COP 4,5 – 5,5", icon: IconLeaf, color: "bg-blue-50 border-blue-200" },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow ${item.color}`}>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-warm text-secondary mb-3">{item.cop}</span>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.type}</h3>
                <p className="text-sm text-stone-600 mb-4">{item.desc}</p>
                <p className="font-mono text-lg font-bold text-secondary">{item.prix}</p>
                <p className="text-xs text-stone-500 mt-1">Forage + PAC + raccordements (TTC)</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Pourquoi choisir la géothermie ?</h2>
            <p className="text-stone-600 text-lg">
              La PAC géothermique offre le meilleur rendement de tous les systèmes de chauffage, avec une durée de vie de 25 ans et plus.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-warm rounded-xl flex items-center justify-center mb-6">
                <IconFlame className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Économisez jusqu&apos;à 75%</h3>
              <p className="text-stone-600">
                Avec un COP de 4 à 5, votre PAC géothermique divise vos factures de chauffage par 3 à 4 par rapport au fioul ou à l&apos;électricité.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <IconLeaf className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">Écologique et silencieux</h3>
              <p className="text-stone-600">
                Zéro combustion, zéro émission directe de CO₂. Contrairement à une PAC air-eau, la géothermie est totalement silencieuse (pas d&apos;unité extérieure).
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <IconClock className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-heading">25+ ans de durée de vie</h3>
              <p className="text-stone-600">
                Les sondes géothermiques durent 50 ans et plus. La PAC fonctionne 25 à 30 ans. L&apos;amortissement est garanti sur cette durée de vie exceptionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block with sidebar */}
      <section className="py-20 bg-bg border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-stone">
            <h2 className="text-3xl font-extrabold text-primary not-prose mb-8 font-heading">
              Combien coûte la géothermie en 2026 ?
            </h2>
            <p>
              Le prix d&apos;une installation géothermique complète en France varie de <strong>13 000€ à 35 000€ TTC</strong> selon le type de captage et la complexité du chantier. En moyenne, les Français investissent <strong>22 000€</strong> dans leur système géothermique.
            </p>
            <p>
              Le coût dépend principalement du type de captage choisi :
            </p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-primary min-w-[180px]">Captage horizontal</span>
                <span className="text-stone-600">Entre <strong>13 000€ et 20 000€</strong>. Nécessite un grand terrain (150-300 m²). Solution la plus économique.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-primary min-w-[180px]">Captage vertical</span>
                <span className="text-stone-600">Entre <strong>18 000€ et 30 000€</strong>. Sondes à 80-200 m. Compact, adapté à tout terrain. Le plus courant.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-primary min-w-[180px]">Aquathermie (nappe)</span>
                <span className="text-stone-600">Entre <strong>16 000€ et 28 000€</strong>. Meilleur COP (5+). Nécessite une nappe phréatique accessible.</span>
              </li>
            </ul>
            <p>
              <strong>Bon à savoir :</strong> le forage représente à lui seul 30 à 40% du budget total. Consultez notre{" "}
              <Link href="/guides/forage-geothermique" className="text-secondary font-medium underline">guide du forage géothermique</Link> pour en savoir plus.
            </p>
          </div>

          <div className="lg:w-1/3 space-y-8">
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
              <h3 className="font-bold text-orange-900 mb-4 flex items-center gap-2 font-heading">
                <IconFlame className="h-5 w-5" /> Besoin d&apos;un devis ?
              </h3>
              <p className="text-sm text-orange-800 mb-4">
                Recevez jusqu&apos;à <strong>3 devis gratuits</strong> d&apos;installateurs RGE dans votre département.
              </p>
              <Link href="/devis" className="block w-full bg-accent hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Comparer les installateurs
              </Link>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-100 bg-stone-50">
                <h3 className="font-bold text-primary flex items-center gap-2 font-heading">
                  <IconArrowRight className="h-5 w-5 text-secondary" /> Guides Récents
                </h3>
              </div>
              <div className="divide-y divide-stone-100">
                {getAllGuides().slice(0, 4).map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-stone-50 transition-colors group">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                        {guide.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-stone-50 text-center">
                <Link href="/guides" className="text-sm font-medium text-secondary hover:text-secondary/80">
                  Voir tous les guides →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 font-heading">Trouvez un installateur près de chez vous</h2>
              <p className="text-stone-400">
                Des installateurs RGE certifiés dans toute la France. Sélectionnez votre ville pour accéder aux prix locaux.
              </p>
            </div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-secondary hover:text-amber-400 font-medium mt-4 md:mt-0">
              Voir tout l&apos;annuaire <IconArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">Questions Fréquentes</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  { "@type": "Question", "name": "Combien coûte une installation géothermique ?", "acceptedAnswer": { "@type": "Answer", "text": "Le prix varie de 13 000€ pour un captage horizontal à 35 000€ pour un forage vertical profond. Le budget moyen est de 22 000€ TTC, avec un reste à charge de 8 000 à 18 000€ après aides." } },
                  { "@type": "Question", "name": "Quelles aides pour la géothermie en 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "MaPrimeRénov' (5 000 à 11 000€), CEE (2 000 à 4 000€), TVA à 5,5% et éco-PTZ. Total cumulable : jusqu'à 15 000€ d'aides." } },
                  { "@type": "Question", "name": "La géothermie est-elle rentable ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, la géothermie divise les factures de chauffage par 3 à 4. L'amortissement est de 8 à 12 ans, et la durée de vie dépasse 25 ans." } },
                ]
              })
            }}
          />

          <div className="space-y-4">
            {[
              { q: "Combien coûte une installation géothermique ?", a: "Le prix varie de 13 000€ pour un captage horizontal à 35 000€ pour un forage vertical profond. Le budget moyen est de 22 000€ TTC. Après aides (MaPrimeRénov' + CEE), le reste à charge descend entre 8 000 et 18 000€." },
              { q: "Quelles aides pour la géothermie en 2026 ?", a: "MaPrimeRénov' (5 000 à 11 000€ selon vos revenus), CEE (2 000 à 4 000€), TVA réduite à 5,5%, et éco-PTZ (prêt à taux zéro jusqu'à 50 000€). Total cumulable : jusqu'à 15 000€ d'aides." },
              { q: "La géothermie est-elle rentable ?", a: "Oui, la géothermie divise les factures de chauffage par 3 à 4 grâce à un COP de 4 à 5. L'amortissement est de 8 à 12 ans, et la durée de vie du système dépasse 25 ans (50 ans pour les sondes)." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-stone-50 transition-colors text-lg">
                  {faq.q}
                  <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-5 pt-0 text-stone-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center text-secondary font-medium hover:underline">
              Consulter notre FAQ complète <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-secondary to-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Votre projet géothermie commence ici</h2>
          <p className="text-xl text-amber-100 mb-10">
            Comparez les devis de foreurs et installateurs RGE certifiés dans votre département.
          </p>
          <Link href="/devis" className="inline-flex items-center bg-white text-secondary hover:bg-stone-100 text-xl px-12 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold">
            Lancer mon étude de sol gratuite
            <IconArrowRight className="ml-2 h-6 w-6" />
          </Link>
          <p className="mt-6 text-sm text-amber-200 opacity-80">
            Gratuit • Sans engagement • Étude de sol offerte
          </p>
        </div>
      </section>
    </div>
  );
}
