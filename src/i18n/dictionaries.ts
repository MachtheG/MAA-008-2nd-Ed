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
    card: string;
    paypal: string;
    methodAria: string;
    chooseAmount: string;
    other: string;
    customAria: string;
    mpesaPhone: string;
    mpesaPlaceholder: string;
    stkPush: string;
    stkNote: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
    donateAmount: string;
    cardNote: string;
    paypalPay: string;
    paypalNote: string;
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
        "Grassroots support keeps this movement independent and close to the people it serves. Give what you can, by M-Pesa, card or PayPal.",
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
      card: "Card",
      paypal: "PayPal",
      methodAria: "Payment method",
      chooseAmount: "Choose an amount (KES)",
      other: "Other",
      customAria: "Custom amount in KES",
      mpesaPhone: "M-Pesa phone number",
      mpesaPlaceholder: "e.g. 0712 345 678",
      stkPush: "Send STK push",
      stkNote: "You'll receive a prompt on your phone to enter your M-Pesa PIN.",
      cardNumber: "Card number",
      expiry: "MM / YY",
      cvc: "CVC",
      donateAmount: "Donate",
      cardNote:
        "Card fields are illustrative — integrate a PCI-compliant processor.",
      paypalPay: "Pay with PayPal",
      paypalNote:
        "Redirects to PayPal once a business account & SDK keys are configured.",
      notLiveTitle: "Not yet live.",
      notLiveBody:
        "This is the donation experience only. Real transactions need backend integration & credentials from you — Safaricom Daraja API (M-Pesa STK push), a card processor (e.g. Stripe/Flutterwave), and a PayPal business account — plus compliance with Kenyan campaign-finance rules. Nothing is charged.",
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
        "Msaada wa mashinani unaifanya harakati hii kuwa huru na karibu na watu inaowahudumia. Toa unachoweza, kwa M-Pesa, kadi au PayPal.",
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
      card: "Kadi",
      paypal: "PayPal",
      methodAria: "Njia ya malipo",
      chooseAmount: "Chagua kiasi (KES)",
      other: "Nyingine",
      customAria: "Kiasi chako mwenyewe kwa KES",
      mpesaPhone: "Nambari ya simu ya M-Pesa",
      mpesaPlaceholder: "mf. 0712 345 678",
      stkPush: "Tuma ombi la STK",
      stkNote: "Utapokea ujumbe kwenye simu yako wa kuweka PIN yako ya M-Pesa.",
      cardNumber: "Nambari ya kadi",
      expiry: "MM / YY",
      cvc: "CVC",
      donateAmount: "Changia",
      cardNote:
        "Sehemu za kadi ni za mfano — unganisha mfumo wa malipo unaokidhi viwango vya PCI.",
      paypalPay: "Lipa kwa PayPal",
      paypalNote:
        "Inaelekeza PayPal mara akaunti ya biashara na funguo za SDK zitakapowekwa.",
      notLiveTitle: "Bado haijaanza rasmi.",
      notLiveBody:
        "Hii ni hali ya kuchangia pekee. Miamala halisi inahitaji uunganishaji wa mfumo wa nyuma na hati kutoka kwako — Safaricom Daraja API (ombi la STK la M-Pesa), mfumo wa kadi (mf. Stripe/Flutterwave), na akaunti ya biashara ya PayPal — pamoja na kufuata sheria za fedha za kampeni za Kenya. Hakuna kinachotozwa.",
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
    },
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
