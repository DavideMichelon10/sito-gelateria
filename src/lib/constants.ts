// ============================================================
// Costanti di progetto – Gelatomania
// ============================================================

// Palette colori (usare anche come classi Tailwind custom se necessario)
export const colors = {
  cream: "#FFF8E7",
  pistachio: "#93C572",
  strawberry: "#FF6B8A",
  lemon: "#FFE066",
  chocolate: "#5C3D2E",
  white: "#FFFFFF",
} as const;

// SEO
export const seo = {
  siteName: "Gelatomania",
  title: "Gelatomania Trento | Gelateria in centro a Trento",
  description:
    "Gelatomania è la gelateria in centro a Trento, in Via Giuseppe Garibaldi 9. Scopri gusti classici e originali, opzioni vegan e senza lattosio, granite, crepes e servizio di ordine online.",
  keywords: [
    "gelateria Trento centro",
    "gelateria Trento",
    "gelato artigianale Trento",
    "gelateria Via Garibaldi Trento",
    "gelateria vicino Duomo Trento",
    "gelato vegan Trento",
    "gelato senza lattosio Trento",
    "granite Trento centro",
    "crepes Trento",
    "consegna gelato Trento",
  ],
  locale: "it_IT",
} as const;

// Testi hero
export const heroContent = {
  title: "Gelato nel cuore di Trento",
  subtitle:
    "Gusti classici, proposte originali e opzioni vegan, senza lattosio e senza glutine, a pochi passi da Piazza Duomo.",
  subtitleAlt:
    "Una pausa fresca e golosa in centro città, tra coni, coppette, granite, crepes e specialità da gustare passeggiando per Trento.",
  cta: {
    flavors: "Scopri i gusti",
    directions: "Come arrivare",
  },
} as const;

// Testi sezioni
export const sectionCopy = {
  about: {
    title: "Chi siamo",
    text: "Gelatomania è la tua gelateria in centro a Trento, in Via Giuseppe Garibaldi, a due passi dalle vie più vive della città. Qui trovi una grande varietà di gusti, dai classici alle proposte più particolari, oltre a opzioni pensate anche per chi cerca alternative vegan o senza lattosio.",
  },
  flavors: {
    title: "I nostri gusti",
    text: "Dal pistacchio alla stracciatella, dal cocco al bergamotto, dai gusti frutta alle specialità più creative: ogni visita è un'occasione per provare qualcosa di nuovo.",
  },
  dietary: {
    title: "Opzioni per tutti",
    text: "Da Gelatomania trovi anche opzioni vegan, gusti senza lattosio, proposte alla frutta e alternative dedicate a esigenze diverse, per una pausa di gusto tutta da scegliere.",
  },
  beyondGelato: {
    title: "Oltre il gelato",
    text: "Non solo gelato: granite, frappè, frozen yogurt, crepes e altre specialità completano un'offerta pensata per ogni stagione.",
  },
  seasonal: {
    title: "Specialità stagionali",
    text: "Durante l'anno, Gelatomania accompagna il ritmo del centro storico con proposte stagionali e idee golose perfette per l'estate e per i periodi più speciali dell'anno.",
  },
  location: {
    title: "Dove siamo",
    text: "Ci trovi in Via Giuseppe Garibaldi 9, Trento, in pieno centro, perfetti per una sosta veloce o una passeggiata con gelato tra le vie della città.",
  },
  faq: {
    title: "Domande frequenti",
  },
  reviews: {
    title: "Cosa dicono di noi",
  },
} as const;
