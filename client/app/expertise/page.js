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
    name={"Dr Md Akhtaruzzaman"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Dr Md Akhtaruzzaman"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com/in/md-akhtaruzzaman-6b148b55/"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <ExpertCardRight
    name={"Dr Md Towfiqur Rahman"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Dr Md Towfiqur Rahman"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <ExpertCardLeft
    name={"Dr. Hosney Jahan"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Dr. Hosney Jahan"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    email={"jahan@cse.mist.ac.bd"}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com/in/dr-hosney-jahan-7a1325277/"}
    whatsapp={"https://www.whatsapp.com"}
    researchgate={"https://www.researchgate.net/profile/Hosney-Jahan"}
    googleScholar={"https://scholar.google.com/citations?hl=en&user=k5q8YvUAAAAJ"}
    />
    <ExpertCardRight
    name={"Dr Naveed Quadri"}
    position={"Professor"}
    imageSrc={"/images/Alex_Carter.png"}
    imageAlt={"Dr Naveed Quadri"}
    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    facebook={"https://www.facebook.com"}
    linkedin={"https://www.linkedin.com"}
    whatsapp={"https://www.whatsapp.com"}
    />
    <Footer />
    </main>
  );
}
