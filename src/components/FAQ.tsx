import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq_devices_question"),
      answer: t("faq_devices_answer"),
    },
    {
      question: t("faq_support_question"),
      answer: t("faq_support_answer"),
    },
    {
      question: t("faq_vaccination_question"),
      answer: t("faq_vaccination_answer"),
    },
    {
      question: t("faq_scholarship_question"),
      answer: t("faq_scholarship_answer"),
    },
  ];

  return (
    <section id="faq-section" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t("faq_title")}</h2>
          <p className="text-muted-foreground text-lg">{t("faq_subtitle")}</p>
        </div>
        
        <Card className="p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
        
        <Card className="p-6 mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              💬 {t("more_questions")}
            </h3>
            <p className="text-muted-foreground">{t("contact_support")}</p>
            <div className="space-y-2">
              <p className="font-medium text-primary">
                📧 Email: support@e-ministero.it
              </p>
              <p className="font-medium text-primary">
                📞 Tel: +39 0733 234567
              </p>
              <p className="text-sm text-muted-foreground">
                📍 Macerata, Italy
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
