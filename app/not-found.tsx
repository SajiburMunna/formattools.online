"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-300 dark:text-gray-700">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-semibold mb-4">Popular Tools</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/tools/json-formatter"
              className="text-blue-500 hover:underline"
            >
              JSON Formatter
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/tools/csv-to-json"
              className="text-blue-500 hover:underline"
            >
              CSV to JSON
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="/tools/html-beautifier"
              className="text-blue-500 hover:underline"
            >
              HTML Beautifier
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
