import Image from 'next/image';
import Link from 'next/link';

function SocialMediaButton({ buttonURL, iconUrl, altText }) {
    return (
        <Link href={buttonURL} target="_blank">
            <Image
                src={iconUrl}
                alt={altText}
                className="w-8 md:w-10 lg:w-12"
                width={200}
                height={20}
            />
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-TEXT p-4 shadow-lg flex flex-col items-center justify-end h-full w-full mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
            <h1 className='text-5xl pt-8 mb-4'><b>Stay in Touch</b></h1>
            <p className='text-xl mb-4'>Send us your thought. Your each words are highly valuable to us.</p>
            <div className="flex flex-row item-center justify-center mb-4 w-2/5">
                <input className="w-full h-12 px-4 border-2 border-black rounded-sm mb-4 text-zinc-800 text-base lg:text-xl" rows="4" placeholder="Email" ></input>
                <button className="bg-black w-1/5 h-12 border-2 border-white rounded-sm mb-4 text-TEXT text-base lg:text-xl">
                    <p>Send</p>
                </button>
            </div>
            <h1 className='text-5xl mb-4'><b>Contact us</b></h1>
            <div className="flex flex-row items-center justify-center gap-4 mb-4">
                <SocialMediaButton buttonURL="https://www.facebook.com/" iconUrl="/svgs/facebook-icon.svg" altText="Facebook" />
                <SocialMediaButton buttonURL="https://www.linkedin.com/company/quantum-robotics-automation-research-group/" iconUrl="/svgs/linkedin-icon.svg" altText="LinkedIn" />
                <SocialMediaButton buttonURL="https://web.whatsapp.com/" iconUrl="/svgs/whatsapp-icon.svg" altText="WhatsApp" />
            </div>
            <p className='mt-auto -mb-6 pt-8 text-sm'>Copyright &copy; 2024 Quantum Robotics & Automation Research Group. All Rights Reserved</p>
        </footer>
    )
}