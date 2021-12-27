import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

function Home() {

    // All Variables Declaration
    const [flag, setFlag] = useState(false);
    const [eflag, seteFlag] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    // Function for POST the info
    function submitHanddler(e) {
        // Page Reload Prevent Default
        e.preventDefault();
        console.log(first, second, third, fourth);

        // Try for Error Handling until Posting the info
        try {

            if (first || second || third || fourth) {

                const rawResponse = fetch('https://hoblist.com/api/movieList', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        category: first,
                        language: second,
                        genre: third,
                        sort: fourth
                    })
                });
                setFlag(true);
                seteFlag(false);
                console.log("Just For Testing", rawResponse);
            }

        } catch (e) {
            alert("Something error occured!")
            console.log(e, "OOPs! Not Submit");
            setFlag(false);
            seteFlag(true);
        }
    }

    // Return statement of the submitHanddler function
    return (
        <>
            <h5 className="text-center">Enter the movie details</h5>
            <form onSubmit={submitHanddler}>
                <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" placeholder="Enter movies name" onChange={(event) => setFirst(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <input type="text" className="form-control" placeholder="Enter movie lang. name" onChange={(event) => setSecond(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Genre</label>
                    <input type="text" className="form-control" placeholder="Enter movie genre" onChange={(event) => setThird(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Sort</label>
                    <input type="text" className="form-control" placeholder="Enter movie rating" onChange={(event) => setFourth(event.target.value)} />
                </div>

                <button type="submit" className="my-3 btn btn-primary btn-lg btn-block">Submit All Info</button>

                {flag && <Alert color='primary' variant="success" >
                    Your Info is submitted successfully. You can check it into the console.
                </Alert>}
                {eflag && <Alert color='primary' variant="danger" >
                    Your Info is not submitted. Please fill the above form properly.
                </Alert>}
            </form>
        </>
    )
}

export default Home;