import Image from "next/image"
import { FadeInWhenVisible } from "./animations"

   

export function CompanyHistory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInWhenVisible>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Croître avec nos clients</h2>
              <div className="w-20 h-1 bg-[#80C342] mb-6"></div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-[#80C342] mb-4">30 ans d'expérience</h3>
                <p className="text-gray-700 mb-4">
                  C'est fort d'une expérience commune au sein de cabinets internationaux que ces deux experts-comptables
                  diplômés ont eu l'ambition de créer un cabinet de référence, fondé sur l'excellence technique,
                  l'agilité de l'ensemble des équipes et une expérience client optimisée et personnalisée.
                </p>
                <p className="text-gray-700 mb-4">
                  Y3 Audit & Conseils est un cabinet d'expertise comptable indépendant offrant une approche novatrice et
                  opérationnelle des métiers du chiffre et du conseil.
                </p>
                <p className="text-gray-700">
                  À chacun de nos clients, nous mettons à disposition nos racines locales solides et notre expérience
                  internationale confirmée afin de les aider à atteindre leurs objectifs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#073E5D] text-white p-4 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Agilité</h4>
                  <p className="text-sm">
                    La culture d'entreprise et l'organisation permettent aux équipes de s'adapter aux spécificités de
                    chacun des clients.
                  </p>
                </div>
                <div className="bg-[#073E5D] text-white p-4 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Technicité</h4>
                  <p className="text-sm">
                    L'expertise pointue des fondateurs et la renommée de notre cabinet sur le plan national,
                    sous-régional et africain.
                  </p>
                </div>
                <div className="bg-[#073E5D] text-white p-4 rounded-lg text-center">
                  <h4 className="text-xl font-bold mb-2">Expérience</h4>
                  <p className="text-sm">
                    Notre vocation, être le partenaire privilégié de nos clients en leur assurant un accompagnement de
                    qualité au quotidien.
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/test.png"
                alt="Équipe Y3 Audit & Conseils"
                fill
                className="object-cover"
              />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
