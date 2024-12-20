import AboutMedimate from "./components/AboutMediMate";
import AppSection from "./components/AppSection";
import Hero from "./components/Hero";
import HowMediMate from "./components/HowMediMate";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowMediMate />
      <AboutMedimate />
      <AppSection />
      {/* <Services /> */}
    </div>
  );
}
