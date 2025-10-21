import { Card } from "@/components/ui/card";
import { Users, Leaf, TrendingUp } from "lucide-react";

const impacts = [
  {
    icon: Users,
    title: "📊 Social Impact",
    subtitle: "More Accessible & Inclusive",
    description: "Government services that work for everyone, regardless of location or mobility.",
    color: "from-blue-500 to-blue-600",
    stats: [
      "50,000 people booked appointments online this month → 70% reduction in waiting times",
      "10,000 people accessed services from home through digital applications → increased accessibility",
      "500 citizens with disabilities used special accessibility features → easy access provided"
    ]
  },
  {
    icon: Leaf,
    title: "🌱 Environmental Impact",
    subtitle: "Eco-Friendly Bureaucracy",
    description: "Reducing paper usage and energy consumption for a sustainable future.",
    color: "from-green-500 to-green-600",
    stats: [
      "200,000 documents processed digitally this month → 3 tons of paper saved",
      "Digital invoices and notifications → 1,500 liters of ink saved",
      "Online appointment system → 2,000 fewer cars on the road → reduced carbon emissions"
    ]
  },
  {
    icon: TrendingUp,
    title: "💰 Economic Impact",
    subtitle: "Save Time & Costs",
    description: "Time and cost savings that benefit everyone.",
    color: "from-purple-500 to-purple-600",
    stats: [
      "Online documents prevented 10,000 hours of citizens waiting in queues",
      "€300,000 administrative cost savings through digital processes",
      "Process automation reduced employee workload by 40%"
    ]
  },
];

const Impact = () => {
  return (
    <section id="impact-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Real Impact, Real Change
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming how citizens interact with government services
          </p>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-card border-border"
            >
              <div className={`bg-gradient-to-br ${impact.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <impact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                {impact.title}
              </h3>
              <p className="text-sm font-semibold text-primary mb-3">
                {impact.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {impact.description}
              </p>
              <div className="space-y-3 mt-4 pt-4 border-t border-border">
                {impact.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex items-start gap-2">
                    <span className="text-primary text-sm">✓</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
