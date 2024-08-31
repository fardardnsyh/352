import BacktoTop from "../Components/BackToTop";
import Blog from "../Components/Home/Blog";
import Hero from "../Components/Home/Hero";
import NewsLetter from "../Components/Home/NewsLetter";
import ProtfolioService from "../Components/Home/ProtfolioService";
import Service from "../Components/Home/Service";
import Services from "../Components/Home/Services";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#010113] via-[#090014] to-[#010113]">
      <Hero />
      <Service />
      <ProtfolioService />
      <Services />
      <Blog />
      <NewsLetter />
    </div>
  );
}
