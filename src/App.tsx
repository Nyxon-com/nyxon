import { useEffect, type ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { isDesignPage, isServerPage } from "./data/site";
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

function Enter({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return children;

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

export default function App() {
  const serverPage = isServerPage();
  const designPage = isDesignPage();
  const { t } = useI18n();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) return;
    document.getElementById(id)?.scrollIntoView();
  }, [serverPage, designPage]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#000000_0%,#050505_42%,#0b0b0b_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[150vh] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:88px_88px] [mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_62%,transparent_100%)]"
      />
      <div className="relative z-10">
      <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2 focus:text-black">
        {t.skip}
      </a>
      <Navbar />
      {serverPage ? (
        <Enter>
          <Servers />
        </Enter>
      ) : designPage ? (
        <Enter>
          <main id="contenuto">
            <Design />
          </main>
        </Enter>
      ) : (
      <Enter>
      <main id="contenuto">
        <div id="top">
          <Hero />
        </div>
        <Projects />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      </Enter>
      )}
      <Footer />
      </div>
      </div>
    </LazyMotion>
  );
}
