import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Badge,
} from "reactstrap";
import OutpassModal from "./OutpassModal";
import { useState } from "react";
import axios from "axios";

const OutpassCard = (props) => {
  console.log(props.outpass.firstname);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const verifyCard = async (id, status) => {
    try {
      const token = localStorage.getItem("authtoken");
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/outpass/wardenspermission/${id}`,
        {
          outpassStatus: status,
        },
        {
          headers: {
            Authorization: `Bearer: ${token}`,
          },
        }
      );
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  return (
    <>
      <Card
        style={{
          width: "400px",
          margin: "2% 0% 2% 12%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">
            {props.outpass.firstname + " " + props.outpass.lastname}
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Badge
                color={
                  props.outpass.outpassStatus === "issued"
                    ? "success"
                    : props.outpass.outpassStatus === "applied"
                    ? "warning"
                    : "danger"
                }
              >
                {props.outpass.outpassStatus === "applied"
                  ? "applied"
                  : props.outpass.outpassStatus === "issued"
                  ? "issued"
                  : "rejected"}
              </Badge>
            </div>
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.outpass.regno}
          </CardSubtitle>
          {/* <CardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText> */}
          <Button onClick={toggleModal}>Open</Button>
        </CardBody>
      </Card>
      <div>
        <Modal
          isOpen={isModalOpen}
          centered
          scrollable
          size="xl"
          toggle={toggleModal}
        >
          <ModalHeader toggle={toggleModal}>
            Outpass Id : {props.outpass._id}
          </ModalHeader>
          <ModalBody>
            <OutpassModal outpass={props.outpass} />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={verifyCard(props.outpass._id, "issued")}
            >
              Verify
            </Button>
            <Button onClick={toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};

export default OutpassCard;
