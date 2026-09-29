import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { BookingProvider, useBooking } from "./context/BookingContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StatsBand } from "./components/StatsBand";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Lawyer } from "./components/Lawyer";
import { Process } from "./components/Process";
import { BookingCTA } from "./components/BookingCTA";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BookingPage } from "./components/BookingPage";

function TitleManager() {
  const { t } = useLanguage();
  const { page } = useBooking();
  useEffect(() => {
    document.title =
      page === "booking" ? `${t.bookingPage.eyebrow} — ${t.brand.name}` : t.metaTitle;
  }, [t, page]);
  return null;
}

function Pages() {
  const { page } = useBooking();
  if (page === "booking") return <BookingPage />;
  return (
    <main>
      <Hero />
      <StatsBand />
      <Services />
      <WhyUs />
      <Lawyer />
      <Process />
      <BookingCTA />
      <Reviews />
      <FAQ />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <TitleManager />
        <Header />
        <Pages />
        <Footer />
      </BookingProvider>
    </LanguageProvider>
  );
}
