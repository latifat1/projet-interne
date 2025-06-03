import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ConseilFiscalPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Conseil Fiscal</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services de conseil fiscal vous permettent d'optimiser votre fiscalité tout en respectant la
            réglementation en vigueur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Optimisation fiscale</h2>
            <p className="text-gray-700 mb-4">
              Nous vous accompagnons dans la mise en place de stratégies d'optimisation fiscale légales et adaptées à
              votre situation, afin de réduire votre charge fiscale tout en sécurisant votre position vis-à-vis de
              l'administration.
            </p>
            <p className="text-gray-700 mb-4">
              Notre équipe d'experts fiscalistes analyse votre situation et identifie les opportunités d'optimisation,
              qu'il s'agisse de la structuration de votre groupe, du choix de vos investissements ou de la gestion de
              votre patrimoine professionnel.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Choix des structures juridiques et fiscales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Optimisation des charges déductibles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Utilisation des dispositifs d'incitation fiscale</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600&query=tax%20advisor%20consultation"
              alt="Optimisation fiscale"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600&query=tax%20compliance%20business"
              alt="Conformité fiscale"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Conformité fiscale</h2>
            <p className="text-gray-700 mb-4">
              Nous vous assistons dans la préparation et le dépôt de vos déclarations fiscales, en veillant au respect
              des obligations légales et des délais imposés par l'administration.
            </p>
            <p className="text-gray-700 mb-4">
              Notre expertise vous permet de sécuriser votre position fiscale et de prévenir les risques liés à une
              mauvaise interprétation ou application de la réglementation fiscale, de plus en plus complexe et
              évolutive.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Établissement des déclarations fiscales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Revue fiscale et identification des risques</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Assistance en cas de contrôle fiscal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Nos domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Fiscalité des entreprises</div>
              <p className="text-gray-700">
                IS, CET, TVA, taxes sectorielles, crédits d'impôt recherche et innovation...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Fiscalité internationale</div>
              <p className="text-gray-700">Prix de transfert, conventions fiscales, établissements stables...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Fiscalité patrimoniale</div>
              <p className="text-gray-700">
                Transmission d'entreprise, optimisation de la rémunération des dirigeants...
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Fiscalité des restructurations</div>
              <p className="text-gray-700">Fusions, acquisitions, apports partiels d'actifs, scissions...</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un conseil fiscal ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services de conseil fiscal
            peuvent contribuer à l'optimisation de votre situation fiscale.
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
