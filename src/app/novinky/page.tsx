"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import texture from "../../../public/assets/textures/texture.jpg";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { X, Search, Filter, RefreshCw, ArrowRight } from "lucide-react";
import { newsData, NewsItem } from "../../data/newsData";

const months = [
  "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
  "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
];

interface AsideProps {
  showFilter: boolean;
  setShowFilter: (v: boolean) => void;
  filterYear: string;
  setFilterYear: (s: string) => void;
  filterMonth: string;
  setFilterMonth: (s: string) => void;
  filterCategory: string;
  setFilterCategory: (s: string) => void;
  categories: string[];
  filteredNews: NewsItem[];
  wrapperClassName?: string;
  search: string;
  setSearch: (s: string) => void;
}

function AsideContent({
  showFilter,
  setShowFilter,
  filterYear,
  setFilterYear,
  filterMonth,
  setFilterMonth,
  filterCategory,
  setFilterCategory,
  categories,
  filteredNews,
  wrapperClassName = "",
  search,
  setSearch,
}: AsideProps) {

  const resetFilters = () => {
    setFilterYear("");
    setFilterMonth("");
    setFilterCategory("");
    setSearch("");
  };

  const filtersChanged = filterYear !== "" || filterMonth !== "" || filterCategory !== "";

  return (
    <aside className={`${wrapperClassName} rounded-xl flex flex-col`}>
      <div className="flex items-center justify-between mb-4 relative">
        <h3 className="text-white text-lg font-semibold">Všechny příspěvky</h3>
        <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`px-4 py-2 font-medium text-sm border border-white/20 rounded-md flex items-center gap-2 transition-all duration-200 ${
              showFilter ? "bg-white/15 border-white/30" : "bg-white/10"
            } text-white ${filtersChanged ? "ring-2 ring-neonPink" : ""} hover:shadow-md hover:shadow-black/30`}
          >
            {showFilter ? "Skrýt filtr" : "Filtrovat"}
            {filtersChanged && <Filter className="w-4 h-4 fill-current text-neonPink" />}
          </button>
          {filtersChanged && (
            <span className="absolute -top-[7px] -right-[8px] w-4 h-4 bg-neonPink text-black text-xs font-bold rounded-full flex items-center justify-center">
              {+!!filterYear + +!!filterMonth + +!!filterCategory}
            </span>
          )}
        </div>
      </div>

      {/* Mobilní search v asidu */}
      <div className="block lg:hidden w-full mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Vyhledat příspěvek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full px-4 py-2 pl-10 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

          {search && (          
            <button          
              type="button"          
              onClick={() => setSearch("")}          
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white z-10"          
              aria-label="Vymazat hledání"          
            >          
              <X className="w-4 h-4" />          
            </button>          
          )}

        </div>
      </div>

      {showFilter && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg text-sm text-white space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-300 m-0">Nastavení filtru</p>
            <div className="flex gap-2">
              {filtersChanged && (
                <button onClick={resetFilters} className="flex items-center gap-2 text-sm px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition">
                  <RefreshCw className="w-4 h-4" /> Reset
                </button>
              )}
              <button onClick={() => setShowFilter(false)} className="text-sm px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition">
                Zavřít
              </button>
            </div>
          </div>
          <select value={filterYear} onChange={(e) => setFilterYear(e.target.value)} className="w-full bg-black/30 rounded px-2 py-1">
            <option value="">Všechny roky</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
          <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)} className="w-full bg-black/30 rounded px-2 py-1">
            <option value="">Všechny měsíce</option>
            {months.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="w-full bg-black/30 rounded px-2 py-1">
            <option value="">Všechny kategorie</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      )}

      {/* Seznam odkazů v sidebaru */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 custom-scrollbar">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <Link href={`/novinky/${item.slug}`} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}                
                className="p-3 space-y-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 transition group"
              >
                <span className="inline-block leading-none border-neonPink border-2 text-white px-2 py-[5px] rounded-full text-[10px] font-medium mb-1">
                  {item.category}
                </span>
                <p className="text-[11px] text-gray-400">{item.date}</p>
                <p className="text-sm font-medium group-hover:text-neonPink transition-colors">{item.title}</p>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-gray-400 text-sm text-center mt-10">Nebylo nic nalezeno...</p>
        )}
      </div>
    </aside>
  );
}

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterYear, setFilterYear] = useState("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    document.title = "Novinky | Wait";
  }, []);

  const filteredNews = useMemo(() => {
    return newsData
      .filter((item) => {
        const searchMatch = item.title.toLowerCase().includes(search.toLowerCase()) || item.content.toLowerCase().includes(search.toLowerCase());
        const yearMatch = filterYear ? item.date.includes(filterYear) : true;
        const monthMatch = filterMonth ? item.date.toLowerCase().includes(filterMonth.toLowerCase()) : true;
        const categoryMatch = filterCategory ? item.category === filterCategory : true;
        return searchMatch && yearMatch && monthMatch && categoryMatch;
      })
      .sort((a, b) => b.id - a.id);
  }, [search, filterYear, filterMonth, filterCategory]);

  const sortedAll = [...newsData].sort((a, b) => b.id - a.id);
  const mainArticle = sortedAll[0] || null;
  const otherArticles = sortedAll.slice(1, 4);
  const categories = Array.from(new Set(newsData.map((n) => n.category)));

  return (
    <>
      <SideAccentLine targetId="news-section" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.60), rgba(20, 20, 20, 0.65)), url(${texture.src})`, }}
      >
        <section id="news-section" className="relative min-h-screen flex flex-col items-center gap-8 pt-[120px] pb-20 md:pb-24 px-6">
          <TitleWithLines title="Novinky" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col items-center gap-8 mt-6 w-full max-w-6xl monitor:max-w-7xl"
          >
            {/* Desktop Search */}
            <div className="relative w-full max-w-[700px] monitor:max-w-3xl mb-6 hidden lg:block">
              <input
                type="text"
                placeholder="Vyhledat příspěvek..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full px-5 py-3 pl-12 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

              {search && (              
                <button              
                  type="button"              
                  onClick={() => setSearch("")}              
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition z-10"              
                >
              
                  <X className="w-5 h-5" />              
                </button>              
              )}
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-8">
              {/* Hlavní článek - nyní jako Link */}
              {mainArticle && (
                <Link href={`/novinky/${mainArticle.slug}`} className="flex-1 group">
                  <motion.div 
                    className="
                      relative overflow-hidden transition-all duration-300 shadow-xl
                      /* Mobilní verze (shodná s gridem) */
                      flex flex-col aspect-[4/5] rounded-xl bg-white/5 hover:bg-white/10
                      /* Desktop verze (Hero design) */
                      sm:block sm:aspect-auto sm:h-[450px] md:h-[550px] sm:rounded-3xl sm:bg-transparent
                    "
                  >
                    {/* Container pro obrázek */}
                    <div className="
                      relative w-full overflow-hidden
                      /* Mobil */
                      flex-[3]
                      /* Desktop */
                      sm:absolute sm:inset-0 sm:h-full
                    ">
                      <Image
                        src={mainArticle.image}
                        alt={mainArticle.title}
                        fill
                        className="
                          object-cover object-top transition-transform duration-500 will-change-transform transform-gpu
                          /* Mobil hover - posun nahoru */
                          group-hover:-translate-y-2 
                          /* Desktop hover - jemný zoom */
                          sm:group-hover:scale-105 sm:group-hover:translate-y-0
                        "
                      />

                      {/* Overlay vrstvy */}
                      {/* Mobilní jemný overlay */}
                      <div className="sm:hidden pointer-events-none absolute inset-0 bg-black/5 transition-opacity duration-300 ease-out group-hover:opacity-0" />
                      
                      {/* Desktop Gradient (skrytý na mobilu) */}
                      <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
                    </div>

                    {/* Obsah článku */}
                    <div className="
                      flex flex-col text-white
                      /* Mobil */
                      p-4 flex-[2]
                      /* Desktop */
                      sm:absolute sm:p-0 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8
                    ">
                      <span className="
                        inline-block leading-none border-neonPink border-2 rounded-full font-medium mb-3 w-fit
                        /* Mobil */
                        px-2 py-[5.5px] text-[10px]
                        /* Desktop */
                        sm:px-3 sm:py-1 sm:text-xs
                      ">
                        {mainArticle.category}
                      </span>
                      
                      <p className="
                        text-gray-400 mb-2
                        /* Mobil */
                        text-xs
                        /* Desktop */
                        sm:text-sm sm:text-gray-300 sm:mb-3
                      ">
                        {mainArticle.date}
                      </p>
                      
                      <h2 className="
                        font-bold leading-snug mb-3 group-hover:text-neonPink transition-colors
                        /* Mobil */
                        text-xl
                        /* Desktop */
                        sm:text-3xl md:text-4xl
                      ">
                        {mainArticle.title}
                      </h2>
                      
                      <p className="
                        text-gray-300 line-clamp-3 mb-4
                        /* Mobil */
                        text-sm
                        /* Desktop */
                        sm:text-gray-200 sm:text-base sm:line-clamp-2
                      ">
                        {mainArticle.excerpt}
                      </p>
                      
                      <div className="
                        mt-auto flex items-center gap-2 text-neonPink font-medium transition-opacity ease-out opacity-60 group-hover:opacity-100 duration-300 will-change-transform transform-gpu
                        /* Mobil */
                        text-sm
                        /* Desktop */
                        sm:text-base
                      ">
                        Přečíst článek 
                        <ArrowRight 
                          size={18} 
                          className="transition-transform group-hover:translate-x-2" 
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )}

              {/* Sidebar Desktop */}
              <div className="hidden lg:block w-80">
                <AsideContent
                  showFilter={showFilter} setShowFilter={setShowFilter}
                  filterYear={filterYear} setFilterYear={setFilterYear}
                  filterMonth={filterMonth} setFilterMonth={setFilterMonth}
                  filterCategory={filterCategory} setFilterCategory={setFilterCategory}
                  categories={categories} filteredNews={filteredNews}
                  wrapperClassName="h-[550px]" search={search} setSearch={setSearch}
                />
              </div>
            </div>

            {/* Grid dalších článků */}
            <div className="w-full max-w-6xl monitor:max-w-7xl mt-0 sm:mt-0 md:mt-4 pt-2 sm:pt-0">
              <h3 className="text-white text-lg font-semibold mb-6">Další příspěvky</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 monitor:gap-10">
                {otherArticles.map((item) => (
                  <Link href={`/novinky/${item.slug}`} key={item.id} className="group">
                    <motion.div className="relative group cursor-pointer rounded-xl bg-white/5 hover:bg-white/10 overflow-hidden shadow-md transition-all duration-300 flex flex-col aspect-[4/5]">
                      <div className="relative w-full flex-[3] overflow-hidden">
                        <Image 
                          src={item.image} alt={item.title} fill 
                          className="object-cover monitor:object-top transition-transform duration-300 ease-out
                          group-hover:-translate-y-2 will-change-transform transform-gpu" 
                        />
                        
                        <div
                          className="
                            pointer-events-none
                            absolute inset-0
                            bg-black/5
                            transition-opacity duration-300 ease-out
                            group-hover:opacity-0
                          "
                        />
                      </div>
                      <div className="p-4 sm:p-5 monitor:p-6 text-white flex flex-col flex-[2]">
                        <span className="inline-block leading-none border-neonPink border-2 px-2 py-[5.5px] rounded-full text-[10px] w-fit mb-3">{item.category}</span>
                        <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                        <h4 className="text-xl font-bold mb-3 group-hover:text-neonPink transition-colors">{item.title}</h4>
                        <p className="text-gray-300 text-sm line-clamp-3 mb-4">{item.excerpt}</p>
                        <div className="mt-auto flex items-center gap-2 text-neonPink text-sm font-medium transition-opacity ease-out opacity-60 group-hover:opacity-100 duration-300 will-change-transform transform-gpu">
                          Přečíst článek <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Mobile (zobrazí se na konci) */}
            <div className="block lg:hidden w-full mb-10">
              <AsideContent
                showFilter={showFilter} setShowFilter={setShowFilter}
                filterYear={filterYear} setFilterYear={setFilterYear}
                filterMonth={filterMonth} setFilterMonth={setFilterMonth}
                filterCategory={filterCategory} setFilterCategory={setFilterCategory}
                categories={categories} filteredNews={filteredNews}
                search={search} setSearch={setSearch}
              />
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}