import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: site.keywords,
  authors: [{ name: site.legalEntity, url: site.url }],
  creator: site.legalEntity,
  publisher: site.legalEntity,
  category: "education",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/images/mascot-hello.webp", type: "image/webp" },
    ],
    apple: "/images/mascot-hello.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#EEF4F8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalEntity,
  legalName: site.legalEntity,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  email: site.supportEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Blagnac",
    postalCode: "31700",
    addressCountry: "FR",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: site.supportEmail,
      contactType: "customer support",
      availableLanguage: ["French"],
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  inLanguage: site.language,
  publisher: {
    "@type": "Organization",
    name: site.legalEntity,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="ld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
