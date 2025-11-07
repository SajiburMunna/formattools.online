import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Shield, Zap, Heart, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Free Developer Tools",
  description:
    "Learn about FormatTools.online - your go-to platform for free online developer tools. JSON formatter, code beautifiers, converters, and more. 100% free, no sign-up required.",
  keywords: [
    "about formattools",
    "developer tools",
    "free online tools",
    "code formatter",
    "json formatter",
    "online converter",
  ],
  openGraph: {
    title: "About FormatTools.online - Free Developer Tools",
    description:
      "Free online tools for developers. Format, convert, and optimize your code instantly.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About FormatTools.online
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Your trusted platform for free, fast, and secure online developer
          tools. No sign-up, no fees, no hassle.
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            At FormatTools.online, we believe that powerful developer tools
            should be accessible to everyone, everywhere, without barriers.
          </p>
          <p>
            We&apos;ve built a comprehensive suite of online tools that help
            developers format, convert, and optimize their code instantly—all
            running directly in your browser for maximum speed and privacy.
          </p>
        </CardContent>
      </Card>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose FormatTools?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All tools run locally in your browser. No server delays, no
                  waiting. Instant results every time.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold">100% Secure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data never leaves your device. Everything is processed
                  locally. Complete privacy guaranteed.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold">Always Free</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No subscriptions, no hidden costs. Professional-grade tools,
                  completely free forever.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center">
                  <Code className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold">Developer-Focused</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built by developers, for developers. Clean UI, powerful
                  features, zero bloat.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold">No Sign-up</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Start using tools immediately. No registration, no email, no
                  personal information required.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold">Open & Accessible</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Works on any device, any browser. Responsive design for
                  desktop, tablet, and mobile.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Available Tools */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Our Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Data & Code Formatters</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• JSON Formatter & Validator</li>
                <li>• HTML Beautifier & Minifier</li>
                <li>• SQL Query Formatter</li>
                <li>• SVG Code Cleaner & Optimizer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Converters & Generators</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• CSV to JSON Converter</li>
                <li>• Color Converter (HEX, RGB, HSL)</li>
                <li>• CSS Gradient Generator</li>
                <li>• Markdown to HTML Previewer</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technology */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">
            Built with Modern Technology
          </CardTitle>
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            FormatTools.online is built using cutting-edge web technologies to
            ensure the best performance and user experience:
          </p>
          <ul className="space-y-2 ml-4">
            <li>
              <strong>Next.js 16</strong> - React framework for production
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe code for reliability
            </li>
            <li>
              <strong>Tailwind CSS</strong> - Modern, responsive design
            </li>
            <li>
              <strong>Monaco Editor</strong> - Professional code editing
              experience
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact */}
      <div className="text-center bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Have suggestions for new tools? Found a bug? We&apos;d love to hear
          from you!
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Reach out to us through our GitHub repository or social media
          channels.
        </p>
      </div>
    </div>
  );
}
