import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { WorkspacePage } from '@/pages/WorkspacePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/workspace/demo" replace />} />
        <Route path="/dashboard" element={<div>Dashboard — kommt in P3-T3</div>} />
        <Route path="/workspace/:projectId" element={<WorkspacePage />} />
        <Route path="/login" element={<div>Login — kommt in P3-T2</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
