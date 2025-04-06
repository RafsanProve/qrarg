import Image from "next/image";
import { Button } from "../ui/button"

export default function Guide() {
return(
        // {/* Citation Guide Section */}
    <section className="py-16 bg-white text-zinc-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">How to Cite Our Work</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                width={200} 
                height={20}
            />
            <p className="text-slate-700 mb-6 text-center">
                When referencing our research in your own work, please use the following citation formats:
            </p>

            <div className="space-y-6">
                <div className="bg-slate-100 border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Journal Article</h3>
                <p className="text-sm text-slate-700 font-mono bg-slate-200 p-3 rounded">
                    Author, A., Author, B., & Author, C. (Year). Title of the article. <em>Journal Name</em>,
                    Volume(Issue), page range. DOI
                </p>
                <p className="text-sm text-slate-600 mt-2">
                    <strong>Example:</strong> Chen, S., Rodriguez, M., & Wilson, J. (2023). Quantum-Enhanced Robotic
                    Control Systems for Precision Manufacturing. <em>Journal of Quantum Robotics</em>, 12(3), 145-162.
                    https://doi.org/10.1234/jqr.2023.12345
                </p>
                </div>

                <div className="bg-slate-100 border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Conference Paper</h3>
                <p className="text-sm text-slate-700 font-mono bg-slate-200 p-3 rounded">
                    Author, A., Author, B., & Author, C. (Year). Title of the paper. In{" "}
                    <em>Proceedings of Conference Name</em> (pp. page range). Location. DOI
                </p>
                <p className="text-sm text-slate-600 mt-2">
                    <strong>Example:</strong> Wilson, J., Chen, S., & Rodriguez, M. (2023). Quantum-Classical Interface
                    for Hybrid Robotic Systems. In{" "}
                    <em>Proceedings of International Conference on Quantum Technologies</em> (pp. 234-241). Zurich,
                    Switzerland. https://doi.org/10.1145/icqt.2023.67890
                </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-slate-700 mb-4">Need help accessing our publications? Contact our research office:</p>
                <Button variant="outline">Contact Research Office</Button>
            </div>
            </div>
        </div>
    </section>
    );
}