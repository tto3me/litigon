import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, useLanguage } from "@/i18n/language-provider";
import { Check, ChevronDown } from "lucide-react";
import cnFlag from "@/assets/flags/cn.svg";
import frFlag from "@/assets/flags/fr.svg";
import saFlag from "@/assets/flags/sa.svg";
import usFlag from "@/assets/flags/us.svg";
import { useEffect, useState } from "react";

const languages: Array<{ value: Locale; label: string; short: string; flag: string }> = [
  { value: "en", label: "English", short: "EN", flag: usFlag },
  { value: "ar", label: "العربية", short: "AR", flag: saFlag },
  { value: "fr", label: "Français", short: "FR", flag: frFlag },
  { value: "zh", label: "中文", short: "中文", flag: cnFlag },
];

const LanguageSwitcher = ({ compact = false }: { compact?: boolean }) => {
  const { locale, setLocale, t } = useLanguage();
  const [flagsReady, setFlagsReady] = useState(false);
  const selected = languages.find((language) => language.value === locale) ?? languages[0];

  useEffect(() => {
    let cancelled = false;

    const preloadFlags = languages.map(
      ({ flag }) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          const finish = () => {
            if (typeof image.decode === "function") {
              image.decode().catch(() => undefined).then(resolve);
            } else {
              resolve();
            }
          };

          image.onload = finish;
          image.onerror = () => resolve();
          image.src = flag;
          if (image.complete) finish();
        }),
    );

    Promise.all(preloadFlags).then(() => {
      if (!cancelled) setFlagsReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div data-i18n-ignore>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="gray"
            size="sm"
            disabled={!flagsReady}
            aria-label={t("Select language")}
            className={`h-10 border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white ${compact ? "w-10 px-0" : "gap-2 px-3"}`}
          >
            <img
              src={selected.flag}
              alt=""
              loading="eager"
              decoding="sync"
              width={24}
              height={16}
              className="h-4 w-6 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
            />
            <span className={compact ? "sr-only" : "text-xs font-semibold"}>{selected.short}</span>
            {!compact && <ChevronDown className="size-3.5" aria-hidden="true" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={10}
          className="min-w-48 border-white/10 bg-black p-1.5 text-white"
        >
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.value}
              onSelect={() => setLocale(language.value)}
              className="flex cursor-pointer gap-3 px-3 py-2.5 focus:bg-white/10 focus:text-white"
            >
              <img
                src={language.flag}
                alt=""
                loading="eager"
                decoding="sync"
                width={28}
                height={18}
                className="h-[18px] w-7 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
              />
              <span>{language.label}</span>
              {locale === language.value && <Check className="ms-auto size-4 text-primary" aria-hidden="true" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
