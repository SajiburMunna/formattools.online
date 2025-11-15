import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const lastUpdated = "2025-01-01";

export const metadata: Metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description:
    "Disclaimer for FormatTools.online. Important information about the use of our free online developer tools and services.",
  keywords: [
    "disclaimer",
    "legal disclaimer",
    "service disclaimer",
    "liability disclaimer",
    "warranty disclaimer",
    "terms disclaimer",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/disclaimer`,
  },
  openGraph: {
    title: `Disclaimer | ${siteConfig.name}`,
    description:
      "Disclaimer for FormatTools.online. Important information about our services.",
    url: `${siteConfig.url}/disclaimer`,
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
      name: "Disclaimer",
      item: `${siteConfig.url}/disclaimer`,
    },
  ],
};

export default function DisclaimerPage() {
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
              <li className="text-gray-900 dark:text-gray-100">Disclaimer</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
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
            Please read this disclaimer carefully before using
            FormatTools.online. By using our services, you acknowledge that you
            have read, understood, and agree to be bound by this disclaimer.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The information and tools provided on FormatTools.online are for
                general informational and utility purposes only. While we strive
                to provide accurate and up-to-date information, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the website or the information, products,
                services, or related graphics contained on the website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. No Warranty</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                FormatTools.online is provided &quot;AS IS&quot; and &quot;AS
                AVAILABLE&quot; without any warranties, expressed or implied. We
                do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  The website will be available at all times or will be
                  uninterrupted
                </li>
                <li>
                  The tools will be error-free or will produce accurate results
                </li>
                <li>
                  The website is free from viruses, malware, or other harmful
                  components
                </li>
                <li>
                  The information provided is accurate, complete, or current
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Tool Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                While we make every effort to ensure the accuracy of our tools,
                we cannot guarantee that the results will always be correct or
                suitable for your specific needs. You should:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Verify results independently before using them in production
                </li>
                <li>Test outputs thoroughly in your specific use case</li>
                <li>Maintain backups of your original data</li>
                <li>Use our tools at your own risk</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                4. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                To the fullest extent permitted by applicable law,
                FormatTools.online and its operators shall not be liable for any
                direct, indirect, incidental, special, consequential, or
                punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of data or information</li>
                <li>Loss of profits or business opportunities</li>
                <li>Errors or inaccuracies in tool outputs</li>
                <li>Interruption of business operations</li>
                <li>
                  Any other damages arising from the use or inability to use our
                  services
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. User Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>You are solely responsible for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  The data you input into our tools and the results you obtain
                </li>
                <li>
                  Verifying the accuracy and suitability of tool outputs for
                  your specific needs
                </li>
                <li>
                  Maintaining backups of your original data before using our
                  tools
                </li>
                <li>
                  Ensuring compliance with all applicable laws and regulations
                </li>
                <li>
                  Any consequences resulting from the use or misuse of our tools
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Third-Party Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Our website may contain links to third-party websites, services,
                or content. We do not endorse, control, or assume responsibility
                for any third-party content, services, or websites. Your
                interactions with third parties are solely between you and the
                third party.
              </p>
              <p>
                We are not responsible for the content, privacy policies, or
                practices of any third-party websites or services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Professional Advice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The information and tools provided on FormatTools.online do not
                constitute professional, legal, financial, or technical advice.
                You should consult with qualified professionals for advice
                specific to your situation.
              </p>
              <p>
                Our tools are designed to assist with common development tasks
                but should not be used as a substitute for professional judgment
                or expertise.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                8. Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of FormatTools.online at any time, with or without notice. We do
                not guarantee that our services will be available at all times
                or that they will be free from errors or interruptions.
              </p>
              <p>
                We are not liable for any loss or damage resulting from the
                unavailability of our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                9. Changes to Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We reserve the right to modify this disclaimer at any time. We
                will notify users of any material changes by posting the updated
                disclaimer on this page and updating the &quot;Last
                Updated&quot; date.
              </p>
              <p>
                Your continued use of FormatTools.online after any changes
                constitutes your acceptance of the updated disclaimer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                10. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                If you have any questions about this disclaimer, please contact
                us:
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
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Links */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Related Policies</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="text-blue-500 hover:underline font-semibold"
            >
              Privacy Policy
            </Link>
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
          </div>
        </div>
      </div>
    </>
  );
}
