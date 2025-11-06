import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: imageLoaded ? 'transparent' : '#1a1a1a',
          transition: 'background-image 0.3s ease-in-out',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Carpentry Services Specialists
        </h1>
        <p className="text-2xl md:text-3xl text-primary-foreground/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          Massachusetts
        </p>
        <Button
          onClick={scrollToContact}
          variant="hero"
          size="lg"
          className="text-lg px-8 py-6 h-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
