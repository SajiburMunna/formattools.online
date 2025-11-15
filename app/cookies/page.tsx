import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const lastUpdated = "2025-01-01";

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.name}`,
  description:
    "Cookie Policy for FormatTools.online. Learn about how we use cookies and similar technologies on our website.",
  keywords: [
    "cookie policy",
    "cookies",
    "web cookies",
    "cookie usage",
    "tracking cookies",
    "privacy cookies",
    "cookie consent",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/cookies`,
  },
  openGraph: {
    title: `Cookie Policy | ${siteConfig.name}`,
    description:
      "Cookie Policy for FormatTools.online. Learn about our cookie usage.",
    url: `${siteConfig.url}/cookies`,
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
      name: "Cookie Policy",
      item: `${siteConfig.url}/cookies`,
    },
  ],
};

export default function CookiePolicyPage() {
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
                Cookie Policy
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
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
            This Cookie Policy explains how FormatTools.online uses cookies and
            similar technologies to recognize you when you visit our website. It
            explains what these technologies are and why we use them.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and provide information to
                the website owners.
              </p>
              <p>
                Cookies allow a website to recognize your device and store some
                information about your preferences or past actions. This helps
                improve your browsing experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>FormatTools.online uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are
                  necessary for the website to function properly. They enable
                  basic functions like page navigation and access to secure
                  areas.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> These cookies remember
                  your preferences (such as dark mode, language settings) to
                  provide a more personalized experience.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us
                  understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> These cookies are used
                  to deliver advertisements that are relevant to you and your
                  interests.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                3. Types of Cookies We Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary for the operation of our
                  website. Without these cookies, certain features of the
                  website may not be available.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Load balancing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Performance Cookies</h3>
                <p>
                  These cookies collect information about how you use our
                  website, such as which pages you visit most often. This data
                  helps us improve the website&apos;s performance.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                  <li>Google Analytics</li>
                  <li>Page view tracking</li>
                  <li>Error tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Functionality Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make
                  (such as your username, language, or region) and provide
                  enhanced, personalized features.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                  <li>Theme preferences (dark/light mode)</li>
                  <li>Language settings</li>
                  <li>User preferences</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">4. Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics and deliver
                advertisements:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to
                  understand how visitors use our website. Google Analytics uses
                  cookies to collect information anonymously.
                </li>
                <li>
                  <strong>Advertising Networks:</strong> We may use advertising
                  networks that set cookies to deliver relevant advertisements.
                </li>
              </ul>
              <p>
                These third-party cookies are subject to the respective privacy
                policies of these third parties. We do not control these
                cookies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">5. Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                You have the right to decide whether to accept or reject
                cookies. You can exercise your cookie rights by setting your
                preferences in your browser settings.
              </p>
              <p>
                <strong>Browser Settings:</strong> Most web browsers allow you
                to control cookies through their settings preferences. You can
                set your browser to refuse cookies or delete certain cookies.
              </p>
              <p>
                <strong>Opt-Out Links:</strong> You can opt out of certain
                third-party cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Google Analytics Opt-Out
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youronlinechoices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Your Online Choices
                  </a>
                </li>
              </ul>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded mt-4">
                <p className="text-sm">
                  <strong>Note:</strong> Blocking or deleting cookies may impact
                  your experience on our website. Some features may not function
                  properly if cookies are disabled.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">6. Cookie Duration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Session Cookies:</strong> These cookies are temporary
                and are deleted when you close your browser. They are used to
                maintain your session while browsing our website.
              </p>
              <p>
                <strong>Persistent Cookies:</strong> These cookies remain on
                your device for a set period or until you delete them. They help
                us recognize you when you return to our website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                7. Updates to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any changes by posting
                the new Cookie Policy on this page and updating the &quot;Last
                Updated&quot; date.
              </p>
              <p>
                Please review this Cookie Policy periodically to stay informed
                about our use of cookies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us:
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
