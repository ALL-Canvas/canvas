import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<div>Dashboard — kommt in P3-T3</div>} />
        <Route path="/workspace/:projectId" element={<div>Workspace — kommt in P1-T1</div>} />
        <Route path="/login" element={<div>Login — kommt in P3-T2</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App