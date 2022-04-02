// import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";

const AppliedOutpass = () => {
  const [outpass, setOutpass] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem("authtoken");
    try {
      if (token) {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/outpass/useroutpasses",
          {
            headers: {
              Authorization: `Bearer: ${token}`,
            },
          }
        );
        console.log(data.data);
        setOutpass(data.data);
      } else {
        console.log("Authentication Failed");
      }
    } catch (e) {
      console.log("error: ", e);
    }
  };

  const handleDelete = async () => {
    const userId = outpass[0].userId;
    const token = localStorage.getItem("authtoken");
    try {
      await axios.delete("http://localhost:5000/api/v1/outpass/deleteOutpass");
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {outpass.map((ele) => {
        return (
          <div className="outpassBox">
            <div className="m-2 m-md-5">
              <h2>Student Details</h2>
              <dl className="row">
                <dt className="col-12 col-md-3">Name : </dt>
                <dd className="col-12 col-md-9">
                  {ele.firstname + " " + ele.lastname}
                </dd>
                <dt className="col-12 col-md-3">Email : </dt>
                <dd className="col-12 col-md-9"> {ele.email} </dd>
                <dt className="col-12 col-md-3">Phone no. : </dt>
                <dd className="col-12 col-md-9">{ele.phone}</dd>
                <dt className="col-12 col-md-3">Branch : </dt>
                <dd className="col-12 col-md-9">{ele.branch}</dd>
                <dt className="col-12 col-md-3"> Registration No. : </dt>
                <dd className="col-12 col-md-9">{ele.registrationNo}</dd>
                <dt className="col-12 col-md-3"> Block: </dt>
                <dd className="col-12 col-md-9">{ele.block}</dd>
                <dt className="col-12 col-md-3"> Room no : </dt>
                <dd className="col-12 col-md-9">{ele.roomNo}</dd>
              </dl>
              <h2> Leave Address </h2>
              <dl className="row">
                <dt className="col-12 col-md-3"> Address 1 : </dt>
                <dd className="col-12 col-md-9">{ele.address1}</dd>
                <dt className="col-12 col-md-3"> Address 2 : </dt>
                <dd className="col-12 col-md-9">{ele.address2}</dd>
                <dt className="col-12 col-md-3"> City : </dt>
                <dd className="col-12 col-md-9">{ele.city}</dd>
                <dt className="col-12 col-md-3"> State: </dt>
                <dd className="col-12 col-md-9">{ele.appFormState}</dd>
                <dt className="col-12 col-md-3"> Zip : </dt>
                <dd className="col-12 col-md-9">{ele.zip}</dd>
              </dl>
              <h2> Reason for leave </h2>
              <dl className="row">
                <dt className="col-12 col-md-3"> Description : </dt>
                <dd className="col-12 col-md-9">{ele.description}</dd>
                <dt className="col-12 col-md-3"> From : </dt>
                <dd className="col-12 col-md-9">{ele.fromDate}</dd>
                <dt className="col-12 col-md-3"> To : </dt>
                <dd className="col-12 col-md-9">{ele.toDate}</dd>
              </dl>
              <Button color="primary" onClick={handleDelete}>
                {" "}
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppliedOutpass;
