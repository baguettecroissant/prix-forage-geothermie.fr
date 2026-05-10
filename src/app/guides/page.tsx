import { getAllGuides } from "@/data/guides";
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata = {
  title: "Guides Géothermie — Prix, Forage, Aides et Conseils 2026",
  description: "Tous nos guides pour réussir votre projet géothermique : prix, forage, captage, aides financières, entretien PAC et choix du type d'installation.",
  alternates: {
    canonical: "https://www.cout-geothermie.fr/guides",
  },
};

export default function GuidesIndex() {
  const guides = getAllGuides();

  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Guides Géothermie</h1>
          <p className="text-stone-600 text-lg">
            Nos dossiers complets pour réussir votre projet géothermique : du choix du captage au budget prévisionnel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link href={`/guides/${guide.slug}`} key={guide.slug} className="bg-white group rounded-2xl shadow-sm border border-stone-100 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden flex flex-col">
              {guide.heroImage && (
                <div className="w-full h-48 relative overflow-hidden bg-stone-100">
                  <Image src={guide.heroImage} alt={guide.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block self-start text-xs font-bold px-2 py-1 rounded bg-warm text-secondary mb-4">Dossier Géothermie</span>
                <h2 className="font-heading text-xl font-bold mb-3 group-hover:text-secondary transition-colors">{guide.title}</h2>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">{guide.description}</p>
                <div className="mt-auto pt-4">
                  <span className="text-accent text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire le guide <IconArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
