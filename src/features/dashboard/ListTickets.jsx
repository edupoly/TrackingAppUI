import React, { useEffect } from 'react'
import { useLazyListTicketsQuery, useListTicketsByCustomerIdQuery, useListTicketsQuery } from '../../services/ticketapi'

function ListTickets() {
    var cid = JSON.parse(window.localStorage.getItem('user'))[0].id
    var {isLoading,data}=useListTicketsByCustomerIdQuery(cid)
    var [getListTicketsFn] = useLazyListTicketsQuery()

    useEffect(()=>{
        getListTicketsFn();
    },[]);
  return (
    <div>
        <h1>ListTickets</h1>
        {
            isLoading && (<h4>Loading....</h4>)
        }
        {
            !isLoading && (
                <ul>
                    {
                        data.map((ticket)=>{
                            return <li>{ticket.issue}</li>
                        })
                    }
                </ul>
            )
        }
    </div>
  )
}

export default ListTickets