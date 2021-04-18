import React, { useContext, useState } from 'react';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Book.css'
import { UserContext } from '../../../App';

const Book = () => {

    const [loggedInUSer, setLoggedInUSer] = useContext(UserContext)
    const [bookingData, setBookingData] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setBookingData(data)
    };

    const handlePaymentSuccess = paymentId => {
        const bookingDetails = {
            bookingTime: new Date(),
            paymentId,
            bookingData
        }
        fetch('http://localhost:4000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookingDetails)
        })
        .then(res =>res.json())
        .then(result =>{
            if(result){
                alert('Your Booking is successfully placed')
            }
        })
    }
    return (
        <div className="container-fluid row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>

            <div className="col-md-10 d-flex p-5">

                <div style={{display:bookingData ?'none':'block'}} className="col-md-5">
                    <h5 style={{ color: '#485563' }}>Book Your Car</h5>
                    <form className="book" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor=""><b>Name</b></label>
                        <input placeholder="Your name" {...register("name")} />
                        <br />
                        <label htmlFor=""><b>Email</b></label>
                        <input placeholder="Your Email" {...register("Email", { required: true })} />
                        {errors.Email && <span className="error">This field is required</span>}
                        <br />
                        <label htmlFor=""><b>Description</b></label>
                        <input placeholder="description" {...register("description", { required: true })} />
                        {errors.description && <span className="error">This field is required</span>}
                        <br />
                        <label htmlFor=""><b>Phone</b></label>
                        <input placeholder="Phone" {...register("Phone", { required: true })} />
                        {errors.Phone && <span className="error">This field is required</span>}
                        <br />

                        <input style={{ width: '200px' }} type="submit" />

                    </form>
                </div>

                <div style={{display:bookingData ?'block':'none'}} className="col-md-5">
                    <h5 style={{ color: '#485563' }}>Make Your Payment</h5>
                    <br />
                    <Payment handlePaymentSuccess={handlePaymentSuccess}></Payment>
                </div>
            </div>
        </div>
    );
};

export default Book;