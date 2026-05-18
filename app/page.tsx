import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Services from "@/components/sections/Services";
import MissionStrip from "@/components/sections/MissionStrip";
import Clients from "@/components/sections/Clients";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Services />
      <MissionStrip />
      <Clients />
      <ContactCTA />
    </>
  );
}
