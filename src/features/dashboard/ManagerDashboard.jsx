import React, { useState } from 'react'
import { useListTicketsQuery, useUpdateTicketMutation } from '../../services/ticketapi'
import { useGetAllEmployeesQuery } from '../../services/userapi';

function ManagerDashboard() {
  var {isLoading,data} = useListTicketsQuery();
  var {isLoading:employeesLoading,data:employeesData} = useGetAllEmployeesQuery();
  var [selectedEmployeeId,setSelectedEmployeeId]=useState(null)
  var [updatedTicketFn] = useUpdateTicketMutation();
  function assignTicketToEmployee(emp){
    var updatedTicket={...emp,employeeId:selectedEmployeeId};
    updatedTicketFn(updatedTicket);
  }
  return (
    <div className='container'>
        <h1>ManagerDashboard</h1>
        <table className='table table-stripped table-border'>
          <thead>
            <th>Issue</th>
            <th>Selection</th>
            <th>Action</th>
          </thead>
          <tbody>
            {
              !isLoading && !employeesLoading && data.map((ticket)=>{
                return (<tr>
                    <td>{ticket.issue}</td>
                    <td>
                      <select onChange={(e)=>{setSelectedEmployeeId(e.target.value)}}>
                        <option value="null" disabled selected>Please select Employee</option>
                        {
                          employeesData.map((employee)=>{
                            return <option value={employee.id} selected={+ticket.employeeId===employee.id}>{employee.username}</option>
                          })
                        }
                      </select>
                    </td>
                    <td>
                      <button onClick={()=>{assignTicketToEmployee(ticket)}}>Assign</button>
                    </td>
                  </tr>)
              })
            }
          </tbody>
        </table>
        
    </div>
  )
}

export default ManagerDashboard