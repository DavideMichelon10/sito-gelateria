"use client";

import { useState } from "react";
import { sectionCopy } from "@/lib/constants";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-chocolate md:mb-14 md:text-4xl">
          {sectionCopy.faq.title}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
              >
                <span className="pr-4 text-sm font-medium text-chocolate sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-xl text-pistachio transition-transform ${openIndex === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-sm text-chocolate/80 sm:px-6 sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
