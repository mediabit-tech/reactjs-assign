import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

    // All Variables Declaration
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    // On Login Submitted
    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('submitPassword').replace(/"/g, "");
        let mail = localStorage.getItem('submitEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    // Return statement of the handleLogin function
    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h5 className="text-center">Log In</h5>
                <div className="form-group">
                    <label>Enter Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="my-3 btn btn-primary btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Please enter correct email & password!
                </Alert>}
            </form>
                : <Home />
            }
        </div>
    )
}

export default Login;