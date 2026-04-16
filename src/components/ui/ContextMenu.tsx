import { useEffect, useRef } from 'react'

export interface ContextMenuItem {
  label: string
  action: () => void
  destructive?: boolean
  divider?: boolean
}

interface ContextMenuProps {
  items: ContextMenuItem[]
  position: { x: number; y: number }
  onClose: () => void
}

export function ContextMenu({ items, position, onClose }: ContextMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const style: React.CSSProperties = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    zIndex: 9999,
  }

  return (
    <div
      ref={menuRef}
      style={style}
      className="bg-white border border-[#E8E8E5] rounded-lg shadow-lg py-1 min-w-[160px]"
    >
      {items.map((item, i) => (
        <div key={i}>
          {item.divider && i > 0 && (
            <div className="my-1 border-t border-[#E8E8E5]" />
          )}
          <button
            onClick={() => { item.action(); onClose() }}
            className={`w-full text-left px-3 h-8 text-sm transition-colors duration-100 hover:bg-[#F7F7F5] ${
              item.destructive ? 'text-[#E5484D]' : 'text-[#1A1A1A]'
            }`}
          >
            {item.label}
          </button>
        </div>
      ))}
    </div>
  )
}
