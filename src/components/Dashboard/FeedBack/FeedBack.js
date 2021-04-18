import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './FeedBack.css'
import { useForm } from "react-hook-form";

const FeedBack = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [feedback, setFeedback] = useState(null)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const Feedback = {
            name: data.name,
            comments: data.description,
            date:new Date()
        }
        fetch(`https://hidden-stream-16931.herokuapp.com/testimonial`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Feedback)
        })
        .then(res =>res.json())
        .then(result =>{
            setFeedback(result)
        })
    };

    return (
        <div className="container-fluid row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <h5><b>Give us Your Feedback</b></h5>
                <form onSubmit={handleSubmit(onSubmit)} className="Feedback">
                    <label htmlFor=""><b className="text-secondary">Your name</b></label>
                    <input defaultValue={loggedInUser.displayName} {...register("name")} />
                    <br />
                    <label htmlFor=""><b className="text-secondary">Your thoughts</b></label>
                    <input style={{ height: '50px' }} {...register("description", { required: true })} />
                    <br />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />

                    <button className="btn btn-success" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default FeedBack;