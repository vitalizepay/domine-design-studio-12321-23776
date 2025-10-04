import { create } from 'zustand';

export type CanvasObjectType = 'text' | 'image' | 'template';

export interface CanvasObject {
  id: string;
  type: CanvasObjectType;
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  // For text
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  // For images and templates
  src?: string;
}

interface CanvasStore {
  objects: CanvasObject[];
  selectedId: string | null;
  addObject: (object: Omit<CanvasObject, 'id'>) => void;
  updateObject: (id: string, updates: Partial<CanvasObject>) => void;
  removeObject: (id: string) => void;
  setSelectedId: (id: string | null) => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  objects: [],
  selectedId: null,
  
  addObject: (object) => set((state) => ({
    objects: [...state.objects, { ...object, id: `obj-${Date.now()}-${Math.random()}` }]
  })),
  
  updateObject: (id, updates) => set((state) => ({
    objects: state.objects.map(obj => 
      obj.id === id ? { ...obj, ...updates } : obj
    )
  })),
  
  removeObject: (id) => set((state) => ({
    objects: state.objects.filter(obj => obj.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId
  })),
  
  setSelectedId: (id) => set({ selectedId: id })
}));
