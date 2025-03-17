import Image from 'next/image';
export default function Partners() {
return (
    <section className="py-16 bg-white text-zinc-800 rounded-3xl p-4 shadow-2xl flex flex-col items-center justify-center h-full max-w-7xl mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col items-center mb-12">
            <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <Image 
                src="/svgs/Underlines.svg" 
                alt="underline" 
                className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                width={200} 
                height={20}
            />
            <p className="text-lg text-slate-700">
                We collaborate with leading institutions and organizations to advance our research mission.
            </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm">
                <div className="w-24 h-24 bg-slate-200 rounded flex items-center justify-center">
                    <span className="text-slate-400 font-medium">Partner Logo</span>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}