import React from 'react'
import NavDashboard from '../Components/NavDashboard'
import PanesLista from '../Components/PanesLista'
import "../style/dashpage.css" 
const Dashboard = () => {
  return (
    <div className='nav-main'>
        <NavDashboard />
        <PanesLista />
    </div>
  )
}

export default Dashboard