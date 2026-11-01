"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/gallery", label: "Gallery" },
  { href: "/our-story", label: "Our Story" },
  { href: "/working-with-darkhorse", label: "Our Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[200] border-b border-white/10 bg-[#0b1118]/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Dark Horse Woodworks home">
          <Image src="/logo.png" alt="Dark Horse Woodworks" width={116} height={150} priority className="h-16 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => {
            const active = pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} className={active ? "dh-nav-link dh-nav-link-active" : "dh-nav-link"}>{item.label}</Link>;
          })}
          <Link href="/contact" className="ml-3 rounded-md bg-[#2f8f46] px-5 py-3 text-sm font-bold text-white hover:bg-[#26763a]">Start a Project</Link>
        </nav>

        <button type="button" onClick={() => setOpen((v) => !v)} className="rounded-md border border-white/30 px-4 py-2 text-sm font-bold lg:hidden" aria-expanded={open} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0b1118] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            {NAV.map((item) => <Link key={item.href} href={item.href} className="rounded-md px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/10">{item.label}</Link>)}
          </div>
        </nav>
      )}
    </header>
  );
}
