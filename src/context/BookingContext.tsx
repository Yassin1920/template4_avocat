import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/**
 * Tiny hash router (works from a single static index.html):
 *   #/rdv       -> booking page
 *   #/rdv/2     -> booking page with service #2 preselected
 *   anything else -> home
 */
type Page = "home" | "booking";
interface Route {
  page: Page;
  service: string;
}

function parse(): Route {
  const m = window.location.hash.match(/^#\/rdv(?:\/(\d+))?/);
  return m ? { page: "booking", service: m[1] ?? "" } : { page: "home", service: "" };
}

function scrollToId(id: string) {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface BookingCtx {
  page: Page;
  service: string;
  open: (service?: number) => void;
  goSection: (id: string) => void;
}

const Context = createContext<BookingCtx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>(parse);
  const pending = useRef<string | null>(null);
  const first = useRef(true);

  useEffect(() => {
    const onHash = () => setRoute(parse());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (route.page === "home" && pending.current) {
      const id = pending.current;
      pending.current = null;
      requestAnimationFrame(() => setTimeout(() => scrollToId(id), 60));
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [route.page]);

  const open = useCallback((service?: number) => {
    window.location.hash = typeof service === "number" ? `#/rdv/${service}` : "#/rdv";
  }, []);

  const goSection = useCallback(
    (id: string) => {
      if (route.page === "home") {
        scrollToId(id);
      } else {
        pending.current = id;
        window.location.hash = "#/";
      }
    },
    [route.page]
  );

  const value = useMemo(
    () => ({ page: route.page, service: route.service, open, goSection }),
    [route.page, route.service, open, goSection]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useBooking() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
