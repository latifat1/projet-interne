"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { ExpertModal } from "@/app/components/expert-modal"
import { TeamHeroSlider } from "@/app/components/team-hero-slider"
import { ExpertsCarousel } from "@/app/components/experts-carousel"
import { FadeInWhenVisible } from "@/app/components/animations"

// Base de données des experts
const experts = [
  // Associés
  {
    id: 1,
    name: "Georges Yao-Yao",
    position: "ASSOCIÉ FONDATEUR",
    image: "/Georges.jpeg",
    slug: "georges-yaoyao",
    isPartner: true,
    bio: "Georges Yao-Yao est Associé Fondateur et Managing Partner chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Fort de plus de 20 années d'expertise en audit et comptabilité,Georges apporte une expertise internationnale remarquable acquise notamment chez Deloitte et Grant Thornton. Son parcours l'a mené des bureaux chez Deloitte Global aux Etats-Unis (2007-2010) aux responsabilités de direction au sein du groupe IPS(WA)et de Deloitte Afrique Francophone.",
      "Spécialisé dans l'accompagnement de filiales de groupes internationaux et d'entreprise locales Georges a dévéloppé une expertise sectorielle approfondie dans la finance, l'agro-industrie, les services, l'énergie, les médias et les télécommunications . Avant de co-fonder Y3 Audit & Conseil, il a contribué activement au dévéloppement de Grant Thornton Audit Côte d'ivoire.",
      "Georges pilote nos missions d'audit et de conseil opérantionnel, alliant rigueur technique et vision stratégique pour répondre aux enjeux de nos clients.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "georges.yaoyao@ycubeac.com",
      phone: "+225 0546006393",
      phoneSecondary: "+225 2722230526",
      linkedin: "https://www.linkedin.com/in/georgesyaoyao/",
    },
  },
  {
    id: 2,
    name: "Yves Dodo",
    position: "ASSOCIÉ FONDATEUR",
    image: "/Yves.jpeg",
    slug: "yves-dodo",
    isPartner: true,
    bio: "Yves Dodo est Associé chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Expert-comptable diplômé avec 10 années d'expérience, Yves maîtrise l'ensemble des enjeux comptables, fiscaux et financiers des organisations complexes .Il s'est spécialisé dans l'audit et la gestion organisationnelle de groupes de sociétés évoluant dans des secteurs stratégiques tels que le transport aérien, la banque et  le BTP.",
      "Son approche consiste à accompagner entreprises nationales et internationales dans l'optimisation de leur gestion opérationnelle tout en garantissant le respect de leurs obligations réglementaires. Yves combine espertise technique et vision pratique pour délivrer des solutions adaptés aux réalités de chaque organisation.",
      "Il pilote nos missions d'expertise-comptable et de conseil financier, apportant à nos clients un accompagnement personnalisé dans la structuration et le pilotage de leur activité.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "yves.dodo@ycubeac.com",
      phone: "+225 0556615836",
      phoneSecondary: "+225 2722230526",
      linkedin: "https://www.linkedin.com/in/yves-dodo-966094150/",
    },
  },

  // Experts
  {
    id: 3,
    name: "Christiane Guehi",
    position: "Senior Manager Expertise comptable ",
    image: "/christiane Guei.jpeg",
    slug: "christiane guehi",
    isPartner: false,
    bio: "christiane guehi est Manager chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Diplômée du diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Christiane a rejoint Y3 Audit & conseil en octobre 2024, apportant une solide expérience de 9 années acquises chez Deloitte Côte d'ivoire et Sénégal.  .",
      "Spécialiste reconnue en expertise comptable , audit et commissariat aux comptes, elle pilote des missions diversifiés allant de l'audit légal et contractuel à la conslidation des comptes. Son expertise s'étend également à l'optimisation fiscale, ainsi qu'à la gestion financière et de la paie .",
      "Christiane conjugue rigueur technique et approche pragmatique pour délivrer à nos clients des solutions adaptés à leurs opérationnels et réglementaires.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "christiane.guehi@ycubeac.com",
      phone: "+225 05 64 869 789",
      phoneSecondary: "+225 2722230526",
      linkedin: "https://www.linkedin.com/in/christiane-guehi-seoulou-5a1814135/",
    },
  },
  {
    id: 4,
    name: "Stéphane Gnahoua",
    position: "MANAGER",
    image: "/stéphane GNAHOUA.jpeg",
    slug: "stephane-gnahoua",
    isPartner: false,
    bio: "Stéphane Gnahoua est Manager chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Titulaire d'un Masteur 2 en Comptabilité, Contôle et Audit, Stéphane enrichit notre équipe de ses 10 années d'experience en expertise comptable, audit e conseil  Son parcours profesionnel l'a mené chez  Jean-Luc Ruelle puis Grant-Thornton,où il a affiné son expertise. .",
      "Stéphane maîtrise l&#39;ensemble des dimensions de l'acompagnement d'entréprise : expertise comptable, audit gestion organisationnelle et financière, ainsi que fiscalité. Cette polyvalence lui permet d'appréhander de manière globale les problématique de nos clients et de proposer des solutions intégrées.",
      "Son approche méthode et sa connaissance approfondie des enjeux sectoriels font de lui un interlocuteur de référence pour nos missions les plus .",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "stephane.gnahoua@ycubeac.com",
      phone: "+225 05 54 74 60 69",
      phoneSecondary: "+225 2722230526",
      linkedin: "https://www.linkedin.com/in/st%C3%A9phane-gnahoua-09a4451b3/",
    },
  },
  {
    id: 5,
    name: "Axelle Amani",
    position: "Manager Audit",
    image: "/Axelle Amani.jpeg",
    slug: "axelle amani,",
    isPartner: false,
    bio: " Axelle Amani est Manager Audit chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Diplomée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris,Axelle apporte à notre équipe 8 années d'expérience dont 5 années passées chez Deloitte. Cette solide formation lui a permis de développer une expertise reconnue en audit, expertise comptable et conseil. .",
      "Au sein de Y3 Audit & conseil, Axelle se consacre principalement aux missions d'audit, où elle déploie sa rigueur méthodologiquement et sa capacité d'analyse pour garantir la qualité de nos interventions. Son parcours chez Deloitte lui confère une vision internationale des standards d'excellence que nous appliquons quotidiennement .",
      "Axelle reprénsente la nouvelle génération de professionalisme alliant formation de haut niveau et expérience opérationnelle solide.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "axelle.amani@ycubeac.com",
      phone: "+225 05 96 45 19 03",
      linkedin: "https://www.linkedin.com/in/axelle-amani-25275592/",
    },
  },
  {
    id: 6,
    name: "Stéphanie Taki",
    position: "Manager Audit",
    image: "/stéphanie taki.jpeg",
    slug: "Stéphanie Taki",
    isPartner: false,
    bio: "Stéphanie Taki est Manager Conseil Fiscal chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un MBA en Audit et Contrôle de Gestion du CESAG? Stéphanie enrichit notre équipe de ses 8 années chez PwC Cette formation d'excellence lui a permis de développer une expertise complète en audit.",
      "Spécialisée dans l'évaluation des porcédure de controle interne, la collecte et validation d'informations financières, ainsi que la préparation de livrables de qualité, Stéphane maîtrise également la question de la relation client et l'encadrement d'équipes. Ces compétances transversales en font une collaboratirice polyvalente et autonome .",
      "Au sein de Y3 Audit & Conseil, elle concentre son expertise sur nos missions d'audit et apportant la rigueur et la méthodologie acquises dans un environnement international de premier plan.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "stephanie.taki@ycubeac.com",
      phone: "+225 05 07 49 14 36",
      linkedin: "https://www.linkedin.com/in/stephanie-rebecca-taki-a16012108/",
    },
  },
  {
    id: 7,
    name: "Augustin Kpantché",
    position: "Manager Conseil Financier",
    image: "/Augustin.jpeg",
    slug: "Augustin Kpantché",
    isPartner: false,
    bio: "Augustin Kpantché est Expert Comptable Senior chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Titulaire d'un Masteur en Banque et Finance du CESAG de Dakar, Augustin apporte à Y3 Audit & Conseil plus de 10 années d'expérience dans l'univers financier. Son parcours l'a mené de l'analyse des risque à l'analyse financière, avant de diriger le département Banque d'Affaire d'une société de Gestion et d'intermédiaire .",
      "Cette progression lui a permis de développer une expertise pointue en modélisation financière, valorisation d'entreprise, levée de fonds, fusions-acquisitions et élaboration de business plans. Sa vision stratégique et sa connaissance approfondie des mécanismes financières font un interlocuteur privilégié pour nos clients dans leurs projets de développement et de transformation .",
      "Augustin pilote nos missions de conseil finacier avec la rigueur et l'expertise acquises au coeur des métiers de la finance, offrant à nos clients un accompagnement de haut niveau dans leurs décisions d'investissement .",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "augustin.kpantche@ycubeac.com",
      phone: "+225 05 96 45 22 09",
      linkedin: "https://www.linkedin.com/in/augustin-kpantche-6658a427/",
    },
  },
  {
    id: 8,
    name: "Revita Ouléi",
    position: "Manager Conseil Opérationnel",
    image: "/revita oule.jpeg",
    slug: "Revita Oulé",
    isPartner: false,
    bio: "Revita Oulé est Manager Conseil Opérationnel chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un Masteur en Audit & Contôle de Gestion du Gestion CESAG, Revita apporte à notre équipe plus de 8 années d'expérience spéialisée dans l'environnement bancaire de l'UEMOA, acquise notamment chez PwC Abidjan.",
      "Son expertise s'est forgée à travers l'accompagnement de nombreux établissemnts financiers sur des projets stratégiques: automatisation des processus prudentiels, conformités LCB-FT et projets de transformations. Elle maîtrise parfaitement les dispositifs Bâle | et ||, la conformité réglementaire, la cartographie des processus et des risques, ainsi que la gestion de projet.",
      "Cette spécialisation sectorielle unique permet à Revita d'apporter une valeur ajoutée expertise technique approfondie et connaissance spécifique à la zone UEMOA.",
    ],
    office: "BUREAU ABIDJAN",
    contact: {
      email: "revita.oule@ycubeac.com",
      phone: "+225 07 00 88 87 47",
      linkedin: "https://www.linkedin.com/in/r%C3%A9vita-oul%C3%A9-20a663196/",
    },
  },
]

export default function TeamPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [selectedExpert, setSelectedExpert] = useState<(typeof experts)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Check URL for expert slug
  useEffect(() => {
    const expertSlug = searchParams.get("expert")
    if (expertSlug) {
      const expert = experts.find((e) => e.slug === expertSlug)
      if (expert) {
        setSelectedExpert(expert)
        setIsModalOpen(true)
      }
    } else {
      // Si pas d'expert dans l'URL, on s'assure que le modal est fermé
      setIsModalOpen(false)
    }
  }, [searchParams])

  const handleExpertClick = (expert: (typeof experts)[0]) => {
    setSelectedExpert(expert)
    setIsModalOpen(true)

    // Mise à jour de l'URL avec l'expert sélectionné
    const newUrl = `${pathname}?expert=${expert.slug}`
    window.history.pushState({ path: newUrl }, "", newUrl)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)

    // Suppression du paramètre expert de l'URL
    window.history.pushState({ path: pathname }, "", pathname)
  }

  // Filtrer les experts par catégorie
  const partners = experts.filter((expert) => expert.isPartner)
  const nonPartners = experts.filter((expert) => !expert.isPartner)

  return (
    <main>
      {/* Hero Slider */}
      <TeamHeroSlider />

      <div id="team-section" className="py-12">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Notre équipe</h1>
              <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Découvrez les experts qui composent notre équipe, dédiée à vous offrir des services de la plus haute
                qualité.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Carousel des Associés */}
      <FadeInWhenVisible>
        <ExpertsCarousel experts={partners} onExpertClick={handleExpertClick} title="Nos Associés" />
      </FadeInWhenVisible>

      {/* Carousel des Experts */}
      <FadeInWhenVisible>
        <div className="py-8"></div> {/* Espacement entre les deux carousels */}
        <ExpertsCarousel experts={nonPartners} onExpertClick={handleExpertClick} title="Nos Experts" />
      </FadeInWhenVisible>

      {/* Section Valeurs */}
      <FadeInWhenVisible>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#073E5D] mb-4">Nos valeurs</h2>
              <div className="w-16 h-1 bg-[#80C342] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#073E5D] mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#073E5D] mb-3">Intégrité</h3>
                <p className="text-gray-600">
                  Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#073E5D] mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Nous recherchons constamment de nouvelles solutions pour répondre aux défis de nos clients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#073E5D] mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Modal pour afficher les détails de l'expert */}
      <ExpertModal expert={selectedExpert} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  )
}
