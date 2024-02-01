import React from 'react';
import './App.css'
import './App.css'
import AppointForm from './AppointForm'
import tel from './Image/telephone1.png'
const BookAppointment = () => {

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
          <h2 className='apt_book_text'><a className='click_mob_call' href="tel:+919414000665"> <span><img className='icon_image' src={tel} alt='logo_img' /></span><span className='telephone'> +91-9928070006 </span> </a> </h2>
        </div>

      </div>
    </>
  )
}

export default BookAppointment