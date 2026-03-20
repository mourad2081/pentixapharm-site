import { BookingContent } from "@/components/booking/BookingContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Mourad Labadi — ERGO Advisor Berlin",
  description: "Book your free 30-minute consultation online or in person in Berlin. Zero obligation, zero pressure.",
};

export default function BookingPage({ params: { locale } }: { params: { locale: string } }) {
  return <BookingContent isEn={true} />;
}
