import { cn } from "../utils/cn";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "start";
}

export function SectionHeading({ eyebrow, title, subtitle, light, align = "center" }: Props) {
  const center = align === "center";
  return (
    <div className={cn("max-w-2xl", center ? "mx-auto text-center" : "text-start")}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={cn("mt-5", light ? "section-title-light" : "section-title")}>{title}</h2>

      {/* Ornament */}
      <div className={cn("mt-5 flex items-center gap-3", center && "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500 rtl:rotate-180" />
        <span className="h-2 w-2 rotate-45 bg-gold-500" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500 rtl:rotate-180" />
      </div>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light ? "text-cream-100/75" : "text-navy-900/65"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
