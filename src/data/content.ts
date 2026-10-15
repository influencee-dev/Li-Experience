/**
 * Testi della Homepage.
 *
 * Tutti i contenuti editoriali sono centralizzati qui: per modificare un testo
 * basta intervenire su questo file, senza toccare i componenti.
 *
 * NOTA: "X anni" nella sezione Liliana è un dato provvisorio da aggiornare.
 */

export const brand = {
  name: "LI Experience Network",
  founder: "Liliana Del Duca",
  payoff: "Dove i luoghi diventano esperienze",
  payoffFull: "Li Experience Network… Dove i luoghi diventano esperienze",
} as const;

/** Ancore delle sezioni della Home (usate da CTA e link interni). */
export const anchors = {
  project: "progetto",
  founder: "liliana",
  network: "network",
  mission: "mission",
  vision: "vision",
  values: "valori",
} as const;

export const hero = {
  payoff: {
    lead: "Li Experience Network…",
    text: "Dove i luoghi diventano esperienze",
  },
  title: "Trasformiamo territori in esperienze autentiche",
  subtitle: "Un nuovo modo di vivere, raccontare e condividere i luoghi",
  ctas: [
    { label: "Scopri il Network", href: `#${anchors.network}`, variant: "primary" },
    { label: "Conosci Liliana", href: `#${anchors.founder}`, variant: "ghost" },
  ],
} as const;

export const projectIntro = {
  eyebrow: "Il progetto",
  title: "Li Experience Network",
  paragraphs: [
    "Li Experience Network nasce dall’esigenza di ripensare il turismo come esperienza viva, relazionale e territoriale, e non come semplice offerta di servizi.",
    "Il progetto prende forma dall’esperienza diretta sul campo di Liliana nel settore dell’ospitalità e dalla consapevolezza che molte strutture faticano a distinguersi, a comunicare la propria identità e a costruire valore duraturo nel tempo.",
  ],
} as const;

export const founder = {
  eyebrow: "La fondatrice",
  title: "Liliana",
  subtitle: "Fondatrice di Li Experience Network e del metodo Turismo 4.0®",
  paragraphs: [
    "Liliana è una consulente strategica e imprenditrice nel settore dell’ospitalità, del turismo esperienziale e dei progetti territoriali ad alto valore umano.",
    "Da oltre X anni lavora a fianco di strutture ricettive, operatori turistici e realtà locali per trasformare luoghi e attività in esperienze autentiche, sostenibili e riconoscibili sul mercato.",
    "È ideatrice del metodo Turismo 4.0 un approccio che integra ascolto del territorio, identità del luogo, strategia commerciale e relazione con l’ospite, superando il modello standardizzato dell’ospitalità tradizionale.",
    "Con Li Experience Network ha dato vita a una rete in franchising che unisce strutture, professionisti ed esperienze locali sotto un unico brand, con l’obiettivo di valorizzare i territori, aumentare la redditività e creare modelli replicabili ma non omologati.",
  ],
  signature: "Liliana Del Duca",
} as const;

export const network = {
  eyebrow: "Il Network",
  title: "Un Network che valorizza le identità",
  intro: "Li Experience Network è una rete in franchising che:",
  pillars: [
    { text: "valorizza l’identità autentica dei luoghi", image: "pillarIdentity" },
    { text: "integra ospitalità, esperienze, benessere e cultura locale", image: "pillarHospitality" },
    { text: "supporta le strutture con un metodo chiaro, strumenti operativi e visione strategica", image: "pillarMethod" },
    { text: "crea connessioni tra operatori, territori e viaggiatori consapevoli", image: "pillarConnections" },
  ],
  closing:
    "Ogni affiliato entra in un sistema strutturato ma flessibile, capace di adattarsi al territorio e di trasformare l’offerta turistica in un’esperienza riconoscibile e memorabile.",
} as const;

export const mission = {
  eyebrow: "Li Experience Network",
  title: "MISSION",
  paragraphs: [
    "La missione di Li Experience Network è supportare strutture e operatori turistici nella creazione di esperienze autentiche e riconoscibili, migliorando il posizionamento, la redditività e la relazione con il cliente finale.",
    "Attraverso un modello in franchising flessibile, il Network offre linee guida, strumenti e affiancamento strategico, lasciando autonomia gestionale ma garantendo coerenza di brand e qualità dell’esperienza.",
  ],
} as const;

export const vision = {
  eyebrow: "Li Experience Network",
  title: "VISION",
  paragraphs: [
    "Li Experience Network mira a diventare un punto di riferimento nel turismo esperienziale, creando una rete di strutture e territori capaci di competere non sul prezzo, ma sul valore.",
    "La visione è costruire un modello replicabile, scalabile e adattabile ai diversi contesti territoriali, in grado di generare benefici economici, identitari e relazionali per affiliati, territori e viaggiatori.",
  ],
} as const;

export const values = {
  eyebrow: "Li Experience Network",
  title: "I VALORI DEL NETWORK",
  items: [
    { title: "Autenticità", text: "Ogni affiliato valorizza il proprio territorio senza standardizzazioni forzate." },
    { title: "Metodo", text: "Un sistema strutturato che guida le scelte strategiche e operative." },
    { title: "Rete", text: "Condivisione di know-how, visibilità e opportunità commerciali." },
    { title: "Sostenibilità", text: "Crescita economica equilibrata e responsabile." },
    { title: "Identità", text: "Un brand comune che rafforza, non annulla, le singole realtà." },
  ],
} as const;

export const closing = {
  lead: "Li Experience Network…",
  payoff: "Dove i luoghi diventano esperienze",
  cta: { label: "Scopri il Network", href: `#${anchors.project}` },
} as const;
