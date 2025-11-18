"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Language } from "@/app/[lang]/dictionaries";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] as Language;
  const targetLang: Language = currentLang === "ja" ? "en" : "ja";
  const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

  return (
    <Button variant="outline" size="sm" asChild className="print:hidden">
      <Link href={targetPath}>{targetLang.toUpperCase()}</Link>
    </Button>
  );
}
