import { useFormik } from 'formik'
import React from 'react'
import { useAddTicketMutation } from '../../services/ticketapi';
import { useNavigate } from 'react-router-dom';

function AddTicket() {
    var [addTktFn]=useAddTicketMutation()
    var navigate = useNavigate()
    var ticketForm = useFormik({
        initialValues:{
            issue:"",
            productName:'',
            image:"",
            date:Date.now(),
            customerId:JSON.parse(window.localStorage.getItem('user'))[0].id
        },
        onSubmit:(values)=>{
            addTktFn(values)
            .then((res)=>{
                alert(JSON.stringify(res))
                navigate("/dashboard/listTickets")
            })
            .catch((err)=>{
                alert(JSON.stringify(err))
            })
        }
    });
    return (
        <div>
            <h1>AddTicket</h1>
            <form onSubmit={ticketForm.handleSubmit}>
                Issue:<textarea name="issue" onChange={ticketForm.handleChange}></textarea><br></br>
                Product Name:<input type="text" name="productName" onChange={ticketForm.handleChange}></input>
                <br />
                <button>Raise Ticket</button>
            </form>
        </div>
    )
}

export default AddTicket