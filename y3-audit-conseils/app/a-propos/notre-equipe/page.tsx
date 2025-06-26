"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { ExpertModal } from "@/app/components/expert-modal"
import { TeamHeroSlider } from "@/app/components/team-hero-slider"
import { ExpertsCarousel } from "@/app/components/experts-carousel"
import { FadeInWhenVisible } from "@/app/components/animations"

interface Expert {
  id: number
  name: string
  position: string
  image: string
  slug: string
  isPartner: boolean
  bio: string
  description: string[]
  office: string
  contact: {
    email: string
    phone: string
    phoneSecondary?: string
    linkedin: string
  }
}

// Base de données des associés
const partners: Expert[] = [
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
]

// Base de données des experts
const experts: Expert[] = [
  {
    id: 3,
    name: "Christiane Guehi",
    position: "Senior Manager Expertise Comptable",
    image: "/christiane Guei.jpeg",
    slug: "christiane-guehi",
    isPartner: false,
    bio: "Christiane Guehi est Manager chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Christiane a rejoint Y3 Audit & Conseils en octobre 2024, apportant une solide expérience de 9 années acquises chez Deloitte Côte d'Ivoire et Sénégal.",
      "Spécialiste reconnue en expertise comptable, audit et commissariat aux comptes, elle pilote des missions diversifiées allant de l'audit légal et contractuel à la consolidation des comptes. Son expertise s'étend également à l'optimisation fiscale, ainsi qu'à la gestion financière et de la paie.",
      "Christiane conjugue rigueur technique et approche pragmatique pour délivrer à nos clients des solutions adaptées à leurs besoins opérationnels et réglementaires.",
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
      "Titulaire d'un Master 2 en Comptabilité, Contrôle et Audit, Stéphane enrichit notre équipe de ses 10 années d'expérience en expertise comptable, audit et conseil. Son parcours professionnel l'a mené chez Jean-Luc Ruelle puis Grant Thornton, où il a affiné son expertise.",
      "Stéphane maîtrise l'ensemble des dimensions de l'accompagnement d'entreprise : expertise comptable, audit, gestion organisationnelle et financière, ainsi que fiscalité. Cette polyvalence lui permet d'appréhender de manière globale les problématiques de nos clients et de proposer des solutions intégrées.",
      "Son approche méthodique et sa connaissance approfondie des enjeux sectoriels font de lui un interlocuteur de référence pour nos missions les plus complexes.",
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
    slug: "axelle-amani",
    isPartner: false,
    bio: "Axelle Amani est Manager Audit chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Diplômée du Diplôme Supérieur de Gestion et de Comptabilité de l'INTEC Paris, Axelle apporte à notre équipe 8 années d'expérience dont 5 années passées chez Deloitte. Cette solide formation lui a permis de développer une expertise reconnue en audit, expertise comptable et conseil.",
      "Au sein de Y3 Audit & Conseils, Axelle se consacre principalement aux missions d'audit, où elle déploie sa rigueur méthodologique et sa capacité d'analyse pour garantir la qualité de nos interventions. Son parcours chez Deloitte lui confère une vision internationale des standards d'excellence que nous appliquons quotidiennement.",
      "Axelle représente la nouvelle génération de professionnalisme alliant formation de haut niveau et expérience opérationnelle solide.",
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
    slug: "stephanie-taki",
    isPartner: false,
    bio: "Stéphanie Taki est Manager Conseil Fiscal chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un MBA en Audit et Contrôle de Gestion du CESAG, Stéphanie enrichit notre équipe de ses 8 années chez PwC. Cette formation d'excellence lui a permis de développer une expertise complète en audit.",
      "Spécialisée dans l'évaluation des procédures de contrôle interne, la collecte et validation d'informations financières, ainsi que la préparation de livrables de qualité, Stéphanie maîtrise également la question de la relation client et l'encadrement d'équipes. Ces compétences transversales en font une collaboratrice polyvalente et autonome.",
      "Au sein de Y3 Audit & Conseils, elle concentre son expertise sur nos missions d'audit en apportant la rigueur et la méthodologie acquises dans un environnement international de premier plan.",
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
    slug: "augustin-kpantche",
    isPartner: false,
    bio: "Augustin Kpantché est Expert Comptable Senior chez Y3 Audit & Conseils. Il est basé à Abidjan.",
    description: [
      "Titulaire d'un Master en Banque et Finance du CESAG de Dakar, Augustin apporte à Y3 Audit & Conseils plus de 10 années d'expérience dans l'univers financier. Son parcours l'a mené de l'analyse des risques à l'analyse financière, avant de diriger le département Banque d'Affaires d'une société de Gestion et d'intermédiation.",
      "Cette progression lui a permis de développer une expertise pointue en modélisation financière, valorisation d'entreprise, levée de fonds, fusions-acquisitions et élaboration de business plans. Sa vision stratégique et sa connaissance approfondie des mécanismes financiers font de lui un interlocuteur privilégié pour nos clients dans leurs projets de développement et de transformation.",
      "Augustin pilote nos missions de conseil financier avec la rigueur et l'expertise acquises au cœur des métiers de la finance, offrant à nos clients un accompagnement de haut niveau dans leurs décisions d'investissement.",
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
    slug: "revita-oulei",
    isPartner: false,
    bio: "Revita Ouléi est Manager Conseil Opérationnel chez Y3 Audit & Conseils. Elle est basée à Abidjan.",
    description: [
      "Titulaire d'un Master en Audit & Contrôle de Gestion du CESAG, Revita apporte à notre équipe plus de 8 années d'expérience spécialisée dans l'environnement bancaire de l'UEMOA, acquise notamment chez PwC Abidjan.",
      "Son expertise s'est forgée à travers l'accompagnement de nombreux établissements financiers sur des projets stratégiques : automatisation des processus prudentiels, conformités LCB-FT et projets de transformations. Elle maîtrise parfaitement les dispositifs Bâle I et II, la conformité réglementaire, la cartographie des processus et des risques, ainsi que la gestion de projet.",
      "Cette spécialisation sectorielle unique permet à Revita d'apporter une valeur ajoutée par son expertise technique approfondie et sa connaissance spécifique à la zone UEMOA.",
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
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Check URL for expert slug
  useEffect(() => {
    const expertSlug = searchParams.get("expert")
    if (expertSlug) {
      const expert = [...partners, ...experts].find((e) => e.slug === expertSlug)
      if (expert) {
        setSelectedExpert(expert)
        setIsModalOpen(true)
      }
    } else {
      setIsModalOpen(false)
    }
  }, [searchParams])

  const handleExpertClick = (expert: Expert) => {
    setSelectedExpert(expert)
    setIsModalOpen(true)
    const newUrl = `${pathname}?expert=${expert.slug}`
    window.history.pushState({ path: newUrl }, "", newUrl)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    window.history.pushState({ path: pathname }, "", pathname)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Slider - Optimisé pour tous les écrans */}
      <section className="w-full overflow-hidden">
      <TeamHeroSlider />
      </section>

      {/* Section Titre - Responsive spacing et typography */}
      <section id="team-section" className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <FadeInWhenVisible>
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#073E5D] mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Notre équipe
              </h1>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[#80C342] mx-auto mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Découvrez les experts qui composent notre équipe, dédiée à vous offrir des services de la plus haute
                qualité.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Carousel des Associés - Responsive spacing */}
      <section className="py-4 sm:py-6 lg:py-8">
      <FadeInWhenVisible>
        <ExpertsCarousel experts={partners} onExpertClick={handleExpertClick} title="Nos Associés" />
      </FadeInWhenVisible>
      </section>

      {/* Carousel des Experts - Responsive spacing */}
      <section className="py-4 sm:py-6 lg:py-8">
      <FadeInWhenVisible>
        <ExpertsCarousel experts={experts} onExpertClick={handleExpertClick} title="Nos Experts" />
      </FadeInWhenVisible>
      </section>

      {/* Section Valeurs - Perfectly responsive grid et cards */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <FadeInWhenVisible>
          <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            {/* Titre responsive */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
              <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight px-2">
                Nos valeurs
              </h2>
              <div className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 h-1 bg-[#80C342] mx-auto"></div>
            </div>

            {/* Grid parfaitement responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
              {/* Card Excellence */}
              <div className="w-full group bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105 border border-gray-100 hover:border-[#80C342]/20">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-[#80C342] to-[#6BA635] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                      <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#80C342] transition-colors duration-300 leading-tight">
                    Excellence
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité.
                </p>
                </div>
              </div>

              {/* Card Intégrité */}
              <div className="w-full group bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105 border border-gray-100 hover:border-[#80C342]/20">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-[#073E5D] to-[#0A4B6B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                      <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#80C342] transition-colors duration-300 leading-tight">
                    Intégrité
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.
                </p>
                </div>
              </div>

              {/* Card Innovation */}
              <div className="w-full group bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105 border border-gray-100 hover:border-[#80C342]/20">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-[#80C342] to-[#6BA635] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                      <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#80C342] transition-colors duration-300 leading-tight">
                    Innovation
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Nous recherchons constamment de nouvelles solutions pour répondre aux défis de nos clients.
                </p>
                </div>
              </div>

              {/* Card Collaboration */}
              <div className="w-full group bg-white p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 rounded-lg sm:rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-102 sm:hover:scale-105 border border-gray-100 hover:border-[#80C342]/20 sm:col-span-2 lg:col-span-2 xl:col-span-1">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-gradient-to-br from-[#073E5D] to-[#0A4B6B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
                      <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-[#073E5D] mb-2 sm:mb-3 md:mb-4 group-hover:text-[#80C342] transition-colors duration-300 leading-tight">
                    Collaboration
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Nous travaillons en étroite collaboration avec nos clients pour atteindre leurs objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
      </section>

      {/* Modal pour afficher les détails de l'expert */}
      <ExpertModal expert={selectedExpert} isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  )
}