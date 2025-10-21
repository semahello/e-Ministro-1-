import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("codiceFiscale");
    navigate("/auth");
  };
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        {isAuthenticated && (
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              onClick={handleLogout}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t("logout")}
            </Button>
          </div>
        )}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="e-Ministero Logo" className="h-12 w-auto" />
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/80 font-medium mb-2">
              {t("hero_title")}
            </p>
            <p className="text-sm text-primary-foreground/60">
              Integrated with SPID & CIE • Secure • Accessible • Sustainable
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-primary-foreground mb-2">{t("contact_us")}</h4>
            <div className="text-sm text-primary-foreground/80 space-y-1">
              <p>Email: support@e-ministero.it</p>
              <p>Tel: +39 0733 234567</p>
              <p>Macerata, Italy</p>
            </div>
          </div>
          
          <div className="text-sm text-primary-foreground/60">
            © 2025 e-Ministero. {t("all_rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
