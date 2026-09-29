import type { ReactNode } from "react";
import { useBooking } from "../context/BookingContext";

interface Props {
  id: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

/** Anchor that scrolls to a home section, even when called from the booking page. */
export function SectionLink({ id, className, children, onClick }: Props) {
  const { goSection } = useBooking();
  return (
    <a
      href={`#${id}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        goSection(id);
      }}
    >
      {children}
    </a>
  );
}
