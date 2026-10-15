import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "Blog Standard" };

export default function BlogStandardPage() {
  return <PageTitle title="Blog Standard" />;
}
