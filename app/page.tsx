import HowMediMate from "./components/HowMediMate";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutMedimate from "./components/AboutMedimate";
import AppSection from "./components/AppSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <HowMediMate />
      <AboutMedimate/>
      <AppSection/>
      {/* <Services /> */}
    </div>
  );
}
