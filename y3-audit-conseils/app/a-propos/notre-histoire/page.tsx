import Image from "next/image"

export default function NotreHistoirePage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Notre Histoire</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Notre Vision</h2>
            <p className="text-gray-700 mb-4">
              Unis par une expérience partagée au sein de prestigieux cabinets internationaux,
              Georges et Yves ont fondé Y3 Audit & Conseil avec l'ambition de créer un cabinet de
              référence, alliant excellence technique, agilité opérationnelle et
              accompagnement sur-mesure.
            </p>
            <p className="text-gray-700 mb-4">
             Y3 Audit & Conseil se positionne comme un cabinet d'expertise comptable
             indépendant, proposant une approche innovante et pragmatique des métiers du
             chiffre et du conseil. Notre philosophie : conjuguer expertise de haut niveau et
             proximité client pour répondre avec précision aux enjeux spécifiques de chaque
             entreprise.
            </p>
          
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/reussite.jpeg"
              alt="Les débuts de Y3 Audit & Conseils"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] order-2 lg:order-1">
            <Image
              src="/expertfinancier.jpeg"
              alt="Y3 Audit & Conseils aujourd'hui"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Nos Expertises</h2>
            <p className="text-gray-700 mb-4">
             Notre cabinet déploie son savoir-faire autour de quatre domaines de compétences
             complémentaires : l'audit, l'expertise-comptable, le conseil opérationnel et le conseil
             financier. Cette approche intégrée nous permet d'accompagner nos clients dans
             toutes les dimensions de leur développement, de la conformité réglementaire à la
             stratégie de croissance.
            </p>
            <p className="text-gray-700 mb-4">
              Aujourd'hui, notre cabinet compte plus de 30 collaborateurs qualifiés, répartis en équipes spécialisées
              pour répondre au mieux aux attentes de nos clients.
            </p>
           
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-8 text-center">Nos Atouts Distinctifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#073E5D] mb-3 text-center">Excellence Technique</h3>
              <p className="text-gray-700 text-center">
                L'expertise reconnue de nos fondateurs s'appuie sur une réputation établie auprès
                d'entreprises locales et de filiales de groupes internationaux, tant au niveau national
                que continental. Notre cabinet applique les mêmes standards de qualité, d'éthique et
                de déontologie que les structures internationales de référence, garantissant à nos
                clients une prestation irréprochable à chaque mission.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#073E5D] mb-3 text-center">Réactivité & Adaptabilité</h3>
              <p className="text-gray-700 text-center">
                Notre organisation privilégie l'autonomie et la responsabilisation de nos équipes, leur
                permettant de s'adapter finement aux particularités de chaque client. Cette culture
                d'entreprise favorise une prise de décision rapide et une résolution efficace des
                situations complexes, assurant fluidité et réactivité dans l'exécution de nos missions.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Dates clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2005</div>
              <p className="text-gray-700">Création de Y3 Audit & Conseils</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2010</div>
              <p className="text-gray-700">Ouverture de notre premier bureau à l'international</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2018</div>
              <p className="text-gray-700">Lancement de notre département conseil en transformation digitale</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  )
}
