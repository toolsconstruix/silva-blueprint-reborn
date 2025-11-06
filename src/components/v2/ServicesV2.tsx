import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Paintbrush, Grid3x3, ArrowRight } from "lucide-react";
import residentialImage from "@/assets/residential-carpentry.jpg";
import commercialImage from "@/assets/commercial-carpentry.jpg";
import tilingImage from "@/assets/tiling-services.jpg";
import paintingImage from "@/assets/painting-services.jpg";

const services = [
  {
    title: "Residential Carpentry",
    description:
      "If you are a homeowner who lives in the area, our services are made with you in mind. You can expect quality carpentry services from someone who understands what you're after, which will always enhance your living space.",
    image: residentialImage,
    icon: Home,
  },
  {
    title: "Commercial Carpentry",
    description:
      "From custom office renovations to complete build outs, our commercial carpentry services bring your vision to life. We specialize in creating functional, durable spaces that enhance your business environment.",
    image: commercialImage,
    icon: Building2,
  },
  {
    title: "Tiling Services",
    description:
      "We specialize in delivering top-quality tile installation services that add beauty, durability, and value to your space. From floors to backsplashes and countertops to showers, we deliver flawless, long-lasting results.",
    image: tilingImage,
    icon: Grid3x3,
  },
  {
    title: "Painting Services",
    description:
      "Our painting services provide a fresh look and durable finish with quality craftsmanship. We use high-quality paints and pay close attention to detail to ensure excellent results that enhance your space's appeal.",
    image: paintingImage,
    icon: Paintbrush,
  },
];

const ServicesV2 = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive carpentry solutions for residential and commercial projects in Watertown, MA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground p-3 rounded-lg">
                  <service.icon size={28} />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Learn More
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
