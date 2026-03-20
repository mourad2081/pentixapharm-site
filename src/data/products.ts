import { PiggyBank, Shield, Smile, Umbrella, Scale, HeartPulse, LucideIcon } from "lucide-react";

export type ProductTier = {
  name: string;
  features: { name: string; included: boolean | string }[];
};

export type Product = {
  slug: string;
  icon: LucideIcon;
  name: string;
  tagline: string;
  backgroundPattern: string;
  problem: {
    text: string;
    illustration?: string;
  };
  solution: {
    title: string;
    benefits: string[];
  };
  tiers?: ProductTier[];
  faqs: { question: string; answer: string }[];
};

export const products: Record<string, Product> = {
  "altersvorsorge": {
    slug: "altersvorsorge",
    icon: PiggyBank,
    name: "Retirement & Pension",
    tagline: "The ERGO Pension Guarantee – Secure your living standards effortlessly in old age.",
    backgroundPattern: "dots",
    problem: {
      text: "The statutory state pension is no longer sufficient. The average pension gap in Germany exceeds 800€ per month. Real risk of poverty in old age is a growing concern for many professionals.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "ERGO Pension Guarantee — Guaranteed payouts with enormous tax benefits",
        "Flexible contributions starting from just 25€/month (adjustable anytime)",
        "Maximum state subsidies included (Riester / Rürup compatibility)",
        "Simple, English-friendly, fully digital contract management"
      ]
    },
    tiers: [
      {
        name: "Basic",
        features: [
          { name: "Guaranteed Pension", included: true },
          { name: "Flexible Add-ons", included: true },
          { name: "Death Benefit", included: false },
          { name: "Yield Booster", included: false },
        ]
      },
      {
        name: "Comfort",
        features: [
          { name: "Guaranteed Pension", included: true },
          { name: "Flexible Add-ons", included: true },
          { name: "Death Benefit", included: true },
          { name: "Yield Booster", included: false },
        ]
      },
      {
        name: "Premium",
        features: [
          { name: "Guaranteed Pension", included: true },
          { name: "Flexible Add-ons", included: true },
          { name: "Death Benefit", included: "Extended" },
          { name: "Yield Booster", included: true },
        ]
      }
    ],
    faqs: [
      {
        question: "When should I start saving for my pension?",
        answer: "As immediately as possible. Due to compound interest mechanics, even small contributions injected early are extremely powerful."
      },
      {
        question: "Can I adjust my contributions during financial bottlenecks?",
        answer: "Absolutely. The ERGO Pension grants full flexibility. You can pause premiums entirely or lower them securely to exactly 25€ per month."
      }
    ]
  },
  "lebensversicherung": {
    slug: "lebensversicherung",
    icon: Shield,
    name: "Life Insurance",
    tagline: "Financial peace of mind and protection for those you love most.",
    backgroundPattern: "geometric",
    problem: {
      text: "The loss of a main earner can leave a family in financial ruin. Rent, mortgages, and education costs don't stop, and state support is often minimal.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "High payout amounts for low monthly premiums",
        "Immediate protection starting from the first day",
        "Flexible adjustment of the sum insured as your life changes",
        "Tax-advantaged payouts for your beneficiaries"
      ]
    },
    faqs: [
      {
        question: "Who should get life insurance?",
        answer: "Anyone with dependents, a mortgage, or private debts. It's essential for young parents and homeowners."
      },
      {
        question: "Can I cancel at any time?",
        answer: "Yes, our term life insurance policies offer regular termination options if your situation changes."
      }
    ]
  },
  "zahnzusatzversicherung": {
    slug: "zahnzusatzversicherung",
    icon: Smile,
    name: "Supplemental Dental",
    tagline: "Radiant smiles without the exorbitant dental bills.",
    backgroundPattern: "dots",
    problem: {
      text: "Public health insurance (GKV) covers only standard care. Implants, high-end dentures, and professional cleaning can cost thousands of euros out-of-pocket.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "Up to 100% coverage for implants, bridges, and crowns",
        "No waiting periods — protection starts immediately",
        "Unlimited professional dental cleaning (PZR) covered annually",
        "Easy digital claim submission via app"
      ]
    },
    faqs: [
      {
        question: "Is there a waiting period?",
        answer: "No, ERGO dental plans are known for having no waiting periods, meaning you are covered from day one."
      },
      {
        question: "What about pre-existing conditions?",
        answer: "Treatments already started or recommended by a dentist before the contract are generally not covered. We recommend starting early!"
      }
    ]
  },
  "unfallversicherung": {
    slug: "unfallversicherung",
    icon: Umbrella,
    name: "Accident Insurance",
    tagline: "Worldwide 24/7 protection, wherever life takes you.",
    backgroundPattern: "geometric",
    problem: {
      text: "Statutory accident insurance only covers you at work and on the way there. 70% of accidents happen during leisure time, at home, or abroad where you have no state coverage.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "Worldwide protection 24 hours a day, at home and at work",
        "High capital payouts for long-term disability",
        "Emergency assistance services included (rescue, transport)",
        "Specialized tariffs for children, seniors, and sports enthusiasts"
      ]
    },
    faqs: [
      {
        question: "Are sports accidents covered?",
        answer: "Yes, even high-risk hobbies are often covered under our comprehensive accident insurance."
      },
      {
        question: "Does it cover me outside of Germany?",
        answer: "Yes, ERGO accident insurance provides worldwide protection, including medical evacuation if necessary."
      }
    ]
  },
  "rechtsschutzversicherung": {
    slug: "rechtsschutzversicherung",
    icon: Scale,
    name: "Legal Protection",
    tagline: "Safeguard your rights effortlessly in all legal disputes.",
    backgroundPattern: "dots",
    problem: {
      text: "Legal disputes with employers, landlords, or in traffic can be ruinously expensive. Many avoid seeking justice because of the high cost of lawyers and court fees.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "Full coverage of lawyerFees, court costs, and witness fees",
        "Free initial legal consultation via specialized hotline",
        "Modular choice: Private, Professional, Traffic, or Housing law",
        "Coverage of costs for mediation to resolve conflicts peacefully"
      ]
    },
    faqs: [
      {
        question: "How soon can I use the legal protection?",
        answer: "Most legal areas have a 3-month waiting period, but traffic law usually has no waiting period at all."
      },
      {
        question: "Can I choose my own lawyer?",
        answer: "Yes, ERGO allows you to choose your own specialized lawyer anywhere in Germany."
      }
    ]
  },
  "private-krankenversicherung": {
    slug: "private-krankenversicherung",
    icon: HeartPulse,
    name: "Private Health (PKV)",
    tagline: "Premium healthcare with specialist access tailored for you.",
    backgroundPattern: "geometric",
    problem: {
      text: "Public insurance often means long waiting times for specialists, basic hospital wards, and limited coverage for alternative medicine.",
    },
    solution: {
      title: "The ERGO Solution",
      benefits: [
        "Preferred treatment as a private patient (Chief Physician, Single Room)",
        "Guaranteed state-of-the-art medical treatment for life",
        "Worldwide coverage and high-end dental benefits included",
        "Premium stability through demographic aging reserves"
      ]
    },
    faqs: [
      {
        question: "Who can switch to private health insurance?",
        answer: "Employees above a certain income threshold (JAEG), self-employed individuals, and civil servants (Beamte)."
      },
      {
        question: "Will my premiums rise as I get older?",
        answer: "ERGO builds aging reserves to keep premiums as stable as possible in your later years."
      }
    ]
  }
};
