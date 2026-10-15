import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/PageTitle";

export const metadata: Metadata = { title: "Room Booking" };

export default function RoomBookingPage() {
  return <PageTitle title="Room Booking" />;
}
