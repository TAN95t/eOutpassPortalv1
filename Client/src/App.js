import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ApplicationForm from "./Components/ApplicationForm";
import StatusForm from "./Components/StatusForm";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Passes from "./Components/Passes";
import HomePage from "./Components/HomePage";
import LoginPrompt from "./Components/LoginPrompt";
import AppliedOutpass from "./Components/AppliedOutpass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { setOutpass } from "../redux/actions/outpassActions";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "55px" }}>
          <Routes>
            <Route /*path="/" element={<HomePage />*/>
              <Route path="/" element={<HomePage />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="ApplicationForm" element={<ApplicationForm />} />
              {/* <Route path="StatusForm" element={<StatusForm />} /> */}
              <Route path="Passes" element={<Passes />} />
              <Route path="Login" element={<Login />} />
              <Route path="LoginPrompt" element={<LoginPrompt />} />
              <Route path="Signup" element={<Signup />} />
              <Route path="AppliedOutpass" element={<AppliedOutpass />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
  // const dispatch = useDispatch();
  // const fetchOutpasses = async () => {
  //   try {
  //     const token = localStorage.getItem("authtoken");
  //     if (token) {
  //       const { data } = await axios.get(
  //         "http://localhost:5000/api/v1/outpass/useroutpasses",
  //         {
  //           headers: {
  //             Authorization: `Bearer: ${token}`,
  //           },
  //         }
  //       );
  //       console.log(data.data);
  //       dispatch(setOutpass(data.data));
  //     } else {
  //       console.log("login required");
  //     }
  //   } catch (e) {
  //     console.log("error: " + e);
  //   }
  // };

  // useEffect(() => {
  //   fetchOutpasses();
  // }, []);
};

export default App;
