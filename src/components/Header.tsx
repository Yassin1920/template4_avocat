import { useEffect, useState } from "react";
import { Scale, Menu, X, CalendarCheck, ArrowUpRight, Phone } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { FIRM } from "../config";
import { cn } from "../utils/cn";
import { LangDropdown } from "./LangDropdown";
import { SectionLink } from "./SectionLink";

function Brand({ onClick }: { onClick?: () => void }) {
  const { t } = useLanguage();
  return (
    <SectionLink id="home" onClick={onClick} className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-600/30">
        <Scale className="h-5 w-5 text-navy-900" strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-base font-bold text-white sm:text-lg">
          {t.brand.name}
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400 sm:text-[11px]">
          {t.brand.specialty}
        </span>
      </span>
    </SectionLink>
  );
}

export function Header() {
  const { t } = useLanguage();
  const { open, page } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + Esc + auto-close on desktop resize while the drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [page]);

  const links = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "about", label: t.nav.about },
    { id: "reviews", label: t.nav.reviews },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  const solid = scrolled || page === "booking";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          solid
            ? "border-b border-white/10 bg-navy-900/90 shadow-lg shadow-navy-950/40 backdrop-blur-md"
            : "border-b border-transparent bg-navy-900/40 backdrop-blur-sm"
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
          <Brand />

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <SectionLink
                key={l.id}
                id={l.id}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-cream-100/85 transition-colors hover:text-gold-400"
              >
                {l.label}
              </SectionLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <LangDropdown />
            </div>

            {page !== "booking" && (
              <button onClick={() => open()} className="btn-gold hidden sm:inline-flex">
                <CalendarCheck className="h-4 w-4" />
                {t.ctaBook}
              </button>
            )}

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:border-gold-400 lg:hidden"
              aria-label={t.bookingPage.menu}
              aria-expanded={menuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile drawer (rendered outside <header> so backdrop-filter can't trap it) */}
      <div
        aria-hidden={!menuOpen}
        className={cn(
          "fixed inset-0 z-[70] flex h-dvh flex-col overflow-y-auto bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 transition-all duration-500 lg:hidden",
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
        />
        <Scale
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -start-10 h-72 w-72 text-white/[0.03]"
        />

        {/* Top bar */}
        <div className="container-x relative flex h-16 shrink-0 items-center justify-between border-b border-white/10 sm:h-20">
          <Brand onClick={() => setMenuOpen(false)} />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition hover:border-gold-400"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="container-x relative flex flex-1 flex-col justify-center py-6">
          {links.map((l, i) => (
            <SectionLink
              key={l.id}
              id={l.id}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "group flex items-center gap-4 border-b border-white/10 py-4 transition-all duration-500 sm:py-5",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              <span
                className="font-serif text-sm font-semibold text-gold-500/80"
                style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : "0ms" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-serif text-3xl font-bold text-white transition-colors group-hover:text-gold-400 sm:text-4xl">
                {l.label}
              </span>
              <ArrowUpRight className="h-6 w-6 text-gold-500 opacity-60 transition group-hover:opacity-100 rtl:-scale-x-100" />
            </SectionLink>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="container-x relative shrink-0 space-y-3 pb-8">
          <LangDropdown block dropUp />
          {page !== "booking" && (
            <button
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="btn-gold w-full py-4 text-base"
            >
              <CalendarCheck className="h-5 w-5" />
              {t.ctaBook}
            </button>
          )}
          <a
            href={`tel:${FIRM.phoneDisplay.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 pt-2 text-sm font-medium text-cream-100/75"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            <span dir="ltr">{FIRM.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  );
}
