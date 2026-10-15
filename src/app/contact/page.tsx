import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <PageTitle title="Contact" />;
}
