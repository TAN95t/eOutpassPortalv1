import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const ApplicationForm = () => {

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const schema = yup.object({
        firstname: yup.string().max(50).required(),
        lastname: yup.string().max(50).required(),
        email: yup.string().email().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
        branch: yup.string().max(50).required(),
        registrationNo: yup.string().length(9).required(),
        block: yup.string().length(2).required(),
        roomNo: yup.string().length(3).required(),
        address1: yup.string().max(70).required(),
        address2: yup.string().max(70),
        city: yup.string().max(40).required(),
        appFormState: yup.string().max(40).required(),
        zip: yup.string().length(6).required(),
        description: yup.string().max(100).required(),
        fromDate: yup.date().required(),
        // fromTime: yup.string().required(),
        toDate: yup.date().required(),
        // toTime: yup.string().required(),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        try {
            await axios.post('http://localhost:5000/api/v1/outpass/', data)
        }
        catch (e) {
            console.log("Error: ", e)
        }
        console.log(data);
        window.location = "/StatusForm";
    }

    return (

        <div className="container my-5 formatting">
            {/* <div className="row">
                <h1 className="text-center heading">Outpass Application</h1>
            </div> */}
            <div className="container my-5">
                <div className="row">
                    <h3 className="text-center">Student Details</h3>
                </div>
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">First Name : </label>
                                <input className="form-control" placeholder="First name"{...register("firstname")} />
                                <p>{errors.firstName?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Last Name : </label>
                                <input className="form-control" placeholder="Last name"{...register("lastname")} />
                                <p>{errors.lastName?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Email : </label>
                                <input className="form-control" placeholder="Email" {...register("email")} />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Phone : </label>
                                <input className="form-control" placeholder="Phone" {...register("phone")} />
                                <p>{errors.phone?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Branch : </label>
                                <input className="form-control" placeholder="Branch" {...register("branch")} />
                                <p>{errors.branch?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Registration no. : </label>
                                <input className="form-control" placeholder="Registration Number" {...register("registrationNo")} />
                                <p>{errors.regno?.message}</p>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col">
                                <label className="form-label">Block : </label>
                                <input className="form-control" placeholder="Block" {...register("block")} />
                                <p>{errors.block?.message}</p>
                            </div>
                            <div className="col">
                                <label className="form-label">Room no. : </label>
                                <input className="form-control" placeholder="Room Number" {...register("roomNo")} />
                                <p>{errors.room?.message}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Leave Address</h3>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address 1 : </label>
                            <input className="form-control" id="inputAddress" placeholder="1234 Main St" {...register("address1")} />
                            <p>{errors.address1?.message}</p>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Address 2 : </label>
                            <input className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("address2")} />
                            <p>{errors.address2?.message}</p>
                        </div>
                        <div className="row g-3 my-2">
                            <div className="col-sm-7">
                                <label className="form-label">City : </label>
                                <input className="form-control" placeholder="City" {...register("city")} />
                                <p>{errors.city?.message}</p>
                            </div>
                            <div className="col-sm">
                                <label className="form-label">State : </label>
                                <input className="form-control" placeholder="State" {...register("appFormState")} />
                                <p>{errors.appFormState?.message}</p>
                            </div>
                            <div className="col-sm">
                                <label className="form-label">Zip : </label>
                                <input className="form-control" placeholder="Zip" {...register("zip")} />
                                <p>{errors.zip?.message}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Reason For Leave</h3>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...register("description")} ></textarea>
                            <p>{errors.description?.message}</p>
                        </div>
                        <div className="row">
                            <h3 className="text-center">Date and Time</h3>
                        </div>
                        <div className="row g-3">
                            <h5 className="col-sm-1">From </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="From Date" {...register("fromDate")} />
                                <p>{errors.fromDate?.message}</p>
                            </div>
                            {/* <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("fromTime")} />
                                <p>{errors.fromTime?.message}</p>
                            </div> */}
                            <h5 className="col-sm-1">To </h5>
                            <div className="col">
                                <input type="date" className="form-control" placeholder="To Date" {...register("toDate")} />
                                <p>{errors.toDate?.message}</p>
                            </div>
                            {/* <div className="col">
                                <input type="text" className="form-control" placeholder="Time" {...register("toTime")} />
                                <p>{errors.toTime?.message}</p>
                            </div> */}
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto my-4">
                            <input className="btn btn-primary" type="submit" value='Submit Application' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm