import { business } from "@/lib/data";

export default function MobileCTA() {
  return (
    <div className="sticky bottom-0 z-50 w-full border-t border-chocolate/10 bg-white px-2 py-2 pb-[env(safe-area-inset-bottom,8px)] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={business.phoneLink}
          className="flex items-center justify-center gap-1 rounded-full bg-pistachio py-2.5 text-sm font-semibold text-white"
        >
          Chiama
        </a>
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 rounded-full bg-chocolate py-2.5 text-sm font-semibold text-white"
        >
          Mappa
        </a>
      </div>
    </div>
  );
}
