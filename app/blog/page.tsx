import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

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
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-100 dark:border-blue-900/50 shadow-soft">
              <Tag className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Developer Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Tips, Tutorials &
              <span className="block gradient-text mt-2">Best Practices</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn how to use developer tools effectively and level up your
              workflow
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Article
            </h2>
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />
              <Card className="relative modern-card rounded-2xl border-0">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 rounded-full font-medium">
                      Featured
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blogPosts[0].date).toLocaleDateString(
                          "en-US",
                          { month: "short", day: "numeric", year: "numeric" }
                        )}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* All Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post, index) => (
                <div
                  key={post.id}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Card className="h-full modern-card rounded-2xl border-0 hover-lift">
                    <CardHeader>
                      <div className="text-sm text-blue-600 dark:text-cyan-400 font-semibold mb-3">
                        {post.category}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all text-sm"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className="modern-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
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
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/30 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 text-sm font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
