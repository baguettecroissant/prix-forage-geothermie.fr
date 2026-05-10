import citiesData from '@/data/cities.json';
import { City } from '@/types';

export const dynamic = 'force-dynamic';

const allCities = citiesData as City[];

function getAllDepartmentCodes(): string[] {
    return Array.from(new Set(allCities.map(c => c.department_code))).sort();
}

export async function GET() {
    const baseUrl = 'https://www.cout-geothermie.fr';
    const departmentCodes = getAllDepartmentCodes();

    const sitemaps = [
        `${baseUrl}/sitemap/main.xml`,
        ...departmentCodes.map(code => `${baseUrl}/sitemap/${code}.xml`)
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemaps.map(url => `
    <sitemap>
        <loc>${url}</loc>
    </sitemap>`).join('')}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
