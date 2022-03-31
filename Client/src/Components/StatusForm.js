import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup
  .object({
    registrationNo: yup.string().length(9).required(),
  })
  .required();

const StatusForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log("submitted");
    try {
      const result = await axios.get(
        "http://localhost:5000/api/v1/outpass/status",
        data
      );
      if (result.data.success) {
        console.log(result.data.data);
      } else {
        console.log(result.data.msg);
      }
    } catch (e) {
      console.log("Error: ", e);
    }
    window.location = "/HomePage";
  };

  return (
    <div>
      <div className="container my-5 formatting">
        <div className="row">
          <h1 className="text-center">Application Status</h1>
        </div>
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6 offset-1 offset-md-3 mt-5">
            <label htmlFor="number" className="form-label">
              Enter Registration Number
            </label>
            <input
              className="form-control"
              placeholder="Registration Number"
              {...register("registrationNo")}
            />
            <p>{errors.registrationNo?.message}</p>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto my-4">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StatusForm;
