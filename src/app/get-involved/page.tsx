import type { Metadata } from "next";
import { GetInvolvedContent } from "./GetInvolvedContent";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, host a ward meeting, or support the campaign. This movement belongs to the people of Wajir County.",
};

export default function GetInvolvedPage() {
  return <GetInvolvedContent />;
}
