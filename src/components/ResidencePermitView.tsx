import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import mariaRossi from "@/assets/maria-rossi.jpg";

const ResidencePermitView = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg border-2 border-primary/20">
        {/* Header */}
        <div className="text-center mb-6 pb-6 border-b border-border">
          <h2 className="text-2xl font-bold text-primary mb-1">
            REPUBBLICA ITALIANA
          </h2>
          <p className="text-lg font-semibold text-card-foreground">
            {t("residence_permit")}
          </p>
          <p className="text-sm text-muted-foreground">Permesso di Soggiorno</p>
        </div>

        {/* Photo and Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Photo */}
          <div className="flex justify-center items-start">
            <div className="w-32 h-40 bg-muted rounded flex items-center justify-center border-2 border-border overflow-hidden">
              <img 
                src={mariaRossi} 
                alt="Maria Rossi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Personal Details */}
          <div className="md:col-span-2 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("last_name")}</p>
                <p className="font-semibold text-card-foreground">ROSSI</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("first_name")}</p>
                <p className="font-semibold text-card-foreground">MARIA</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("date_of_birth")}</p>
                <p className="font-semibold text-card-foreground">15/03/1990</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("place_of_birth")}</p>
                <p className="font-semibold text-card-foreground">Rome, Italy</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("nationality")}</p>
                <p className="font-semibold text-card-foreground">Italian</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">{t("gender")}</p>
                <p className="font-semibold text-card-foreground">F</p>
              </div>
            </div>
          </div>
        </div>

        {/* Permit Details */}
        <div className="bg-card p-4 rounded-lg space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase">{t("permit_type")}</p>
              <p className="font-semibold text-card-foreground">Work Permit</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase">{t("permit_number")}</p>
              <p className="font-semibold text-card-foreground">IT-2024-567890</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase">{t("issue_date")}</p>
              <p className="font-semibold text-card-foreground">01/01/2024</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase">{t("expiry_date")}</p>
              <p className="font-semibold text-destructive">31/12/2025</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase">{t("issued_by")}</p>
            <p className="font-semibold text-card-foreground">Questura di Roma</p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase">{t("residence_address")}</p>
            <p className="font-semibold text-card-foreground">
              Via Giuseppe Verdi, 42 - 00198 Roma (RM)
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            {t("permit_valid_note")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidencePermitView;
