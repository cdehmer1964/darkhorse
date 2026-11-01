import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080c12] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-serif text-2xl text-white">Dark Horse Woodworks</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed">Custom cabinetry and architectural woodwork, designed and built in Atlanta, Georgia.</p>
          <p className="mt-5 text-xs text-white/45">© {new Date().getFullYear()} Dark Horse Woodworks. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          <Link href="/our-story" className="hover:text-[#65d57a]">Our Story</Link>
          <Link href="/gallery" className="hover:text-[#65d57a]">Gallery</Link>
          <Link href="/working-with-darkhorse" className="hover:text-[#65d57a]">Process</Link>
          <Link href="/contact" className="hover:text-[#65d57a]">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
