import type { Metadata } from "next";
import "./globals.css";
import { sectors, totalMembers } from "./data/stakeholders";

const sectorNames = sectors.map((s) => s.label.replace("\n", " ")).join(", ");

export const metadata: Metadata = {
  title: "CBRT India TWG — Stakeholder Mind Map",
  description: `Interactive mind map of India Technical Working Group candidate members for CBRT resilience criteria development across ${sectors.length} sectors. Climate Bonds Initiative USISA Programme.`,
  openGraph: {
    title: "CBRT India TWG — Stakeholder Mind Map",
    description: `${totalMembers} candidate members across ${sectors.length} sectors — ${sectorNames}`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ height: '100%', margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
