"use client"

import { useState, useEffect } from "react"
import { Calendar, ArrowRight, Search, Filter, Eye, Share2, BookmarkPlus, TrendingUp, Clock, Users, Newspaper } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import newsData from "../../data/news.json"

const categories = ["Tous", "Certification", "Formation", "Partenariat", "Événement", "Récompense", "Expansion"]

type NewsArticle = typeof newsData.news[0];

function NewsModal({ article, onClose }: { article: NewsArticle; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="relative h-64 sm:h-80 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm rounded-full p-2 text-gray-800 hover:bg-white transition-all"
            aria-label="Fermer la modale"
          >
            <ArrowRight className="h-6 w-6 transform rotate-45" />
          </button>
        </div>
        <div className="p-6 sm:p-8 flex-grow overflow-y-auto">
          <span className="bg-[#80C342] text-white px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
            {article.category}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073E5D] mb-4">{article.title}</h2>
          <div className="flex items-center text-gray-500 text-sm mb-6" style={{ display: 'none' }}>
            <Calendar size={16} className="mr-2" />
            <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <Clock size={16} className="mr-1" />
            <span>{article.readTime}</span>
          </div>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ActualitesPage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const featuredNews = newsData.news.filter(item => item.featured);
  const regularNews = newsData.news.filter(item => !item.featured);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative h-[780px] overflow-hidden w-screen left-1/2 -translate-x-1/2 mb-12">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/actualite.png')", transform: "scale(1.1)", transition: "transform 0.3s ease-out" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full px-6 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center space-x-4 mb-6 justify-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">EN DIRECT</span>
              </div>
              <div className="text-white/80 text-sm">
                {currentTime.toLocaleDateString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
              </div>
            </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#80C342] mb-2">Y3 Audit & Conseils</h3>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">L'actualité de Y3 Audit & Conseils</h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Découvrez nos dernières innovations, certifications et programmes qui façonnent l'avenir de l'audit
            </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Articles en vedette */}
      {featuredNews.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="w-full px-12 sm:px-16 lg:px-36">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#80C342]/10 to-green-100 px-4 py-2 rounded-full mb-4">
                <TrendingUp className="text-[#80C342]" size={20} />
                <span className="text-[#80C342] font-semibold">À la une</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073E5D] mb-4">
              Actualités en vedette
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Les nouvelles les plus importantes qui façonnent notre avenir
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredNews.map((item, index) => (
                <article
                  key={item.id}
                  className={`group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className={`relative ${index === 0 ? 'h-96' : 'h-80'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#073E5D]/80 via-[#073E5D]/60 to-[#80C342]/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                    <div className="absolute top-6 left-6 z-30">
                      <div className="flex items-center space-x-3">
                        <span className="bg-[#80C342] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <div className="flex items-center text-white/80 text-sm mb-4" style={{ display: 'none' }}>
                        <Calendar size={16} className="mr-2" />
                        <span>{formatDate(item.date)}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className={`text-white font-black mb-3 leading-tight ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{item.title}</h3>
                      <p className="text-white/90 mb-5 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <button 
                          onClick={() => setSelectedArticle(item)}
                          className="group/btn bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#073E5D] transition-all duration-300">
                          Lire l'article
                          <ArrowRight size={16} className="inline-block ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex items-center space-x-3">
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-[#073E5D] transition-all duration-300">
                            <Share2 size={16} />
                          </button>
                          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-[#073E5D] transition-all duration-300">
                            <BookmarkPlus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Toutes nos actualités */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full px-12 sm:px-16 lg:px-28">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073E5D] mb-4">
              Toutes nos actualités
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez l'ensemble de nos actualités et restez informé de nos dernières nouvelles
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 w-full max-w-sm sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)]"
              >
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
                    <div className="flex items-center space-x-3">
                      <span className="bg-[#80C342] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3" style={{ display: 'none' }}>
                    <Calendar size={14} className="mr-1 sm:mr-2" />
                    <span>{formatDate(item.date)}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#073E5D] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#80C342] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(item)}
                      className="group/btn text-[#073E5D] hover:text-[#80C342] font-bold flex items-center text-sm sm:text-base"
                    >
                      Lire la suite
                      <ArrowRight size={14} className="ml-1 sm:ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button className="p-1 sm:p-2 text-gray-400 hover:text-[#80C342] transition-colors duration-300">
                        <Share2 size={14} />
                      </button>
                      <button className="p-1 sm:p-2 text-gray-400 hover:text-[#80C342] transition-colors duration-300">
                        <BookmarkPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedArticle && (
        <NewsModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </main>
  );
} 