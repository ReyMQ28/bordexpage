import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import HowToUSe from "../components/HowToUse";
import Caracteristics from "../components/Caracteristics";
import Pricing from "../components/Pricing";
import Slider from "../components/Slider";
import BotonFlotante from "../components/BotonFlotante";
import Prueba from "../components/Prueba";

// import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InfoSection />
        <Slider />
        <Caracteristics />
        <HowToUSe />
        <Pricing />
        <Prueba />
        <BotonFlotante />
      </main>
      <Footer />
    </div>
  );
}
