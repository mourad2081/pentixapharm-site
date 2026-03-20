import { PiggyBank, LucideIcon } from "lucide-react";

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
      text: "The statutory state pension is no longer sufficient. The average pension gap in Germany exceeds 800€ per month. Whoever relies solely on the state today risks poverty in retirement.",
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
      },
      {
        question: "Is my deposited money guaranteed to be returned?",
        answer: "Under the ERGO Guarantee plan, your verified contributed payments are technically secured and guaranteed at the start of your retirement (depending strictly on the designated tariff level)."
      }
    ]
  }
};
