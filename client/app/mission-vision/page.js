import Image from "next/image";

const VisionMission = () => {
  return (
    // <div className="flex justify-center items-center min-h-screen bg-[#113463] p-6">
      <div className="w-full bg-white shadow-lg">
        {/* Header Section */}
        <div className="relative bg-[#113463] p-6 text-center">
          <Image
            src="/vercel.svg"
            alt="Helping Hand Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Image Collage */}
        {/* <div className="relative bg-[#113463] p-6 pb-12"> */}
          <div className="grid grid-cols-2 -gap-2">
            <div className="col-span-2 flex justify-end mr-80 -mb-24">
              <Image
                src="/images/photometric-hero2.png"
                alt="Image 1"
                width={300}
                height={300}
                className="rounded-lg border-4 border-white rotate-45 w-[350px] h-[350px]"
              />
            </div>
            <div className="col-span-2 flex justify-end mr-[76px] -mb-24">
              <Image
                src="/images/fuzzy-hero.png"
                alt="Image 4"
                width={200}
                height={200}
                className="rounded-lg border-4 border-white rotate-45 w-[350px] h-[350px]"
              />
            </div>
            <div className="col-span-2 flex justify-end mr-80">
              <Image
                src="/images/fuzzy-hero.png"
                alt="Image 4"
                width={300}
                height={300}
                className="rounded-lg border-4 border-white -rotate-45 w-[350px] h-[350px]"
              />
            </div>
          </div>
        {/* </div> */}
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
    // </div>
  );
};

export default VisionMission;
