import { AdminPanel } from "@/components/admin/AdminPanel";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — Blog Manager | Next Gen Capital Advisor",
  description: "Admin panel for managing blog content.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPanel />;
}

