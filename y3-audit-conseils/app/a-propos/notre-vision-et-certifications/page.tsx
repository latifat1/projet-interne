import Image from "next/image"
import { CheckCircle, Award, Shield, TrendingUp, Users } from "lucide-react"
import { FadeInWhenVisible } from "@/app/components/animations"

export default function NotreVisionEtCertificationsPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Notre Vision</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez notre vision pour l'avenir et notre engagement envers l'excellence.
          </p>
        </div>

        {/* Section Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px]">
            <Image
              src="/vision-business-future.png"
              alt="Notre vision"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Notre vision</h2>
            <p className="text-gray-700 mb-4">
              Chez Y3 Audit & Conseils, nous aspirons à être bien plus qu'un simple cabinet d'expertise comptable et
              d'audit. Notre vision est de devenir un véritable partenaire stratégique pour nos clients, en les
              accompagnant dans toutes les étapes de leur développement.
            </p>
            <p className="text-gray-700 mb-4">
              Nous croyons fermement que la réussite de nos clients est notre réussite. C'est pourquoi nous nous
              engageons à fournir des services de haute qualité, personnalisés et adaptés aux besoins spécifiques de
              chaque entreprise.
            </p>
            <p className="text-gray-700">
              Notre ambition est de contribuer activement à la croissance et à la pérennité des entreprises que nous
              accompagnons, en leur apportant notre expertise, notre rigueur et notre capacité d'innovation.
            </p>
          </div>
        </div>

        {/* Section Piliers stratégiques */}
        <FadeInWhenVisible>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-6 text-center">Nos piliers stratégiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Shield className="h-10 w-10 text-[#80C342] mr-3" />
                  <h3 className="text-xl font-semibold text-[#073E5D]">Confiance</h3>
                </div>
                <p className="text-gray-700">
                  Bâtir des relations de confiance durables avec nos clients, basées sur la transparence, l'intégrité et
                  le respect de nos engagements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Award className="h-10 w-10 text-[#80C342] mr-3" />
                  <h3 className="text-xl font-semibold text-[#073E5D]">Excellence</h3>
                </div>
                <p className="text-gray-700">
                  Viser l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité et en
                  nous formant continuellement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-10 w-10 text-[#80C342] mr-3" />
                  <h3 className="text-xl font-semibold text-[#073E5D]">Innovation</h3>
                </div>
                <p className="text-gray-700">
                  Innover constamment dans nos approches et nos solutions pour répondre aux défis d'un environnement
                  économique en perpétuelle évolution.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="h-10 w-10 text-[#80C342] mr-3" />
                  <h3 className="text-xl font-semibold text-[#073E5D]">Proximité</h3>
                </div>
                <p className="text-gray-700">
                  Maintenir une relation de proximité avec nos clients pour comprendre leurs besoins spécifiques et leur
                  offrir un accompagnement personnalisé.
                </p>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Section Engagement */}
        <FadeInWhenVisible>
          <div className="bg-[#073E5D] text-white p-8 rounded-lg shadow-lg mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">Notre engagement pour l'avenir</h2>
              <p className="mb-6">
                Nous nous engageons à continuer d'investir dans la formation de nos équipes, dans les technologies les
                plus avancées et dans le développement de nouvelles solutions pour toujours mieux servir nos clients et
                anticiper leurs besoins.
              </p>
              <p>
                Notre objectif est de rester à la pointe de notre profession et d'être un acteur de référence dans le
                domaine de l'expertise comptable, de l'audit et du conseil.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </main>
  )
}
