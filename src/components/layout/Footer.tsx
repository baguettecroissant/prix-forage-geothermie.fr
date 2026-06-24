import { IconBackhoe } from "@tabler/icons-react";

const POPULAR_GUIDES = [
    { slug: "prix-geothermie-2026", title: "Prix Géothermie 2026" },
    { slug: "captage-vertical-vs-horizontal", title: "Vertical vs Horizontal" },
    { slug: "forage-geothermique", title: "Forage Géothermique" },
    { slug: "maprimerenov-geothermie-2026", title: "MaPrimeRénov' 2026" },
    { slug: "cop-geothermique", title: "COP Géothermique" },
    { slug: "entretien-pac-geothermique", title: "Entretien PAC" },
];

const TOP_CITIES = [
    { slug: "paris-75001", name: "Paris" },
    { slug: "lyon-69001", name: "Lyon" },
    { slug: "marseille-13001", name: "Marseille" },
    { slug: "toulouse-31000", name: "Toulouse" },
    { slug: "bordeaux-33000", name: "Bordeaux" },
    { slug: "nantes-44000", name: "Nantes" },
    { slug: "strasbourg-67000", name: "Strasbourg" },
    { slug: "lille-59000", name: "Lille" },
    { slug: "rennes-35000", name: "Rennes" },
    { slug: "montpellier-34000", name: "Montpellier" },
    { slug: "grenoble-38000", name: "Grenoble" },
    { slug: "nice-06000", name: "Nice" },
];

const PAC_BRANDS = [
    { slug: "viessmann", name: "Viessmann" },
    { slug: "nibe", name: "NIBE" },
    { slug: "vaillant", name: "Vaillant" },
    { slug: "atlantic", name: "Atlantic" },
    { slug: "daikin", name: "Daikin" },
    { slug: "stiebel-eltron", name: "Stiebel Eltron" },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-50 py-12 border-t-4 border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section — Brand + Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Brand & Description */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 font-heading">
                            <IconBackhoe className="h-6 w-6 text-accent" />
                            Prix<span className="text-secondary">Forage</span>
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                            Comparateur expert des prix de forage géothermique en France. Tarifs, devis, aides financières et foreurs RGE qualifiés dans plus de 35 000 communes.
                        </p>
                        <a
                            href="/devis"
                            className="inline-block mt-6 bg-accent hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition-colors"
                        >
                            Devis gratuit →
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Navigation</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-slate-300 hover:text-accent transition-colors text-sm">Accueil</a></li>
                            <li><a href="/guides" className="text-slate-300 hover:text-accent transition-colors text-sm">Guides &amp; Conseils</a></li>
                            <li><a href="/marques" className="text-slate-300 hover:text-accent transition-colors text-sm">Marques PAC</a></li>
                            <li><a href="/annuaire" className="text-slate-300 hover:text-accent transition-colors text-sm">Annuaire Foreurs</a></li>
                            <li><a href="/faq" className="text-slate-300 hover:text-accent transition-colors text-sm">FAQ</a></li>
                            <li><a href="/devis" className="text-slate-300 hover:text-accent transition-colors text-sm">Devis Gratuit</a></li>
                            <li><a href="/mentions-legales" className="text-slate-300 hover:text-accent transition-colors text-sm">Mentions Légales</a></li>
                        </ul>
                    </div>

                    {/* Popular Guides */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Guides Populaires</h4>
                        <ul className="space-y-2">
                            {POPULAR_GUIDES.map(guide => (
                                <li key={guide.slug}>
                                    <a href={`/guides/${guide.slug}`} className="text-slate-300 hover:text-accent transition-colors text-sm">
                                        {guide.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Brands */}
                    <div>
                        <h4 className="text-base font-semibold text-white mb-4 font-heading">Marques PAC Géothermiques</h4>
                        <ul className="space-y-2">
                            {PAC_BRANDS.map(brand => (
                                <li key={brand.slug}>
                                    <a href={`/marques/${brand.slug}`} className="text-slate-300 hover:text-accent transition-colors text-sm">
                                        {brand.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle section — Popular Cities (maillage interne) */}
                <div className="border-t border-slate-800 pt-8 mb-8">
                    <h4 className="text-base font-semibold text-white mb-4 font-heading">Prix forage par ville</h4>
                    <div className="flex flex-wrap gap-2">
                        {TOP_CITIES.map(city => (
                            <a
                                key={city.slug}
                                href={`/geothermie/${city.slug}`}
                                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-accent px-3 py-1.5 rounded-md border border-slate-700 hover:border-accent/50 transition-colors"
                            >
                                {city.name}
                            </a>
                        ))}
                        <a
                            href="/annuaire"
                            className="text-xs bg-secondary/20 hover:bg-secondary/30 text-secondary px-3 py-1.5 rounded-md border border-secondary/30 transition-colors font-medium"
                        >
                            Toutes les villes →
                        </a>
                    </div>
                </div>

                {/* Bottom section — Copyright */}
                <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-xs">
                    <p>© {new Date().getFullYear()} prix-forage-geothermie.fr — Tous droits réservés. Guide indépendant, non affilié aux fabricants.</p>
                </div>
            </div>
        </footer>
    );
}

