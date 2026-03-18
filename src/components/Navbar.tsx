"use client";

import { useState } from "react";
import Image from "next/image";
import { navSections } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-chocolate/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Gelatomania"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden gap-6 md:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/10 bg-chocolate px-4 pb-4 md:hidden">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
