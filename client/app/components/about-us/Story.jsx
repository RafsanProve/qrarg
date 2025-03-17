import Image from 'next/image'
export default function Story() {
return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-slate-700 mb-4">
                The Quantum Robotics & Automation Research Group (QRARG) was founded in 2015 by a team of visionary
                researchers and engineers who recognized the transformative potential of combining quantum computing
                principles with robotics and automation systems.
                </p>
                <p className="text-slate-700 mb-4">
                What began as a small research initiative has grown into a research organization with over
                20 researchers, engineers, and support staff working across multiple disciplines.
                Today, QRARG is recognized as a pioneer in the field, collaborating with leading academic institutions,
                industry partners, and government agencies to push the boundaries of what possible in quantum robotics
                and automation.
                </p>
            </div>
            <div className="md:w-1/2 relative ml-8">
                <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative ml-8">
                <Image
                    src="/images/hero2.jpg"
                    alt="QRARG Research Facility"
                    fill
                    className="object-cover"
                />
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}