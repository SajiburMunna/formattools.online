import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Developer Tools Tips & Guides",
  description:
    "Learn how to use online developer tools effectively. Tips, tutorials, and guides for JSON formatting, code beautification, color conversion, and more.",
  keywords: [
    "developer blog",
    "json formatter tutorial",
    "code formatting tips",
    "web development tools",
    "programming tutorials",
  ],
  openGraph: {
    title: "FormatTools Blog - Developer Tips & Guides",
    description:
      "Tutorials and guides for using online developer tools effectively",
    type: "website",
  },
};

const blogPosts = [
  {
    id: "json-formatter-guide",
    title: "Complete Guide to JSON Formatting and Validation",
    excerpt:
      "Learn everything about JSON formatting, validation, and best practices for working with JSON data in your projects.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    slug: "json-formatter-guide",
  },
  {
    id: "css-gradients-guide",
    title: "Creating Beautiful CSS Gradients: A Complete Guide",
    excerpt:
      "Master the art of CSS gradients. Learn how to create stunning linear and radial gradients for your web projects.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Design",
    slug: "css-gradients-guide",
  },
  {
    id: "color-theory-developers",
    title: "Color Theory for Developers: HEX, RGB, and HSL Explained",
    excerpt:
      "Understanding different color formats and when to use each one. A practical guide for web developers and designers.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Tutorial",
    slug: "color-theory-developers",
  },
  {
    id: "csv-json-conversion",
    title: "CSV to JSON Conversion: Best Practices and Common Pitfalls",
    excerpt:
      "Learn how to convert CSV data to JSON format effectively, handle edge cases, and avoid common mistakes.",
    date: "2025-01-01",
    readTime: "4 min read",
    category: "Data",
    slug: "csv-json-conversion",
  },
  {
    id: "html-formatting-tips",
    title: "HTML Formatting Best Practices for Clean Code",
    excerpt:
      "Discover essential HTML formatting techniques that make your code more readable, maintainable, and SEO-friendly.",
    date: "2024-12-28",
    readTime: "5 min read",
    category: "Web Development",
    slug: "html-formatting-tips",
  },
  {
    id: "svg-optimization",
    title: "SVG Optimization: Reducing File Size Without Losing Quality",
    excerpt:
      "Learn how to optimize SVG files for web use, reduce file size, and improve loading performance.",
    date: "2024-12-25",
    readTime: "6 min read",
    category: "Performance",
    slug: "svg-optimization",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Developer Tools Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Tips, tutorials, and best practices for using online developer tools
          effectively
        </p>
      </div>

      {/* Featured Post */}
      <Card className="mb-12 border-2 border-blue-500">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 text-sm text-blue-500 font-semibold mb-3">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              Featured
            </span>
            <span>{blogPosts[0].category}</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{blogPosts[0].date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blogPosts[0].readTime}</span>
            </div>
          </div>
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all"
          >
            Read Full Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardContent>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <CardHeader>
              <div className="text-sm text-blue-500 font-semibold mb-2">
                {post.category}
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all text-sm"
              >
                Read More
                <ArrowRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories */}
      <div className="mt-12 p-8 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Browse by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Tutorial",
            "Design",
            "Data",
            "Web Development",
            "Performance",
            "Best Practices",
          ].map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category
                .toLowerCase()
                .replace(" ", "-")}`}
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
