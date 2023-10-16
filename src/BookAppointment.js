import React, { useState } from 'react';
import './App.css'
import './App.css'
import ReCAPTCHA from 'react-google-recaptcha';
import AppointForm from './AppointForm'
const BookAppointment = () => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
    isNotRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to a server.
    console.log(formData);
  };
  return (
    <>

      <div className='container-fluid set_bgc' id='book-appointment'>
        <div className='row apt_book'>
          <h2 className='apt_book_text'>Book An Appointment</h2>
        </div>
        <div className='row py-4 set_bgi'>
          <div className='col-md-6'></div>
          <div className='col-md-6 book_app_form'>
            <div className='row book_app_row'>
              <div className='bg_white'>
                <AppointForm />
              </div>
            </div>
          </div>
        </div>
        <div className='row apt_book'>
          <h2 className='apt_book_text'><a className='click_mob_call' href="tel:+919414000665"> <span><i class="bi bi-telephone-fill"></i></span><span className='telephone'> +91-9928070006 </span> </a> </h2>
        </div>

      </div>
    </>
  )
}

export default BookAppointment