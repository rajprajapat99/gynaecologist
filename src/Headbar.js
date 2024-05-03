import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Image/Dr.sunita logo.png'
import tel from './Image/telephone1.png'
import calandar from './Image/caladar1.png'


export default function Headbar() {
    const scrollToAbout = () => {
        const registerElement = document.getElementById('about-us');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToServices = () => {
        const registerElement = document.getElementById('our-services');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToAppointment = () => {
        const registerElement = document.getElementById('book-appointment');
        if (registerElement) {
            registerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className='container-fluid bg_blue' id='home'>
                <div className='row px-5 pt-2'>
                    <div className='col-md-4 col-12 headbar_link'>
                        <span className='icon'></span> <p className='text'>Best Gynecologist in Jaipur</p>
                    </div>
                    <div className='col-md-4 col-12 headbar_link content_end'>
                        <span className='icon'> <img className='icon_image' src={calandar} alt='logo_img' /> </span> <a href='#book-appointment' className='head_link'>Book Appointment</a>
                    </div>
                    <div className='col-md-4 col-12 headbar_link content_end'>
                        <span className='icon'><img className='icon_image' src={tel} alt='logo_img' /></span> <a href="tel:+919414000665" className='head_link'>+91-9928070006</a>
                    </div>
                </div>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'sticky', top: '0', zIndex: '100' }}>
                <Container>
                    <Navbar.Brand href="/"><img className='logo_img' src={Logo} alt='logo_img' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav_item">
                            <Link to={'/'} className="nav-link" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                            <Nav.Link onClick={scrollToAbout} >About us</Nav.Link>
                            <Nav.Link onClick={scrollToServices} >Our Services</Nav.Link>
                            <Nav.Link  onClick={scrollToAppointment} >Contact Us</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}
