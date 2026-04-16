import type { ReactNode } from 'react'
import { TopBar } from './TopBar'
import { Navigator } from '@/components/panels/Navigator'
import { PropertyPanel } from '@/components/panels/PropertyPanel'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <Navigator />
        <main
          className="flex-1 overflow-y-auto"
          style={{ height: 'calc(100vh - 48px)' }}
        >
          {children}
        </main>
        <PropertyPanel />
      </div>
    </div>
  )
}
