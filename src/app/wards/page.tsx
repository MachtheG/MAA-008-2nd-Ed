import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { WajirMap } from "@/components/wards/WajirMap";

export const metadata: Metadata = {
  title: "Wajir County",
  description:
    "Explore Wajir County's six constituencies and the campaign's local focus — an interactive schematic map, pending official boundary and ward data.",
};

export default function WardsPage() {
  return (
    <>
      <PageHero
        kicker="Wajir County"
        title="Six constituencies. One county. A plan for each."
        intro="Wajir is made up of six constituencies and thirty wards. Select an area to see the campaign's local focus — and tell us what matters most where you live."
      />

      <section className="bg-sand-50 py-14 sm:py-20">
        <Container width="wide">
          <WajirMap />
        </Container>
      </section>
    </>
  );
}
