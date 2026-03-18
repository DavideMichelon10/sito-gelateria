import { business, schedule } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contatti" className="bg-chocolate px-4 pb-20 pt-10 text-white md:pb-12 md:pt-12">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div>
          <h3 className="mb-3 text-lg font-semibold">{business.name}</h3>
          <p className="text-sm text-white/70">{business.address.full}</p>
          <a
            href={business.phoneLink}
            className="mt-2 inline-block text-sm text-white/70 hover:text-white"
          >
            Tel: {business.phone}
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Orari</h3>
          <p className="text-sm text-white/70">
            Tutti i giorni
            <br />
            {schedule[0].open} – {schedule[0].close}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Link utili</h3>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl border-t border-white/20 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {business.name}. Tutti i diritti
        riservati.
      </div>
    </footer>
  );
}
