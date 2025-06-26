import Link from "next/link"
import { Globe, Scale, BarChart3, Shield, TrendingUp, FileCheck, Target } from "lucide-react"
import { FadeInWhenVisible } from "./animations"

export function ActionFields() {
  const fields = [
    {
      title: "Aux standards Internationaux",
      description:
        "Nous fournissons à nos clients, un niveau des prestations au standards internationaux. Nous combinons expertise locale et capacités mondiales pour répondre à vos besoins.",
      icon: <Globe className="h-10 w-10 text-[#80C342]" />,
      link: "/a-propos/notre-vision-et-certifications",
    },
    {
      title: "Conseil juridique et fiscal",
      description: "Nous vous aidons à répondre au mieux, aux enjeux juridiques et fiscaux de votre entreprise.",
      icon: <Scale className="h-10 w-10 text-[#80C342]" />,
      link: "/services/conseil-fiscal",
    },
    {
      title: "Conseil financier",
      description:
        "Nos experts vous conseillent en temps réel avec des informations appropriées pour réaliser vos investissements.",
      icon: <BarChart3 className="h-10 w-10 text-[#80C342]" />,
      link: "/services/conseil-financier",
    },
    {
      title: "Audit et assurance",
      description:
        "Assurer la sécurisation maximale de vos comptes par leur certification est une tâche dévolue à nos experts.",
      icon: <Shield className="h-10 w-10 text-[#80C342]" />,
      link: "/services/audit",
    },
    {
      title: "Conseil Opérationnel",
      description: "Nos experts vous aident à répondre au mieux, aux enjeux juridiques et fiscaux de votre entreprise.",
      icon: <TrendingUp className="h-10 w-10 text-[#80C342]" />,
      link: "/services/conseil-operationnel",
    },
    {
      title: "Expertise Comptable",
      description:
        "Vous aidez à tenir vos comptes en conformité avec les obligations légales et réglementaires fait partie de champs d'action.",
      icon: <FileCheck className="h-10 w-10 text-[#80C342]" />,
      link: "/services/expertise-comptable",
    },
    {
      title: "Stratégie",
      description:
        "Nous vous assistons dans la mise en place de systèmes organisationnels efficaces pour votre entreprise.",
      icon: <Target className="h-10 w-10 text-[#80C342]" />,
      link: "/services/consulting",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Comment nous vous aidons</h2>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Champs d'action</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fields.map((field, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div className={`bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:border-[#80C342] transition-colors duration-300 h-[250px] flex flex-col max-w-lg mx-auto${field.title === 'Stratégie' ? ' lg:col-start-2' : ''}`}>
                <div className="flex flex-col items-center">
                  <div className="bg-transparent p-3 rounded-full mb-3">{field.icon}</div>
                  <h3 className="text-xl font-semibold text-[#073E5D] text-center mb-3">{field.title}</h3>
                </div>
                <p className="text-gray-600 text-center mt-auto">{field.description}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  )
}
