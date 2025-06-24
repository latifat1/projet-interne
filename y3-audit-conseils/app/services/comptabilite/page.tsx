import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ComptabilitePage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Comptabilité</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de comptabilité vous permettent de vous concentrer sur votre cœur de métier tout en bénéficiant
            d'une gestion financière rigoureuse et conforme.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Tenue comptable</h2>
            <p className="text-gray-700 mb-4">
              Nous prenons en charge l'ensemble de votre comptabilité, de la saisie des pièces comptables à
              l'établissement des comptes annuels, en passant par le suivi de votre trésorerie et la gestion de vos
              immobilisations.
            </p>
            <p className="text-gray-700 mb-4">
              Notre équipe de comptables qualifiés s'adapte à vos besoins et à votre organisation, en vous proposant des
              solutions sur mesure, qu'il s'agisse d'une prise en charge totale ou partielle de votre comptabilité.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Saisie et révision comptable</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Établissement des comptes annuels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Suivi de trésorerie</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/tenue-comptable.webp"
              alt="Tenue comptable"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/Déclarations-fiscales.webp"
              alt="Reporting financier"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Déclarations fiscales</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accompagnons dans la préparation et le dépôt de vos déclarations fiscales, en veillant au
              respect des obligations légales et des délais imposés par l'administration.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise vous permet de sécuriser votre position fiscale et de prévenir les risques liés à une
              mauvaise interprétation ou application de la réglementation fiscale, de plus en plus complexe et
              évolutive.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Déclarations de TVA</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Liasse fiscale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Déclarations sociales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos solutions digitales</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Nous utilisons des outils digitaux performants pour optimiser la gestion de votre comptabilité et vous
            offrir un accès en temps réel à vos données financières.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Dématérialisation</div>
              <p className="text-gray-700">
                Simplifiez la gestion de vos documents comptables grâce à nos solutions de dématérialisation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Comptabilité en ligne</div>
              <p className="text-gray-700">
                Accédez à votre comptabilité en temps réel, où que vous soyez, grâce à nos outils en ligne.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Automatisation</div>
              <p className="text-gray-700">
                Gagnez du temps grâce à l'automatisation des tâches comptables récurrentes.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin de services comptables ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de comptabilité
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
