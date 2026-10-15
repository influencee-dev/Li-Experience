import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return <PageTitle title="Gallery" />;
}
