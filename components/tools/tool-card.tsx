import Link from "next/link";
import {
  Braces,
  FileJson,
  Code,
  Palette,
  Sparkles,
  Image,
  FileText,
  Database,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tool } from "@/lib/seo-config";

const iconMap: Record<string, React.ElementType> = {
  braces: Braces,
  "file-json": FileJson,
  code: Code,
  palette: Palette,
  sparkles: Sparkles,
  image: Image,
  "file-text": FileText,
  database: Database,
};

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = iconMap[tool.icon] || Code;

  return (
    <div className="group relative h-full">
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500" />

      {/* Card */}
      <Card className="relative h-full modern-card rounded-2xl border-0 hover-lift">
        <CardHeader className="space-y-4">
          {/* Icon with gradient */}
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              {tool.name}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {tool.description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Link href={tool.path}>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-soft hover:shadow-medium transition-all duration-300"
              size="default"
            >
              <span className="flex items-center justify-center w-full">
                Open Tool
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
