import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, FileText, Calendar, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AppointmentBooking } from "./AppointmentBooking";
import ResidencePermitView from "./ResidencePermitView";
import SecuritySettings from "./SecuritySettings";
import { useLanguage } from "@/contexts/LanguageContext";
import mariaRossi from "@/assets/maria-rossi.jpg";

const documents = [
  { name: "Passport", action: "upload" },
  { name: "Residence Permit", action: "view" },
  { name: "Identity Card", action: "upload" },
];

const Dashboard = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Card */}
          <Card className="p-8 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                <img 
                  src={mariaRossi} 
                  alt="Maria Rossi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-1">Maria Rossi</h3>
              <p className="text-muted-foreground mb-6">Resident Permit Holder</p>
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                View Profile
              </Button>
            </div>
          </Card>

          {/* My Documents */}
          <Card className="p-8 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">My Documents</h3>
            </div>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{doc.name}</span>
                  {doc.action === "view" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{doc.name}</DialogTitle>
                        </DialogHeader>
                        <ResidencePermitView />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button size="sm">Upload</Button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Appointments */}
          <Card className="p-8 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Appointments</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Next Appointment: 12 Oct 2025, 10:30
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Book New
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Book Questura Appointment</DialogTitle>
                </DialogHeader>
                <AppointmentBooking />
              </DialogContent>
            </Dialog>
          </Card>

          {/* Security Settings */}
          <Card className="p-8 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-card-foreground">Security Settings</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Change Password</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                  Update
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>{t("security_settings")}</DialogTitle>
                </DialogHeader>
                <SecuritySettings />
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
