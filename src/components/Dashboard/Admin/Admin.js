import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Admin.css'

const Admin = () => {
    const [addAdmin, setAddAdmin] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        const Email ={
            AdminEmail: data.email
        }

        fetch('https://hidden-stream-16931.herokuapp.com/addAdmin',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Email)
        })
        .then(res =>res.json())
        .then(data =>{
            setAddAdmin(data)
        })
    } 
    return (
        <div className="container-fluid row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <h5>Make Admin</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="admin text-color">
                    <label htmlFor=""><b>Admin Email</b></label>
                    <br/>
                    <input  defaultValue="" {...register("email")} />
                    <br/>
                    <button className="btn btn-success" type="submit">Add admin</button>
                    
                </form>

            </div>
        </div>
    );
};

export default Admin;