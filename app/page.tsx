import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import IntroIRCA from "@/components/sections/IntroIRCA";
import Services from "@/components/sections/Services";
import SectoresStrip from "@/components/sections/SectoresStrip";
import MissionStrip from "@/components/sections/MissionStrip";
import Clients from "@/components/sections/Clients";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <IntroIRCA />
      <Services />
      <SectoresStrip />
      <MissionStrip />
      <Clients />
      <ContactCTA />
    </>
  );
}
