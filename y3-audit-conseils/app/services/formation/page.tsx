import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function FormationPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Formation</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos formations sur mesure permettent à vos équipes de développer leurs compétences et de rester à jour avec
            les évolutions de votre secteur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Formations comptables et financières</h2>
            <p className="text-gray-700 mb-4">
              Nous proposons des formations adaptées aux besoins de vos équipes comptables et financières, qu'il
              s'agisse de maîtriser les fondamentaux ou d'approfondir des sujets spécifiques.
            </p>
            <p className="text-gray-700 mb-4">
              Nos formateurs expérimentés combinent expertise technique et pédagogie pour transmettre efficacement les
              connaissances et les bonnes pratiques, avec une approche pragmatique orientée vers l'application concrète.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Normes comptables françaises et internationales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fiscalité des entreprises</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Analyse financière et contrôle de gestion</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/accounting-training.png"
              alt="Formations comptables et financières"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/management-training.png"
              alt="Formations management et soft skills"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Formations management et soft skills</h2>
            <p className="text-gray-700 mb-4">
              Nous proposons des formations pour développer les compétences managériales et relationnelles de vos
              équipes, essentielles pour améliorer la performance collective et le bien-être au travail.
            </p>
            <p className="text-gray-700 mb-4">
              Nos programmes sont conçus pour répondre aux défis spécifiques de votre organisation et s'adaptent aux
              différents niveaux de responsabilité, du manager de proximité au dirigeant.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Leadership et management d'équipe</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Communication et gestion des conflits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gestion du temps et des priorités</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Notre approche pédagogique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Sur mesure</div>
              <p className="text-gray-700">
                Nous adaptons nos formations à vos besoins spécifiques, à votre secteur d'activité et à la maturité de
                vos équipes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Interactive</div>
              <p className="text-gray-700">
                Nos formations privilégient les méthodes actives et participatives pour favoriser l'engagement et
                l'apprentissage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Opérationnelle</div>
              <p className="text-gray-700">
                Nous mettons l'accent sur l'application concrète des connaissances acquises dans le contexte
                professionnel des participants.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'une formation pour vos équipes ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos formations peuvent
            contribuer au développement des compétences de vos collaborateurs.
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
