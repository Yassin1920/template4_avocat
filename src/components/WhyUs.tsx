import { ShieldCheck, Zap, Eye, BadgeCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [ShieldCheck, Zap, Eye, BadgeCheck];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative isolate overflow-hidden bg-navy-900">
      <img
        src="/images/office.jpg"
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 via-navy-900/85 to-navy-950" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 start-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl"
      />

      <div className="container-x">
        <Reveal>
          <SectionHeading
            light
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            subtitle={t.why.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/50 hover:bg-white/[0.09]">
                  <span className="pointer-events-none absolute -end-2 -top-4 font-serif text-8xl font-bold text-white/[0.04]">
                    {i + 1}
                  </span>
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-900 shadow-lg shadow-gold-600/30 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </span>
                  <h3 className="relative mt-6 font-serif text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-cream-100/70">
                    {item.desc}
                  </p>
                  <span className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
