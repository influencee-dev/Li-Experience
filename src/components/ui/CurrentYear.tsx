"use client";

import { useEffect, useState } from "react";

/** Anno corrente, aggiornato anche lato client (la pagina è statica). */
export function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
