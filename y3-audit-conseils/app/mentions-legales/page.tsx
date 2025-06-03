export default function MentionsLegalesPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-6">Mentions légales</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">1. Informations légales</h2>
            <p>
              Le site y3audit.fr est édité par la société Y3 Audit & Conseils, société d'expertise comptable inscrite à
              l'Ordre des Experts-Comptables.
            </p>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>Forme juridique : Société par actions simplifiée (SAS)</li>
              <li>Capital social : 100 000 €</li>
              <li>Siège social : cocody rieviera golf mafit - appt 103 immeuble tiga</li>
              <li>SIRET : 123 456 789 00012</li>
              <li>N° TVA Intracommunautaire : FR 12 123456789</li>
              <li>Directeur de la publication : Jean Dupont</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">2. Hébergement</h2>
            <p>
              Le site y3audit.fr est hébergé par la société Vercel Inc., dont le siège social est situé au 340 S Lemon
              Ave #4133, Walnut, CA 91789, USA.
            </p>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments constituant le site y3audit.fr (textes, graphismes, logiciels, photographies,
              images, vidéos, sons, plans, logos, marques, etc.) ainsi que le site lui-même, sont la propriété exclusive
              de Y3 Audit & Conseils ou font l'objet d'une autorisation d'utilisation. Ces éléments sont soumis aux lois
              régissant la propriété intellectuelle.
            </p>
            <p className="mt-4">
              Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou
              partie des éléments du site sans l'autorisation écrite préalable de Y3 Audit & Conseils est strictement
              interdite et constituerait un délit de contrefaçon.
            </p>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">4. Limitation de responsabilité</h2>
            <p>
              Y3 Audit & Conseils s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des
              informations diffusées sur son site, dont elle se réserve le droit de corriger, à tout moment et sans
              préavis, le contenu. Toutefois, Y3 Audit & Conseils ne peut garantir l'exactitude, la précision ou
              l'exhaustivité des informations mises à disposition sur son site.
            </p>
            <p className="mt-4">En conséquence, Y3 Audit & Conseils décline toute responsabilité :</p>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>
                pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;
              </li>
              <li>
                pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des
                informations mises à disposition sur le site ;
              </li>
              <li>
                et plus généralement, pour tous dommages, directs ou indirects, qu'elles qu'en soient les causes,
                origines, natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de
                l'impossibilité d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque
                information provenant directement ou indirectement de ce dernier.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">5. Liens hypertextes</h2>
            <p>
              Le site y3audit.fr peut contenir des liens hypertextes vers d'autres sites internet. Y3 Audit & Conseils
              n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu ou de leur
              politique de confidentialité.
            </p>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">
              6. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français
              seront seuls compétents.
            </p>

            <h2 className="text-2xl font-semibold text-[#073E5D] mt-8 mb-4">7. Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l'adresse
              suivante : <a href="mailto:contact@y3audit.fr">contact@y3audit.fr</a>
            </p>
            <p>Vous pouvez également nous contacter par téléphone au : +225 27 22 23 05 26</p>
          </div>
        </div>
      </div>
    </main>
  )
}
