import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';


const Login = (props) => {
    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/login', data)
            console.log(response)
            if (response.data.success) {
                localStorage.setItem('authtoken', response.data.token)
            }
            else {
                console.log("Error: ", response.data.msg)
            }
            window.location = "/"
        }
        catch (e) {
            console.log("error: ", e)
            window.location = "/"
        }
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/api/auth/login", {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email: credentials.email, password: credentials.password })
    //     });
    //     const json = await response.json();
    //     //console.log(json);
    //     if (json.success) {
    //         // Save the auth token and redirect
    //         localStorage.setItem('authtoken', json.authtoken);
    //         navigate("/Passes");
    //         //console.log("Authtoken",json.authtoken);
    //         alert("Logged in successfully")
    //     }
    //     else {
    //         alert("Invalid credentials");
    //     }
    // }
    // const onChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value })
    //}
    return (
        <div>
            <Button onClick={toggleModal} color="primary">
                Login
            </Button>
            <Modal
                isOpen={isModalOpen}
                centered
                size=""
                toggle={toggleModal}
            >
                <ModalHeader toggle={toggleModal}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row my-2'>
                            <div className='col-12 col-md-3'>
                                <label htmlFor='email'>Email Id : </label>
                            </div>
                            <div className='col-12 col-md-9'>
                                <input {...register("email")} id='email' placeholder='email id' type='email' />
                                <p>{errors.email?.message}</p>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-12 col-md-3'>
                                <label htmlFor='password'>Password : </label>
                            </div>
                            <div className='col-12 col-md-9'>
                                <input {...register("password")} id='password' placeholder='password' type='password' />
                                <p>{errors.password?.message}</p>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-2'>
                                <input className="btn btn-primary" type="submit" value='Log In' />
                            </div>
                            <div className='col-2'>
                                <Button onClick={toggleModal}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default Login
