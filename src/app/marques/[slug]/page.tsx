import { getAllBrands } from "@/data/brands";
import { notFound } from "next/navigation";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import Link from "next/link";
import { IconCheck, IconFlame } from "@tabler/icons-react";
import { Metadata } from "next";

export function generateStaticParams() {
  return getAllBrands().map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = getAllBrands().find((b) => b.slug === slug);
  if (!brand) return { title: "Not Found" };
  return {
    title: `${brand.name} Géothermie — Avis, Prix et Modèles 2026`,
    description: brand.description,
    alternates: {
      canonical: `https://www.cout-geothermie.fr/marques/${slug}`,
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allBrands = getAllBrands();
  const brand = allBrands.find((b) => b.slug === slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = allBrands.filter((b) => b.slug !== slug);

  return (
    <div className="bg-bg min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-stone-500 mb-8 max-w-4xl">
          <Link href="/" className="hover:text-secondary">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/marques" className="hover:text-secondary">Marques</Link>
          <span className="mx-2">›</span>
          <span className="text-primary font-medium">{brand.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-warm text-secondary">{brand.gamme}</span>
              <span className="text-sm text-stone-400">{brand.origin}</span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">{brand.name} — PAC Géothermique</h1>

            <p className="text-lg text-stone-700 leading-relaxed mb-8">{brand.content}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h3 className="font-heading font-bold text-primary mb-4">Points forts</h3>
                <ul className="space-y-3">
                  {brand.points_forts.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                      <IconCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                  <h3 className="font-heading font-bold text-primary mb-3">Modèles phares</h3>
                  <ul className="space-y-2">
                    {brand.modeles_phares.map((model, idx) => (
                      <li key={idx} className="text-sm text-stone-700 font-medium">• {model}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-warm p-6 rounded-xl border border-secondary/20">
                  <div className="text-sm text-stone-600 space-y-2">
                    <div><strong className="text-primary">Budget PAC seule :</strong> {brand.budget}</div>
                    <div><strong className="text-primary">Garantie :</strong> {brand.garantie}</div>
                    <div><strong className="text-primary">Certifications :</strong> {brand.certification}</div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 sticky top-28 space-y-8">
            <ViteUnDevisWidget />

            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-stone-100 bg-stone-50">
                <h4 className="font-bold text-primary text-sm font-heading flex items-center gap-2 uppercase tracking-wide">
                  <IconFlame className="h-5 w-5 text-secondary" /> Autres marques
                </h4>
              </div>
              <div className="divide-y divide-stone-100">
                {otherBrands.map((b) => (
                  <Link key={b.slug} href={`/marques/${b.slug}`} className="flex justify-between items-center p-4 hover:bg-stone-50 transition-colors group">
                    <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors">{b.name}</span>
                    <span className="text-xs text-stone-400">{b.gamme}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
