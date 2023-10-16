import React, { useState } from 'react';
import './App.css';
import DrSunita from './Image/drSunita.jpeg';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import carousel1 from './Image/carousel1.jpg';
import carousel2 from './Image/carousel2.jpg';
import carousel3 from './Image/carousel3.jpg';
import AppointForm from './AppointForm'
function About() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    isNotRobot: false,
  });
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to a server.
    console.log(formData);
  };

  return (
    <>
      <div className='container-fluid carousel_cont'>
        <MDBCarousel showControls>
          <MDBCarouselItem
            className='w-100 d-block carousel_imag'
            itemId={1}
            src={carousel1}
            alt='...'
          />
          <MDBCarouselItem
            className='w-100 d-block carousel_imag'
            itemId={2}
            src={carousel2}
            alt='...'
          />
          
        </MDBCarousel>
      </div>
      {/* <div className='container appointment_section'>
        <div className='move_up'>
          <div className='row'>
            <div className='col-md-6 make_appointment'>
              <div className='row'>
                <div className='col-12'>
                  <h2 className='form_heading mb-3'>Make An Appointment</h2>
                </div>
                <AppointForm />
              </div>

            </div>
            <div className='col-md-6 image_section'>
              <img className='doctor_banner' src={DrSunita} alt='doctor pic' />
            </div>
          </div>
        </div>
      </div> */}
     
      <div className='container-fluid' id='about-us'>
        <div className='container welcome_section'>
          <h2 className='welcome_blue'>WELCOME TO Dr. SUNITA CHOUDHARY</h2>
          <p className='wel_para'>Dr. Sunita Choudhary is a Sr. Consultant Gynecologist & Obstetrician at Shalby Multi-Specialty Hospital, Jaipur. <span className='about_bold'>Dedicated and best gynecologist from 15+ years,</span> aiming to extend education and professional knowledge attained till now, towards curing and healing various ailments of human beings.</p>
          <p className='wel_para'>Earlier she worked  as a Consultant & HOD at Dana Shivam Heart & Super-specialty Hospital, Vidhyadhar Nagar, Jaipur where she has managed OPD, IPD, emergencies and labour room independently.She has  performed various O.T. procedures (Laparoscopic hysterectomy, myomectomy, cystectomy ,Hysteroscopic polypectomy,septal resection, adhesiolysis and other gynecological procedures).</p>
          <p className='wel_para'>She is also a member of Federation of Obstetric and Gynaecological Societies of India (FOGSI).She is trained in Gynae Laparoscopy by Dr Kurien Joseph in Chennai.</p>
          <p className='wel_para'>Her keen interest in advanced Laparoscopic and hysteroscopic surgeries and high risk pregnancy.</p>
          <p className='wel_para'>So if you’re facing any gynae related issues, you can visit Dr. Sunita Best Gynecologist, Pregnancy and Obstetrician specialist in Jaipur, at Blossom Wellness Clinic, Vaishali Nagar Jaipur.</p>
          <p className='wel_para'>She provides best counselling and care to her patients. She provides best care and provides beSt treatment to mother and child.</p>
        </div>
      </div>
      <div className='container-fluid bg_gradient py-5'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 col-12'>
            <div className=' card_all'>
              <div className='card'>
                <div className='top_icon'><i className="cart_top_icon bi bi-suit-heart-fill"></i></div>
                <h2 className='h_text'>15+</h2>
                <div className='speciality'>Year Of Experience</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 col-12'>
            <div className='card_all'>
              <div className='card'>
                <div className='top_icon'><i className="cart_top_icon bi bi-person-fill"></i></div>
                <h2 className='h_text'>10000+</h2>
                <div className='speciality'>Satisfied Patient</div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-sm-6 col-12'>
            <div className='card_all'>
              <div className='card'>
                <div className='top_icon'><i className="cart_top_icon bi bi-plus-square-fill"></i></div>
                <h2 className='h_text'>100+</h2>
                <div className='speciality'>Successfully Treated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
