import { CanvasObject } from '@/store/canvasStore';
import template1 from '@/assets/templates/template-1.png';
import template2 from '@/assets/templates/template-2.png';
import template3 from '@/assets/templates/template-3.png';

// Define types for template elements without 'id' since those are auto-generated
type TemplateChild = Omit<CanvasObject, 'id' | 'children'>;

type TemplateElement = Omit<CanvasObject, 'id' | 'children'> & {
  children?: TemplateChild[];
};

export interface Template {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  elements: TemplateElement[];
}

export const sampleTemplates: Template[] = [
  {
    id: 'template-badge-1',
    title: 'Vintage Badge',
    thumbnail: template1,
    category: 'badges',
    elements: [
      {
        type: 'group',
        x: 250,
        y: 250,
        name: 'Vintage Badge Group',
        children: [
          {
            type: 'text',
            x: 0,
            y: 0,
            text: 'AUTHENTIC',
            fontSize: 32,
            fontFamily: 'Arial',
            fill: '#000000',
            name: 'Top Text'
          },
          {
            type: 'text',
            x: 0,
            y: 40,
            text: 'QUALITY',
            fontSize: 48,
            fontFamily: 'Arial',
            fill: '#000000',
            name: 'Main Text'
          },
          {
            type: 'text',
            x: 0,
            y: 95,
            text: 'EST. 2024',
            fontSize: 20,
            fontFamily: 'Arial',
            fill: '#666666',
            name: 'Bottom Text'
          }
        ]
      }
    ]
  },
  {
    id: 'template-illustration-1',
    title: 'Mountain Scene',
    thumbnail: template2,
    category: 'illustrations',
    elements: [
      {
        type: 'group',
        x: 250,
        y: 250,
        name: 'Mountain Scene Group',
        children: [
          {
            type: 'image',
            x: 0,
            y: 0,
            width: 200,
            height: 150,
            src: template2,
            name: 'Mountain Image'
          },
          {
            type: 'text',
            x: 50,
            y: 160,
            text: 'ADVENTURE',
            fontSize: 28,
            fontFamily: 'Arial',
            fill: '#2C5F2D',
            name: 'Caption'
          }
        ]
      }
    ]
  },
  {
    id: 'template-typography-1',
    title: 'Stacked Type',
    thumbnail: template3,
    category: 'typography',
    elements: [
      {
        type: 'group',
        x: 250,
        y: 250,
        name: 'Typography Stack',
        children: [
          {
            type: 'text',
            x: 0,
            y: 0,
            text: 'DESIGN',
            fontSize: 56,
            fontFamily: 'Arial',
            fill: '#000000',
            name: 'Title Line 1'
          },
          {
            type: 'text',
            x: 0,
            y: 60,
            text: 'STUDIO',
            fontSize: 56,
            fontFamily: 'Arial',
            fill: '#000000',
            name: 'Title Line 2'
          },
          {
            type: 'image',
            x: 80,
            y: 120,
            width: 40,
            height: 40,
            src: template3,
            name: 'Decorative Icon'
          }
        ]
      }
    ]
  }
];
