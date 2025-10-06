import React from 'react';
import { TShirtView } from '@/store/canvasStore';

interface TShirtMockupProps {
  view: TShirtView;
  color: string;
  width?: number;
  height?: number;
}

export const TShirtMockup: React.FC<TShirtMockupProps> = ({ 
  view, 
  color, 
  width = 500, 
  height = 600 
}) => {
  const paths = {
    front: "M150,80 Q250,60 350,80 L380,150 L400,300 L380,450 L120,450 L100,300 L120,150 Z M220,80 Q250,90 280,80",
    back: "M150,80 Q250,60 350,80 L380,150 L400,300 L380,450 L120,450 L100,300 L120,150 Z M220,80 Q250,90 280,80",
    left: "M100,80 L180,80 L200,120 L190,180 L100,150 Z M100,150 L120,200 L120,450 L100,450 Z",
    right: "M320,80 L400,80 L400,150 L310,180 L300,120 Z M380,150 L380,450 L400,450 L400,200 Z"
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 600"
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}
    >
      <defs>
        <filter id="tshirt-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path
        d={paths[view]}
        fill={color}
        stroke="hsl(240 8% 30%)"
        strokeWidth="2"
        filter="url(#tshirt-shadow)"
      />
      
      {/* Printable area indicator */}
      {(view === 'front' || view === 'back') && (
        <rect
          x="160"
          y="140"
          width="180"
          height="240"
          fill="none"
          stroke="hsl(262 83% 58% / 0.3)"
          strokeWidth="2"
          strokeDasharray="8 4"
          pointerEvents="none"
        />
      )}
    </svg>
  );
};
