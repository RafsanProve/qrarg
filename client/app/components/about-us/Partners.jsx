export default function Partners() {
return (
    <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-zinc-800 text-3xl font-bold mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
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