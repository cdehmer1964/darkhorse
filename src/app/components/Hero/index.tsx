import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/8Th-Street-03.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#65d57a] md:text-base">
            Custom cabinetry · Atlanta, Georgia
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.02] text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Modern Design.
            <span className="mt-2 block text-[#f5efe2]">Timeless Craft.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
            Thoughtfully designed and carefully built cabinetry for distinctive homes and spaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/gallery" className="dh-button dh-button-primary">View Our Work</Link>
            <Link href="/contact" className="dh-button dh-button-secondary">Start a Conversation</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
