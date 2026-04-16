import { MoreHorizontal } from 'lucide-react'
import { useUIStore } from '@/stores'
import type { UIState } from '@/stores/useUIStore'
import type { Mode } from '@/types'

const MODES: { id: Mode; label: string }[] = [
  { id: 'builder', label: 'Builder' },
  { id: 'workspace', label: 'Workspace' },
  { id: 'portal', label: 'Portal' },
]

export function TopBar() {
  const mode = useUIStore((s: UIState) => s.mode)
  const setMode = useUIStore((s: UIState) => s.setMode)

  return (
    <header className="h-12 bg-white border-b border-[#E8E8E5] flex items-center px-4 shrink-0">
      {/* Left: Logo + Project Name */}
      <div className="flex items-center gap-1.5">
        <span className="text-[#7C5CFC] font-semibold text-base leading-none">CANVAS</span>
        <span className="text-[#9B9B9B] text-sm">/</span>
        <span className="text-[#1A1A1A] text-sm">Mein Projekt</span>
      </div>

      {/* Center: spacer */}
      <div className="flex-1" />

      {/* Right: Mode Switcher + More */}
      <div className="flex items-center gap-3">
        {/* Mode Switcher Group */}
        <div className="flex rounded-md border border-[#E8E8E5] overflow-hidden">
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`px-3 py-1 text-sm transition-colors duration-100 ${
                mode === m.id
                  ? 'bg-[#F0EDFF] text-[#7C5CFC]'
                  : 'bg-white text-[#9B9B9B] hover:bg-[#F7F7F5]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* More Button */}
        <button className="w-8 h-8 flex items-center justify-center rounded-md text-[#9B9B9B] hover:bg-[#F7F7F5] transition-colors duration-100">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </header>
  )
}
