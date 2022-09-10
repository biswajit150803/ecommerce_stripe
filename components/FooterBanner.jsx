import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const FooterBanner = ({ footerBanner:{discount,largeText1,largeText2,saleTime,smallText,midText,desc,product,buttonText,image} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <p style={{fontWeight:"bold"}}>{discount}</p>
        <h3>{largeText1}</h3>
        <h3>{largeText2}</h3>
        <p style={{fontWeight:"bold"}}>{saleTime}</p>
        </div>
        <div className="right">
           <p style={{fontWeight:"bold"}}>{smallText}</p>
           <h3>{midText}</h3>
           <p>{desc}</p>
           <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
           </Link>
        </div>
        <img className="footer-banner-image" src={urlFor(image)} />
      </div>
    </div>
  );
};

export default FooterBanner;
