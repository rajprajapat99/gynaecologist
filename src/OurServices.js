import React from 'react';
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "./OurServices.css";
import Google from './Image/google-logo.svg';
import OBSTETRICIAN from './Image/OBSTETRICIAN.jpg'
import HIGHRISKPREGNANCY from './Image/HIGH RISK PREGNANCY.jpeg'
import COMPLEXDELIVERY from './Image/COMPLEX DELIVERY.jpeg'
import HYSTEROSCOPICSURGERIES from './Image/HYSTEROSCOPIC SURGERIES.jpeg'
import CANCERSCREENING from './Image/CANCER SCREENING.jpg'
import PCOS from './Image/PCOS.jpeg'
import GYNECOLOGIST from './Image/GYNECOLOGIST.jpeg'
import LAPAROSCOPIC from './Image/LAPAROSCOPIC SURGEON.webp'
import FIBROIDS from './Image/FIBROIDS.webp'
import OVARIAN from './Image/OVARIAN CYST.jpg'
import INFERTILITY from './Image/INFERTILITY.jpg'
import blossom from './Image/blossom.png'

function OurServices() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        autoplaySpeed: 4000,
   
        responsive: [
            {
              breakpoint: 1024, // For screens larger than 1024px wide
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768, // For screens between 768px and 1023px wide
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // For screens less than 768px wide
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false, // Hide arrows at this breakpoint
              },
            },
          ],
        };
        function openGoogleMaps() {
            const googleMapsLink = "https://www.google.com/maps/place/Dr+Sunita+Choudhary-High+risk+pregnancyl+Laparoscopic+Surgeries%7C+Infertilityl+Best+Gynecologist+Blossom+clinic+Vaishali+Nagar/@26.912375,75.731094,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4ed8d189aef:0x415c0b9f7e4ceb56!8m2!3d26.912375!4d75.731094!16s%2Fg%2F11hcytyybc?entry=ttu";
            window.open(googleMapsLink, '_blank');
          }
          function openGoogleReview() {
            const googleReviewLink = "https://www.google.com/maps/place/Dr+Sunita+Choudhary-High+risk+pregnancyl+Laparoscopic+Surgeries%7C+Infertilityl+Best+Gynecologist+Blossom+clinic+Vaishali+Nagar/@26.9094894,75.7081096,12.96z/data=!4m8!3m7!1s0x396db4ed8d189aef:0x415c0b9f7e4ceb56!8m2!3d26.912375!4d75.731094!9m1!1b1!16s%2Fg%2F11hcytyybc?entry=ttu"
            window.open(googleReviewLink, '_blank');
          }

    return (
        <>
            <div className='container-fluid service_section' id='our-services'>
                <div className='container'>
                    <div className='row head_row'>
                        <h2 className='service_head'>Services</h2>
                    </div>
                    <div className='row card_contain'>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={OBSTETRICIAN} alt='OBSTETRICIAN' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>OBSTETRICIAN</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={HIGHRISKPREGNANCY} alt='HIGHRISKPREGNANCY' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>HIGH RISK PREGNANCY</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={COMPLEXDELIVERY} alt='COMPLEXDELIVERY' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>COMPLEX DELIVERY</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={HYSTEROSCOPICSURGERIES} alt='HYSTEROSCOPICSURGERIES' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>HYSTEROSCOPIC SURGERIES</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={CANCERSCREENING} alt='CANCERSCREENING' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>CANCER SCREENING</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={PCOS} alt='PCOS' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>PCOS</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={GYNECOLOGIST} alt='MATERNITY' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>MATERNITY</h6>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={GYNECOLOGIST} alt='GYNECOLOGIST' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>GYNECOLOGIST</h6>
                                </div>
                            </div>
                        </div> */}
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={LAPAROSCOPIC} alt='LAPAROSCOPIC' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>LAPAROSCOPIC SURGEON</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={FIBROIDS} alt='FIBROIDS' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>FIBROIDS</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={OVARIAN} alt='OVARIAN' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>OVARIAN CYST</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
                            <div className='card card_center'>
                                <div className='s_c_img py-3'>
                                    <img className='ser_ca_img' src={INFERTILITY} alt='INFERTILITY' />
                                </div>
                                <div className='card_text'>
                                    <h6 className='card_text_b py-3'>INFERTILITY</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-12 card review_card'>
                            <img className='google_card' src={Google} alt='Google' />
                            <div className='card_star'>
                                <span><i class="card_star bi bi-star-fill"></i></span>
                                <span><i class="card_star bi bi-star-fill"></i></span>
                                <span><i class="card_star bi bi-star-fill"></i></span>
                                <span><i class="card_star bi bi-star-fill"></i></span>
                                <span><i class="card_star bi bi-star-fill"></i></span>
                            </div>
                            <h3 className='excel'>EXCELLENT</h3>
                            <h6 className='review_text'>Based on google reviews</h6>


                        </div>
                        <div className='col-lg-9 col-12'>
                            <div className='row'>


                                <div>
                                    <Slider {...settings}>
                                        <div className='col-md-4 col-sm-6'>
                                            <div className='card reviewer_card'>
                                               <div className='reviewer_card_in'>
                                                 <h5 className='reviewer_name'>SHARAD SHAH</h5>
                                                <div className='scrollable_div'>
                                                <p className='scrollable-content'>I am very satisfied with Sunita mam. Always available and helpful. Most important thing is she gives a lot of time to her patients which is very rare in these times. My mom has been operated under her and we had no trouble everything went very smooth. My wife is also under her treatment for 3 months and she is really fine now. Really happy and feels like she is our family doctor. I recommend Dr. Sunita mam to anyone for sure, best gynecologist in Jaipur.</p>
                                                </div>
                                               </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 col-sm-6'>
                                            <div className='card reviewer_card'>
                                            <div className='reviewer_card_in'>
                                            <h5 className='reviewer_name'>KALPANA THAKAN</h5>
                                            <div className='scrollable_div'>
                                                <p className='scrollable-content'>Well just like any other parent being a first time pregnant we were quite anxious about finding a good and best  gynecologist, and after a friend’s reference we came across Dr. Sunita Choudhary, Pregnancy and maternity specialist. After our first appointment, we were sure that we are in good hands. Apart from being a good and best doctor, she is also an amazing person. She made everything at ease right from my pregnancy to delivery. In the time when medical service is so commercialised it’s a blessing to have such a good and caring doctor. I am so grateful to her and the whole staff. She is the BEST gynecologist.</p>
                                                </div>
                                            </div>
                                                
                                            </div>
                                        </div>
                                        <div className='col-md-4 col-sm-6'>
                                            <div className='card reviewer_card'>
                                            <div className='reviewer_card_in'>
                                                <h5 className='reviewer_name'>KINNARI JAIN</h5>
                                                <div className='scrollable_div'>
                                                <p className='scrollable-content'>I have been with her over 7 years. She is a beautiful person with noble soul. Its rare to find a doctor like her that combines personal touch and care.
                                                    I come to her for regular visits, she listens to all the problems patiently and is available on whats-app and calls for constant support of my gynae issues since last 7 years. I have visited many gynecologist before, but she is the best gynecologist in Jaipur, I came across.
                                                    I would highly recommend her to anyone looking for best care and treatment in Jaipur. Thank you for your constant support Dr. Sunita.</p>
                                                    </div>
                                                    </div>
                                            </div>
                                        </div>
                                        
                                    </Slider>
                                </div>
                            </div>
                            <div class="row reviewbtn mt-5">
                                <button target="_blank"  onClick={openGoogleMaps} class="submit-btn"> See on Google</button>
                                <button target="_blank" onClick={openGoogleReview} class="submit-btn"> Write a Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid our_association py-5'>
                <div className='row'>
                    <a href='https://www.google.com/maps/place/Dr+Sunita+Choudhary-High+risk+pregnancyl+Laparoscopic+Surgeries%7C+Infertilityl+Best+Gynecologist+Blossom+clinic+Vaishali+Nagar/@26.912375,75.731094,17z/data=!3m1!4b1!4m6!3m5!1s0x396db4ed8d189aef:0x415c0b9f7e4ceb56!8m2!3d26.912375!4d75.731094!16s%2Fg%2F11hcytyybc?entry=ttu' className=' associ_all_blossom'><img src={blossom} alt='blossom' className='blossom_png' /></a>

                    
                </div>

            </div>
        </>
    );
}

export default OurServices;
