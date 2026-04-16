import { create } from 'zustand'
import type { Mode } from '@/types'

export interface UIState {
  mode: Mode
  activeTool: string
  selectedElementIds: string[]
  activeFrameId: string | null
  navigatorTab: 'pages' | 'components'
  propertyPanelTab: 'style' | 'data' | 'interaction' | 'animation'
  setMode: (mode: Mode) => void
  setActiveTool: (tool: string) => void
  setSelectedElements: (ids: string[]) => void
  setActiveFrame: (id: string | null) => void
  setNavigatorTab: (tab: 'pages' | 'components') => void
  setPropertyPanelTab: (tab: 'style' | 'data' | 'interaction' | 'animation') => void
}

export const useUIStore = create<UIState>((set) => ({
  mode: 'builder',
  activeTool: 'select',
  selectedElementIds: [],
  activeFrameId: null,
  navigatorTab: 'pages',
  propertyPanelTab: 'style',
  setMode: (mode) => set({ mode }),
  setActiveTool: (tool) => set({ activeTool: tool }),
  setSelectedElements: (ids) => set({ selectedElementIds: ids }),
  setActiveFrame: (id) => set({ activeFrameId: id }),
  setNavigatorTab: (tab) => set({ navigatorTab: tab }),
  setPropertyPanelTab: (tab) => set({ propertyPanelTab: tab }),
}))
