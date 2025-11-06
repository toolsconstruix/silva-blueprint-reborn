import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const features = [
  "Licensed & Insured Professionals",
  "15+ Years of Experience",
  "Quality Materials & Craftsmanship",
  "On-Time Project Completion",
  "Competitive Pricing",
  "100% Customer Satisfaction",
];

const AboutV2 = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Silva's Contracting Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-bold">15+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">About Silva's Contracting</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Building Dreams with Precision & Care
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Silva's Carpentry Services brings together the perfect blend of skill, experience, and passion
              for exceptional craftsmanship. We understand that your home or business is more than just a
              building – it's where your dreams take shape.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operating in Watertown and throughout Massachusetts, we take pride in building lasting
              relationships with our clients. Whether it's a kitchen remodel, commercial build-out, or finishing
              touches like tile and paint work, we're here to bring your vision to life.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button onClick={scrollToContact} variant="hero" size="lg" className="mt-6">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;
