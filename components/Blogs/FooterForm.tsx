"use client";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "react-phone-input-2/lib/style.css";
const FooterForm = () => {
  const [emailErr, setEmailErr] = useState(null);
 

  const sendEmail = (e:any) => {
    e.preventDefault();

    let flag1 = 0,
      flag2 = 0,
      flag3 = 0,
      flag4 = 0,
      flag5 = 0,
      flag6 = 0;
    const mailCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // name validation
    
    // email validation
    const tempemail = e.target.email.value;
    if (!mailCheck.test(tempemail) || tempemail === "") {
      setEmailErr("Invalid Email Address");
      flag3 = 1;
    } else {
      setEmailErr(null);
      flag3 = 0;
    }
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
          process.env.NEXT_PUBLIC_EMAILJS_CONTACTFORM_TEMPLATE_KEY,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      toast.success(
        "Hurray!, We got your message. Our team will soon contact you.",
        {
          position: "bottom-right",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            backgroundColor: "#FFD600",
          },
        }
      );
      e.target.reset();

    }
  

  return (
    <section>
      <div className="container">

      <div className="connect-us">
        <h3 className="heading">Connect With Us</h3>
        <p className="para">
        Stay Informed With Our Daily Blogs And Updates
         </p>

        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Your Email"
            />
            <span className="error">{emailErr != null ? emailErr : ""}</span>
          </div>

          <button className="normal-btn primary">Submit</button>
          <div>
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        </form>
      </div>
      </div>
    </section>
  )
}
export default FooterForm;
