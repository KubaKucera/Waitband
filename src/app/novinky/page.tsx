"use client";

import React from "react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import texture from "../../../public/assets/textures/texture.jpg";
import Image from "next/image";
import TitleWithLines from "@/components/titleWithLines/TitleWithLines";
import { X, ExternalLink, Search, Filter, RefreshCw } from "lucide-react";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { newsData, NewsItem } from "../../data/newsData";

const months = [
  "Leden","Únor","Březen","Duben","Květen","Červen",
  "Červenec","Srpen","Září","Říjen","Listopad","Prosinec"
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
  setActive: (n: NewsItem | null) => void;
  wrapperClassName?: string;
  // nově: search a setter pro mobilní vyhledávání
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
  setActive,
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

  const hasActiveFilters = filterYear !== "" || filterMonth !== "" || filterCategory !== "";

  return (
    <aside className={`${wrapperClassName} rounded-xl p-2 flex flex-col`}>
      {/* Header: název + filtr v jedné linii */}
      <div className="flex items-center justify-between mb-0 sm:mb-0 md:mb-4">
        <h3 className="text-white text-xl font-semibold">Všechny příspěvky</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`text-gray-300 hover:text-white transition flex items-center ${
              showFilter ? "text-white" : ""
            }`}
          >
            Filtr
            <Filter
              className={`w-5 h-5 ml-1 ${showFilter ? "fill-current" : ""}`}
            />
          </button>          
        </div>
      </div>      

      {/* Mobilní search: POD headerem (viditelné pouze na mobilu) */}
      <div className="block lg:hidden w-full mt-4 mb-6">
        <label htmlFor="mobile-search" className="sr-only">Vyhledat příspěvek</label>
        <div className="relative">
          <input
            id="mobile-search"
            type="text"
            placeholder="Vyhledat příspěvek..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full px-4 py-2 pl-10 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonPink"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label="Vymazat hledání"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filtr */}
      {showFilter && (
        <div className="mb-4 p-3 bg-white/5 rounded-lg text-sm text-white space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-300 m-0">Nastavení filtru</p>
            <div className="flex gap-2">
              {hasActiveFilters && (   // 👈 Podmínka
                <button
                  onClick={resetFilters}
                  className="flex items-center gap-2 text-sm px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </button>
              )}
              <button
                onClick={() => setShowFilter(false)}
                className="text-sm px-3 py-1 bg-transparent border border-white/10 rounded hover:bg-white/5 transition"
              >
                Zavřít
              </button>
            </div>
          </div>
          {/* Rok */}
          <div>
            <label className="block mb-1">Rok:</label>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="w-full bg-black/30 rounded px-2 py-1"
            >
              <option value="">Všechny</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>
          {/* Měsíc */}
          <div>
            <label className="block mb-1">Měsíc:</label>
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="w-full bg-black/30 rounded px-2 py-1"
            >
              <option value="">Všechny</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
          {/* Kategorie */}
          <div>
            <label className="block mb-1">Kategorie:</label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="w-full bg-black/30 rounded px-2 py-1"
            >
              <option value="">Všechny</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Výpis příspěvků */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="cursor-pointer p-3 space-y-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-200 transition"
            >
              <span className="inline-block border-neonPink border-2 text-white px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                {item.category}
              </span>
              <p className="text-xs text-gray-400">{item.date}</p>
              <p className="text-sm font-medium">{item.title}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-sm text-center mt-10">
            Odpovídající příspěvek nebyl nalezen...
          </p>
        )}
      </div>
    </aside>
  );
}

export default function NewsPage() {
  const [active, setActive] = useState<NewsItem | null>(null);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filterYear, setFilterYear] = useState<string>("");
  const [filterMonth, setFilterMonth] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsLargeScreen(window.innerWidth >= 1600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    document.title = "Novinky | Wait";
  }, []);

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [active]);

  // 🔽 Filtrování + řazení od nejnovějšího (nejvyšší id)
  const filteredNews = useMemo(() => {
    return newsData
      .filter((item) => {
        const searchMatch =
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.content.toLowerCase().includes(search.toLowerCase());

        const yearMatch = filterYear ? item.date.includes(filterYear) : true;
        const monthMatch = filterMonth ? item.date.toLowerCase().includes(filterMonth.toLowerCase()) : true;
        const categoryMatch = filterCategory ? item.category === filterCategory : true;

        return searchMatch && yearMatch && monthMatch && categoryMatch;
      })
      .sort((a, b) => b.id - a.id); // nejnovější nahoře
  }, [search, filterYear, filterMonth, filterCategory]);

  // 🔽 Hlavní článek a další příspěvky bereme vždy z celé databáze
  const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
  const mainArticle = sortedNews[0] || null;
  const otherArticles = sortedNews.slice(1);

  const categories = Array.from(new Set(newsData.map((n) => n.category)));

  return (
    <>
      <SideAccentLine targetId="news-section" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.85)), url(${texture.src})`,
        }}
      >
        <section
          id="news-section"
          className="relative min-h-screen flex flex-col items-center gap-6 pt-[118px] px-4"
        >
          {/* Title */}
          <TitleWithLines title="Novinky" delay={0.3} />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-6 w-full"
          >
            {/* Search - DESKTOP only (skryté na mobilu) */}
            <div className="relative w-full max-w-3xl monitor:max-w-4xl mb-6 hidden lg:block">
              <input
                type="text"
                placeholder="Vyhledat příspěvek..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full px-5 py-3 pl-12 pr-10 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neonPink"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Main + sidebar (desktop only) */}
            <div className="w-full max-w-6xl monitor:max-w-7xl flex flex-col lg:flex-row gap-8">
              {/* Hlavní článek */}
              {mainArticle && (
                <motion.div
                  onClick={() => setActive(mainArticle)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative cursor-pointer flex-1 rounded-3xl overflow-hidden shadow-xl group mb-5 lg:mb-0"
                >
                  <Image
                    src={mainArticle.image}
                    alt={mainArticle.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-[500px] monitor:h-[600px] rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-block border-neonPink border-2 text-white px-3 py-1 rounded-full text-xs font-semibold mb-1">
                      {mainArticle.category}
                    </span>
                    <p className="text-sm text-gray-300">{mainArticle.date}</p>
                    <h2 className="text-3xl font-bold">{mainArticle.title}</h2>
                    <p className="mt-2 text-gray-200">{mainArticle.excerpt}</p>
                  </div>
                </motion.div>
              )}

              {/* Sidebar for desktop (hidden on mobile) */}
              <div className="hidden lg:block lg:w-80">
                <AsideContent
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  filterYear={filterYear}
                  setFilterYear={setFilterYear}
                  filterMonth={filterMonth}
                  setFilterMonth={setFilterMonth}
                  filterCategory={filterCategory}
                  setFilterCategory={setFilterCategory}
                  categories={categories}
                  filteredNews={filteredNews}
                  setActive={setActive}
                  wrapperClassName={"h-[500px] monitor:h-[600px]"}
                  search={search}
                  setSearch={setSearch}
                />
              </div>
            </div>

            {/* Grid dalších článků */}
            <div className="w-full max-w-6xl monitor:max-w-7xl mt-0 sm:mt-0 md:mt-4">
              <h3 className="text-white text-xl font-semibold mb-6">
                Další příspěvky
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 monitor:gap-10">
                {otherArticles.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setActive(item)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative group cursor-pointer rounded-xl bg-white/5 hover:bg-white/10 overflow-hidden shadow-lg transition"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover monitor:object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5 monitor:p-6 space-y-1.5 monitor:space-y-2 text-white">
                      <span className="inline-block border-neonPink border-2 text-white px-2 py-0.5 rounded-full text-xs font-semibold mb-1">
                        {item.category}
                      </span>
                      <p className="text-xs text-gray-400">{item.date}</p>
                      <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mt-2">{item.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile aside: zobrazit až pod gridem */}
              <div className="block lg:hidden mt-11 sm:mt-11 md:mt-6">
                <AsideContent
                  showFilter={showFilter}
                  setShowFilter={setShowFilter}
                  filterYear={filterYear}
                  setFilterYear={setFilterYear}
                  filterMonth={filterMonth}
                  setFilterMonth={setFilterMonth}
                  filterCategory={filterCategory}
                  setFilterCategory={setFilterCategory}
                  categories={categories}
                  filteredNews={filteredNews}
                  setActive={setActive}
                  wrapperClassName={"w-full"}
                  search={search}
                  setSearch={setSearch}
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Modal */}
      <AnimatePresence>
              {active && (
                <motion.div
                  key="modal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setActive(null)}
                >
                  {/* --- Close button (desktop) --- */}
                  <button
                    className="absolute hidden lg:flex right-5 top-5 text-white hover:text-gray-300 transition z-20"
                    onClick={() => setActive(null)}
                  >
                    <X className="w-8 h-8" />
                  </button>
      
                  {/* --- Modal content --- */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: isLargeScreen ? 1.15 : 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative bg-neutral-900 text-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* HERO image section */}
                    <div className="relative h-64 sm:h-64 md:h-80 monitor:h-96 w-full">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        className="object-cover object-top"
                      />
                      {/* Mobile close button */}
                      <button
                        onClick={() => setActive(null)}
                        className="absolute top-2 right-2 lg:hidden flex items-center justify-center px-2 py-2 rounded-full bg-black/70 text-white hover:text-gray-300 transition shadow-md z-20"
                        aria-label="Zavřít článek"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
      
                    {/* CONTENT section */}
                    <div className="bg-neutral-800 p-6 max-h-[270px] overflow-y-auto space-y-4">
                      <span className="inline-block border-neonPink border-2 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                        {active.category}
                      </span>
                      <p className="text-sm text-gray-400">{active.date}</p>
                      <h2 className="text-2xl font-bold">{active.title}</h2>
                      <p className="text-gray-200 whitespace-pre-wrap">{active.content}</p>
                      {active.link && (
                        <a
                          href={active.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 text-sm mt-3 text-neonPink hover:underline"
                        >
                          Více zde <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              )}
      </AnimatePresence>
    </>
  );
}