import VybStoreSection from "./components/VybStoreSection";
import CenterCard from "./components/CenterCard";
import FAQ from "./components/FAQ";
import GetStartedSection from "./components/GetStartedSection";
import HeroSection from "./components/HeroSection";
import InfluencersSection from "./components/InfluencerSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className=" p-8 pt-0 scrollbar-hide ">
      <Navbar />
      <HeroSection />
      <CenterCard />
      <VybStoreSection />
      <InfluencersSection />
      <GetStartedSection />
      <FAQ />
    </main>
  );
}