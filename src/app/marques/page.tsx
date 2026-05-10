import { getAllBrands } from "@/data/brands";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata = {
  title: "Marques de PAC Géothermiques — Comparatif 2026",
  description: "Comparatif des meilleures marques de pompes à chaleur géothermiques : Viessmann, NIBE, Vaillant, Atlantic, Stiebel Eltron et Daikin.",
  alternates: {
    canonical: "https://www.cout-geothermie.fr/marques",
  },
};

export default function MarquesIndex() {
  const brands = getAllBrands();

  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Marques de PAC Géothermiques</h1>
          <p className="text-stone-600 text-lg">
            Comparatif des meilleures marques de pompes à chaleur géothermiques en 2026. Prix, COP, gammes et avis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link href={`/marques/${brand.slug}`} key={brand.slug} className="bg-white group p-6 rounded-2xl shadow-sm border border-stone-100 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-warm text-secondary">{brand.gamme}</span>
                <span className="text-xs text-stone-400">{brand.origin.split('(')[0].trim()}</span>
              </div>
              <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{brand.name}</h2>
              <p className="text-stone-600 text-sm mb-4 line-clamp-2">{brand.description}</p>
              <p className="font-mono text-secondary font-bold text-sm mb-4">{brand.budget}</p>
              <span className="text-accent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir le dossier <IconArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
