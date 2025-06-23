"use client"

import { useState, useEffect } from "react"
import { Calendar, ArrowRight, Search, Filter, Eye, Share2, BookmarkPlus, TrendingUp, Clock, Users, Newspaper } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Données locales d'actualités
const newsData = {
  news: [
    {
      id: 1,
      title: "Nouvelle certification ISO 27001 obtenue pour Y3 Audit & Conseils",
      excerpt: "Notre cabinet vient d'obtenir la certification ISO 27001, renforçant notre expertise en sécurité de l'information et notre engagement envers l'excellence.",
      image: "/Expert.jpg",
      date: "2024-06-15",
      category: "Certification",
      slug: "certification-iso-27001",
      featured: true,
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Lancement du programme de formation en audit digital",
      excerpt: "Découvrez notre nouveau programme de formation spécialisé dans l'audit digital, conçu pour les professionnels de demain.",
      image: "/équipement.jpg",
      date: "2024-06-10",
      category: "Formation",
      slug: "formation-audit-digital", 
      featured: false,
      readTime: "3 min"
    },
    {
      id: 3,
      title: "Partenariat stratégique avec les leaders du secteur technologique",
      excerpt: "Y3 Audit & Conseils annonce un partenariat majeur qui révolutionnera nos services d'audit pour les entreprises tech.",
      image: "/actualités.jpeg",
      date: "2024-06-08",
      category: "Partenariat",
      slug: "partenariat-tech",
      featured: true,
      readTime: "4 min"
    },
    {
      id: 4,
      title: "Webinaire : Les défis de l'audit à l'ère du numérique",
      excerpt: "Rejoignez notre webinaire exclusif sur les transformations digitales qui impactent le monde de l'audit moderne.",
      image: "/actualités.jpeg",
      date: "2024-06-05",
      category: "Événement",
      slug: "webinaire-audit-numerique",
      featured: false,
      readTime: "2 min"
    },
    {
      id: 5,
      title: "Prix d'excellence en audit remporté lors du forum national",
      excerpt: "Notre équipe a été récompensée pour son innovation dans les méthodologies d'audit lors du forum national des experts-comptables.",
      image: "/actualités.jpeg",
      date: "2024-06-03",
      category: "Récompense",
      slug: "prix-excellence-audit",
      featured: false,
      readTime: "3 min"
    },
    {
      id: 6,
      title: "Expansion internationale : ouverture du bureau de Londres",
      excerpt: "Y3 Audit & Conseils franchit une nouvelle étape avec l'ouverture de son premier bureau international à Londres.",
      image: "/actualités.jpeg",
      date: "2024-05-28",
      category: "Expansion",
      slug: "bureau-londres",
      featured: true,
      readTime: "6 min"
    }
  ]
}

const categories = ["Tous", "Certification", "Formation", "Partenariat", "Événement", "Récompense", "Expansion"]

export default function ActualitesPage() {
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
          style={{ backgroundImage: "url('/actualités.jpeg')", transform: "scale(1.1)", transition: "transform 0.3s ease-out" }}
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
          <div className="w-full px-4 sm:px-6">
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
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-6 left-6 z-30">
                      <div className="flex items-center space-x-3">
                        <span className="bg-[#80C342] text-white px-3 py-1 rounded-full text-sm font-bold">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <div className="flex items-center text-white/80 text-sm mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{formatDate(item.date)}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className={`text-white font-black mb-4 leading-tight ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>{item.title}</h3>
                      <p className="text-white/90 mb-6 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="group/btn bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-[#073E5D] transition-all duration-300">
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
        <div className="w-full px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#073E5D] mb-4">
              Toutes nos actualités
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Découvrez l'ensemble de nos actualités et restez informé de nos dernières nouvelles
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
                    <div className="flex items-center space-x-3">
                      <span className="bg-[#80C342] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
                    <Calendar size={14} className="mr-1 sm:mr-2" />
                    <span>{formatDate(item.date)}</span>
                    <span className="mx-1 sm:mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#073E5D] mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#80C342] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="group/btn text-[#073E5D] hover:text-[#80C342] font-bold flex items-center text-sm sm:text-base">
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
    </main>
  );
} 