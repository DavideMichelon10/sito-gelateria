import Image from "next/image";
import { heroContent } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=1920&q=80"
        alt="Gelato artigianale"
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h1 className="mb-8 text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.4)]">
          {heroContent.title}
        </h1>
        <p className="mx-auto mb-4 max-w-xl text-lg font-medium text-white/95 sm:text-xl md:text-2xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.3)]">
          {heroContent.subtitle}
        </p>
        <p className="mx-auto mb-12 max-w-xl text-sm text-white/75 sm:text-base md:text-lg">
          {heroContent.subtitleAlt}
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href="#gusti"
            className="w-full rounded-full bg-pistachio px-8 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
          >
            {heroContent.cta.flavors}
          </a>
          <a
            href="#dove-siamo"
            className="w-full rounded-full bg-white/20 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:w-auto"
          >
            {heroContent.cta.directions}
          </a>
        </div>
      </div>
    </section>
  );
}
