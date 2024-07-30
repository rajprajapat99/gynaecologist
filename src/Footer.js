import React from 'react'
import './App.css'
import fb from './Image/fb icon.png'
import insta from './Image/insta-icon.jpg'
import tel from './Image/telephone1.png'
import mail from './Image/mail.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='container-fluid foot_bgc'>
                <div className='container py-5'>
                    <div className='row jus_cont_btw'>
                        <div className='col-md-4 col-sm-6 col-12'>
                            <h5 className='foot_head'>CONTACT US</h5>
                            <div className='contact_detail'>
                                <h5 className='clinic_name'>Blossom Women Wellness Clinic</h5>
                                <ul className='add'>
                                    <li className='detail'>10 A, Gate no 4, Shiv Path, Nemi Nagar Ext., Amrapali Marg, Near SDC Aishwarya Heights Building, Vaishali Nagar, Jaipur, Rajasthan 302021</li>
                                    <li className='detail'><h6><img className='icon_image' src={tel} alt='logo_img' /> +91-9928070006</h6></li>
                                    <li className='detail'><h6><img className='icon_image' src={mail} alt='logo_img' /> choudharydrsunita@gmail.com</h6></li>
                                </ul>
                                <h5 className='foot_head mt-3'>TIMING</h5>
                                <ul className='add'>
                                    <li className='detail'>9:00 a.m - 10:00 a.m</li>
                                    <li className='detail'>5:00 p.m - 7:30 p.m</li>

                                </ul>
                                <ul className='social_media'>
                                    <li className='sm_icon'><a href='https://www.facebook.com/profile.php?id=100064993059276&mibextid=9R9pXO'><img className='footer_social_icon_fb' src={fb} alt='FACEBOOK' /></a></li>
                                    <li className='sm_icon'><a href='https://www.instagram.com/blossomwomenclinic/'><img className='footer_social_icon' src={insta} alt='INSTAGRAM' /></a></li>
                                    {/* <li className='sm_icon'><a href='#'><i className="icon_colour bi bi-twitter"></i></a></li> */}
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
                                    <li className='details'><Link to={'/privacy'} className='our_link'>Privacy & Policy</Link></li>
                                </ul>
                                <h5 className='clinic_name'>Shalby Multi-Specialty Hospital :</h5>
                                <ul className='add'>
                                    <li className='detail'>Under Pass, Delhi - Ajmer Expressway,200 Feet Bypass Rd,  Chitrakoot Sector 3, Vaishali Nagar, Jaipur, Rajasthan 302021</li>
                                    <li className='detail mob_two'><h6><img className='icon_image' src={tel} alt='logo_img' />  +91-9928070006</h6></li>
                                </ul>
                                <h5 className='foot_head foot_head_t mt-3'>TIMING</h5>
                                <ul className='add'>
                                    <li className='detail'>10:00 a.m - 4:00 p.m</li>

                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 col-12'>
                            <h5 className='foot_head'>OUR SERVICES</h5>
                            <div className='contact_detail'>
                                <ul className='add'>
                                    <li className='details'><a href='#our-services' className='our_link'>OBSTETRICIAN</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>HIGH RISK PREGNANCY</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>COMPLEX DELIVERY</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>HYSTEROSCOPIC SURGERIES</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>CANCER SCREENING</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>PCOS</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>MATERNITY</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>GYNECOLOGIST</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>LAPAROSCOPIC SURGEON</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>FIBROIDS</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>OVARIAN CYST</a></li>
                                    <li className='details'><a href='#our-services' className='our_link'>INFERTILITY</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='row design_bgc'>
                    <p className='design_text'>Designed & Developed By <Link to='https://prilient.com/' target='blank' className='copy_web'>Prilient Technologies Pvt. Ltd.</Link></p>
                </div>
            </div>

        </>
    )
}

export default Footer
