import React, { useState } from 'react'
import { Form, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Login from './Login';

function Signup() {

    // All Variables Declaration
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    // Boolean States Declaration
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info] = useState(true);

    let history = useHistory();

    // On Form Submitted
    function handleSignupSubmit(e) {
        // Page Reload Prevent Default
        e.preventDefault();

        // Conditions for SignUp Form
        if (!name || !email || !password || !phone || !profession) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("submitEmail", JSON.stringify(email));
            localStorage.setItem("submitPassword", JSON.stringify(password));
            console.log("Saved in Local Storage of browser");
            setLogin(!login)
            history.push("/reactjs-assign");
        }
    }

    // Directly to the Login Page
    function handleClick() {
        setLogin(!login)
        history.push("/reactjs-assign");
    }

    // Return statement of the handleSignupSubmit function
    return (
        <>
            <div className="container mx-3 my-3">
                <div className="container mx-3 my-3">
                    {info ? <div> {login ? <form onSubmit={handleSignupSubmit}>
                        <h5 className="text-center">Sign Up Form</h5>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Phone No.</label>
                            <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Select your Profession</label>
                            <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
                                <option>Choose one</option>
                                <option>Web Designer</option>
                                <option>Web Developer</option>
                                <option>MERN Developer</option>
                                <option>Mobile App Developer</option>
                            </Form.Control>
                        </div>

                        <button type="submit" className="btn btn-primary my-3 btn-lg btn-block">Signup</button>
                        <p className="forgot-password text-right">
                            Already signup? <a to="/" style={{ color: "#0B5ED7" }} onClick={handleClick} ><i>Login</i> here</a>
                        </p>
                        {flag &&
                            <Alert color='primary' variant="danger" >
                                Please fill the above form and Signup!
                            </Alert>
                        }

                    </form> : <Login />}
                    </div> : <div></div>}
                </div>
            </div>
        </>
    )
}

export default Signup;