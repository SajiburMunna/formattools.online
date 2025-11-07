import { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

interface GenerateMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
}

export function generateToolMetadata({
  title,
  description,
  keywords = [],
  path,
  ogImage,
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.creator,
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
  };
}

export function generateJsonLd(tool: {
  name: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `${siteConfig.url}${tool.path}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
