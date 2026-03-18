import { sectionCopy } from "@/lib/constants";
import { dietaryBadges } from "@/lib/data";

const badgeColors: Record<string, { bg: string; border: string }> = {
  vegan: { bg: "bg-green-50", border: "border-green-300" },
  "lactose-free": { bg: "bg-blue-50", border: "border-blue-300" },
  "gluten-free": { bg: "bg-amber-50", border: "border-amber-300" },
  "sugar-free": { bg: "bg-purple-50", border: "border-purple-300" },
};

export default function DietarySection() {
  return (
    <section id="opzioni-speciali" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
            {sectionCopy.dietary.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-chocolate/80 sm:text-lg">
            {sectionCopy.dietary.text}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {dietaryBadges.map((badge) => {
            const colors = badgeColors[badge.id] ?? {
              bg: "bg-gray-50",
              border: "border-gray-300",
            };
            return (
              <div
                key={badge.id}
                className={`flex flex-col items-center rounded-2xl border-2 ${colors.border} ${colors.bg} p-5 text-center sm:p-6`}
              >
                <span className="mb-3 text-3xl sm:text-4xl">{badge.icon}</span>
                <span className="text-base font-semibold text-chocolate sm:text-lg">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
