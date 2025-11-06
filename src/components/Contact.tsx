import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">GET A FREE QUOTE</h2>
          <p className="text-2xl mb-8">CALL NOW: (508) 505-9762 OR</p>

          <Button
            variant="secondary"
            size="lg"
            className="mb-12"
            onClick={() => window.location.href = "tel:+15085059762"}
          >
            Contact Us
          </Button>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
              <div className="bg-primary-foreground text-primary p-3 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+15085059762" className="hover:underline">
                  (508) 505-9762
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-foreground text-primary p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:info@silvascontracting.us" className="hover:underline">
                  info@silvascontracting.us
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary-foreground text-primary p-3 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p>Watertown, MA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
