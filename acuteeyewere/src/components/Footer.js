import React from 'react'
import { icons } from 'react-icons';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";
const Footer = () => {
  return  (
    <> 
    <footer className="py-4">
       <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
            <div className="footer-top-data d.flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0 text-white"> Sign Up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
           <input
              type="text" class="form-control py-1"
              placeholder="Your Email Address" 
              aria-label="Your Email Address" 
              aria-describedby="basic-addon2"
  />
           <span className="input-group-text p-2" id="basic-addon2">
           Subscribe
              </span>
              </div>
          </div>
        </div>
       </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h3 className="text-white  mb-4">Contact Us</h3>
            <div>
              <address className="text-white fs-6">Acute Eyewear,
                Hope Medical Centre,
                Gali No 1,<br /> MITC Colony,
                Karnal Road, Kaithal  <br/>
                136027 (Near Padma City Mall) <br />Haryana
                 <br />
                
              </address>
              <a href="tel: +90 8755491511" className="mt-3 d-block mb-1 text-white">
               +91 8755491511
               </a>
               <a href="mailto:acuteeyewearsolution@gmail.com"
                className="mt-2 d-block mb-0 text-white">
               acuteeyewearsolution@gmail.com
               </a>
               <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="">
                  <BsInstagram className="text-white fs-4"/>
                </a>
                <a className="text-white" href="">
                 <BsYoutube className="text-white fs-4"/>
                </a>
                <a className="text-white" href="">
                  <BsLinkedin className="text-white fs-4"/>
                </a>
                <a className="text-white" href="">
                  <BsGithub className="text-white fs-4"/>
                </a>


               </div>
            </div>
          </div>
          <div className="col-3">
            <h3 className="text-white  mb-4">Information</h3>
            <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link className="text-white py-2 mb-1">Refund Policy</Link>
              <Link className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link className="text-white py-2 mb-1">Term & Condition</Link>
              <Link className="text-white py-2 mb-1">Blog</Link>
              
               </div>
          </div>
          <div className="col-3">
            <h3 className="text-white  mb-4">Account</h3>
            <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">About Us</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
          </div>
          <div className="col-2">
            <h3 className="text-white  mb-4">Quick Links</h3>
            <div className="footer-link d-flex flex-column">
            <Link className="text-white py-2 mb-1">Frame</Link>
              <Link className="text-white py-2 mb-1">Sunglasses</Link>
              <Link className="text-white py-2 mb-1">Contact Lens</Link>
              <Link className="text-white py-2 mb-1">Reading Glass</Link>
              
               </div>
          </div>
        </div>

      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
            &copy; {new Date().getFullYear()}; Powered by Developer's Corner
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;