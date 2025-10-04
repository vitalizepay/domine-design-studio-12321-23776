import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = ["Marketing", "Merchandise", "Social"];

const templates = [
  { id: 1, name: "Template 1" },
  { id: 2, name: "Template 2" },
  { id: 3, name: "Template 3" },
  { id: 4, name: "Template 4" },
  { id: 5, name: "Template 5" },
  { id: 6, name: "Template 6" },
];

export const TemplatesPanel = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search"
          className="pl-10 bg-background border-border"
        />
      </div>

      <div className="flex gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant="outline"
            size="sm"
            className="text-xs border-border hover:bg-muted"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">Popular</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border flex items-center justify-center"
            >
              <span className="text-sm text-muted-foreground">{template.name}</span>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-foreground">T-Shirts</h3>
          <Button variant="link" className="text-xs text-primary p-0 h-auto">
            Show All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {templates.slice(0, 4).map((template) => (
            <Card
              key={template.id}
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border flex items-center justify-center"
            >
              <span className="text-sm text-muted-foreground">{template.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
