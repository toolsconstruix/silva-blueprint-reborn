import { Award, Users, Clock, Star } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Years of experience delivering exceptional quality in every project",
  },
  {
    icon: Users,
    title: "Licensed & Insured",
    description: "Fully certified professionals you can trust with your property",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and complete projects as scheduled",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description: "Our priority is your complete satisfaction with every job",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground">
            Excellence in Every Detail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-secondary transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                <reason.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
