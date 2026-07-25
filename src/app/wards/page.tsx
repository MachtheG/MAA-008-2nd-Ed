import type { Metadata } from "next";
import { WardsContent } from "./WardsContent";

export const metadata: Metadata = {
  title: "Wajir County",
  description:
    "Explore Wajir County's six constituencies and the campaign's local focus — an interactive map traced from the county constituency map, with population and voter numbers.",
};

export default function WardsPage() {
  return <WardsContent />;
}
