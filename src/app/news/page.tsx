import type { Metadata } from "next";
import { NewsContent } from "./NewsContent";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "The latest from the campaign — statements, coverage, rallies, town-halls and community meetings across Wajir County.",
};

export default function NewsPage() {
  return <NewsContent />;
}
