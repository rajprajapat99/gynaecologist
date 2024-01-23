import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string(),
});
function AppointForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  };
  const form = useRef();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('http://localhost:5555/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });  
        if (response.ok) {
          const data = await response.json();
          console.log('API response data', data);
          setShow(true);
          resetForm();          
        } else {
          console.error('Failed to submit the form');
          const errorData = await response.json();
          console.log('API error data', errorData);
        }
      } catch (error) {
        console.error('Error during API call', error);
      }
    },
  });
  return (
    <div>
      <form className="appointment_form" ref={form} onSubmit={formik.handleSubmit}>
        <div className="col-12">
          <label className="label_font" htmlFor="name">
            Name*
          </label>
        </div>
        <div className='col-12'>
          <input
            className='input_area'
            type="text"
            // id="name"
            name="name"
            placeholder='Enter Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            autoComplete="off"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="col-12">
          <label className="label_font" htmlFor="phoneNumber">
            Phone Number*
          </label>
        </div>
        <div className='col-12'>
          <input
            className='input_area'
            type="tel"
            // id="phoneNumber"
            name="phoneNumber"
            placeholder='Enter Phone Number'
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            autoComplete="off"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div className="error">{formik.errors.phoneNumber}</div>
          )}
        </div>
        <div className="col-12">
          <label className="label_font" htmlFor="email">
            Email*
          </label>
        </div>
        <div className='col-12'>
          <input
            className='input_area'
            type="email"
            // id="email"
            name="email"
            placeholder='Enter Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <div className="col-12">
          <label className="label_font" htmlFor="message">
            Message:
          </label>
        </div>
        <div className='col-12'>
          <textarea
            className='input_area input_msg'
            // id="message"
            name="message"
            placeholder='Message'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='col-12'>
          <button type="submit" className='submit_button submit_app_btn'>
            Submit
          </button>
        </div>
      </form>
      <div className='appoint_form_modal'>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>Thank you for submitting your appointment request!</Modal.Body>
          <Modal.Footer>
            <Button className='form_modal_button' onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
export default AppointForm;
