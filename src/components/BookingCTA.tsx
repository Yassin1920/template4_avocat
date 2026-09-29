import { CalendarCheck, ArrowRight, Phone, Scale } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { FIRM } from "../config";
import { Reveal } from "./Reveal";

export function BookingCTA() {
  const { t } = useLanguage();
  const { open } = useBooking();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(#0a1a2f 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />
      <Scale
        aria-hidden
        className="pointer-events-none absolute -bottom-12 end-6 -z-10 h-72 w-72 text-navy-900/10"
      />

      <div className="container-x">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-900/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-900">
                <span className="h-1.5 w-1.5 rounded-full bg-navy-900" />
                {t.booking.eyebrow}
              </span>
              <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-navy-900 sm:text-4xl md:text-5xl">
                {t.booking.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-900/80">
                {t.booking.text}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <button onClick={() => open()} className="btn-navy w-full sm:w-auto">
                <CalendarCheck className="h-5 w-5 text-gold-400" />
                {t.booking.cta}
                <ArrowRight className="h-5 w-5 text-gold-400 rtl:-scale-x-100" />
              </button>
              <a
                href={`tel:${FIRM.phoneDisplay.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition hover:opacity-70"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{FIRM.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
