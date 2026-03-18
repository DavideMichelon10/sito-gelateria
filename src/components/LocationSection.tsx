import { sectionCopy } from "@/lib/constants";
import { business, schedule } from "@/lib/data";

export default function LocationSection() {
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.5!2d${business.coordinates.lng}!3d${business.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(business.address.full)}!5e0!3m2!1sit!2sit!4v1`;

  return (
    <section id="dove-siamo" className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-chocolate md:text-4xl">
            {sectionCopy.location.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-chocolate/80 sm:text-lg">
            {sectionCopy.location.text}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Map */}
          <div className="aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto md:min-h-[350px]">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gelatomania su Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center gap-5 sm:gap-6">
            <div>
              <h3 className="mb-2 text-base font-semibold text-chocolate sm:text-lg">
                Indirizzo
              </h3>
              <p className="text-sm text-chocolate/80 sm:text-base">
                {business.address.full}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-chocolate sm:text-lg">
                Orari
              </h3>
              <p className="text-sm text-chocolate/80 sm:text-base">
                Tutti i giorni: {schedule[0].open} – {schedule[0].close}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-chocolate sm:text-lg">
                Telefono
              </h3>
              <a
                href={business.phoneLink}
                className="font-semibold text-pistachio hover:underline"
              >
                {business.phone}
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneLink}
                className="rounded-full bg-pistachio px-6 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-105 sm:text-base"
              >
                Chiama
              </a>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-chocolate px-6 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-105 sm:text-base"
              >
                Indicazioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
