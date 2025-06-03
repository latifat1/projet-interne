import Link from "next/link"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function OffresEmploiPage() {
  const offres = [
    {
      id: 1,
      titre: "Expert-comptable H/F",
      contrat: "CDI",
      lieu: "Paris",
      date: "Immédiate",
      description:
        "Nous recherchons un(e) expert-comptable expérimenté(e) pour rejoindre notre équipe. Vous serez en charge de la supervision des dossiers clients, de la révision des comptes et de l'accompagnement des clients dans leur gestion financière.",
      competences: [
        "Diplôme d'expertise comptable (DEC)",
        "Expérience de 5 ans minimum en cabinet",
        "Maîtrise des normes comptables françaises et internationales",
        "Excellentes capacités relationnelles et rédactionnelles",
      ],
    },
    {
      id: 2,
      titre: "Auditeur junior H/F",
      contrat: "CDI",
      lieu: "Paris",
      date: "Immédiate",
      description:
        "Dans le cadre de notre développement, nous recherchons un(e) auditeur(trice) junior pour renforcer notre équipe d'audit. Vous participerez aux missions d'audit légal et contractuel auprès de nos clients de différents secteurs d'activité.",
      competences: [
        "Formation supérieure en comptabilité/audit (DCG, DSCG)",
        "Première expérience en cabinet d'audit appréciée",
        "Rigueur, autonomie et esprit d'analyse",
        "Bon niveau d'anglais",
      ],
    },
    {
      id: 3,
      titre: "Consultant(e) en gestion de risques H/F",
      contrat: "CDI",
      lieu: "Paris",
      date: "Immédiate",
      description:
        "Nous recherchons un(e) consultant(e) en gestion de risques pour accompagner nos clients dans l'identification, l'évaluation et la gestion de leurs risques. Vous interviendrez sur des missions variées dans différents secteurs d'activité.",
      competences: [
        "Formation supérieure en finance, audit ou gestion des risques",
        "Expérience de 3 ans minimum dans un poste similaire",
        "Connaissance des réglementations en matière de gestion des risques",
        "Capacité d'analyse et de synthèse",
      ],
    },
    {
      id: 4,
      titre: "Collaborateur comptable H/F",
      contrat: "CDI",
      lieu: "Paris",
      date: "Immédiate",
      description:
        "Nous recherchons un(e) collaborateur(trice) comptable pour rejoindre notre équipe. Vous serez en charge de la tenue comptable, de l'établissement des déclarations fiscales et de la préparation des comptes annuels pour un portefeuille de clients.",
      competences: [
        "Formation en comptabilité (BTS, DCG ou équivalent)",
        "Expérience de 2 ans minimum en cabinet",
        "Maîtrise des outils informatiques et des logiciels comptables",
        "Rigueur, organisation et sens du service client",
      ],
    },
  ]

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#073E5D] mb-4">Nos offres d'emploi</h1>
          <div className="w-20 h-1 bg-[#80C342] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Découvrez nos opportunités de carrière et rejoignez une équipe dynamique et passionnée.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 gap-6">
            {offres.map((offre) => (
              <div key={offre.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-[#073E5D] mb-2">{offre.titre}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>{offre.contrat}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>{offre.lieu}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 text-[#80C342] mr-2" />
                      <span>Disponibilité : {offre.date}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Description du poste</h3>
                    <p className="text-gray-700">{offre.description}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Compétences requises</h3>
                    <ul className="list-disc list-inside text-gray-700">
                      {offre.competences.map((competence, index) => (
                        <li key={index}>{competence}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`/rejoignez-nous/candidature?offre=${offre.id}`}
                      className="inline-block bg-[#80C342] hover:bg-[#073E5D] text-white px-6 py-3 rounded-md transition-colors duration-300"
                    >
                      Postuler à cette offre
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#073E5D] mb-4">
              Vous ne trouvez pas le poste qui vous convient ?
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
          <h2 className="text-2xl font-semibold text-[#073E5D] mb-6">Processus de recrutement</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">1</div>
              <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Candidature</h3>
              <p className="text-gray-700">
                Envoyez-nous votre CV et votre lettre de motivation via notre formulaire en ligne.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">2</div>
              <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Premier entretien</h3>
              <p className="text-gray-700">
                Échange avec un membre de notre équipe RH pour mieux vous connaître et présenter le poste.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">3</div>
              <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Entretien technique</h3>
              <p className="text-gray-700">
                Rencontre avec votre futur manager pour évaluer vos compétences techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#80C342] text-2xl font-bold mb-2">4</div>
              <h3 className="text-lg font-semibold text-[#073E5D] mb-2">Intégration</h3>
              <p className="text-gray-700">
                Bienvenue dans l'équipe ! Nous vous accompagnons dans votre prise de poste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
