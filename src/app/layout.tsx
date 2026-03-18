import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { seo } from "@/lib/constants";
import { business, schedule } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.title,
    description: seo.description,
    locale: seo.locale,
    type: "website",
    siteName: seo.siteName,
  },
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: business.name,
    image: [],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.cap,
      addressRegion: business.address.province,
      addressCountry: "IT",
    },
    telephone: business.phone,
    url: typeof window !== "undefined" ? window.location.origin : "",
    priceRange: business.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHoursSpecification: schedule.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.day,
      opens: s.open,
      closes: s.close,
    })),
    servesCuisine: ["Gelato", "Granite", "Crepes"],
    hasMenu: business.orderOnlineUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.className} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
