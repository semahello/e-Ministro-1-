import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, MapPin, FileText, Users } from "lucide-react";

const NewsUpdates = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      category: "document_status",
      title: t("news_1_title"),
      description: t("news_1_desc"),
      location: "Macerata",
      date: "2025-10-10",
      icon: FileText,
    },
    {
      id: 2,
      category: "local_events",
      title: t("news_2_title"),
      description: t("news_2_desc"),
      location: "Macerata",
      date: "2025-10-20",
      icon: Users,
    },
    {
      id: 3,
      category: "civic_opportunities",
      title: t("news_3_title"),
      description: t("news_3_desc"),
      location: "Macerata",
      date: "2025-10-25",
      icon: Calendar,
    },
    {
      id: 4,
      category: "document_status",
      title: t("news_4_title"),
      description: t("news_4_desc"),
      location: "Macerata",
      date: "2025-10-12",
      icon: FileText,
    },
    {
      id: 5,
      category: "civic_opportunities",
      title: t("news_5_title"),
      description: t("news_5_desc"),
      location: "Macerata",
      date: "2025-11-01",
      icon: Users,
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "document_status":
        return "bg-primary/10 text-primary";
      case "local_events":
        return "bg-secondary/10 text-secondary";
      case "civic_opportunities":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-card-foreground mb-2">
          {t("news_updates")}
        </h3>
        <p className="text-muted-foreground">{t("news_subtitle")}</p>
      </div>

      <div className="space-y-4">
        {news.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-semibold text-lg text-card-foreground">
                      {item.title}
                    </h4>
                    <Badge className={getCategoryColor(item.category)}>
                      {t(item.category)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NewsUpdates;
