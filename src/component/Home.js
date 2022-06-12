import React, { useState, useEffect } from 'react'
import axios from 'axios'
import netflixBg from '../component/assets/bg.PNG'
import netflixBg2 from '../component/assets/bg2.PNG'
import netflixBg3 from '../component/assets/bg3.PNG'
import { Link } from 'react-router-dom'
import style from '../component/style.css'
function Home() {
    useEffect(() => {
        getApi()
    }, [])
    const [onLoading, setonLoading] = useState(true)
    const APIlink = "https://imdb-api.com/en/API/Top250Movies/k_151nv41x"
    //https://imdb-api.com/API/YouTube/k_dekqhm6t/8hP9D6kZseM
    const [images, setimages] = useState([])
    const getApi = (() => {
        axios.get(APIlink).then((res) => {
            console.log(res)
            setimages(res.data.items);
            console.log(images);
            setonLoading(false)

        }).catch((err) => {
            console.log(`there's an error`);
            console.log(err);
        })
    })
    return (
        <>


            <div className='container-fluid hhh'>
                <div className="row align-items-center text-light bg-dark px-3">
                    <div className='mt-3 col-12'>
                        <div className='card col-sm-5 bg-dark border-0'>
                            <h1 className='fw-bold' style={{ fontSize: '7vh' }}>Only on Netflix</h1>
                            <p className='' style={{ fontFamily: 'sans-serif', fontSize: '2.76vh' }}>This Netflix is the home of amazing original programming that you can't find anywhere else. Full of Images Movies, TV shows, specials and more, all tailored specifically to you.</p>
                            <p className='mt-4' style={{ fontFamily: 'sans-serif', fontSize: '2.76vh' }}>Many Images are here</p>
                        </div>
                    </div>
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={netflixBg} class="d-block w-100 carouselExampleCaptions" alt="..." height='450px' className='card-img-top' />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={netflixBg2} class="d-block w-100 carouselExampleCaptions" alt="..." height='450px' className='card-img-top' />

                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src={netflixBg3} class="d-block w-100 carouselExampleCaptions" alt="..." height='450px' className='card-img-top' />

                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <h3 className='text-light py-3'>Popular Images</h3>
                    {
                        onLoading ? <div className=' text-center mt-5'>
                            <div className="spinner-border text-danger me-2" role="status"><br />
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            Network Error, check your conection
                        </div> :

                            
                            images.map((allImage) => (
                                <div className="col-lg-3 col-md-6 col-sm-12 h-100 mt-2" style={{ heigth: '20em' }}>
                                    <div className='card bg-dark ' key={allImage.id}>
                                        <Link to='' className='pImages'><img src={allImage.image} className='card-img-top pImages' height='300' controls ></img></Link>
                                        <div className="card-body">
                                            <p className="card-text">{allImage.fullTitle}</p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <small className="text-muted text-center">Last updated {allImage.year} ago</small>
                                        </div>
                                    </div>
                                </div>
                            ))

                    }

                </div>
            </div>
        </>
    )
}

export default Home


