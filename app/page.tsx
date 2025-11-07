"use client";

import React, { useState } from "react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/tools/tool-card";
import { toolsConfig } from "@/lib/seo-config";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTools = toolsConfig.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.keywords.some((k) =>
        k.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", name: "All Tools" },
    { id: "data", name: "Data" },
    { id: "code", name: "Code" },
    { id: "converter", name: "Converters" },
    { id: "design", name: "Design" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>100% Free • No Sign-up Required</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Free Online Formatters &
              <span className="text-blue-500"> Converters</span> for Developers
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beautify, convert, and optimize your code or data instantly — all
              in your browser. No installation, no backend, 100% secure.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search tools... (e.g., JSON, CSV, HTML)"
                  className="pl-12 h-14 text-lg shadow-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="shadow-lg flex" asChild>
                <a href="#tools" className="flex items-center">
                  Browse All Tools
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/tools/json-formatter">Try JSON Formatter</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="w-full py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Popular Developer Tools
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Choose from our collection of free, fast, and secure online
                tools
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>

            {/* No Results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No tools found. Try a different search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose FormatTools?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All processing happens in your browser. No server delays,
                  instant results.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold">100% Secure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your data never leaves your device. Complete privacy
                  guaranteed.
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-semibold">Always Free</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  No subscriptions, no hidden fees. Professional tools, forever
                  free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
