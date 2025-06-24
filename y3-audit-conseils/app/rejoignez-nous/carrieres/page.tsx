import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function CarrieresPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Carrières</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Rejoignez Y3 Audit & Conseil et participez à la construction d'un cabinet de
      référence où votre talent pourra s'épanouir pleinement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Pourquoi nous rejoindre ?</h2>
            <p className="text-gray-700 mb-4">
              Un environnement stimulant: Évoluez au sein d'une structure à taille humaine
              offrant la rigueur des standards internationaux et l'agilité d'un cabinet indépendant.
              Nos équipes bénéficient d'une autonomie réelle et d'opportunités de développement
              rapide.
            </p>
            <p className="text-gray-700 mb-4">
              Des missions variées : Intervenez auprès d'entreprises locales et de filiales de
              groupes internationaux sur des secteurs diversifiés. Chaque mission est une
              opportunité d'enrichir votre expertise et d'élargir votre champ de compétences.
            </p>
            <p className="text-gray-700 mb-4">
              Une formation continue : Bénéficiez d'un accompagnement personnalisé dans
              votre développement professionnel, avec un accès privilégié aux formations
              techniques et aux certifications reconnues du marché..
            </p>
             <p className="text-gray-700 mb-4">
               Un cadre de travail épanouissant : Intégrez une équipe soudée qui privilégie la
               collaboration, le partage de connaissances et l'équilibre vie professionnelle-vie
               personnelle.
            </p>
            {/* <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Formation continue et développement des compétences</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Équilibre vie professionnelle / vie personnelle</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Projets variés et clients de tous secteurs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ambiance conviviale et collaborative</span>
              </li>
            </ul> */}
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/bureau.jpeg"
              alt="Environnement de travail chez Y3"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Excellence</div>
              <p className="text-gray-700">
                Nous visons l'excellence dans tous nos services, en maintenant les plus hauts standards de qualité et en
                nous formant continuellement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Collaboration</div>
              <p className="text-gray-700">
                Nous croyons en la force du collectif et favorisons le travail d'équipe pour offrir les meilleures
                solutions à nos clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-xl font-bold mb-2">Innovation</div>
              <p className="text-gray-700">
                Nous encourageons la créativité et l'innovation pour répondre aux défis d'un environnement économique en
                constante évolution.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/profils2.jpeg"
              alt="Opportunités de carrière chez Y3"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Profils recherchés</h2>
            <p className="text-gray-700 mb-4">
              Nous recrutons régulièrement des profils aux différents niveaux d'expérience :
              auditeurs juniors et seniors, experts-comptables stagiaires et confirmés, consultants
              en finance et organisation, spécialistes juridiques et fiscaux.
            </p>
            <p className="text-gray-700 mb-4">
             Candidature spontanée :
             Vous vous reconnaissez dans nos valeurs d'excellence, d'agilité et de proximité client?
            </p>
            
            {/* <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mentorat et coaching personnalisé</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Formations régulières et certifications</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Évolution vers des postes à responsabilité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Mobilité interne entre nos différents services</span>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Témoignages de nos collaborateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image src="/employee-testimonial-1.png" alt="Sophie D." fill className="rounded-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#073E5D]">Sophie D.</h3>
                  <p className="text-[#80C342]">Manager Audit, depuis 5 ans</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "J'ai rejoint Y3 Audit & Conseils en tant que collaboratrice junior et j'ai pu évoluer rapidement grâce
                à l'accompagnement et à la confiance que l'on m'a accordés. L'ambiance de travail est stimulante et les
                projets variés."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image src="/employee-testimonial-2.png" alt="Thomas L." fill className="rounded-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#073E5D]">Thomas L.</h3>
                  <p className="text-[#80C342]">Expert-comptable, depuis 3 ans</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Ce qui me plaît chez Y3 Audit & Conseils, c'est la diversité des missions et la qualité des échanges
                avec les clients et les collègues. On apprend tous les jours et on se sent vraiment valorisé dans son
                travail."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image src="/employee-testimonial-3.png" alt="Julie M." fill className="rounded-full object-cover" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#073E5D]">Julie M.</h3>
                  <p className="text-[#80C342]">Consultante, depuis 2 ans</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Après plusieurs années dans un grand cabinet, j'ai choisi Y3 Audit & Conseils pour sa taille humaine et
                sa culture d'entreprise. Je peux aujourd'hui concilier vie professionnelle et vie personnelle tout en
                travaillant sur des projets passionnants."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Rejoignez notre équipe</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Transmettez-nous votre candidature à recrutement@ycubeac.com en précisant le
            domaine qui vous intéresse. Nous étudions chaque profil avec attention et revenons
            vers les candidats dont le parcours correspond à nos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/rejoignez-nous/candidature"
              className="bg-[#80C342] text-white hover:bg-[#073E5D] px-6 py-3 rounded-md transition-colors duration-300"
            >
              Candidature spontanée
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
