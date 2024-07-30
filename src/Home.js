import React from 'react';
import { Helmet } from 'react-helmet';
import Headbar from "./Headbar";
import About from './About';

const OurServices = React.lazy(() => import("./OurServices"));
const BookAppointment = React.lazy(() => import("./BookAppointment"));
const Footer = React.lazy(() => import("./Footer"));

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Best Gynecologist in Vaishali nagar Jaipur | Dr. Sunita Choudhary</title>
        <meta name="description" content="Dr. Sunita Choudhary Is a Senior Gynecologist and Obstetrician in Vaishali Nagar Jaipur. She is an expert in High-risk pregnancy,  Laparoscopic Surgeries, and Infertility. Best Gynecologist in Vaishali Nagar" />
        <meta name="keywords" content="Gynecologist in vaishali nagar , best Gynecologist In jaipur, High risk pregnancy,  Laparoscopic Surgeries, Infertility specialist in jaipur, Best Gynecologist in vaishali nagar" />
      </Helmet>
      <Headbar />
      <About />
      <OurServices />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default App;