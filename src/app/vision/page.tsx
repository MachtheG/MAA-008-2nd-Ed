import type { Metadata } from "next";
import { VisionContent } from "./VisionContent";

export const metadata: Metadata = {
  title: "Vision for Wajir",
  description:
    "A draft framework of priorities for Wajir County — water, livestock, health, education, roads, and peace — for the campaign to review and approve.",
};

export default function VisionPage() {
  return <VisionContent />;
}
