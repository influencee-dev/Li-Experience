import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return <PageTitle title="Blog" />;
}
