import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mx-6 my-3">
                <div className="row">
                    <form class="row gx-3 gy-2 align-items-center">
                        <div className="col-sm-9">
                            <textarea className="form-control" placeholder="Leave your feedback here" id="text"></textarea>
                        </div>
                        <div class="col-sm-3">
                            <button type="submit" class="btn btn-outline-light">Feedback Submit</button>
                        </div>
                        <div className="container"></div>
                        <div className="container"></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer
