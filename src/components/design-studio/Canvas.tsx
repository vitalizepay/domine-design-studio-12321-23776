import { useRef, useEffect } from 'react';
import { Stage, Layer, Transformer, Image as KonvaImage, Text } from 'react-konva';
import { useCanvasStore } from '@/store/canvasStore';
import useImage from 'use-image';
import Konva from 'konva';

// Component for rendering images and templates
const CanvasImageObject = ({ 
  shapeProps, 
  isSelected, 
  onSelect, 
  onChange 
}: { 
  shapeProps: any; 
  isSelected: boolean; 
  onSelect: () => void; 
  onChange: (newAttrs: any) => void;
}) => {
  const shapeRef = useRef<Konva.Image>(null);
  const [image] = useImage(shapeProps.src);

  useEffect(() => {
    if (isSelected && shapeRef.current) {
      // Attach transformer when selected
      const tr = shapeRef.current.getLayer()?.findOne('.transformer') as Konva.Transformer;
      if (tr) {
        tr.nodes([shapeRef.current]);
      }
    }
  }, [isSelected]);

  return (
    <KonvaImage
      image={image}
      ref={shapeRef}
      {...shapeProps}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = shapeRef.current;
        if (node) {
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          onChange({
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(5, node.height() * scaleY),
            scaleX: 1,
            scaleY: 1,
          });
        }
      }}
    />
  );
};

// Component for rendering text
const CanvasTextObject = ({ 
  shapeProps, 
  isSelected, 
  onSelect, 
  onChange 
}: { 
  shapeProps: any; 
  isSelected: boolean; 
  onSelect: () => void; 
  onChange: (newAttrs: any) => void;
}) => {
  const shapeRef = useRef<Konva.Text>(null);

  useEffect(() => {
    if (isSelected && shapeRef.current) {
      const tr = shapeRef.current.getLayer()?.findOne('.transformer') as Konva.Transformer;
      if (tr) {
        tr.nodes([shapeRef.current]);
      }
    }
  }, [isSelected]);

  return (
    <Text
      ref={shapeRef}
      {...shapeProps}
      draggable
      onClick={onSelect}
      onTap={onSelect}
      onDragEnd={(e) => {
        onChange({
          x: e.target.x(),
          y: e.target.y(),
        });
      }}
      onTransformEnd={(e) => {
        const node = shapeRef.current;
        if (node) {
          onChange({
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY(),
          });
        }
      }}
    />
  );
};

export const Canvas = () => {
  const objects = useCanvasStore((state) => state.objects);
  const selectedId = useCanvasStore((state) => state.selectedId);
  const setSelectedId = useCanvasStore((state) => state.setSelectedId);
  const updateObject = useCanvasStore((state) => state.updateObject);
  const transformerRef = useRef<Konva.Transformer>(null);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  return (
    <Stage
      width={500}
      height={600}
      className="bg-muted/30 rounded-lg border-2 border-dashed border-border"
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {objects.map((obj) => {
          if (obj.type === 'text') {
            return (
              <CanvasTextObject
                key={obj.id}
                shapeProps={{
                  x: obj.x,
                  y: obj.y,
                  text: obj.text,
                  fontSize: obj.fontSize,
                  fontFamily: obj.fontFamily,
                  fill: obj.fill,
                  rotation: obj.rotation || 0,
                  scaleX: obj.scaleX || 1,
                  scaleY: obj.scaleY || 1,
                }}
                isSelected={obj.id === selectedId}
                onSelect={() => setSelectedId(obj.id)}
                onChange={(newAttrs) => updateObject(obj.id, newAttrs)}
              />
            );
          } else if (obj.type === 'image' || obj.type === 'template') {
            return (
              <CanvasImageObject
                key={obj.id}
                shapeProps={{
                  x: obj.x,
                  y: obj.y,
                  width: obj.width,
                  height: obj.height,
                  rotation: obj.rotation || 0,
                  scaleX: obj.scaleX || 1,
                  scaleY: obj.scaleY || 1,
                  src: obj.src,
                }}
                isSelected={obj.id === selectedId}
                onSelect={() => setSelectedId(obj.id)}
                onChange={(newAttrs) => updateObject(obj.id, newAttrs)}
              />
            );
          }
          return null;
        })}
        <Transformer
          ref={transformerRef}
          name="transformer"
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      </Layer>
    </Stage>
  );
};
