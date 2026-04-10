import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import SignalSection from "@/components/SignalSection";
import PlainifySection from "@/components/PlainifySection";
import QSRSection from "@/components/QSRSection";
import HowWeBuild from "@/components/HowWeBuild";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <SignalSection />
      <PlainifySection />
      <QSRSection />
      <HowWeBuild />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
