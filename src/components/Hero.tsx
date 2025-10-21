import { Button } from "@/components/ui/button";
import { Zap, FileText } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { ProfileBox } from "./ProfileBox";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPendingTransactions = () => {
    const section = document.getElementById('pending-transactions-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResults = () => {
    const section = document.getElementById('scholarship-results-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFAQ = () => {
    const section = document.getElementById('faq-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGoals = () => {
    const section = document.getElementById('roadmap-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const section = document.getElementById('features-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="absolute top-4 right-4 z-20 flex gap-3">
        <ProfileBox />
        <LanguageToggle />
      </div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="flex justify-center mb-8">
            <img src={logo} alt="e-Ministero Logo" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            e-Ministero
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
            {t("hero_title")}
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
            {t("hero_subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" onClick={scrollToFeatures}>
              <Zap className="mr-2 h-5 w-5" />
              Let's Start
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all" onClick={scrollToHowItWorks}>
              <FileText className="mr-2 h-5 w-5" />
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" onClick={scrollToFAQ}>
              <FileText className="mr-2 h-5 w-5" />
              FAQ
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="outline" className="text-lg px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" onClick={scrollToPendingTransactions}>
              Pending Transactions
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" onClick={scrollToResults}>
              Results
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-6 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm" onClick={scrollToGoals}>
              Goals
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-primary-foreground/80">Digital Access</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80">Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-sm text-primary-foreground/80">Paper Waste</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
