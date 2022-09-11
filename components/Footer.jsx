import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiFillMail, AiFillPhone, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
    <Link href='/'>
    <p style={{cursor:"pointer",fontSize:"25px"}}>2022 SastaBazar Pvt. Ltd. All rights reserved</p>
    </Link>
      <p>Get in touch with Us....</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <Link href="mailto:query@sastabazar.com" style={{cursor:"pointer"}}>
        <AiFillMail />
          </Link>       
      </p>
      <p>Or call us at our tollfree nummber 1800 123 768</p> 
    </div>
  );
};

export default Footer;



