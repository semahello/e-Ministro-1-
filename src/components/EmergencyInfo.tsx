import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const EmergencyInfo = () => {
  const { t } = useLanguage();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const meetingPoints = [
    { name: "Piazza del Duomo", distance: "3", lat: 41.9028, lng: 12.4964 },
    { name: "Parco Villa Borghese", distance: "5", lat: 41.9098, lng: 12.4823 },
    { name: "Piazza Navona", distance: "7", lat: 41.8992, lng: 12.4731 },
  ];

  const emergencyContacts = [
    { service: t("police"), number: "112" },
    { service: t("ambulance"), number: "118" },
    { service: t("fire_department"), number: "115" },
    { service: t("coast_guard"), number: "1530" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-destructive" />
          {t("nearest_meeting_points")}
        </h3>
        <div className="bg-muted rounded-lg h-64 mb-4 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <p className="text-muted-foreground">{location ? "Map Loading..." : "Detecting location..."}</p>
          </div>
          {meetingPoints.map((point, index) => (
            <div
              key={index}
              className="absolute w-3 h-3 bg-destructive rounded-full animate-pulse"
              style={{
                left: `${20 + index * 25}%`,
                top: `${30 + index * 15}%`,
              }}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {meetingPoints.map((point, index) => (
            <Card key={index} className="p-4 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-destructive" />
                <h4 className="font-semibold text-card-foreground">{point.name}</h4>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Navigation className="w-3 h-3" />
                <span>{point.distance} {t("minutes_away")}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
          <Phone className="w-6 h-6 text-primary" />
          {t("emergency_contacts")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <Card key={index} className="p-6 bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-destructive/10 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="font-medium text-card-foreground">{contact.service}</span>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="text-2xl font-bold text-destructive hover:text-destructive/80 transition-colors"
                >
                  {contact.number}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
