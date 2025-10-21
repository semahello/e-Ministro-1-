import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const italianRegions = [
  "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna",
  "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche",
  "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia",
  "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"
];

const provincesByRegion: Record<string, string[]> = {
  "Lazio": ["Roma", "Frosinone", "Latina", "Rieti", "Viterbo"],
  "Lombardia": ["Milano", "Bergamo", "Brescia", "Como", "Cremona", "Lecco", "Lodi", "Mantova", "Monza e Brianza", "Pavia", "Sondrio", "Varese"],
  "Campania": ["Napoli", "Avellino", "Benevento", "Caserta", "Salerno"],
  "Sicilia": ["Palermo", "Agrigento", "Caltanissetta", "Catania", "Enna", "Messina", "Ragusa", "Siracusa", "Trapani"],
  "Veneto": ["Venezia", "Belluno", "Padova", "Rovigo", "Treviso", "Verona", "Vicenza"],
};

const timeSlots = [
  "09:00 - 09:30", "09:30 - 10:00", "10:00 - 10:30", "10:30 - 11:00",
  "11:00 - 11:30", "11:30 - 12:00", "15:00 - 15:30", "15:30 - 16:00",
  "16:00 - 16:30", "16:30 - 17:00", "17:00 - 17:30"
];

export const AppointmentBooking = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [showResults, setShowResults] = useState(false);

  const availableProvinces = selectedRegion ? (provincesByRegion[selectedRegion] || []) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
    toast({
      title: t("appointment_confirmed"),
      description: t("appointment_confirmation_message"),
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t("first_name")}</Label>
            <Input id="firstName" placeholder="Mario" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{t("last_name")}</Label>
            <Input id="lastName" placeholder="Rossi" required />
          </div>
        </div>

        {/* Location Selection */}
        <div className="space-y-2">
          <Label htmlFor="region">{t("region")}</Label>
          <Select value={selectedRegion} onValueChange={(value) => {
            setSelectedRegion(value);
            setSelectedProvince("");
          }}>
            <SelectTrigger id="region">
              <SelectValue placeholder={t("select_region")} />
            </SelectTrigger>
            <SelectContent>
              {italianRegions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">{t("province")}</Label>
          <Select 
            value={selectedProvince} 
            onValueChange={setSelectedProvince}
            disabled={!selectedRegion}
          >
            <SelectTrigger id="province">
              <SelectValue placeholder={t("select_province")} />
            </SelectTrigger>
            <SelectContent>
              {availableProvinces.map((province) => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="comune">{t("comune")}</Label>
          <Input id="comune" placeholder="Roma" required />
        </div>

        {/* Questura Selection */}
        <div className="space-y-2">
          <Label htmlFor="questura">{t("questura")}</Label>
          <Select>
            <SelectTrigger id="questura">
              <SelectValue placeholder={t("select_questura")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="questura-roma">Questura di Roma</SelectItem>
              <SelectItem value="questura-milano">Questura di Milano</SelectItem>
              <SelectItem value="questura-napoli">Questura di Napoli</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div className="space-y-2">
          <Label htmlFor="date">{t("preferred_date")}</Label>
          <Input id="date" type="date" required />
        </div>

        {/* Time Slot Selection */}
        <div className="space-y-2">
          <Label htmlFor="timeSlot">{t("time_slot")}</Label>
          <Select>
            <SelectTrigger id="timeSlot">
              <SelectValue placeholder={t("select_time")} />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Service Type */}
        <div className="space-y-2">
          <Label htmlFor="service">{t("service_type")}</Label>
          <Select>
            <SelectTrigger id="service">
              <SelectValue placeholder={t("select_service")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residence-permit">Permesso di Soggiorno</SelectItem>
              <SelectItem value="renewal">Rinnovo Permesso</SelectItem>
              <SelectItem value="citizenship">Cittadinanza</SelectItem>
              <SelectItem value="passport">Passaporto</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          {t("submit_request")}
        </Button>
      </form>

      {showResults && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-3 text-card-foreground">{t("available_appointments")}</h4>
          <div className="space-y-2">
            <div className="p-3 bg-card rounded border border-border hover:bg-accent/10 cursor-pointer transition-colors">
              <p className="font-medium">Questura di {selectedProvince || "Roma"}</p>
              <p className="text-sm text-muted-foreground">Via Genova, 2 - {t("available_slots")}: 5</p>
            </div>
            <div className="p-3 bg-card rounded border border-border hover:bg-accent/10 cursor-pointer transition-colors">
              <p className="font-medium">Questura di {selectedProvince || "Roma"} - Centro</p>
              <p className="text-sm text-muted-foreground">Piazza del Popolo, 12 - {t("available_slots")}: 3</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};