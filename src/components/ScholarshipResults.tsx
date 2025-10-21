import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, CheckCircle2, XCircle, Clock } from "lucide-react";

export const ScholarshipResults = () => {
  const { t } = useLanguage();

  // Example scholarship/assistance applications
  const applications = [
    {
      id: 1,
      title: t("scholarship_university_title"),
      type: "scholarship",
      status: "approved",
      amount: "€2,500",
      date: "2024-03-15",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: t("scholarship_assistance_title"),
      type: "assistance",
      status: "pending",
      amount: "€800",
      date: "2024-04-01",
      icon: Heart,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            {t("status_approved")}
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            {t("status_rejected")}
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            {t("status_pending")}
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <section id="scholarship-results-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🎓 {t("scholarship_results_title")}</h2>
          <p className="text-muted-foreground text-lg">{t("scholarship_results_subtitle")}</p>
        </div>
        
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <app.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{app.title}</h3>
                      <p className="text-sm text-muted-foreground">{t("applied_on")}: {app.date}</p>
                    </div>
                    {getStatusBadge(app.status)}
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{t("amount")}</p>
                      <p className="text-2xl font-bold text-primary">{app.amount}</p>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      {t("view_details")}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          
          {applications.length === 0 && (
            <Card className="p-12 text-center">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t("scholarship_empty")}</p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
