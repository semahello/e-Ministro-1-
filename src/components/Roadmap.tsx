import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    phase: "Short-term",
    title: "Pilot Program",
    description: "Launch with one national service to test and refine the platform",
    timeline: "3-6 months",
    status: "In Planning",
  },
  {
    phase: "Mid-term",
    title: "Expansion & Feedback",
    description: "Gather user feedback and add additional service modules based on citizen needs",
    timeline: "6-12 months",
    status: "Upcoming",
  },
  {
    phase: "Long-term",
    title: "National & EU Rollout",
    description: "Full national implementation with potential expansion across EU member states",
    timeline: "12-24 months",
    status: "Vision",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🎯 Our Roadmap to Digital Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A phased approach to revolutionizing government services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((item, index) => (
            <div key={index} className="relative">
              <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {item.phase}
                      </Badge>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                    <div className="font-semibold text-primary">{item.timeline}</div>
                    <Badge variant="outline" className="mt-2">{item.status}</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed ml-0 md:ml-16">
                  {item.description}
                </p>
              </Card>
              {index < phases.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
