import { BookingContent } from "@/components/booking/BookingContent";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Consultation | Next Gen Capital — Financial Advisors Germany",
  description: "Book your free 30-minute consultation with our financial advisors. Available online or in person across Germany. Zero obligation.",
};

export default function BookingPage({ params: { locale } }: { params: { locale: string } }) {
  return <BookingContent isEn={true} />;
}
