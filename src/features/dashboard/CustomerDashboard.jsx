import React from 'react'

import { Outlet,Link, useNavigate } from 'react-router-dom'

function CustomerDashboard() {
    var navigate = useNavigate();
  return (
    <div>
        <h1>CustomerDashboard</h1>
        <Link to="listTickets">List of Tickets</Link>
        <button onClick={()=>{navigate("addTicket")}}>Raise Ticket</button>
        <Outlet></Outlet>
    </div>
  )
}

export default CustomerDashboard