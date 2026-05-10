export const metadata = {
  title: "Mentions Légales — cout-geothermie.fr",
  description: "Mentions légales du site cout-geothermie.fr. Éditeur, hébergeur, protection des données.",
  alternates: {
    canonical: "https://www.cout-geothermie.fr/mentions-legales",
  },
};

export default function MentionsLegales() {
  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold text-primary mb-12">Mentions Légales</h1>
        <div className="prose prose-stone max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
          <h2>Éditeur du site</h2>
          <p>
            Le site <strong>cout-geothermie.fr</strong> est un site d&apos;information et de mise en relation avec des professionnels du chauffage géothermique.
          </p>

          <h2>Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
          </p>

          <h2>Protection des données personnelles</h2>
          <p>
            Les données collectées via les formulaires de demande de devis sont transmises aux artisans partenaires sélectionnés.
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement, ainsi que des cookies de mesure d&apos;audience.
          </p>

          <h2>Crédits</h2>
          <p>
            Design et développement : équipe cout-geothermie.fr<br />
            Icônes : <a href="https://tabler.io/icons" className="text-secondary">Tabler Icons</a>
          </p>
        </div>
      </div>
    </div>
  );
}
