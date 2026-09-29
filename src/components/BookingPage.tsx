import { useEffect, useState, type ReactNode } from "react";
import {
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  CalendarCheck,
  ShieldCheck,
  PhoneCall,
  Clock,
  RotateCcw,
  Home,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useBooking } from "../context/BookingContext";
import { FIRM } from "../config";
import { cn } from "../utils/cn";
import { ServiceSelect } from "./ServiceSelect";
import { SectionLink } from "./SectionLink";

interface FormState {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY: FormState = { name: "", phone: "", service: "", message: "" };

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-navy-900">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

export function BookingPage() {
  const { t } = useLanguage();
  const { service: preService } = useBooking();
  const [form, setForm] = useState<FormState>({ ...EMPTY, service: preService });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [waUrl, setWaUrl] = useState<string | null>(null);

  useEffect(() => {
    if (preService) setForm((f) => ({ ...f, service: preService }));
  }, [preService]);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.booking.errors.nameReq;
    if (!form.phone) e.phone = t.booking.errors.phoneReq;
    else if (form.phone.length !== 8) e.phone = t.booking.errors.phoneLen;
    if (!form.service) e.service = t.booking.errors.serviceReq;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const serviceTitle = t.services.items[Number(form.service)]?.title ?? "";
    const lines = [
      t.booking.wa.greeting,
      "",
      `${t.booking.wa.name} : ${form.name.trim()}`,
      `${t.booking.wa.phone} : ${form.phone}`,
      `${t.booking.wa.service} : ${serviceTitle}`,
    ];
    if (form.message.trim()) lines.push(`${t.booking.wa.message} : ${form.message.trim()}`);
    lines.push("", t.booking.wa.footer);

    const url = `https://wa.me/${FIRM.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWaUrl(url);
    const w = window.open(url, "_blank", "noopener,noreferrer");
    if (!w) window.location.href = url;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setWaUrl(null);
  };

  const inputBase =
    "w-full rounded-2xl border bg-cream-50/70 py-3.5 ps-12 text-sm text-navy-900 placeholder:text-navy-900/40 outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/15";
  const iconBase =
    "pointer-events-none absolute start-4 h-5 w-5 text-gold-600";

  return (
    <main>
      {/* Banner */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-navy-950 to-navy-800 pb-32 pt-32 sm:pt-40">
        <img
          src="/images/office.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/60 to-navy-900/90" />
        <div
          aria-hidden
          className="pointer-events-none absolute -end-24 -top-24 -z-10 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl"
        />
        <div className="container-x">
          <nav className="flex items-center gap-2 text-sm text-cream-100/70">
            <SectionLink id="home" className="transition hover:text-gold-400">
              {t.nav.home}
            </SectionLink>
            <ChevronRight className="h-4 w-4 text-gold-500 rtl:-scale-x-100" />
            <span className="font-medium text-gold-400">{t.bookingPage.eyebrow}</span>
          </nav>
          <span className="eyebrow mt-8">{t.bookingPage.eyebrow}</span>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            {t.bookingPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream-100/80 sm:text-lg">
            {t.bookingPage.subtitle}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="relative z-10 -mt-20 bg-cream-50 pb-24">
        <div className="container-x grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form / success */}
          <div className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-2xl shadow-navy-900/10 sm:p-10">
            {waUrl ? (
              <div className="flex flex-col items-center py-8 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <CheckCircle2 className="h-11 w-11" />
                </span>
                <h2 className="mt-6 font-serif text-3xl font-bold text-navy-900">
                  {t.bookingPage.successTitle}
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-navy-900/65">
                  {t.bookingPage.successText}
                </p>
                <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold px-7 py-3.5"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.bookingPage.successBtn}
                  </a>
                  <button onClick={reset} className="btn-outline-navy px-7 py-3.5">
                    <RotateCcw className="h-4 w-4" />
                    {t.bookingPage.newRequest}
                  </button>
                </div>
                <SectionLink
                  id="home"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:underline"
                >
                  <Home className="h-4 w-4" />
                  {t.bookingPage.backHome}
                </SectionLink>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-900 sm:text-3xl">
                    {t.bookingPage.formTitle}
                  </h2>
                  <p className="mt-1 text-sm text-navy-900/55">{t.booking.modalSubtitle}</p>
                </div>

                <Field label={t.booking.form.name} error={errors.name}>
                  <div className="relative flex items-center">
                    <User className={iconBase} />
                    <input
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder={t.booking.form.namePh}
                      className={cn(inputBase, "pe-4", errors.name && "border-red-400")}
                    />
                  </div>
                </Field>

                <Field label={t.booking.form.phone} error={errors.phone}>
                  <div className="relative flex items-center">
                    <Phone className={iconBase} />
                    <input
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      maxLength={8}
                      value={form.phone}
                      onChange={(e) =>
                        update("phone", e.target.value.replace(/\D/g, "").slice(0, 8))
                      }
                      placeholder={t.booking.form.phonePh}
                      className={cn(inputBase, "pe-16", errors.phone && "border-red-400")}
                    />
                    <span
                      dir="ltr"
                      className={cn(
                        "pointer-events-none absolute end-4 rounded-full px-2 py-0.5 text-xs font-bold tabular-nums",
                        form.phone.length === 8
                          ? "bg-emerald-500/15 text-emerald-600"
                          : "bg-navy-900/5 text-navy-900/50"
                      )}
                    >
                      {form.phone.length}/8
                    </span>
                  </div>
                </Field>

                <Field label={t.booking.form.service} error={errors.service}>
                  <ServiceSelect
                    value={form.service}
                    onChange={(v) => update("service", v)}
                    options={t.services.items}
                    placeholder={t.booking.form.servicePh}
                    invalid={!!errors.service}
                  />
                </Field>

                <Field label={t.booking.form.message}>
                  <div className="relative">
                    <MessageSquare className={cn(iconBase, "top-4")} />
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={t.booking.form.messagePh}
                      className={cn(inputBase, "resize-none pe-4")}
                    />
                  </div>
                </Field>

                <div>
                  <button type="submit" className="btn-gold w-full py-4 text-base">
                    <CalendarCheck className="h-5 w-5" />
                    {t.booking.form.confirm}
                  </button>
                  <p className="mt-3 flex items-center justify-center gap-2 text-center text-xs text-navy-900/50">
                    <ShieldCheck className="h-4 w-4 text-gold-600" />
                    {t.booking.note}
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Aside */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-7 text-white shadow-xl shadow-navy-900/20">
              <div
                aria-hidden
                className="absolute -end-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-2xl"
              />
              <h3 className="relative font-serif text-xl font-bold">{t.bookingPage.sideTitle}</h3>
              <ol className="relative mt-6 space-y-6">
                {t.bookingPage.sideSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 font-serif text-sm font-bold text-navy-900">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-semibold">{s.title}</div>
                      <div className="mt-0.5 text-sm text-cream-100/70">{s.desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-3xl border border-gold-500/30 bg-white p-7 shadow-lg shadow-navy-900/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400">
                <PhoneCall className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-bold text-navy-900">
                {t.bookingPage.directTitle}
              </h3>
              <p className="mt-1 text-sm text-navy-900/65">{t.bookingPage.directText}</p>
              <a
                href={`tel:${FIRM.phoneDisplay.replace(/\s/g, "")}`}
                dir="ltr"
                className="mt-4 inline-block font-serif text-2xl font-bold text-navy-900 transition hover:text-gold-600"
              >
                {FIRM.phoneDisplay}
              </a>
              <div className="mt-4 flex items-start gap-2.5 border-t border-navy-900/10 pt-4 text-sm text-navy-900/65">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <ul className="space-y-0.5">
                  {t.contact.hours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
