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
    <Card className="group hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-500 transition-colors">
          <Icon className="h-6 w-6 text-blue-500 group-hover:text-white transition-colors" />
        </div>
        <CardTitle className="text-xl">{tool.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {tool.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={tool.path}>
          <Button className="w-full group-hover:bg-blue-600" size="sm">
            Open Tool
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
