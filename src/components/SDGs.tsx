import { Card } from "@/components/ui/card";

const sdgs = [
  {
    number: "9",
    title: "Industry, Innovation & Infrastructure",
    description: "Modernizing government services with secure digital infrastructure for more efficient, reliable, and accessible public services.",
  },
  {
    number: "11",
    title: "Sustainable Cities & Communities",
    description: "Reducing bureaucracy and waiting times to foster inclusive, citizen-friendly institutions and strengthen trust in public services.",
  },
  {
    number: "12",
    title: "Responsible Consumption & Production",
    description: "Eliminating paper-based procedures to reduce waste and promote sustainable, resource-efficient government practices.",
  },
];

const SDGs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            🌍 Aligned with UN Sustainable Development Goals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to a better future for all
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sdgs.map((sdg, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-primary to-secondary text-primary-foreground w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg flex-shrink-0">
                  {sdg.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground leading-tight">
                    {sdg.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {sdg.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGs;
