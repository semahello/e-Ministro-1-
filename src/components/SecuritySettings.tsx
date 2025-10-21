import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const SecuritySettings = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: t("error"),
        description: t("passwords_dont_match"),
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: t("error"),
        description: t("password_too_short"),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t("success"),
      description: t("password_updated"),
    });

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-card-foreground mb-2">
          {t("change_password")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("change_password_description")}
        </p>
      </div>

      <form onSubmit={handleUpdatePassword} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentPassword">{t("current_password")}</Label>
          <Input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            placeholder={t("enter_current_password")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="newPassword">{t("new_password")}</Label>
          <Input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            placeholder={t("enter_new_password")}
            minLength={8}
          />
          <p className="text-xs text-muted-foreground">
            {t("password_requirements")}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">{t("confirm_password")}</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder={t("enter_password_again")}
            minLength={8}
          />
        </div>

        <Button type="submit" className="w-full">
          {t("update_password")}
        </Button>
      </form>
    </div>
  );
};

export default SecuritySettings;
