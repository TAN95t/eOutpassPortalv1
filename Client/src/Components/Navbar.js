import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import { Button } from 'reactstrap';

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    console.log('logout clicked')
    localStorage.removeItem('authtoken')
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "rgb(20, 22, 41)" }}>
          <div className='container-fluid'>
            <Link className="navbar-brand" to="/">E-OutPass</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/ApplicationForm">Application</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/StatusForm">Status</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" /*style={localStorage.getItem('authtoken')?{display:"block"}:{display:'none'}}*/ to="/Passes">Passes</Link>
                </li>
              </ul>
              {/* {!localStorage.getItem('authtoken') ? <form className="d-flex btn-group"> */}
              {!localStorage.getItem('authtoken') ?
                <div>
                  <Login />
                  <Signup />
                </div>
                : <button onClick={() => handleLogout}>Logout</button>}
              {/* </form> : <button onClick={() => handleLogout} className="btn btn-outline-secondary ">Logout</button>} */}
            </div>
          </div>
        </nav>
      </div >
    </>
  )
}

export default Navbar
