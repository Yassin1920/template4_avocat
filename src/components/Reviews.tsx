import { Star, Quote, BadgeCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <article className="relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white p-7 shadow-xl shadow-navy-950/30">
      <Quote className="absolute -end-2 -top-2 h-20 w-20 rotate-180 text-gold-500/10" />
      <div className="relative flex items-center justify-between">
        <div className="flex text-gold-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <GoogleG className="h-5 w-5" />
      </div>
      <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-navy-900/75">
        “{text}”
      </p>
      <div className="relative mt-5 flex items-center gap-3 border-t border-navy-900/10 pt-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-900 font-serif text-lg font-bold text-gold-400 ring-2 ring-gold-500/40">
          {initial}
        </span>
        <div>
          <div className="flex items-center gap-1.5 font-semibold text-navy-900">
            {name}
            <BadgeCheck className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-xs text-navy-900/50">Google</div>
        </div>
      </div>
    </article>
  );
}

export function Reviews() {
  const { t } = useLanguage();
  const items = t.reviews.items;

  return (
    <section
      id="reviews"
      className="section-pad relative scroll-mt-16 overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -end-20 top-0 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            light
            eyebrow={t.reviews.eyebrow}
            title={t.reviews.title}
            subtitle={t.reviews.subtitle}
          />
        </Reveal>
      </div>

      <div className="group relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-16 bg-gradient-to-r from-navy-900 to-transparent sm:w-32 rtl:bg-gradient-to-l" />
        <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-16 bg-gradient-to-l from-navy-900 to-transparent sm:w-32 rtl:bg-gradient-to-r" />
        <div
          dir="ltr"
          className="flex w-max animate-marquee gap-6 px-6 group-hover:[animation-play-state:paused]"
        >
          {[...items, ...items].map((r, i) => (
            <div key={i} dir={t.dir} className="flex">
              <ReviewCard name={r.name} text={r.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
