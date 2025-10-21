import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Smartphone, Upload } from "lucide-react";

const Auth = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [codiceFiscale, setCodiceFiscale] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSPIDLogin = () => {
    if (codiceFiscale.length > 0) {
      localStorage.setItem("authenticated", "true");
      localStorage.setItem("codiceFiscale", codiceFiscale);
      toast({
        title: t("login_success"),
        description: t("welcome_message"),
      });
      navigate("/");
    }
  };

  const handleCIELogin = () => {
    toast({
      title: t("cie_auth"),
      description: t("cie_instruction"),
    });
    // Simulate NFC card authentication
    setTimeout(() => {
      localStorage.setItem("authenticated", "true");
      navigate("/");
    }, 2000);
  };

  const handleCNSLogin = () => {
    toast({
      title: t("cns_auth"),
      description: t("cns_instruction"),
    });
    // Simulate smart card authentication
    setTimeout(() => {
      localStorage.setItem("authenticated", "true");
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-card-foreground mb-2">
            {t("auth_title")}
          </h1>
          <p className="text-muted-foreground">{t("auth_subtitle")}</p>
        </div>

        <Tabs defaultValue="spid" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="spid">SPID</TabsTrigger>
            <TabsTrigger value="cie">CIE</TabsTrigger>
            <TabsTrigger value="cns">CNS</TabsTrigger>
          </TabsList>

          <TabsContent value="spid" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="codiceFiscale">{t("codice_fiscale")}</Label>
              <Input
                id="codiceFiscale"
                placeholder="RSSMRA85M01H501Z"
                value={codiceFiscale}
                onChange={(e) => setCodiceFiscale(e.target.value.toUpperCase())}
                maxLength={16}
              />
              <p className="text-xs text-muted-foreground">
                {t("codice_fiscale_hint")}
              </p>
            </div>
            <Button onClick={handleSPIDLogin} className="w-full">
              {t("login_with_spid")}
            </Button>
          </TabsContent>

          <TabsContent value="cie" className="space-y-4">
            <div className="text-center py-8">
              <CreditCard className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-sm text-muted-foreground mb-4">
                {t("cie_description")}
              </p>
              <Button onClick={handleCIELogin} className="w-full">
                {t("authenticate_cie")}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="cns" className="space-y-4">
            <div className="text-center py-8">
              <Smartphone className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-sm text-muted-foreground mb-4">
                {t("cns_description")}
              </p>
              <Button onClick={handleCNSLogin} className="w-full">
                {t("authenticate_cns")}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-center text-muted-foreground mb-4">
            {t("no_digital_auth")}
          </p>
          <Button variant="outline" className="w-full" onClick={() => setIsSignUp(!isSignUp)}>
            <Upload className="w-4 h-4 mr-2" />
            {t("document_verification")}
          </Button>
          {isSignUp && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-3">
              <Label>{t("upload_document")}</Label>
              <Input type="file" accept=".pdf,.jpg,.png" />
              <Input
                placeholder={t("enter_codice_fiscale")}
                maxLength={16}
              />
              <Button className="w-full">{t("verify_submit")}</Button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-sm"
          >
            {t("back_to_home")}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
