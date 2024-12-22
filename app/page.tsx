import AboutMedimate from "./components/AboutMediMate";
import AppSection from "./components/AppSection";
import FAQSection from "./components/FAQSection";
import FeaturePackage from "./components/FeaturePackage";
import Hero from "./components/Hero";
import HowMediMate from "./components/HowMediMate";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowMediMate />
      <AboutMedimate />
      <AppSection />
      <FAQSection />
      <FeaturePackage />
      <Testimonials />
      {/* <Services /> */}
    </>
  );
}
