import { notFound } from "next/navigation";
import Link from "next/link";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import citiesData from "@/data/cities.json";
import { City } from "@/types";
import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const allCities = citiesData as City[];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);
  if (!city) return { title: "Non trouvé" };

  return {
    title: `Installateurs Géothermie à ${city.name} (${city.zip})`,
    description: `L'annuaire pour trouver le meilleur installateur géothermique à ${city.name} (${city.zip}). Consultez les professionnels RGE et demandez un devis.`,
    alternates: {
      canonical: `https://www.cout-geothermie.fr/annuaire/${slug}`,
    },
  };
}

export default async function AnnuaireSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = allCities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="bg-bg min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-stone-500 mb-8 flex items-center flex-wrap gap-1">
          <Link href="/" className="hover:text-secondary">Accueil</Link>
          <IconChevronRight className="h-3.5 w-3.5" />
          <Link href="/annuaire" className="hover:text-secondary">Annuaire</Link>
          <IconChevronRight className="h-3.5 w-3.5" />
          <span className="text-primary font-medium">{city.name} ({city.zip})</span>
        </nav>

        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-stone-100">
          <h1 className="text-3xl md:text-4xl font-heading text-center font-bold text-primary mb-4">
            Installateurs géothermie à {city.name}
          </h1>
          <p className="text-center text-stone-600 mb-10">
            Département {city.department_name} ({city.department_code}) — Trouvez les foreurs et installateurs RGE dans votre ville.
          </p>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-xl mb-10">
            <h2 className="font-heading text-xl border-b border-stone-200 pb-2 mb-4">Marques et fabricants à {city.name}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["Viessmann", "NIBE", "Vaillant", "Atlantic", "Daikin", "Stiebel Eltron", "Bosch", "De Dietrich"].map((name) => (
                <div key={name} className="text-center p-3 bg-white rounded-lg border border-stone-100 text-sm font-medium text-stone-700 hover:border-secondary transition-colors">
                  {name}
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 mt-4 text-center italic">
              Disponibilité variable selon votre zone. Utilisez le formulaire ci-dessous pour être mis en relation avec les installateurs actifs à {city.name}.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <ViteUnDevisWidget />
          </div>

          <div className="mt-10 text-center">
            <Link href={`/geothermie/${city.slug}`} className="inline-flex items-center text-secondary font-medium hover:underline">
              Voir les prix géothermie à {city.name} <IconArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
