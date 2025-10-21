import { Card } from "@/components/ui/card";
import { Heart, Activity, Syringe, Pill } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const MedicalRecords = () => {
  const { t } = useLanguage();
  
  const medicalData = {
    name: "Maria Rossi",
    bloodType: "A+",
    height: "175",
    weight: "72",
    chronicDiseases: t("none"),
    allergies: "Penicillin",
    medications: t("none"),
    vaccinations: "COVID-19, Influenza 2024",
    lastCheckup: "15 Sep 2025"
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-card-foreground mb-2">{medicalData.name}</h2>
        <p className="text-muted-foreground">{t("medical_records_title")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vital Information */}
        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("blood_type")}</h3>
          </div>
          <p className="text-2xl font-bold text-card-foreground">{medicalData.bloodType}</p>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("height")} / {t("weight")}</h3>
          </div>
          <p className="text-2xl font-bold text-card-foreground">{medicalData.height} {t("cm")} / {medicalData.weight} {t("kg")}</p>
        </Card>

        {/* Medical History */}
        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Pill className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("chronic_diseases")}</h3>
          </div>
          <p className="text-muted-foreground">{medicalData.chronicDiseases}</p>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("allergies")}</h3>
          </div>
          <p className="text-muted-foreground">{medicalData.allergies}</p>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Pill className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("medications")}</h3>
          </div>
          <p className="text-muted-foreground">{medicalData.medications}</p>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Syringe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">{t("vaccinations")}</h3>
          </div>
          <p className="text-muted-foreground">{medicalData.vaccinations}</p>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-1">{t("last_checkup")}</p>
          <p className="text-xl font-bold text-card-foreground">{medicalData.lastCheckup}</p>
        </div>
      </Card>
    </div>
  );
};
