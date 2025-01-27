import Image from "next/image"
import Link from "next/link"

export default function ExpertCardLeft({ name, position, imageSrc, imageAlt, description, facebook, linkedin, whatsapp }) {
    return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-2xl mx-4 sm:mx-8 md:mx-auto mt-20 p-4 md:p-8 pb-10 rounded-3xl max-w-6xl h-full text-center md:text-left text-zinc-800 transition duration-700 ease-in-out hover:scale-105">
        <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={200} 
            height={200} 
            className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"
        />

        <div className="flex flex-col justify-start items-center md:items-start md:ml-4">
            <h1 className="mt-4 mb-2 font-bold uppercase tracking-tight text-lg sm:text-xl md:text-3xl">{name}</h1>
            <h6 className="mt-2 mb-2 font-medium text-base sm:text-lg md:text-2xl">{position}</h6>

            <p className="mb-4 text-center md:text-left text-sm sm:text-base md:text-xl leading-relaxed">
                {description}
            </p>
            <div className="flex flex-row justify-center md:justify-start items-start gap-3">
                <Link href={facebook} target="_blank" rel="noopener noreferrer">
                    <Image src="/svgs/facebook-icon-black.svg" alt="facebook" width={25} height={25} />
                </Link>
                <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Image src="/svgs/linkedin-icon-black.svg" alt="LinkedIn" width={25} height={25} />
                </Link>
                <Link href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <Image src="/svgs/whatsapp-icon-black.svg" alt="WhatsApp" width={25} height={25} />
                </Link>
            </div>
        </div>
    </div>
    );
}