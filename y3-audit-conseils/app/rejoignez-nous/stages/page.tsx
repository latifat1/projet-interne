import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, GraduationCap } from "lucide-react"

export default function StagesPage() {
  const stages = [
    {
      id: 1,
      titre: "Stage en Audit H/F",
      duree: "6 mois",
      lieu: "Paris",
      date: "Janvier 2026",
      description:
        "Dans le cadre de ce stage, vous serez intégré(e) à notre équipe d'audit et participerez aux missions d'audit légal et contractuel auprès de nos clients. Vous serez impliqué(e) dans toutes les phases de la mission, de la planification à la finalisation.",
      missions: [
        "Participation aux missions d'audit sur site",
        "Réalisation de contrôles et de tests d'audit",
        "Analyse des procédures et des contrôles internes",
        "Préparation de documents de travail",
      ],
      profil: [
        "Formation supérieure en comptabilité/audit (DCG, DSCG, école de commerce)",
        "Première expérience en cabinet d'audit appréciée",
        "Rigueur, autonomie et esprit d'analyse",
        "Bon niveau d'anglais",
      ],
    },
    {
      id: 2,
      titre: "Stage en Expertise Comptable H/F",
      duree: "6 mois",
      lieu: "Paris",
      date: "Janvier 2026",
      description:
        "Au sein de notre département d'expertise comptable, vous assisterez nos équipes dans la tenue comptable, l'établissement des déclarations fiscales et la préparation des comptes annuels pour un portefeuille de clients variés.",
      missions: [
        "Saisie et révision comptable",
        "Préparation des déclarations fiscales",
        "Participation à l'établissement des comptes annuels",
        "Analyse des données financières",
      ],
      profil: [
        "Formation en comptabilité (BTS, DCG ou équivalent)",
        "Maîtrise des outils informatiques et des logiciels comptables",
        "Rigueur, organisation et sens du service client",
        "Capacité à travailler en équipe",
      ],
    },
    {
      id: 3,
      titre: "Stage en Conseil Financier H/F",
      duree: "6 mois",
      lieu: "Paris",
      date: "Janvier 2026",
      description:
        "Intégré(e) à notre équipe de conseil financier, vous participerez à des missions d'analyse financière, de planification financière et d'accompagnement de nos clients dans leurs projets de développement.",
      missions: [
        "Analyse de données financières",
        "Participation à l'élaboration de business plans",
        "Recherche et analyse sectorielle",
        "Préparation de présentations clients",
      ],
      profil: [
        "Formation supérieure en finance (école de commerce, master finance)",
        "Maîtrise d'Excel et des outils d'analyse financière",
        "Capacité d'analyse et de synthèse",
        "Bon niveau d'anglais",
      ],
    },
  ]

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos offres de stages</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez nos opportunités de stages et faites vos premiers pas dans le monde professionnel au sein de notre
            cabinet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">Pourquoi faire un stage chez nous ?</h2>
            <p className="text-gray-700 mb-4">
              Chez Y3 Audit & Conseils, nous considérons nos stagiaires comme de futurs collaborateurs. Nous vous
              offrons une expérience professionnelle enrichissante, avec un véritable accompagnement et des
              responsabilités adaptées à votre niveau d'études.
            </p>
            <p className="text-gray-700 mb-4">
              Nos stages sont conçus pour vous permettre de mettre en pratique vos connaissances théoriques, de
              développer vos compétences et de vous familiariser avec les métiers de l'audit, de l'expertise comptable
              et du conseil.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Encadrement par des professionnels expérimentés</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Missions variées et formatrices</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Possibilité d'embauche à l'issue du stage</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-[#80C342] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Ambiance conviviale et collaborative</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/internship-program.png"
              alt="Programme de stages"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6 text-center">Nos offres de stages</h2>
          <div className="grid grid-cols-1 gap-6">
            {stages.map((stage) => (
              <div key={stage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#073E5D] mb-2">{stage.titre}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>Durée : {stage.duree}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>{stage.lieu}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>Début : {stage.date}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-700">{stage.description}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-[#073E5D] mb-2">Missions</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {stage.missions.map((mission, index) => (
                        <li key={index}>{mission}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-[#073E5D] mb-2">Profil recherché</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {stage.profil.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/rejoignez-nous/candidature?stage=${stage.id}`}
                      className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white px-6 py-3 rounded-md transition-colors duration-300"
                    >
                      Postuler à ce stage
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">
              Vous ne trouvez pas le stage qui vous convient ?
            </h2>
            <p className="text-gray-700 mb-6">
              N'hésitez pas à nous envoyer une candidature spontanée. Nous sommes toujours à la recherche de talents
              pour rejoindre notre équipe.
            </p>
            <Link
              href="/rejoignez-nous/candidature"
              className="inline-block bg-[#073E5D] hover:bg-[#80C342] text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              Candidature spontanée
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Témoignages de nos anciens stagiaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image src="/intern-testimonial-1.png" alt="Lucas B." fill className="rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Lucas B.</h3>
                  <p className="text-[#80C342]">Stage en Audit</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Mon stage chez Y3 Audit & Conseils a été une expérience très enrichissante. J'ai pu participer à de
                véritables missions d'audit et j'ai beaucoup appris grâce à l'encadrement de qualité. Ce stage m'a
                confirmé mon choix de carrière dans l'audit."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image src="/intern-testimonial-2.png" alt="Emma L." fill className="rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Emma L.</h3>
                  <p className="text-[#80C342]">Stage en Expertise Comptable</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "J'ai effectué mon stage de fin d'études chez Y3 Audit & Conseils et j'ai été impressionnée par la
                confiance et les responsabilités qui m'ont été accordées. L'ambiance de travail est très agréable et
                l'équipe est toujours disponible pour répondre aux questions."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image src="/intern-testimonial-3.png" alt="Maxime D." fill className="rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#073E5D]">Maxime D.</h3>
                  <p className="text-[#80C342]">Stage en Conseil Financier</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Mon stage en conseil financier m'a permis de mettre en pratique mes connaissances théoriques et de
                développer de nouvelles compétences. J'ai particulièrement apprécié la diversité des missions et la
                qualité des échanges avec les clients et les collègues."
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
