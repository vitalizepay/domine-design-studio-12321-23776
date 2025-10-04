import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useCanvasStore } from "@/store/useCanvasStore";
import { toast } from "sonner";

const categories = ["Marketing", "Merchandise", "Social"];

const templates = [
  { 
    id: 1, 
    name: "Aaniye Template",
    url: 'https://fullyfilmy.in/cdn/shop/products/aaniye.jpg?v=1747994627&width=600'
  },
  { 
    id: 2, 
    name: "No Hanger Template",
    url: 'https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-aaa_98785c10-2a4e-4880-95ad-02da5be2f529.jpg?v=1747993468&width=600'
  },
  { 
    id: 3, 
    name: "Classic Design",
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52Caobg7nvM3GWxrqrpZQsa5h1n1gYCellA&s'
  },
  { 
    id: 4, 
    name: "Sollu Crazy",
    url: 'https://www.crazypunch.com/wp-content/uploads/2024/10/Sollu-Crazy-Tamil-T-Shirt-For-Men-Half-Sleeve-Image.jpg'
  },
  { 
    id: 5, 
    name: "Thisai Engum",
    url: 'https://angi.in/cdn/shop/files/Thisai-Engum-Tamil-Tshirt_grande.webp?v=1758285466'
  },
  { 
    id: 6, 
    name: "Tamilan Print",
    url: 'https://tamilclothing.com/cdn/shop/collections/TAMILAN_PRINTED_T_SHIRT.jpg?v=1670776765'
  },
  { 
    id: 7, 
    name: "Thanni Can",
    url: 'https://www.crazypunch.com/wp-content/uploads/2024/07/CPUN4299_P1_NB-Thanni-Can-Poda-Vanthen-Bro-Men-Half-Sleeve-Navy-Blue-Crazy-Tamil-T-Shirt-800x1067.jpg.webp'
  },
  { 
    id: 8, 
    name: "Colorful Design",
    url: 'https://i.pinimg.com/736x/b0/29/4a/b0294ab43dc8d4fc3a56cbd3a579d685.jpg'
  },
  { 
    id: 9, 
    name: "Avlothan Nammala",
    url: 'https://www.crazypunch.com/wp-content/uploads/2024/11/Avlothan-Nammala-Mudichu-Vittinga-Ponga-Crazy-Tamil-T-Shirt-For-Men-Half-Sleeve-Image-800x1067.jpg.webp'
  },
  { 
    id: 10, 
    name: "Irunga Bhai",
    url: 'https://www.crazypunch.com/wp-content/uploads/2024/11/Irunga-Bhai-Crazy-Tamil-T-Shirt-For-Men-Half-Sleeve-Main-Image-800x1067.jpg.webp'
  },
];

export const TemplatesPanel = () => {
  const addObject = useCanvasStore((state) => state.addObject);

  const handleTemplateClick = (template: typeof templates[0]) => {
    addObject({
      type: 'image',
      url: template.url,
      x: 250, // Center of typical canvas
      y: 200,
      width: 200,
      height: 200,
      rotation: 0,
    });
    toast.success(`Added "${template.name}" to canvas`);
  };

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
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border overflow-hidden group"
              onClick={() => handleTemplateClick(template)}
            >
              <img 
                src={template.url} 
                alt={template.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
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
              className="aspect-square bg-muted hover:bg-muted/70 cursor-pointer transition-all hover:shadow-glow border-border overflow-hidden group"
              onClick={() => handleTemplateClick(template)}
            >
              <img 
                src={template.url} 
                alt={template.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
