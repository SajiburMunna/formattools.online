"use client";

import React, { useState } from "react";
import { Search, ArrowRight, Sparkles, Zap, Shield, Star } from "lucide-react";
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
      {/* Hero Section - Modern & Realistic */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 dark:from-cyan-900/10 dark:to-blue-900/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-blue-100 dark:border-blue-900/50 shadow-soft">
              <Star className="h-4 w-4 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 10,000+ developers
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Developer Tools
                <span className="block gradient-text mt-2">
                  That Actually Work
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Format, convert, and optimize your code with professional-grade
                tools.
                <span className="font-semibold text-blue-600 dark:text-cyan-400">
                  {" "}
                  100% client-side, 100% secure.
                </span>
              </p>
            </div>

            {/* Search Bar - Modern */}
            <div
              className="max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-300" />
                <div className="relative flex items-center">
                  <Search className="absolute left-5 h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors" />
                  <Input
                    type="text"
                    placeholder="Search tools... (JSON, CSV, HTML, Colors)"
                    className="pl-14 pr-6 h-14 text-base rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 focus:border-blue-500 dark:focus:border-cyan-500 shadow-medium transition-all duration-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-medium hover:shadow-strong transition-all duration-300 hover-lift"
                asChild
              >
                <a href="#tools" className="flex items-center">
                  Browse All Tools
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
                asChild
              >
                <a href="/tools/json-formatter">Try JSON Formatter</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className="flex flex-wrap items-center justify-center gap-8 pt-6 text-sm text-gray-600 dark:text-gray-400 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Always Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section - Modern Grid */}
      <section id="tools" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-medium">
                All Tools
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Choose Your Tool
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Professional developer utilities that run entirely in your
                browser
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="default"
                  className={
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-soft"
                      : "border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-cyan-500 hover:bg-blue-50 dark:hover:bg-blue-950/20"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTools.map((tool, index) => (
                <div
                  key={tool.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
                  No tools found
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  Try adjusting your search or filter
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Why Developers Choose Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Built for speed, security, and simplicity
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-blue-500/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative modern-card rounded-2xl p-8 space-y-4 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-medium">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Process millions of lines instantly. Everything runs locally
                    in your browser with zero latency.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-cyan-500/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative modern-card rounded-2xl p-8 space-y-4 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-medium">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    100% Secure
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Your data never leaves your device. No uploads, no servers,
                    complete privacy guaranteed.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-emerald-500/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative modern-card rounded-2xl p-8 space-y-4 hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-medium">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Always Free
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    No paywalls, no limits, no subscriptions. Professional-grade
                    tools, completely free forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
