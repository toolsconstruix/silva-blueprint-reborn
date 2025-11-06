import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isV2 = location.pathname === "/v2";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const toggleVersion = () => {
    navigate(isV2 ? "/" : "/v2");
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Silva's Contracting" className="h-16 w-auto" loading="eager" fetchPriority="high" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="hero" size="lg">
              Get a Quote
            </Button>
            <Button onClick={toggleVersion} variant="outline" size="lg">
              {isV2 ? "Version 1" : "Version 2"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary transition-colors"
            >
              Contact
            </button>
            <div className="px-4 space-y-2">
              <Button onClick={() => scrollToSection("contact")} variant="hero" size="lg" className="w-full">
                Get a Quote
              </Button>
              <Button onClick={toggleVersion} variant="outline" size="lg" className="w-full">
                {isV2 ? "Version 1" : "Version 2"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
