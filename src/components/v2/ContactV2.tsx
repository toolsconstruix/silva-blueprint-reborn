import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "(508) 505-9762",
    link: "tel:+15085059762",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@silvascontracting.us",
    link: "mailto:info@silvascontracting.us",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Watertown, MA",
    link: null,
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 8AM-6PM",
    link: null,
  },
];

const ContactV2 = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for a free quote on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    <info.icon size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Call now or send us a message to discuss your project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="text-lg"
                  onClick={() => window.location.href = "tel:+15085059762"}
                >
                  <Phone className="mr-2" />
                  Call (508) 505-9762
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={() => window.location.href = "mailto:info@silvascontracting.us"}
                >
                  <Mail className="mr-2" />
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactV2;
