import React from 'react';
import { TShirtView } from '@/store/canvasStore';
import tshirtImage from '@/assets/tshirt-mockup.png';

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
  // Convert hex color to RGB for blending
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 255, g: 255, b: 255 };
  };

  const rgb = hexToRgb(color);
  const isWhite = color === '#FFFFFF' || color === '#ffffff';

  return (
    <div
      style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        width: width, 
        height: height,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src={tshirtImage}
        alt="T-shirt mockup"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: isWhite 
            ? 'none' 
            : `brightness(0.8) sepia(1) saturate(5) hue-rotate(${Math.atan2(rgb.g - rgb.b, rgb.r - rgb.g) * 180 / Math.PI}deg)`,
          mixBlendMode: isWhite ? 'normal' : 'multiply'
        }}
      />
    </div>
  );
};
