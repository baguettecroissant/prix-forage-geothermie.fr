import { notFound } from "next/navigation";
import Link from "next/link";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import citiesData from "@/data/cities.json";
import deptInfos from "@/data/departments-infos.json";
import { City } from "@/types";
import { generateCityContent, findNearbyCities } from "@/lib/content/content-engine";
import { getAllGuides } from "@/data/guides";
import {
  IconArrowRight,
  IconChevronRight,
  IconFlame,
  IconMapPin,
  IconTemperature,
  IconLeaf,
  IconShieldCheck,
  IconClock,
  IconHome,
  IconTrendingUp,
  IconDroplet,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const allCities = citiesData as City[];
const departmentInfos = deptInfos as Record<
  string,
  { prix_min: number; prix_max: number; budget_moyen: number; specificites: string }
>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);
  if (!city) return { title: "Non trouvé" };

  const deptInfo = departmentInfos[city.department_code];
  const prixMin = deptInfo?.prix_min || 14000;
  const prixMax = deptInfo?.prix_max || 30000;

  return {
    title: `Prix Géothermie à ${city.name} (${city.zip}) — Forage et PAC dès ${prixMin.toLocaleString("fr-FR")}€ | cout-geothermie.fr`,
    description: `Combien coûte une installation géothermique à ${city.name} (${city.zip}) ? De ${prixMin.toLocaleString("fr-FR")}€ à ${prixMax.toLocaleString("fr-FR")}€ TTC. Devis gratuit d'installateurs RGE dans le ${city.department_name}.`,
    alternates: {
      canonical: `https://www.cout-geothermie.fr/geothermie/${slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const content = generateCityContent(city);
  const deptInfo = departmentInfos[city.department_code];
  const nearbyCities = findNearbyCities(allCities, city, 8);
  const guides = getAllGuides().slice(0, 4);
  const prixMin = deptInfo?.prix_min || 14000;
  const prixMax = deptInfo?.prix_max || 30000;
  const budgetMoyen = deptInfo?.budget_moyen || 22000;

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${city.coordinates.lng - 0.05}%2C${city.coordinates.lat - 0.03}%2C${city.coordinates.lng + 0.05}%2C${city.coordinates.lat + 0.03}&layer=mapnik&marker=${city.coordinates.lat}%2C${city.coordinates.lng}`;

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.cout-geothermie.fr" },
          { "@type": "ListItem", position: 2, name: "Annuaire", item: "https://www.cout-geothermie.fr/annuaire" },
          { "@type": "ListItem", position: 3, name: `Géothermie ${city.name}`, item: `https://www.cout-geothermie.fr/geothermie/${slug}` },
        ],
      },
      {
        "@type": "Service",
        name: `Installation géothermique à ${city.name}`,
        serviceType: "Installation PAC géothermique",
        areaServed: { "@type": "City", name: city.name, postalCode: city.zip },
        provider: { "@id": "https://www.cout-geothermie.fr/#organization" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: prixMin,
          highPrice: prixMax,
          priceCurrency: "EUR",
          offerCount: 3,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. Breadcrumb */}
      <div className="bg-stone-50 pt-4 pb-2">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="text-sm text-stone-500 flex items-center flex-wrap gap-1">
            <Link href="/" className="hover:text-secondary">Accueil</Link>
            <IconChevronRight className="h-3.5 w-3.5" />
            <Link href="/annuaire" className="hover:text-secondary">Annuaire</Link>
            <IconChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary font-medium">{city.name} ({city.zip})</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-heading leading-tight">
            Géothermie à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">{city.name}</span>
          </h1>
          <p className="text-xl text-stone-300">
            Prix, forage et installateurs RGE — {city.department_name} ({city.department_code})
          </p>
          <div className="mt-8">
            <Link href="#devis" className="inline-flex items-center bg-accent hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105">
              <IconFlame className="mr-2 h-5 w-5" />
              Devis gratuit à {city.name}
              <IconArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* 3. Intro + Map */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">
              {content.introTitle} ({city.zip})
            </h2>
            <div className="prose prose-lg text-stone-600">
              {content.introParagraph.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            {/* 4. Data Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="bg-white p-3 rounded-lg border border-stone-100 text-center">
                <div className="text-xs text-stone-500 mb-1">Département</div>
                <div className="font-bold text-primary text-sm">{city.department_name} ({city.department_code})</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-100 text-center">
                <div className="text-xs text-stone-500 mb-1">Région</div>
                <div className="font-bold text-primary text-sm">{city.region}</div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-100 text-center">
                <div className="text-xs text-stone-500 mb-1">Population</div>
                <div className="font-bold text-primary text-sm">
                  {content.displayPopulation > 0 ? content.displayPopulation.toLocaleString("fr-FR") : "—"}
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-100 text-center">
                <div className="text-xs text-stone-500 mb-1">Budget moyen</div>
                <div className="font-bold text-secondary text-sm font-mono">{budgetMoyen.toLocaleString("fr-FR")}€</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
              <iframe
                src={mapSrc}
                width="100%"
                height="280"
                className="w-full"
                style={{ border: 0 }}
                loading="lazy"
                title={`Localisation de ${city.name}`}
              />
              <div className="bg-white p-3 text-center">
                <a
                  href={`https://www.openstreetmap.org/?mlat=${city.coordinates.lat}&mlon=${city.coordinates.lng}#map=14/${city.coordinates.lat}/${city.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:underline font-medium inline-flex items-center gap-1"
                >
                  <IconMapPin className="h-3.5 w-3.5" />
                  Voir {city.name} sur la carte
                </a>
              </div>
            </div>
            <div className="mt-4">
              <a
                href={`https://www.annuaire-mairie.fr/mairie-${city.name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "-")}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white p-3 rounded-lg border border-stone-100 text-sm hover:border-secondary transition-colors"
              >
                <IconHome className="h-4 w-4 text-secondary" />
                <span className="text-stone-600">Mairie de {city.name}</span>
                <span className="text-xs text-stone-400 ml-auto">Site officiel →</span>
              </a>
            </div>
          </div>
        </section>

        {/* 5. Grille Tarifaire */}
        <section className="mb-12 bg-warm/50 p-6 md:p-8 rounded-2xl border border-amber-200">
          <h2 className="text-2xl font-bold text-primary mb-4 font-heading">
            Prix géothermie à {city.name} — Tarifs 2026
          </h2>
          <p className="text-stone-600 mb-6">{content.pricingContext}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              {
                type: "Captage Horizontal",
                desc: "Collecteurs enterrés à 1,2 m — terrain min. 150 m²",
                prix: `${Math.round(prixMin * 0.9).toLocaleString("fr-FR")} – ${Math.round(prixMin * 1.4).toLocaleString("fr-FR")}€`,
                cop: "COP 3,5 – 4,5",
                badge: "bg-green-100 text-green-700",
              },
              {
                type: "Captage Vertical",
                desc: "Sondes à 80-200 m — compact, tous terrains",
                prix: `${Math.round(budgetMoyen * 0.8).toLocaleString("fr-FR")} – ${Math.round(budgetMoyen * 1.4).toLocaleString("fr-FR")}€`,
                cop: "COP 4,0 – 5,0",
                badge: "bg-amber-100 text-amber-700",
              },
              {
                type: "Aquathermie (nappe)",
                desc: "PAC eau-eau sur nappe phréatique — meilleur rendement",
                prix: `${Math.round(budgetMoyen * 0.7).toLocaleString("fr-FR")} – ${Math.round(budgetMoyen * 1.3).toLocaleString("fr-FR")}€`,
                cop: "COP 4,5 – 5,5",
                badge: "bg-blue-100 text-blue-700",
              },
            ].map((item) => (
              <div key={item.type} className="bg-white p-5 border border-stone-200 rounded-xl text-center">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.badge}`}>
                  {item.cop}
                </span>
                <h3 className="font-heading font-bold text-primary mb-1">{item.type}</h3>
                <p className="text-xs text-stone-500 mb-2">{item.desc}</p>
                <p className="font-mono text-lg font-bold text-secondary">{item.prix}</p>
              </div>
            ))}
          </div>
          {deptInfo && (
            <div className="bg-white border border-secondary/20 p-4 rounded-xl text-sm text-stone-700">
              <strong className="text-secondary">Spécificités {city.department_name} :</strong> {deptInfo.specificites}
            </div>
          )}
          <p className="text-xs text-stone-500 mt-4 text-center">
            * Prix indicatifs TTC pour {city.name}. Tarif final sur devis selon l&apos;installateur et le type de sol.
            <Link href="/guides/prix-geothermie-2026" className="text-secondary hover:underline font-medium ml-2">→ Guide complet des prix</Link>
          </p>
        </section>

        {/* 6. Types de sol & captage */}
        <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl border border-green-200">
          <h2 className="text-2xl font-bold text-primary mb-4 font-heading flex items-center gap-2">
            <IconLeaf className="h-6 w-6 text-green-600" />
            Sol et conditions géologiques à {city.name}
          </h2>
          <div className="prose prose-stone max-w-none">
            <p>{content.solType}</p>
            <p className="font-medium text-green-800">{content.captageRecommande}</p>
          </div>
        </section>

        {/* 7. Conseil climatique */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-4 font-heading flex items-center gap-2">
            <IconTemperature className="h-6 w-6 text-secondary" />
            Climat et performance géothermique
          </h2>
          <div className="prose prose-stone max-w-none mb-6">
            <p>{content.climateAdvice}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-100 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">🗓️ Meilleure saison</h3>
              <p className="text-stone-700 text-sm leading-relaxed">{content.saisonTravaux}</p>
            </div>
            <div className="bg-stone-50 border border-stone-200 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">☁️ Conseil saisonnier</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{content.conseilSaisonnier}</p>
            </div>
          </div>
        </section>

        {/* 8. Cas d'usage + Logistique */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-primary mb-3 font-heading">📋 Projets courants à {city.name}</h3>
            <p className="text-stone-600 text-sm">{content.casUsage}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-primary mb-3 font-heading">🚚 Logistique du chantier</h3>
            <p className="text-stone-600 text-sm">{content.logistique}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-primary mb-3 font-heading">💡 Conseil pratique</h3>
            <p className="text-stone-600 text-sm">{content.conseilPratique}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-primary mb-3 font-heading flex items-center gap-2">
              <IconDroplet className="h-5 w-5 text-secondary" /> Budget et contexte local
            </h3>
            <p className="text-stone-600 text-sm">À {city.name}, {content.budgetContexte}</p>
          </div>
        </section>

        {/* 9. Checklist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
            8 étapes de votre projet géothermique à {city.name}
          </h2>
          <div className="space-y-3">
            {content.checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-stone-100 rounded-lg">
                <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">
                  {idx + 1}
                </span>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Widget ViteUnDevis */}
        <section className="mb-12" id="devis">
          <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-100">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-heading">
                Comparez les installateurs géothermie à {city.name}
              </h2>
              <p className="text-stone-600 font-medium">
                Obtenez jusqu&apos;à 3 devis gratuits d&apos;installateurs RGE à {city.name} ({city.zip}).
                <br />
                <span className="text-sm text-stone-500 font-normal">Réponse sous 48h • Sans engagement • Étude de sol offerte</span>
              </p>
            </div>
            <ViteUnDevisWidget />
          </div>
        </section>

        {/* 11. Contexte régional */}
        {content.regionSpecificite && (
          <section className="mb-12 bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-4 font-heading flex items-center gap-2">
              <IconTrendingUp className="h-6 w-6 text-secondary" />
              La géothermie en {city.region}
            </h2>
            <div className="prose prose-stone max-w-none">
              <p>{content.regionSpecificite}</p>
              <p>{content.regionTendance}</p>
              <p className="text-sm text-stone-500">{content.regionMarche}</p>
            </div>
          </section>
        )}

        {/* 12. Maillage marques + annuaire */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-4 font-heading">Marques PAC géothermiques</h3>
            <div className="grid grid-cols-2 gap-2">
              {content.marquesRecommandees.map((slug) => (
                <Link
                  key={slug}
                  href={`/marques/${slug}`}
                  className="text-sm bg-stone-50 hover:bg-warm text-stone-700 hover:text-secondary px-3 py-2 rounded-lg border border-stone-100 hover:border-secondary transition-colors text-center capitalize font-medium"
                >
                  {slug.replace("-", " ")}
                </Link>
              ))}
            </div>
            <Link href="/marques" className="text-xs text-secondary hover:underline font-medium mt-4 block text-center">
              Comparer toutes les marques →
            </Link>
          </div>
          <div className="bg-stone-900 p-6 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h3 className="text-lg font-bold mb-3 font-heading text-secondary">Annuaire installateurs</h3>
            <p className="text-stone-300 text-sm mb-4 leading-relaxed">
              Consultez la liste des installateurs géothermiques à {city.name} ({city.zip}) et dans tout le département {city.department_name} ({city.department_code}).
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href={`/annuaire/${city.slug}`}
                className="text-sm font-medium text-white bg-secondary/20 hover:bg-secondary/30 px-4 py-2 rounded-lg text-center transition-colors border border-secondary/30"
              >
                Annuaire {city.name} →
              </Link>
              <Link href="/annuaire" className="text-xs text-stone-400 hover:text-white text-center transition-colors">
                Voir toutes les villes
              </Link>
            </div>
          </div>
        </section>

        {/* 13. Guides */}
        <section className="mb-12 bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-100 bg-stone-50">
            <h3 className="font-bold text-primary flex items-center gap-2 font-heading">
              <IconShieldCheck className="h-5 w-5 text-secondary" /> Guides pour votre projet
            </h3>
          </div>
          <div className="divide-y divide-stone-100">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-stone-50 transition-colors group">
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">
                    {guide.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-1">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="p-4 bg-stone-50 text-center">
            <Link href="/guides" className="text-sm font-medium text-secondary hover:underline">
              Voir tous les guides →
            </Link>
          </div>
        </section>

        {/* 14. FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 font-heading">Questions fréquentes — Géothermie à {city.name}</h2>
          <div className="space-y-4">
            {content.faqItems.map((faq, idx) => (
              <div key={idx} className="bg-white border border-stone-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{faq.question}</h3>
                <p className="text-stone-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 15. Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">
              <IconMapPin className="inline h-5 w-5 text-secondary mr-2" />
              Géothermie près de {city.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/geothermie/${nearby.slug}`}
                  className="flex flex-col bg-white p-4 rounded-lg border border-stone-100 hover:border-secondary hover:shadow-md transition-all group"
                >
                  <span className="font-bold text-primary group-hover:text-secondary transition-colors text-sm">{nearby.name}</span>
                  <span className="text-xs text-stone-400 font-mono">{nearby.zip}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 16. CTA Final */}
        <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            Votre projet géothermie à {city.name} commence ici
          </h2>
          <p className="text-stone-300 mb-6 max-w-xl mx-auto">
            Obtenez votre devis gratuit en 2 minutes. Comparez les installateurs RGE à {city.name} ({city.zip}).
          </p>
          <Link href="#devis" className="inline-flex items-center bg-accent hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-all hover:scale-105">
            Devis Gratuit
            <IconArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </section>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-stone-200 p-3 shadow-lg">
        <Link href="#devis" className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition-colors">
          <IconFlame className="h-5 w-5" />
          Devis Géothermie à {city.name}
        </Link>
      </div>
    </div>
  );
}
