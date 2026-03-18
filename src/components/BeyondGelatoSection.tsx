import Image from "next/image";
import { sectionCopy } from "@/lib/constants";
import { otherProducts } from "@/lib/data";

const productImages: Record<string, string> = {
  Granite:
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
  Frappè:
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80",
  "Frozen yogurt":
    "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
  Crepes:
    "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80",
  "Torte gelato":
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
};

export default function BeyondGelatoSection() {
  return (
    <section id="oltre-il-gelato" className="bg-cream px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
            {sectionCopy.beyondGelato.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-chocolate/80 sm:text-lg">
            {sectionCopy.beyondGelato.text}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {otherProducts.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={productImages[p.name] ?? productImages["Granite"]}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-chocolate">
                  {p.name}
                </h3>
                <p className="text-sm text-chocolate/70">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
