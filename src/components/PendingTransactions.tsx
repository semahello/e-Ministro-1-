import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, FileText } from "lucide-react";

export const PendingTransactions = () => {
  const { t } = useLanguage();

  // Example pending items
  const pendingItems = [
    {
      id: 1,
      title: t("pending_scholarship_title"),
      description: t("pending_scholarship_desc"),
      status: "action_required",
      icon: FileText,
    },
    {
      id: 2,
      title: t("pending_assistance_title"),
      description: t("pending_assistance_desc"),
      status: "waiting",
      icon: Clock,
    },
  ];

  return (
    <section id="pending-transactions-section" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">⏳ {t("pending_title")}</h2>
          <p className="text-muted-foreground text-lg">{t("pending_subtitle")}</p>
        </div>
        
        <div className="space-y-4">
          {pendingItems.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  item.status === "action_required" 
                    ? "bg-destructive/10 text-destructive" 
                    : "bg-primary/10 text-primary"
                }`}>
                  <item.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <Badge variant={item.status === "action_required" ? "destructive" : "secondary"}>
                      {item.status === "action_required" ? t("badge_action_required") : t("badge_waiting")}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  {item.status === "action_required" && (
                    <Button size="sm">
                      {t("pending_view_details")}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
          
          {pendingItems.length === 0 && (
            <Card className="p-12 text-center">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t("pending_empty")}</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
