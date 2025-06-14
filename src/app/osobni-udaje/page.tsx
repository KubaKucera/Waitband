import { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Osobní údaje - Wait",
    description: "PrivacyPolicy page by create next app",  
}

export default function PrivacyPolicyPage(){
    return (
        <>
            <Navbar initialActiveLink=""/>

            <section className="relative min-h-screen w-full p-28 text-white">
                <h1 className="text-2xl font-bold">Zásady ochrany osobních údajů</h1>
                <p>Poslední aktualizace: 23. listopadu 2024</p>
                <p>Tato Zásada ochrany osobních údajů popisuje naše zásady a postupy při shromažďování, používání a zpřístupňování Vašich údajů, když používáte Službu, a informuje Vás o Vašich právech na ochranu soukromí a o tom, jak Vás zákon chrání.</p>
                <p>Vaše Osobní údaje používáme k poskytování a zlepšování Služby. Používáním Služby souhlasíte se shromažďováním a používáním informací v souladu s těmito Zásadami ochrany osobních údajů. Tyto Zásady byly vytvořeny s pomocí <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Generátoru zásad ochrany osobních údajů</a>.</p>
                <h2>Významy a definice</h2>
                <h3>Významy</h3>
                <p>Slova, jejichž počáteční písmeno je velké, mají významy definované podle následujících podmínek. Následující definice budou mít stejný význam, bez ohledu na to, zda se vyskytují v jednotném nebo množném čísle.</p>
                <h3>Definice</h3>
                <p>Pro účely těchto Zásad ochrany osobních údajů:</p>
                <ul>
                <li>
                <p><strong>Účet</strong> znamená jedinečný účet vytvořený pro Vás k přístupu do naší Služby nebo do jejích částí.</p>
                </li>
                <li>
                <p><strong>Partner</strong> znamená subjekt, který kontroluje, je kontrolován nebo je pod společnou kontrolou s jiným subjektem, kde „kontrola“ znamená vlastnictví 50 % nebo více akcií, podílového kapitálu nebo jiných cenných papírů oprávněných hlasovat na zvolení ředitelů nebo jiných řídících orgánů.</p>
                </li>
                <li>
                <p><strong>Společnost</strong> (označována jako „Společnost“, „My“, „Nás“ nebo „Naše“ v této smlouvě) se vztahuje na Waitband.</p>
                </li>
                <li>
                <p><strong>Cookies</strong> jsou malé soubory, které jsou umístěny na Vašem počítači, mobilním zařízení nebo jiném zařízení webovou stránkou, obsahující detaily Vaší historie prohlížení na této stránce mezi jejími mnoha využitími.</p>
                </li>
                <li>
                <p><strong>Země</strong> se vztahuje na: Česká republika</p>
                </li>
                <li>
                <p><strong>Zařízení</strong> znamená jakékoliv zařízení, které může přistupovat k Službě, jako je počítač, mobilní telefon nebo digitální tablet.</p>
                </li>
                <li>
                <p><strong>Osobní údaje</strong> jsou jakékoliv informace, které se vztahují k identifikované nebo identifikovatelné osobě.</p>
                </li>
                <li>
                <p><strong>Služba</strong> se vztahuje na Webovou stránku.</p>
                </li>
                <li>
                <p><strong>Poskytovatel služeb</strong> znamená jakoukoli fyzickou nebo právnickou osobu, která zpracovává data jménem Společnosti. Tato osoba se vztahuje na třetí strany nebo jednotlivce zaměstnané Společností k usnadnění Služby, poskytování Služby jménem Společnosti, provádění služeb souvisejících se Službou nebo pomoci Společnosti při analýze, jak je Služba používána.</p>
                </li>
                <li>
                <p><strong>Údaje o používání</strong> se vztahují na data shromažďovaná automaticky, buď generovaná používáním Služby, nebo z infrastruktury Služby samotné (například délka návštěvy stránky).</p>
                </li>
                <li>
                <p><strong>Webová stránka</strong> se vztahuje na Waitband, přístupné z <a href="localhost" rel="external nofollow noopener" target="_blank">localhost</a></p>
                </li>
                <li>
                <p><strong>Vy</strong> znamenáte jednotlivce, který přistupuje k Službě nebo ji používá, nebo společnost nebo jiný právní subjekt, za který tento jednotlivce přistupuje nebo používá Službu, pokud je to relevantní.</p>
                </li>
                </ul>
                <h2>Shromažďování a používání Vašich osobních údajů</h2>
                <h3>Typy shromažďovaných údajů</h3>
                <h4>Osobní údaje</h4>
                <p>Během používání naší Služby Vás můžeme požádat o poskytnutí určitých osobně identifikovatelných informací, které mohou být použity k Vašemu kontaktu nebo identifikaci. Osobně identifikovatelné informace mohou zahrnovat, ale nejsou omezeny na:</p>
                <ul>
                <li>
                <p>Emailová adresa</p>
                </li>
                <li>
                <p>Jméno a příjmení</p>
                </li>
                <li>
                <p>Údaje o používání</p>
                </li>
                </ul>
                <h4>Údaje o používání</h4>
                <p>Údaje o používání jsou shromažďovány automaticky při používání Služby.</p>
                <p>Údaje o používání mohou zahrnovat informace jako IP adresa Vašeho zařízení (např. IP adresa), typ prohlížeče, verze prohlížeče, stránky naší Služby, které navštívíte, čas a datum Vaší návštěvy, čas strávený na těchto stránkách, jedinečné identifikátory zařízení a další diagnostická data.</p>
                <p>Když přistupujete k Službě prostřednictvím mobilního zařízení, můžeme shromažďovat určité informace automaticky, včetně, ale ne omezeno na, typ mobilního zařízení, které používáte, jedinečný ID mobilního zařízení, IP adresu mobilního zařízení, operační systém mobilního zařízení, typ mobilního internetového prohlížeče, který používáte, jedinečné identifikátory zařízení a další diagnostická data.</p>
                <p>Také můžeme shromažďovat informace, které Váš prohlížeč odesílá vždy, když navštívíte naši Službu nebo když přistupujete k Službě prostřednictvím mobilního zařízení.</p>
                <h4>Technologie sledování a cookies</h4>
                <p>Používáme cookies a podobné technologie sledování k sledování aktivit naší Služby a k ukládání určitých informací. Technologie sledování, které používáme, zahrnují signály, značky a skripty k shromažďování a sledování informací a ke zlepšení a analýze naší Služby. Technologie, které používáme, mohou zahrnovat:</p>
                <ul>
                <li><strong>Cookies nebo cookies prohlížeče.</strong> Cookie je malý soubor umístěný na Vašem zařízení. Můžete instruovat svůj prohlížeč, aby odmítl všechny cookies nebo aby Vás informoval, kdy je cookie odesíláno. Pokud však cookies nepřijmete, nemusíte být schopni používat některé části naší Služby. Pokud jste nenastavili svůj prohlížeč tak, aby odmítal cookies, naše Služba může používat cookies.</li>
                <li><strong>Webové majáky.</strong> Některé části naší Služby a naše e-maily mohou obsahovat malé elektronické soubory známé jako webové majáky (také nazývané clear gifs, pixel tags a jednopixelové gifs), které umožňují Společnosti například spočítat uživatele, kteří navštívili tyto stránky nebo otevřeli e-mail, a pro jiné související webové statistiky (například zaznamenávání oblíbenosti určité sekce a ověření integrity systému a serveru).</li>
                </ul>
                <p>Cookies mohou být „trvalé“ nebo „sezení“ cookies. Trvalé cookies zůstávají na Vašem osobním počítači nebo mobilním zařízení, když se odpojíte, zatímco sezení cookies jsou smazány, jakmile zavřete svůj webový prohlížeč. Více informací o cookies naleznete v článku na <a href="https://www.termsfeed.com/blog/cookies/#What_Are_Cookies" target="_blank">TermsFeed</a>.</p>
                <p>Používáme jak trvalé, tak sezení cookies pro účely uvedené níže:</p>
                <ul>
                <li><strong>Nezbytné cookies:</strong> Tyto cookies jsou nezbytné pro poskytování Služby.</li>
                <li><strong>Výkonnostní cookies:</strong> Tyto cookies nám umožňují zlepšit výkon naší Služby a uživatelský zážitek.</li>
                <li><strong>Funkční cookies:</strong> Tyto cookies nám umožňují pamatovat si Vaše preference a zlepšit funkcionalitu Služby.</li>
                </ul>
                <h2>Použití Vašich osobních údajů</h2>
                <p>Společnost může používat osobní údaje pro následující účely:</p>
                <ul>
                <li>Poskytování a údržba našich služeb</li>
                <li>Oznámení o změnách našich služeb</li>
                <li>Poskytování zákaznické podpory</li>
                <li>Shromažďování analytických údajů k zlepšení našich služeb</li>
                <li>Kontrola používání našich služeb</li>
                <li>Prevence podvodů</li>
                <li>Správa Vašeho účtu</li>
                <li>Vytváření nových funkcí a rozšíření našich služeb</li>
                </ul>
            </section>

            <Footer />
        </>
    );
}