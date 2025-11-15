import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const lastUpdated = "2025-01-01";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description:
    "Terms of Service for FormatTools.online. Read our terms and conditions for using our free online developer tools and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "service terms",
    "legal terms",
    "terms of use",
    "user terms",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      "Terms of Service for FormatTools.online. Read our terms and conditions.",
    url: `${siteConfig.url}/terms`,
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
      name: "Terms of Service",
      item: `${siteConfig.url}/terms`,
    },
  ],
};

export default function TermsOfServicePage() {
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
                Terms of Service
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
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
            Please read these Terms of Service carefully before using
            FormatTools.online. By accessing or using our services, you agree to
            be bound by these terms.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                By accessing and using FormatTools.online, you accept and agree
                to be bound by the terms and provision of this agreement. If you
                do not agree to abide by the above, please do not use this
                service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Free Use:</strong> FormatTools.online provides free
                access to all tools and services. You may use our tools for
                personal, commercial, or educational purposes.
              </p>
              <p>
                <strong>No Warranty:</strong> Our tools are provided
                &quot;as-is&quot; without any warranties, expressed or implied.
                We do not guarantee that our tools will be error-free or
                uninterrupted.
              </p>
              <p>
                <strong>Prohibited Uses:</strong> You may not use our services
                to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services for illegal activities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                3. User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Data Responsibility:</strong> You are solely responsible
                for the data you process through our tools. We do not store,
                monitor, or have access to your data.
              </p>
              <p>
                <strong>Backup Your Work:</strong> While our tools are designed
                to be reliable, you should always maintain backups of your
                important data.
              </p>
              <p>
                <strong>Compliance:</strong> You are responsible for ensuring
                that your use of our tools complies with all applicable laws and
                regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                4. Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Our Content:</strong> All content, features, and
                functionality of FormatTools.online, including but not limited
                to text, graphics, logos, and software, are the property of
                FormatTools.online and are protected by copyright, trademark,
                and other intellectual property laws.
              </p>
              <p>
                <strong>Your Content:</strong> You retain all rights to the data
                and content you process through our tools. We do not claim
                ownership of any data you input into our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                5. Disclaimer of Warranties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                FormatTools.online is provided on an &quot;AS IS&quot; and
                &quot;AS AVAILABLE&quot; basis. We make no representations or
                warranties of any kind, express or implied, including but not
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The accuracy, reliability, or completeness of our tools</li>
                <li>
                  That our services will be uninterrupted, secure, or error-free
                </li>
                <li>
                  That defects will be corrected or that our services are free
                  of viruses or other harmful components
                </li>
              </ul>
              <p>
                Please refer to our{" "}
                <Link
                  href="/disclaimer"
                  className="text-blue-500 hover:underline"
                >
                  Disclaimer
                </Link>{" "}
                for more information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                6. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                To the fullest extent permitted by law, FormatTools.online shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses resulting
                from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use or inability to use our services</li>
                <li>Any errors or omissions in our tools</li>
                <li>Any unauthorized access to or use of your data</li>
                <li>Any bugs, viruses, or other harmful components</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">7. Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                You agree to indemnify, defend, and hold harmless
                FormatTools.online and its operators from any claims, damages,
                losses, liabilities, and expenses (including legal fees) arising
                out of or relating to your use of our services or violation of
                these Terms of Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                8. Service Modifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of FormatTools.online at any time, with or without notice. We
                may also impose limits on certain features or restrict access to
                parts of our services without notice or liability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">9. Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Our website may contain links to third-party websites or
                services that are not owned or controlled by FormatTools.online.
                We have no control over, and assume no responsibility for, the
                content, privacy policies, or practices of any third-party
                websites or services.
              </p>
              <p>
                You acknowledge and agree that FormatTools.online shall not be
                responsible or liable for any damage or loss caused by or in
                connection with the use of any third-party content, goods, or
                services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of any material changes by posting
                the new Terms of Service on this page and updating the
                &quot;Last Updated&quot; date.
              </p>
              <p>
                Your continued use of FormatTools.online after any changes
                constitutes your acceptance of the new Terms of Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with applicable laws, without regard to its conflict
                of law provisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                12. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                If you have any questions about these Terms of Service, please
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
