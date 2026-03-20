import { AboutContent } from "@/components/about/AboutContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Mourad Labadi — ERGO Advisor Berlin",
  description: "Meet Mourad Labadi, your independent ERGO insurance advisor in Berlin with a corporate finance background and expertise in 4 languages.",
};

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return <AboutContent isEn={true} />;
}
