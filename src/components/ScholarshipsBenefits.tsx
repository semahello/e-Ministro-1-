import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Award, GraduationCap, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ScholarshipsBenefits = () => {
  const { t, language } = useLanguage();
  const [educationLevel, setEducationLevel] = useState<"highschool" | "university">("university");
  const [age, setAge] = useState("");

  const scholarships = {
    highschool: [
      {
        title: language === 'en' ? "Academic Excellence Scholarship" : "Borsa di Studio per Eccellenza Accademica",
        amount: "€2,000",
        eligibility: language === 'en' ? "Students aged 14-18 with GPA > 8.5" : "Studenti 14-18 anni con media > 8.5",
        deadline: "30 Nov 2025",
      },
      {
        title: language === 'en' ? "STEM Innovation Grant" : "Borsa STEM Innovazione",
        amount: "€1,500",
        eligibility: language === 'en' ? "Students in science programs, ages 15-19" : "Studenti in programmi scientifici, 15-19 anni",
        deadline: "15 Dec 2025",
      },
    ],
    university: [
      {
        title: language === 'en' ? "National University Merit Scholarship" : "Borsa di Merito Universitaria Nazionale",
        amount: "€5,000",
        eligibility: language === 'en' ? "Students aged 18-25 with GPA > 27/30" : "Studenti 18-25 anni con media > 27/30",
        deadline: "20 Dec 2025",
      },
      {
        title: language === 'en' ? "Engineering Excellence Award" : "Premio Eccellenza Ingegneria",
        amount: "€4,500",
        eligibility: language === 'en' ? "Engineering students ages 19-26" : "Studenti ingegneria 19-26 anni",
        deadline: "10 Jan 2026",
      },
    ],
  };

  const insurancePrograms = [
    {
      title: language === 'en' ? "Student Health Insurance - Free" : "Assicurazione Sanitaria Studenti - Gratuita",
      description: language === 'en' 
        ? "Complete health coverage for students under 26" 
        : "Copertura sanitaria completa per studenti sotto i 26 anni",
      icon: Shield,
    },
    {
      title: language === 'en' ? "Student Accident Insurance" : "Assicurazione Infortuni Studenti",
      description: language === 'en' 
        ? "Free accident coverage during school activities" 
        : "Copertura infortuni gratuita durante attività scolastiche",
      icon: Shield,
    },
  ];

  const currentScholarships = scholarships[educationLevel];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <Label>{t("education_level")}</Label>
          <div className="flex gap-2 mt-2">
            <Button
              variant={educationLevel === "highschool" ? "default" : "outline"}
              onClick={() => setEducationLevel("highschool")}
              className="flex-1"
            >
              {t("high_school")}
            </Button>
            <Button
              variant={educationLevel === "university" ? "default" : "outline"}
              onClick={() => setEducationLevel("university")}
              className="flex-1"
            >
              {t("university")}
            </Button>
          </div>
        </div>
        <div>
          <Label htmlFor="age">{t("your_age")}</Label>
          <Input
            id="age"
            type="number"
            placeholder="18"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2"
          />
        </div>
        <div className="flex items-end">
          <Button className="w-full">{t("filter_results")}</Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-primary" />
          {t("available_scholarships")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentScholarships.map((scholarship, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-[var(--shadow-elevated)] transition-all">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground mb-2">{scholarship.title}</h4>
                  <p className="text-2xl font-bold text-primary mb-2">{scholarship.amount}</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <span className="font-medium text-card-foreground">{t("eligibility")}:</span>{" "}
                  <span className="text-muted-foreground">{scholarship.eligibility}</span>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-card-foreground">{t("deadline")}:</span>{" "}
                  <span className="text-muted-foreground">{scholarship.deadline}</span>
                </p>
              </div>
              <Button className="w-full">{t("apply_now")}</Button>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-primary" />
          {language === 'en' ? 'Free Insurance Programs' : 'Programmi Assicurativi Gratuiti'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insurancePrograms.map((program, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <program.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground">{program.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
