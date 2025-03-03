import Image from "next/image";

export default function ImageCollage() {
return (
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-2 flex justify-end items-center mr-80 -mb-24">
              <div className="relative w-[350px] h-[350px] rotate-45 border-4 border-white rounded-lg overflow-hidden">
                <Image
                  src="/images/photometric-hero2.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="-rotate-45 scale-150"          
                />
              </div>
            </div>
            <div className="col-span-2 flex justify-end mr-[76px] -mb-24">
              <div className="relative w-[350px] h-[350px] rotate-45 border-4 border-white rounded-lg overflow-hidden">
                <Image
                  src="/images/fuzzy-hero.png"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                  className="-rotate-45 scale-150"
                />
              </div>
            </div>
            <div className="col-span-2 flex justify-end mr-80">
              <div className="relative w-[350px] h-[350px] rotate-45 border-4 border-white rounded-lg overflow-hidden">
                <Image
                  src="/images/fuzzy-hero.png"
                  alt="Image 4"
                  layout="fill"
                  objectFit="cover"
                  className="-rotate-45 scale-150"
                />
              </div>
            </div>
          </div>
    );
};

