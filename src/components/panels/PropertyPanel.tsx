import { useUIStore } from '@/stores'
import type { UIState } from '@/stores'

type PropertyTab = 'style' | 'data' | 'interaction' | 'animation'

const PROPERTY_TABS: { id: PropertyTab; label: string }[] = [
  { id: 'style', label: 'Style' },
  { id: 'data', label: 'Data' },
  { id: 'interaction', label: 'Interaction' },
  { id: 'animation', label: 'Animation' },
]

const TAB_PLACEHOLDER: Record<PropertyTab, string> = {
  style: 'Style-Optionen kommen in Phase 2',
  data: 'Data Binding kommt in Phase 3',
  interaction: 'Interactions kommen in Phase 9',
  animation: 'Animationen kommen in Phase 6',
}

export function PropertyPanel() {
  const selectedElementIds = useUIStore((s: UIState) => s.selectedElementIds)
  const propertyPanelTab = useUIStore((s: UIState) => s.propertyPanelTab)
  const setPropertyPanelTab = useUIStore((s: UIState) => s.setPropertyPanelTab)

  const hasSelection = selectedElementIds.length > 0

  return (
    <aside
      className="bg-white border-l border-[#E8E8E5] flex flex-col shrink-0"
      style={{ width: '280px' }}
    >
      {hasSelection ? (
        <>
          {/* Tab Bar */}
          <div className="flex border-b border-[#E8E8E5] shrink-0">
            {PROPERTY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setPropertyPanelTab(tab.id)}
                className={`flex-1 py-2.5 text-xs transition-colors duration-100 ${
                  propertyPanelTab === tab.id
                    ? 'text-[#1A1A1A] border-b-2 border-[#7C5CFC] font-medium'
                    : 'text-[#9B9B9B] hover:text-[#6B6B6B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 flex items-center justify-center px-4 text-center">
            <span className="text-[#9B9B9B] text-sm">
              {TAB_PLACEHOLDER[propertyPanelTab]}
            </span>
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="flex-1 flex items-center justify-center px-4 text-center">
          <span className="text-[#9B9B9B] text-sm">Wähle ein Element aus</span>
        </div>
      )}
    </aside>
  )
}
