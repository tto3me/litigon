import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, useLanguage } from "@/i18n/language-provider";
import { Globe2 } from "lucide-react";

const languages: Array<{ value: Locale; label: string; short: string }> = [
  { value: "en", label: "English", short: "EN" },
  { value: "ar", label: "العربية", short: "AR" },
  { value: "fr", label: "Français", short: "FR" },
  { value: "zh", label: "中文", short: "中文" },
];

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { locale, setLocale, t } = useLanguage();
  const selected = languages.find((language) => language.value === locale) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t("Select language")}
          className="h-10 gap-2 border border-white/15 bg-white/5 px-3 text-white hover:bg-white/10 hover:text-white"
        >
          <Globe2 className="h-4 w-4" />
          <span className={compact ? "sr-only" : "text-xs font-semibold"}>{selected.short}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40 border-white/10 bg-black text-white">
        <DropdownMenuRadioGroup value={locale} onValueChange={(value) => setLocale(value as Locale)}>
          {languages.map((language) => (
            <DropdownMenuRadioItem
              key={language.value}
              value={language.value}
              className="cursor-pointer focus:bg-white/10 focus:text-white"
            >
              {language.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;