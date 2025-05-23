import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import Overview from "./components/home/Overview";
import OverViewCards from "./components/home/OverViewCards";
import ResearchAreas from "./components/home/ResearchAreas";
import Researches from "./components/home/Researches";
import Footer from "./components/Footer";
import {Roboto_Condensed} from "next/font/google";
import Products from "./components/home/Products";

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
    <Navbar />
    <div className="bg-zinc-800 w-full h-16"></div>
    <Hero />
    <Overview />
    <OverViewCards />
    <ResearchAreas />
    <Researches />
    <Products />
    <Footer />
    </main>
  );
}
