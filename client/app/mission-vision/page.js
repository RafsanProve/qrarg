import Image from "next/image";
import ImageCollage from "../components/mission-vision/ImageCollage";
import Navbar from "../components/Navbar";

const VisionMission = () => {
  return (
    <div className="w-full bg-white shadow-lg">
      <Navbar />
      <ImageCollage />
      
      {/* Vision & Mission Section */}
      <div className="bg-white p-6 text-zinc-800">
        <h2 className="text-xl font-bold uppercase">Vision</h2>
        <p className="text-sm font-semibold mt-2">
          HELPING HAND AS A LEADER.. EMPOWERING LIVES, CREATING OPPORTUNITIES
          AND STRENGTHENING THE BOND OF HUMANITY
        </p>

        <h2 className="text-xl font-bold uppercase mt-6">Mission</h2>
        <p className="text-sm font-semibold mt-2">
          HELPING HAND IS COMMITTED TO SERVE HUMANITY BY INTEGRATING RESOURCES
          FOR PEOPLE IN NEED. WE STRIVE TO PROVIDE IMMEDIATE RESPONSE IN
          DISASTERS AND EFFECTIVE PROGRAMS IN PLACE OF SUFFERING FOR THE
          PLEASURE OF ALLAH.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
