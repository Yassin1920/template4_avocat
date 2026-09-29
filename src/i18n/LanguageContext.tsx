import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "./translations";
import { extra, type Extra } from "./extra";

export type FullT = Translations & Extra;

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  dir: "ltr" | "rtl";
  t: FullT;
}

const Context = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && translations[saved]) return saved;
    }
    return "fr";
  });

  const dir = translations[lang].dir;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (typeof localStorage !== "undefined") localStorage.setItem("lang", lang);
  }, [lang, dir]);

  const t = useMemo<FullT>(() => ({ ...translations[lang], ...extra[lang] }), [lang]);

  const value = useMemo<LanguageCtx>(
    () => ({ lang, setLang: setLangState, dir, t }),
    [lang, dir, t]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useLanguage() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
