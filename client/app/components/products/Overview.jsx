import Image from "next/image"
import { FileText } from "lucide-react"
import { ChevronRight} from "lucide-react"
import { Button } from "../ui/button"

export default function Overview() {
return (
    // {/* Overview Section */}
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-1/2 px-4 sm:px-6">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">From Research to Reality</h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mb-4 sm:mb-6"></div>
            <p className="text-slate-700 mb-4 text-base sm:text-lg">
            At QRARG, we bridge the gap between theoretical research and practical applications. Our
            products and technologies represent the culmination of years of pioneering research, transformed into
            solutions that address real-world challenges across multiple industries.
            </p>
            <p className="text-slate-700 mb-4 text-base sm:text-lg">
            Each of our products undergoes a rigorous development process, from concept and prototyping to testing
            and refinement. We work closely with industry partners to ensure our solutions meet practical needs
            while pushing the boundaries of whats possible with quantum technology.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative mx-4 sm:mx-8 shadow-lg">
              <Image
                src="/images/cute.jpg"
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
