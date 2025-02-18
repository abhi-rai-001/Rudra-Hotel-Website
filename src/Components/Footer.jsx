import React from 'react'
import instagramIcon from '../assets/svg/instagram.svg'
import facebookIcon from '../assets/svg/facebook.svg'
import twitterIcon from '../assets/svg/twitter.svg'

const date = new Date().getFullYear();

const Footer = () => {
  return (
   <div className='footer p-15  text-white flex justify-between sm:flex-row sm:text-left flex-col'>
   <div className='flex-col justify-between w-1/3 align-center m-auto sm:m-0'>
    <div className='img mb-5'></div>
    <p className='text-sm mx-10'> &copy; {date} Rudra Restaurant. All rights reserved. </p>
   </div>
   <div className='flex-col justify-between w-1/3 align-center sm:align-start mb-5 m-auto' > <ul>
    <li className='mb-5'> Quick Links </li>
    <li className='mb-2'> Home </li>
    <li className='mb-2'> Menu </li>
    <li className='mb-2'> About Us </li>
    <li className='mb-2'> Contact Us</li>
    </ul>
    </div>
   <div className=' w-1/3 flex-col justify-between align-center sm:align-start m-auto' > <ul>
    <li className='mb-5'> Connect with us </li>
    <li className='flex items-center gap-2 mb-4'>
      <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
      Instagram 
    </li>
    <li className='flex items-center gap-2 mb-4'>
      <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
      Facebook 
    </li>
    <li className='flex items-center gap-2 mb-4'>
      <img src={twitterIcon} alt="X" className="w-5 h-5" />
      X
    </li> 
    </ul>
    </div>
    
   </div>


  )
}

export default Footer
