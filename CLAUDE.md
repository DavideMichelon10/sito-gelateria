# Gelatomania – Sito Web

## Stack
- **Framework**: Next.js 16 (App Router) con `src/` directory
- **Linguaggio**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Import alias**: `@/*` → `./src/*`

## Comandi
- `npm run dev` – dev server
- `npm run build` – build produzione
- `npm run lint` – ESLint

## Struttura progetto
```
src/
  app/
    layout.tsx        # Root layout con metadata SEO
    page.tsx          # Homepage (one-page)
    globals.css       # Stili globali + Tailwind
  components/         # Componenti React riutilizzabili
  lib/
    data.ts           # Dati strutturati (gusti, orari, contatti, recensioni)
    constants.ts      # Costanti (colori, link, configurazioni)
```

## Convenzioni
- Componenti: PascalCase, un file per componente in `src/components/`
- Nomi file componenti: PascalCase (es. `HeroSection.tsx`)
- Tutto il testo del sito è in **italiano**
- Mobile-first: progettare prima per mobile, poi desktop
- Usare `next/image` per tutte le immagini
- Usare `next/link` per link interni
- I dati statici vanno in `src/lib/data.ts`, non hardcoded nei componenti

## Design
- **Palette**: crema (#FFF8E7), verde pistacchio (#93C572), rosa fragola (#FF6B8A), giallo limone (#FFE066), marrone cioccolato (#5C3D2E), bianco (#FFFFFF)
- **Stile**: moderno, pulito, luminoso, fresco
- **Font**: system font stack o Google Fonts leggero

## SEO
- Meta title: "Gelatomania Trento | Gelateria in centro a Trento"
- Meta description nel brief (`docs/brief.md`)
- Structured data JSON-LD per LocalBusiness

## Riferimenti
- **Brief completo**: `docs/brief.md`
- **Dati strutturati**: `src/lib/data.ts`
- **Copy testi**: inclusi nel brief sezione 9

## Note importanti
- NON fare claim aggressivi su prezzo, porzioni o qualità assoluta
- Puntare su: varietà, posizione centrale, comodità, gusto, atmosfera
- Badge visivi per: Vegan, Senza lattosio, Senza glutine, Senza zucchero
- Le immagini sono placeholder finché non arrivano le foto ufficiali
