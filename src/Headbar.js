import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Headbar() {
    return (
        <>

            <div className='container-fluid bg_blue' id='home'>
                <div className='row px-5 pt-2'>
                    <div className='col-md-4 col-12 headbar_link'>
                        <span className='icon'></span> <p className='text'>Best Gynecologist in Jaipur</p>
                    </div>
                    <div className='col-md-4 col-12 headbar_link content_end'>
                        <span className='icon'> <i class="bi bi-calendar"></i> </span> <a href='#book-appointment' className='head_link'>Book Appointment</a>
                    </div>
                    <div className='col-md-4 col-12 headbar_link content_end'>
                        <span className='icon'><i class="bi bi-telephone-fill"></i></span> <a href="tel:+919414000665" className='head_link'>+91-9928070006</a>
                    </div>
                </div>
            </div>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ position: 'sticky', top: '0', zIndex: '100' }}>
      <Container>
        <Navbar.Brand href="#home"><h1 className='dr_name'>Dr. Sunita Choudhary</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_item">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">About us</Nav.Link>
            <Nav.Link href="#our-services">Our Services</Nav.Link>
            <Nav.Link href="#book-appointment">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>
    )
}
