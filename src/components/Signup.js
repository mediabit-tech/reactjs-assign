import React, { useState, useEffect } from 'react'
import { Form, Alert } from 'react-bootstrap';
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
    const [info, setInfo] = useState(true);

    // useEffect(() => {
    //     fetch('https://hoblist.com/api/movieList').then(response =>{
    //         JSON.stringify(response);
    //     }).then(data => {console.log(data, "Hari om")})
    // })

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
        }
    }

    // Directly to the Login Page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info help of NavBar
    function infoClick() {
        setInfo(!info)
    }

    // Return statement of the handleSignupSubmit function
    return (
        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container" onClick={infoClick}>
                    <h4 style={{ color: 'white' }}>Company Info</h4>
                </div>
            </nav>

            <div className="container mx-3 my-3">
                <h3 className="text-center">Welcome to React.JS Assignment</h3>
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
                                <option>Select one</option>
                                <option>Web Designer</option>
                                <option>Web Developer</option>
                                <option>MERN Developer</option>
                                <option>Mobile App Developer</option>
                            </Form.Control>
                        </div>

                        <button type="submit" className="btn btn-primary my-3 btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#" onClick={handleClick} >log in?</a>
                        </p>
                        {flag &&
                            <Alert color='primary' variant="danger" >
                                Please fill the above form and Signup!
                            </Alert>
                        }

                    </form> : <Login />}
                    </div> : <div className="text-center">
                        <hr />
                        <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                        <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                        <p><strong>Phone:</strong> XXXXXXXXX09</p>
                        <p><strong>Email:</strong> XXXXXX@gmail.com</p>
                        <hr />
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Signup;