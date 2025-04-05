import Image from "next/image";
import ImageCollage2 from "../components/mission-vision/ImageCollage2";
import Navbar from "../components/Navbar";
import {Roboto_Condensed} from "next/font/google";
import Footer from "../components/Footer";
import AchievementsSection from "../components/mission-vision/AchievementsSection";
import Mission from "../components/mission-vision/Mission";
import Vision from "../components/mission-vision/Vision";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});  

const VisionMission = () => {
  return (
    <main className={roboto.className}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <ImageCollage2 />
        <AchievementsSection />
        <Mission />
        <Vision />
        
        {/* Vision & Mission Section */}
        {/* <div className="bg-white p-6 md:p-12 text-zinc-800 w-full mx-auto sm:mx-8 md:mx-auto py-20">
          <div className="mb-10">
              <h1 className="text-3xl md:text-4xl text-zinc-800 font-bold text-center mb-4">Mission & Vision</h1>
              <div className="flex justify-center">
                  <Image 
                      src="/svgs/Underlines.svg" 
                      alt="underline" 
                      className="-mt-1 mb-6 w-56 md:w-64 lg:w-72"
                      width={200} 
                      height={20}
                  />
              </div>
          </div>
          
          <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-zinc-800">Our Mission</h2>
              <div className="w-20 h-1 bg-zinc-800 my-3"></div>
              <p className="text-lg md:text-xl text-zinc-800 font-medium mt-4 leading-relaxed">
              We aim to cultivate a dynamic research community that is globally recognized and that bridges disciplines, fostering collaboration among experts in quantum mechanics, robotics, AI, automation, and beyond. Our platform serves as a hub where ideas converge, innovations emerge, and groundbreaking research translates into real-world solutions.
              We believe that multidisciplinary collaboration drives discovery, deepens understanding, and fuels impactful advancements. By facilitating knowledge sharing, expert discussions, and joint projects, we strive to accelerate scientific progress and technological innovation.
              </p>
          </div>

          <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-zinc-800">Our Vision</h2>
              <div className="w-20 h-1 bg-zinc-800 my-3"></div>
              <p className="text-lg md:text-xl text-zinc-800 font-medium mt-4 leading-relaxed">
              We envision a future where quantum mechanics, robotics, artificial intelligence, and automation drive transformative advancements, reshaping industries and society for the better. Our goal is to establish QRARG as a global hub for researchers, scientists, and innovators dedicated to pushing the boundaries of technology and exploring new frontiers in science and engineering.
              By fostering a collaborative ecosystem that nurtures curiosity, encourages bold experimentation, and embraces interdisciplinary synergy, we strive to lead the way toward a smarter, more automated, and technologically empowered world.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Join us in shaping the next era of scientific excellence!
              </p>
          </div>
        </div> */}
        
      <div className="bg-white w-full h-20"></div>
      <Footer />
    </main>
  );
};

export default VisionMission;
