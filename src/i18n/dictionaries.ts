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
  ui: UiCopy;
};

export type TimelineItemCopy = {
  id: string;
  year: string;
  title: string;
  body: string;
  verified: boolean;
};

/**
 * Interface chrome — every heading, label and button that is NOT candidate
 * content. Candidate content lives in src/content/ (candidate.ts / .sw.ts).
 */
export type UiCopy = {
  status: { verified: string; draft: string; tbc: string };
  countdown: {
    label: string;
    dateLine: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    daysShort: string;
    hoursShort: string;
    minutesShort: string;
    secondsShort: string;
    passed: string;
  };
  home: {
    visionKicker: string;
    visionHeading: string;
    seeAllPriorities: string;
    draftNotice: string;
    readMore: string;
    storyKicker: string;
    storyHeading: string;
    readFullStory: string;
    portraitAlt: string;
    portraitCaption: string;
    quote: string;
    quoteAttribution: string;
    ctaHeading: string;
    ctaBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroPhotoAlt: string;
    heroPhotoCaption: string;
    centralPromise: string;
    factBorn: string;
    factMp: string;
    factDecades: string;
    factElection: string;
    mapNote: string;
    statsHeading: string;
    statWater: string;
    statRoads: string;
    statBursary: string;
    statConstituencies: string;
    galleryHeading: string;
    galleryMapAlt: string;
    galleryMapCaption: string;
    galleryAmbassadorCaption: string;
    galleryParliamentCaption: string;
    galleryUnhcrCaption: string;
    galleryLivestockCaption: string;
  };
  story: {
    kicker: string;
    title: string;
    imageAlt: string;
    photoCaption: string;
    timelineKicker: string;
    timelineHeading: string;
    ctaVision: string;
    ctaRecord: string;
  };
  vision: {
    kicker: string;
    title: string;
    intro: string;
    imageAlt: string;
    helpHeading: string;
    helpBody: string;
    helpCtaPriorities: string;
    helpCtaCounty: string;
  };
  record: {
    kicker: string;
    title: string;
    intro: string;
    nationalKicker: string;
    educationKicker: string;
    languagesKicker: string;
    countyKicker: string;
    countyNote: string;
    ctaStory: string;
    ctaVision: string;
  };
  wards: {
    kicker: string;
    title: string;
    intro: string;
    mapTitle: string;
    mapCaption: string;
    constituencyLabel: string;
    population: string;
    voters: string;
    hqLabel: string;
    whatLivesHereTitle: string;
    whatLivesHereBody: string;
    mapAria: string;
  };
  news: {
    kicker: string;
    title: string;
    intro: string;
    kindNews: string;
    kindEvent: string;
    updatesHeading: string;
    updatesBody: string;
    updatesCta: string;
  };
  getInvolved: {
    kicker: string;
    title: string;
    intro: string;
    volunteerKicker: string;
    volunteerHeading: string;
    volunteerBody: string;
    volunteerBullets: string[];
    donateKicker: string;
    donateHeading: string;
    donateBody: string;
    transparencyTitle: string;
    transparencyBody: string;
  };
  volunteerForm: {
    fullName: string;
    phone: string;
    email: string;
    constituency: string;
    selectPlaceholder: string;
    howHelp: string;
    interests: string[];
    submit: string;
    demoNote: string;
    thanksHeading: string;
    thanksBody: string;
    submitAnother: string;
  };
  donate: {
    mpesa: string;
    crypto: string;
    methodAria: string;
    chooseAmount: string;
    other: string;
    customAria: string;
    mpesaPhone: string;
    mpesaPlaceholder: string;
    mpesaPaybill: string;
    mpesaAccount: string;
    mpesaPrompt: string;
    stkPush: string;
    stkNote: string;
    cryptoAddress: string;
    cryptoNote: string;
    notLiveTitle: string;
    notLiveBody: string;
  };
  footer: {
    tagline: string;
    explore: string;
    takePart: string;
    volunteer: string;
    donate: string;
    findConstituency: string;
    copyright: string;
    disclaimer: string;
    skipToContent: string;
    photoCreditsLabel: string;
  };
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
  ui: {
    status: {
      verified: "Verified",
      draft: "Draft — for approval",
      tbc: "To confirm",
    },
    countdown: {
      label: "Countdown to the general election",
      dateLine: "Tuesday, 10 August 2027",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      daysShort: "Days",
      hoursShort: "Hrs",
      minutesShort: "Min",
      secondsShort: "Sec",
      passed: "Election day is here — go out and vote.",
    },
    home: {
      visionKicker: "A vision for Wajir",
      visionHeading:
        "Experience earned at the world's tables, put to work at home.",
      seeAllPriorities: "See all priorities →",
      draftNotice:
        "Draft priorities shown for direction — pending campaign approval.",
      readMore: "Read more",
      storyKicker: "The Story",
      storyHeading:
        "From the youngest voice in Parliament to the Horn of Africa's peace tables.",
      readFullStory: "Read the full story",
      portraitAlt: "Official portrait of Mohamed Abdi Affey",
      portraitCaption:
        "A portrait of Mohamed Abdi Affey — supply an official, rights-cleared photo.",
      quote:
        "Stability, dignity and development for the people of the north are not competing goals — they are the same goal.",
      quoteAttribution: "— Anonymous",
      ctaHeading: "This campaign belongs to Wajir.",
      ctaBody:
        "Volunteer your time, host a conversation in your ward, or help power the campaign. Every hand moves us closer to home.",
      ctaPrimary: "Get involved",
      ctaSecondary: "Donate",
      heroPhotoAlt:
        "Mohamed Abdi Affey greeting young people in Wajir County.",
      heroPhotoCaption: "With young people of Wajir.",
      centralPromise: "Central promise:",
      factBorn: "Born in Wajir",
      factMp: "Elected MP, aged",
      factDecades: "Decades of service",
      factElection: "County election",
      mapNote: "Wajir County — six constituencies, one county.",
      statsHeading: "What the platform asks for, in numbers.",
      statWater: "new water points by 2027",
      statRoads: "km of priority roads to all-weather standard",
      statBursary: "shillings a year in bursaries for Wajir students",
      statConstituencies: "constituencies with a full-time local priority list",
      galleryHeading: "The record, in pictures",
      galleryMapAlt: "Map of Wajir County's six constituencies",
      galleryMapCaption: "Wajir County — all six constituencies",
      galleryAmbassadorCaption: "Ambassador to Somalia, 2003–2007",
      galleryParliamentCaption: "Parliament Buildings, Nairobi — MP, 1997",
      galleryUnhcrCaption: "UNHCR Special Envoy, Horn of Africa",
      galleryLivestockCaption: "The pastoral economy the Vision pillar is built for",
    },
    story: {
      kicker: "The Story",
      title: "A life of service — from Wajir to the world, and back.",
      imageAlt: "Warm, eroded highlands of Kenya's arid north.",
      photoCaption: "Supply archival or campaign imagery.",
      timelineKicker: "The record, in brief",
      timelineHeading: "Thirty years, at a glance",
      ctaVision: "See the vision for Wajir",
      ctaRecord: "The full record",
    },
    vision: {
      kicker: "Vision for Wajir",
      title: "What experience could build, applied at home.",
      intro:
        "Six priorities for a stronger, better-served Wajir County — grounded in the realities of an arid land and a proud pastoral economy.",
      imageAlt: "An open semi-arid expanse under a wide sky.",
      helpHeading: "Help shape these priorities",
      helpBody:
        "The final platform will be built with the people of Wajir. Tell us what matters most in your ward.",
      helpCtaPriorities: "Share your priorities",
      helpCtaCounty: "Explore the county",
    },
    record: {
      kicker: "The Record",
      title: "A verified record of service — at home and on the world stage.",
      intro:
        "Every entry below is drawn from Mohamed Abdi Affey's confirmed public record. Nothing here is invented; county-level items awaiting sourcing are clearly marked.",
      nationalKicker: "National & international",
      educationKicker: "Education",
      languagesKicker: "Languages",
      countyKicker: "Wajir County record",
      countyNote: "As supplied by the campaign; these figures are not yet marked verified, draft or to-confirm the way the rest of this site's content is.",
      ctaStory: "Read the full story",
      ctaVision: "The vision for Wajir",
    },
    wards: {
      kicker: "Wajir County",
      title: "Six constituencies. One county. A plan for each.",
      intro:
        "Wajir is made up of six constituencies and thirty wards. Select an area to see the campaign's local focus — and tell us what matters most where you live.",
      mapTitle: "Six constituencies, one county",
      mapCaption:
        "Traced from the county constituency map. Boundaries are indicative — confirm against official IEBC data before publishing.",
      constituencyLabel: "Constituency",
      population: "Population",
      voters: "Registered voters",
      hqLabel: "Wajir town — county HQ",
      whatLivesHereTitle: "What will live here",
      whatLivesHereBody:
        "Local priorities, active projects, ward representatives and contact details — once supplied by the campaign for each area.",
      mapAria: "Interactive map of Wajir County's six constituencies",
    },
    news: {
      kicker: "News & Events",
      title: "From the campaign trail across Wajir.",
      intro:
        "Statements, press coverage and upcoming events — rallies, town-halls and community meetings, ward by ward.",
      kindNews: "News",
      kindEvent: "Event",
      updatesHeading: "Never miss an update",
      updatesBody:
        "Sign up to hear about events in your ward and news from the campaign.",
      updatesCta: "Join the campaign",
    },
    getInvolved: {
      kicker: "Get Involved",
      title: "This campaign belongs to Wajir.",
      intro:
        "Lend your time, your voice or your support. Every contribution — an hour of outreach or a shilling toward the cause — brings the county closer to the leadership it deserves.",
      volunteerKicker: "Volunteer",
      volunteerHeading: "Add your hands to the movement.",
      volunteerBody:
        "From door-to-door conversations to hosting a meeting in your ward, there's a place for everyone. Tell us how you'd like to help and where you're based.",
      volunteerBullets: [
        "Organise and mobilise in your ward",
        "Represent the campaign at community events",
        "Reach voters online and offline",
      ],
      donateKicker: "Donate",
      donateHeading: "Power the campaign.",
      donateBody:
        "Grassroots support keeps this movement independent and close to the people it serves. Give what you can, by M-Pesa or cryptocurrency.",
      transparencyTitle: "A note on transparency",
      transparencyBody:
        "Political donations in Kenya are subject to campaign-finance law. Before going live we'll confirm contribution limits, disclosure requirements and the payment credentials to use.",
    },
    volunteerForm: {
      fullName: "Full name",
      phone: "Phone number",
      email: "Email (optional)",
      constituency: "Your constituency",
      selectPlaceholder: "Select…",
      howHelp: "How would you like to help?",
      interests: [
        "Door-to-door outreach",
        "Host a ward meeting",
        "Social media",
        "Events & logistics",
        "Youth mobilisation",
        "Women's network",
      ],
      submit: "Join the campaign",
      demoNote:
        "Demo form — not yet connected to a backend. No data is stored or sent.",
      thanksHeading: "Thank you for stepping up.",
      thanksBody:
        "This is a demo submission — the form is not yet connected to a backend. Wire it to your CRM / email service to start collecting real sign-ups.",
      submitAnother: "Submit another response",
    },
    donate: {
      mpesa: "M-Pesa",
      crypto: "Crypto",
      methodAria: "Payment method",
      chooseAmount: "Choose an amount (KES)",
      other: "Other",
      customAria: "Custom amount in KES",
      mpesaPhone: "M-Pesa phone number",
      mpesaPlaceholder: "e.g. 0712 345 678",
      mpesaPaybill: "Paybill: 008008",
      mpesaAccount: "Account: MA-008",
      mpesaPrompt: "Send prompt",
      stkPush: "Send STK push",
      stkNote: "You'll receive a prompt on your phone to enter your M-Pesa PIN.",
      cryptoAddress: "Cryptocurrency address",
      cryptoNote: "Send donations to the campaign wallet address. Bitcoin, Ethereum and other major cryptocurrencies accepted.",
      notLiveTitle: "Not yet live.",
      notLiveBody:
        "This is the donation experience only. Real transactions need backend integration & credentials from you — Safaricom Daraja API (M-Pesa STK push) and cryptocurrency wallet integration — plus compliance with Kenyan campaign-finance rules. Nothing is charged.",
    },
    footer: {
      tagline:
        "A record of service across Kenya and the Horn of Africa — now for home. Built for the people of Wajir County.",
      explore: "Explore",
      takePart: "Take part",
      volunteer: "Volunteer",
      donate: "Donate",
      findConstituency: "Find your constituency",
      copyright: "Mohamed Abdi Affey Campaign. Site in development.",
      disclaimer:
        "Draft site — content marked “Draft” or “To confirm” is not final and must be approved before publishing. Imagery is placeholder/atmospheric.",
      skipToContent: "Skip to content",
      photoCreditsLabel: "Photographs of the subject's wider world:",
    },
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
  ui: {
    status: {
      verified: "Imethibitishwa",
      draft: "Rasimu — kwa idhini",
      tbc: "Itathibitishwa",
    },
    countdown: {
      label: "Hesabu ya kurudi nyuma hadi uchaguzi mkuu",
      dateLine: "Jumanne, 10 Agosti 2027",
      days: "Siku",
      hours: "Saa",
      minutes: "Dakika",
      seconds: "Sekunde",
      daysShort: "Siku",
      hoursShort: "Saa",
      minutesShort: "Dak",
      secondsShort: "Sek",
      passed: "Siku ya uchaguzi imefika — nenda ukapige kura.",
    },
    home: {
      visionKicker: "Dira ya Wajir",
      visionHeading:
        "Uzoefu uliopatikana katika meza za dunia, sasa ukifanya kazi nyumbani.",
      seeAllPriorities: "Tazama vipaumbele vyote →",
      draftNotice:
        "Vipaumbele vya rasimu vimeonyeshwa kwa mwelekeo — vinasubiri idhini ya kampeni.",
      readMore: "Soma zaidi",
      storyKicker: "Hadithi",
      storyHeading:
        "Kutoka sauti changa zaidi Bungeni hadi meza za amani za Pembe ya Afrika.",
      readFullStory: "Soma hadithi kamili",
      portraitAlt: "Picha rasmi ya Mohamed Abdi Affey",
      portraitCaption:
        "Picha ya Mohamed Abdi Affey — toa picha rasmi yenye haki zilizoidhinishwa.",
      quote:
        "Utulivu, utu na maendeleo kwa watu wa kaskazini siyo malengo yanayoshindana — ni lengo lile lile.",
      quoteAttribution: "— Bila jina",
      ctaHeading: "Kampeni hii ni mali ya Wajir.",
      ctaBody:
        "Toa muda wako, andaa mazungumzo katika wadi yako, au saidia kuiwezesha kampeni. Kila mkono unatusogeza karibu na nyumbani.",
      ctaPrimary: "Jiunge nasi",
      ctaSecondary: "Changia",
      heroPhotoAlt: "Mohamed Abdi Affey akisalimiana na vijana Kaunti ya Wajir.",
      heroPhotoCaption: "Pamoja na vijana wa Wajir.",
      centralPromise: "Ahadi kuu:",
      factBorn: "Alizaliwa Wajir",
      factMp: "Alichaguliwa Mbunge, umri",
      factDecades: "Miongo ya utumishi",
      factElection: "Uchaguzi wa kaunti",
      mapNote: "Kaunti ya Wajir — majimbo sita, kaunti moja.",
      statsHeading: "Mpango unaohitaji nini, kwa namba.",
      statWater: "vituo vipya vya maji kufikia 2027",
      statRoads: "km za barabara za kipaumbele hadi kiwango cha hali zote",
      statBursary: "shilingi kwa mwaka kwa ufadhili wa wanafunzi wa Wajir",
      statConstituencies: "majimbo yenye orodha ya kipaumbele cha ndani ya muda wote",
      galleryHeading: "Rekodi, kwa picha",
      galleryMapAlt: "Ramani ya majimbo sita ya Kaunti ya Wajir",
      galleryMapCaption: "Kaunti ya Wajir — majimbo yote sita",
      galleryAmbassadorCaption: "Balozi wa Somalia, 2003–2007",
      galleryParliamentCaption: "Jengo la Bunge, Nairobi — Mbunge, 1997",
      galleryUnhcrCaption: "Mjumbe Maalum wa UNHCR, Pembe ya Afrika",
      galleryLivestockCaption: "Uchumi wa kifugaji unaolengwa na nguzo ya Dira",
    },
    story: {
      kicker: "Hadithi",
      title: "Maisha ya utumishi — kutoka Wajir hadi dunia, na kurudi.",
      imageAlt: "Nyanda za juu zenye joto na mmomonyoko kaskazini kavu mwa Kenya.",
      photoCaption: "Toa picha za kumbukumbu au za kampeni.",
      timelineKicker: "Rekodi, kwa ufupi",
      timelineHeading: "Miaka thelathini, kwa muhtasari",
      ctaVision: "Tazama dira ya Wajir",
      ctaRecord: "Rekodi kamili",
    },
    vision: {
      kicker: "Dira ya Wajir",
      title: "Kile ambacho uzoefu ungejenga, ukitumika nyumbani.",
      intro:
        "Vipaumbele sita kwa Kaunti ya Wajir iliyo imara na inayohudumiwa vyema — vilivyojengwa juu ya uhalisia wa ardhi kame na uchumi wa ufugaji wenye fahari.",
      imageAlt: "Eneo wazi la nusu-kame chini ya anga pana.",
      helpHeading: "Saidia kuunda vipaumbele hivi",
      helpBody:
        "Sera ya mwisho itajengwa pamoja na watu wa Wajir. Tuambie kinachohitajika zaidi katika wadi yako.",
      helpCtaPriorities: "Shiriki vipaumbele vyako",
      helpCtaCounty: "Chunguza kaunti",
    },
    record: {
      kicker: "Rekodi",
      title: "Rekodi iliyothibitishwa ya utumishi — nyumbani na katika jukwaa la dunia.",
      intro:
        "Kila kipengele hapa chini kimetokana na rekodi ya umma iliyothibitishwa ya Mohamed Abdi Affey. Hakuna kilichobuniwa hapa; vipengele vya ngazi ya kaunti vinavyosubiri vyanzo vimewekwa alama wazi.",
      nationalKicker: "Kitaifa na kimataifa",
      educationKicker: "Elimu",
      languagesKicker: "Lugha",
      countyKicker: "Rekodi ya Kaunti ya Wajir",
      countyNote: "Kama ilivyotolewa na kampeni; namba hizi bado hazijawekwa alama ya kuthibitishwa, rasimu au kuthibitishwa kama maudhui mengine ya tovuti hii.",
      ctaStory: "Soma hadithi kamili",
      ctaVision: "Dira ya Wajir",
    },
    wards: {
      kicker: "Kaunti ya Wajir",
      title: "Maeneo bunge sita. Kaunti moja. Mpango kwa kila moja.",
      intro:
        "Wajir imeundwa na maeneo bunge sita na wadi thelathini. Chagua eneo ili kuona mwelekeo wa kampeni hapo — na utuambie kinachohitajika zaidi mahali unapoishi.",
      mapTitle: "Maeneo bunge sita, kaunti moja",
      mapCaption:
        "Imechorwa kutoka ramani ya maeneo bunge ya kaunti. Mipaka ni ya kuonyesha — thibitisha dhidi ya data rasmi ya IEBC kabla ya kuchapisha.",
      constituencyLabel: "Eneo bunge",
      population: "Idadi ya watu",
      voters: "Wapiga kura waliojiandikisha",
      hqLabel: "Mji wa Wajir — makao makuu ya kaunti",
      whatLivesHereTitle: "Kitakachokuwa hapa",
      whatLivesHereBody:
        "Vipaumbele vya eneo, miradi inayoendelea, wawakilishi wa wadi na maelezo ya mawasiliano — mara tu yatakapotolewa na kampeni kwa kila eneo.",
      mapAria: "Ramani shirikishi ya maeneo bunge sita ya Kaunti ya Wajir",
    },
    news: {
      kicker: "Habari na Matukio",
      title: "Kutoka njia ya kampeni kote Wajir.",
      intro:
        "Taarifa, habari za vyombo vya habari na matukio yajayo — mikutano, majadiliano ya hadhara na mikutano ya kijamii, wadi kwa wadi.",
      kindNews: "Habari",
      kindEvent: "Tukio",
      updatesHeading: "Usikose taarifa yoyote",
      updatesBody:
        "Jiandikishe ili kusikia kuhusu matukio katika wadi yako na habari kutoka kwa kampeni.",
      updatesCta: "Jiunge na kampeni",
    },
    getInvolved: {
      kicker: "Jiunge Nasi",
      title: "Kampeni hii ni mali ya Wajir.",
      intro:
        "Toa muda wako, sauti yako au msaada wako. Kila mchango — saa moja ya kufikia watu au shilingi moja kwa lengo hili — inaisogeza kaunti karibu na uongozi inaostahili.",
      volunteerKicker: "Kujitolea",
      volunteerHeading: "Ongeza mikono yako kwenye harakati.",
      volunteerBody:
        "Kutoka mazungumzo ya nyumba kwa nyumba hadi kuandaa mkutano katika wadi yako, kuna nafasi kwa kila mtu. Tuambie unavyotaka kusaidia na unapoishi.",
      volunteerBullets: [
        "Panga na uhamasishe katika wadi yako",
        "Wakilisha kampeni katika matukio ya kijamii",
        "Fikia wapiga kura mtandaoni na nje ya mtandao",
      ],
      donateKicker: "Changia",
      donateHeading: "Iwezeshe kampeni.",
      donateBody:
        "Msaada wa mashinani unaifanya harakati hii kuwa huru na karibu na watu inaowahudumia. Toa unachoweza, kwa M-Pesa au sarafu za dijitali.",
      transparencyTitle: "Kumbuka kuhusu uwazi",
      transparencyBody:
        "Michango ya kisiasa nchini Kenya inasimamiwa na sheria ya fedha za kampeni. Kabla ya kuanza rasmi tutathibitisha kikomo cha michango, mahitaji ya kutoa taarifa na hati za malipo za kutumia.",
    },
    volunteerForm: {
      fullName: "Jina kamili",
      phone: "Nambari ya simu",
      email: "Barua pepe (si lazima)",
      constituency: "Eneo bunge lako",
      selectPlaceholder: "Chagua…",
      howHelp: "Ungependa kusaidia vipi?",
      interests: [
        "Kufikia watu nyumba kwa nyumba",
        "Kuandaa mkutano wa wadi",
        "Mitandao ya kijamii",
        "Matukio na vifaa",
        "Kuhamasisha vijana",
        "Mtandao wa wanawake",
      ],
      submit: "Jiunge na kampeni",
      demoNote:
        "Fomu ya majaribio — bado haijaunganishwa na mfumo wa nyuma. Hakuna data inayohifadhiwa au kutumwa.",
      thanksHeading: "Asante kwa kujitokeza.",
      thanksBody:
        "Hii ni taarifa ya majaribio — fomu bado haijaunganishwa na mfumo wa nyuma. Iunganishe na CRM / huduma yako ya barua pepe ili kuanza kukusanya usajili halisi.",
      submitAnother: "Tuma jibu lingine",
    },
    donate: {
      mpesa: "M-Pesa",
      crypto: "Crypto",
      methodAria: "Njia ya malipo",
      chooseAmount: "Chagua kiasi (KES)",
      other: "Nyingine",
      customAria: "Kiasi chako mwenyewe kwa KES",
      mpesaPhone: "Nambari ya simu ya M-Pesa",
      mpesaPlaceholder: "mf. 0712 345 678",
      mpesaPaybill: "Paybill: 008008",
      mpesaAccount: "Akaunti: MA-008",
      mpesaPrompt: "Tuma ujumbe",
      stkPush: "Tuma ombi la STK",
      stkNote: "Utapokea ujumbe kwenye simu yako wa kuweka PIN yako ya M-Pesa.",
      cryptoAddress: "Anwani ya sarafu za dijitali",
      cryptoNote: "Tuma michango kwa anwani ya mkpok wa kampeni. Bitcoin, Ethereum na sarafu nyingine kuu zinakubaliwa.",
      notLiveTitle: "Bado haijaanza rasmi.",
      notLiveBody:
        "Hii ni hali ya kuchangia pekee. Miamala halisi inahitaji uunganishaji wa mfumo wa nyuma na hati kutoka kwako — Safaricom Daraja API (ombi la STK la M-Pesa) na unganisho la mkpok wa sarafu za dijitali — pamoja na kufuata sheria za fedha za kampeni za Kenya. Hakuna kinachotozwa.",
    },
    footer: {
      tagline:
        "Rekodi ya utumishi kote Kenya na Pembe ya Afrika — sasa kwa nyumbani. Imejengwa kwa watu wa Kaunti ya Wajir.",
      explore: "Chunguza",
      takePart: "Shiriki",
      volunteer: "Kujitolea",
      donate: "Changia",
      findConstituency: "Tafuta eneo bunge lako",
      copyright: "Kampeni ya Mohamed Abdi Affey. Tovuti inaendelezwa.",
      disclaimer:
        "Tovuti ya rasimu — maudhui yaliyowekwa alama “Rasimu” au “Itathibitishwa” siyo ya mwisho na lazima yaidhinishwe kabla ya kuchapisha. Picha ni za muda/za mandhari.",
      skipToContent: "Rukia hadi maudhui",
      photoCreditsLabel: "Picha za ulimwengu mpana wa mhusika:",
    },
  },
};

const so: Dictionary = {
  meta: {
    title: "Mohamed Abdi Affey — Guddoomiyaha Gobolka Wajir",
    description:
      "Siyaasiyaha, diplomaatiga iyo cuqa Wajir. Laga bilaabo codka yar ee Bungega Kenya illaa miisaska nabad ee Geesiga Afrika — rekod adeegta, hadda guriga.",
  },
  nav: {
    brandLine1: "AFFEY",
    brandLine2: "Wajir",
    story: "Hadithu",
    vision: "Waxyaaraha Wajir",
    record: "Rekodka",
    priorities: "Asha Guud",
    wards: "Gobolka Wajir",
    news: "Wararka & Habraha",
    getInvolved: "Ku Lug Leh",
    donate: "Taageero",
    menu: "Menyu",
    close: "Xir",
    home: "Guriga",
  },
  hero: {
    kicker: "Gobolka Wajir · Kampeinika Guddoominimada",
    name: "Mohamed Abdi Affey",
    forOffice: "Guddoomiyaha Gobolka Wajir",
    tagline: "{{FIKRI KAMPEIN — iyo ay tixgeliso}}",
    lead:
      "Cuqa Wajir oo fuulay kititaaga Golaha Wakiilada markii uu jir 27 jir, isagoo gaarka qaraniga caruurta arrimaha dibadda, iyo isagoo masharuufa nabad-galada Geesiga Afrika. Hadda adeegta taasu waxay ku celisay guriga.",
    ctaPrimary: "Eeg rekodka",
    ctaSecondary: "Ku lug leh",
    scroll: "Gogol si ay u bilaabdo",
    placeholderNote:
      "Fikri kampeinika iyo gacannaanida waa waxyaabahabka fuday oo kula hadlayan.",
  },
  credibility: {
    heading: "Sodon sanadood oo adeega bulshada",
    items: [
      { value: "1997", label: "Lagu saxiibaystay Wakilka 27 jir" },
      { value: "2003", label: "Ergada Kenya ee Somalia" },
      { value: "Geesiga", label: "Ergada Gaar ah ee UNHCR iyo IGAD" },
    ],
  },
  timeline: {
    kicker: "Rekodka",
    heading: "Nolol adeega — laga Wajir ilaa dunida, iyo ku noqoshada",
    intro:
      "Wax kasta hoos yaal waxaa laga helay rekodka bulshada ee tixgelsan ee Mohamed Abdi Affey. Waxyaabaha sugaya maaloofnimada yaa hayaan iyo si fudan.",
    presentLabel: "Hadda",
    verifiedTag: "Tixgelsan",
    placeholderTag: "Sugaya maaloofnimada",
    items: [
      {
        id: "born",
        year: "1968",
        title: "Lagu dhashay Gobolka Wajir",
        body: "Mohamed Abdi Affey waxaa lagu dhashay Wajir, waqooyi-xagga gaarka Kenya — gobolka uu hadda doonayo inuu hoggaaminyo.",
        verified: true,
      },
      {
        id: "mp-wajir-south",
        year: "1997",
        title: "Lagu saxiibaystay Wakilka Wajir Koonfur, 27 jir",
        body: "Mid ka mid ah dadka yar ee ah oo lagu saxiibaystay Golaha Wakiilada Kenya, isagoo KANU. Wuxuu u adeegay ilaa 2002.",
        verified: true,
      },
      {
        id: "deputy-minister",
        year: "1997–2002",
        title: "Naibd Wazir, Arrimaha Dibadda",
        body: "Wuxuu u adeegay Wasaarada Arrimaha Dibadda Kenya, isagoo bilaabista kazi oo ku dhex jirta siyaasadda qaraniga iyo diplomasiyada caalami.",
        verified: true,
      },
      {
        id: "ambassador",
        year: "2003–2007",
        title: "Ergada Kenya ee Somalia",
        body: "Wuxuu lagu doortay Madaxweyne Mwai Kibaki oo noqdo Ergada Kenya ee Somalia, wakilka qaraniga dhanka deriska muhiim ah.",
        verified: true,
      },
      {
        id: "nominated-mp",
        year: "2008–2013",
        title: "Wakilka Xeriya ah",
        body: "Wuxuu ku noqday Golaha oo Wakilka Xeriya ah ee ODM-Kenya.",
        verified: true,
      },
      {
        id: "igad-envoy",
        year: "Adeegta",
        title: "Ergada Gaar ah ee IGAD ee ka shaqo Somalia",
        body: "Wuxuu u adeegay Ergada Gaar ah ee Somalia ee Aqalka Maamulka Gobolka (IGAD), isagoo wada jira nabad-galadka gobolka.",
        verified: true,
      },
      {
        id: "unhcr-envoy",
        year: "Adeegta",
        title: "Ergada Gaar ah ee UNHCR, Geesiga Afrika",
        body: "Wuxuu u adeegay Ergada Gaar ah ee UNHCR kwa Geesiga Afrika iyo xaalka aqoonxumada Somaliyeed, isagoo shaqaynaya mid ka mid ah ayaan baab iyo daacad ee aqoonxuma caalamiga ah.",
        verified: true,
      },
      {
        id: "education",
        year: "Waxbarashada",
        title: "Master ee Ilaalinta Khilaafo Caalami",
        body: "Wuxuu leeyahay Master (Jaamacada Nairobi) iyo Bachelor (Jaamacada Kenyatta). Wuu hadal kara Somali, Ingiliziga iyo Kiswahili.",
        verified: true,
      },
      {
        id: "governor-run",
        year: "Hadda",
        title: "Kandidaatiga Guddoomiyaha Gobolka Wajir",
        body: "[TBC — tixgeli maalinta dhaafitaanka, xisbiga, kandidaatiga kale iyo aasaasaha kahor oo ay daabacdo.]",
        verified: false,
      },
    ],
  },
  common: {
    langLabel: "Luuqa",
    placeholderBadge: "Waxyaabaha fuday — waxaa loo baahan thigigeelin",
    verifiedBadge: "Runta ay tahay",
  },
  ui: {
    status: { verified: "Tixgelsan", draft: "Rasimu", tbc: "Itathibitishwa" },
    countdown: {
      label: "Cilliyada illaa codsiga",
      dateLine: "Agusta 10, 2027 - Saacadda Afrika Mashariqida",
      days: "Cilliyada",
      hours: "Saacadaha",
      minutes: "Daqiqada",
      seconds: "Ilkoodka",
      daysShort: "C",
      hoursShort: "S",
      minutesShort: "D",
      secondsShort: "I",
      passed: "Codsiga waad gudhe dhan",
    },
    home: {
      visionKicker: "Waxyaaraha",
      visionHeading: "Asha Guud kwa Wajir",
      seeAllPriorities: "Eeg asha guud oo dhan",
      draftNotice: "Rasimu — eeg ay ay ku gaareysanayso",
      readMore: "Akhri badan",
      storyKicker: "Hadithu",
      storyHeading: "Laga Wajir ilaa Dunida",
      readFullStory: "Akhri hadithu oo dhan",
      portraitAlt: "Sawir la sharaf leh oo Mohamed Abdi Affey",
      portraitCaption: "Ergada Kenya ee Somalia, 2005",
      quote: "Runta ay tahay in familiyadahaygu iyo familiyadii ay leeyihiin kiti, iyo codka, meesha ay muuqaalada lagu sameynayo mustaqbalkooda.",
      quoteAttribution: "Mohamed Abdi Affey",
      ctaHeading: "Waxku xusuusin muxuu iska dhigaysa?",
      ctaBody: "Adeega mahadsanidda ilaa hadda — iska waar muxuu iska dhigaysa gobolka?",
      ctaPrimary: "Barrista diray",
      ctaSecondary: "Ku lug leh",
      heroPhotoAlt: "Sawir cuqa ay bulshada shafanta",
      heroPhotoCaption: "Wajir, 2024",
      centralPromise: "Wajir Hore, Ilaa Calaacal",
      factBorn: "Ku dhashay Wajir",
      factMp: "La doortay MP, da'da",
      factDecades: "Tobannaan sano oo adeeg",
      factElection: "Doorashada gobolka",
      mapNote: "Gobolka Wajir — lix bunges, gobol keliya.",
      statsHeading: "Waxa qorshaha u baahan yahay, tirooyin ahaan.",
      statWater: "goobood biyo cusub oo la dhisi doono 2027",
      statRoads: "km jidadka mudnaanta leh ee la horumarin doono",
      statBursary: "shilin sannadkiiba oo deeqo waxbarasho ah dadka Wajir",
      statConstituencies: "bunges leh liiska mudnaanta maalin walba",
      galleryHeading: "Taariikhda, sawirro ahaan",
      galleryMapAlt: "Khariidada lixda bungo ee Gobolka Wajir",
      galleryMapCaption: "Gobolka Wajir — dhammaan lixda bungo",
      galleryAmbassadorCaption: "Ambassador Somalia, 2003–2007",
      galleryParliamentCaption: "Dhismaha Baarlamaanka, Nairobi — MP, 1997",
      galleryUnhcrCaption: "Wargeeye Gaar ah ee UNHCR, Geeska Afrika",
      galleryLivestockCaption: "Dhaqaalaha xoolaha ee tiirka Aragtida",
    },
    story: {
      kicker: "Hadithu",
      title: "Laga Wajir ilaa Dunida, iyo ku noqoshada",
      imageAlt: "Mohamed Abdi Affey oo ka hadla habraha",
      photoCaption: "Somaliland, 2014",
      timelineKicker: "Rekodka",
      timelineHeading: "Sodon sanadood oo adeega",
      ctaVision: "Waxyaaraha Wajir",
      ctaRecord: "Rekodka",
    },
    vision: {
      kicker: "Waxyaaraha",
      title: "Asha Guud kwa Wajir",
      intro:
        "Shan guud kwa Gobolka Wajir — oo lagu saleysan runta noolol gaarka ah, iyo sodon sanadood oo adeegta. Taasu waxay ku hoggaaminayso howsha kampein oo dhisid iyo xoojin gobolkeenna.",
      imageAlt: "Wajir oo ku jirta taallada Africa",
      helpHeading: "Kaga qayb gal asha guud",
      helpBody:
        "Aasaasaha dhamaystiran waxay lagu sameyn doonaan dad Wajir. Noo sheeg maxaa loo baahan goobaadaada.",
      helpCtaPriorities: "Barrista asha guud",
      helpCtaCounty: "Eeg gobolka",
    },
    record: {
      kicker: "Rekodka",
      title: "Rekodka adeega — goriga iyo dunida",
      intro:
        "Wax kasta hoos yaal waxaa laga helay rekodka tixgelsan ee bulshada ee Mohamed Abdi Affey. Waxba waxa fuday haa jiraan; waxyaabaha gobolka sugaya maaloofnimada waa hayaan iyo si fudan.",
      nationalKicker: "Qaraniga iyo Caalami",
      educationKicker: "Waxbarashada",
      languagesKicker: "Luugaha",
      countyKicker: "Rekodka Gobolka Wajir",
      countyNote: "Sida ay kampeinku bixisay; tirooyinkan weli lama calaamadin sax, qabyo ama la xaqiijiyay sida qaybaha kale ee boggan.",
      ctaStory: "Akhri hadithu oo dhan",
      ctaVision: "Waxyaaraha Wajir",
    },
    wards: {
      kicker: "Gobolka Wajir",
      title: "Shan bunge. Gobol mid. Qorshe kasta.",
      intro:
        "Wajir waxaa lagu dhisay shan bunge iyo wadi labaatan. Xulo bunge si aad u aragto layni kampeinika — iyo noo sheeg waxaa loo baahan meela aad ku nooshahay.",
      mapTitle: "Shan bunge, gobol mid",
      mapCaption:
        "Waxaa lagu sawir ramadhan bunge gobolka. Mipakan waa muuqaal kaliya — tiibiya data rasmi ee IEBC kahor oo ay daabacdo.",
      constituencyLabel: "Bunge",
      population: "Tirada dadka",
      voters: "Qofka codsiga oo liistada lagu jiro",
      hqLabel: "Magaalada Wajir — xarumaha guddiga gobolka",
      whatLivesHereTitle: "Waxaa joogaa halkan",
      whatLivesHereBody:
        "Asha bunge, masharuufa socoto, wakilnimada wadi iyo macluumaadka lagu xidhiidhiyey — marka hore lagu daabaco kampein bunge kasta.",
      mapAria: "Ramadhan la mid ah oo leh shan bunge gobolka Wajir",
    },
    news: {
      kicker: "Wararka & Habraha",
      title: "Kampeinika gobolka Wajir oo dhan",
      intro:
        "Tashriyaadda, wararka warfaafinta iyo habraha walaalo — buluugga, hadalo habraha iyo isku timaaminta kijamii, wadi kasta.",
      kindNews: "Warka",
      kindEvent: "Habra",
      updatesHeading: "Maya maqliin isbedelka",
      updatesBody:
        "Listu sida hadbahe ee goobaadaada iyo wararka kampein.",
      updatesCta: "Ku lug leh kampein",
    },
    getInvolved: {
      kicker: "Ku Lug Leh",
      title: "Kampein qof walba ee Wajir.",
      intro:
        "Tago waktigaaga, codkaaga ama taageertaada. Qayb kasta — saacad talida ama shilin yar oo dedican — waxay gobolka u dhoweeysaa hoggaanka ay leysanayso.",
      volunteerKicker: "Adeeg Bulshada",
      volunteerHeading: "Ku dar gacanjaadka harakada.",
      volunteerBody:
        "Laga hadal nyumba kwa nyumba illaa bilaabista habar goobaadaada, waxaa jira mesha qof walba. Noo sheeg sidee ay kugu jirtid caasimad iyo aad ku nooshahay.",
      volunteerBullets: [
        "Panga iyo hamasi goobaadaada",
        "Wakilnimada kampein habaro bulshada",
        "Sida lagu gaarsido qofka codsiga intaaneta iyo intaaneta la dib",
      ],
      donateKicker: "Taageero",
      donateHeading: "Bilaabi kampein.",
      donateBody:
        "Taageerta dadka adka waxay kaami u tahay harakada oo midnimad iyo u dhow dadka ay adeegto. Tago waxaad karti kartaa, kwa M-Pesa ama saraf dijitaal.",
      transparencyTitle: "Tusaale ammaanka",
      transparencyBody:
        "Taageerta siyaasada Kenya waxay ku hadhaya sharciga adeegta kampein. Kahor ay bilaabta, waxay tixgelisan doonaan xaddidan taageerta, sharcinimada iyo shahaadaha maliyada la isticmaalo.",
    },
    volunteerForm: {
      fullName: "Magaca buubuhu",
      phone: "Nambarka telefanka",
      email: "Imailka (maya-looga-baahan)",
      constituency: "Bungega aad ku nooshahay",
      selectPlaceholder: "Xulo…",
      howHelp: "Sidee ay kugu jirtid caasimad?",
      interests: [
        "Talida nyumba kwa nyumba",
        "Bilaabista habar goobaad",
        "Shabakada kijamii",
        "Habarro iyo habka",
        "Hamasi yurub",
        "Shabakada gabar",
      ],
      submit: "Ku lug leh kampein",
      demoNote:
        "Forumaad tijaabo — ma jiro xidhiidhka nidaama nyuma. Macluumaadka waxaa waxa la dhowrayo ama la dirayo.",
      thanksHeading: "Waad mahadsan tahay si aad u wada jirtid.",
      thanksBody:
        "Taasu waa taariikhda tijaabo — forumaadku ma jiro xidhiidhka nidaama nyuma. Xidhiidhka nidaamka CRM / adeegta imbaaila si ay bilaabato soo urur liistada dhabarka.",
      submitAnother: "Soo gal jawab kale",
    },
    donate: {
      mpesa: "M-Pesa",
      crypto: "Crypto",
      methodAria: "Habka lagu bixiyo",
      chooseAmount: "Xulo kiisa (KES)",
      other: "Kale",
      customAria: "Kisa aad leedahay KES",
      mpesaPhone: "Nambarka M-Pesa telefanka",
      mpesaPlaceholder: "mf. 0712 345 678",
      mpesaPaybill: "Paybill: 008008",
      mpesaAccount: "Akaunti: MA-008",
      mpesaPrompt: "Tuma ujumbe",
      stkPush: "Tuma STK push",
      stkNote: "Waxaad helaysaa ujumbe telefankaan oo lagu soo sheegto M-Pesa PIN-kaaga.",
      cryptoAddress: "Ciwaanka saraf dijitaal",
      cryptoNote: "Taga taageerto anwani wallet kampeinika. Bitcoin, Ethereum iyo saraf yar kale waa la qabaa.",
      notLiveTitle: "Hadda lama jiro si rasmi ah.",
      notLiveBody:
        "Taasu waa adeegta taageerta kaliya. Miamalo dhabarka lagu baahan xidhiidhka nidaama nyuma iyo shahaadaha aad — Safaricom Daraja API (STK push M-Pesa) iyo xidhiidhka wallet saraf dijitaal — iyo isaga walaliyaysiinta sharciga adeegta kampein Kenya. Waxa lagu bixi waayo.",
    },
    footer: {
      tagline:
        "Rekodka adeega gobolka Kenya iyo Geesiga Afrika — hadda guriga. Waxaa lagu dhisay dadka Gobolka Wajir.",
      explore: "Eeg",
      takePart: "Qayb gal",
      volunteer: "Adeeg Bulshada",
      donate: "Taageero",
      findConstituency: "Hel bungega aad ku nooshahay",
      copyright: "Kampein Mohamed Abdi Affey. Gobo isdhaabaya.",
      disclaimer:
        "Goboka rasimu — waxyaaraha aysan fasaxan \"Rasimu\" ama \"Iyo iyo ay ay ku gaareysanayso\" siyo waxyaabaha iska dhamaystiran iyo must la tixgeliso kahor daabaca. Sawirka waa waxyaabaha waqti le'eg/sawir bariis.",
      skipToContent: "Iska gal waxyaaraha",
      photoCreditsLabel: "Sawirada dunida ballaaran ee mawduuca:",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  sw,
  so,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
