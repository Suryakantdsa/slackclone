import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
import HeroAction from "@/components/HeroAction";
import HeroMain from "@/components/HeroMain";
import Navbar from "@/components/Navbar";
import NextStep from "@/components/NextStep";
import OurClients from "@/components/OurClients";
import PlatformSection from "@/components/PlatformSection";
import ProductiveSection from "@/components/ProductiveSection";
import SecurityClients from "@/components/SecurityClients";
import SecuritySection from "@/components/SecuritySection";

export default function Home() {
  return (
    <div className=" bg-background foninter">
      <Navbar />
      <HeroAction />
      <HeroMain />
      <OurClients />
      <ProductiveSection />
      <SecuritySection />
      <SecurityClients />
      <PlatformSection />
      <NextStep />
      <FAQSection />
      <Footer />
      <FooterBottom />
    </div>
  );
}
