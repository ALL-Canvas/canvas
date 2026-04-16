import { useParams } from 'react-router-dom'
import { AppLayout } from '@/components/layout'
import { CanvasWorkspace } from '@/components/canvas'

export function WorkspacePage() {
  const { projectId: _projectId } = useParams<{ projectId: string }>()

  return (
    <AppLayout>
      <CanvasWorkspace />
    </AppLayout>
  )
}
