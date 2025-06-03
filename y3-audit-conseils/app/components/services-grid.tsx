import type React from "react"
import { Hourglass, BarChart3, Globe, BrainCircuit } from "lucide-react"

interface ValueProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ValueCard({ icon, title, description }: ValueProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full border-2 border-[#80C342] p-6 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#073E5D] mb-3">{title}</h3>
      <p className="text-gray-600 max-w-xs mx-auto">{description}</p>
    </div>
  )
}

export function ServicesGrid() {
  const values = [
    {
      title: "Agilité",
      description:
        "La culture d'entreprise et l'organisation permettent aux équipes de s'adapter aux spécificités de chacun des clients.",
      icon: <Hourglass className="h-10 w-10 text-[#073E5D]" />,
    },
    {
      title: "Technicité",
      description:
        "L'expertise pointue des fondateurs et la renommée de notre cabinet sur le plan national, sous-régional et africain.",
      icon: <BarChart3 className="h-10 w-10 text-[#073E5D]" />,
    },
    {
      title: "Expérience",
      description:
        "Notre vocation, être le partenaire privilégié de nos clients en leur assurant un accompagnement de qualité au quotidien.",
      icon: <Globe className="h-10 w-10 text-[#073E5D]" />,
    },
    {
      title: "Professionnalisme",
      description:
        "Une équipe dynamique, professionnelle et passionnée par la qualité du service fourni à nos clients.",
      icon: <BrainCircuit className="h-10 w-10 text-[#073E5D]" />,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos valeurs</h2>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez les valeurs qui guident notre cabinet et façonnent notre approche du métier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
