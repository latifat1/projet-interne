import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, FileText, BarChart3, Shield, Calculator, Scale } from "lucide-react"
import { FadeInWhenVisible } from "@/app/components/animations"

export default function ExpertiseSectoriellePage() {
  // Données pour les domaines d'expertise
  const expertises = [
    {
      id: "audit-assurance",
      title: "Audit & Assurance",
      icon: <Shield className="h-10 w-10 text-[#80C342]" />,
      description:
        "Nous pensons que les affaires concernent avant tout les personnes. Nous nous concentrons sur l'établissement de relations positives et efficaces qui renforcent la confiance et offrent une valeur démontrable.",
      intro:
        "Nos experts vous assurent une sécurité maximale par la certification de vos comptes. Les services que nous vous proposons incluent les missions suivantes :",
      services: ["Commissariat aux comptes", "Audit contractuel", "Procédures convenues", "Missions spéciales"],
      image: "/audit-services.png",
    },
    {
      id: "expertise-comptable",
      title: "Expertise comptable",
      icon: <Calculator className="h-10 w-10 text-[#80C342]" />,
      description:
        "Spécialiste pluridisciplinaire, nous disposons de compétences étendues pour vous suivre et vous conseiller durant toute la vie de votre entreprise.",
      intro:
        "Notre équipe vous accompagne pour sécuriser vos comptes en conformité avec les obligations légales et réglementaires. Les services que nous vous proposons incluent les missions suivantes :",
      services: [
        "Externalisation",
        "Révision des comptes",
        "Consolidation",
        "Normes IFRS",
        "Assistance aux Directeurs Financiers",
      ],
      image: "/accounting-services.png",
    },
    {
      id: "conseil-operationnel",
      title: "Conseil Opérationnel",
      icon: <BarChart3 className="h-10 w-10 text-[#80C342]" />,
      description:
        "Nous vous accompagnons dans la structuration et la transformation de votre entreprise par la mise en place d'une bonne stratégie de performance.",
      intro:
        "Nos experts vous aident à répondre à vos enjeux de croissance, de conformité et de création de valeur. Les services que nous vous proposons incluent les missions suivantes :",
      services: [
        "Conseil en stratégie",
        "Audit organisationnel",
        "Conseil en gestion de risque",
        "Conseil en système d'information",
      ],
      image: "/business-strategy.png",
    },
    {
      id: "conseil-financier",
      title: "Conseil Financier",
      icon: <FileText className="h-10 w-10 text-[#80C342]" />,
      description:
        "Notre équipe d'Experts contribue à garantir la fiabilité de l'information financière et favorise la confiance des partenaires.",
      intro:
        "Nos experts vous guident tout au long de votre cycle d'investissement et vous fournissent les informations appropriées dont vous avez besoin pour réaliser votre investissement. Les services que nous vous proposons incluent les missions suivantes :",
      services: ["Modélisation financière", "Valorisation", "Due diligences", "M&A"],
      image: "/financial-analysis.png",
    },
    {
      id: "juridique-fiscal",
      title: "Juridique & Fiscal",
      icon: <Scale className="h-10 w-10 text-[#80C342]" />,
      description:
        "Les régimes fiscaux d'aujourd'hui posent des défis importants aux entreprises et aux particuliers. La complexité des règles nationales et internationales signifie que les organisations et les individus ont besoin de conseils clairs, informés et réfléchis.",
      intro:
        "Nos experts vous aident à répondre au mieux à vos enjeux juridiques et fiscaux. Les services que nous vous proposons incluent les missions suivantes :",
      services: [
        "Fiscalité des entreprises",
        "Fiscalité internationale",
        "Douane",
        "Droit des affaires",
        "Droit social",
      ],
      image: "/compliance-audit.png",
    },
  ]

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Notre champ d'actions</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Expertise sectorielle</p>
        </div>

        {/* Section des expertises */}
        <section className="space-y-16">
          {expertises.map((expertise, index) => (
            <FadeInWhenVisible key={expertise.id}>
              <div
                id={expertise.id}
                className={`bg-white p-8 rounded-lg shadow-lg ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } md:flex gap-8 items-center`}
              >
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src={expertise.image || "/placeholder.svg?height=300&width=400&query=professional+service"}
                      alt={expertise.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="flex items-center mb-4">
                    {expertise.icon}
                    <h2 className="text-2xl font-semibold text-[#073E5D] ml-3">{expertise.title}</h2>
                  </div>

                  <p className="text-gray-700 mb-4">{expertise.description}</p>

                  <div className="bg-gray-50 p-4 rounded-md mb-4 border-l-4 border-[#80C342]">
                    <p className="text-gray-700 italic">{expertise.intro}</p>
                  </div>

                  <ul className="space-y-2">
                    {expertise.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="mt-6">
                    <Link
                      href={`/contact/rendez-vous?service=${encodeURIComponent(expertise.title)}`}
                      className="inline-flex items-center text-[#073E5D] hover:text-[#80C342] font-medium transition-colors"
                    >
                      En savoir plus sur nos services {expertise.title.toLowerCase()}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </section>
      </div>
    </main>
  )
}
