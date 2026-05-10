import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";
import citiesData from "@/data/cities.json";
import { City } from "@/types";

export const metadata = {
    title: "Annuaire des Installateurs Géothermie par Ville — Trouvez un installateur RGE",
    description: "Trouvez un installateur géothermique RGE dans votre ville. Plus de 35 000 communes couvertes en France. Devis gratuits et comparaison de prix.",
    alternates: {
        canonical: "https://www.cout-geothermie.fr/annuaire",
    },
};

function groupByDepartment(cities: City[]) {
    const groups: Record<string, { name: string; code: string; cities: City[] }> = {};
    for (const city of cities) {
        if (!groups[city.department_code]) {
            groups[city.department_code] = {
                name: city.department_name,
                code: city.department_code,
                cities: [],
            };
        }
        groups[city.department_code].cities.push(city);
    }
    return Object.values(groups).sort((a, b) => a.code.localeCompare(b.code));
}

function getTopCities(cities: City[], limit: number = 5) {
    return [...cities].sort((a, b) => (b.population || 0) - (a.population || 0)).slice(0, limit);
}

export default function AnnuairePage() {
    const allCities = citiesData as City[];
    const departments = groupByDepartment(allCities);

    return (
        <div className="bg-bg min-h-screen">
            <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-heading">
                        Annuaire <span className="text-secondary">Géothermie</span> par Ville
                    </h1>
                    <p className="text-xl text-stone-300 max-w-3xl mx-auto">
                        Plus de {allCities.length.toLocaleString('fr-FR')} communes couvertes.
                        Trouvez les prix de la géothermie dans votre ville.
                    </p>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-primary mb-8 font-heading">
                        <IconMapPin className="inline h-6 w-6 text-secondary mr-2" />
                        Parcourir par département ({departments.length})
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {departments.map(dept => (
                            <div key={dept.code} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="font-heading font-bold text-lg text-primary mb-1">
                                    {dept.name} <span className="text-stone-400 font-mono text-sm">({dept.code})</span>
                                </h3>
                                <p className="text-xs text-stone-500 mb-4">
                                    {dept.cities.length} commune{dept.cities.length > 1 ? 's' : ''} répertoriée{dept.cities.length > 1 ? 's' : ''}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {getTopCities(dept.cities).map(city => (
                                        <Link
                                            key={city.slug}
                                            href={`/geothermie/${city.slug}`}
                                            className="text-xs bg-stone-50 hover:bg-warm text-stone-700 hover:text-secondary px-2.5 py-1.5 rounded-md border border-stone-100 hover:border-secondary transition-colors"
                                        >
                                            {city.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
