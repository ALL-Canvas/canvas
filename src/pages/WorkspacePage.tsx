import { useParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout'

export function WorkspacePage() {
  // projectId will be used in P1-T2 when the canvas is wired up
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <AppLayout>
      <div
        className="flex-1 flex items-center justify-center text-[#9B9B9B] text-sm h-full"
        style={{ background: '#F7F7F5' }}
        data-project-id={projectId}
      >
        Canvas kommt in P1-T2
      </div>
    </AppLayout>
  )
}
