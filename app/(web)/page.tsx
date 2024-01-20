import FeaturedTshirt from "@/components/FeaturedTshirt/FeaturedTshirt";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/Hero/HeroSection";
import Home from "@/components/Home/Home";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getFeaturedTshirt } from "@/lib/apis";

const HomePage = async () => {
  const featuredTshirt = await getFeaturedTshirt();
  return (
    <>
      <Home />
      <hr className=" w-[95%] mx-auto bg-gray-300 border " />
      <HeroSection />
      <hr className=" w-[95%] mx-auto bg-gray-300 border " />
      <FeaturedTshirt featuredTshirt={featuredTshirt} />
      <hr className=" w-[95%] mx-auto bg-gray-300 border " />
      <Gallery />
      <hr className=" w-[95%] mx-auto bg-gray-300 border " />
      <NewsLetter />
    </>
  );
};
export default HomePage;
