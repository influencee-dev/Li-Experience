import { Wave } from "./Ornaments";

/**
 * Intestazione delle pagine secondarie: per ora mostra solo il titolo.
 * I contenuti verranno definiti in una fase successiva.
 */
export function PageTitle({ title }: { title: string }) {
  return (
    <section className="flex min-h-[70svh] items-center justify-center bg-ivory px-5 pb-20 pt-40 text-center sm:px-8">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-5xl font-medium leading-tight text-deep sm:text-7xl">{title}</h1>
        <Wave className="mt-6 text-sky" />
      </div>
    </section>
  );
}
