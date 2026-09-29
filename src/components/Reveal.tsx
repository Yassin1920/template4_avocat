import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function Reveal({ children, className = "", delay = 0, id }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      id={id}
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
