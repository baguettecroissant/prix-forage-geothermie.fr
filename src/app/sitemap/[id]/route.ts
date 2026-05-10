import citiesData from '@/data/cities.json';
import { City } from '@/types';
import { getAllGuides } from '@/data/guides';
import { getAllBrands } from '@/data/brands';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.cout-geothermie.fr';
const allCities = citiesData as City[];

function getAllDepartmentCodes(): string[] {
    return Array.from(new Set(allCities.map(c => c.department_code))).sort();
}

function getCitiesByDepartment(code: string): City[] {
    return allCities.filter(c => c.department_code === code);
}

export async function generateStaticParams() {
    const departmentCodes = getAllDepartmentCodes();
    return [
        { id: 'main.xml' },
        ...departmentCodes.map(code => ({ id: `${code}.xml` }))
    ];
}

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    if (!id.endsWith('.xml')) {
        return notFound();
    }

    const sitemapId = id.replace('.xml', '');
    let urls: { url: string; lastModified: Date; changeFrequency: string; priority: number }[] = [];

    if (sitemapId === 'main') {
        const siteLastUpdated = new Date('2026-04-02');

        const staticPages = [
            { path: '', priority: 1, frequency: 'daily' },
            { path: '/annuaire', priority: 0.9, frequency: 'weekly' },
            { path: '/devis', priority: 0.9, frequency: 'weekly' },
            { path: '/guides', priority: 0.9, frequency: 'weekly' },
            { path: '/marques', priority: 0.8, frequency: 'weekly' },
            { path: '/faq', priority: 0.8, frequency: 'weekly' },
            { path: '/mentions-legales', priority: 0.3, frequency: 'monthly' },
        ];

        urls = staticPages.map(p => ({
            url: `${BASE_URL}${p.path}`,
            lastModified: siteLastUpdated,
            changeFrequency: p.frequency,
            priority: p.priority,
        }));

        // Guides
        getAllGuides().forEach(guide => {
            urls.push({
                url: `${BASE_URL}/guides/${guide.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.8,
            });
        });

        // Brands
        getAllBrands().forEach(brand => {
            urls.push({
                url: `${BASE_URL}/marques/${brand.slug}`,
                lastModified: siteLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        });
    } else {
        // Department-specific sitemap with both geothermie + annuaire city pages
        const departmentCities = getCitiesByDepartment(sitemapId);

        if (departmentCities.length === 0) {
            return notFound();
        }

        const cityLastUpdated = new Date('2026-04-02');

        // Geothermie city pages (main content)
        departmentCities.forEach(city => {
            urls.push({
                url: `${BASE_URL}/geothermie/${city.slug}`,
                lastModified: cityLastUpdated,
                changeFrequency: 'weekly',
                priority: 0.6,
            });
        });

        // Annuaire city pages (directory)
        departmentCities.forEach(city => {
            urls.push({
                url: `${BASE_URL}/annuaire/${city.slug}`,
                lastModified: cityLastUpdated,
                changeFrequency: 'monthly',
                priority: 0.4,
            });
        });
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((item) => `
    <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
    </url>
    `).join('')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
