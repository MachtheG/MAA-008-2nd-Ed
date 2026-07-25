import type { Metadata } from "next";
import { StoryContent } from "./StoryContent";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "From a Wajir childhood to Parliament, the embassy in Mogadishu and the Horn of Africa's peace and refugee negotiations — the story of Mohamed Abdi Affey.",
};

export default function StoryPage() {
  return <StoryContent />;
}
