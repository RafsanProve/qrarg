import Image from "next/image";
import { Target, Compass, Heart } from "lucide-react"

export default function Vission() {
return (
    // {/* Vision Statement Section */}
    <section className="py-16 bg-white text-zinc-800">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 relative">
            <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
                <Image
                src="/images/icca.jpg"
                alt="QRARG Vision"
                fill
                className="object-cover rounded-lg"
                />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-zinc-800/20 rounded-lg -z-10"></div>
            </div>
            <div className="order-1 md:order-2 w-full pr-4 sm:pr-6">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-1 mb-6 w-32 md:w-36 lg:w-40"
                width={100} 
                height={20}
            />
            <p className="text-xl text-slate-700 mb-6 font-medium italic">
                &quot;To be the global leader in quantum robotics research, creating a future where quantum-enhanced
                automation systems transform industries, improve human lives, and help solve humanity&apos;s greatest
                challenges.&quot;
            </p>
            <p className="text-slate-700 mb-6">
                We envision a future where quantum mechanics, robotics, artificial intelligence, and automation drive transformative advancements, reshaping industries and society for the better. 
                Our goal is to establish QRARG as a global hub for researchers, scientists, and innovators dedicated to pushing the boundaries of technology and exploring new frontiers in science and engineering. 
                By fostering a collaborative ecosystem that nurtures curiosity, encourages bold experimentation, and embraces interdisciplinary synergy, we strive to lead the way toward a smarter, more automated, and technologically empowered world.
            </p>
            <div className="space-y-4">
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Scientific Leadership</h3>
                    <p className="text-slate-600">
                    Establishing QRARG as the preeminent institution for quantum robotics research worldwide.
                    </p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Compass className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Technological Transformation</h3>
                    <p className="text-slate-600">
                    Creating quantum-enhanced systems that revolutionize industries from manufacturing to healthcare.
                    </p>
                </div>
                </div>
                <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-zinc-800/20 flex items-center justify-center shrink-0 mr-4">
                    <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Human-Centered Innovation</h3>
                    <p className="text-slate-600">
                    Ensuring our technologies enhance human capabilities and improve quality of life.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
);
}