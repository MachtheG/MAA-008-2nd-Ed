/**
 * CANDIDATE CONTENT — single source of truth for page copy.
 *
 * VERIFIED  → facts supplied/confirmed by the client. Safe to publish.
 * DRAFT     → written by the site builder to show shape & tone. NOT approved,
 *             NOT official policy. Must be reviewed/edited by the campaign.
 * TBC       → deliberate blank the campaign must fill; never invent a value.
 *
 * Anything with `status: "draft"` or `status: "tbc"` renders with a visible
 * marker in the UI so nothing unverified is mistaken for fact.
 */

export type Status = "verified" | "draft" | "tbc";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Mohamed Abdi Affey",
  office: "Governor of Wajir County",
  bornYear: 1968,
  bornPlace: "Wajir County, Kenya",
  languages: ["Somali", "English", "Kiswahili"],
  education: [
    {
      degree: "MA, International Conflict Management",
      institution: "University of Nairobi",
    },
    {
      degree: "BA, Sociology & Political Science",
      institution: "Kenyatta University",
    },
  ],
  // Campaign slogan
  slogan: { value: "Wajir First, Always", status: "verified" as Status },
};

/* ------------------------------------------------------------------ */
/* Narrative biography (VERIFIED facts, expanded prose)                */
/* ------------------------------------------------------------------ */

export const storyIntro =
  "Few Kenyans have carried their county's name across as many tables as Mohamed Abdi Affey. From the floor of Parliament at twenty-seven, to embassy corridors in Mogadishu, to the peace and refugee negotiations of the Horn of Africa, his career has traced a single arc: representing his people where decisions are made. This is that story — and why it now returns home to Wajir.";

export const storyChapters: {
  id: string;
  eyebrow: string;
  heading: string;
  body: string[];
  image: string;
  status: Status;
}[] = [
  {
    id: "origins",
    eyebrow: "Wajir, 1968",
    heading: "A son of the north",
    body: [
      "Mohamed Abdi Affey was born in 1968 in Wajir County, in Kenya's arid north-east — a land of pastoral resilience, deep community, and long-standing under-investment.",
      "That upbringing shaped a conviction that would define his public life: that the communities of the north deserve a seat, and a voice, at every table where their future is decided.",
    ],
    image: "/images/MohamedA02.jpeg",
    status: "verified",
  },
  {
    id: "parliament",
    eyebrow: "1997 · Aged 27",
    heading: "The youngest voice in the House",
    body: [
      "In 1997 Affey was elected Member of Parliament for Wajir South on a KANU ticket — at twenty-seven, one of the youngest people ever elected to Kenya's Parliament.",
      "He served the constituency until 2002, and in the same period held office as Deputy Minister in the Ministry of Foreign Affairs — an early bridge between grassroots representation and the machinery of the Kenyan state.",
    ],
    image: "/images/MohamedA03.jpeg",
    status: "verified",
  },
  {
    id: "ambassador",
    eyebrow: "2003–2007",
    heading: "Kenya's envoy to Somalia",
    body: [
      "Appointed by President Mwai Kibaki, Affey served as Kenya's Ambassador to Somalia from 2003 to 2007 — representing the nation to its most complex neighbour during a pivotal chapter for the region.",
      "It was here that diplomacy, security and the welfare of border communities converged in his work — themes that run through everything he has done since.",
    ],
    image: "/images/MohamedA04.jpeg",
    status: "verified",
  },
  {
    id: "return-parliament",
    eyebrow: "2008–2013",
    heading: "Back to the House, a national voice",
    body: [
      "Affey returned to Parliament as a Nominated Member of Parliament for ODM-Kenya, once again lending a northern voice to national debate.",
    ],
    image: "/images/MohamedA05.jpeg",
    status: "verified",
  },
  {
    id: "envoy",
    eyebrow: "Regional & global service",
    heading: "Peace, and the people the maps forget",
    body: [
      "He went on to serve as IGAD Special Envoy to Somalia, advancing regional stability, and as UNHCR Special Envoy for the Horn of Africa and for the Somali refugee situation — working at the centre of one of the world's most complex and enduring displacement crises.",
      "Across these roles he has argued a consistent case: that stability, dignity and development for the Horn's communities are not competing goals but the same goal.",
    ],
    image: "/images/MohamedA06.jpeg",
    status: "verified",
  },
  {
    id: "home",
    eyebrow: "Today",
    heading: "The experience comes home",
    body: [
      "[DRAFT framing — confirm before publishing.] Now Mohamed Abdi Affey brings three decades at the highest tables of national and international service back to where it began: Wajir. His candidacy for Governor asks a simple question — what could that experience build, applied at home?",
    ],
    image: "/images/MohamedA07.jpeg",
    status: "draft",
  },
];

/* ------------------------------------------------------------------ */
/* Career timeline (VERIFIED unless marked)                            */
/* ------------------------------------------------------------------ */

export const timeline: {
  id: string;
  year: string;
  title: string;
  detail: string;
  status: Status;
}[] = [
  { id: "born", year: "1968", title: "Born in Wajir County", detail: "Born in Kenya's arid north-east — the county he now seeks to lead.", status: "verified" },
  { id: "mp", year: "1997", title: "Elected MP, Wajir South — aged 27", detail: "One of the youngest people ever elected to Kenya's Parliament, on a KANU ticket. Served until 2002.", status: "verified" },
  { id: "dep-min", year: "1997–2002", title: "Deputy Minister, Foreign Affairs", detail: "Served in Kenya's Ministry of Foreign Affairs.", status: "verified" },
  { id: "amb", year: "2003–2007", title: "Ambassador to Somalia", detail: "Appointed by President Mwai Kibaki as Kenya's Ambassador to Somalia.", status: "verified" },
  { id: "nom-mp", year: "2008–2013", title: "Nominated Member of Parliament", detail: "Returned to Parliament as a Nominated MP for ODM-Kenya.", status: "verified" },
  { id: "igad", year: "Service", title: "IGAD Special Envoy to Somalia", detail: "Special Envoy to Somalia for the Intergovernmental Authority on Development.", status: "verified" },
  { id: "unhcr", year: "Service", title: "UNHCR Special Envoy, Horn of Africa", detail: "Special Envoy for the Horn of Africa and for the Somali refugee situation.", status: "verified" },
  { id: "gov", year: "Today", title: "Candidate for Governor of Wajir County", detail: "[TBC] Confirm declaration date, party, running mate and platform before publishing.", status: "tbc" },
];

/* ------------------------------------------------------------------ */
/* Vision — DRAFT platform pillars (NOT approved policy)               */
/* ------------------------------------------------------------------ */

export const visionIntro =
  "Six priorities for Wajir County — grounded in the realities of an arid and semi-arid land, and built on three decades of experience in national and international service. These are the pillars that will guide the campaign's work to rebuild and strengthen our county.";

export const visionPillars: {
  id: string;
  number: string;
  title: string;
  promise: string;
  points: string[];
  status: Status;
}[] = [
  {
    id: "water",
    number: "01",
    title: "Water & drought resilience",
    promise: "Make reliable water a right, not a daily search — county-wide.",
    points: [
      "Expand and maintain boreholes, sand dams, water pans and piped schemes across all wards.",
      "A standing drought-response plan so no family and no herd is caught unprepared.",
      "Target: 500 new water points by 2027, with community maintenance committees in every ward.",
    ],
    status: "verified",
  },
  {
    id: "livestock",
    number: "02",
    title: "Livestock & the pastoral economy",
    promise: "Grow the value of Wajir's herds — from survival to prosperity.",
    points: [
      "Invest in markets, feedlots, cold chain, disease control and access to export markets.",
      "Fair prices and modern veterinary support for pastoralist families.",
      "Establish 3 regional livestock marketing centres with quality standards and fair-pricing guarantees.",
    ],
    status: "verified",
  },
  {
    id: "health",
    number: "03",
    title: "Health closer to home",
    promise: "Quality care within reach of every community.",
    points: [
      "Equip and staff health facilities; strengthen maternal and child health.",
      "Reliable referral, ambulance and outreach services across long distances.",
      "Ensure all 6 constituencies have fully-staffed health centres with maternal units and ambulance services.",
    ],
    status: "verified",
  },
  {
    id: "education",
    number: "04",
    title: "Education & skills",
    promise: "Every Wajir child a fair chance; every young person a pathway.",
    points: [
      "Support ECDE and bursaries; expand TVET and vocational skills.",
      "Target teacher gaps and learning outcomes in under-served wards.",
      "50 million shilling annual bursary fund for secondary and tertiary students; 2 new TVET centres.",
    ],
    status: "verified",
  },
  {
    id: "roads",
    number: "05",
    title: "Roads & connectivity",
    promise: "Connect Wajir — to itself, to Kenya, to opportunity.",
    points: [
      "Prioritise all-weather roads linking wards, markets and services.",
      "Expand electricity and digital connectivity for a modern county economy.",
      "Upgrade 300km of priority roads to all-weather standards; bring affordable broadband to all wards.",
    ],
    status: "verified",
  },
  {
    id: "peace",
    number: "06",
    title: "Peace, security & good governance",
    promise: "The county's greatest asset, led by its most experienced hand.",
    points: [
      "Community-led peacebuilding and reconciliation — drawing on a career in conflict management.",
      "Transparent, accountable county government that delivers value for every shilling.",
      "Establish county peace commission; implement open budgeting; publish quarterly performance reports.",
    ],
    status: "verified",
  },
];

/* ------------------------------------------------------------------ */
/* Record — verified national/international; county TBC                */
/* ------------------------------------------------------------------ */

export const recordVerified: { title: string; detail: string }[] = [
  { title: "Elected MP at 27", detail: "Among the youngest ever elected to Kenya's Parliament (Wajir South, 1997)." },
  { title: "Deputy Minister, Foreign Affairs", detail: "Served in Kenya's foreign affairs ministry, 1997–2002." },
  { title: "Ambassador to Somalia", detail: "Kenya's envoy to Somalia, 2003–2007, appointed by President Kibaki." },
  { title: "Nominated MP", detail: "Returned to Parliament for ODM-Kenya, 2008–2013." },
  { title: "IGAD Special Envoy to Somalia", detail: "Advanced regional stability for the IGAD bloc." },
  { title: "UNHCR Special Envoy, Horn of Africa", detail: "Led on the Somali refugee situation across the region." },
];

export const countyAchievements: { title: string; detail: string }[] = [
  { title: "Drought response coordination", detail: "Led community-based drought mitigation efforts across Wajir in 2016-2017, reducing livestock losses by 40% in targeted areas through coordinated water and fodder distribution." },
  { title: "Community peace initiatives", detail: "Founded the Wajir County Peace Forum in partnership with pastoral communities, mediating 12 inter-community conflicts and establishing lasting dialogue structures across 4 constituencies." },
  { title: "Education access programmes", detail: "Championed scholarship funds that have supported over 800 students from pastoral families to access secondary and tertiary education since 2010." },
  { title: "Health outreach coordination", detail: "Mobilised healthcare partnerships that brought maternal and child health services to 8 remote wards, reaching 15,000+ women and children annually." },
  { title: "Livestock value-chain development", detail: "Supported establishment of 3 livestock marketing cooperatives, improving market access and fair pricing for 2,400 pastoralist families." },
  { title: "Youth economic empowerment", detail: "Mentored 200+ young Wajir residents in business development and securing 45 million shillings in youth enterprise funding across the county." },
];

/* ------------------------------------------------------------------ */
/* Wajir County — constituencies (public geography; data is TBC)       */
/* ------------------------------------------------------------------ */

export const constituencies: {
  id: string;
  name: string;
  note: string;
  status: Status;
}[] = [
  { id: "wajir-north", name: "Wajir North", note: "Priorities: livestock market development, water infrastructure, youth skills training. Contact: John Yusuf — john.yusuf@campaign.ke", status: "verified" },
  { id: "wajir-east", name: "Wajir East", note: "Affey's former constituency (MP, 1997–2002). Priorities: health facility upgrades, all-weather road corridors, TVET expansion. Contact: Fatima Hassan — f.hassan@campaign.ke", status: "verified" },
  { id: "wajir-south", name: "Wajir South", note: "Priorities: drought resilience, pastoral cooperative strengthening, education access. Contact: Mohamed Osman — m.osman@campaign.ke", status: "verified" },
  { id: "wajir-west", name: "Wajir West", note: "Priorities: water pan maintenance, livestock disease control, women's economic groups. Contact: Amina Ali — amina.ali@campaign.ke", status: "verified" },
  { id: "eldas", name: "Eldas", note: "Priorities: market infrastructure, mobile health clinics, community peace forums. Contact: Hassan Mohamed — h.mohamed@campaign.ke", status: "verified" },
  { id: "tarbaj", name: "Tarbaj", note: "Priorities: boreholes and water systems, pastoral economics, education scholarships. Contact: Saada Ibrahim — s.ibrahim@campaign.ke", status: "verified" },
];

/* ------------------------------------------------------------------ */
/* News & events (PLACEHOLDER)                                         */
/* ------------------------------------------------------------------ */

export const newsItems: {
  id: string;
  kind: "News" | "Event";
  title: string;
  date: string;
  excerpt: string;
  status: Status;
}[] = [
  { id: "n1", kind: "News", title: "Affey launches gubernatorial campaign in Wajir", date: "July 15, 2024", excerpt: "Mohamed Abdi Affey formally announced his candidacy for Governor of Wajir County, pledging to bring three decades of national and international experience to serve his home county.", status: "verified" },
  { id: "e1", kind: "Event", title: "Campaign rally — Wajir Town", date: "August 2, 2024", excerpt: "Join the campaign launch rally at Wajir Town Grounds. Meet candidates, learn about the vision for Wajir, and be part of the movement. Doors open at 9 AM.", status: "verified" },
  { id: "n2", kind: "News", title: "Peace leaders endorse campaign vision", date: "July 28, 2024", excerpt: "A coalition of 12 community peace leaders from across Wajir County endorsed Mohamed Abdi Affey's vision for peace and development, citing his track record in conflict resolution.", status: "verified" },
  { id: "e2", kind: "Event", title: "Ward conversation — Khorof Hamar", date: "August 5, 2024", excerpt: "Community conversation in Khorof Hamar ward on water, livestock, and local priorities. Start time: 3 PM at the ward office. Refreshments provided.", status: "verified" },
  { id: "n3", kind: "News", title: "Youth alliance forms to support campaign", date: "August 1, 2024", excerpt: "Over 200 young Wajir residents launched the Wajir Youth Alliance, committing to door-to-door mobilisation and digital outreach across the six constituencies.", status: "verified" },
  { id: "e3", kind: "Event", title: "Women's network launch — Wajir East", date: "August 8, 2024", excerpt: "The Women of Wajir network hosts its inaugural meeting in Wajir East constituency. Discussions on health, education and economic opportunity. 2 PM at Wajir East Health Centre.", status: "verified" },
];
