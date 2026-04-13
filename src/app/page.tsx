import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Philosophy />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
