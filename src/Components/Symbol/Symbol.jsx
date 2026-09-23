import React from 'react'
import './Symbol.css'

import spring from '../../assets/spring.webp'
import epicor from '../../assets/epicor.png'
import sales from '../../assets/sales.png'
import ddi from '../../assets/ddi.png'
import adobe from '../../assets/adobe.png'
import big from '../../assets/big.png'
import eci from '../../assets/eci.png'
import dynamics from '../../assets/dynamics.jpeg'
import oracle from '../../assets/oracle.png'
import distribution from '../../assets/distribution.png'
import infor from '../../assets/infor.png'
import hubspot from '../../assets/hubspot.png'
import sage from '../../assets/sage.png'
import shopify from '../../assets/shopify.png'

const images = [
  epicor,
  sales,
  ddi,
  adobe,
  big,
  eci,
  dynamics,
  oracle,
  distribution,
  infor,
  hubspot,
  sage,
  shopify
]

const Symbol = () => {
  return (

    <div id="integrations-section" className='symbol-container'>

      {/* TOP SECTION */}

      <div className='top-section'>

        <h1 className='symbol-title'>
          You deserve the best in <br />
          class support and service
        </h1>

        <p className='symbol-desc'>
          Rated #1 for Ease of Use ERP Systems, Support, and Good Partner
          across API Management and E-Commerce Data Integration Categories
        </p>

        <img
          src={spring}
          alt='Spring Report'
          className='spring-image'
        />

      </div>

      {/* MIDDLE SECTION */}

      <div className='middle-section'>

        <h1 className='symbol-title'>
          Unlock your competitive advantage.
          <br />
          Connect your business systems today.
        </h1>

        <p className='desc2'>
          Automate your manual work by integrating all your systems in one
          place, creating a unified view of data across manufacturing and
          distribution operations.
        </p>

        {/* BUTTON */}

        <div className='btn-wrapper'>
          <button className='symbol-btn'>
            Book a Demo
          </button>
        </div>

      </div>

      {/* LOGO SECTION */}

      <div className='image-wrapper'>

        {images.map((img, index) => (

          <div className='logo-card' key={index}>

            <img
              src={img}
              alt={`logo-${index}`}
              className='logo-image'
            />

          </div>

        ))}

      </div>

    </div>
  )
}

export default Symbol