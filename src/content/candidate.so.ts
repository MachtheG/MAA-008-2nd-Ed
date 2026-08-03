/**
 * SOMALI CONTENT — mirror of candidate.ts.
 *
 * ⚠️  TRANSLATION NOTE: English (candidate.ts) is authoritative. These strings
 * are a first-pass translation and MUST be reviewed by a native Somali
 * speaker before publishing — particularly the political and technical terms.
 *
 * Structural rule: ids, images, numbers and statuses MUST match candidate.ts
 * exactly. Only prose is translated. The `SiteContent` type enforces the shape.
 */

import type { SiteContent } from "./candidate";

const profile: SiteContent["profile"] = {
  name: "Mohamed Abdi Affey",
  office: "Guddoomiyaha Gobolka Wajir",
  bornYear: 1968,
  bornPlace: "Gobolka Wajir, Kenya",
  languages: ["Somali", "English", "Kiswahili"],
  education: [
    {
      degree: "Shahaada Master, Ilaalinta Khilaafo Caalami",
      institution: "Jaamacada Nairobi",
    },
    {
      degree: "Shahaada Bachelor, Cilmiga Bulshada iyo Ilmiga Siyaasada",
      institution: "Jaamacada Kenyatta",
    },
  ],
  slogan: { value: "Wajir Hore, Ilaa Calaacal", status: "verified" },
};

const storyIntro =
  "Waxaa jira yar yar oo Kenyano ah oo gaarka aha oo geedo magaalada ay ka wadataan miisaska badan sida Mohamed Abdi Affey. Laga bilaabo halka qofka yar ah oo ah meel ku jirtay Golaha Wakiilada markii uu jir 27 jir, moogga safarada Mogadishu, meel looga hadlayo nabadda iyo qaxootiga Geesiga Afrika, waxaa isugu jirtay waxyaabaha kale: inuu ka agitaalo dadkiisa meesha ay muuqaalada lagu sameynayo. Taasu waa habka oo dhan — iyo sida ay iska laabashay Wajir u noqotay.";

const storyChapters: SiteContent["storyChapters"] = [
  {
    id: "origins",
    eyebrow: "Wajir, 1968",
    heading: "Cuqa Waqooyi",
    body: [
      "Mohamed Abdi Affey waxaa lagu dhashay sanadka 1968 gobolka Wajir, waqooyi-xagga Kenya oo lehba abaarta — dal ka kooban niman hore ay isku ileeyaan, qoymo ay ku dhex nool yihiin, iyo maalgacnimo yar oo haweeye ah.",
      "Koonfur ta ay soo dhashay waxay ku tusi kartaa caqabada oo gumaysatay nolasha bulshada: runta ay tahay in reer waqooyi ay leeyihiin buug, iyo codka, meel kasta oo lagu go'aaminayo mustaqbalkooda.",
    ],
    image: "/images/MohamedA02.jpeg",
    status: "verified",
  },
  {
    id: "parliament",
    eyebrow: "1997 · 27 jir",
    heading: "Cod yar oo cabsi leh oo Golaha ku jira",
    body: [
      "Sanadka 1997 Affey waxaa lagu saxiibaystay inuu noqdo Wakilka Wajir Koonfur isagoo ah KANU — 27 jir, mid ka mid ah dadka yar ee ah oo lagu saxiibaystay Golaha Wakiilada ee Kenya.",
      "Waxuu u adeegay degmada yar ilaa 2002, iyo isagoo isla wakhtigaa u lumayn hawlgalka Naibd Wazir ee Wasaarada Arrimaha Dibadda — jid loogu imaanbixi karo oo u dhaxeysa wakiilnimada bulshada iyo dhismahda serigada Kenya.",
    ],
    image: "/images/MohamedA03.jpeg",
    status: "verified",
  },
  {
    id: "ambassador",
    eyebrow: "2003–2007",
    heading: "Ergada Kenya oo ka shaqo Somalia",
    body: [
      "Oo lagu doortay Madaxweyne Mwai Kibaki, Affey waxuu u adeegay sidii Ergada Kenya ee Somalia laga bilaabo 2003 ilaa 2007 — wakilka Kenya u ah dalka jiidda oo jiida ah waxqabadka muhiim ah ee gobolka.",
      "Taasu waa mesha ay is-wareegtay diplomasiyada, ammaanka iyo badqabka reer gobol katika hawlgelinta — jeerarka oo ay dhacda waxa ay u kaliftay markii hore.",
    ],
    image: "/images/MohamedA04.jpeg",
    status: "verified",
  },
  {
    id: "return-parliament",
    eyebrow: "2008–2013",
    heading: "Ku noqoshada Golaha, codka qaraniga",
    body: [
      "Affey waxuu ku noqday Golaha oo Wakilka Xeriya ah ee ODM-Kenya, isagoo marmar si Calaacal ah u leh reer waqooyi buug meel ka mid ah hadalka qaraniga.",
    ],
    image: "/images/MohamedA05.jpeg",
    status: "verified",
  },
  {
    id: "envoy",
    eyebrow: "Adeegta Gobolka iyo Caalami",
    heading: "Nabada, iyo dadka ay geesiga luubinayso",
    body: [
      "Wuxuu sii adeegay sidii Ergada Gaar ah ee IGAD ee ka shaqo Somalia, isagoo wada jira horumarinta ammaanka gobolka, iyo sidii Ergada Gaar ah ee UNHCR ee Geesiga Afrika iyo xaalka aqoonxumada Somaliyeed — isagoo shaqaynaya dhexdhexaadka mid ka mid ah ayaan baab iyo daacad ee aqoonxuma caalamiga ah.",
      "Marba marba howsahaa oo ay sheegto ay u fadheyd caqabdo, nabada iyo nolol iyo horumarinta reer gobol Geesiga siyo layskagudb magaalooyin haddii kale ay leeyihiin ujeedada mid oo kale.",
    ],
    image: "/images/MohamedA06.jpeg",
    status: "verified",
  },
  {
    id: "home",
    eyebrow: "Hadda",
    heading: "Adeegta ay noqotay guriga",
    body: [
      "[SUURTAGAL — tixgeli kahor oo ay daabacdo.] Hadda Mohamed Abdi Affey wuxuu keenayaa sodon sanadood oo adeegta ah meesha ay ku jiraan meeshaha sare ee qaraniga iyo caalami meesha ay bilaabatay — Wajir. Dagaalkiisa ee guddoominimada wuxuu weydiiyi karta su'aal fudud — adeegta taasu waxay dhisi kartaa, haddii la isticmaalo guriga?",
    ],
    image: "/images/MohamedA07.jpeg",
    status: "draft",
  },
];

const timeline: SiteContent["timeline"] = [
  { id: "born", year: "1968", title: "Lagu dhashay Gobolka Wajir", detail: "Lagu dhashay waqooyi-xagga gaarka ah oo abaarta — gobolka uu hadda doonayo inuu hoggaaminyo.", status: "verified" },
  { id: "mp", year: "1997", title: "Lagu saxiibaystay Wakilka, Wajir Koonfur — 27 jir", detail: "Mid ka mid ah dadka yar ee ah oo lagu saxiibaystay Golaha Wakiilada Kenya, isagoo KANU. Uu u adeegay ilaa 2002.", status: "verified" },
  { id: "dep-min", year: "1997–2002", title: "Naibd Wazir, Arrimaha Dibadda", detail: "Wuxuu u adeegay Wasaarada Arrimaha Dibadda ee Kenya.", status: "verified" },
  { id: "amb", year: "2003–2007", title: "Ergada Somalia", detail: "Wuxuu lagu doortay Madaxweyne Mwai Kibaki inuu noqdo Ergada Kenya ee Somalia.", status: "verified" },
  { id: "nom-mp", year: "2008–2013", title: "Wakilka Xeriya ah", detail: "Wuxuu ku noqday Golaha oo Wakilka Xeriya ah ee ODM-Kenya.", status: "verified" },
  { id: "igad", year: "Adeegta", title: "Ergada Gaar ah ee IGAD ee ka shaqo Somalia", detail: "Ergada Gaar ah ee Somalia ee Aqalka Maamulka Gobolka (IGAD).", status: "verified" },
  { id: "unhcr", year: "Adeegta", title: "Ergada Gaar ah ee UNHCR, Geesiga Afrika", detail: "Ergada Gaar ah ee Geesiga Afrika iyo xaalka aqoonxumada Somaliyeed.", status: "verified" },
  { id: "gov", year: "Hadda", title: "Kandidaatiga Guddoomiyaha Gobolka Wajir", detail: "[TBC] Tixgeli maalinta dhaafitaanka, xisbiga, kandidaatiga kale iyo aasaasaha kahor oo ay daabacdo.", status: "tbc" },
];

const visionIntro =
  "Shan guud ee Gobolka Wajir — oo lagu saleysan yahay runta ab noolol gaarka ah iyo u dhawaawinta, iyo sodon sanadood oo adeegta qaraniga iyo caalami. Taasu waa tumayada ay hoggaaminayso howsaha kampein ee dhisid iyo xoojin gobolkeenna.";

const visionPillars: SiteContent["visionPillars"] = [
  {
    id: "water",
    number: "01",
    title: "Biyo iyo xoojinta abaarta",
    promise: "Biyo joogta ah la dhiga xuquuq, maadaama ay tahay raadsiga maalintii — gobol oo dhan.",
    points: [
      "Ballaadhi iyo kormeeri kummeelaha, dayuurada cambuuga, dambiyada biyo iyo nidaama tubes gobol oo dhan.",
      "Qorshaha waxtar leh ee ku adkaatay abaarta si la'aan qof walbo iyo xoolo laguuguuq waayo.",
      "Layni: gobol 500 oo cusub ee biyo ilaa 2027, iyo kamiyada kormeerta bulshada ee kasta goobaad.",
    ],
    status: "verified",
  },
  {
    id: "livestock",
    number: "02",
    title: "Xoolo iyo dhaqalaha dhaqanka xoolaha",
    promise: "Xoolo-balanli qiyamta Wajir — laga biidarida ilaa horumarida.",
    points: [
      "Maalgacnimo suuqyo, xarumaha qallalijinta, sootirisda qaboowga, ilaalinta cudurka iyo furaha suuqa dibadda.",
      "Qimayn macquul iyo adeegyo cusub ee xoolaha ee qoyimaha dhaqanka.",
      "Bilaabinta xarumaha 3 ee gobolka suuqa xoolaha oo leh heer qalubka iyo dhabarka qimaynta macquulka.",
    ],
    status: "verified",
  },
  {
    id: "health",
    number: "03",
    title: "Caafimaad u dhow guriga",
    promise: "Adeegyo casri oo gaarka oo u baahan qof walba.",
    points: [
      "Xiraya aalado iyo shaqaale ku jira xarumaha caafimaad; xoojinta caafimaada gabar iyo ilmo.",
      "Adeegyo iska hubka ah ee lajin, baabuurta emerjensiga iyo gaarsiga qoyimaha fog.",
      "Icmarinta in meesha bunge 6 oo dhan ay leedahay xarumaha caafimaad oo ay shaqaale burburka oo ay dhedig ka jiraan iyo adeegyo ambulansiyada.",
    ],
    status: "verified",
  },
  {
    id: "education",
    number: "04",
    title: "Waxbarashada iyo xirfadda",
    promise: "Ilmo kasta oo Wajir ah oo ay heysato furan; yurub kasta oo ay heysato jid.",
    points: [
      "Caasimad ku siiya ECDE iyo qardhaas; ballaadhi TVET iyo xirfadda gacmeed.",
      "Heshiisi ballan guraaca macallimka iyo natiijada bartida meelo goobaad ah.",
      "Sanduuqa qaardhaasida oo dhan shillin milyuun 50 sanadka ah ee ardayda dibniyada iyo jaamacada; xarumaha 2 oo cusub ee TVET.",
    ],
    status: "verified",
  },
  {
    id: "roads",
    number: "05",
    title: "Jidada iyo xidhiidhka",
    promise: "Xidhiidhka Wajir — iyo naf, iyo Kenya, iyo furaha.",
    points: [
      "Siida kaliyada jidaha sannadkii oo la isku xidhiidha goobaad, suuqyo iyo adeegyo.",
      "Ballaadhi umeme iyo xidhiidhka dijitaalka oon oly gaarka oo cusub.",
      "Kormeeri kilomita 300 oo jidaha kaliyada ilaa kana sannadkii; gaarsida intaaneyga dhiban meela goobaad oo dhan.",
    ],
    status: "verified",
  },
  {
    id: "peace",
    number: "06",
    title: "Nabad, ammaan iyo marfaaca casri",
    promise: "Alwaaxda weyn ee gobolka, hoggaaminaysa gacan leh xirfadda badan.",
    points: [
      "Dhisida nabad iyo is-warreersi oo hoggaaminaysa qoymo — iska adigoo isticmaala waxqabada nolsha ee u dulqaadka khilaafo.",
      "Maamulka gobolka oo furan iyo iska dhawaaqma isaga siiyana qiyamta shillin kasta.",
      "Bilaabinta guddiga nabad gobolka; raacista miski furan; daabacida warbixinta qabka kasta oo 3 bilood.",
    ],
    status: "verified",
  },
];

const recordVerified: SiteContent["recordVerified"] = [
  { title: "Lagu saxiibaystay Wakilka 27 jir", detail: "Hamiga yar ee ah oo lagu saxiibaystay Golaha Wakiilada Kenya (Wajir Koonfur, 1997)." },
  { title: "Naibd Wazir, Arrimaha Dibadda", detail: "Wuxuu u adeegay wasaarada arrimaha dibadda Kenya, 1997–2002." },
  { title: "Ergada Somalia", detail: "Wakilka Kenya ee Somalia, 2003–2007, oo uu lagu doortay Madaxweyne Kibaki." },
  { title: "Wakilka Xeriya ah", detail: "Wuxuu ku noqday Golaha ODM-Kenya, 2008–2013." },
  { title: "Ergada Gaar ah ee IGAD ee ka shaqo Somalia", detail: "Wuxuu wada jira nabad-galadka gobolka oo uu aqalka IGAD." },
  { title: "Ergada Gaar ah ee UNHCR, Geesiga Afrika", detail: "Wuxuu hoggaamiyo jalooca aqoonxumada Somaliyeed gobol oo dhan.", },
];

const countyAchievements: SiteContent["countyAchievements"] = [
  { title: "Qorshe ku tiirsanida abaarta", detail: "Wuxuu hogga jirray waxqabada aan abaarta oo hoggaaminaysa bulshada Wajir 2016-2017, waxoo yaree dhimaca xoolaha asilimaha 40 meela target lagu ah oo ay biyo iyo caruus la dhawaajisay." },
  { title: "Qorshaha nabad bulshada", detail: "Wuxuu bilaabay Forum Nabada gobolka Wajir oo ay wada shaqaan reer xoolo, isagoo xal u geystay khilaafo 12 qoymo iyo bilaabista hadal is-waageystay meelo bunge 4." },
  { title: "Barnamijyo waxbarashada", detail: "Wuxuu u taageerstay funduska waxbarashada ee ay sida ardayda 800 laga mid ah qoyimaha hore ay soo qaatay waxbarashada dibniya iyo jaamacada laga bilaabo 2010." },
  { title: "Qorshehe adeegyo caafimaad", detail: "Wuxuu isku fuliyay hawlgalka caafimaad ee ay soo dhiibatay adeegyo caafimaada gabar iyo ilmo meela goobaad 8 fog, isagoo gaarsiga gabar iyo ilmo dhawr kun sanadka." },
  { title: "Horumarinta sootirisda qiyamta xoolaha", detail: "Wuxuu caasimood bilaabista meelo iska yar 3 ee adeegu suuqa xoolaha, isagoo boreysay suurtagalka suuqa iyo qimaynta macquulka qoyimaha xoolo 2,400." },
  { title: "Eedeynta yurub gaarka", detail: "Wuxuu salaama badiya yurub 200 oo Wajir ah ee bilaabista biashada iyo sida ay heleen shillin milyuun 45 ee aabuusta biashada yurub gobol oo dhan." },
];

const constituencies: SiteContent["constituencies"] = [
  { id: "wajir-north", name: "Wajir Waqooyi", note: "Asha guud: horumarinta suuqyo xoolaha, sootirisda biyo, tababar ujuud yurub. Xidhiidhka: John Yusuf — john.yusuf@campaign.ke", population: 130070, voters: 27636, status: "verified" },
  { id: "wajir-east", name: "Wajir Bari", note: "Degmada Affey hore (Wakilka, 1997–2002). Asha guud: boreysida xarumaha caafimaad, jidada sannadkii, ballaadhi TVET. Xidhiidhka: Fatima Hassan — f.hassan@campaign.ke", population: 112572, voters: 17517, status: "verified" },
  { id: "wajir-south", name: "Wajir Koonfur", note: "Asha guud: xoojinta abaarta, u xoojiyta kooxo xoolo, sida waxbarashada. Xidhiidhka: Mohamed Osman — m.osman@campaign.ke", population: 130070, voters: 27636, status: "verified" },
  { id: "wajir-west", name: "Wajir Galbeed", note: "Asha guud: kormeera dayuurada biyo, ilaalinta cudurka xoolaha, kooxo gaarka oo bay. Xidhiidhka: Amina Ali — amina.ali@campaign.ke", population: 91143, voters: 20400, status: "verified" },
  { id: "eldas", name: "Eldas", note: "Asha guud: sootirisda suuqyo, klinik caafimaad oo socota, forum nabad bulshada. Xidhiidhka: Hassan Mohamed — h.mohamed@campaign.ke", population: 80805, voters: 13677, status: "verified" },
  { id: "tarbaj", name: "Tarbaj", note: "Asha guud: kummeelaha biyo iyo nidaama, dhaqalaha xoolaha, aabuusta waxbarashada. Xidhiidhka: Saada Ibrahim — s.ibrahim@campaign.ke", population: 111846, voters: 17061, status: "verified" },
];

const newsItems: SiteContent["newsItems"] = [
  { id: "n1", kind: "News", title: "Affey bilaabay kampeinkaaga guddoominimada Wajir", date: "Luulyo 15, 2024", excerpt: "Mohamed Abdi Affey wuxuu ku dhawaajisay rasmiyada guddoominimada Gobolka Wajir, isagoo miina waad inuu keen karo sodon sanadood oo adeegta qaraniga iyo caalami ee u adeega gobolkiisa.", status: "verified" },
  { id: "e1", kind: "Event", title: "Shirka kampeinika — Magaalada Wajir", date: "Agosto 2, 2024", excerpt: "Ku lug leh shirka bilaabita kampeinika magaalada Wajir. Kulan la kandidaatiga, barrista diray Wajir, iyo noqo qaybta harakada. Albaabadu way bubujiyed saa 3 subaxnimada.", status: "verified" },
  { id: "n2", kind: "News", title: "Hormuudka nabada oo taageera diray kampeinika", date: "Luulyo 28, 2024", excerpt: "Is-waagta hormuudka nabada 12 oo bulshada ku jira gobol oo dhan oo Wajir ay taageestay diray Mohamed Abdi Affey ee nabad iyo horumarinta, isagoo yidhaahda waxqabadkiisa xal-urinta khilaafo.", status: "verified" },
  { id: "e2", kind: "Event", title: "Hadalo goobaad — Khorof Hamar", date: "Agosto 5, 2024", excerpt: "Hadalo bulshada Khorof Hamar ee sahibka biyo, xoolo iyo asha goobaad. Waktu bilaab: saa 3 galabnimada ee ofisiga goobaad. Cabinta la siiyey.", status: "verified" },
  { id: "n3", kind: "News", title: "Caasimad yurub oo aasaasatay taageera kampeinika", date: "Agosto 1, 2024", excerpt: "Yurub 200 oo Wajir ah oo aasaasatay Caasimada Yurub Wajir, ay niyad gelin si ay iska qabsadaan nyumba nyumba iyo sida ay la gaaraan dadka dijitaal meelo bunge 6 oo dhan.", status: "verified" },
  { id: "e3", kind: "Event", title: "Bilaabita shabaka gabar — Wajir Bari", date: "Agosto 8, 2024", excerpt: "Shabaka Gabar Wajir oo sameysta shirkeeda kowaad meela bunge Wajir Bari. Hadalo sahibka caafimaad, waxbarashada iyo furaha gaarka. Saa 8 galabnimada ee xarumaha caafimaad Wajir Bari.", status: "verified" },
];

export const contentSo: SiteContent = {
  profile,
  storyIntro,
  storyChapters,
  timeline,
  visionIntro,
  visionPillars,
  recordVerified,
  countyAchievements,
  constituencies,
  newsItems,
};
