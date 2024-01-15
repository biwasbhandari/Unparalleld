import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/Hero/HeroSection";
import Home from "@/components/Home/Home";
import PageSearch from "@/components/PageSearch/PageSearch";

const HomePage = () => {
  return (
    <>
      <Home />
      <HeroSection />
      {/* Featured Tshirt */}
      <Gallery />
    </>
  );
};
export default HomePage;
