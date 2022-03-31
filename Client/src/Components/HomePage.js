import LoginPrompt from "./LoginPrompt";
import { Link } from "react-router-dom";
import StatusForm from "./StatusForm";

const HomePage = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">E-Outpass Portal</h1>
        <hr className="my-4" />
        <p>Online portal for outpass application</p>
      </div>
      <div className="container">
        <hr
          style={{
            height: "5px",
            margin: "5rem 19rem",
            width: "50%",
            backgroundColor: "rgb(47, 223, 179)",
            color: "rgb(47, 223, 179)",
          }}
        />
        <div className="row row-content mt-2">
          <div className="col-12 col-md-4 offset-1 offset-md-4">
            <LoginPrompt
              data={<h1>Outpass Application</h1>}
              linkTo="/ApplicationForm"
              dataFor="outpassApplication"
            />
          </div>
        </div>
        <div className="row row-content mt-5">
          <div className="col-12 col-md-4 offset-1 offset-md-4">
            <LoginPrompt
              data={<h1>Applied Outpasses</h1>}
              linkTo="/AppliedOutpass"
              dataFor="outpassStatus"
            />
          </div>
        </div>
        <hr
          style={{
            height: "5px",
            margin: "5rem 19rem",
            width: "50%",
            backgroundColor: "rgb(47, 223, 179)",
            color: "rgb(47, 223, 179)",
          }}
        />
        <div className="row mt-4">
          <StatusForm />>
        </div>
      </div>
    </>
  );
};

export default HomePage;
