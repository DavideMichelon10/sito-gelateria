import { sectionCopy } from "@/lib/constants";
import { reviews, business } from "@/lib/data";

export default function ReviewsSection() {
  return (
    <section id="recensioni" className="bg-cream px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
            {sectionCopy.reviews.title}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl text-lemon">
              {"★".repeat(Math.round(business.rating))}
            </span>
            <span className="text-sm text-chocolate/70 sm:text-base">
              {business.rating}/5 · {business.reviewCount} recensioni Google
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="mb-3 text-sm leading-relaxed text-chocolate/80">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs font-semibold text-pistachio">
                — {r.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
