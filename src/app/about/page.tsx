import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageTitle title="About" />;
}
