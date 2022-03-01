import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method : "POST",
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        //console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('authtoken', json.authtoken);
            navigate("/Passes");
            //console.log("Authtoken",json.authtoken);
            alert("Logged in successfully") 
        }
        else{
            alert("Invalid credentials");
        }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="container my-5">
            <div className="row">
                    <h1 className="text-center">Admin</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" aria-describedby="email" value={credentials.email} id="email"onChange={onChange}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={credentials.password} id="password" onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
