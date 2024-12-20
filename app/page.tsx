import AboutMedimate from "./components/AboutMediMate";
import AppSection from "./components/AppSection";
import FAQSection from "./components/FAQSection";
import FeaturePackage from "./components/FeaturePackage";
import Hero from "./components/Hero";
import HowMediMate from "./components/HowMediMate";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowMediMate />
      <AboutMedimate />
      <AppSection />
      <FAQSection />
      <FeaturePackage/>
      {/* <Services /> */}
    </div>
  );
}
