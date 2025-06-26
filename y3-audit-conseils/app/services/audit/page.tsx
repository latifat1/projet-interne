import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AuditPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Audit</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos services d'audit vous permettent de sécuriser vos opérations et de rassurer vos partenaires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Audit légal</h2>
            <p className="text-gray-700 mb-4">
              En tant que commissaires aux comptes, nous certifions la régularité, la sincérité et l'image fidèle des
              comptes annuels et consolidés de votre entreprise, conformément aux obligations légales.
            </p>
            <p className="text-gray-700 mb-4">
              Notre approche d'audit est rigoureuse et adaptée à la taille et à l'activité de votre entreprise. Nous
              identifions les risques significatifs et mettons en œuvre les procédures d'audit appropriées pour obtenir
              une assurance raisonnable que les comptes ne comportent pas d'anomalies significatives.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Certification des comptes annuels et consolidés</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Vérification des informations financières</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Prévention des difficultés</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image 
              src="/audit-légal.jpeg"
              alt="Audit légal" 
              fill 
              className="object-cover rounded-lg shadow-lg" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-video overflow-hidden rounded-lg order-2 lg:order-1">
            <Image
              src="/audit-contractuel.jpeg"
              alt="Audit contractuel"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Audit contractuel</h2>
            <p className="text-gray-700 mb-4">
              En complément de l'audit légal, nous proposons des missions d'audit contractuel adaptées à vos besoins
              spécifiques. Ces missions peuvent être ponctuelles ou récurrentes, et visent à vous fournir une assurance
              sur des aspects particuliers de votre activité.
            </p>
            <p className="text-gray-700 mb-4">
              Que vous souhaitiez évaluer la fiabilité de vos processus internes, préparer une opération de croissance
              externe, ou simplement améliorer votre performance, nos experts vous accompagnent avec des solutions sur
              mesure.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Audit d'acquisition (due diligence)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Audit des processus et des systèmes d'information</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Audit de conformité réglementaire</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Notre approche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">1. Planification</div>
              <p className="text-gray-700">
                Nous définissons ensemble le périmètre de la mission et établissons un plan d'audit adapté à vos
                besoins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">2. Exécution</div>
              <p className="text-gray-700">
                Nos équipes mettent en œuvre les procédures d'audit définies et analysent les résultats obtenus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">3. Conclusion</div>
              <p className="text-gray-700">
                Nous vous présentons nos conclusions et recommandations pour améliorer vos processus et votre
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Besoin d'un service d'audit ?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nos services d'audit peuvent
            contribuer à la sécurisation et au développement de votre entreprise.
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
