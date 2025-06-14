import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Podmínky a pravidla - Wait",
    description: "TermsAndConditions page by create next app",  
}

export default function TermsAndConditionsPage(){
    return (
        <>
            <Navbar initialActiveLink=""/>

            <section className="min-h-screen w-full relative p-28 text-white">
                <h1 className="text-2xl font-bold">Podmínky a pravidla</h1>
                <p>Datum účinnosti: 23. listopadu 2024</p>

                <p>Vítejte na našich webových stránkách. Předtím, než začnete používat naši službu, prosím pečlivě si přečtěte tyto Podmínky užívání. Používáním našich stránek souhlasíte s těmito podmínkami. Pokud s nimi nesouhlasíte, prosím naše stránky nepoužívejte.</p>

                <p>Naše webové stránky jsou určeny pro osobní a nekomerční použití. Souhlasíte s tím, že budete používat naše služby pouze v souladu s platnými právními předpisy a těmito podmínkami. Nezískávejte data nebo obsah z našich stránek jinými než povolenými způsoby. Nepoužívejte stránky pro nelegální nebo zakázané účely. Respektujte veškerá autorská práva a ochranné známky na našich stránkách.</p>

                <p>Pro přístup k určitým funkcím našich stránek se můžete zaregistrovat a vytvořit si účet. Jste odpovědní za zachování důvěrnosti vašich přihlašovacích údajů a za všechny aktivity prováděné pod vaším účtem. Pokud máte podezření, že váš účet byl zneužit, okamžitě nás kontaktujte.</p>

                <p>Vaše soukromí je pro nás důležité. Informace o tom, jak shromažďujeme, používáme a chráníme vaše osobní údaje, najdete v naší <a href="#">Politice ochrany osobních údajů</a>.</p>

                <p>Naše stránky jsou poskytovány &quot;tak jak jsou&quot; a neudělujeme žádné záruky ohledně jejich funkčnosti nebo dostupnosti. Nezodpovídáme za žádné škody, které mohou vzniknout používáním našich stránek nebo služeb. Rovněž neneseme odpovědnost za obsah třetích stran, který může být zpřístupněn prostřednictvím našich stránek.</p>

                <p>Vyhrazujeme si právo kdykoli změnit nebo aktualizovat tyto podmínky. Jakékoli změny budou zveřejněny na této stránce a budou účinné okamžitě po jejich zveřejnění. Doporučujeme vám pravidelně kontrolovat tuto stránku, abyste byli informováni o aktuálních podmínkách.</p>

                <p>Pokud máte jakékoli dotazy ohledně těchto podmínek, neváhejte nás kontaktovat na našich kontaktních údajích uvedených na webových stránkách.</p>
            </section>

            <Footer />
        </>
    );
}