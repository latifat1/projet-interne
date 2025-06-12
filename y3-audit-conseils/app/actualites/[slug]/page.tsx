import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import newsData from "@/data/news.json"
import { notFound } from "next/navigation"

interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  slug: string
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsData.news.find(item => item.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] bg-[#073E5D]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="flex flex-wrap items-center text-sm mb-3 sm:mb-4">
              <span className="bg-[#80C342] text-white px-3 py-1 rounded-full">
                {article.category}
              </span>
              <span className="mx-4 hidden sm:inline">|</span>
              <div className="flex items-center mt-2 sm:mt-0">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-[#073E5D] prose-a:text-[#80C342] prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
              <Link
                href="/actualites"
                className="inline-flex items-center text-[#073E5D] hover:text-[#80C342] font-medium text-sm sm:text-base"
              >
                <ArrowLeft size={16} className="mr-2" />
                Retour aux actualités
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 