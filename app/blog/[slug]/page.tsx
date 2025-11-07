import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import { notFound } from "next/navigation";

// Blog post data
const blogPosts: Record<
  string,
  {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    content: React.ReactNode;
  }
> = {
  "json-formatter-guide": {
    title: "Complete Guide to JSON Formatting and Validation",
    excerpt:
      "Learn everything about JSON formatting, validation, and best practices for working with JSON data in your projects.",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Tutorial",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>What is JSON?</h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data interchange
          format that's easy for humans to read and write, and easy for machines
          to parse and generate. It has become the de facto standard for data
          exchange on the web.
        </p>

        <h2>Why JSON Formatting Matters</h2>
        <p>Properly formatted JSON is crucial for several reasons:</p>
        <ul>
          <li>
            <strong>Readability:</strong> Well-formatted JSON is much easier to
            read and understand
          </li>
          <li>
            <strong>Debugging:</strong> Finding errors in formatted JSON is
            significantly faster
          </li>
          <li>
            <strong>Collaboration:</strong> Team members can quickly understand
            data structures
          </li>
          <li>
            <strong>Validation:</strong> Spotting syntax errors becomes much
            easier
          </li>
        </ul>

        <h2>Common JSON Formatting Rules</h2>
        <h3>1. Use Consistent Indentation</h3>
        <p>
          Always use consistent indentation (2 or 4 spaces). This makes the
          hierarchical structure clear:
        </p>
        <pre>
          <code>{`{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
}`}</code>
        </pre>

        <h3>2. One Property Per Line</h3>
        <p>
          Each key-value pair should be on its own line for better readability:
        </p>
        <pre>
          <code>{`{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "isActive": true
}`}</code>
        </pre>

        <h3>3. Use Double Quotes</h3>
        <p>
          JSON requires double quotes for both keys and string values. Single
          quotes are not valid:
        </p>
        <pre>
          <code>{`// ✅ Correct
{
  "name": "value"
}

// ❌ Incorrect
{
  'name': 'value'
}`}</code>
        </pre>

        <h2>JSON Validation Best Practices</h2>

        <h3>1. Check for Trailing Commas</h3>
        <p>JSON doesn't allow trailing commas. This is a common error:</p>
        <pre>
          <code>{`// ❌ Invalid - trailing comma
{
  "name": "John",
  "age": 30,
}

// ✅ Valid
{
  "name": "John",
  "age": 30
}`}</code>
        </pre>

        <h3>2. Escape Special Characters</h3>
        <p>Special characters must be properly escaped:</p>
        <ul>
          <li>
            <code>\"</code> for double quotes
          </li>
          <li>
            <code>\\</code> for backslash
          </li>
          <li>
            <code>\n</code> for new line
          </li>
          <li>
            <code>\t</code> for tab
          </li>
        </ul>

        <h3>3. Use Valid Data Types</h3>
        <p>JSON supports only these data types:</p>
        <ul>
          <li>
            String: <code>"text"</code>
          </li>
          <li>
            Number: <code>42</code>, <code>3.14</code>
          </li>
          <li>
            Boolean: <code>true</code>, <code>false</code>
          </li>
          <li>
            Null: <code>null</code>
          </li>
          <li>
            Array: <code>[1, 2, 3]</code>
          </li>
          <li>
            Object:{" "}
            <code>
              {"{"}"key": "value"{"}"}
            </code>
          </li>
        </ul>

        <h2>Working with Large JSON Files</h2>
        <p>When dealing with large JSON files:</p>
        <ol>
          <li>
            <strong>Use a formatter:</strong> Don't try to format manually
          </li>
          <li>
            <strong>Validate incrementally:</strong> Check sections as you build
          </li>
          <li>
            <strong>Use schemas:</strong> JSON Schema helps validate structure
          </li>
          <li>
            <strong>Minify for production:</strong> Remove whitespace to reduce
            size
          </li>
        </ol>

        <h2>Common JSON Errors and Solutions</h2>

        <h3>Error: Unexpected Token</h3>
        <p>Usually caused by:</p>
        <ul>
          <li>Missing or extra commas</li>
          <li>Unclosed brackets or braces</li>
          <li>Single quotes instead of double quotes</li>
        </ul>

        <h3>Error: Unexpected End of JSON Input</h3>
        <p>This means your JSON is incomplete:</p>
        <ul>
          <li>
            Check for unclosed brackets <code>[]</code>
          </li>
          <li>
            Check for unclosed braces <code>{"{}"}</code>
          </li>
          <li>Ensure the file wasn't truncated</li>
        </ul>

        <h2>Tools and Resources</h2>
        <p>Use these tools to work with JSON effectively:</p>
        <ul>
          <li>
            <strong>Online Formatters:</strong> Quick validation and formatting
          </li>
          <li>
            <strong>IDE Extensions:</strong> Real-time validation in your editor
          </li>
          <li>
            <strong>Command Line Tools:</strong> jq for processing JSON in
            terminal
          </li>
          <li>
            <strong>JSON Schema:</strong> Define and validate data structures
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Mastering JSON formatting and validation is essential for modern web
          development. By following these best practices, you'll write cleaner,
          more maintainable code and catch errors before they cause problems in
          production.
        </p>
        <p>
          Remember: When in doubt, use a formatter! It's faster, more reliable,
          and helps you focus on what matters – building great applications.
        </p>
      </div>
    ),
  },

  "css-gradients-guide": {
    title: "Creating Beautiful CSS Gradients: A Complete Guide",
    excerpt:
      "Master the art of CSS gradients. Learn how to create stunning linear and radial gradients for your web projects.",
    date: "2025-01-10",
    readTime: "7 min read",
    category: "Design",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Introduction to CSS Gradients</h2>
        <p>
          CSS gradients allow you to create smooth transitions between two or
          more colors. They're powerful design tools that can add depth,
          dimension, and visual interest to your web projects without requiring
          images.
        </p>

        <h2>Types of CSS Gradients</h2>

        <h3>1. Linear Gradients</h3>
        <p>Linear gradients transition colors along a straight line:</p>
        <pre>
          <code>{`/* Simple linear gradient */
background: linear-gradient(to right, #667eea, #764ba2);

/* With angle */
background: linear-gradient(45deg, #667eea, #764ba2);

/* Multiple colors */
background: linear-gradient(to right, #667eea, #764ba2, #f093fb);`}</code>
        </pre>

        <h3>2. Radial Gradients</h3>
        <p>Radial gradients radiate from a center point:</p>
        <pre>
          <code>{`/* Simple radial gradient */
background: radial-gradient(circle, #667eea, #764ba2);

/* Positioned */
background: radial-gradient(circle at top left, #667eea, #764ba2);

/* With size */
background: radial-gradient(ellipse at center, #667eea 0%, #764ba2 100%);`}</code>
        </pre>

        <h3>3. Conic Gradients</h3>
        <p>Conic gradients rotate around a center point:</p>
        <pre>
          <code>{`/* Color wheel effect */
background: conic-gradient(from 0deg, red, yellow, green, blue, red);

/* Pie chart style */
background: conic-gradient(#667eea 0% 40%, #764ba2 40% 100%);`}</code>
        </pre>

        <h2>Gradient Direction and Angles</h2>
        <p>You can control gradient direction using keywords or angles:</p>
        <ul>
          <li>
            <code>to right</code> – Left to right (90deg)
          </li>
          <li>
            <code>to bottom</code> – Top to bottom (180deg)
          </li>
          <li>
            <code>to bottom right</code> – Diagonal
          </li>
          <li>
            <code>45deg</code> – Custom angle
          </li>
        </ul>

        <h2>Color Stops</h2>
        <p>Control where colors transition:</p>
        <pre>
          <code>{`/* Even distribution */
background: linear-gradient(to right, #667eea, #764ba2, #f093fb);

/* Custom positions */
background: linear-gradient(
  to right, 
  #667eea 0%, 
  #764ba2 50%, 
  #f093fb 100%
);

/* Sharp transitions */
background: linear-gradient(
  to right, 
  #667eea 50%, 
  #764ba2 50%
);`}</code>
        </pre>

        <h2>Modern Gradient Techniques</h2>

        <h3>1. Layered Gradients</h3>
        <p>Stack multiple gradients for complex effects:</p>
        <pre>
          <code>{`background:
  linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 30%),
  linear-gradient(to right, #667eea, #764ba2);`}</code>
        </pre>

        <h3>2. Gradient Text</h3>
        <p>Apply gradients to text:</p>
        <pre>
          <code>{`.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`}</code>
        </pre>

        <h3>3. Animated Gradients</h3>
        <p>Create dynamic, animated backgrounds:</p>
        <pre>
          <code>{`.animated-gradient {
  background: linear-gradient(
    270deg,
    #667eea,
    #764ba2,
    #f093fb
  );
  background-size: 600% 600%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`}</code>
        </pre>

        <h2>Design Best Practices</h2>

        <h3>1. Choose Harmonious Colors</h3>
        <p>Use color theory to select colors that work well together:</p>
        <ul>
          <li>
            <strong>Analogous:</strong> Colors next to each other on the color
            wheel
          </li>
          <li>
            <strong>Complementary:</strong> Colors opposite on the color wheel
          </li>
          <li>
            <strong>Monochromatic:</strong> Different shades of the same color
          </li>
        </ul>

        <h3>2. Consider Contrast</h3>
        <p>Ensure text remains readable over gradients:</p>
        <ul>
          <li>Test with actual content</li>
          <li>Use text shadows if needed</li>
          <li>Consider adding overlay layers</li>
        </ul>

        <h3>3. Optimize Performance</h3>
        <p>Gradients can impact performance:</p>
        <ul>
          <li>Use simple gradients when possible</li>
          <li>Avoid excessive color stops</li>
          <li>Test on lower-end devices</li>
          <li>Consider using images for very complex gradients</li>
        </ul>

        <h2>Popular Gradient Styles</h2>

        <h3>1. Sunset Gradient</h3>
        <pre>
          <code>{`background: linear-gradient(to right, #ff6b6b, #feca57, #ee5a6f);`}</code>
        </pre>

        <h3>2. Ocean Blue</h3>
        <pre>
          <code>{`background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);`}</code>
        </pre>

        <h3>3. Tropical</h3>
        <pre>
          <code>{`background: linear-gradient(to right, #f093fb 0%, #f5576c 100%);`}</code>
        </pre>

        <h3>4. Northern Lights</h3>
        <pre>
          <code>{`background: linear-gradient(to right, #00c6ff, #0072ff, #00d4ff);`}</code>
        </pre>

        <h2>Tools and Resources</h2>
        <ul>
          <li>
            <strong>CSS Gradient Generators:</strong> Visual tools for creating
            gradients
          </li>
          <li>
            <strong>Color Palette Generators:</strong> Find harmonious color
            combinations
          </li>
          <li>
            <strong>Gradient Libraries:</strong> Pre-made gradients to use
          </li>
          <li>
            <strong>DevTools:</strong> Browser tools for fine-tuning gradients
          </li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          CSS gradients are powerful design tools that can transform your web
          projects. By understanding the different types of gradients, mastering
          color theory, and following best practices, you can create stunning
          visual effects that enhance user experience without impacting
          performance.
        </p>
        <p>
          Experiment with different combinations, angles, and techniques to find
          what works best for your designs. Remember: the best gradient is one
          that enhances your content without overwhelming it.
        </p>
      </div>
    ),
  },

  "color-theory-developers": {
    title: "Color Theory for Developers: HEX, RGB, and HSL Explained",
    excerpt:
      "Understanding different color formats and when to use each one. A practical guide for web developers and designers.",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Tutorial",
    content: (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Introduction to Color Formats</h2>
        <p>
          As a web developer, you'll work with colors daily. Understanding
          different color formats and when to use each one can significantly
          improve your workflow and the quality of your designs.
        </p>

        <h2>HEX Colors</h2>
        <p>
          HEX (hexadecimal) is the most common color format in web development:
        </p>
        <pre>
          <code>{`/* 6-digit HEX */
color: #FF5733;

/* 3-digit shorthand */
color: #F53; /* Same as #FF5533 */

/* With alpha channel (8-digit) */
color: #FF5733AA;`}</code>
        </pre>

        <h3>When to Use HEX</h3>
        <ul>
          <li>Brand colors that don't need to change</li>
          <li>Static design elements</li>
          <li>When you need compact notation</li>
          <li>Working with design tools (Figma, Sketch)</li>
        </ul>

        <h2>RGB Colors</h2>
        <p>RGB (Red, Green, Blue) defines colors using three values (0-255):</p>
        <pre>
          <code>{`/* Standard RGB */
color: rgb(255, 87, 51);

/* With alpha (transparency) */
color: rgba(255, 87, 51, 0.5);

/* Modern syntax with alpha */
color: rgb(255 87 51 / 50%);`}</code>
        </pre>

        <h3>When to Use RGB</h3>
        <ul>
          <li>When you need transparency</li>
          <li>Dynamically generated colors in JavaScript</li>
          <li>Working with image data</li>
          <li>Converting from other formats</li>
        </ul>

        <h2>HSL Colors</h2>
        <p>
          HSL (Hue, Saturation, Lightness) is the most intuitive color format:
        </p>
        <pre>
          <code>{`/* Standard HSL */
color: hsl(9, 100%, 60%);

/* With alpha */
color: hsla(9, 100%, 60%, 0.5);

/* Modern syntax */
color: hsl(9 100% 60% / 50%);`}</code>
        </pre>

        <h3>Understanding HSL Values</h3>
        <ul>
          <li>
            <strong>Hue (0-360):</strong> The color type (0=red, 120=green,
            240=blue)
          </li>
          <li>
            <strong>Saturation (0-100%):</strong> Color intensity (0%=gray,
            100%=full color)
          </li>
          <li>
            <strong>Lightness (0-100%):</strong> How light/dark (0%=black,
            50%=pure, 100%=white)
          </li>
        </ul>

        <h3>When to Use HSL</h3>
        <ul>
          <li>Creating color schemes programmatically</li>
          <li>Adjusting colors dynamically</li>
          <li>Building theme systems</li>
          <li>Creating accessible color palettes</li>
        </ul>

        <h2>Practical Color Manipulation</h2>

        <h3>Creating Lighter/Darker Shades</h3>
        <p>HSL makes this incredibly easy:</p>
        <pre>
          <code>{`/* Base color */
--color-primary: hsl(220, 90%, 50%);

/* Lighter shade */
--color-primary-light: hsl(220, 90%, 70%);

/* Darker shade */
--color-primary-dark: hsl(220, 90%, 30%);`}</code>
        </pre>

        <h3>Creating Color Palettes</h3>
        <pre>
          <code>{`/* Keep hue constant, vary saturation and lightness */
--blue-50: hsl(220, 90%, 95%);
--blue-100: hsl(220, 90%, 90%);
--blue-200: hsl(220, 90%, 80%);
--blue-500: hsl(220, 90%, 50%);
--blue-900: hsl(220, 90%, 10%);`}</code>
        </pre>

        <h2>Modern Color Spaces</h2>

        <h3>LCH (Lightness, Chroma, Hue)</h3>
        <p>A perceptually uniform color space:</p>
        <pre>
          <code>{`color: lch(50% 100 240);
color: lch(from #1e90ff l c h / 50%);`}</code>
        </pre>

        <h3>OKLCH</h3>
        <p>Improved version of LCH:</p>
        <pre>
          <code>{`color: oklch(0.5 0.2 240);`}</code>
        </pre>

        <h2>Color Accessibility</h2>

        <h3>Contrast Ratios</h3>
        <p>WCAG requires minimum contrast ratios:</p>
        <ul>
          <li>
            <strong>Normal text:</strong> 4.5:1 minimum
          </li>
          <li>
            <strong>Large text:</strong> 3:1 minimum
          </li>
          <li>
            <strong>AAA level:</strong> 7:1 for normal text
          </li>
        </ul>

        <h3>Testing Contrast</h3>
        <pre>
          <code>{`/* Good contrast */
background: #1e3a8a; /* Dark blue */
color: #ffffff;      /* White text */

/* Poor contrast - avoid */
background: #fbbf24; /* Yellow */
color: #ffffff;      /* White text */`}</code>
        </pre>

        <h2>CSS Custom Properties for Colors</h2>
        <p>Build flexible color systems:</p>
        <pre>
          <code>{`:root {
  /* Base colors in HSL for easy manipulation */
  --hue-primary: 220;
  --sat-primary: 90%;
  
  /* Color palette */
  --color-primary: hsl(var(--hue-primary), var(--sat-primary), 50%);
  --color-primary-light: hsl(var(--hue-primary), var(--sat-primary), 70%);
  --color-primary-dark: hsl(var(--hue-primary), var(--sat-primary), 30%);
}

/* Easy to create variations */
.theme-green {
  --hue-primary: 150;
}`}</code>
        </pre>

        <h2>Color Conversion</h2>

        <h3>HEX to RGB</h3>
        <pre>
          <code>{`function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return \`rgb(\${r}, \${g}, \${b})\`;
}`}</code>
        </pre>

        <h3>RGB to HSL</h3>
        <pre>
          <code>{`function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  // ... calculation logic
  
  return \`hsl(\${h}, \${s}%, \${l}%)\`;
}`}</code>
        </pre>

        <h2>Best Practices</h2>
        <ol>
          <li>
            <strong>Use HSL for theme systems</strong> – Easier to manipulate
          </li>
          <li>
            <strong>Use HEX for static colors</strong> – More compact
          </li>
          <li>
            <strong>Use RGB when needed</strong> – Canvas, image processing
          </li>
          <li>
            <strong>Always consider accessibility</strong> – Test contrast
            ratios
          </li>
          <li>
            <strong>Use CSS custom properties</strong> – Flexible color
            management
          </li>
          <li>
            <strong>Document your color system</strong> – Make it maintainable
          </li>
        </ol>

        <h2>Conclusion</h2>
        <p>
          Understanding color formats is essential for modern web development.
          Each format has its strengths: HEX for simplicity, RGB for
          compatibility, and HSL for manipulation. By choosing the right format
          for each use case, you'll write cleaner, more maintainable code and
          create better designs.
        </p>
      </div>
    ),
  },
};

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | FormatTools Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="relative w-full py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 hover:gap-3 transition-all mb-8 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="modern-card rounded-2xl p-8 md:p-12">
              {post.content}
            </article>

            {/* Share Section */}
            <div className="mt-12 modern-card rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Found this helpful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Share this article with other developers who might find it
                useful.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-soft hover:shadow-medium transition-all duration-300"
              >
                Read More Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
