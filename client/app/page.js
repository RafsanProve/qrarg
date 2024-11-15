import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={roboto.className}>
    <Navbar />
    <Hero />
    </main>
  );
}
