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
        <footer className="bg-zinc-800 text-TEXT p-4 md:p-6 lg:p-8 shadow-lg flex flex-col items-center justify-end h-full w-full mx-auto text-center pb-10 mt-20">
            <h1 className='text-3xl md:text-4xl lg:text-5xl pt-8 mb-4'><b>Stay in Touch</b></h1>
            <p className='text-base md:text-lg lg:text-xl mb-4 px-4 md:px-0'>Send us your thought. Your each words are highly valuable to us.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 w-full md:w-3/4 lg:w-2/5 px-4 md:px-0">
                <input 
                    className="w-full h-12 px-4 border-2 border-black rounded-sm mb-4 md:mb-0 text-zinc-800 text-base lg:text-xl" 
                    placeholder="Email" 
                />
                <button className="bg-black w-full md:w-1/5 h-12 border-2 border-white rounded-sm md:ml-2 text-TEXT text-base lg:text-xl">
                    Send
                </button>
            </div>

            <h1 className='text-3xl md:text-4xl lg:text-5xl mb-4'><b>Contact us</b></h1>
            <div className="flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-4">
                <SocialMediaButton buttonURL="https://www.facebook.com/" iconUrl="/svgs/facebook-icon.svg" altText="Facebook" />
                <SocialMediaButton buttonURL="https://www.linkedin.com/company/quantum-robotics-automation-research-group/" iconUrl="/svgs/linkedin-icon.svg" altText="LinkedIn" />
                <SocialMediaButton buttonURL="https://web.whatsapp.com/" iconUrl="/svgs/whatsapp-icon.svg" altText="WhatsApp" />
            </div>
            
            <p className='mt-auto pt-8 text-xs md:text-sm lg:text-base'>
                Copyright &copy; 2024 Quantum Robotics & Automation Research Group. All Rights Reserved
            </p>
        </footer>
    )
}
