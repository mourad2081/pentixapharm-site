const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'fr', 'ar'];

const dicts = {
  en: {
    TrustBar: {
      item1: "Official ERGO Partner",
      item2: "IHK Berlin Certified",
      item3: "4 Languages Spoken",
      item4: "Free Initial Consultation",
      item5: "5-Star Client Rated",
      item6: "Based in Berlin",
      item7: "500+ Clients Advised",
      item8: "§34d GewO Licensed"
    },
    ProductCards: {
      subtitle: "What We Cover",
      title: "Comprehensive Protection",
      desc: "Custom ERGO portfolios tailored precisely to your situation — from wealth protection to premium healthcare access.",
      viewDetails: "View details",
      p1Title: "Pension & Retirement",
      p1Desc: "Secure your living standards in retirement with guaranteed ERGO plans.",
      p2Title: "Life Insurance",
      p2Desc: "Irreplaceable financial protection and peace of mind for your loved ones.",
      p3Title: "Supplemental Dental",
      p3Desc: "Radiant smiles without the exorbitant dental bills and waiting times.",
      p4Title: "Accident Insurance",
      p4Desc: "Worldwide top-tier 24/7 protection wherever life takes you.",
      p5Title: "Legal Protection",
      p5Desc: "Safeguard your rights effortlessly and confidently in all disputes.",
      p6Title: "Private Health (PKV)",
      p6Desc: "Premium complete private healthcare with specialist access tailored for you."
    },
    StatsSection: {
      title: "The Numbers That Matter",
      desc: "Real data driving real decisions for your financial security.",
      stat1: "Average monthly pension gap in Germany",
      stat2: "PKV eligibility income threshold (2024)",
      stat3: "Clients personally advised",
      stat4: "Languages for your consultation"
    },
    WhyMe: {
      subtitle: "Meet Your Advisor",
      titlePart1: "International perspective.",
      titlePart2: "Local security.",
      desc: "After 5+ years in international corporate finance, I transitioned to protect what matters most — the financial future of real people. I understand Germany's complexity, especially for expats navigating GKV, PKV, and pension gaps.",
      benefit1: "Corporate Finance background — true expertise, not just a salesman",
      benefit2: "Consultations in 4 languages: English, German, French & Arabic",
      benefit3: "Zero pressure philosophy — 100% advisory-first approach",
      benefit4: "Tailored ERGO solutions built around your unique life situation",
      btn1: "Read My Story",
      btn2: "Book a Call",
      advisorName: "Mourad Labadi",
      advisorSubtitle: "Independent ERGO Advisor, Berlin",
      floating1Label: "Years Experience",
      floating2Label: "Languages",
      floating3Label: "Certified Expert"
    }
  },
  de: {
    TrustBar: {
      item1: "Offizieller ERGO Partner",
      item2: "IHK Berlin zertifiziert",
      item3: "Beratung in 4 Sprachen",
      item4: "Kostenlose Erstberatung",
      item5: "5-Sterne Kundenbewertung",
      item6: "Standort Berlin",
      item7: "Über 500 Kunden",
      item8: "§34d GewO lizenziert"
    },
    ProductCards: {
      subtitle: "Unsere Lösungen",
      title: "Umfassender Schutz",
      desc: "Maßgeschneiderte ERGO Portfolios für Ihre individuelle Situation — von der Vermögensabsicherung bis zur erstklassigen medizinischen Versorgung.",
      viewDetails: "Details ansehen",
      p1Title: "Altersvorsorge",
      p1Desc: "Sichern Sie Ihren Lebensstandard im Alter mit garantierten ERGO Konzepten.",
      p2Title: "Lebensversicherung",
      p2Desc: "Unersetzlicher finanzieller Schutz und Seelenfrieden für Ihre Liebsten.",
      p3Title: "Zahnzusatzversicherung",
      p3Desc: "Strahlendes Lächeln ohne horrende Zahnarztrechnungen und lange Wartezeiten.",
      p4Title: "Unfallversicherung",
      p4Desc: "Weltweiter Premium-Schutz rund um die Uhr, wohin das Leben Sie auch führt.",
      p5Title: "Rechtsschutz",
      p5Desc: "Schützen Sie Ihre Rechte mühelos und souverän in allen Streitfällen.",
      p6Title: "Private Krankenversicherung (PKV)",
      p6Desc: "Premium Vollversicherung mit bevorzugtem Facharztzugang, speziell für Sie."
    },
    StatsSection: {
      title: "Zahlen, die zählen",
      desc: "Echte Daten für echte Entscheidungen für Ihre finanzielle Sicherheit.",
      stat1: "Durchschnittliche monatliche Rentenlücke in Deutschland",
      stat2: "PKV Einkommensgrenze (2024)",
      stat3: "Persönlich beratene Kunden",
      stat4: "Sprachen für Ihre Beratung"
    },
    WhyMe: {
      subtitle: "Ihr Berater",
      titlePart1: "Internationale Perspektive.",
      titlePart2: "Lokale Sicherheit.",
      desc: "Nach über 5 Jahren im internationalen Corporate Finance bin ich gewechselt, um das zu schützen, was wirklich zählt — die finanzielle Zukunft von echten Menschen. Ich verstehe Deutschlands Komplexität, besonders für Expats, die GKV, PKV und Rentenlücken navigieren müssen.",
      benefit1: "Corporate Finance Hintergrund — echte Expertise, kein reiner Verkäufer",
      benefit2: "Beratung in 4 Sprachen: Englisch, Deutsch, Französisch & Arabisch",
      benefit3: "Zero-Pressure-Philosophie — 100% beratungsorientierter Ansatz",
      benefit4: "Maßgeschneiderte ERGO-Lösungen für Ihre einzigartige Lebenssituation",
      btn1: "Meine Geschichte lesen",
      btn2: "Termin buchen",
      advisorName: "Mourad Labadi",
      advisorSubtitle: "Unabhängiger ERGO Berater, Berlin",
      floating1Label: "Jahre Erfahrung",
      floating2Label: "Sprachen",
      floating3Label: "Zertifizierter Experte"
    }
  },
  fr: {
    TrustBar: {
      item1: "Partenaire ERGO Officiel",
      item2: "IHK Berlin Certifié",
      item3: "4 Langues Parlées",
      item4: "Consultation Initiale Gratuite",
      item5: "Noté 5 Étoiles",
      item6: "Basé à Berlin",
      item7: "Plus de 500 Clients",
      item8: "Licence §34d GewO"
    },
    ProductCards: {
      subtitle: "Nos Solutions",
      title: "Protection Complète",
      desc: "Des portefeuilles ERGO sur mesure adaptés précisément à votre situation.",
      viewDetails: "Voir les détails",
      p1Title: "Retraite & Prévoyance",
      p1Desc: "Sécurisez votre niveau de vie à la retraite avec les plans ERGO garantis.",
      p2Title: "Assurance Vie",
      p2Desc: "Une protection financière irremplaçable pour vos proches.",
      p3Title: "Complémentaire Dentaire",
      p3Desc: "Des sourires éclatants sans les factures dentaires exorbitantes.",
      p4Title: "Assurance Accident",
      p4Desc: "Protection mondiale de premier plan 24/7.",
      p5Title: "Protection Juridique",
      p5Desc: "Protégez vos droits sans effort et en toute confiance dans tous les litiges.",
      p6Title: "Assurance Santé Privée (PKV)",
      p6Desc: "Des soins de santé privés complets haut de gamme avec accès spécialisé."
    },
    StatsSection: {
      title: "Les Chiffres Qui Comptent",
      desc: "De vraies données pour des décisions éclairées sur votre sécurité financière.",
      stat1: "Déficit mensuel moyen de retraite en Allemagne",
      stat2: "Seuil de revenu pour l'éligibilité PKV (2024)",
      stat3: "Clients conseillés personnellement",
      stat4: "Langues pour votre consultation"
    },
    WhyMe: {
      subtitle: "Votre Conseiller",
      titlePart1: "Perspective internationale.",
      titlePart2: "Sécurité locale.",
      desc: "Après plus de 5 ans en finance d'entreprise internationale, j'ai choisi de protéger ce qui compte le plus : l'avenir financier des personnes. Je comprends la complexité de l'Allemagne, notamment pour les expatriés.",
      benefit1: "Formation en Finance d'Entreprise — une véritable expertise, pas juste vendeur",
      benefit2: "Consultations en 4 langues : Anglais, Allemand, Français & Arabe",
      benefit3: "Philosophie sans pression — approche 100% axée sur le conseil",
      benefit4: "Solutions ERGO sur mesure adaptées à votre situation unique",
      btn1: "Lire mon histoire",
      btn2: "Prendre RDV",
      advisorName: "Mourad Labadi",
      advisorSubtitle: "Conseiller ERGO Indépendant, Berlin",
      floating1Label: "Années d'Expérience",
      floating2Label: "Langues",
      floating3Label: "Expert Certifié"
    }
  },
  ar: {
    TrustBar: {
      item1: "شريك إيرجو الرسمي",
      item2: "معتمد من IHK برلين",
      item3: "نجيد 4 لغات",
      item4: "استشارة أولية مجانية",
      item5: "تقييم 5 نجوم من العملاء",
      item6: "مقرنا في برلين",
      item7: "أكثر من 500 عميل",
      item8: "مرخص بموجب §34d GewO"
    },
    ProductCards: {
      subtitle: "ما نغطيه",
      title: "حماية شاملة",
      desc: "محافظ إيرجو مصممة خصيصًا لتناسب وضعك — من حماية الثروة إلى أفضل رعاية صحية في فئتها.",
      viewDetails: "عرض التفاصيل",
      p1Title: "التقاعد والمعاشات",
      p1Desc: "قم بتأمين مستوى معيشتك في التقاعد من خلال خطط إيرجو المضمونة.",
      p2Title: "التأمين على الحياة",
      p2Desc: "حماية مالية لا يمكن تعويضها وراحة بال لعائلتك.",
      p3Title: "التأمين الإضافي لطب الأسنان",
      p3Desc: "ابتسامات مشرقة بدون فواتير طب أسنان باهظة ووقت انتظار.",
      p4Title: "التأمين ضد الحوادث",
      p4Desc: "حماية عالمية على مدار الساعة طوال أيام الأسبوع أينما كنت.",
      p5Title: "الحماية القانونية",
      p5Desc: "صن حقوقك بثقة وبدون عناء في جميع النزاعات.",
      p6Title: "التأمين الصحي الخاص (PKV)",
      p6Desc: "رعاية صحية خاصة شاملة مع وصول سريع للمتخصصين."
    },
    StatsSection: {
      title: "أرقام تهمك",
      desc: "بيانات حقيقية لدفع قرارات حقيقية لأمنك المالي.",
      stat1: "متوسط الفجوة الشهرية في التقاعد في ألمانيا",
      stat2: "الحد الأدنى للدخل للأهلية للتأمين الصحي الخاص (2024)",
      stat3: "عملاء تم تقديم المشورة لهم شخصيًا",
      stat4: "لغات متاحة لاستشارتك"
    },
    WhyMe: {
      subtitle: "تعرف على مستشارك",
      titlePart1: "منظور دولي.",
      titlePart2: "أمان محلي.",
      desc: "بعد أكثر من 5 سنوات في تمويل الشركات الدولي، انتقلت لحماية ما يهم حقًا — المستقبل المالي لأشخاص حقيقيين. أدرك مدى تعقيد ألمانيا، خاصة بالنسبة للمغتربين.",
      benefit1: "خلفية في تمويل الشركات — خبرة حقيقية، وليس مجرد موظف مبيعات",
      benefit2: "استشارات بـ 4 لغات: الإنجليزية والألمانية والفرنسية والعربية",
      benefit3: "فلسفة خالية من الضغوط — نهج استشاري 100٪",
      benefit4: "حلول إيرجو مخصصة مصممة حول وضع حياتك الفريد",
      btn1: "اقرأ قصتي",
      btn2: "احجز مكالمة",
      advisorName: "مراد لبادي",
      advisorSubtitle: "مستشار إيرجو المستقل، برلين",
      floating1Label: "سنوات الخبرة",
      floating2Label: "لغات",
      floating3Label: "خبير معتمد"
    }
  }
};

locales.forEach(loc => {
  const filePath = path.join(__dirname, 'messages', `${loc}.json`);
  const exist = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = { ...exist, ...dicts[loc] };
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
});
