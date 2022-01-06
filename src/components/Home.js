import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src="https://media.giphy.com/media/JVGLHEuzbVviw/giphy.gif" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h6 class="card-title text-center">GIF Image</h6>
                                </div>
                        </div>
                        </div>

                        <div class="col">
                        <div class="card" style={{height: "100%"}}>
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" height="100%"></iframe>
                                <div class="card-body">
                                    <h6 class="card-title text-center">Video File</h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer"  style={{backgroundColor:"#0D6EFD", marginBottom: "20", position: "sticky"}}>
            <Footer />
            </div>
        </>
    )
}

export default Home;