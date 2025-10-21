import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const QuickAccess = () => {
  const { t } = useLanguage();

  const services = [
    {
      name: "SPID",
      description: t("spid_desc"),
      url: "https://www.spid.gov.it/",
      color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
    },
    {
      name: "ANPR",
      description: t("anpr_desc"),
      url: "https://www.anpr.interno.it/",
      color: "from-green-500/10 to-green-600/10 border-green-500/20",
    },
    {
      name: "INPS",
      description: t("inps_desc"),
      url: "https://www.inps.it/",
      color: "from-purple-500/10 to-purple-600/10 border-purple-500/20",
    },
    {
      name: "PagoPA",
      description: t("pagopa_desc"),
      url: "https://www.pagopa.gov.it/",
      color: "from-orange-500/10 to-orange-600/10 border-orange-500/20",
    },
    {
      name: t("immigration_desc"),
      description: t("immigration_desc"),
      url: "https://www.interno.gov.it/it/temi/immigrazione-e-asilo",
      color: "from-red-500/10 to-red-600/10 border-red-500/20",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-card-foreground mb-2">{t("quick_access_title")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className={`p-6 bg-gradient-to-br ${service.color} hover:shadow-[var(--shadow-elevated)] transition-all cursor-pointer group`}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-card-foreground">{service.name}</h3>
                <ExternalLink className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
