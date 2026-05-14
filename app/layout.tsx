import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CBRT India TWG — Stakeholder Mind Map",
  description: "Interactive mind map of India Technical Working Group candidate members for CBRT resilience criteria development across 5 sectors. Climate Bonds Initiative USISA Programme.",
  openGraph: {
    title: "CBRT India TWG — Stakeholder Mind Map",
    description: "50 candidate members across 5 sectors — Crop Production, Livestock, Urban Systems, Buildings & Construction, Energy Infrastructure",
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
