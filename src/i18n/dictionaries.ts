import type { Locale } from "./config";

/**
 * Content dictionaries.
 *
 * ⚠️  TRANSLATION NOTE: English is authoritative. The Kiswahili strings are a
 * first-pass draft and MUST be reviewed by a native Kiswahili speaker before
 * publishing. Somali ("so") is not yet populated — see i18n/config.ts.
 *
 * ⚠️  FACT NOTE: Every string here is either a VERIFIED fact supplied by the
 * client or is clearly marked as a placeholder ({{...}} or "[TBC]"). Do not
 * remove the placeholder markers until the client confirms real copy.
 */

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    brandLine1: string;
    brandLine2: string;
    story: string;
    vision: string;
    record: string;
    priorities: string;
    wards: string;
    news: string;
    getInvolved: string;
    donate: string;
    menu: string;
    close: string;
    home: string;
  };
  hero: {
    kicker: string;
    name: string;
    forOffice: string; // e.g. "for Governor, Wajir County"
    tagline: string; // PLACEHOLDER slogan
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
    placeholderNote: string;
  };
  credibility: {
    heading: string;
    items: { value: string; label: string }[];
  };
  timeline: {
    kicker: string;
    heading: string;
    intro: string;
    presentLabel: string;
    verifiedTag: string;
    placeholderTag: string;
    items: TimelineItemCopy[];
  };
  common: {
    langLabel: string;
    placeholderBadge: string;
    verifiedBadge: string;
  };
};

export type TimelineItemCopy = {
  id: string;
  year: string;
  title: string;
  body: string;
  verified: boolean;
};

const en: Dictionary = {
  meta: {
    title: "Mohamed Abdi Affey — for Governor, Wajir County",
    description:
      "Statesman, diplomat and son of Wajir. From the youngest voices in Kenya's Parliament to the Horn of Africa's peace tables — a record of service, now for home.",
  },
  nav: {
    brandLine1: "AFFEY",
    brandLine2: "for Wajir",
    story: "The Story",
    vision: "Vision for Wajir",
    record: "Record",
    priorities: "Priorities",
    wards: "Wajir County",
    news: "News & Events",
    getInvolved: "Get Involved",
    donate: "Donate",
    menu: "Menu",
    close: "Close",
    home: "Home",
  },
  hero: {
    kicker: "Wajir County · Gubernatorial Campaign",
    name: "Mohamed Abdi Affey",
    forOffice: "for Governor of Wajir County",
    tagline: "{{CAMPAIGN SLOGAN — to be confirmed}}",
    lead:
      "A son of Wajir who took his seat in Kenya's Parliament at twenty-seven, carried the country's voice into foreign affairs, and spent a career building peace across the Horn of Africa. Now that experience comes home.",
    ctaPrimary: "Explore the record",
    ctaSecondary: "Get involved",
    scroll: "Scroll to begin",
    placeholderNote:
      "Slogan and campaign promise are placeholders pending your confirmation.",
  },
  credibility: {
    heading: "Three decades in public service",
    items: [
      { value: "1997", label: "Elected MP at age 27" },
      { value: "2003", label: "Kenya's Ambassador to Somalia" },
      { value: "Horn", label: "UNHCR & IGAD Special Envoy" },
    ],
  },
  timeline: {
    kicker: "The Record",
    heading: "A life of service — from Wajir to the world, and back",
    intro:
      "Every milestone below is drawn from Mohamed Abdi Affey's verified public record. Items still awaiting sourced detail are clearly marked.",
    presentLabel: "Today",
    verifiedTag: "Verified",
    placeholderTag: "Awaiting detail",
    items: [
      {
        id: "born",
        year: "1968",
        title: "Born in Wajir County",
        body: "Mohamed Abdi Affey is born in Wajir, in Kenya's arid north — the county he now seeks to lead.",
        verified: true,
      },
      {
        id: "mp-wajir-south",
        year: "1997",
        title: "Elected MP for Wajir South, age 27",
        body: "One of the youngest people ever elected to Kenya's Parliament, winning the Wajir South seat on a KANU ticket and serving until 2002.",
        verified: true,
      },
      {
        id: "deputy-minister",
        year: "1997–2002",
        title: "Deputy Minister for Foreign Affairs",
        body: "Serves in the Ministry of Foreign Affairs of Kenya, beginning a career at the intersection of national politics and international diplomacy.",
        verified: true,
      },
      {
        id: "ambassador",
        year: "2003–2007",
        title: "Kenya's Ambassador to Somalia",
        body: "Appointed by President Mwai Kibaki as Kenya's Ambassador to Somalia, representing the nation through a pivotal period in the region.",
        verified: true,
      },
      {
        id: "nominated-mp",
        year: "2008–2013",
        title: "Nominated Member of Parliament",
        body: "Returns to Parliament as a Nominated Member of Parliament for ODM-Kenya.",
        verified: true,
      },
      {
        id: "igad-envoy",
        year: "Career",
        title: "IGAD Special Envoy to Somalia",
        body: "Serves as Special Envoy to Somalia for the Intergovernmental Authority on Development (IGAD), advancing regional stability.",
        verified: true,
      },
      {
        id: "unhcr-envoy",
        year: "Career",
        title: "UNHCR Special Envoy, Horn of Africa",
        body: "Serves as UNHCR Special Envoy for the Horn of Africa and for the Somali refugee situation, working on one of the world's most complex displacement crises.",
        verified: true,
      },
      {
        id: "education",
        year: "Education",
        title: "Master's in International Conflict Management",
        body: "Holds a Master's degree in International Conflict Management (University of Nairobi) and a Bachelor's in Sociology & Political Science (Kenyatta University). Fluent in Somali, English and Kiswahili.",
        verified: true,
      },
      {
        id: "governor-run",
        year: "Today",
        title: "Candidate for Governor of Wajir County",
        body: "[TBC — confirm declaration date, party, running mate and platform pillars for the gubernatorial campaign before publishing.]",
        verified: false,
      },
    ],
  },
  common: {
    langLabel: "Language",
    placeholderBadge: "Placeholder — needs your confirmation",
    verifiedBadge: "Verified fact",
  },
};

const sw: Dictionary = {
  meta: {
    title: "Mohamed Abdi Affey — Gavana wa Kaunti ya Wajir",
    description:
      "Mwanasiasa, mwanadiplomasia na mwana wa Wajir. Kutoka sauti changa zaidi Bungeni hadi meza za amani za Pembe ya Afrika — rekodi ya utumishi, sasa kwa nyumbani.",
  },
  nav: {
    brandLine1: "AFFEY",
    brandLine2: "kwa Wajir",
    story: "Hadithi",
    vision: "Dira ya Wajir",
    record: "Rekodi",
    priorities: "Vipaumbele",
    wards: "Kaunti ya Wajir",
    news: "Habari na Matukio",
    getInvolved: "Jiunge Nasi",
    donate: "Changia",
    menu: "Menyu",
    close: "Funga",
    home: "Nyumbani",
  },
  hero: {
    kicker: "Kaunti ya Wajir · Kampeni ya Ugavana",
    name: "Mohamed Abdi Affey",
    forOffice: "kwa Gavana wa Kaunti ya Wajir",
    tagline: "{{KAULI MBIU YA KAMPENI — itathibitishwa}}",
    lead:
      "Mwana wa Wajir aliyechukua kiti chake Bungeni akiwa na miaka ishirini na saba, akabeba sauti ya taifa katika mambo ya nje, na akatumia maisha yake kujenga amani katika Pembe ya Afrika. Sasa uzoefu huo unarudi nyumbani.",
    ctaPrimary: "Chunguza rekodi",
    ctaSecondary: "Jiunge nasi",
    scroll: "Sogeza kuanza",
    placeholderNote:
      "Kauli mbiu na ahadi ya kampeni ni nafasi wazi zinazosubiri uthibitisho wako.",
  },
  credibility: {
    heading: "Miongo mitatu ya utumishi wa umma",
    items: [
      { value: "1997", label: "Alichaguliwa Mbunge akiwa na miaka 27" },
      { value: "2003", label: "Balozi wa Kenya nchini Somalia" },
      { value: "Pembe", label: "Mjumbe Maalum wa UNHCR na IGAD" },
    ],
  },
  timeline: {
    kicker: "Rekodi",
    heading: "Maisha ya utumishi — kutoka Wajir hadi dunia, na kurudi",
    intro:
      "Kila hatua hapa chini imetokana na rekodi ya umma iliyothibitishwa ya Mohamed Abdi Affey. Vipengele vinavyosubiri maelezo yaliyothibitishwa vimewekwa alama wazi.",
    presentLabel: "Leo",
    verifiedTag: "Imethibitishwa",
    placeholderTag: "Inasubiri maelezo",
    items: [
      {
        id: "born",
        year: "1968",
        title: "Alizaliwa Kaunti ya Wajir",
        body: "Mohamed Abdi Affey alizaliwa Wajir, kaskazini kavu mwa Kenya — kaunti anayotaka kuiongoza sasa.",
        verified: true,
      },
      {
        id: "mp-wajir-south",
        year: "1997",
        title: "Alichaguliwa Mbunge wa Wajir Kusini, umri wa miaka 27",
        body: "Mmoja wa watu wachanga zaidi kuwahi kuchaguliwa Bungeni Kenya, akishinda kiti cha Wajir Kusini kwa tiketi ya KANU na kuhudumu hadi 2002.",
        verified: true,
      },
      {
        id: "deputy-minister",
        year: "1997–2002",
        title: "Naibu Waziri wa Mambo ya Nje",
        body: "Alihudumu katika Wizara ya Mambo ya Nje ya Kenya, akianza kazi katika makutano ya siasa za taifa na diplomasia ya kimataifa.",
        verified: true,
      },
      {
        id: "ambassador",
        year: "2003–2007",
        title: "Balozi wa Kenya nchini Somalia",
        body: "Aliteuliwa na Rais Mwai Kibaki kuwa Balozi wa Kenya nchini Somalia, akiwakilisha taifa katika kipindi muhimu cha eneo hilo.",
        verified: true,
      },
      {
        id: "nominated-mp",
        year: "2008–2013",
        title: "Mbunge wa Kuteuliwa",
        body: "Alirudi Bungeni kama Mbunge wa Kuteuliwa kwa ODM-Kenya.",
        verified: true,
      },
      {
        id: "igad-envoy",
        year: "Kazi",
        title: "Mjumbe Maalum wa IGAD nchini Somalia",
        body: "Alihudumu kama Mjumbe Maalum kwa Somalia wa Mamlaka ya Kiserikali ya Maendeleo (IGAD), akiendeleza utulivu wa eneo.",
        verified: true,
      },
      {
        id: "unhcr-envoy",
        year: "Kazi",
        title: "Mjumbe Maalum wa UNHCR, Pembe ya Afrika",
        body: "Alihudumu kama Mjumbe Maalum wa UNHCR kwa Pembe ya Afrika na kwa hali ya wakimbizi wa Kisomali, akifanya kazi kwenye moja ya majanga magumu zaidi ya uhamishaji duniani.",
        verified: true,
      },
      {
        id: "education",
        year: "Elimu",
        title: "Shahada ya Uzamili katika Usimamizi wa Migogoro ya Kimataifa",
        body: "Ana Shahada ya Uzamili katika Usimamizi wa Migogoro ya Kimataifa (Chuo Kikuu cha Nairobi) na Shahada ya Kwanza katika Sosholojia na Sayansi ya Siasa (Chuo Kikuu cha Kenyatta). Anazungumza Kisomali, Kiingereza na Kiswahili kwa ufasaha.",
        verified: true,
      },
      {
        id: "governor-run",
        year: "Leo",
        title: "Mgombea wa Ugavana wa Kaunti ya Wajir",
        body: "[TBC — thibitisha tarehe ya tangazo, chama, mgombea mwenza na nguzo za sera za kampeni kabla ya kuchapisha.]",
        verified: false,
      },
    ],
  },
  common: {
    langLabel: "Lugha",
    placeholderBadge: "Nafasi wazi — inahitaji uthibitisho wako",
    verifiedBadge: "Ukweli uliothibitishwa",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  sw,
  // Somali not yet translated — falls back to English at runtime.
  so: en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
