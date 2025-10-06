import { Button } from "@/components/ui/button";
import { TShirtView, useCanvasStore } from "@/store/canvasStore";
import { cn } from "@/lib/utils";

const views: { id: TShirtView; label: string }[] = [
  { id: 'front', label: 'Front' },
  { id: 'left', label: 'Left' },
  { id: 'right', label: 'Right' },
  { id: 'back', label: 'Back' }
];

export const ViewSwitcher = () => {
  const currentView = useCanvasStore((state) => state.currentView);
  const setCurrentView = useCanvasStore((state) => state.setCurrentView);

  return (
    <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
      {views.map((view) => (
        <Button
          key={view.id}
          variant={currentView === view.id ? "default" : "ghost"}
          size="sm"
          className={cn(
            "text-sm",
            currentView === view.id && "bg-primary text-primary-foreground"
          )}
          onClick={() => setCurrentView(view.id)}
        >
          {view.label}
        </Button>
      ))}
    </div>
  );
};
