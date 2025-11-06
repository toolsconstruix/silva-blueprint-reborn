import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Dreams</h2>
          </div>

          <div className="prose prose-lg mx-auto text-foreground">
            <p className="mb-6 text-lg leading-relaxed">
              Silva's Carpentry Services brings together the perfect blend of skill, experience, and passion
              for exceptional craftsmanship. We understand that your home or business is more than just a
              building – it's where your dreams take shape. That's why we approach each project with the same
              care and dedication that you would expect. From custom carpentry and renovations to expert
              tiling and painting, our team ensures every detail reflects quality and precision.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              Operating in Watertown, and throughout Massachusetts, we take pride in building lasting
              relationships with our clients. Whether it's a kitchen remodel, commercial build-out, or finishing
              touches like tile and paint work, we're here to bring your vision to life with professionalism and
              expertise.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              Contact us today to discuss your project, and let's turn your ideas into reality with unmatched
              craftsmanship and attention to every detail.
            </p>
          </div>

          <div className="text-center">
            <Button onClick={scrollToContact} variant="hero" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
