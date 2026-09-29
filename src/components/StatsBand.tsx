import { useEffect, useRef, useState } from "react";
import { Award, FileCheck2, ThumbsUp, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Reveal } from "./Reveal";

const ICONS = [Award, FileCheck2, ThumbsUp, Clock];

function Counter({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();
      const dur = 1600;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 -mt-14 sm:-mt-16">
      <div className="container-x">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-gold-500/20 bg-navy-900/10 shadow-2xl shadow-navy-900/15 lg:grid-cols-4">
            {t.hero.stats.map((s, i) => {
              const Icon = ICONS[i] ?? Award;
              return (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 bg-white px-4 py-7 text-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
                    <Counter value={s.value} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-navy-900/55">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
