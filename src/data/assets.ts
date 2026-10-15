/**
 * Riferimenti centralizzati a tutte le immagini del sito.
 *
 * Per sostituire una foto provvisoria:
 *   1. copiare la nuova foto in /public/images/<cartella>/ con lo STESSO nome file
 *      (oppure con un nome nuovo, aggiornando il percorso dell'import qui sotto);
 *   2. aggiornare l'alt text corrispondente.
 * I componenti non vanno toccati: dimensioni e placeholder sfocato sono calcolati
 * automaticamente da Next.js grazie all'import statico.
 *
 * `placeholder: true` indica le foto provvisorie (Unsplash) da sostituire.
 */
import type { StaticImageData } from "next/image";

import logo from "../../public/images/brand/li-experience-logo.svg";
import heroGiardino from "../../public/images/hero/hero-giardino-vista-mare.jpg";
import liliana from "../../public/images/liliana/liliana-del-duca.jpg";
import progettoCasaArco from "../../public/images/territories/progetto-casa-arco.jpg";
import visionCasaAranci from "../../public/images/territories/vision-casa-aranci.jpg";
import chiusuraPanorama from "../../public/images/territories/chiusura-panorama-golfo.jpg";
import missionTavola from "../../public/images/experiences/mission-tavola-vista-mare.jpg";
import borgoSulMare from "../../public/images/experiences/borgo-sul-mare.jpg";
import network02 from "../../public/images/experiences/network-02-patio-persiane-blu.jpg";
import network03 from "../../public/images/experiences/network-03-balcone-ulivi.jpg";
import network04 from "../../public/images/experiences/network-04-vassoio-accoglienza.jpg";

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  placeholder: boolean;
};

export const brandAssets = {
  logo: {
    src: logo as StaticImageData,
    alt: "LI Experience – Hospitality Network",
  },
} as const;

export const images = {
  hero: {
    src: heroGiardino,
    alt: "Giardino con salottino in vimini affacciato sul golfo, tra mare e montagne",
    placeholder: false,
  },
  projectIntro: {
    src: progettoCasaArco,
    alt: "Ingresso ad arco di una casa bianca mediterranea con terrazzo in cotto e un albero di arance",
    placeholder: false,
  },
  founder: {
    src: liliana,
    alt: "Ritratto di Liliana Del Duca, fondatrice di LI Experience Network",
    placeholder: false,
  },
  pillarIdentity: {
    src: borgoSulMare,
    alt: "Case colorate di un borgo ligure sul mare, con fiori gialli in primo piano",
    placeholder: true,
  },
  pillarHospitality: {
    src: network02,
    alt: "Patio con persiane blu e salottino in vimini davanti al soggiorno",
    placeholder: false,
  },
  pillarMethod: {
    src: network03,
    alt: "Balcone affacciato su ulivi e cipressi, con il mare all'orizzonte",
    placeholder: false,
  },
  pillarConnections: {
    src: network04,
    alt: "Vassoio di benvenuto con tazze decorate in un soggiorno luminoso",
    placeholder: false,
  },
  mission: {
    src: missionTavola,
    alt: "Tavola apparecchiata con sedie blu davanti a una portafinestra aperta sul giardino e sul mare",
    placeholder: false,
  },
  vision: {
    src: visionCasaAranci,
    alt: "Casa bianca mediterranea con portico ad arco tra alberi di arance",
    placeholder: false,
  },
  closing: {
    src: chiusuraPanorama,
    alt: "Panorama sul golfo e sulle montagne da un giardino con salottino in vimini",
    placeholder: false,
  },
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
