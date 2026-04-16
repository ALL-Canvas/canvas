import { FileText, Plus } from 'lucide-react'
import { useUIStore } from '@/stores'
import type { UIState } from '@/stores'

const PLACEHOLDER_FRAMES = [
  { id: 'frame-1', name: 'Frame 1' },
  { id: 'frame-2', name: 'Frame 2' },
]

export function Navigator() {
  const navigatorTab = useUIStore((s: UIState) => s.navigatorTab)
  const setNavigatorTab = useUIStore((s: UIState) => s.setNavigatorTab)
  const activeFrameId = useUIStore((s: UIState) => s.activeFrameId)
  const setActiveFrame = useUIStore((s: UIState) => s.setActiveFrame)

  return (
    <aside className="w-60 bg-white border-r border-[#E8E8E5] flex flex-col shrink-0">
      {/* Tab Bar */}
      <div className="flex h-9 border-b border-[#E8E8E5] shrink-0">
        <button
          onClick={() => setNavigatorTab('pages')}
          className={`flex-1 text-sm transition-colors duration-100 ${
            navigatorTab === 'pages'
              ? 'text-[#1A1A1A] font-medium'
              : 'text-[#9B9B9B] hover:text-[#6B6B6B]'
          }`}
        >
          Pages
        </button>
        <button
          onClick={() => setNavigatorTab('components')}
          className={`flex-1 text-sm transition-colors duration-100 ${
            navigatorTab === 'components'
              ? 'text-[#1A1A1A] font-medium'
              : 'text-[#9B9B9B] hover:text-[#6B6B6B]'
          }`}
        >
          Components
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {navigatorTab === 'pages' ? (
          <ul className="py-2">
            {PLACEHOLDER_FRAMES.map((frame) => (
              <li key={frame.id}>
                <button
                  onClick={() => setActiveFrame(frame.id)}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm text-left transition-colors duration-100 ${
                    activeFrameId === frame.id
                      ? 'bg-[#F0EDFF] text-[#7C5CFC]'
                      : 'text-[#1A1A1A] hover:bg-[#EFEFED]'
                  }`}
                >
                  <FileText size={14} className="shrink-0" />
                  <span>{frame.name}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-full px-4 text-center">
            <span className="text-[#9B9B9B] text-sm">Block-Pool — kommt in Phase 4</span>
          </div>
        )}
      </div>

      {/* Footer: New Frame Button */}
      <div className="p-2 shrink-0 border-t border-[#E8E8E5]">
        <button className="w-full flex items-center justify-center gap-1.5 px-2 py-2 rounded-md border border-[#E8E8E5] text-sm text-[#6B6B6B] hover:bg-[#F7F7F5] transition-colors duration-100">
          <Plus size={14} />
          <span>Neuer Frame</span>
        </button>
      </div>
    </aside>
  )
}
