import { ArrowRight, CheckCircle2, CalendarCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionLink } from "./SectionLink";

export function Hero() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[720px] items-center overflow-hidden bg-navy-950 pb-20 pt-20 sm:min-h-[800px] sm:pb-28"
    >
      <img
        src="/images/lawyer.jpg"
        alt={t.lawyer.title}
        className="absolute inset-0 h-full w-full object-cover object-[68%_top] rtl:object-[32%_top]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/15 rtl:bg-gradient-to-l" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/25" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 start-0 hidden w-px bg-gradient-to-b from-transparent via-gold-400/60 to-transparent lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 end-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-x relative w-full py-20 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
              <span className="h-px w-10 bg-gold-400" />
              {t.hero.badge}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-serif text-xl font-semibold text-white/90 sm:text-2xl">
              {t.lawyer.title}
            </p>
            <h1 className="mt-3 font-serif text-5xl font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl">
              {t.hero.title} <span className="text-gold-400">{t.hero.titleAccent}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => open()} className="btn-gold px-7 py-3.5">
                <CalendarCheck className="h-4 w-4" />
                {t.hero.ctaPrimary}
                <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
              </button>
              <SectionLink id="services" className="btn-ghost px-7 py-3.5">
                {t.hero.ctaSecondary}
              </SectionLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-7 inline-flex items-center gap-2 text-sm text-cream-100/70">
              <CheckCircle2 className="h-4 w-4 text-gold-400" />
              {t.hero.trustNote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
