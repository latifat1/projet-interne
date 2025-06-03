import Image from "next/image"
import { CheckCircle, Award, Shield, TrendingUp, Users } from "lucide-react"
import { FadeInWhenVisible } from "@/app/components/animations"

export default function NotreVisionEtCertificationsPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Notre Vision et Certifications</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez notre vision pour l'avenir et les certifications qui garantissent la qualité de nos services.
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

        {/* Section Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6 text-center">Nos certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInWhenVisible delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-[#073E5D] p-3 rounded-full mr-4">
                    <Image
                      src="/certification-oec.png"
                      alt="Ordre des Experts-Comptables"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#073E5D]">Ordre des Experts-Comptables</h3>
                    <p className="text-gray-600">Membre inscrit depuis 2005</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Notre cabinet est inscrit à l'Ordre des Experts-Comptables, garantissant le respect des normes
                  professionnelles, de la déontologie et des obligations légales liées à notre profession.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Respect du code de déontologie</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Formation professionnelle continue</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contrôle qualité régulier</span>
                  </li>
                </ul>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-[#073E5D] p-3 rounded-full mr-4">
                    <Image
                      src="/certification-cncc.png"
                      alt="Compagnie Nationale des Commissaires aux Comptes"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#073E5D]">
                      Compagnie Nationale des Commissaires aux Comptes
                    </h3>
                    <p className="text-gray-600">Membre inscrit depuis 2007</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Notre inscription à la Compagnie Nationale des Commissaires aux Comptes témoigne de notre engagement à
                  respecter les normes d'audit les plus strictes et à garantir l'indépendance de nos missions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Indépendance et objectivité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Application des normes d'audit internationales</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Contrôles de qualité périodiques</span>
                  </li>
                </ul>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-[#073E5D] p-3 rounded-full mr-4">
                    <Image
                      src="/certification-iso.png"
                      alt="ISO 9001:2015"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#073E5D]">ISO 9001:2015</h3>
                    <p className="text-gray-600">Certifié depuis 2018</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Notre certification ISO 9001:2015 atteste de notre engagement en matière de management de la qualité
                  et d'amélioration continue de nos processus.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Système de management de la qualité</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Amélioration continue des processus</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Satisfaction client au cœur de notre démarche</span>
                  </li>
                </ul>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-[#073E5D] p-3 rounded-full mr-4">
                    <Image
                      src="/certification-data.png"
                      alt="ISO 27001:2013"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#073E5D]">ISO 27001:2013</h3>
                    <p className="text-gray-600">Certifié depuis 2020</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Notre certification ISO 27001:2013 démontre notre engagement en matière de sécurité de l'information
                  et de protection des données de nos clients.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Système de management de la sécurité de l'information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Protection des données confidentielles</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestion des risques informatiques</span>
                  </li>
                </ul>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>

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
