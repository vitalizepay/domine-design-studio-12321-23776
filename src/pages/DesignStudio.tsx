import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Type, 
  Image as ImageIcon, 
  Layers, 
  Upload, 
  Sparkles,
  MessageSquare,
  Layout,
  Palette,
  Heart,
  Package
} from "lucide-react";
import Navbar from "@/components/Navbar";

const DesignStudio = () => {
  const [selectedTool, setSelectedTool] = useState<string>("template");

  const tools = [
    { id: "template", name: "Templates", icon: Layout },
    { id: "text", name: "Text", icon: Type },
    { id: "illustrations", name: "Illustrations", icon: Sparkles },
    { id: "images", name: "Images", icon: ImageIcon },
    { id: "textures", name: "Textures", icon: Palette },
    { id: "likes", name: "Likes", icon: Heart },
    { id: "brand", name: "Brand Kits", icon: Package },
    { id: "uploads", name: "Uploads", icon: Upload },
    { id: "ai", name: "Domine AI", icon: Sparkles },
    { id: "layers", name: "Layers", icon: Layers },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Tools */}
        <aside className="w-20 border-r border-border bg-card">
          <div className="flex flex-col items-center gap-2 py-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Button
                  key={tool.id}
                  variant={selectedTool === tool.id ? "default" : "ghost"}
                  size="icon"
                  className={`w-14 h-14 ${
                    selectedTool === tool.id 
                      ? "bg-gradient-violet shadow-glow" 
                      : "hover:bg-secondary"
                  }`}
                  onClick={() => setSelectedTool(tool.id)}
                  title={tool.name}
                >
                  <Icon className="w-6 h-6" />
                </Button>
              );
            })}
          </div>
        </aside>

        {/* Tool Options Panel */}
        <aside className="w-80 border-r border-border bg-card p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                {tools.find(t => t.id === selectedTool)?.name}
              </h2>
            </div>

            {selectedTool === "ai" && (
              <div className="space-y-4">
                <div className="p-4 bg-gradient-violet/10 border border-primary rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">AI Assistant</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    What can I help you create?
                  </p>
                  <input
                    type="text"
                    placeholder="Describe your design idea..."
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            )}

            {selectedTool === "template" && (
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card 
                    key={i} 
                    className="aspect-square bg-secondary hover:bg-primary/10 cursor-pointer transition-all hover:shadow-glow border-border"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Template {i}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {selectedTool === "text" && (
              <div className="space-y-4">
                <Button className="w-full bg-gradient-violet">
                  <Type className="w-4 h-4 mr-2" />
                  Add Text
                </Button>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Quick Text Styles</label>
                  {["Heading", "Subheading", "Body Text"].map((style) => (
                    <Button 
                      key={style} 
                      variant="outline" 
                      className="w-full justify-start border-border"
                    >
                      {style}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Canvas - Center */}
        <main className="flex-1 bg-muted/30 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="aspect-square bg-card border-2 border-border shadow-glow flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-96 h-96 bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center space-y-2">
                    <Sparkles className="w-12 h-12 mx-auto text-primary animate-glow-pulse" />
                    <h3 className="text-xl font-semibold text-foreground">T-Shirt Canvas</h3>
                    <p className="text-muted-foreground">Start designing your custom tee</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className="w-80 border-l border-border bg-card p-4 overflow-y-auto">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Properties</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Font Size</label>
                <input 
                  type="range" 
                  min="12" 
                  max="72" 
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Font Style</label>
                <select className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground">
                  <option>Regular</option>
                  <option>Bold</option>
                  <option>Italic</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Color</label>
                <div className="grid grid-cols-5 gap-2">
                  {["#9333ea", "#f97316", "#c0c0c0", "#ffffff", "#000000"].map((color) => (
                    <button
                      key={color}
                      className="w-full aspect-square rounded-lg border-2 border-border hover:border-primary transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Opacity</label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  className="w-full accent-primary"
                />
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <Button className="w-full bg-gradient-violet hover:shadow-glow">
                Save Design
              </Button>
              <Button className="w-full bg-gradient-orange hover:shadow-glow-orange">
                Add to Cart
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DesignStudio;
