
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../component/style.css'
function Footer() {
    return (
        <>
            <footer className="page-footer font-small blue pt-4 container-fluid bg-dark text-light mt-2">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mt-md-0 mt-3">
                            <h6 className="text-capitalize text-start">Questions? Contact us.</h6>
                            <ul className='list-unstyled text-start'>
                                <li><Link to='' className='border-0'>FAQ</Link></li>
                                <li><Link to='' className='border-0'>Investor Relations</Link></li>
                                <li><Link to='' className='border-0'>Privacy</Link></li>
                                <li><Link to='' className='border-0'>Speed Test</Link></li>
                                <li><Link to='' className='border-0'>Netflix Nigeria</Link></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-1" />
                        <div className="col-md-3 mb-md-0 mt-4">
                           
                            <ul className="list-unstyled text-start">
                                <li>
                                    <Link to='' className='border-0' >Help Center</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Jobs</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Cookie Preferences</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Legal Notices</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-1" />
                        <div className="col-md-3 mb-md-0 mt-4">
                            <ul className="list-unstyled text-start">
                                <li>
                                    <Link to='' className='border-0' >Account</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Ways to Watch</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Corporate Information</Link>
                                </li>
                                <li>
                                    <Link to='' className='border-0' >Only on Netflix</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-1" />
                        <div className="col-md-3 mb-md-0 mt-4">
                            <ul className="list-unstyled text-start">
                                <li>
                                    <Link to='' className='border-0 text-dark'>Media Center</Link>
                                </li>
                                <li>
                                    <Link to='' className=' border-0'>Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to='' className=' border-0'>Contact Us</Link>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> Johnfixit.com</a>
                </div>
            </footer>
        </>
    )
}

export default Footer