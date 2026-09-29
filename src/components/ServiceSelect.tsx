import { useEffect, useRef, useState } from "react";
import { Briefcase, Check, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { SERVICE_ICONS } from "./serviceIcons";

interface Props {
  value: string;
  onChange: (v: string) => void;
  options: { title: string }[];
  placeholder: string;
  invalid?: boolean;
}

/** Styled dropdown (listbox) for choosing an area of expertise. */
export function ServiceSelect({ value, onChange, options, placeholder, invalid }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = value !== "" ? options[Number(value)] : undefined;
  const SelectedIcon = value !== "" ? SERVICE_ICONS[Number(value)] ?? Briefcase : Briefcase;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex w-full items-center gap-3 rounded-2xl border bg-cream-50/70 py-3 pe-4 ps-4 text-start text-sm outline-none transition focus-visible:border-gold-500 focus-visible:ring-4 focus-visible:ring-gold-500/15",
          open ? "border-gold-500 bg-white ring-4 ring-gold-500/15" : "border-navy-900/15",
          invalid && "border-red-400"
        )}
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
            selected ? "bg-gold-500 text-navy-900" : "bg-navy-900 text-gold-400"
          )}
        >
          <SelectedIcon className="h-[18px] w-[18px]" />
        </span>
        <span
          className={cn(
            "flex-1 truncate",
            selected ? "font-semibold text-navy-900" : "text-navy-900/40"
          )}
        >
          {selected ? selected.title : placeholder}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute inset-x-0 top-full z-30 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-navy-900/10 bg-white p-1.5 shadow-2xl shadow-navy-900/20"
        >
          {options.map((item, i) => {
            const Icon = SERVICE_ICONS[i] ?? Briefcase;
            const active = value === String(i);
            return (
              <li key={item.title}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(String(i));
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start text-sm transition-colors",
                    active
                      ? "bg-gold-500/15 font-semibold text-navy-900"
                      : "text-navy-900/80 hover:bg-cream-100"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                      active ? "bg-gold-500 text-navy-900" : "bg-navy-900 text-gold-400"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="flex-1">{item.title}</span>
                  {active && <Check className="h-4 w-4 text-gold-600" strokeWidth={3} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
