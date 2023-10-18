// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   phoneNumber: Yup.string().required('Phone Number is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   message: Yup.string(),
// });

// function AppointForm() {


//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const initialValues = {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     message: '',
//   };
//   const form = useRef();

//   const handleEmailSubmit = (e) => {
//     if (e) {

//       emailjs.sendForm('service_yyw3xjf', 'template_wtcqpmn', form.current, '0TuMNYpjMibrVv9hJ')
//         .then(

//           (result) => {
//             setShow(true);
//             console.log(result.text);

//             formik.resetForm();
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: handleEmailSubmit,
//   });

//   return (
//     <div>
//     <form className='appointment_form' ref={form} onSubmit={formik.handleSubmit}>
//       <div className="col-12">
//         <label className="label_font" htmlFor="name">
//           Name*
//         </label>
//       </div>
//       <div className='col-12'>
//         <input
//           className='input_area'
//           type="text"
//           id="name"
//           name="name"
//           placeholder='Enter Name'
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           required
//           autoComplete="off"
//         />
//         {formik.touched.name && formik.errors.name && (
//           <div className="error">{formik.errors.name}</div>
//         )}
//       </div>

//       <div className="col-12">
//         <label className="label_font" htmlFor="name">
//           Phone Number*
//         </label>
//       </div>
//       <div className='col-12'>
//         <input
//           className='input_area'
//           type="number"
//           id="phoneNumber"
//           name="phoneNumber"
//           placeholder='Enter Phone Number'
//           value={formik.values.phoneNumber}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           required
//           autoComplete="off"
//         />
//         {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//           <div className="error">{formik.errors.phoneNumber}</div>
//         )}
//       </div>
//       <div className="col-12">
//         <label className="label_font" htmlFor="email">
//           Email*
//         </label>
//       </div>
//       <div className='col-12'>
//         <input
//           className='input_area'
//           type="email"
//           id="email"
//           name="email"
//           placeholder='Enter Email'
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           required
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div className="error">{formik.errors.email}</div>
//         )}
//       </div>
//       <div className="col-12">
//         <label className="label_font" htmlFor="message">
//           Message:
//         </label>
//       </div>
//       <div className='col-12'>
//         <input
//           className='input_area input_msg'
//           type="text"
//           id="message"
//           name="message"
//           placeholder='Message'
//           value={formik.values.message}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           required
//         />
//         {formik.touched.message && formik.errors.message && (
//           <div className="error">{formik.errors.message}</div>
//         )}
//       </div>

//       {/* Repeat the above pattern for other input fields */}

//       <div className='col-12 recaptcha mt-2'>
//         <ReCAPTCHA
//           sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//           onChange={(value) => formik.setFieldValue('recaptcha', value)}
//         />
//         {formik.touched.recaptcha && formik.errors.recaptcha && (
//           <div className="error">{formik.errors.recaptcha}</div>
//         )}
//       </div>

//       <div className='col-12'>
//         <button
//           type="submit"
//           className='submit_button submit_app_btn'
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//     <div className='appoint_form_modal'>
//     <Modal show={show} onHide={handleClose}>

//         <Modal.Body>Thank you for submitting your appointment request !</Modal.Body>
//         <Modal.Footer>
//           <Button className='form_modal_button' onClick={handleClose}>
//             Ok
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>

//     </div>
//   );
// }

// export default AppointForm;










// import React, { useRef, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   phoneNumber: Yup.string().required('Phone Number is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   message: Yup.string(),
// });

// function AppointForm() {


//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const initialValues = {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     message: '',
//   };
//   const form = useRef();


//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     // onSubmit: handleEmailSubmit,
//   });

//   return (
//     <div>
//     <form className='appointment_form' ref={form} onSubmit={formik.handleSubmit}>
// <div className="col-12">
//   <label className="label_font" htmlFor="name">
//     Name*
//   </label>
// </div>
// <div className='col-12'>
//   <input
//     className='input_area'
//     type="text"
//     id="name"
//     name="name"
//     placeholder='Enter Name'
//     value={formik.values.name}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     required
//     autoComplete="off"
//   />
//   {formik.touched.name && formik.errors.name && (
//     <div className="error">{formik.errors.name}</div>
//   )}
// </div>

// <div className="col-12">
//   <label className="label_font" htmlFor="name">
//     Phone Number*
//   </label>
// </div>
// <div className='col-12'>
//   <input
//     className='input_area'
//     type="number"
//     id="phoneNumber"
//     name="phoneNumber"
//     placeholder='Enter Phone Number'
//     value={formik.values.phoneNumber}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     required
//     autoComplete="off"
//   />
//   {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//     <div className="error">{formik.errors.phoneNumber}</div>
//   )}
// </div>
// <div className="col-12">
//   <label className="label_font" htmlFor="email">
//     Email*
//   </label>
// </div>
// <div className='col-12'>
//   <input
//     className='input_area'
//     type="email"
//     id="email"
//     name="email"
//     placeholder='Enter Email'
//     value={formik.values.email}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     required
//   />
//   {formik.touched.email && formik.errors.email && (
//     <div className="error">{formik.errors.email}</div>
//   )}
// </div>
// <div className="col-12">
//   <label className="label_font" htmlFor="message">
//     Message:
//   </label>
// </div>
// <div className='col-12'>
//   <input
//     className='input_area input_msg'
//     type="text"
//     id="message"
//     name="message"
//     placeholder='Message'
//     value={formik.values.message}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     required
//   />
//   {formik.touched.message && formik.errors.message && (
//     <div className="error">{formik.errors.message}</div>
//   )}
// </div>

//       {/* Repeat the above pattern for other input fields */}

//       <div className='col-12 recaptcha mt-2'>
//         <ReCAPTCHA
//           sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//           onChange={(value) => formik.setFieldValue('recaptcha', value)}
//         />
//         {formik.touched.recaptcha && formik.errors.recaptcha && (
//           <div className="error">{formik.errors.recaptcha}</div>
//         )}
//       </div>

//       <div className='col-12'>
//         <button
//           type="submit"
//           className='submit_button submit_app_btn'
//         >
//           Submit
//         </button>
//       </div>
//     </form>
// <div className='appoint_form_modal'>
// <Modal show={show} onHide={handleClose}>

//     <Modal.Body>Thank you for submitting your appointment request !</Modal.Body>
//     <Modal.Footer>
//       <Button className='form_modal_button' onClick={handleClose}>
//         Ok
//       </Button>
//     </Modal.Footer>
//   </Modal>
// </div>

//     </div>
//   );
// }

// export default AppointForm;








// import React, { useRef, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   phoneNumber: Yup.string().required('Phone Number is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   message: Yup.string(),
//   recipientEmail: Yup.string().email('Invalid recipient email').required('Recipient Email is required'),
//   emailSubject: Yup.string().required('Email Subject is required'),
//   recaptcha: Yup.string().required('Please complete the CAPTCHA'),
// });

// function AppointForm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const initialValues = {
//     name: '',
//     phoneNumber: '',
//     email: '',
//     message: '',
//     recipientEmail: '',
//     emailSubject: '',
//     recaptcha: '',
//   };

//   const form = useRef();

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values) => {
//       console.log('Form submitted:', values);
//       const formData = new FormData(form.current);

//       try {
//         const response = await fetch('http://192.168.1.11:919/send_email', {
//           method: 'POST',
//           body: formData,
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log('data', data);
//           setShow(true);
//         } else {
//           console.error('Failed to submit the form');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   });

//   return (
//     <div>
//       <form className="appointment_form" ref={form} onSubmit={formik.handleSubmit}>
//         <div className="col-12">
//           <label className="label_font" htmlFor="name">
//             Name*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="text"
//             id="name"
//             name="name"
//             placeholder='Enter Name'
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//             autoComplete="off"
//           />
//           {formik.touched.name && formik.errors.name && (
//             <div className="error">{formik.errors.name}</div>
//           )}
//         </div>

//         <div className="col-12">
//           <label className="label_font" htmlFor="name">
//             Phone Number*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="number"
//             id="phoneNumber"
//             name="phoneNumber"
//             placeholder='Enter Phone Number'
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//             autoComplete="off"
//           />
//           {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//             <div className="error">{formik.errors.phoneNumber}</div>
//           )}
//         </div>
//         <div className="col-12">
//           <label className="label_font" htmlFor="email">
//             Email*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="email"
//             id="email"
//             name="email"
//             placeholder='Enter Email'
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="error">{formik.errors.email}</div>
//           )}
//         </div>
//         <div className="col-12">
//           <label className="label_font" htmlFor="message">
//             Message:
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area input_msg'
//             type="text"
//             id="message"
//             name="message"
//             placeholder='Message'
//             value={formik.values.message}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.message && formik.errors.message && (
//             <div className="error">{formik.errors.message}</div>
//           )}
//         </div>

//         <div className="col-12 recaptcha mt-2">
//           <ReCAPTCHA
//             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//             onChange={(value) => formik.setFieldValue('recaptcha', value)}
//           />
//           {formik.touched.recaptcha && formik.errors.recaptcha && (
//             <div className="error">{formik.errors.recaptcha}</div>
//           )}
//         </div>
//         <div className="col-12">
//           <button type="submit" className="submit_button submit_app_btn" >
//             Submit
//           </button>
//         </div>
//       </form>
//       <div className='appoint_form_modal'>
//         <Modal show={show} onHide={handleClose}>

//           <Modal.Body>Thank you for submitting your appointment request !</Modal.Body>
//           <Modal.Footer>
//             <Button className='form_modal_button' onClick={handleClose}>
//               Ok
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default AppointForm;










// import React, { useRef, useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   phoneNumber: Yup.string().required('Phone Number is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   message: Yup.string(),
// });

// function AppointForm() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   const initialValues = {
//     name: 'shubham',
//     phoneNumber: '1234567890',
//     email: 'rajprajapat99@gmail.com',
//     message: 'hii',
//   };

//   const form = useRef();

//   const formik = useFormik({
//     initialValues,
//     validationSchema,
//     onSubmit: async (values) => {
//       const formData = new FormData(initialValues);

//       try {
//         const response = await fetch('http://192.168.1.11:9191/send_email', {
//           method: 'POST',
//           // body: formData,

//           headers: {
//             'Content-Type': 'application/json', // Set the Content-Type to JSON
//           },
//           body: JSON.stringify(formData),
          
        
//         });

//         if (response.ok) {
//           const data = await response.json();
//           console.log('API response data', data);
//           console.log(formData)
//           setShow(true);
//         } else {
//           console.error('Failed to submit the form');
//           console.log(formData)
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   });

//   return (
//     <div>
//       <form className="appointment_form" ref={form} onSubmit={formik.handleSubmit}>
//         <div className="col-12">
//           <label className="label_font" htmlFor="name">
//             Name*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="text"
//             id="name"
//             name="name"
//             placeholder='Enter Name'
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//             autoComplete="off"
//           />
//           {formik.touched.name && formik.errors.name && (
//             <div className="error">{formik.errors.name}</div>
//           )}
//         </div>

//         <div className="col-12">
//           <label className="label_font" htmlFor="phoneNumber">
//             Phone Number*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             placeholder='Enter Phone Number'
//             value={formik.values.phoneNumber}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//             autoComplete="off"
//           />
//           {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//             <div className="error">{formik.errors.phoneNumber}</div>
//           )}
//         </div>

//         <div className="col-12">
//           <label className="label_font" htmlFor="email">
//             Email*
//           </label>
//         </div>
//         <div className='col-12'>
//           <input
//             className='input_area'
//             type="email"
//             id="email"
//             name="email"
//             placeholder='Enter Email'
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             required
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="error">{formik.errors.email}</div>
//           )}
//         </div>

//         <div className="col-12">
//           <label className="label_font" htmlFor="message">
//             Message:
//           </label>
//         </div>
//         <div className='col-12'>
//           <textarea
//             className='input_area input_msg'
//             id="message"
//             name="message"
//             placeholder='Message'
//             value={formik.values.message}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//         </div>

//         {/* <div className='col-12 recaptcha mt-2'>
//           <ReCAPTCHA
//             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
//             onChange={(value) => formik.setFieldValue('recaptcha', value)}
//           />
//           {formik.touched.recaptcha && formik.errors.recaptcha && (
//             <div className="error">{formik.errors.recaptcha}</div>
//           )}
//         </div> */}

//         <div className='col-12'>
//           <button type="submit" className='submit_button submit_app_btn'>
//             Submit
//           </button>
//         </div>
//       </form>

//       <div className='appoint_form_modal'>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Body>Thank you for submitting your appointment request!</Modal.Body>
//           <Modal.Footer>
//             <Button className='form_modal_button' onClick={handleClose}>
//               Ok
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default AppointForm;


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
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://192.168.1.11:9191/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the Content-Type to JSON
          },
          body: JSON.stringify(values), // Send the form values as JSON
        });

        if (response.ok) {
          const data = await response.json();
          console.log('API response data', data);
          setShow(true);
        } else {
          console.error('Failed to submit the form');
        }
      } catch (error) {
        console.error(error);
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
          <label className="label_font" htmlFor="phoneNumber">
            Phone Number*
          </label>
        </div>
        <div className='col-12'>
          <input
            className='input_area'
            type="tel"
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
          <textarea
            className='input_area input_msg'
            id="message"
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
