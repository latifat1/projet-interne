import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConseilEnGestionPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Conseil en Gestion</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de conseil en gestion vous accompagnent dans l'optimisation de votre performance et la prise de
            décisions stratégiques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Analyse de performance</h2>
            <p className="text-gray-700 mb-4">
              Nous analysons en profondeur la performance de votre entreprise, en identifiant les forces, les faiblesses
              et les opportunités d'amélioration. Cette analyse nous permet de vous proposer des recommandations
              concrètes pour optimiser votre gestion et accroître votre rentabilité.
            </p>
            <p className="text-gray-700 mb-4">
              Grâce à nos outils d'analyse et à notre expertise, nous vous aidons à prendre les décisions stratégiques
              qui s'imposent pour assurer la pérennité et le développement de votre activité.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Analyse financière approfondie</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Identification des leviers de performance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Benchmarking sectoriel</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600&query=business%20performance%20analysis"
              alt="Analyse de performance"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600&query=business%20strategy%20planning"
              alt="Accompagnement stratégique"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Accompagnement stratégique</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie d'entreprise, en tenant
              compte de vos objectifs, de votre environnement concurrentiel et des tendances de votre marché.
            </p>
            <p className="text-gray-700 mb-4">
              Notre approche personnalisée vous permet de bénéficier d'un conseil adapté à votre situation spécifique,
              qu'il s'agisse de développer votre activité, de diversifier votre offre ou d'optimiser votre organisation.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Élaboration de business plans</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Accompagnement dans les projets de développement</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Conseil en organisation et management</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos outils de pilotage</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Nous mettons à votre disposition des outils de pilotage performants pour suivre l'évolution de votre
            activité et prendre les décisions qui s'imposent au moment opportun.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Tableaux de bord</div>
              <p className="text-gray-700">
                Suivez vos indicateurs clés de performance en temps réel grâce à nos tableaux de bord personnalisés.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Prévisions financières</div>
              <p className="text-gray-700">
                Anticipez l'évolution de votre activité avec nos outils de prévision financière.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Reporting analytique</div>
              <p className="text-gray-700">
                Analysez la rentabilité de vos produits, services et clients grâce à notre reporting analytique.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un conseil en gestion ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil en
            gestion peuvent contribuer à l'amélioration de votre performance.
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
