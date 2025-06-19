"use client"

import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Eye, Share2, BookmarkPlus } from "lucide-react"
import Link from "next/link"

// Données simulées d'actualités (à remplacer par une vraie API)
const newsData = {
  news: [
    {
      id: 1,
      title: "Nouvelle certification ISO 27001 obtenue pour Y3 Audit & Conseils",
      excerpt: "Notre cabinet vient d'obtenir la certification ISO 27001, renforçant notre expertise en sécurité de l'information et notre engagement envers l'excellence.",
      content: `
        <p>Nous sommes fiers d'annoncer que Y3 Audit & Conseils a obtenu la certification ISO 27001, un standard international reconnu pour la gestion de la sécurité de l'information.</p>
        
        <h2>Qu'est-ce que l'ISO 27001 ?</h2>
        <p>L'ISO 27001 est une norme internationale qui spécifie les exigences pour établir, mettre en œuvre, maintenir et améliorer en continu un système de management de la sécurité de l'information (SMSI).</p>
        
        <h2>Les avantages pour nos clients</h2>
        <p>Cette certification démontre notre engagement envers :</p>
        <ul>
          <li>La protection des données sensibles</li>
          <li>La gestion des risques informatiques</li>
          <li>La continuité des services</li>
          <li>La conformité réglementaire</li>
        </ul>
        
        <h2>Notre engagement</h2>
        <p>Cette certification renforce notre position en tant que partenaire de confiance pour la gestion de vos données sensibles et la sécurité de vos informations.</p>
      `,
      image: "/api/placeholder/400/300",
      date: "2024-06-15",
      category: "Certification",
      slug: "certification-iso-27001",
      views: 1250,
      featured: true,
      readTime: "5 min"
    },
    // ... autres articles ...
  ]
}

export default function ArticlePage() {
  const params = useParams()
  const article = newsData.news.find(item => item.slug === params.slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#073E5D] mb-4">Article non trouvé</h1>
          <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <Link 
            href="/actualites"
            className="inline-flex items-center bg-[#80C342] text-white px-6 py-3 rounded-full font-bold hover:bg-[#6ba82f] transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux actualités
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#073E5D]/90 via-[#073E5D]/70 to-[#80C342]/80" />
        
        {/* Background animé */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#80C342] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <Link 
              href="/actualites"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Retour aux actualités
            </Link>

            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#80C342] text-white px-4 py-2 rounded-full text-sm font-bold">
                {article.category}
              </span>
              <div className="flex items-center space-x-2 text-white/80 text-sm">
                <Eye size={16} />
                <span>{article.views.toLocaleString()} vues</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center text-white/80 text-sm">
              <Calendar size={16} className="mr-2" />
              <span>{formatDate(article.date)}</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button className="p-3 bg-[#073E5D] text-white rounded-full hover:bg-[#80C342] transition-colors">
                <Share2 size={20} />
              </button>
              <button className="p-3 bg-[#073E5D] text-white rounded-full hover:bg-[#80C342] transition-colors">
                <BookmarkPlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 