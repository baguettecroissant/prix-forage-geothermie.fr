import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { IconCheck, IconShieldCheck, IconClock, IconBackhoe } from "@tabler/icons-react";
import Link from "next/link";
export const metadata = { title: "Devis Forage Géothermique | Comparer les Foreurs QualiForage 2026", description: "Obtenez 3 devis détaillés de foreurs certifiés QualiForage. Prix au mètre garanti, étude géologique incluse.", alternates: { canonical: "https://www.prix-forage-geothermie.fr/devis" } };
export default function DevisPage() {
  return (
    <div className="bg-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-heading">Comparez les <span className="text-secondary">Devis Forage</span><br/>Géothermique</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Recevez 3 devis détaillés de foreurs QualiForage dans votre département. Prix au mètre linéaire garanti.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="p-1 md:p-4"><ViteUnDevisWidget /></div>
            <div className="bg-slate-50 p-4 text-center border-t border-slate-100 text-sm text-slate-500">Données sécurisées. Transmises uniquement aux foreurs sélectionnés.</div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-primary mb-4 text-lg font-heading">Pourquoi comparer ?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconCheck className="h-5 w-5 text-green-600" /></div><div><span className="font-bold block text-primary">Prix au mètre garanti</span><span className="text-sm text-slate-600">Devis détaillé par type de sol.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconShieldCheck className="h-5 w-5 text-blue-600" /></div><div><span className="font-bold block text-primary">Foreurs QualiForage</span><span className="text-sm text-slate-600">Certifiés et décennale à jour.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-amber-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconClock className="h-5 w-5 text-amber-600" /></div><div><span className="font-bold block text-primary">Devis sous 48h</span><span className="text-sm text-slate-600">Étude géologique incluse.</span></div></li>
              </ul>
            </div>
            <div className="bg-slate-900 p-6 rounded-xl text-center text-white">
              <div className="text-4xl font-bold text-accent mb-2">40-120€</div>
              <div className="text-slate-300">par mètre linéaire</div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Pourquoi les prix de forage varient autant ?</h2>
            <p>Le coût au mètre linéaire dépend de la géologie de votre terrain. Un forage en <strong>calcaire</strong> (Bassin parisien) coûte 40-60€/ml, contre 80-120€/ml en <strong>basalte</strong> (Auvergne). Les écarts entre foreurs peuvent atteindre <strong>25%</strong> pour un même sous-sol.</p>
            <p>Comparer 3 devis vous permet d&apos;identifier le meilleur rapport qualité/prix et de vérifier que le dimensionnement proposé est cohérent avec votre sous-sol local. <Link href="/guides/prix-forage-metre-lineaire" className="text-secondary hover:underline font-medium">→ Guide complet des prix au mètre</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
