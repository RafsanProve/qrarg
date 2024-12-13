import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResearchCard from "../components/research/ResearchCard";
import {Roboto_Condensed} from "next/font/google";
import FilterBox from "../components/research/FilterBox";

const roboto = Roboto_Condensed({
      weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
      style: ["normal", "italic"],
      subsets: ["latin"],
});  

export default function ResearchesPage() {
    return (
      <main className={roboto.className}>
        <Navbar />
        <div className="bg-zinc-800 w-full h-16"></div>
        <div className="flex">
          {/* Fixed FilterBox */}
          <div className="sticky top-16 w-[300px] h-screen overflow-y-auto">
            <FilterBox />
          </div>
        
          {/* Research Cards Grid */}
          <div className="ml-6 flex-1">
            <div className="grid grid-cols-3">
              <ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              /><ResearchCard 
                title={"Quasi-inverse pendulum model of 12 DoF bipedal walking"} 
                description={"This paper presents modeling of a 12-degree of freedom (DoF) bipedal robot, focusing on the lower limbs of the system, and trajectory design for walking on straight path. Gait trajectories are designed by modeling of center of mass (CoM) trajectory and swing foot ankle trajectory based on stance foot ankle."} 
                imageUrl={"/images/Quasi-inverse.png"}
                link={"https://link.springer.com/article/10.1007/s11633-016-1023-1"}
              />
              {/* Add more ResearchCard components as needed */}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
}