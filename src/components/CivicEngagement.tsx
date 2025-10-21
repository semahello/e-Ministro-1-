import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Vote, MapPin, Calendar, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export const CivicEngagement = () => {
  const { t, language } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const regions = ["Lazio", "Lombardia", "Campania", "Sicilia", "Veneto"];
  const cities: Record<string, string[]> = {
    "Lazio": ["Roma", "Latina", "Frosinone"],
    "Lombardia": ["Milano", "Bergamo", "Brescia"],
    "Campania": ["Napoli", "Salerno", "Caserta"],
    "Sicilia": ["Palermo", "Catania", "Messina"],
    "Veneto": ["Venezia", "Verona", "Padova"],
  };

  const elections = [
    {
      type: language === 'en' ? "Municipal Elections" : "Elezioni Comunali",
      date: "15 Oct 2024",
      winner: "Marco Bianchi",
      percentage: "52.3%",
      candidates: [
        { name: "Laura Verdi", percentage: "28.1%" },
        { name: "Giuseppe Rossi", percentage: "19.6%" },
      ],
    },
    {
      type: language === 'en' ? "Regional Elections" : "Elezioni Regionali",
      date: "12 Jun 2024",
      winner: "Francesca Neri",
      percentage: "48.7%",
      candidates: [
        { name: "Antonio Costa", percentage: "31.2%" },
        { name: "Elena Marino", percentage: "20.1%" },
      ],
    },
  ];

  const upcomingElection = {
    type: language === 'en' ? "European Parliament Elections" : "Elezioni Parlamento Europeo",
    date: "9 Jun 2026",
  };

  const handleSendMessage = () => {
    toast.success(language === 'en' ? "Message sent successfully!" : "Messaggio inviato con successo!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-4">{t("select_location")}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="region">{t("region")}</Label>
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger id="region">
                <SelectValue placeholder={t("select_region")} />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city">{t("city")}</Label>
            <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedRegion}>
              <SelectTrigger id="city">
                <SelectValue placeholder={t("select_city")} />
              </SelectTrigger>
              <SelectContent>
                {selectedRegion && cities[selectedRegion]?.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {selectedCity && (
        <>
          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
              <Vote className="w-6 h-6 text-primary" />
              {t("recent_elections")}
            </h3>
            <div className="space-y-4">
              {elections.map((election, index) => (
                <Card key={index} className="p-6 bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground">{election.type}</h4>
                      <p className="text-sm text-muted-foreground">{election.date}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <span className="font-medium text-card-foreground">
                        {t("winner")}: {election.winner}
                      </span>
                      <span className="text-lg font-bold text-primary">{election.percentage}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{t("other_candidates")}:</p>
                      {election.candidates.map((candidate, cidx) => (
                        <div key={cidx} className="flex items-center justify-between text-sm">
                          <span className="text-card-foreground">{candidate.name}</span>
                          <span className="text-muted-foreground">{candidate.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              {t("upcoming_elections")}
            </h3>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">{upcomingElection.type}</h4>
                  <p className="text-sm text-muted-foreground">{upcomingElection.date}</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              {t("your_polling_station")}
            </h3>
            <Card className="p-6 bg-card">
              <p className="font-medium text-card-foreground mb-2">
                {language === 'en' ? "School: Istituto Comprensivo" : "Scuola: Istituto Comprensivo"} {selectedCity}
              </p>
              <p className="text-sm text-muted-foreground">
                Via Roma, 123 - {selectedCity}
              </p>
            </Card>
          </div>

          <div>
            <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-primary" />
              {t("contact_authorities")}
            </h3>
            <Card className="p-6 bg-card">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="subject">{t("subject")}</Label>
                  <Input id="subject" placeholder={language === 'en' ? "Enter subject" : "Inserisci oggetto"} />
                </div>
                <div>
                  <Label htmlFor="message">{t("message")}</Label>
                  <Textarea
                    id="message"
                    placeholder={language === 'en' ? "Enter your message" : "Inserisci il tuo messaggio"}
                    rows={4}
                  />
                </div>
                <Button onClick={handleSendMessage} className="w-full">
                  {t("send_message")}
                </Button>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};
