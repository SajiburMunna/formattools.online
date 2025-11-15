import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const lastUpdated = "2025-01-01";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Privacy Policy for FormatTools.online. Learn how we protect your data and privacy. All tools run locally in your browser - your data never leaves your device.",
  keywords: [
    "privacy policy",
    "data privacy",
    "privacy protection",
    "data security",
    "user privacy",
    "GDPR compliance",
    "privacy statement",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "Privacy Policy for FormatTools.online. Your data privacy is our priority.",
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Privacy Policy",
      item: `${siteConfig.url}/privacy`,
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-gray-100">
                Privacy Policy
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <Calendar className="h-4 w-4" />
            <span>
              Last Updated:{" "}
              {new Date(lastUpdated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            At FormatTools.online, we are committed to protecting your privacy.
            This Privacy Policy explains how we handle your data when you use
            our services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                1. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>No Personal Data Collection:</strong> FormatTools.online
                does not collect, store, or transmit any personal information.
                All our tools run entirely in your browser.
              </p>
              <p>
                <strong>Local Processing Only:</strong> All data processing
                happens locally on your device. Your code, files, and data never
                leave your browser and are never sent to our servers.
              </p>
              <p>
                <strong>No Registration Required:</strong> We do not require
                user registration, accounts, or any form of sign-up. You can use
                all tools anonymously.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                2. How We Use Your Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Since we do not collect any personal data, there is no data for
                us to use, share, or sell. All operations are performed locally
                in your browser.
              </p>
              <p>
                We may collect anonymous usage statistics (such as page views)
                through standard web analytics tools, but this does not include
                any personal information or the content you process through our
                tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                3. Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Essential Cookies:</strong> We may use essential cookies
                to maintain basic website functionality, such as remembering
                your preferences (like dark mode).
              </p>
              <p>
                <strong>Analytics:</strong> We may use analytics services to
                understand how visitors use our website. These services use
                cookies to collect anonymous information about page views and
                user interactions.
              </p>
              <p>
                <strong>Third-Party Services:</strong> We may use third-party
                services (such as Google Analytics) that set their own cookies.
                Please refer to our{" "}
                <Link href="/cookies" className="text-blue-500 hover:underline">
                  Cookie Policy
                </Link>{" "}
                for more information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Local Processing:</strong> Since all processing happens
                in your browser, your data is never transmitted over the
                internet, providing the highest level of security.
              </p>
              <p>
                <strong>No Server Storage:</strong> We do not have servers that
                store your data, eliminating the risk of data breaches or
                unauthorized access.
              </p>
              <p>
                <strong>HTTPS Encryption:</strong> Our website uses HTTPS to
                ensure secure communication between your browser and our servers
                for page delivery.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                5. Third-Party Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We may use third-party services for analytics and advertising.
                These services have their own privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong> For website analytics
                  (anonymous usage statistics)
                </li>
                <li>
                  <strong>Advertising Networks:</strong> We may display
                  advertisements through third-party ad networks
                </li>
              </ul>
              <p>
                These services may collect information according to their own
                privacy policies. We encourage you to review their policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Right to Access:</strong> Since we don&apos;t collect
                personal data, there is no data to access.
              </p>
              <p>
                <strong>Right to Deletion:</strong> No personal data is stored,
                so there is nothing to delete.
              </p>
              <p>
                <strong>Right to Opt-Out:</strong> You can disable cookies in
                your browser settings at any time. However, this may affect
                website functionality.
              </p>
              <p>
                <strong>GDPR Compliance:</strong> Our privacy practices comply
                with the General Data Protection Regulation (GDPR) and other
                applicable privacy laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                7. Children&apos;s Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                FormatTools.online is not intended for children under 13 years
                of age. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please
                contact us.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                8. Changes to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last Updated&quot; date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically for
                any changes. Changes to this Privacy Policy are effective when
                they are posted on this page.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Visit our{" "}
                  <Link
                    href="/contact"
                    className="text-blue-500 hover:underline"
                  >
                    Contact page
                  </Link>
                </li>
                <li>Email us through our contact form</li>
                <li>Reach out via our GitHub repository</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Links */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Related Policies</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/terms"
              className="text-blue-500 hover:underline font-semibold"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-blue-500 hover:underline font-semibold"
            >
              Cookie Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-blue-500 hover:underline font-semibold"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
