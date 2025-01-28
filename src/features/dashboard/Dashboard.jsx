import React from 'react'
import ManagerDashboard from './ManagerDashboard'
import EmployeeDashboard from './EmployeeDashboard'
import CustomerDashboard from './CustomerDashboard'

function Dashboard() {
    var {username,role} = JSON.parse(window.localStorage.getItem("user"))[0]
  return (
    <div>
        <h1>Dashboard of {role}</h1>
        {
            role==='manager' && <ManagerDashboard></ManagerDashboard>
        }
        {
            role==='employee' && <EmployeeDashboard></EmployeeDashboard>
        }
        {
            role==='customer' && <CustomerDashboard></CustomerDashboard>
        }
    </div>
  )
}

export default Dashboard