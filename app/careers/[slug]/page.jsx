"use client";

import { useEffect, useState, useRef } from "react";
import { motion, px } from "framer-motion";
import {
  frameParentIvert,
  frameAnimationIvert,
  pageAnimation,
  smoothFade,
} from "../../../utility/animation";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { getCareerDetails } from "../../../sanity/sanity-utils";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { PortableText } from "@portabletext/react";

const CareerDetails = () => {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;

  const [career, setCareer] = useState({});
  const [loading, setLoading] = useState(true);

  const [countryCode, setCountryCode] = useState("");
  const [mobile, setMobile] = useState("");

  const applySectionRef = useRef(null);

  useEffect(() => {
    if (slug) {
      console.log("Fetching data for slug:", slug);
      getCareerDetails(slug)
        .then((data) => {
          setCareer(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch career data:", error);
          setLoading(false);
        });
    }
  }, [slug]);

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        setCountryCode(response.data.country_code.toLowerCase());
      })
      .catch((error) => {
        console.error("Error fetching country code:", error);
      });
  }, []);

  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const handleScrollToApply = () => {
    if (applySectionRef.current) {
      applySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <p></p>;
  }

  if (!career) {
    return <p></p>;
  }

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={frameParentIvert}>
        <motion.div
          className="animation-frame one"
          variants={frameAnimationIvert}
        ></motion.div>
        <motion.div
          className="animation-frame two"
          variants={frameAnimationIvert}
        ></motion.div>
        <motion.div
          className="animation-frame three"
          variants={frameAnimationIvert}
        ></motion.div>
      </motion.div>

      <motion.section className="contact-us" variants={smoothFade}>
        <div className="container">
          <div className="career-detail-main">
            <div className="career-detail">
              <div className="img">
                <Image
                  src={career.imageURL}
                  alt="JobImg"
                  width={550}
                  height={300}
                />
              </div>
              <div className="title">
                <h1>{career.title}</h1>
                <div className="hidden form-group">
                  <button
                    type="button"
                    className="hidden normal-btn primary"
                    onClick={handleScrollToApply}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="about">
                <h2>About the job</h2>
                <PortableText value={career.about} />
              </div>
              <div className="about">
                <h2>Key responsibilities</h2>
                {/* <p>{career.responsibilities}</p> */}
                <PortableText value={career.responsibilities} />
              </div>
              <div className="skills">
                <h2>Skill(s) required</h2>
                <div className="skills-req">
                  {career.skills.map((skill) => (
                    <div className="skill" key={skill}>
                      <p>{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about">
                <h2>Who Can Apply</h2>
                {/* {career.eligibility.map((item, index) => (
                  <p key={index}>{item}</p>
                ))} */}
                <PortableText value={career.eligibility} />
              </div>
              <div className="about">
                <h2>Salary</h2>
                <p>Monthly : ₹ {career.stipend}</p>
              </div>
              <div className="skills">
                <h2>Perks</h2>
                <div className="skills-req">
                  {career.perks.map((perk, index) => (
                    <div className="skill" key={index}>
                      <p>{perk}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about">
                <h2>Number of openings</h2>
                <p>{career.noOfOpenings}</p>
              </div>
            </div>
            <div className="apply" ref={applySectionRef}>
              <div className="heading">
                <h1>Apply Now</h1>
              </div>
              <form className="contact-form">
                <div className="row">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="form-group">
                    <PhoneInput
                      country={countryCode}
                      value={mobile}
                      onChange={(phone) => setMobile(phone)}
                      inputClass="tel-input"
                      placeholder="Your Contact Number*"
                    />
                    <input type="hidden" name="mobile" value={mobile} />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Your Email*"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="upload" className="file-upload-label">
                    Upload your CV
                  </label>
                  <div className="file-upload">
                    <label htmlFor="upload" className="choose-file">
                      Choose File
                    </label>
                    <input
                      type="file"
                      id="upload"
                      onChange={handleFileChange}
                    />
                    <span className="file-chosen">{fileName}</span>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Why Should we hire you?"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="normal-btn primary">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CareerDetails;
