import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { FIRM } from "../config";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { t } = useLanguage();

  const cards = [
    { icon: MapPin, label: t.contact.addressLabel, lines: [FIRM.addressQuery] },
    {
      icon: Phone,
      label: t.contact.phoneLabel,
      lines: [FIRM.phoneDisplay],
      href: `tel:${FIRM.phoneDisplay.replace(/\s/g, "")}`,
      ltr: true,
    },
    {
      icon: Mail,
      label: t.contact.emailLabel,
      lines: [FIRM.email],
      href: `mailto:${FIRM.email}`,
      ltr: true,
    },
    { icon: Clock, label: t.contact.hoursLabel, lines: t.contact.hours },
  ];

  return (
    <section id="contact" className="section-pad scroll-mt-16 bg-cream-100">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div className="flex flex-col gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              const body = (
                <div className="group flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-lg hover:shadow-navy-900/10">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">
                      {c.label}
                    </div>
                    <div className="mt-1 space-y-0.5 font-medium text-navy-900" dir={c.ltr ? "ltr" : undefined}>
                      {c.lines.map((l) => (
                        <div key={l} className="break-words">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 80}>
                  {c.href ? <a href={c.href} className="block">{body}</a> : body}
                </Reveal>
              );
            })}

            <Reveal delay={340}>
              <a
                href={FIRM.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-4 text-base"
              >
                <MessageCircle className="h-5 w-5" />
                {t.contact.whatsappCta}
              </a>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={120}>
            <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-navy-900/15">
              <iframe
                title={t.contact.mapLabel}
                src={FIRM.mapEmbed}
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={FIRM.mapEmbed.replace("&output=embed", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 end-4 inline-flex items-center gap-1.5 rounded-full bg-navy-900 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:bg-navy-800"
              >
                {t.contact.mapLabel}
                <ExternalLink className="h-3.5 w-3.5 text-gold-400" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
