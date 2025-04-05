import Image from 'next/image'

export default function Story() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-1/2 px-4 sm:px-6">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-slate-700 mb-4 text-base sm:text-lg">
              The Quantum Robotics & Automation Research Group (QRARG) was founded in 2015 by a team of visionary
              researchers and engineers who recognized the transformative potential of combining quantum computing
              principles with robotics and automation systems.
            </p>
            <p className="text-slate-700 mb-4 text-base sm:text-lg">
              What began as a small research initiative has grown into a research organization with over
              20 researchers, engineers, and support staff working across multiple disciplines.
              Today, QRARG is recognized as a pioneer in the field, collaborating with leading academic institutions,
              industry partners, and government agencies to push the boundaries of what possible in quantum robotics
              and automation.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative mx-4 sm:mx-8 shadow-lg">
              <Image
                src="/images/hero2.jpg"
                alt="QRARG Research Facility"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
