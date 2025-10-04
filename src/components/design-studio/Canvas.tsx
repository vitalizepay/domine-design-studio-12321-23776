import { useRef, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';
import { useCanvasStore } from '@/store/useCanvasStore';
import Konva from 'konva';

export const Canvas = () => {
  const objects = useCanvasStore((state) => state.objects);
  const selectedId = useCanvasStore((state) => state.selectedId);
  const setSelectedId = useCanvasStore((state) => state.setSelectedId);
  const updateObject = useCanvasStore((state) => state.updateObject);
  
  const transformerRef = useRef<Konva.Transformer>(null);
  const stageRef = useRef<Konva.Stage>(null);

  useEffect(() => {
    if (selectedId && transformerRef.current) {
      const stage = transformerRef.current.getStage();
      const selectedNode = stage?.findOne(`#${selectedId}`);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    }
  }, [selectedId]);

  const handleStageClick = (e: Konva.KonvaEventObject<MouseEvent>) => {
    // Deselect when clicking on empty area
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Stage
        width={700}
        height={700}
        ref={stageRef}
        onClick={handleStageClick}
        className="bg-card border-2 border-border rounded-lg shadow-lg"
      >
        <Layer>

          {/* Render all canvas objects */}
          {objects.map((obj) => {
            if (obj.type === 'image' && obj.url) {
              return (
                <CanvasImage
                  key={obj.id}
                  id={obj.id}
                  url={obj.url}
                  x={obj.x}
                  y={obj.y}
                  width={obj.width}
                  height={obj.height}
                  rotation={obj.rotation}
                  isSelected={obj.id === selectedId}
                  onSelect={() => setSelectedId(obj.id)}
                  onTransform={(attrs) => updateObject(obj.id, attrs)}
                />
              );
            }
            return null;
          })}

          <Transformer
            ref={transformerRef}
            boundBoxFunc={(oldBox, newBox) => {
              // Limit resize to reasonable bounds
              if (newBox.width < 20 || newBox.height < 20) {
                return oldBox;
              }
              return newBox;
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

interface CanvasImageProps {
  id: string;
  url: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  isSelected: boolean;
  onSelect: () => void;
  onTransform: (attrs: any) => void;
}

const CanvasImage = ({
  id,
  url,
  x,
  y,
  width = 200,
  height = 200,
  rotation = 0,
  isSelected,
  onSelect,
  onTransform,
}: CanvasImageProps) => {
  const imageRef = useRef<Konva.Image>(null);
  const [image, setImage] = React.useState<HTMLImageElement>();

  React.useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = () => {
      setImage(img);
    };
  }, [url]);

  return (
    <KonvaImage
      id={id}
      ref={imageRef}
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      rotation={rotation}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onTransform({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = imageRef.current;
        if (node) {
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // Reset scale and apply to width/height
          node.scaleX(1);
          node.scaleY(1);

          onTransform({
            x: node.x(),
            y: node.y(),
            width: Math.max(20, node.width() * scaleX),
            height: Math.max(20, node.height() * scaleY),
            rotation: node.rotation(),
          });
        }
      }}
    />
  );
};

// Fix React import for CanvasImage
import React from 'react';
