export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-slate-900 to-slate-800 py-20">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    </div>
    <div className="container relative z-10 mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About QRARG</h1>
        <p className="text-xl text-slate-300 mb-6">
          Pioneering the future through quantum innovation and collaborative research excellence.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
            Founded in 2015
          </span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
            50+ Researchers
          </span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
            100+ Publications
          </span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
            25+ Patents
          </span>
        </div>
      </div>
    </div>
  </section>
  );
}