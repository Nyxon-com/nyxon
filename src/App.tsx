import { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Backdrop } from "./components/Backdrop";
import { isServerPage } from "./data/site";
import { useI18n } from "./i18n/language";
import { Servers } from "./pages/Servers";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
import { Design } from "./sections/Design";
import { Process } from "./sections/Process";
import { Pricing } from "./sections/Pricing";
import { Faq } from "./sections/Faq";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  const serverPage = isServerPage();
  const { t } = useI18n();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, [serverPage]);

  return (
    <LazyMotion features={domAnimation}>
      <Backdrop />
      <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2">
        {t.skip}
      </a>
      <Navbar />
      {serverPage ? (
        <Servers />
      ) : (
      <main id="contenuto">
        <div id="top">
          <Hero />
        </div>
        <Services />
        <Projects />
        <Design />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      )}
      <Footer />
    </LazyMotion>
  );
}
