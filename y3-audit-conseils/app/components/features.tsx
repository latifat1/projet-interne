import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function Features() {
  const features = [
    "Expertise reconnue dans le domaine de l'audit et du conseil",
    "Équipe de professionnels qualifiés et expérimentés",
    "Approche personnalisée adaptée à vos besoins spécifiques",
    "Solutions innovantes pour optimiser votre performance",
    "Accompagnement continu et relation de confiance",
    "Respect des délais et des engagements",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/business-meeting-professional-office.png"
              alt="Nos atouts"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Pourquoi nous choisir ?</h2>
            <div className="w-20 h-1 bg-[#80C342] mb-6"></div>
            <p className="text-gray-600 mb-8">
              Chez Y3 Audit & Conseils, nous mettons notre expertise au service de votre réussite. Notre cabinet se
              distingue par son professionnalisme, sa rigueur et son engagement à fournir des services de haute qualité.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#80C342] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
