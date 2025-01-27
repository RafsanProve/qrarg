import Navbar from "../components/Navbar";
import MeetTheExperts from "../components/expertise/MeetTheExperts";
import ExpertCardLeft from "../components/expertise/ExpertCardLeft";
import ExpertCardRight from "../components/expertise/ExpertCardRight";
import Footer from "../components/Footer";
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
    <div className="bg-zinc-800 w-full h-16"></div>
    <MeetTheExperts />
    <ExpertCardLeft
    name={"Alex Carter"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Alex Carter"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <ExpertCardRight
    name={"Alex Carter"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Alex Carter"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <ExpertCardLeft
    name={"Alex Carter"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Alex Carter"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <ExpertCardRight
    name={"Alex Carter"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Alex Carter"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <Footer />
    </main>
  );
}
