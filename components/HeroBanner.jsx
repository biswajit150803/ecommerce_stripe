import React from 'react'
import Link from "next/link";
import { urlFor } from '../lib/client';
const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo' style={{fontWeight:"bold",fontSize:"20px"}}>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1 >{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="fruits" className='hero-banner-image' />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
          <button type='button'>{heroBanner.buttonText}</button>          
          </Link>
          <div className='desc'>
            <h5 style={{fontSize:"30px"}}>Description</h5>
            <p style={{fontSize:"20px",fontWeight:"500",justify:"center"}}>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner