export type NavKey =
  | "story"
  | "vision"
  | "record"
  | "wards"
  | "news"
  | "getInvolved";

export const navRoutes: { key: NavKey; href: string }[] = [
  { key: "story", href: "/story" },
  { key: "vision", href: "/vision" },
  { key: "record", href: "/record" },
  { key: "wards", href: "/wards" },
  { key: "news", href: "/news" },
  { key: "getInvolved", href: "/get-involved" },
];
