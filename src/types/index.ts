export type Mode = 'builder' | 'workspace' | 'portal'

export type FrameType = 'dashboard' | 'document' | 'presentation' | 'mobile' | 'custom'

export interface Frame {
  id: string
  projectId: string
  name: string
  type: FrameType
  width: number
  height: number
  canvasX: number
  canvasY: number
  order: number
  isTemplate: boolean
  folderId: string | null
  createdAt: string
}

export interface Project {
  id: string
  workspaceId: string
  name: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  name: string
}

export interface Element {
  id: string
  frameId: string
  type: string
  props: Record<string, unknown>
  bindings: Record<string, unknown>
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  visible: boolean
  locked: boolean
}
