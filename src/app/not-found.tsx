import Link from "next/link";
import { IconFlame, IconBook, IconMapPin } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-bg flex items-center justify-center p-4">
      <div className="bg-white max-w-2xl w-full rounded-3xl shadow-xl overflow-hidden text-center border border-stone-100 p-12">
        <div className="text-secondary font-mono font-bold text-lg mb-4 bg-warm inline-block px-4 py-1 rounded-full">Erreur 404</div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-6 font-heading">Oups !</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 font-heading">Ce forage n&apos;a rien donné...</h2>
        <p className="text-stone-600 text-lg mb-10 max-w-lg mx-auto">
          La page que vous recherchez semble avoir été retirée. Mais ne restez pas dans le froid !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="inline-flex items-center bg-secondary hover:bg-deep text-white px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 font-bold">
            <IconFlame className="mr-2 h-5 w-5" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/guides" className="inline-flex items-center border border-stone-200 text-stone-700 hover:bg-stone-50 px-6 py-3 rounded-xl transition-colors font-medium">
            <IconBook className="mr-2 h-5 w-5" />
            Consulter nos guides
          </Link>
        </div>
      </div>
    </div>
  );
}
