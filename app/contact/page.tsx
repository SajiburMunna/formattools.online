import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/seo-config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Mail,
  MessageSquare,
  Github,
  HelpCircle,
  Bug,
  Lightbulb,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Contact FormatTools.online. Get in touch for support, feature requests, bug reports, or general inquiries. We'd love to hear from you!",
  keywords: [
    "contact formattools",
    "support",
    "customer service",
    "help",
    "feedback",
    "bug report",
    "feature request",
    "contact developer tools",
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Contact FormatTools.online. Get in touch for support, feedback, or inquiries.",
    url: `${siteConfig.url}/contact`,
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
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact FormatTools.online",
  description: "Contact page for FormatTools.online",
  url: `${siteConfig.url}/contact`,
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <nav className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 dark:text-gray-100">Contact</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question, suggestion, or found a bug? We&apos;d love to hear
            from you! Get in touch with the FormatTools.online team.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                For general inquiries, support questions, or feedback, please
                reach out via email.
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-mono text-sm">support@formattools.online</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We typically respond within 24-48 hours.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Report bugs, request features, or contribute to our open-source
                projects on GitHub.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="font-mono text-sm">github.com/formattools</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Issues and pull requests are welcome!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Reasons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">How Can We Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
                <HelpCircle className="h-6 w-6 text-blue-500 mb-2" />
                <h3 className="font-semibold mb-2">General Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Questions about using our tools, troubleshooting, or general
                  inquiries.
                </p>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
                <Bug className="h-6 w-6 text-red-500 mb-2" />
                <h3 className="font-semibold mb-2">Bug Reports</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Found a bug? Let us know! Include steps to reproduce and
                  browser information.
                </p>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
                <Lightbulb className="h-6 w-6 text-yellow-500 mb-2" />
                <h3 className="font-semibold mb-2">Feature Requests</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Have an idea for a new tool or feature? We&apos;d love to hear
                  it!
                </p>
              </div>

              <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 transition-colors">
                <MessageSquare className="h-6 w-6 text-green-500 mb-2" />
                <h3 className="font-semibold mb-2">Feedback</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share your thoughts, suggestions, or experiences using our
                  tools.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What to Include</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              To help us assist you better, please include the following
              information when contacting us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>For Bug Reports:</strong> Steps to reproduce, expected
                behavior, actual behavior, browser/OS information, and any error
                messages
              </li>
              <li>
                <strong>For Feature Requests:</strong> Description of the
                feature, use case, and why it would be helpful
              </li>
              <li>
                <strong>For Support:</strong> Description of the issue, what
                you&apos;ve tried, and any relevant screenshots or examples
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Link */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Before You Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>You might find the answer to your question in our resources:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <Link href="/blog" className="text-blue-500 hover:underline">
                  Blog & Tutorials
                </Link>{" "}
                - Comprehensive guides on using our tools
              </li>
              <li>
                <Link href="/api" className="text-blue-500 hover:underline">
                  API Documentation
                </Link>{" "}
                - Integration guides and examples
              </li>
              <li>
                <Link href="/about" className="text-blue-500 hover:underline">
                  About Page
                </Link>{" "}
                - Learn more about our tools and services
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Response Times</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <strong>General Inquiries:</strong> 24-48 hours
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <strong>Bug Reports:</strong> 48-72 hours (we prioritize
                  critical bugs)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <strong>Feature Requests:</strong> We review all requests and
                  respond within 1 week
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              For urgent issues, please create a GitHub issue with the
              &quot;urgent&quot; label.
            </p>
          </CardContent>
        </Card>

        {/* Community */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Join Our Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Connect with other developers and stay updated on new features:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/formattools"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://twitter.com/formattools"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Twitter
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Thank You */}
        <div className="text-center p-8 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4 fill-red-500" />
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Your feedback helps us improve FormatTools.online. We appreciate you
            taking the time to reach out!
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" /> for
            developers worldwide
          </p>
        </div>
      </div>
    </>
  );
}
