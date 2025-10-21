import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { UserCircle, FileCheck, Bell, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: UserCircle,
      title: t("how_step1_title"),
      description: t("how_step1_desc"),
    },
    {
      icon: FileCheck,
      title: t("how_step2_title"),
      description: t("how_step2_desc"),
    },
    {
      icon: Bell,
      title: t("how_step3_title"),
      description: t("how_step3_desc"),
    },
    {
      icon: CheckCircle,
      title: t("how_step4_title"),
      description: t("how_step4_desc"),
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔍 {t("how_title")}</h2>
          <p className="text-muted-foreground text-lg">{t("how_subtitle")}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <step.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
