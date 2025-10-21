import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import { FAQ } from "@/components/FAQ";
import { PendingTransactions } from "@/components/PendingTransactions";
import { ScholarshipResults } from "@/components/ScholarshipResults";
import Roadmap from "@/components/Roadmap";
import SDGs from "@/components/SDGs";
import Footer from "@/components/Footer";
import { VoiceChatbot } from "@/components/VoiceChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <PendingTransactions />
      <ScholarshipResults />
      <FAQ />
      <Roadmap />
      <SDGs />
      <Impact />
      <Footer />
      <VoiceChatbot />
    </div>
  );
};

export default Index;
