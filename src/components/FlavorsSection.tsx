import Image from "next/image";
import { sectionCopy } from "@/lib/constants";
import { flavors, dietaryBadges } from "@/lib/data";

const categoryLabels: Record<string, string> = {
  classico: "Classici",
  frutta: "Frutta",
  speciale: "Speciali",
};

const categoryEmoji: Record<string, string> = {
  classico: "🍦",
  frutta: "🍓",
  speciale: "✨",
};

export default function FlavorsSection() {
  const categories = ["classico", "frutta", "speciale"] as const;

  return (
    <section id="gusti" className="bg-cream px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
            {sectionCopy.flavors.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-chocolate/80 sm:text-lg">
            {sectionCopy.flavors.text}
          </p>
        </div>

        {/* Decorative image */}
        <div className="relative mx-auto mb-10 aspect-[21/9] max-w-3xl overflow-hidden rounded-2xl shadow-lg md:mb-14">
          <Image
            src="https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=1200&q=80"
            alt="Varietà di gusti gelato"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-8 md:mb-10">
            <h3 className="mb-4 text-lg font-semibold text-chocolate sm:text-xl">
              {categoryEmoji[cat]} {categoryLabels[cat]}
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
              {flavors
                .filter((f) => f.category === cat)
                .map((f) => (
                  <div
                    key={f.name}
                    className="rounded-xl bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4"
                  >
                    <span className="text-sm font-medium text-chocolate sm:text-base">
                      {f.name}
                    </span>
                    {f.badges && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {f.badges.map((bId) => {
                          const badge = dietaryBadges.find((b) => b.id === bId);
                          return badge ? (
                            <span
                              key={bId}
                              className="rounded-full px-2 py-0.5 text-xs"
                              style={{
                                background:
                                  bId === "vegan"
                                    ? "#dcfce7"
                                    : bId === "lactose-free"
                                      ? "#dbeafe"
                                      : bId === "gluten-free"
                                        ? "#fef3c7"
                                        : "#f3e8ff",
                              }}
                              title={badge.label}
                            >
                              {badge.icon}
                            </span>
                          ) : null;
                        })}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
