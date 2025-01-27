import Image from "next/image"
import Link from "next/link"

export default function ExpertCardLeft({ name, position, imageSrc, imageAlt, description, facebook, linkedin, whatsapp }) {
    return (
    <div className="flex flex-row justify-center items-center bg-white shadow-2xl mx-auto sm:mx-8 md:mx-auto mt-20 p-8 pb-10 rounded-3xl max-w-6xl h-full text-center text-zinc-800 transition duration-700 ease-in-out hover:scale-105">

        <div className="flex flex-col justify-end items-end mr-4">
            <h1 className="mt-4 mb-2 font-bold uppercase tracking-tight text-xl sm:text-2xl md:text-3xl">{name}</h1>
            <h6 className="mt-2 mb-2 font-medium text-lg sm:text-xl md:text-2xl">{position}</h6>

            <p className="mb-4 text-right text-base sm:text-lg md:text-xl leading-relaxed">
                {description}
            </p>
            <div className="flex flex-row justify-end items-end">
                <Link href={facebook} target="_blank" rel="noopener noreferrer" className="mr-3">
                    <Image src="/svgs/facebook-icon-black.svg" alt="facebook" width={25} height={25} />
                </Link>
                <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="mr-3">
                    <Image src="/svgs/linkedin-icon-black.svg" alt="LinkedIn" width={25} height={25} />
                </Link>
                <Link href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <Image src="/svgs/whatsapp-icon-black.svg" alt="WhatsApp" width={25} height={25} />
                </Link>
            </div>
        </div>
        <Image src={imageSrc} alt={imageAlt} width={200} height={200} className="rounded-full w-60 h-60 object-cover" />
    </div>
    );
}