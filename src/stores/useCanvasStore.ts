import { create } from 'zustand'
import type { Frame, FrameType } from '@/types'

interface CanvasState {
  frames: Frame[]
  activeFrameId: string | null
  elements: unknown[]
  addFrame: (frame: Partial<Frame>) => void
  updateFrame: (id: string, updates: Partial<Frame>) => void
  deleteFrame: (id: string) => void
  setActiveFrame: (id: string | null) => void
}

const DEFAULT_FRAME: Frame = {
  id: 'frame-1',
  projectId: 'demo',
  name: 'Untitled Frame',
  type: 'dashboard' as FrameType,
  width: 1440,
  order: 0,
  isTemplate: false,
  folderId: null,
  createdAt: new Date().toISOString(),
}

export const useCanvasStore = create<CanvasState>((set) => ({
  frames: [DEFAULT_FRAME],
  activeFrameId: 'frame-1',
  elements: [],

  addFrame: (frame) =>
    set((state) => ({
      frames: [
        ...state.frames,
        {
          id: `frame-${Date.now()}`,
          projectId: 'demo',
          name: 'Untitled Frame',
          type: 'dashboard' as FrameType,
          width: 1440,
          order: state.frames.length,
          isTemplate: false,
          folderId: null,
          createdAt: new Date().toISOString(),
          ...frame,
        },
      ],
    })),

  updateFrame: (id, updates) =>
    set((state) => ({
      frames: state.frames.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    })),

  deleteFrame: (id) =>
    set((state) => ({
      frames: state.frames.filter((f) => f.id !== id),
    })),

  setActiveFrame: (id) => set({ activeFrameId: id }),
}))
