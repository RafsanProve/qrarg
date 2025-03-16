import Image from 'next/image'
export default function Story() {
return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
            <h2 className="text-zinc-800 text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-slate-700 mb-4">
            The Quantum Robotics & Automation Research Group (QRARG) was founded in 2015 by a team of visionary
            scientists and engineers who recognized the transformative potential of combining quantum computing
            principles with robotics and automation systems.
            </p>
            <p className="text-slate-700 mb-4">
            What began as a small research initiative has grown into a world-class research organization with over
            50 researchers, engineers, and support staff working across multiple disciplines. Our headquarters
            features state-of-the-art laboratories equipped with the latest quantum computing hardware, robotics
            testing facilities, and collaborative workspaces.
            </p>
            <p className="text-slate-700">
            Today, QRARG is recognized as a pioneer in the field, collaborating with leading academic institutions,
            industry partners, and government agencies to push the boundaries of what possible in quantum robotics
            and automation.
            </p>
        </div>
        <div className="md:w-1/2 relative">
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative">
            <Image
                src="/placeholder.svg?height=400&width=600"
                alt="QRARG Research Facility"
                width={600}
                height={400}
                className="object-cover"
            />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
        </div>
        </div>
    </div>
    </section>
  )
}