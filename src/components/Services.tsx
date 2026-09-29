import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SERVICE_ICONS } from "./serviceIcons";

export function Services() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section
      id="services"
      className="section-pad relative scroll-mt-16 overflow-hidden bg-cream-50 pt-24 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-32 top-20 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            subtitle={t.services.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i] ?? SERVICE_ICONS[0];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-navy-900 hover:bg-navy-900 hover:shadow-2xl hover:shadow-navy-900/25">
                  <span className="absolute end-6 top-3 font-serif text-7xl font-bold text-navy-900/[0.05] transition-colors duration-500 group-hover:text-white/[0.07]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-gold-400 shadow-lg shadow-navy-900/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>

                  <h3 className="relative mt-6 font-serif text-xl font-bold text-navy-900 transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-navy-900/65 transition-colors duration-500 group-hover:text-cream-100/75">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => open(i)}
                    className="relative mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-gold-600 transition-all duration-300 after:absolute after:inset-0 after:content-[''] group-hover:gap-3 group-hover:text-gold-400"
                    style={{ position: "static" }}
                  >
                    {t.services.cta}
                    <ArrowRight className="h-4 w-4 rtl:-scale-x-100" />
                  </button>

                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-gold-600 transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
