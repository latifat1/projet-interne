import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import newsData from "@/data/news.json"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  slug: string
}

export default function ActualitesPage() {
  // Trier les actualités par date (du plus récent au plus ancien)
  const sortedNews = [...newsData.news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[700px] sm:h-[800px] bg-[#073E5D]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/actualités.jpeg"
          alt="Actualités Y3 Audit & Conseils"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Restez informé de l'actualité de Y3 Audit & Conseils
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">
              Découvrez nos dernières nouvelles, nos certifications et nos programmes de formation
            </p>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#073E5D] mb-3 sm:mb-4">
              Actualités en vedette
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {sortedNews.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#80C342] text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2 sm:mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{new Date(item.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#073E5D] mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/actualites/${item.slug}`}
                    className="inline-flex items-center text-[#073E5D] hover:text-[#80C342] font-medium text-sm sm:text-base"
                  >
                    Lire la suite
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 