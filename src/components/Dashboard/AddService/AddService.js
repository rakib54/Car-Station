import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios';

const AddService = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const BookingData = {
            name: data.name,
            description: data.description,
            imageUrl: imageUrl
        }

        fetch(`https://hidden-stream-16931.herokuapp.com/addService`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(BookingData)
        })
            .then(res => res.json())
            .then(bookData => console.log(bookData))
    };

    const handleImageChanged = event => {
        const imageData = new FormData();
        imageData.set('key', '0d490a6f5bc01d67efe384d3ef08195a')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)

            .then(function (response) {
                setImageUrl(response.data.data.url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="container-fluid row font-link">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 p-5">
                <h5><b>Add Service</b></h5>
                <div>
                    <form className="addService text-color" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="">service name</label>
                        <input defaultValue="" {...register("name")} />
                        <label htmlFor="">description</label>
                        <input style={{ height: '60px' }} {...register("description", { required: true })} />
                        {errors.exampleRequired && <span className="error">This field is required</span>}
                        <br />
                        <label htmlFor="">upload image</label>
                        <input style={{ border: 'none' }} type="file" onChange={handleImageChanged} />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;