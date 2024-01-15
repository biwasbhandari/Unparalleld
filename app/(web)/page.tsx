import FeaturedTshirt from "@/components/FeaturedTshirt/FeaturedTshirt";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/Hero/HeroSection";
import Home from "@/components/Home/Home";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import { getFeaturedTshirt } from "@/lib/apis";

const HomePage = async () => {
  const featuredTshirt = await getFeaturedTshirt();
  return (
    <>
      <Home />
      <HeroSection />
      <FeaturedTshirt featuredTshirt={featuredTshirt} />
      <Gallery />
      <NewsLetter />
    </>
  );
};
export default HomePage;
