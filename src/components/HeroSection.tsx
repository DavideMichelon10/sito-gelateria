import Image from "next/image";
import { heroContent } from "@/lib/constants";
import { business, schedule } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=1920&q=80"
        alt="Gelato artigianale Gelatomania"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-24 sm:px-8">
        <div className="max-w-2xl">
          {/* Badge artigianale */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              Gelateria artigianale dal cuore di Trento
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.3)]">
            {heroContent.title}
          </h1>

          <p className="mb-10 max-w-lg text-lg text-white/90 sm:text-xl md:text-2xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.2)]">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#gusti"
              className="rounded-full bg-pistachio px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-transform hover:scale-105"
            >
              {heroContent.cta.flavors}
            </a>
            <a
              href="#dove-siamo"
              className="rounded-full bg-white/20 px-8 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              {heroContent.cta.directions}
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 z-10 w-full bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-4 py-3 text-sm text-white/90 sm:gap-8 sm:py-4 sm:text-base">
          <span className="flex items-center gap-1.5">
            <span className="text-lemon">{"★".repeat(Math.round(business.rating))}</span>
            <span>{business.rating} su Google ({business.reviewCount}+ recensioni)</span>
          </span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" />
          <span>Aperto tutti i giorni {schedule[0].open}–{schedule[0].close}</span>
          <span className="hidden h-4 w-px bg-white/30 sm:block" />
          <span>Anche vegan e senza lattosio</span>
        </div>
      </div>
    </section>
  );
}
