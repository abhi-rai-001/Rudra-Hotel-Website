import React from 'react'
import instagramIcon from '../assets/svg/instagram.svg'
import facebookIcon from '../assets/svg/facebook.svg'
import twitterIcon from '../assets/svg/twitter.svg'

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='footer p-8 text-white flex justify-between flex-col sm:flex-row'>
      <div className='flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-8 sm:mb-0'>
        <div className='img mb-5'></div>
        <p className='text-sm text-center sm:text-left'> &copy; {date} Rudra Restaurant. All rights reserved. </p>
      </div>
      
      <div className='flex flex-col items-center sm:items-start w-full sm:w-1/3 mb-8 sm:mb-0'>
        <ul className='text-center sm:text-left'>
          <li className='mb-4 font-semibold'> Quick Links </li>
          <li className='mb-3'> Home </li>
          <li className='mb-3'> Menu </li>
          <li className='mb-3'> About Us </li>
          <li className='mb-3'> Contact Us</li>
        </ul>
      </div>

      <div className='flex flex-col items-center sm:items-start w-full sm:w-1/3'>
        <ul className='text-center sm:text-left'>
          <li className='mb-4 font-semibold'> Connect with us </li>
          <li className='flex items-center gap-2 mb-3'>
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
            Instagram 
          </li>
          <li className='flex items-center gap-2 mb-3'>
            <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
            Facebook 
          </li>
          <li className='flex items-center gap-2 mb-3'>
            <img src={twitterIcon} alt="X" className="w-5 h-5" />
            X
          </li> 
        </ul>
      </div>
    </div>
  )
}

export default Footer
