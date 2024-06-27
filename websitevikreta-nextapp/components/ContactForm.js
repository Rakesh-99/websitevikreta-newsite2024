"use client";
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
   const formRef = useRef();
   const [nameErr, setNameErr] = useState(null);
   const [emailErr, setEmailErr] = useState(null);
   const [mobileErr, setMobileErr] = useState(null);
   const [mobile, setMobile] = useState('');
   const [service, setService] = useState('');
   const [budget, setBudget] = useState('');

   const services = [
      'Web Design',
      'Web Development',
      'MVPs',
      'Mobile Apps',
      'E-commerce',
      'UI/UX & Prototyping',
      'Web Apps'
   ];

   const sendEmail = (e) => {
      e.preventDefault();

      const stringCheck = /^[a-zA-Z\s]*$/;
      const mailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

      // name validation
      const tempname = e.target.name.value;
      if (!stringCheck.test(tempname) || tempname === "") {
         setNameErr("Invalid Name");
      } else {
         setNameErr(null);
      }

      // contact validation
      if (mobile === "" || mobile.length < 10) {
         setMobileErr("Invalid Contact Number");
      } else {
         setMobileErr(null);
      }

      // email validation
      const tempemail = e.target.email.value;
      if (!mailCheck.test(tempemail) || tempemail === "") {
         setEmailErr("Invalid Email Address");
      } else {
         setEmailErr(null);
      }

      if (nameErr || mobileErr || emailErr) {
         return;
      }

      // Create a FormData object to pass to emailjs.sendForm
      const formData = new FormData(formRef.current);
      formData.set('serviceNeeded', service);
      formData.set('budget', budget);

      emailjs.sendForm(
         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
         process.env.NEXT_PUBLIC_EMAILJS_CONTACTFORM_TEMPLATE_KEY,
         formRef.current,
         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // This is the userID
      )
      .then((result) => {
         console.log(result.text);
         toast.success('Hurray!, We got your message. Our team will soon contact you.', {
            position: "bottom-right",
            style:{
               border: '1px solid #713200',
               padding: '16px',
               backgroundColor: '#FFD600',
            },
         });
         e.target.reset();
         setMobile(''); // Reset mobile state
         setService('');
         setBudget('');
      }, (error) => {
         console.log(error.text);
         toast.error('Oops! Something went wrong. Please try again later.', {
            position: "bottom-right",
            style: {
               border: '1px solid #713200',
               padding: '16px',
               backgroundColor: '#FFD600',
            },
         });
      });
   }

   return (
      <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
         <div className="row">
            <div className="form-group">
               <input type="text" className="form-control" name="name" placeholder="Your Name" />
               <span className="error">{nameErr != null ? nameErr : ""}</span>
            </div>
            <div className="form-group">
               <PhoneInput
                  country={'in'}
                  value={mobile}
                  onChange={(phone) => setMobile(phone)}
                  inputClass="form-control"
                  placeholder="Your Contact Number"
               />
               <span className="error">{mobileErr != null ? mobileErr : ""}</span>
               {/* Hidden input field for mobile number */}
               <input type="hidden" name="mobile" value={mobile} />
            </div>
         </div>
         <div className="form-group">
            <input type="text" className="form-control" name="email" placeholder="Your Email" />
            <span className="error">{emailErr != null ? emailErr : ""}</span>
         </div>
         <div className="form-group">
            <select className="form-control" name="serviceNeeded" onChange={(e) => setService(e.target.value)} value={service}>
               <option value="">Service Needed</option>
               {services.map((option) => (
                  <option key={option} value={option}>{option}</option>
               ))}
            </select>
         </div>
         <div className="form-group">
            <input type="text" className="form-control" name="budget" placeholder="Your Budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
         </div>
         <div className="form-group">
            <textarea className="form-control" name="message" placeholder="What's your query"></textarea>
         </div>
         <button type="submit" className="normal-btn primary">Send an Enquiry</button>
         <Toaster position="bottom-right" reverseOrder={false} />
      </form>
   )
}

export default ContactForm;
