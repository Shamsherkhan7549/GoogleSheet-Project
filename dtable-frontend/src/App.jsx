import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Delegation from './components/delegation/Delegation'
import DoerDashboard from './components/doerDashboard/DoerDashboard'
import Scorecard from './components/scorecard/Scorecard'
import Checklist from './components/checklist/Checklist'
import Dashboard from './components/dashboard/Dashboard'
import Setting from './components/setting/Setting'
import Filter from './components/filter/Filter'

const App = () => {
  return (
    <>
 
    <Router>
         <Navbar />
          <Filter />

      <Routes>
        <Route path="/delegation" element={<Delegation />} />
        <Route path="/doer-dashboard" element={<DoerDashboard />} />
        <Route path="/score-card" element={<Scorecard />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<Setting />} />
        {/* Optional: Add a default route */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App