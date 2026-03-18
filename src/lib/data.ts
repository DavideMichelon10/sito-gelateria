// ============================================================
// Dati strutturati – Gelatomania Trento
// Fonte: brief progetto (docs/brief.md)
// ============================================================

// ---------- Contatti e info locale ----------

export const business = {
  name: "Gelatomania",
  category: "Gelateria",
  address: {
    street: "Via Giuseppe Garibaldi, 9",
    cap: "38122",
    city: "Trento",
    province: "TN",
    full: "Via Giuseppe Garibaldi, 9, 38122 Trento TN",
  },
  phone: "0461 220014",
  phoneLink: "tel:+390461220014",
  plusCode: "349C+2V Trento, Provincia autonoma di Trento",
  rating: 4.0,
  reviewCount: 113,
  priceRange: "€€",
  googleMapsUrl: "https://maps.google.com/?q=Gelatomania+Trento+Via+Giuseppe+Garibaldi+9",
  // TODO: sostituire con link reale quando disponibile
  orderOnlineUrl: "#ordina-online",
  coordinates: {
    lat: 46.0679,
    lng: 11.1211,
  },
} as const;

// ---------- Orari ----------

export type DaySchedule = {
  day: string;
  open: string;
  close: string;
};

export const schedule: DaySchedule[] = [
  { day: "Lunedì", open: "11:00", close: "21:30" },
  { day: "Martedì", open: "11:00", close: "21:30" },
  { day: "Mercoledì", open: "11:00", close: "21:30" },
  { day: "Giovedì", open: "11:00", close: "21:30" },
  { day: "Venerdì", open: "11:00", close: "21:30" },
  { day: "Sabato", open: "11:00", close: "21:30" },
  { day: "Domenica", open: "11:00", close: "21:30" },
];

// ---------- Badge esigenze alimentari ----------

export type DietaryBadge = {
  id: string;
  label: string;
  icon: string;
  color: string;
};

export const dietaryBadges: DietaryBadge[] = [
  { id: "vegan", label: "Vegan", icon: "🌱", color: "bg-green-100 text-green-800" },
  { id: "lactose-free", label: "Senza lattosio", icon: "🥛", color: "bg-blue-100 text-blue-800" },
  { id: "gluten-free", label: "Senza glutine", icon: "🌾", color: "bg-amber-100 text-amber-800" },
  { id: "sugar-free", label: "Senza zucchero", icon: "🍬", color: "bg-purple-100 text-purple-800" },
];

// ---------- Gusti gelato ----------

export type Flavor = {
  name: string;
  category: "classico" | "frutta" | "speciale";
  badges?: string[]; // ID dei badge dietetici
};

export const flavors: Flavor[] = [
  // Classici
  { name: "Pistacchio", category: "classico" },
  { name: "Stracciatella", category: "classico" },
  { name: "Fiordilatte", category: "classico" },
  { name: "Nocciola", category: "classico" },
  { name: "Cioccolato fondente", category: "classico" },
  { name: "Tiramisù", category: "classico" },
  { name: "Cocco", category: "classico" },

  // Frutta
  { name: "Limone", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Fragola", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Pompelmo", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Melone", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Mango", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Ananas", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Amarena", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Mirtillo", category: "frutta", badges: ["vegan", "lactose-free"] },
  { name: "Ribes nero", category: "frutta", badges: ["vegan", "lactose-free"] },

  // Speciali
  { name: "Bergamotto", category: "speciale" },
  { name: "Treccia mochena", category: "speciale" },
  { name: "ACE", category: "speciale", badges: ["vegan", "lactose-free"] },
  { name: "Ambrosia", category: "speciale" },
  { name: "Tocino del cielo", category: "speciale" },
];

// ---------- Altri prodotti ----------

export type Product = {
  name: string;
  description: string;
  seasonal?: boolean;
};

export const otherProducts: Product[] = [
  { name: "Granite", description: "Fresche e dissetanti, perfette per l'estate" },
  { name: "Frappè", description: "Classici e nella versione vegana" },
  { name: "Frozen yogurt", description: "Leggero e cremoso" },
  { name: "Crepes", description: "Con Nutella e altri condimenti golosi" },
  { name: "Torte gelato", description: "Per occasioni speciali" },
  { name: "Yogurteria", description: "Yogurt freschi e personalizzabili con tanti topping" },
  { name: "Bibite fresche", description: "Ampia scelta di bevande fresche e dissetanti" },
  { name: "Affogato", description: "Gelato affogato al caffè, un classico irresistibile" },
  { name: "Brioche con gelato", description: "Brioche calda farcita con il gelato che preferisci" },
];

export const seasonalProducts: Product[] = [
  { name: "Panini con würstel e crauti", description: "Specialità invernale", seasonal: true },
  { name: "Goulash nel pane", description: "Per i mesi più freddi", seasonal: true },
  { name: "Specialità trentine", description: "Prodotti tipici del territorio", seasonal: true },
];

// ---------- Recensioni (parafrasate) ----------

export type Review = {
  text: string;
  author: string;
};

export const reviews: Review[] = [
  { text: "Ampia varietà di gusti, anche particolari e difficili da trovare altrove.", author: "Marco R." },
  { text: "Ottime opzioni vegan e senza lattosio, finalmente una gelateria per tutti!", author: "Laura B." },
  { text: "Posizione centralissima, perfetta per una passeggiata in centro.", author: "Giulia M." },
  { text: "Personale disponibile e cordiale, ci hanno consigliato molto bene.", author: "Stefan K." },
  { text: "I gusti frutta sono davvero buoni e rinfrescanti.", author: "Anna T." },
  { text: "Abbiamo scoperto questa gelateria durante una visita a Trento, ottima scelta!", author: "Thomas W." },
  { text: "Gusti particolari che non si trovano facilmente, torneremo sicuramente.", author: "Chiara P." },
  { text: "Perfetto per una pausa fresca passeggiando nel centro storico.", author: "Davide L." },
];

// ---------- FAQ ----------

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Dove si trova Gelatomania?",
    answer: "Ci trovi in Via Giuseppe Garibaldi 9, 38122 Trento, in pieno centro storico a pochi passi da Piazza Duomo.",
  },
  {
    question: "Quali sono gli orari di apertura?",
    answer: "Siamo aperti tutti i giorni dalle 11:00 alle 21:30.",
  },
  {
    question: "Avete opzioni vegan?",
    answer: "Sì, offriamo diversi gusti vegan, tra cui molti gusti alla frutta e frappè vegani.",
  },
  {
    question: "Avete gusti senza lattosio?",
    answer: "Sì, abbiamo una selezione di gusti senza lattosio, in particolare i gusti alla frutta.",
  },
  {
    question: "Avete granite e frappè?",
    answer: "Certamente! Oltre al gelato offriamo granite, frappè (anche vegani), frozen yogurt, crepes e altre specialità.",
  },
  {
    question: "Posso ordinare online?",
    answer: "Sì, è possibile ordinare online. Offriamo anche il servizio di consegna a domicilio.",
  },
  {
    question: "Fate consegna a domicilio?",
    answer: "Sì, effettuiamo consegne a domicilio. Contattaci per maggiori dettagli.",
  },
  {
    question: "Avete gusti particolari oltre ai classici?",
    answer: "Assolutamente sì! Oltre ai classici, proponiamo gusti originali come bergamotto, treccia mochena, ACE, ambrosia e molti altri.",
  },
  {
    question: "Siete aperti tutti i giorni?",
    answer: "Sì, siamo aperti tutti i giorni della settimana, dalle 11:00 alle 21:30.",
  },
];

// ---------- Navigazione ----------

export const navSections = [
  { id: "chi-siamo", label: "Chi siamo" },
  { id: "gusti", label: "I gusti" },
  { id: "dove-siamo", label: "Dove siamo" },
  { id: "contatti", label: "Contatti" },
] as const;
