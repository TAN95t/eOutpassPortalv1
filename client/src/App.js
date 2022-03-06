import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import ApplicationForm from './Components/ApplicationForm';
import StatusForm from './Components/StatusForm';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Passes from './Components/Passes';
import HomePage from './Components/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div style={{ marginTop: "55px" }}>
          <Routes>
            <Route /*path="/" element={<HomePage />*/>
              <Route path="/" element={<HomePage />} />
              <Route path="ApplicationForm" element={<ApplicationForm />} />
              <Route path="StatusForm" element={<StatusForm />} />
              <Route path="Passes" element={<Passes />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;