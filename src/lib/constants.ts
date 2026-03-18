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
  title: "Gelatomania Trento | Gelateria artigianale in centro a Trento",
  description:
    "Gelatomania è la gelateria artigianale in centro a Trento, in Via Giuseppe Garibaldi 9. Gusti fatti ogni giorno, opzioni vegan e senza lattosio, granite, crepes e molto altro. A due passi dal Duomo.",
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
  title: "Il gelato fatto ogni giorno a Trento",
  subtitle:
    "Ingredienti freschi, gusti autentici e opzioni per tutti. A due passi dal Duomo.",
  cta: {
    flavors: "Guarda i gusti di oggi",
    directions: "Vieni a trovarci",
  },
} as const;

// Testi sezioni
export const sectionCopy = {
  about: {
    title: "Fatto a mano, ogni mattina",
    text: "Da Gelatomania il gelato nasce ogni giorno nel nostro laboratorio, con ingredienti freschi e tanta passione. Siamo in Via Giuseppe Garibaldi, nel cuore di Trento, a due passi dalle vie più vive della città. Qui trovi gusti classici, proposte creative e opzioni per chi cerca alternative vegan o senza lattosio.",
  },
  flavors: {
    title: "I gusti di oggi",
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
    title: "Vieni a trovarci",
    text: "Ci trovi in Via Giuseppe Garibaldi 9, Trento, in pieno centro. Perfetti per una sosta veloce o una passeggiata con gelato tra le vie della città.",
  },
  faq: {
    title: "Domande frequenti",
  },
  reviews: {
    title: "Cosa dicono di noi",
  },
} as const;
