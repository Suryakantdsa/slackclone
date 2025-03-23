import HeroAction from "@/components/HeroAction";
import HeroMain from "@/components/HeroMain";
import Navbar from "@/components/Navbar";
import OurClients from "@/components/OurClients";

export default function Home() {
  return (
    <div className=" bg-background foninter">
      <Navbar />
      <HeroAction />
      <HeroMain />
      <OurClients />
    </div>
  );
}
