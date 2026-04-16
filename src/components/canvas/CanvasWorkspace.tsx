import '@tldraw/tldraw/tldraw.css'
import { Tldraw, type Editor } from '@tldraw/tldraw'
import { useRef } from 'react'
import { CanvasFrameShapeUtil } from './CanvasFrame'

const SHAPE_UTILS = [CanvasFrameShapeUtil]

function CustomBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#F7F7F5',
        backgroundImage: 'radial-gradient(circle, #D3D3CE 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    />
  )
}

const HIDDEN_UI_COMPONENTS = {
  Toolbar: null,
  HelpMenu: null,
  ZoomMenu: null,
  MainMenu: null,
  Minimap: null,
  StylePanel: null,
  PageMenu: null,
  NavigationPanel: null,
  ContextMenu: null,
  ActionsMenu: null,
  QuickActions: null,
  HelperButtons: null,
  Background: CustomBackground,
} as const

export function CanvasWorkspace() {
  const editorRef = useRef<Editor | null>(null)

  function handleMount(editor: Editor) {
    editorRef.current = editor

    editor.createShape({
      type: 'canvas-frame',
      x: -720,
      y: -400,
      props: {
        name: 'Untitled Frame',
        frameType: 'dashboard',
        w: 1440,
        h: 800,
      },
    })

    editor.zoomToFit()
  }

  return (
    <div className="flex-1 w-full h-full">
      <Tldraw
        shapeUtils={SHAPE_UTILS}
        onMount={handleMount}
        components={HIDDEN_UI_COMPONENTS}
      />
    </div>
  )
}
