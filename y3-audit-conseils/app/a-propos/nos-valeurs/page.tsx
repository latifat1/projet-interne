import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function NosValeursPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos Valeurs</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez les principes fondamentaux qui guident notre cabinet et façonnent notre approche du métier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Notre philosophie</h2>
            <p className="text-gray-700 mb-4">
              Chez Y3 Audit & Conseils, nous croyons que la réussite de nos clients est notre réussite. Cette conviction
              guide chacune de nos actions et nous pousse à donner le meilleur de nous-mêmes pour accompagner nos
              clients dans l'atteinte de leurs objectifs.
            </p>
            <p className="text-gray-700">
              Notre approche repose sur l'écoute, la compréhension des besoins spécifiques de chaque client, et la mise
              en œuvre de solutions adaptées et innovantes. Nous privilégions les relations durables, basées sur la
              confiance et le respect mutuel.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=600&query=business%20team%20meeting%20discussion"
              alt="Notre philosophie"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#073E5D] mb-4">Excellence</h3>
            <p className="text-gray-700 mb-4">
              Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité et en
              nous efforçant constamment de dépasser les attentes de nos clients.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Rigueur professionnelle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Formation continue</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Amélioration constante</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#073E5D] mb-4">Intégrité</h3>
            <p className="text-gray-700 mb-4">
              Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations professionnelles, en
              respectant scrupuleusement les règles déontologiques de notre profession.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Transparence totale</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Confidentialité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Respect des engagements</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#073E5D] mb-4">Innovation</h3>
            <p className="text-gray-700 mb-4">
              Nous recherchons constamment de nouvelles solutions et approches pour répondre aux défis de nos clients et
              les aider à s'adapter à un environnement économique en perpétuelle évolution.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Veille technologique</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Solutions digitales</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Créativité dans l'approche</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-4 text-center">Notre engagement</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            Nous nous engageons à mettre notre expertise au service de nos clients, à les accompagner dans la durée, et
            à leur fournir des conseils pertinents et adaptés à leur situation spécifique. Notre objectif est de
            contribuer activement à leur développement et à leur réussite.
          </p>
        </div>
      </div>
    </main>
  )
}
