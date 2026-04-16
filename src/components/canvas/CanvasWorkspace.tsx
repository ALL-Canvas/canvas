import '@tldraw/tldraw/tldraw.css'
import { Tldraw, createShapeId, type Editor, type TLShape } from '@tldraw/tldraw'
import { CanvasFrameShapeUtil } from './CanvasFrame'
import { useCanvasStore } from '@/stores'

const SHAPE_UTILS = [CanvasFrameShapeUtil]

function CustomBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#F7F7F5',
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
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
  const setEditor = useCanvasStore((s) => s.setEditor)
  const initialFrame = useCanvasStore((s) => s.frames[0])

  function handleMount(editor: Editor) {
    setEditor(editor)

    editor.createShape({
      id: createShapeId(initialFrame.id),
      type: 'canvas-frame',
      x: initialFrame.canvasX,
      y: initialFrame.canvasY,
      props: {
        name: initialFrame.name,
        frameType: initialFrame.type,
        w: initialFrame.width,
        h: initialFrame.height,
      },
    })

    editor.updateInstanceState({ isGridMode: true })

    editor.zoomToFit()

    // Sync tldraw shape changes back to our store
    editor.store.listen((entry) => {
      // Deletions
      for (const record of Object.values(entry.changes.removed)) {
        if (record.typeName === 'shape' && (record as TLShape).type === 'canvas-frame') {
          const frameId = (record.id as string).replace('shape:', '')
          useCanvasStore.getState().deleteFrame(frameId)
        }
      }
      // Position updates (frame moved on canvas)
      for (const [, next] of Object.values(entry.changes.updated)) {
        if (next.typeName === 'shape' && (next as TLShape).type === 'canvas-frame') {
          const frameId = (next.id as string).replace('shape:', '')
          const shape = next as TLShape
          useCanvasStore.getState().updateFrame(frameId, {
            canvasX: shape.x,
            canvasY: shape.y,
          })
        }
      }
    })
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
