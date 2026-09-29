import { CalendarCheck, Check, Star, Award } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Lawyer() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section id="about" className="section-pad relative scroll-mt-16 overflow-hidden bg-cream-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -start-32 bottom-10 h-96 w-96 rounded-full bg-navy-600/10 blur-3xl"
      />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Portrait */}
        <Reveal>
          <div className="relative mx-auto max-w-md">
            {/* offset gold frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-gold-500/60 rtl:-translate-x-4" />
            <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-gold-400/25 to-transparent" />
            <div className="relative overflow-hidden rounded-[1.8rem] bg-navy-900 shadow-2xl shadow-navy-900/25">
              <img
                src="/images/lawyer.jpg"
                alt={t.lawyer.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent p-6 pt-20">
                <p className="font-serif text-xl font-bold text-white">{t.lawyer.title}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
                  {t.lawyer.role}
                </p>
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -bottom-6 -start-4 flex items-center gap-3 rounded-2xl border border-gold-500/30 bg-white px-5 py-4 shadow-xl sm:-start-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <div className="font-serif text-2xl font-bold leading-none text-navy-900">
                  {t.lawyer.stats[0].value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900/55">
                  {t.lawyer.stats[0].label}
                </div>
              </div>
            </div>
            <div className="absolute -end-3 top-8 flex items-center gap-2 rounded-2xl border border-white/10 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur sm:-end-6">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
              <span className="text-sm font-bold text-white">{t.reviews.ratingValue}</span>
              <span className="hidden text-xs text-cream-100/70 sm:inline">Google</span>
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={120}>
          <SectionHeading
            align="start"
            eyebrow={t.lawyer.eyebrow}
            title={t.lawyer.title}
          />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-gold-600">
            {t.lawyer.role}
          </p>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-900/70">
            <p className="border-gold-500 ps-5 font-serif text-lg italic leading-relaxed text-navy-900/85 [border-inline-start-width:3px]">
              {t.lawyer.paragraphs[0]}
            </p>
            {t.lawyer.paragraphs.slice(1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-navy-900">
              {t.credentials.title}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {t.credentials.items.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => open()} className="btn-gold mt-8 px-7 py-3.5">
            <CalendarCheck className="h-4 w-4" />
            {t.lawyer.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
