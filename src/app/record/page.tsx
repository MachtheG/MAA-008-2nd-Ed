import type { Metadata } from "next";
import { RecordContent } from "./RecordContent";

export const metadata: Metadata = {
  title: "The Record",
  description:
    "A verified record of national and international public service — Parliament, foreign affairs, the embassy in Somalia, and Special Envoy roles across the Horn of Africa.",
};

export default function RecordPage() {
  return <RecordContent />;
}
