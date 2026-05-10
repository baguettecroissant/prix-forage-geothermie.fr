import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { IconCheck, IconShieldCheck, IconClock, IconFlame } from "@tabler/icons-react";
import Link from "next/link";

export const metadata = {
  title: "Devis Gratuit Géothermie | Comparateur Installateurs RGE 2026",
  description: "Obtenez 3 devis gratuits pour votre installation géothermique. Comparaison sans engagement d'installateurs RGE certifiés près de chez vous.",
  alternates: {
    canonical: "https://www.cout-geothermie.fr/devis",
  },
};

export default function DevisPage() {
  return (
    <div className="bg-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-heading">
            Recevez <span className="text-secondary">3 Devis Gratuits</span>
            <br /> pour votre Géothermie
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Comparez les installateurs RGE de votre département et économisez jusqu&apos;à 30% sur votre projet géothermique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
            <div className="p-1 md:p-4">
              <ViteUnDevisWidget />
            </div>
            <div className="bg-stone-50 p-4 text-center border-t border-stone-100 text-sm text-stone-500">
              Vos données sont sécurisées et ne seront transmises qu&apos;aux installateurs sélectionnés.
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-primary mb-4 text-lg font-heading">Pourquoi comparer ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5">
                    <IconCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <span className="font-bold block text-primary">100% Gratuit</span>
                    <span className="text-sm text-stone-600">Aucun frais, aucun engagement.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-amber-100 p-1.5 rounded-full shrink-0 mt-0.5">
                    <IconShieldCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <span className="font-bold block text-primary">Installateurs RGE</span>
                    <span className="text-sm text-stone-600">Certifiés et assurés.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-1.5 rounded-full shrink-0 mt-0.5">
                    <IconClock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-bold block text-primary">Rapide</span>
                    <span className="text-sm text-stone-600">Vos devis sous 48h maximum.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-stone-900 p-6 rounded-xl text-center text-white">
              <div className="text-4xl font-bold text-accent mb-2">COP 4-5</div>
              <div className="text-stone-300">rendement garanti</div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-stone-200">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-stone max-w-none">
                <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Pourquoi comparer plusieurs devis géothermie ?</h2>
                <p>
                  L&apos;installation d&apos;une PAC géothermique est un investissement important dont le prix peut varier considérablement d&apos;un installateur à l&apos;autre.
                  En moyenne, les utilisateurs constatent des écarts de prix allant jusqu&apos;à <strong>30%</strong> pour un projet similaire.
                </p>
                <p>Demander plusieurs devis vous permet de :</p>
                <ul className="list-disc pl-5 space-y-2 text-stone-700 mb-6">
                  <li>Comparer les <strong>technologies proposées</strong> (sondes verticales, horizontales, aquathermie).</li>
                  <li>Négocier les tarifs en faisant jouer la concurrence locale.</li>
                  <li>Vérifier que le forage, la PAC et les raccordements sont bien inclus dans le devis.</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mb-6 mt-12 font-heading">Quels éléments font varier le devis ?</h2>
                <p>
                  Le coût final dépend de plusieurs facteurs que vous retrouverez dans notre <Link href="/guides/prix-geothermie-2026" className="text-secondary hover:underline font-medium">guide des prix 2026</Link> :
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm">
                    <strong className="text-primary block mb-1">Le type de captage</strong>
                    <span className="text-stone-600 text-sm">Horizontal (13 000-20 000€), vertical par sondes (18 000-30 000€) ou aquathermie (16 000-28 000€).</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm">
                    <strong className="text-primary block mb-1">La nature du sous-sol</strong>
                    <span className="text-stone-600 text-sm">Le forage coûte de 40€/ml (calcaire) à 120€/ml (basalte). La carte géologique impacte fortement le budget.</span>
                  </li>
                  <li className="bg-white p-4 rounded-lg border border-stone-100 shadow-sm">
                    <strong className="text-primary block mb-1">La marque de la PAC</strong>
                    <span className="text-stone-600 text-sm">De 7 000€ (Atlantic Alfea) à 16 000€ (Viessmann Vitocal 300-G ou Stiebel Eltron WPF).</span>
                  </li>
                </ul>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-primary mb-6 font-heading">Questions Fréquentes</h3>
                <div className="space-y-4">
                  <details className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-primary group-hover:bg-stone-50 transition-colors">
                      La demande est-elle payante ?
                      <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-sm text-stone-600 leading-relaxed">
                      Non, notre service de mise en relation est <strong>100% gratuit</strong> pour vous.
                    </div>
                  </details>
                  <details className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-primary group-hover:bg-stone-50 transition-colors">
                      Suis-je engagé ?
                      <span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-sm text-stone-600 leading-relaxed">
                      Absolument pas. Vous recevez vos devis librement. Aucune obligation de signer.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
