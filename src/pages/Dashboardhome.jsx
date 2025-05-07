import React from 'react'
import Dashboard from './Dashboard'

function Dashboardhome() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80">
        <Dashboard />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 grid grid-cols-2 grid-rows-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">Content 1</div>
        <div className="bg-blue-100 p-4 rounded shadow">Content 2</div>
        <div className="bg-blue-100 p-4 rounded shadow">Content 3</div>
        <div className="bg-blue-100 p-4 rounded shadow">Content 4</div>
        <div className="bg-blue-100 p-4 rounded shadow">Content 5</div>
        <div className="bg-blue-100 p-4 rounded shadow">Content 6</div>
        
      </div>
    </div>
  )
}

export default Dashboardhome
