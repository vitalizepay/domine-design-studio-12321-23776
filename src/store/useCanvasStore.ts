import { create } from 'zustand';

export interface CanvasObject {
  id: string;
  type: 'image' | 'text';
  x: number;
  y: number;
  width?: number;
  height?: number;
  rotation?: number;
  url?: string; // for images
  text?: string; // for text
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
}

interface CanvasStore {
  objects: CanvasObject[];
  selectedId: string | null;
  addObject: (object: Omit<CanvasObject, 'id'>) => void;
  updateObject: (id: string, updates: Partial<CanvasObject>) => void;
  removeObject: (id: string) => void;
  setSelectedId: (id: string | null) => void;
  clearCanvas: () => void;
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  objects: [],
  selectedId: null,
  
  addObject: (object) => set((state) => ({
    objects: [...state.objects, { ...object, id: crypto.randomUUID() }],
  })),
  
  updateObject: (id, updates) => set((state) => ({
    objects: state.objects.map((obj) =>
      obj.id === id ? { ...obj, ...updates } : obj
    ),
  })),
  
  removeObject: (id) => set((state) => ({
    objects: state.objects.filter((obj) => obj.id !== id),
    selectedId: state.selectedId === id ? null : state.selectedId,
  })),
  
  setSelectedId: (id) => set({ selectedId: id }),
  
  clearCanvas: () => set({ objects: [], selectedId: null }),
}));
