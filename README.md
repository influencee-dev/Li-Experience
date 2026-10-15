# LI Experience Network — Sito web

Prima bozza del sito di **LI Experience Network** — *Dove i luoghi diventano esperienze*.

Realizzato con Next.js (App Router), TypeScript, Tailwind CSS 4, Framer Motion, Lucide React,
`next/image` e `next/font`. Nessun CMS né database: testi e immagini sono gestiti da file.

> Stato: **bozza 1**. È completa solo la Home. Le altre pagine esistono e sono raggiungibili,
> ma mostrano solo il titolo.

---

## 1. Installare le dipendenze

Requisiti: **Node.js 18.18 o successivo** (consigliato Node 20 o 22) e npm.

```bash
npm install
```

## 2. Avviare il progetto

| Comando         | Cosa fa                                              |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Server di sviluppo su http://localhost:3000          |
| `npm run build` | Build di produzione                                  |
| `npm run start` | Avvia la build di produzione (dopo `npm run build`)  |
| `npm run lint`  | Controllo del codice con ESLint                      |

## 3. Sostituire le immagini

Tutte le immagini sono in `public/images/`, divise per cartella:

```text
public/images/
  brand/        logo ufficiale (SVG ricavato dal PDF originale, non ridisegnato)
  hero/         immagine della Hero
  liliana/      ritratto della fondatrice
  experiences/  esperienze (mosaico del Network, Mission)
  territories/  territori e paesaggi (Introduzione, Vision, Chiusura)
```

I riferimenti sono centralizzati in **`src/data/assets.ts`**.

- **Metodo più semplice:** sovrascrivere il file con una nuova foto **con lo stesso nome**.
  Non serve toccare il codice: dimensioni e anteprima sfocata vengono ricalcolate alla build.
- **Con un nome diverso:** copiare la foto nella cartella giusta e aggiornare il percorso
  dell'`import` corrispondente in `src/data/assets.ts`.
- Aggiornare sempre anche il testo `alt` in `src/data/assets.ts` e impostare
  `placeholder: false` quando la foto è definitiva.

Formati: JPG o WebP di buona qualità, lato lungo di almeno 2400 px per Hero e Chiusura,
1600 px per le altre. Next.js produce in automatico le versioni ottimizzate (AVIF/WebP).

Le foto provvisorie provengono da Unsplash (licenza Unsplash, uso gratuito): l'elenco è in
[`IMAGE_CREDITS.md`](./IMAGE_CREDITS.md).

## 4. Cambiare i testi

Tutti i testi della Home sono in **`src/data/content.ts`**, divisi per sezione
(`hero`, `projectIntro`, `founder`, `network`, `mission`, `vision`, `values`, `closing`).
Basta modificare le stringhe: i componenti si aggiornano da soli.

- Il menu e le pagine sono in `src/data/navigation.ts`.
- Titolo e descrizione SEO sono in `src/app/layout.tsx` (`metadata`).
- **Da completare:** nella sezione Liliana è presente il segnaposto **"X anni"**.

Colori e font sono definiti come design token in `src/app/globals.css` (blocco `@theme`)
e si usano come classi Tailwind (`text-magenta`, `bg-deep`, `bg-sky-soft`, `font-serif`…).

## 5. Collegare GitHub

Il repository Git locale è già inizializzato. Per pubblicarlo:

1. Creare un repository **vuoto** su GitHub (senza README né `.gitignore`).
2. Collegarlo e inviare il codice:

```bash
git remote add origin https://github.com/<account>/<nome-repo>.git
git branch -M main
git push -u origin main
```

## 6. Deploy su Vercel

1. Accedere a [vercel.com](https://vercel.com) e scegliere **Add New → Project**.
2. Importare il repository GitHub.
3. Vercel riconosce Next.js in automatico: lasciare le impostazioni predefinite
   (Build command `next build`, nessuna variabile d'ambiente richiesta).
4. **Deploy**. Ogni push su `main` aggiornerà la produzione; ogni altro branch
   genererà un'anteprima.

Il dominio personalizzato si collega da *Project → Settings → Domains*.

---

## Struttura del progetto

```text
src/
  app/
    layout.tsx            layout comune, font, metadata
    page.tsx              Home
    globals.css           design token (palette, font) e stili base
    icon.png              favicon ricavata dal monogramma del logo
    about/ room-booking/ gallery/ blog/ blog/blog-standard/ contact/
  components/
    layout/               Header, MobileMenu, Footer
    home/                 sezioni della Home
    ui/                   Button, Eyebrow, Logo, Reveal, Ornaments, PageTitle, CurrentYear
  data/
    content.ts            testi della Home
    assets.ts             riferimenti alle immagini
    navigation.ts         menu e pagine
  lib/
    cn.ts                 utility per le classi
```

## Route

| Pagina        | Route                 |
| ------------- | --------------------- |
| Home          | `/`                   |
| About         | `/about`              |
| Room Booking  | `/room-booking`       |
| Gallery       | `/gallery`            |
| Blog          | `/blog`               |
| Blog Standard | `/blog/blog-standard` |
| Contact       | `/contact`            |

## Accessibilità e animazioni

- Un solo `h1` per pagina, sezioni con `aria-labelledby`, link "Vai al contenuto".
- Menu mobile con `aria-expanded`, chiusura con Esc, focus trap e chiusura automatica alla selezione.
- Animazioni leggere (fade-in, parallax lieve nella Hero) disattivate con `prefers-reduced-motion`.
