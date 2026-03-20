"use client";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales } from "@/i18n";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string | null) => {
    if (!newLocale) return;
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.replace(segments.join('/') || '/');
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[100px] bg-transparent border-input text-sm">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="de">🇩🇪 DE</SelectItem>
        <SelectItem value="en">🇬🇧 EN</SelectItem>
        <SelectItem value="fr">🇫🇷 FR</SelectItem>
        <SelectItem value="ar">🇸🇦 AR</SelectItem>
      </SelectContent>
    </Select>
  );
}
