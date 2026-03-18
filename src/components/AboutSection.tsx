import Image from "next/image";
import { sectionCopy } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&q=80"
              alt="Preparazione del gelato artigianale"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="mb-6 text-3xl font-bold text-chocolate md:text-4xl">
              {sectionCopy.about.title}
            </h2>
            <p className="text-base leading-relaxed text-chocolate/80 sm:text-lg">
              {sectionCopy.about.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
