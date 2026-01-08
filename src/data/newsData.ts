export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  link?: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: 11,
    title: "Autokemp Sečská přehrada",
    date: "18. července 2025",
    image: "/assets/images/news/sec.jpg",
    excerpt: "Přesně to, co máme rádi. Malý letní stage, výhled na vodu, pivko na dosah, lidi, co přišli za hudbou...",
    content:
      "Přesně to, co máme rádi. Malý letní stage, výhled na vodu, pivko na dosah, lidi, co přišli za hudbou. A atmosféra, která se nedá naplánovat – jen zažít.\n\n" +
      "DASI bar v autokempu Seč se včera proměnil v rockovej klub. Martina naplno, Ivan jak motorová pila, a my ostatní jsme si to dali, jak nejlíp umíme. Díky @všichni, kdo přišli, zpívali, stáli vepředu i vzadu.",      
    link: "https://www.facebook.com/waitbandcz",
    category: "Koncert",
  },
  {
    id: 10,
    title: "Merch WAIT je na cestě",
    date: "16. června 2025",
    image: "/assets/images/news/merch.jpg",
    excerpt: "Máme připravené 3 varianty triček a zajímá nás, která se vám líbí nejvíc? 👕👩‍🎤👨‍🎤",
    content:
      "Máme připravené 3 varianty triček a zajímá nás, která se vám líbí nejvíc? 👕👩‍🎤👨‍🎤\n\n" +
      "➡️ Pánská edice: \n"+
      "„James“ – klasika. \n"+
      "„Kid“ – outlaw. \n\n"+      
      "➡️ Dámská edice: \n"+
      "„Kat“ – nepřehlédnutelná. \n\n"+      
      "👇 Napište nám do komentářů – „James“, „Kid“ nebo „Kat“ – a dejte vědět, jestli by vás zajímala limitovaná předobjednávka. \n"+
      "(Bude to poctivá bavlna, sítotisk, a střih, který fakt sedí – žádný reklamní hadr.) \n\n"+      
      "Born to Rock. Forced to Work. \n"+
      "Ale tričko si vyberte sami. 😎 \n"+
      "Díky, že jste s náma! 🖤",
    link: "https://www.facebook.com/waitbandcz",
    category: "Merch",
  },
  {
    id: 9,
    title: "Východočeské divadlo Pardubice",
    date: "26. března 2025",
    image: "/assets/images/news/divadlo.jpg",
    excerpt: "V sobotu – jako “midnight special” jednu krásnou akci ve Východočeském Divadle Pardubice",
    content:
      "V sobotu hrajeme jako “midnight special” jednu krásnou akci ve Východočeském Divadle Pardubice (Velký výroční bál VČD) a napadlo nás oprášit jeden popový song “Modelka”. \n\n"+
      "Video k němu natočil / režíroval skvělý kytarista a “rejža” Djamin Kandoussi, kterému posíláme poděkování a velkou zdravici do nebeských výšin. \n\n"+
      "To natáčení bylo strašně fajn, nejde zapomenout.\n\n"+
      "Ivan Tejkl / Ondřej Littera / Martina Panchártková jako krásná Hilda/ Paolo Anachronic v roli slizkého Ricca Coccicione/ Ivan Kučera / Jaroslav Samek / Marek Kopecký / a další…..Východočeské divadlo Pardubice",
    link: "https://www.facebook.com/waitbandcz",
    category: "Koncert",
  },
  {
    id: 8,
    title: "Hard Rock Cafe Praha",
    date: "18. ledna 2025",
    image: "/assets/images/news/cafePraha.jpg",
    excerpt: "Včerejší Hard Rock Cafe Praha naprostá pecka...",
    content:
      "Včerejší Hard Rock Cafe Praha naprostá pecka. \n\n"+
      "Děkujeme \n"+
      "Martina Panchártková \n"+
      "Marek Kopecký \n"+
      "Ivan Kučera \n"+
      "Paolo Anachronic \n"+
      "& Franta Novak",
    link: "https://www.facebook.com/waitbandcz",
    category: "Koncert",
  },
  {
    id: 7,
    title: "Krásné vánoční svátky 🎄🎅 všem, a hlavně pohodu & klídek. 😎",
    date: "23. prosince 2024",
    image: "/assets/images/news/prani.jpg",
    excerpt: "Krásné vánoční svátky 🎄🎅 všem, a hlavně pohodu & klídek. 😎",
    content:
      "Martina Panchártková\n"+
      "Ivan Kučera \n"+
      "Marek Kopecký \n"+
      "Paolo Anachronic \n"+
      "& crew \n"+
      "Franta Novak (sound 🎚️🔊) \n"+
      "Tomáš Marks (🔥fire/🌁fog) \n"+
      "Andrea Anďas (photo 📸) \n"+
      "& mnozí další…. 💪🏻",
    link: "https://www.facebook.com/waitbandcz",
    category: "Info",
  },
  {
    id: 6,
    title: "Zastihla nás před Vánoci velmi smutná zpráva",
    date: "22. prosince 2024",
    image: "/assets/images/news/rozlouceni.jpg",
    excerpt: "Zastihla nás před Vánoci velmi smutná zpráva",
    content:
      "Dnes odešel kamarád Djamin Kandoussi, vynikající kytarista skupin Distorze, Hever, Kuličky a dalších. \n\n"+
      "V Distorzí hrál Djamin s Ivan Kučera a Jaroslav Samek a v té době to byla česká špička thrash metalu. \n\n"+
      "Pro WAIT natočil videoklipy Modelka, Hate You a Horoskop. \n\n"+
      "Byl to moc fajn kluk, profík a nikdy nezkazil žádnou legraci. Měli jsme Djamina moc rádi a bude nám chybět. \n\n"+
      "Mnoho sil rodině a blízkým. 😢 \n\n"+
      "Jedna z věcí, kterou pro nás Djamina udělal je zde:",
    link: "https://www.youtube.com/watch?v=8Tupra8tJiY",
    category: "Info",
  },
  {
    id: 5,
    title: "Pamatujete skvělý 📺 pořad “Noc s Andělem”?",
    date: "30. listopadu 2024",
    image: "/assets/images/news/andel.jpeg",
    excerpt: "Pamatujete skvělý 📺 pořad “Noc s Andělem”?",
    content:
      "Dnes se to jmenuje “Andělská Noc”. \n\n"+
      "Pavel Anděl to dělá parádně, ale jistá televize aktuálně přišla o vysílací licenci, tak to asi jen tak neuvidíte - takže alespoň “repráky hýýýýr” 😜🤷🏻‍♂️😉😛 na YT kanále WAIT.",
    link: "https://www.youtube.com/watch?v=x_XWIT7Hd0Q",
    category: "Info",
  },
  {
    id: 4,
    title: "My u Miloš Knor, to bylo prostě fajn",
    date: "28. listopadu 2024",
    image: "/assets/images/news/knor.jpg",
    excerpt: "My u Miloše Knora, to bylo prostě fajn",
    content: "💪🏻🍀🙏😎",
    link: "https://www.youtube.com/watch?v=w4Xn_DzsC6o",
    category: "Koncert",
  },
  {
    id: 3,
    title: "WAIT v ateliéru Klose",
    date: "23. listopadu 2024",
    image: "/assets/images/news/klose.jpg",
    excerpt: "WAIT v ateliéru Klose",
    content:
      "Některé večery a koncerty jsou opravdu speciální a tenhle mezi ně rozhodně patřil. ❤️‍🔥 \n\n"+
      "Velké poděkování všem, kdo jste nás poctili návštěvou a pomohli nám pokřtít nové album největších pecek WAIT s názvem 15:15. \n\n"+
      "Ještě jednou obrovský dík Alici a Aleš Klose za možnost vystoupení u nich v ateliéru. \n\n"+
      "Martina Panchártková \n"+
      "Ivan Kučera \n"+
      "Marek Kopecký \n"+
      "Paolo Anachronic \n\n"+
      "Mistr zvuku Franta Novak \n"+
      "Foto 📸 Andrea Anďas",
    link: "https://www.facebook.com/waitbandcz",
    category: "Koncert",
  },
  {
    id: 2,
    title: "Už se to blíží 😻",
    date: "17. listopadu 2024",
    image: "/assets/images/news/blizi.jpg",
    excerpt: "Už se to blíží 😻",
    content:
      "Speciální předvánoční koncert WAIT v Pedubicích, v krásném prostředí Ateliéru Klose. (Na Haldě, Husova 214, 530 03, Pardubice). \n\n"+
      "🗓️ Čtvrtek 21.11, 19:00 \n"+
      "(Showtime 20:00h) \n\n"+
      "Kapela slaví 🥳🍾🥂 zároveň i 1️⃣5️⃣ let (někdy i dost komplikované ) existence a vydává album největších dosavadních pecek, nazvané příhodně “15:15”, které si budeš moct na koncertě pořídit. 💿🎁 \n\n"+
      "Vstupenky na místě (200 Kč) pro dobré místo přijď brzy, klub je malý. \n\n"+
      "Úžasní majitelé těchto krásných prostor Aleš Klose a Alice Klose pro vás mají na baru připravená luxusní vína 🍷, skvělé panáčky 🥃 a možná i nějakou lahvovou plzénku. \n\n"+
      "My moc děkujeme za možnost v jejich ateliéru tenhle speciální 🎵 koncert udělat. ❤️‍🔥",
    link: "https://www.facebook.com/waitbandcz",
    category: "Info",
  },
  {
    id: 1,
    title: "Areál Černá Voda",
    date: "10. srpna 2024",
    image: "/assets/images/news/areal.jpg",
    excerpt: "Areál Černá Voda",
    content:
      "Kaplička Fest 2024, děkujeméééé. \n"+
      "Byli jste úžasni a byla radost pro vás hrát. \n"+
      "Pardubáci - přijďte na 🍷🥂 Slavnosti Vína 2024 🍾 pátek 30/8 v 17:00, Zámek Pardubice 🔥🔝🤘🏻",
    link: "https://www.facebook.com/waitbandcz",
    category: "Koncert",
  },
];