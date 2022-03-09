import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const Signup = () => {
    const schema = yup.object({
        name: yup.string().max(50).required(),
        email: yup.string().email().required(),
        password: yup.string().required()
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/register', data)
            console.log(response.data.msg)
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

    // const handleSignIn = async (e) => {
    //     e.preventDefault()

    // }

    return (
        <div>
            <Button onClick={toggleModal} color="primary">
                Signup
            </Button>
            <Modal
                isOpen={isModalOpen}
                centered
                size=""
                toggle={toggleModal}
            >
                <ModalHeader toggle={toggleModal}>
                    Signup
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row my-2'>
                            <div className='col-12 col-md-3'>
                                <label htmlFor='name'>Name : </label>
                            </div>
                            <div className='col-12 col-md-9'>
                                <input {...register("name")} id='name' placeholder='Name' type='text' />
                                <p>{errors.name?.message}</p>
                            </div>
                        </div>
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
                                <input className="btn btn-primary" type="submit" value='Sign In' />
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

export default Signup;