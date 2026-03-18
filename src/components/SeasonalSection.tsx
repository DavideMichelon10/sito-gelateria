import Image from "next/image";
import { sectionCopy } from "@/lib/constants";
import { seasonalProducts } from "@/lib/data";

export default function SeasonalSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Text + cards */}
          <div>
            <div className="mb-8 text-center md:text-left">
              <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
                {sectionCopy.seasonal.title}
              </h2>
              <p className="text-base text-chocolate/80 sm:text-lg">
                {sectionCopy.seasonal.text}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-1">
              {seasonalProducts.map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border-2 border-lemon/60 bg-lemon/10 p-4 sm:p-5"
                >
                  <h3 className="mb-1 text-base font-semibold text-chocolate sm:text-lg">
                    {p.name}
                  </h3>
                  <p className="text-sm text-chocolate/70">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg max-md:order-first">
            <Image
              src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80"
              alt="Specialità stagionali"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
