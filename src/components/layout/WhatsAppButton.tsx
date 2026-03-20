import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/4915100000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  );
}
