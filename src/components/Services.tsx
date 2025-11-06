import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  },
  {
    title: "Commercial Carpentry Services",
    description:
      "From custom office renovations to complete build outs, our commercial carpentry services bring your vision to life. We specialize in creating functional, durable spaces that enhance your business environment.",
    image: commercialImage,
  },
  {
    title: "Tiling Services",
    description:
      "We specialize in delivering top-quality tile installation services that add beauty, durability, and value to your space. From floors to backsplashes and countertops to showers, we deliver flawless, long-lasting results.",
    image: tilingImage,
  },
  {
    title: "Painting Services",
    description:
      "Our painting services provide a fresh look and durable finish with quality craftsmanship. We use high-quality paints and pay close attention to detail to ensure excellent results that enhance your space's appeal.",
    image: paintingImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            A Premium Carpentry Service for Impeccable Results in Watertown, MA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
