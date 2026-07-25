/**
 * KISWAHILI CONTENT — mirror of candidate.ts.
 *
 * ⚠️  TRANSLATION NOTE: English (candidate.ts) is authoritative. These strings
 * are a first-pass translation and MUST be reviewed by a native Kiswahili
 * speaker before publishing — particularly the political and technical terms
 * (ugavana, ufugaji, ustahimilivu wa ukame, TVET).
 *
 * Structural rule: ids, images, numbers and statuses MUST match candidate.ts
 * exactly. Only prose is translated. The `SiteContent` type enforces the shape.
 */

import type { SiteContent } from "./candidate";

const profile: SiteContent["profile"] = {
  name: "Mohamed Abdi Affey",
  office: "Gavana wa Kaunti ya Wajir",
  bornYear: 1968,
  bornPlace: "Kaunti ya Wajir, Kenya",
  languages: ["Kisomali", "Kiingereza", "Kiswahili"],
  education: [
    {
      degree: "Shahada ya Uzamili, Usimamizi wa Migogoro ya Kimataifa",
      institution: "Chuo Kikuu cha Nairobi",
    },
    {
      degree: "Shahada ya Kwanza, Sosholojia na Sayansi ya Siasa",
      institution: "Chuo Kikuu cha Kenyatta",
    },
  ],
  slogan: { value: "Wajir Kwanza, Daima", status: "verified" },
};

const storyIntro =
  "Ni Wakenya wachache waliobeba jina la kaunti yao katika meza nyingi kama Mohamed Abdi Affey. Kutoka sakafu ya Bunge akiwa na miaka ishirini na saba, hadi kumbi za ubalozi Mogadishu, hadi mazungumzo ya amani na wakimbizi ya Pembe ya Afrika, kazi yake imefuata njia moja: kuwakilisha watu wake pale maamuzi yanapofanywa. Hii ndiyo hadithi hiyo — na kwa nini sasa inarudi nyumbani Wajir.";

const storyChapters: SiteContent["storyChapters"] = [
  {
    id: "origins",
    eyebrow: "Wajir, 1968",
    heading: "Mwana wa kaskazini",
    body: [
      "Mohamed Abdi Affey alizaliwa mwaka 1968 katika Kaunti ya Wajir, kaskazini-mashariki mwa Kenya penye ukame — nchi ya ustahimilivu wa wafugaji, jamii yenye mshikamano, na uwekezaji mdogo wa muda mrefu.",
      "Malezi hayo yalijenga imani iliyofafanua maisha yake ya umma: kwamba jamii za kaskazini zinastahili kiti, na sauti, katika kila meza ambapo mustakabali wao unaamuliwa.",
    ],
    image: "/images/MohamedA02.jpeg",
    status: "verified",
  },
  {
    id: "parliament",
    eyebrow: "1997 · Umri wa miaka 27",
    heading: "Sauti changa zaidi Bungeni",
    body: [
      "Mwaka 1997 Affey alichaguliwa kuwa Mbunge wa Wajir Kusini kwa tiketi ya KANU — akiwa na miaka ishirini na saba, mmoja wa watu wachanga zaidi kuwahi kuchaguliwa katika Bunge la Kenya.",
      "Alihudumia eneo bunge hilo hadi 2002, na katika kipindi hicho hicho alishika wadhifa wa Naibu Waziri katika Wizara ya Mambo ya Nje — daraja la mapema kati ya uwakilishi wa mashinani na mfumo wa serikali ya Kenya.",
    ],
    image: "/images/MohamedA03.jpeg",
    status: "verified",
  },
  {
    id: "ambassador",
    eyebrow: "2003–2007",
    heading: "Balozi wa Kenya nchini Somalia",
    body: [
      "Akiteuliwa na Rais Mwai Kibaki, Affey alihudumu kama Balozi wa Kenya nchini Somalia kuanzia 2003 hadi 2007 — akiliwakilisha taifa kwa jirani yake mgumu zaidi katika kipindi muhimu cha eneo hilo.",
      "Ni hapa ambapo diplomasia, usalama na ustawi wa jamii za mpakani vilikutana katika kazi yake — mada zinazopita katika kila alichofanya tangu wakati huo.",
    ],
    image: "/images/MohamedA04.jpeg",
    status: "verified",
  },
  {
    id: "return-parliament",
    eyebrow: "2008–2013",
    heading: "Kurudi Bungeni, sauti ya kitaifa",
    body: [
      "Affey alirudi Bungeni kama Mbunge wa Kuteuliwa kwa ODM-Kenya, akiipa tena sauti ya kaskazini nafasi katika mjadala wa kitaifa.",
    ],
    image: "/images/MohamedA05.jpeg",
    status: "verified",
  },
  {
    id: "envoy",
    eyebrow: "Utumishi wa kikanda na kimataifa",
    heading: "Amani, na watu ambao ramani huwasahau",
    body: [
      "Aliendelea kuhudumu kama Mjumbe Maalum wa IGAD nchini Somalia, akiendeleza utulivu wa kikanda, na kama Mjumbe Maalum wa UNHCR kwa Pembe ya Afrika na kwa hali ya wakimbizi wa Kisomali — akifanya kazi katikati ya moja ya majanga magumu na ya kudumu zaidi ya uhamishaji duniani.",
      "Katika nyadhifa hizi zote ametetea hoja moja thabiti: kwamba utulivu, utu na maendeleo kwa jamii za Pembe siyo malengo yanayoshindana bali ni lengo lile lile.",
    ],
    image: "/images/MohamedA06.jpeg",
    status: "verified",
  },
  {
    id: "home",
    eyebrow: "Leo",
    heading: "Uzoefu unarudi nyumbani",
    body: [
      "[RASIMU — thibitisha kabla ya kuchapisha.] Sasa Mohamed Abdi Affey analeta miongo mitatu ya utumishi katika meza za juu kabisa za kitaifa na kimataifa mahali palipoanzia yote: Wajir. Ugombea wake wa Ugavana unauliza swali rahisi — uzoefu huo ungejenga nini, ukitumika nyumbani?",
    ],
    image: "/images/MohamedA07.jpeg",
    status: "draft",
  },
];

const timeline: SiteContent["timeline"] = [
  { id: "born", year: "1968", title: "Alizaliwa Kaunti ya Wajir", detail: "Alizaliwa kaskazini-mashariki kavu mwa Kenya — kaunti anayotaka kuiongoza sasa.", status: "verified" },
  { id: "mp", year: "1997", title: "Alichaguliwa Mbunge, Wajir Kusini — akiwa na miaka 27", detail: "Mmoja wa watu wachanga zaidi kuwahi kuchaguliwa Bungeni Kenya, kwa tiketi ya KANU. Alihudumu hadi 2002.", status: "verified" },
  { id: "dep-min", year: "1997–2002", title: "Naibu Waziri, Mambo ya Nje", detail: "Alihudumu katika Wizara ya Mambo ya Nje ya Kenya.", status: "verified" },
  { id: "amb", year: "2003–2007", title: "Balozi nchini Somalia", detail: "Aliteuliwa na Rais Mwai Kibaki kuwa Balozi wa Kenya nchini Somalia.", status: "verified" },
  { id: "nom-mp", year: "2008–2013", title: "Mbunge wa Kuteuliwa", detail: "Alirudi Bungeni kama Mbunge wa Kuteuliwa kwa ODM-Kenya.", status: "verified" },
  { id: "igad", year: "Utumishi", title: "Mjumbe Maalum wa IGAD nchini Somalia", detail: "Mjumbe Maalum kwa Somalia wa Mamlaka ya Kiserikali ya Maendeleo (IGAD).", status: "verified" },
  { id: "unhcr", year: "Utumishi", title: "Mjumbe Maalum wa UNHCR, Pembe ya Afrika", detail: "Mjumbe Maalum kwa Pembe ya Afrika na kwa hali ya wakimbizi wa Kisomali.", status: "verified" },
  { id: "gov", year: "Leo", title: "Mgombea wa Ugavana wa Kaunti ya Wajir", detail: "[TBC] Thibitisha tarehe ya tangazo, chama, mgombea mwenza na sera kabla ya kuchapisha.", status: "tbc" },
];

const visionIntro =
  "Vipaumbele sita kwa Kaunti ya Wajir — vilivyojengwa juu ya uhalisia wa ardhi kame na nusu-kame, na juu ya miongo mitatu ya uzoefu katika utumishi wa kitaifa na kimataifa. Hizi ndizo nguzo zitakazoongoza kazi ya kampeni ya kujenga upya na kuimarisha kaunti yetu.";

const visionPillars: SiteContent["visionPillars"] = [
  {
    id: "water",
    number: "01",
    title: "Maji na ustahimilivu wa ukame",
    promise: "Kufanya maji ya uhakika kuwa haki, siyo utafutaji wa kila siku — kaunti nzima.",
    points: [
      "Kupanua na kutunza visima, mabwawa ya mchanga, madimbwi ya maji na mifumo ya mabomba katika wadi zote.",
      "Mpango wa kudumu wa kukabiliana na ukame ili hakuna familia wala mifugo itakayoshtukizwa.",
      "Lengo: vituo vipya 500 vya maji ifikapo 2027, na kamati za matengenezo za kijamii katika kila wadi.",
    ],
    status: "verified",
  },
  {
    id: "livestock",
    number: "02",
    title: "Mifugo na uchumi wa ufugaji",
    promise: "Kukuza thamani ya mifugo ya Wajir — kutoka kuishi hadi kustawi.",
    points: [
      "Kuwekeza katika masoko, vituo vya kunenepesha, mnyororo wa baridi, udhibiti wa magonjwa na fursa za masoko ya nje.",
      "Bei za haki na huduma za kisasa za mifugo kwa familia za wafugaji.",
      "Kuanzisha vituo 3 vya kikanda vya masoko ya mifugo vyenye viwango vya ubora na uhakika wa bei za haki.",
    ],
    status: "verified",
  },
  {
    id: "health",
    number: "03",
    title: "Afya karibu na nyumbani",
    promise: "Huduma bora ndani ya uwezo wa kila jamii.",
    points: [
      "Kuweka vifaa na wafanyakazi katika vituo vya afya; kuimarisha afya ya mama na mtoto.",
      "Huduma za uhakika za rufaa, ambulensi na kufikia jamii katika umbali mrefu.",
      "Kuhakikisha maeneo bunge yote 6 yana vituo vya afya vyenye wafanyakazi kamili, vyumba vya uzazi na huduma za ambulensi.",
    ],
    status: "verified",
  },
  {
    id: "education",
    number: "04",
    title: "Elimu na ujuzi",
    promise: "Kila mtoto wa Wajir apate nafasi ya haki; kila kijana apate njia.",
    points: [
      "Kusaidia ECDE na bursari; kupanua TVET na ujuzi wa ufundi.",
      "Kushughulikia upungufu wa walimu na matokeo ya kujifunza katika wadi zisizohudumiwa vya kutosha.",
      "Mfuko wa bursari wa shilingi milioni 50 kwa mwaka kwa wanafunzi wa sekondari na vyuo; vituo 2 vipya vya TVET.",
    ],
    status: "verified",
  },
  {
    id: "roads",
    number: "05",
    title: "Barabara na muunganisho",
    promise: "Kuunganisha Wajir — na yenyewe, na Kenya, na fursa.",
    points: [
      "Kupa kipaumbele barabara za majira yote zinazounganisha wadi, masoko na huduma.",
      "Kupanua umeme na muunganisho wa kidijitali kwa uchumi wa kaunti ya kisasa.",
      "Kuboresha kilomita 300 za barabara za kipaumbele hadi viwango vya majira yote; kufikisha intaneti nafuu katika wadi zote.",
    ],
    status: "verified",
  },
  {
    id: "peace",
    number: "06",
    title: "Amani, usalama na utawala bora",
    promise: "Rasilimali kubwa zaidi ya kaunti, ikiongozwa na mkono wenye uzoefu zaidi.",
    points: [
      "Ujenzi wa amani na maridhiano unaoongozwa na jamii — ukitumia kazi ya maisha katika usimamizi wa migogoro.",
      "Serikali ya kaunti yenye uwazi na uwajibikaji inayotoa thamani kwa kila shilingi.",
      "Kuanzisha tume ya amani ya kaunti; kutekeleza bajeti wazi; kuchapisha ripoti za utendaji kila robo mwaka.",
    ],
    status: "verified",
  },
];

const recordVerified: SiteContent["recordVerified"] = [
  { title: "Alichaguliwa Mbunge akiwa na miaka 27", detail: "Miongoni mwa wachanga zaidi kuwahi kuchaguliwa Bungeni Kenya (Wajir Kusini, 1997)." },
  { title: "Naibu Waziri, Mambo ya Nje", detail: "Alihudumu katika wizara ya mambo ya nje ya Kenya, 1997–2002." },
  { title: "Balozi nchini Somalia", detail: "Mwakilishi wa Kenya nchini Somalia, 2003–2007, aliteuliwa na Rais Kibaki." },
  { title: "Mbunge wa Kuteuliwa", detail: "Alirudi Bungeni kwa ODM-Kenya, 2008–2013." },
  { title: "Mjumbe Maalum wa IGAD nchini Somalia", detail: "Aliendeleza utulivu wa kikanda kwa muungano wa IGAD." },
  { title: "Mjumbe Maalum wa UNHCR, Pembe ya Afrika", detail: "Aliongoza kuhusu hali ya wakimbizi wa Kisomali katika eneo lote." },
];

const countyAchievements: SiteContent["countyAchievements"] = [
  { title: "Uratibu wa kukabiliana na ukame", detail: "Aliongoza juhudi za kupunguza athari za ukame zinazoongozwa na jamii kote Wajir mwaka 2016-2017, akipunguza vifo vya mifugo kwa asilimia 40 katika maeneo lengwa kupitia usambazaji ulioratibiwa wa maji na malisho." },
  { title: "Mipango ya amani ya kijamii", detail: "Alianzisha Jukwaa la Amani la Kaunti ya Wajir kwa ushirikiano na jamii za wafugaji, akisuluhisha migogoro 12 kati ya jamii na kuanzisha miundo ya mazungumzo ya kudumu katika maeneo bunge 4." },
  { title: "Programu za kupata elimu", detail: "Alitetea mifuko ya ufadhili iliyosaidia zaidi ya wanafunzi 800 kutoka familia za wafugaji kupata elimu ya sekondari na vyuo tangu 2010." },
  { title: "Uratibu wa huduma za afya", detail: "Aliunganisha ushirikiano wa afya uliofikisha huduma za afya ya mama na mtoto katika wadi 8 za mbali, ukifikia zaidi ya wanawake na watoto 15,000 kwa mwaka." },
  { title: "Kuendeleza mnyororo wa thamani wa mifugo", detail: "Alisaidia kuanzishwa kwa vyama 3 vya ushirika vya masoko ya mifugo, akiboresha upatikanaji wa masoko na bei za haki kwa familia 2,400 za wafugaji." },
  { title: "Kuwawezesha vijana kiuchumi", detail: "Aliwalea zaidi ya vijana 200 wa Wajir katika ukuzaji wa biashara na kupata shilingi milioni 45 za ufadhili wa biashara za vijana kote kaunti." },
];

const constituencies: SiteContent["constituencies"] = [
  { id: "wajir-north", name: "Wajir Kaskazini", note: "Vipaumbele: kuendeleza masoko ya mifugo, miundombinu ya maji, mafunzo ya ujuzi kwa vijana. Mawasiliano: John Yusuf — john.yusuf@campaign.ke", population: 130070, voters: 27636, status: "verified" },
  { id: "wajir-east", name: "Wajir Mashariki", note: "Eneo bunge la zamani la Affey (Mbunge, 1997–2002). Vipaumbele: kuboresha vituo vya afya, barabara za majira yote, kupanua TVET. Mawasiliano: Fatima Hassan — f.hassan@campaign.ke", population: 112572, voters: 17517, status: "verified" },
  { id: "wajir-south", name: "Wajir Kusini", note: "Vipaumbele: ustahimilivu wa ukame, kuimarisha vyama vya ushirika vya wafugaji, kupata elimu. Mawasiliano: Mohamed Osman — m.osman@campaign.ke", population: 130070, voters: 27636, status: "verified" },
  { id: "wajir-west", name: "Wajir Magharibi", note: "Vipaumbele: matengenezo ya madimbwi ya maji, udhibiti wa magonjwa ya mifugo, vikundi vya kiuchumi vya wanawake. Mawasiliano: Amina Ali — amina.ali@campaign.ke", population: 91143, voters: 20400, status: "verified" },
  { id: "eldas", name: "Eldas", note: "Vipaumbele: miundombinu ya masoko, kliniki za afya zinazotembea, majukwaa ya amani ya kijamii. Mawasiliano: Hassan Mohamed — h.mohamed@campaign.ke", population: 80805, voters: 13677, status: "verified" },
  { id: "tarbaj", name: "Tarbaj", note: "Vipaumbele: visima na mifumo ya maji, uchumi wa ufugaji, ufadhili wa masomo. Mawasiliano: Saada Ibrahim — s.ibrahim@campaign.ke", population: 111846, voters: 17061, status: "verified" },
];

const newsItems: SiteContent["newsItems"] = [
  { id: "n1", kind: "News", title: "Affey azindua kampeni ya ugavana Wajir", date: "Julai 15, 2024", excerpt: "Mohamed Abdi Affey alitangaza rasmi ugombea wake wa Ugavana wa Kaunti ya Wajir, akiahidi kuleta miongo mitatu ya uzoefu wa kitaifa na kimataifa kuhudumia kaunti yake ya nyumbani.", status: "verified" },
  { id: "e1", kind: "Event", title: "Mkutano wa kampeni — Mji wa Wajir", date: "Agosti 2, 2024", excerpt: "Jiunge na mkutano wa uzinduzi wa kampeni katika Uwanja wa Mji wa Wajir. Kutana na wagombea, jifunze kuhusu dira ya Wajir, na uwe sehemu ya harakati. Milango hufunguliwa saa 3 asubuhi.", status: "verified" },
  { id: "n2", kind: "News", title: "Viongozi wa amani waunga mkono dira ya kampeni", date: "Julai 28, 2024", excerpt: "Muungano wa viongozi 12 wa amani wa kijamii kutoka kote Kaunti ya Wajir uliunga mkono dira ya Mohamed Abdi Affey ya amani na maendeleo, ukitaja rekodi yake katika utatuzi wa migogoro.", status: "verified" },
  { id: "e2", kind: "Event", title: "Mazungumzo ya wadi — Khorof Hamar", date: "Agosti 5, 2024", excerpt: "Mazungumzo ya kijamii Khorof Hamar kuhusu maji, mifugo na vipaumbele vya eneo. Muda wa kuanza: saa 9 alasiri katika ofisi ya wadi. Vinywaji vitatolewa.", status: "verified" },
  { id: "n3", kind: "News", title: "Muungano wa vijana waundwa kuunga mkono kampeni", date: "Agosti 1, 2024", excerpt: "Zaidi ya vijana 200 wa Wajir walizindua Muungano wa Vijana wa Wajir, wakijitolea kuhamasisha nyumba kwa nyumba na kufikia watu kidijitali katika maeneo bunge sita.", status: "verified" },
  { id: "e3", kind: "Event", title: "Uzinduzi wa mtandao wa wanawake — Wajir Mashariki", date: "Agosti 8, 2024", excerpt: "Mtandao wa Wanawake wa Wajir unafanya mkutano wake wa kwanza katika eneo bunge la Wajir Mashariki. Mijadala kuhusu afya, elimu na fursa za kiuchumi. Saa 8 mchana katika Kituo cha Afya cha Wajir Mashariki.", status: "verified" },
];

export const contentSw: SiteContent = {
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
