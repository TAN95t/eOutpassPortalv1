import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const schema = yup
  .object({
    registrationNo: yup.string().length(9).required(),
  })
  .required();

const StatusForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [outpass, setOutpass] = useState([]);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      console.log("submitted");
      const result = await axios.get(
        `http://localhost:5000/api/v1/outpass/fetchstatus?registrationNo=${data.registrationNo}`
      );
      if (result.data.success) {
        console.log(result.data.data);
      } else {
        console.log(result.data.msg);
      }
      setOutpass(result.data.data);
      toggleModal();
    } catch (e) {
      console.log("Error: ", e);
    }
    //window.location = "/HomePage";
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
          <Modal
            centered
            scrollable
            size="sm"
            toggle={toggleModal}
            isOpen={isModalOpen}
          >
            <ModalHeader toggle={toggleModal}>Outpass Status</ModalHeader>
            <ModalBody>
              <ListGroup>
                <ListGroupItemHeading>Student Details</ListGroupItemHeading>
                <ListGroupItem>
                  <ListGroupItemText>Name : {outpass.name}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemText>Email : {outpass.Email}</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemText>
                    Registration No. : {outpass.Registration}
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemText>
                    Status : {outpass.Status}
                  </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemText>
                    Issued By : {outpass.updatedBy}
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={toggleModal}>OK</Button>
            </ModalFooter>
          </Modal>
        </form>
      </div>
    </div>
  );
};

export default StatusForm;
