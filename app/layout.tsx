import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const siteUrl = "https://www.michaeljcardillo.com";

export const metadata: Metadata = {
  title: "Michael Cardillo - Software Engineer",
  description:
    "Portfolio of Michael Cardillo, a Senior Software Engineer based in the Washington, D.C. area.",
  icons: {
    icon: "/images/favicon.png",
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Michael Cardillo - Software Engineer",
    description:
      "Portfolio of Michael Cardillo, a Senior Software Engineer based in the Washington, D.C. area.",
    url: siteUrl,
    siteName: "Michael Cardillo",
    type: "website",
    images: [
      {
        url: "/images/halfdome.jpg",
        width: 1600,
        height: 1200,
        alt: "Half Dome, Yosemite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Cardillo - Software Engineer",
    description:
      "Portfolio of Michael Cardillo, a Senior Software Engineer based in the Washington, D.C. area.",
    images: ["/images/halfdome.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Michael Cardillo",
    jobTitle: "Senior Software Engineer",
    url: siteUrl,
    sameAs: [
      "https://www.linkedin.com/in/mcardillo55",
      "https://github.com/mcardillo55",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington",
      addressRegion: "DC",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
