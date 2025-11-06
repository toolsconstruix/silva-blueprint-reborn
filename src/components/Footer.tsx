import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Silva's Contracting" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm">
              Professional carpentry and contracting services in Massachusetts.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>Watertown, MA</li>
              <li>
                <a href="tel:+15085059762" className="hover:text-primary transition-colors">
                  (508) 505-9762
                </a>
              </li>
              <li>
                <a href="mailto:info@silvascontracting.us" className="hover:text-primary transition-colors">
                  info@silvascontracting.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm">
          <p>
            Copyright 2025 - All rights reserved - Powered by{" "}
            <a href="https://lovable.dev" className="hover:text-primary transition-colors">
              Lovable.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
