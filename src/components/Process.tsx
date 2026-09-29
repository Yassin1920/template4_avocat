import { PhoneCall, FileSearch, Compass, Gavel } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [PhoneCall, FileSearch, Compass, Gavel];

export function Process() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden bg-cream-50">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            subtitle={t.process.subtitle}
          />
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute inset-x-[12.5%] top-10 hidden h-px border-t-2 border-dashed border-gold-500/50 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.process.steps.map((step, i) => {
              const Icon = ICONS[i] ?? PhoneCall;
              return (
                <Reveal key={step.title} delay={i * 110}>
                  <div className="group relative flex flex-col items-center text-center">
                    <div className="relative">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-cream-50 bg-navy-900 text-gold-400 shadow-xl shadow-navy-900/25 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-900">
                        <Icon className="h-8 w-8" strokeWidth={1.8} />
                      </span>
                      <span className="absolute -end-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 font-serif text-sm font-bold text-navy-900 ring-4 ring-cream-50">
                        {i + 1}
                      </span>
                    </div>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600">
                      {t.process.stepLabel} {i + 1}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-navy-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-navy-900/65">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
