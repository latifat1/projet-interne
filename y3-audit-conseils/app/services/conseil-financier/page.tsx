import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConseilFinancierPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Conseil Financier</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de conseil financier vous accompagnent dans vos décisions stratégiques et l'optimisation de
            votre performance financière.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Analyse financière</h2>
            <p className="text-gray-700 mb-4">
              Nous réalisons une analyse approfondie de votre situation financière pour identifier les forces, les
              faiblesses et les opportunités d'amélioration. Cette analyse vous permet de prendre des décisions
              éclairées et d'optimiser votre stratégie financière.
            </p>
            <p className="text-gray-700 mb-4">
              Notre approche personnalisée tient compte de vos objectifs spécifiques et des particularités de votre
              secteur d'activité pour vous fournir des recommandations pertinentes et adaptées.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Analyse des ratios financiers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Évaluation de la rentabilité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Diagnostic financier complet</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/analyse-financière.jpeg"
              alt="Analyse financière"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-video overflow-hidden rounded-lg order-2 lg:order-1">
            <Image
              src="/planification-financière.jpg"
              alt="Planification financière"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Planification financière</h2>
            <p className="text-gray-700 mb-4">
              Nous vous aidons à élaborer une planification financière solide pour atteindre vos objectifs à court,
              moyen et long terme. Cette démarche prospective vous permet d'anticiper les besoins de financement et
              d'optimiser l'allocation de vos ressources.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise vous permet de sécuriser le développement de votre entreprise en identifiant les leviers
              de croissance et en prévenant les risques financiers potentiels.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Élaboration de business plans</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prévisions financières</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Optimisation de la structure financière</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Financement</div>
              <p className="text-gray-700">
                Nous vous accompagnons dans la recherche et la structuration de financements adaptés à vos projets de
                développement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Restructuration</div>
              <p className="text-gray-700">
                Nous vous conseillons dans vos opérations de restructuration pour optimiser votre organisation et votre
                performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Transmission</div>
              <p className="text-gray-700">
                Nous vous accompagnons dans la préparation et la réalisation de la transmission de votre entreprise.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un conseil financier ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil
            financier peuvent contribuer à la performance et au développement de votre entreprise.
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
