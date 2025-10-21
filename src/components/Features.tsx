import { Card } from "@/components/ui/card";
import { FileText, Calendar, Bell, Heart, Award, AlertTriangle, Link as LinkIcon, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AppointmentBooking } from "./AppointmentBooking";
import { MedicalRecords } from "./MedicalRecords";
import { ScholarshipsBenefits } from "./ScholarshipsBenefits";
import { EmergencyInfo } from "./EmergencyInfo";
import { QuickAccess } from "./QuickAccess";
import { CivicEngagement } from "./CivicEngagement";
import NewsUpdates from "./NewsUpdates";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  const [showDashboard, setShowDashboard] = useState(false);

  const features = [
    {
      icon: FileText,
      title: t("my_documents"),
      description: t("my_documents_desc"),
      key: "documents"
    },
    {
      icon: Calendar,
      title: t("appointments"),
      description: t("appointments_desc"),
      key: "appointments"
    },
    {
      icon: Bell,
      title: t("news_updates"),
      description: t("news_updates_desc"),
      key: "news"
    },
    {
      icon: Heart,
      title: t("medical_records"),
      description: t("medical_records_desc"),
      key: "medical"
    },
    {
      icon: Award,
      title: t("scholarships_benefits"),
      description: t("scholarships_benefits_desc"),
      key: "scholarships"
    },
    {
      icon: AlertTriangle,
      title: t("emergency_info"),
      description: t("emergency_info_desc"),
      key: "emergency"
    },
    {
      icon: LinkIcon,
      title: t("quick_access"),
      description: t("quick_access_desc"),
      key: "quick"
    },
    {
      icon: MapPin,
      title: t("civic_engagement"),
      description: t("civic_engagement_desc"),
      key: "civic"
    },
  ];

  return (
    <>
      <section id="features-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              🌟 {t("features_title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("features_subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const renderFeatureCard = () => (
                <Card 
                  className="p-6 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-border cursor-pointer"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );

              if (feature.key === "documents") {
                return (
                  <div key={index} onClick={() => setShowDashboard(true)}>
                    {renderFeatureCard()}
                  </div>
                );
              }

              if (feature.key === "appointments" || feature.key === "medical" || 
                  feature.key === "scholarships" || feature.key === "emergency" || 
                  feature.key === "quick" || feature.key === "civic" || feature.key === "news") {
                let dialogContent = null;
                let dialogTitle = feature.title;
                
                switch(feature.key) {
                  case "appointments":
                    dialogContent = <AppointmentBooking />;
                    dialogTitle = t("book_appointment");
                    break;
                  case "medical":
                    dialogContent = <MedicalRecords />;
                    dialogTitle = t("medical_records_title");
                    break;
                  case "scholarships":
                    dialogContent = <ScholarshipsBenefits />;
                    dialogTitle = t("scholarships_title");
                    break;
                  case "emergency":
                    dialogContent = <EmergencyInfo />;
                    dialogTitle = t("emergency_title");
                    break;
                  case "quick":
                    dialogContent = <QuickAccess />;
                    dialogTitle = t("quick_access_title");
                    break;
                  case "civic":
                    dialogContent = <CivicEngagement />;
                    dialogTitle = t("civic_title");
                    break;
                  case "news":
                    dialogContent = <NewsUpdates />;
                    dialogTitle = t("news_updates");
                    break;
                }

                return (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      {renderFeatureCard()}
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{dialogTitle}</DialogTitle>
                      </DialogHeader>
                      {dialogContent}
                    </DialogContent>
                  </Dialog>
                );
              }

              return (
                <div key={index}>
                  {renderFeatureCard()}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Modal */}
      <Dialog open={showDashboard} onOpenChange={setShowDashboard}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>{t("dashboard_title")}</DialogTitle>
          </DialogHeader>
          <Dashboard />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Features;
