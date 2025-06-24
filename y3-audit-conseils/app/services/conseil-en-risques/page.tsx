import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConseilEnRisquesPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Conseil en Risques</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de conseil en risques vous aident à identifier, évaluer et gérer efficacement les risques
            auxquels votre entreprise est exposée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Gestion des risques</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accompagnons dans la mise en place d'une démarche structurée de gestion des risques, adaptée à
              votre secteur d'activité et à la taille de votre entreprise. Cette approche vous permet d'anticiper les
              menaces potentielles et de saisir les opportunités qui se présentent.
            </p>
            <p className="text-gray-700 mb-4">
              Notre méthodologie éprouvée vous aide à identifier les risques majeurs, à évaluer leur impact potentiel et
              à définir des stratégies de traitement appropriées pour protéger votre activité et créer de la valeur.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Cartographie des risques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Évaluation et hiérarchisation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Plans de traitement et de continuité</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/Conseil-en-Risques.jpeg"
              alt="Gestion des risques"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-video overflow-hidden rounded-lg order-2 lg:order-1">
            <Image
              src="/Conformité-réglementaire.jpeg"
              alt="Conformité réglementaire"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Conformité réglementaire</h2>
            <p className="text-gray-700 mb-4">
              Nous vous aidons à naviguer dans l'environnement réglementaire complexe et en constante évolution qui
              s'applique à votre activité. Notre expertise vous permet de comprendre vos obligations et de mettre en
              place les dispositifs nécessaires pour assurer votre conformité.
            </p>
            <p className="text-gray-700 mb-4">
              Notre approche pragmatique vise à transformer les contraintes réglementaires en opportunités
              d'amélioration de vos processus et de renforcement de votre réputation auprès de vos parties prenantes.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Diagnostic de conformité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mise en place de programmes de conformité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Veille réglementaire</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Risques opérationnels</div>
              <p className="text-gray-700">
                Nous vous aidons à identifier et à gérer les risques liés à vos processus, vos systèmes et vos
                ressources humaines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Risques financiers</div>
              <p className="text-gray-700">
                Nous vous accompagnons dans la gestion des risques de marché, de crédit et de liquidité qui peuvent
                affecter votre performance financière.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Cybersécurité</div>
              <p className="text-gray-700">
                Nous vous aidons à protéger vos systèmes d'information et vos données contre les menaces informatiques
                croissantes.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un conseil en risques ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil en
            risques peuvent contribuer à la sécurisation et au développement de votre entreprise.
          </p>
          <Link
            href="/contact/rendez-vous"
            className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      </div>
    </main>
  )
}
