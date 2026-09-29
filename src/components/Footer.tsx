import { Scale, MessageCircle, ArrowUpRight, CalendarCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { FIRM } from "../config";
import { LangDropdown } from "./LangDropdown";
import { SectionLink } from "./SectionLink";

function LinkedIn({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
    </svg>
  );
}
function Facebook({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function Instagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const { open } = useBooking();

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "about", label: t.nav.about },
    { id: "reviews", label: t.nav.reviews },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  const socials = [
    { icon: LinkedIn, href: FIRM.social.linkedin, label: "LinkedIn" },
    { icon: Facebook, href: FIRM.social.facebook, label: "Facebook" },
    { icon: Instagram, href: FIRM.social.instagram, label: "Instagram" },
    { icon: MessageCircle, href: FIRM.social.whatsapp, label: "WhatsApp" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-cream-100/80">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <Scale
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -end-16 h-96 w-96 text-white/[0.025]"
      />

      <div className="container-x relative py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-md shadow-gold-600/30">
                <Scale className="h-6 w-6 text-navy-900" strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-lg font-bold text-white">
                  {t.brand.name}
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400">
                  {t.brand.specialty}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/65">
              {t.footer.about}
            </p>
            <button onClick={() => open()} className="btn-gold mt-5">
              <CalendarCheck className="h-4 w-4" />
              {t.ctaBook}
            </button>
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition-colors hover:border-gold-400 hover:bg-gold-500/10 hover:text-gold-400"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-base font-bold text-white">{t.footer.quickLinks}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <SectionLink
                    id={l.id}
                    className="inline-flex items-center gap-1.5 text-cream-100/70 transition-colors hover:text-gold-400"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 rtl:-scale-x-100" />
                    {l.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="font-serif text-base font-bold text-white">{t.footer.expertise}</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {t.services.items.map((s, i) => (
                <li key={s.title}>
                  <button
                    onClick={() => open(i)}
                    className="text-start text-cream-100/70 transition-colors hover:text-gold-400"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-bold text-white">{t.footer.contactUs}</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              <li>{FIRM.addressQuery}</li>
              <li>
                <a
                  href={`tel:${FIRM.phoneDisplay.replace(/\s/g, "")}`}
                  dir="ltr"
                  className="inline-block transition-colors hover:text-gold-400"
                >
                  {FIRM.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FIRM.email}`}
                  className="transition-colors hover:text-gold-400"
                >
                  {FIRM.email}
                </a>
              </li>
              <li className="pt-2">
                <LangDropdown dropUp />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-cream-100/55">
            © {new Date().getFullYear()} {t.brand.name}. {t.footer.rights} {t.footer.madeBy}
          </p>
          <span className="text-xs text-cream-100/55">{t.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
