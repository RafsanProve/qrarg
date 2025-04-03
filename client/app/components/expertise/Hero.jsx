

export default function Hero() {
return (
    // {/* Hero Section with colorful background */}
    <section className="relative w-full bg-gradient-to-r from-slate-900 via-primary to-slate-800 py-16">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Meet the Experts</h1>
        </div>
    </section>
);
}