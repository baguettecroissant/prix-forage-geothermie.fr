import { getAllGuides } from "@/data/guides";
import { notFound } from "next/navigation";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import Link from "next/link";
import Image from "next/image";
import { IconFlame, IconClock, IconBulb } from "@tabler/icons-react";
import { Metadata } from "next";

type GuideSection = { title: string; content: string; tip?: string };
type TableRow = { label: string; values: string[] };

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAllGuides().find((g) => g.slug === slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: `${guide.title} | Cout-Geothermie.fr`,
    description: guide.description,
    alternates: {
      canonical: `https://www.cout-geothermie.fr/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allGuides = getAllGuides();
  const guide = allGuides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const otherGuides = allGuides.filter((g) => g.slug !== slug).slice(0, 4);

  return (
    <div className="bg-bg min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="text-sm text-stone-500 mb-8 max-w-4xl">
          <Link href="/" className="hover:text-secondary">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/guides" className="hover:text-secondary">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-primary font-medium">{guide.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            {guide.heroImage && (
              <div className="w-full aspect-video md:aspect-[21/9] relative bg-stone-100">
                <Image src={guide.heroImage} alt={guide.title} fill className="object-cover" priority />
              </div>
            )}
            <div className="p-8 md:p-12 prose prose-lg prose-stone max-w-none">
              <span className="text-secondary font-bold tracking-wider text-sm mb-2 block uppercase not-prose">Dossier Spécial Géothermie</span>
              <h1 className="font-heading text-3xl md:text-4xl leading-tight mb-8 pb-4 border-b not-prose">{guide.title}</h1>

              <div className="flex items-center gap-2 text-stone-500 text-sm font-medium mb-8 not-prose bg-stone-50 p-3 rounded-lg inline-flex">
                <IconClock className="w-4 h-4" />
                Lecture estimée : <strong>{guide.readTime}</strong>
              </div>

              <p className="lead text-xl text-stone-600 mb-12 font-light border-l-4 border-secondary pl-6">
                <strong>En bref : </strong> {guide.description}
              </p>

              {guide.sections?.map((section: GuideSection, index: number) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold font-heading text-primary border-b border-stone-100 pb-3 mb-6">
                    {section.title}
                  </h2>
                  <div className="text-stone-700 whitespace-pre-wrap">
                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                       <p key={pIdx} className="mb-4" dangerouslySetInnerHTML={{__html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />
                    ))}
                  </div>
                  
                  {section.tip && (
                    <div className="not-prose flex gap-4 bg-warm/30 border border-secondary/30 rounded-xl p-6 mt-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
                          <IconBulb className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Le conseil exclusif</h4>
                        <p className="text-stone-600 text-sm m-0 leading-relaxed">{section.tip}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {guide.tableData && guide.tableData.length > 0 && (
                <div className="my-12 not-prose overflow-x-auto rounded-xl border border-stone-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200 text-sm uppercase tracking-wider text-stone-500">
                        <th className="p-4 font-semibold w-1/4">{guide.tableData[0].label}</th>
                        {guide.tableData[0].values.map((val: string, i: number) => (
                          <th key={i} className="p-4 font-semibold border-l border-stone-200">{val}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {guide.tableData.slice(1).map((row: TableRow, i: number) => (
                        <tr key={i} className="border-b border-stone-100 last:border-0 hover:bg-stone-50/50">
                          <td className="p-4 font-medium text-stone-900">{row.label}</td>
                          {row.values.map((val: string, j: number) => (
                            <td key={j} className="p-4 text-stone-600 border-l border-stone-100" dangerouslySetInnerHTML={{__html: val}} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {guide.faq && guide.faq.length > 0 && (
                <div className="mt-16 bg-stone-50 p-8 rounded-2xl border border-stone-200 not-prose">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-8 text-center">Questions fréquentes (FAQ)</h3>
                  <div className="space-y-6">
                    {guide.faq.map((item, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100">
                        <h4 className="font-bold text-lg text-primary mb-3">{item.question}</h4>
                        <p className="text-stone-600 m-0">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-16 pt-8 border-t">
                <p>
                  N&apos;hésitez pas à consulter nos autres guides pour approfondir un aspect spécifique de votre projet :{" "}
                  <Link href="/guides/forage-geothermique" className="text-secondary underline">forage géothermique</Link>,{" "}
                  <Link href="/guides/captage-vertical-vs-horizontal" className="text-secondary underline">captage vertical vs horizontal</Link>, ou encore{" "}
                  <Link href="/guides/maprimerenov-geothermie-2026" className="text-secondary underline">les aides MaPrimeRénov&apos;</Link>.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-1 sticky top-28 space-y-8">
            <ViteUnDevisWidget />

            <div className="bg-stone-900 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="font-heading font-bold text-xl mb-3 text-secondary">Besoin d&apos;un devis ?</h4>
                <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                  Découvrez les marques de PAC géothermiques (Viessmann, NIBE, Vaillant, Atlantic). Analyses et prix.
                </p>
                <Link href="/marques" className="inline-flex items-center text-secondary hover:text-white font-medium text-sm transition-colors group-hover:translate-x-1 duration-300">
                  Consulter les marques <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-stone-100 bg-stone-50">
                <h4 className="font-bold text-primary text-sm font-heading flex items-center gap-2 uppercase tracking-wide">
                  <IconFlame className="h-5 w-5 text-secondary" /> À lire aussi
                </h4>
              </div>
              <div className="divide-y divide-stone-100">
                {otherGuides.map((g) => (
                  <Link key={g.slug} href={`/guides/${g.slug}`} className="flex p-4 hover:bg-stone-50 transition-colors group">
                    <span className="text-sm font-medium text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-relaxed">{g.title}</span>
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
