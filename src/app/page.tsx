import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Desert from "@/components/Desert";
import Towers from "@/components/Towers";
import Families from "@/components/Families";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Desert />
        <Towers />
        <Families />
        <Products />
        <Process />
        <Pricing />
        <Founder />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
