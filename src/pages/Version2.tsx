import Navigation from "@/components/Navigation";
import HeroV2 from "@/components/v2/HeroV2";
import ServicesV2 from "@/components/v2/ServicesV2";
import AboutV2 from "@/components/v2/AboutV2";
import ReviewsV2 from "@/components/v2/ReviewsV2";
import ContactV2 from "@/components/v2/ContactV2";
import Footer from "@/components/Footer";

const Version2 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroV2 />
      <ServicesV2 />
      <AboutV2 />
      <ReviewsV2 />
      <ContactV2 />
      <Footer />
    </div>
  );
};

export default Version2;
