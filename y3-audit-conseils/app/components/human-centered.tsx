import Image from "next/image"
import Link from "next/link"
import { Users } from "lucide-react"
import { FadeInWhenVisible } from "./animations"

export function HumanCentered() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <FadeInWhenVisible delay={0.2}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image/test.png"
                alt="L'humain au cœur de notre activité"
                fill
                className="object-cover"
              />
            </div>
          </FadeInWhenVisible> */}
            <FadeInWhenVisible delay={0.2}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/écoutes.jpeg"
                alt="L'humain au cœur de notre activité"
                fill
                className="object-cover"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-10 w-10 text-[#80C342] mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D]">Assurément à votre écoute</h2>
              </div>
              <div className="w-20 h-1 bg-[#80C342] mb-6"></div>

              <h3 className="text-2xl font-bold text-[#073E5D] mb-4">L'humain au cœur de notre activité</h3>
              <p className="text-gray-700 mb-6">
                Construire une relation de confiance avec vous quel que soit la taille de votre entreprise est très
                important pour nous. C'est la raison pour laquelle nous donnons une place de choix aux échanges.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm max-w-lg mx-auto">
                <h4 className="text-xl font-semibold text-[#073E5D] mb-3">Notre engagement</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-[#80C342] rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Écoute attentive de vos besoins</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#80C342] rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Communication transparente et régulière</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#80C342] rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Accompagnement personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-[#80C342] rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Relation de confiance durable</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact/rendez-vous"
                  className="inline-block bg-[#80C342] hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300"
                >
                  Prendre contact avec nos experts
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  )
}
