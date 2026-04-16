import { useState, useRef, useCallback } from 'react'
import { LayoutGrid, Plus, MoreHorizontal } from 'lucide-react'
import { createShapeId } from '@tldraw/tldraw'
import { useUIStore, useCanvasStore } from '@/stores'
import { ContextMenu, type ContextMenuItem } from '@/components/ui/ContextMenu'
import type { Frame } from '@/types'

interface ContextMenuState {
  frameId: string
  position: { x: number; y: number }
}

function FrameItem({
  frame,
  isActive,
  isRenaming,
  onSelect,
  onStartRename,
  onFinishRename,
  onContextMenu,
  onDragStart,
  onDragOver,
  onDrop,
}: {
  frame: Frame
  isActive: boolean
  isRenaming: boolean
  onSelect: () => void
  onStartRename: () => void
  onFinishRename: (name: string) => void
  onContextMenu: (e: React.MouseEvent) => void
  onDragStart: () => void
  onDragOver: (e: React.DragEvent) => void
  onDrop: () => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [draft, setDraft] = useState(frame.name)

  function handleDoubleClick() {
    setDraft(frame.name)
    onStartRename()
    setTimeout(() => inputRef.current?.select(), 0)
  }

  function commitRename() {
    const trimmed = draft.trim()
    onFinishRename(trimmed || frame.name)
  }

  return (
    <li
      draggable
      onDragStart={onDragStart}
      onDragOver={(e) => { e.preventDefault(); onDragOver(e) }}
      onDrop={onDrop}
      className="group"
    >
      <div
        onClick={onSelect}
        onDoubleClick={handleDoubleClick}
        className={`flex items-center gap-2 px-2 h-8 cursor-pointer transition-colors duration-100 ${
          isActive
            ? 'bg-[#F0EDFF] text-[#7C5CFC]'
            : 'text-[#1A1A1A] hover:bg-[#EFEFED]'
        }`}
      >
        <LayoutGrid size={13} className="shrink-0 text-[#9B9B9B]" />
        {isRenaming ? (
          <input
            ref={inputRef}
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commitRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') { e.currentTarget.blur() }
              if (e.key === 'Escape') { onFinishRename(frame.name) }
            }}
            onClick={(e) => e.stopPropagation()}
            className="flex-1 text-sm bg-transparent outline-none border-b border-[#7C5CFC] text-[#1A1A1A] min-w-0"
          />
        ) : (
          <span className="flex-1 text-sm truncate">{frame.name}</span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onContextMenu(e) }}
          className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-[#E8E8E5] shrink-0 transition-opacity duration-100"
        >
          <MoreHorizontal size={13} />
        </button>
      </div>
    </li>
  )
}

export function Navigator() {
  const navigatorTab = useUIStore((s) => s.navigatorTab)
  const setNavigatorTab = useUIStore((s) => s.setNavigatorTab)

  const frames = useCanvasStore((s) => s.frames)
  const activeFrameId = useCanvasStore((s) => s.activeFrameId)
  const editor = useCanvasStore((s) => s.editor)
  const addFrame = useCanvasStore((s) => s.addFrame)
  const updateFrame = useCanvasStore((s) => s.updateFrame)
  const deleteFrame = useCanvasStore((s) => s.deleteFrame)
  const setActiveFrame = useCanvasStore((s) => s.setActiveFrame)

  const [search, setSearch] = useState('')
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null)
  const draggedId = useRef<string | null>(null)

  const filtered = search.trim()
    ? frames.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : frames

  const navigateToFrame = useCallback((frame: Frame) => {
    if (!editor) return
    try {
      const shapeId = createShapeId(frame.id)
      editor.select(shapeId)
      editor.zoomToSelection({ animation: { duration: 300 } })
      editor.selectNone()
    } catch {
      // fallback if shape not found
    }
  }, [editor])

  function handleSelect(frame: Frame) {
    setActiveFrame(frame.id)
    navigateToFrame(frame)
  }

  function handleNewFrame() {
    const newFrame = addFrame()
    if (editor) {
      editor.createShape({
        id: createShapeId(newFrame.id),
        type: 'canvas-frame',
        x: newFrame.canvasX,
        y: newFrame.canvasY,
        props: {
          name: newFrame.name,
          frameType: newFrame.type,
          w: newFrame.width,
          h: newFrame.height,
        },
      })
      // Navigate camera to new frame
      setTimeout(() => navigateToFrame(newFrame), 0)
    }
    setActiveFrame(newFrame.id)
    setRenamingId(newFrame.id)
  }

  function handleFinishRename(id: string, name: string) {
    updateFrame(id, { name })
    if (editor) {
      try {
        editor.updateShape({ id: createShapeId(id), type: 'canvas-frame', props: { name } })
      } catch { /* shape may not exist yet */ }
    }
    setRenamingId(null)
  }

  function handleDuplicate(frame: Frame) {
    const copy = addFrame({ name: `${frame.name} (Kopie)`, type: frame.type })
    if (editor) {
      editor.createShape({
        id: createShapeId(copy.id),
        type: 'canvas-frame',
        x: copy.canvasX,
        y: copy.canvasY,
        props: { name: copy.name, frameType: copy.type, w: copy.width, h: copy.height },
      })
    }
    setActiveFrame(copy.id)
  }

  function handleDelete(id: string) {
    deleteFrame(id)
    if (editor) {
      try { editor.deleteShape(createShapeId(id)) } catch { /* ok */ }
    }
  }

  function openContextMenu(e: React.MouseEvent, frameId: string) {
    e.preventDefault()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setContextMenu({ frameId, position: { x: rect.right + 4, y: rect.top } })
  }

  function buildMenuItems(frame: Frame): ContextMenuItem[] {
    return [
      { label: 'Umbenennen', action: () => setRenamingId(frame.id) },
      { label: 'Duplizieren', action: () => handleDuplicate(frame) },
      {
        label: frame.isTemplate ? 'Template entfernen' : 'Als Template markieren',
        action: () => updateFrame(frame.id, { isTemplate: !frame.isTemplate }),
      },
      { label: 'Löschen', action: () => handleDelete(frame.id), destructive: true, divider: true },
    ]
  }

  function handleDrop(targetId: string) {
    const dragId = draggedId.current
    if (!dragId || dragId === targetId) return
    const reordered = [...frames]
    const fromIdx = reordered.findIndex((f) => f.id === dragId)
    const toIdx = reordered.findIndex((f) => f.id === targetId)
    const [moved] = reordered.splice(fromIdx, 1)
    reordered.splice(toIdx, 0, moved)
    reordered.forEach((f, i) => updateFrame(f.id, { order: i }))
    draggedId.current = null
  }

  return (
    <aside className="w-60 bg-white border-r border-[#E8E8E5] flex flex-col shrink-0">
      {/* Tabs */}
      <div className="flex h-9 border-b border-[#E8E8E5] shrink-0">
        {(['pages', 'components'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setNavigatorTab(tab)}
            className={`flex-1 text-sm capitalize transition-colors duration-100 ${
              navigatorTab === tab
                ? 'text-[#1A1A1A] font-medium'
                : 'text-[#9B9B9B] hover:text-[#6B6B6B]'
            }`}
          >
            {tab === 'pages' ? 'Pages' : 'Components'}
          </button>
        ))}
      </div>

      {navigatorTab === 'pages' ? (
        <>
          {/* Search */}
          <div className="px-2 py-1.5 border-b border-[#E8E8E5]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Suche..."
              className="w-full text-sm bg-[#F7F7F5] rounded px-2 py-1 outline-none placeholder:text-[#9B9B9B] text-[#1A1A1A]"
            />
          </div>

          {/* Frame List */}
          <ul className="flex-1 overflow-y-auto py-1">
            {filtered.map((frame) => (
              <FrameItem
                key={frame.id}
                frame={frame}
                isActive={activeFrameId === frame.id}
                isRenaming={renamingId === frame.id}
                onSelect={() => handleSelect(frame)}
                onStartRename={() => setRenamingId(frame.id)}
                onFinishRename={(name) => handleFinishRename(frame.id, name)}
                onContextMenu={(e) => openContextMenu(e, frame.id)}
                onDragStart={() => { draggedId.current = frame.id }}
                onDragOver={() => {}}
                onDrop={() => handleDrop(frame.id)}
              />
            ))}
          </ul>

          {/* New Frame */}
          <div className="p-2 shrink-0 border-t border-[#E8E8E5]">
            <button
              onClick={handleNewFrame}
              className="w-full flex items-center justify-center gap-1.5 px-2 py-2 rounded-md border border-[#E8E8E5] text-sm text-[#6B6B6B] hover:bg-[#F7F7F5] transition-colors duration-100"
            >
              <Plus size={14} />
              <span>Neuer Frame</span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center flex-1 px-4 text-center">
          <span className="text-[#9B9B9B] text-sm">Block-Pool — kommt in Phase 4</span>
        </div>
      )}

      {contextMenu && (
        <ContextMenu
          items={buildMenuItems(frames.find((f) => f.id === contextMenu.frameId)!)}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
        />
      )}
    </aside>
  )
}
