import { newsData } from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import texture from "../../../../public/assets/textures/texture.jpg";
import SideAccentLine from "@/components/sideAccentLine/SideAccentLine";
import { SecondaryActionButton } from "@/components/secondaryActionButton/SecondaryActionButton";

interface Props {
  params: Promise<{ slug: string }>; // Definice pro moderní Next.js
}

export const metadata: Metadata = {
  title: "Novinky | Wait",
  description: "Wait Official page by create next app",
  icons: {
    icon:['/favicon.ico?v=5'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const article = newsData.find((item) => item.slug === slug);    

  if (!article) {
    notFound(); // Zobrazí 404
  }
    
  return (

    <>    
      <SideAccentLine targetId="news-detail" />

      <div
        className="relative w-full min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.60), rgba(20, 20, 20, 0.65)), url(${texture.src})`, }}
      >
        <section id="news-detail" className="relative max-w-4xl mx-auto px-6 sm:px-6 md:px-6 lg:px-0 gap-8 pt-[120px] pb-20 md:pb-24 text-white">
          {/* Tlačítko zpět */}
          <Link href="/novinky" className="inline-flex items-center gap-2 text-neonPink mb-8 hover:underline">
            <ArrowLeft size={20} /> Zpět na všechny novinky
          </Link>

          <article>
            <div className="relative h-[265px] sm:[300px] md:h-[500px] w-full mb-8 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover object-top" />
            </div>

            <span className="inline-block border-neonPink border-2 px-3 py-1 rounded-full text-xs font-medium mb-4">
              {article.category}
            </span>

            <p className="text-gray-400 mb-4">{article.date}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{article.title}</h1>

            <div className="text-lg text-gray-200 leading-relaxed whitespace-pre-wrap">
              {article.content}
            </div>

            {article.link && (
              <div className="mt-10">
                <SecondaryActionButton href={article.link} target="_blank">
                  Zobrazit na Facebooku
                </SecondaryActionButton>
              </div>
            )}
          </article>
        </section>
      </div>
    </>
  );
}