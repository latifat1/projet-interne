import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConseilOperationnelPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Conseil Opérationnel</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de conseil opérationnel vous accompagnent dans la résolution de vos problématiques complexes et la mise
            en œuvre de solutions adaptées à vos enjeux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Stratégie d'entreprise</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accompagnons dans la définition et la mise en œuvre de votre stratégie d'entreprise, en tenant
              compte de vos objectifs, de votre environnement concurrentiel et des tendances de votre marché.
            </p>
            <p className="text-gray-700 mb-4">
              Notre approche collaborative vous permet de bénéficier de notre expertise tout en valorisant votre
              connaissance approfondie de votre activité, pour élaborer une stratégie pertinente et réaliste.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Analyse stratégique</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Définition du plan stratégique</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Accompagnement dans la mise en œuvre</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/Stratégie-d'entreprise.jpeg"
              alt="Stratégie d'entreprise"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/Transformation-digitale.jpeg"
              alt="Transformation digitale"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Transformation digitale</h2>
            <p className="text-gray-700 mb-4">
              Nous vous aidons à tirer parti des opportunités offertes par le digital pour transformer votre modèle
              d'affaires, optimiser vos processus et améliorer l'expérience de vos clients.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise vous permet d'identifier les technologies les plus pertinentes pour votre activité et de
              les intégrer efficacement dans votre organisation, en tenant compte des aspects humains et culturels du
              changement.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Diagnostic de maturité digitale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Élaboration de la feuille de route digitale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Accompagnement au changement</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Performance opérationnelle</div>
              <p className="text-gray-700">
                Nous vous aidons à optimiser vos processus et à améliorer votre efficacité opérationnelle pour gagner en
                compétitivité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Innovation</div>
              <p className="text-gray-700">
                Nous vous accompagnons dans votre démarche d'innovation pour développer de nouveaux produits, services
                ou modèles d'affaires.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Conduite du changement</div>
              <p className="text-gray-700">
                Nous vous aidons à gérer les aspects humains et organisationnels du changement pour assurer le succès de
                vos projets de transformation.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un accompagnement en conseil opérationnel ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil opérationnel
            peuvent contribuer à la performance et au développement de votre entreprise.
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
