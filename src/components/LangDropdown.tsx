import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations, type Lang } from "../i18n/translations";
import { cn } from "../utils/cn";

const LANGS: Lang[] = ["fr", "en", "ar"];

interface Props {
  dropUp?: boolean;
  block?: boolean;
}

export function LangDropdown({ dropUp = false, block = false }: Props) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", block && "w-full")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition hover:border-gold-400 hover:bg-white/10",
          block && "w-full justify-between rounded-2xl px-5 py-4 text-base"
        )}
      >
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-gold-400" />
          {translations[lang].langLabel}
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute z-50 min-w-[11rem] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-1.5 shadow-2xl shadow-navy-950/60",
            block ? "inset-x-0" : "end-0",
            dropUp ? "bottom-full mb-2" : "top-full mt-2"
          )}
        >
          {LANGS.map((l) => {
            const active = l === lang;
            return (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(l);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-gold-500/15 text-gold-300"
                      : "text-cream-100/85 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <span className="flex h-7 w-9 items-center justify-center rounded-md bg-white/10 text-[11px] font-bold tracking-wider text-gold-400">
                    {l.toUpperCase()}
                  </span>
                  <span className="flex-1 text-start font-medium">
                    {translations[l].langLabel}
                  </span>
                  {active && <Check className="h-4 w-4 text-gold-400" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
