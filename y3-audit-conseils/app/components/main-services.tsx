import Link from "next/link"
import { Shield, TrendingUp, FileCheck } from "lucide-react"
import { FadeInWhenVisible } from "./animations"

export function MainServices() {
  const services = [
    {
      title: "Expertise Comptable",
      subtitle: "Accompagnement sécurisé",
      description:
        "Nos experts vous accompagnent pour sécuriser vos comptes en conformité aux obligations légales et réglementaires.",
      icon: <FileCheck className="h-12 w-12 text-[#80C342]" />,
      link: "/services/expertise-comptable",
    },
    {
      title: "Conseil opérationnel",
      subtitle: "Enjeu et croissance",
      description: "Notre expertise vous aide à répondre à vos enjeux de croissance, croissance et création de valeur.",
      icon: <TrendingUp className="h-12 w-12 text-[#80C342]" />,
      link: "/services/conseil-en-gestion",
    },
    {
      title: "Audit et Assurance",
      subtitle: "Planifier puis faire",
      description:
        "Nos experts assurent une sécurité maximale par la certification de vos comptes grâce aux différents services que nous vous proposons.",
      icon: <Shield className="h-12 w-12 text-[#80C342]" />,
      link: "/services/audit",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 flex flex-col h-full"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#073E5D] text-center mb-2">{service.title}</h3>
                <h4 className="text-[#80C342] font-medium text-center mb-4">{service.subtitle}</h4>
                <p className="text-gray-600 text-center mb-6 flex-grow">{service.description}</p>
                {/* <div className="text-center">
                  <Link
                    href={service.link}
                    className="inline-block text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
                  >
                    En savoir plus
                  </Link>
                </div> */}
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  )
}
