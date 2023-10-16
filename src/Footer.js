import React from 'react'
import './App.css'
const Footer = () => {
  return (
    <>
        <div className='container-fluid foot_bgc'>
        <div className='container py-5'>
            <div className='row jus_cont_btw'>
                <div className='col-md-4 col-sm-6 col-12'>
                    <h5 className='foot_head'>CONTACT US</h5>
                    <div className='contact_detail'>
                        <ul className='add'>
                            <li className='detail'><a href='https://www.google.com/maps/place/Dr+Sunita+Choudhary-High+risk+pregnancyl+Laparoscopic+Surgeries%7C+Infertilityl+Best+Gynecologist+Blossom+clinic+Vaishali+Nagar/@26.912375,75.731094,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4ed8d189aef:0x415c0b9f7e4ceb56!8m2!3d26.912375!4d75.731094!16s%2Fg%2F11hcytyybc?entry=ttu' className='add_link'><span className='foot_icon'><i class="bi bi-geo-alt-fill"></i></span> 10 A, gate no 4, Shiv Path, Amrapali marg, Jaipur</a></li>
                            <li className='detail'><span className='foot_icon'><i class="bi bi-telephone-fill"></i></span>+91-9414000665</li>
                            <li className='detail'><span className='foot_icon'><i class="bi bi-envelope-at"></i></span>choudharydrsunita@gmail.com</li>
                        </ul>
                        <h5 className='foot_head mt-3'>TIMING</h5>
                        <h5 className='clinic_name'>Blossom Women Wellness Clinic</h5>
                        <ul className='add'>
                            <li className='detail'>10 A, Gate no 4, Shiv Path, Nemi Nagar Ext., Amrapali Marg, Near SDC Aishwarya Heights Building, Vaishali Nagar, Jaipur, Rajasthan 302021</li>
                            <li className='detail'><h6>+91-9414000665</h6></li>
                            <li className='detail'>9:00 a.m - 10:00 a.m</li>
                            <li className='detail'>5:00 p.m - 7:30 p.m</li>
                            
                        </ul>
                        <ul className='social_media'>
                            <li className='sm_icon'><a href='https://www.facebook.com/profile.php?id=100064993059276&mibextid=9R9pXO'><i class="icon_colour bi bi-facebook"></i></a></li>
                            <li className='sm_icon'><a href='https://www.instagram.com/blossomwomenclinic/'><i class="icon_colour bi bi-instagram"></i></a></li>
                            {/* <li className='sm_icon'><a href='#'><i class="icon_colour bi bi-twitter"></i></a></li> */}
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 col-sm-6 col-12'>
                    <h5 className='foot_head'>OUR LINK</h5>
                    <div className='contact_detail'>
                        <ul className='add'>
                            <li className='details'><a href='#home' className='our_link'>Home</a></li>
                            <li className='details'><a href='#about-us' className='our_link'>About Us</a></li>
                            <li className='details'><a href='#our-services' className='our_link'>Our Services</a></li>
                            <li className='details'><a href='#book-appointment' className='our_link'>Contact Us</a></li>
                        </ul>
                        <h5 className='foot_head foot_head_t mt-3'>TIMING</h5>
                        <h5 className='clinic_name'>Shalby Multi-Specialty Hospital :</h5>
                        <ul className='add'>
                            <li className='detail'>Under Pass, Delhi - Ajmer Expressway,200 Feet Bypass Rd,  Chitrakoot Sector 3, Vaishali Nagar, Jaipur, Rajasthan 302021</li>
                            <li className='detail mob_two'><h6>+91-9414000665</h6></li>
                            <li className='detail'>10:00 a.m - 4:00 p.m</li>
                            
                        </ul>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-12'>
                    <h5 className='foot_head'>OUR SERVICES</h5>
                    <div className='contact_detail'>
                        <ul className='add'>
                            <li className='details'><a href='#' className='our_link'>OBSTETRICIAN</a></li>
                            <li className='details'><a href='#' className='our_link'>HIGH RISK PREGNANCY</a></li>
                            <li className='details'><a href='#' className='our_link'>COMPLEX DELIVERY</a></li>
                            <li className='details'><a href='#' className='our_link'>HYSTEROSCOPIC SURGERIES</a></li>
                            <li className='details'><a href='#' className='our_link'>CANCER SCREENING</a></li>
                            <li className='details'><a href='#' className='our_link'>PCOS</a></li>
                            <li className='details'><a href='#' className='our_link'>MATERNITY</a></li>
                            <li className='details'><a href='#' className='our_link'>GYNECOLOGIST</a></li>
                            <li className='details'><a href='#' className='our_link'>LAPAROSCOPIC SURGEON</a></li>
                            <li className='details'><a href='#' className='our_link'>FIBROIDS</a></li>
                            <li className='details'><a href='#' className='our_link'>OVARIAN CYST</a></li>
                            <li className='details'><a href='#' className='our_link'>INFERTILITY</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
          
        </div>
        <div className='row design_bgc'>
            <p className='design_text'>Designed & Developed By Prilient Technologies Pvt. Ltd.</p>
           </div>
        </div>
      
    </>
  )
}

export default Footer
