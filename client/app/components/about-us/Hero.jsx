export default function Hero({title, description, tags}) {
  return (
    <section className="w-full bg-gradient-to-r from-zinc-800 to-zinc-700 py-28">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="container relative z-10 mx-auto">
        <div className="max-w-4xl sm:pl-8 md:pl-12 lg:pl-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-slate-300 mb-6">
            {description}
          </p>

        {tags && (
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
              Founded in 2015
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
              20+ Researchers
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
              100+ Publications
            </span>
            <span className="inline-flex items-center rounded-md bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-800-foreground">
              20+ Patents
            </span>
          </div>
          )}

        {/* {!tags && (<div className="flex flex-wrap gap-3"></div>)} */}
        </div>
      </div>
  </section>
  );
}