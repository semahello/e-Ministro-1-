import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import mariaRossi from "@/assets/maria-rossi.jpg";

export const ProfileBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  // Get stored codice fiscale from localStorage
  const codiceFiscale = localStorage.getItem("codiceFiscale") || "RSSMRA85M01H501Z";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-primary-foreground hover:bg-white/20 transition-all"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20">
          <img src={mariaRossi} alt="Maria Rossi" className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-medium">{t("my_profile")}</span>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isOpen && (
        <Card className="absolute top-full mt-2 right-0 w-72 p-4 space-y-3 shadow-lg z-50">
          <div className="space-y-2">
            <div>
              <p className="text-xs text-muted-foreground">{t("name")}</p>
              <p className="font-medium">Maria Rossi</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium">maria.rossi@example.it</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("phone")}</p>
              <p className="font-medium">+39 333 123 4567</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Codice Fiscale</p>
              <p className="font-medium">{codiceFiscale}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{t("address")}</p>
              <p className="font-medium">Via Roma 123, Macerata, Italy</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};