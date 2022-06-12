import React from 'react'
import { Link } from 'react-router-dom'
import navBrand from '../component/assets/netflix.PNG'
function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top ps-3" style={{backgroundColor: 'black', opacity: '80%'}}>
          <div className="container-fluid">
            <Link className="navbar-brand" style={{color:'red'}} to='/'><img src={navBrand}/></Link>
            <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="">TV Shows</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Movies
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="">Action</Link></li>
                    <li><Link className="dropdown-item" to="">Another action</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="">Something else here</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="">News & Popular</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="">My List</Link>
                </li>
              </ul>
              <form className="d-flex me-3">

                
                {/* <button className="btn fw-bold text-light me-4 py-0" style={{backgroundColor:'red'}}>JOIN NOW</button> */}
                <input type='search' className='form-control'/>
                <button className="btn btn-outline-secondary fw-bold py-0 ms-2">Search</button>
              </form>
            </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar