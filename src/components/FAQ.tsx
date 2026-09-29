import { useState } from "react";
import { ChevronDown, MessageCircleQuestion, CalendarCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "../utils/cn";

export function FAQ() {
  const { t } = useLanguage();
  const { open: openBooking } = useBooking();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad scroll-mt-16 bg-cream-50">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="start"
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
              subtitle={t.faq.subtitle}
            />

            <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white shadow-xl shadow-navy-900/20">
              <div
                aria-hidden
                className="absolute -end-10 -top-10 h-36 w-36 rounded-full bg-gold-500/20 blur-2xl"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
                <MessageCircleQuestion className="h-6 w-6" />
              </span>
              <h3 className="relative mt-4 font-serif text-xl font-bold">{t.faqMore.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-cream-100/75">
                {t.faqMore.text}
              </p>
              <button onClick={() => openBooking()} className="btn-gold relative mt-5">
                <CalendarCheck className="h-4 w-4" />
                {t.faqMore.cta}
              </button>
            </div>
          </div>
        </Reveal>

        {/* Right */}
        <div className="space-y-4">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 70}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
                    isOpen
                      ? "border-gold-500/60 shadow-xl shadow-navy-900/10"
                      : "border-navy-900/10 shadow-sm hover:border-gold-500/40"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-start sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-serif text-sm font-bold transition-colors duration-300",
                        isOpen ? "bg-gold-500 text-navy-900" : "bg-navy-900 text-gold-400"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-serif text-base font-semibold text-navy-900 sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 ps-[4.75rem] text-[15px] leading-relaxed text-navy-900/70 sm:px-6 sm:ps-[5.25rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
