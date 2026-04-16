import { create } from 'zustand'
import type { Editor } from '@tldraw/tldraw'
import type { Frame, FrameType } from '@/types'

const FRAME_GAP = 100
const DEFAULT_HEIGHT = 800
const DEFAULT_WIDTH = 1440
const INITIAL_X = -720
const INITIAL_Y = -400

interface CanvasState {
  frames: Frame[]
  activeFrameId: string | null
  elements: unknown[]
  editor: Editor | null
  setEditor: (editor: Editor | null) => void
  addFrame: (overrides?: Partial<Frame>) => Frame
  updateFrame: (id: string, updates: Partial<Frame>) => void
  deleteFrame: (id: string) => void
  setActiveFrame: (id: string | null) => void
}

const DEFAULT_FRAME: Frame = {
  id: 'frame-1',
  projectId: 'demo',
  name: 'Untitled Frame',
  type: 'dashboard' as FrameType,
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
  canvasX: INITIAL_X,
  canvasY: INITIAL_Y,
  order: 0,
  isTemplate: false,
  folderId: null,
  createdAt: new Date().toISOString(),
}

export const useCanvasStore = create<CanvasState>((set, get) => ({
  frames: [DEFAULT_FRAME],
  activeFrameId: 'frame-1',
  elements: [],
  editor: null,

  setEditor: (editor) => set({ editor }),

  addFrame: (overrides = {}) => {
    const { frames, activeFrameId } = get()
    const newWidth = (overrides.width as number | undefined) ?? DEFAULT_WIDTH
    const newHeight = (overrides.height as number | undefined) ?? DEFAULT_HEIGHT

    // Start next to the active frame (or last frame, or initial position)
    const anchor = frames.find((f) => f.id === activeFrameId) ?? frames[frames.length - 1]
    const anchorY = anchor?.canvasY ?? INITIAL_Y
    let proposedX = anchor ? anchor.canvasX + anchor.width + FRAME_GAP : INITIAL_X

    // Slide right until no collision with existing frames
    let attempts = 0
    while (attempts < frames.length + 1) {
      const collision = frames.find(
        (f) =>
          proposedX < f.canvasX + f.width + FRAME_GAP &&
          proposedX + newWidth + FRAME_GAP > f.canvasX
      )
      if (!collision) break
      proposedX = collision.canvasX + collision.width + FRAME_GAP
      attempts++
    }

    const newFrame: Frame = {
      id: `frame-${Date.now()}`,
      projectId: 'demo',
      name: 'Untitled Frame',
      type: 'dashboard' as FrameType,
      width: DEFAULT_WIDTH,
      height: DEFAULT_HEIGHT,
      canvasX: proposedX,
      canvasY: anchorY,
      order: frames.length,
      isTemplate: false,
      folderId: null,
      createdAt: new Date().toISOString(),
      ...overrides,
    }
    set((state) => ({ frames: [...state.frames, newFrame] }))
    return newFrame
  },

  updateFrame: (id, updates) =>
    set((state) => ({
      frames: state.frames.map((f) => (f.id === id ? { ...f, ...updates } : f)),
    })),

  deleteFrame: (id) =>
    set((state) => {
      const remaining = state.frames.filter((f) => f.id !== id)
      const nextActiveId = state.activeFrameId === id
        ? (remaining[0]?.id ?? null)
        : state.activeFrameId
      return { frames: remaining, activeFrameId: nextActiveId }
    }),

  setActiveFrame: (id) => set({ activeFrameId: id }),
}))
