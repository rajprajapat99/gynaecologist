import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string(),
});

function AppointForm() {
  const initialValues = {
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  };
  const form = useRef();

  const handleEmailSubmit = (e) => {
    if (e) {

      emailjs.sendForm('service_yyw3xjf', 'template_wtcqpmn', form.current, '0TuMNYpjMibrVv9hJ')
        .then(
          (result) => {
            console.log(result.text);

            formik.resetForm();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleEmailSubmit, // Updated to use the correct function
  });

  return (
    <form ref={form} onSubmit={formik.handleSubmit}>
      <div className="col-12">
        <label className="label_font" htmlFor="name">
          Name*
        </label>
      </div>
      <div className='col-12'>
        <input
          className='input_area'
          type="text"
          id="name"
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
        <label className="label_font" htmlFor="name">
          Phone Number*
        </label>
      </div>
      <div className='col-12'>
        <input
          className='input_area'
          type="number"
          id="phoneNumber"
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
          id="email"
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
        <input
          className='input_area input_msg'
          type="text"
          id="message"
          name="message"
          placeholder='Message'
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.message && formik.errors.message && (
          <div className="error">{formik.errors.message}</div>
        )}
      </div>

      {/* Repeat the above pattern for other input fields */}

      <div className='col-12 recaptcha mt-2'>
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={(value) => formik.setFieldValue('recaptcha', value)}
        />
        {formik.touched.recaptcha && formik.errors.recaptcha && (
          <div className="error">{formik.errors.recaptcha}</div>
        )}
      </div>

      <div className='col-12'>
        <button
          type="submit"
          className='submit_button submit_app_btn'
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AppointForm;
