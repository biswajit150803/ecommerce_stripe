import React from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
    <Link href='/'>
    <p style={{cursor:"pointer"}}>2022 SastaBazar Pvt. Ltd. All rights reserved</p>
    </Link>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
