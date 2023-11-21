// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/tickets' }),
  endpoints: (builder) => ({
    addTicket: builder.mutation({
      query: (ticket) =>{
        return {
            method:"POST",
            body:ticket
        }
      } ,
    }),
    updateTicket: builder.mutation({
      query: (ticket) =>{
        return {
            url:`/${ticket.id}`,
            method:"PUT",
            body:ticket
        }
      } ,
    }),
    listTickets:builder.query({
        query:()=>{
            return `/`
        }
    }),
    listTicketsByCustomerId:builder.query({
      query:(cid)=>{
        return `?customerId=${cid}`
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useAddTicketMutation,
  useListTicketsQuery,
  useLazyListTicketsQuery,
  useListTicketsByCustomerIdQuery,
  useLazyListTicketsByCustomerIdQuery,
  useUpdateTicketMutation 
} = ticketApi;