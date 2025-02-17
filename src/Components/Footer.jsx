import React from 'react'

const date = new Date().getFullYear();

const Footer = () => {
  return (
   <div className='footer p-15  text-white flex justify-between'>
   <div className='flex-col justify-between w-1/3 align-center m-auto'>
    <div className='img mb-5'></div>
    <p className='text-sm mx-10'> &copy; {date} Rudra Restaurant. All rights reserved. </p>
   </div>
   <div className='flex-col justify-between w-1/3 align-center mb-5 m-auto' > <ul>
    <li className='mb-5'> Quick Links </li>
    <li className='mb-2'> Home </li>
    <li className='mb-2'> Menu </li>
    <li className='mb-2'> About Us </li>
    <li className='mb-2'> Contact Us</li>
    </ul>
    </div>
   <div className=' w-1/3 flex-col justify-between align-center m-auto' > <ul>
    <li className='mb-5'> Connect with us </li>
    <li className='flex items-center gap-2 mb-4'> <img src="./SVG/icons8-instagram.svg" alt="Insta" /> Instagram </li>
    <li className='flex items-center gap-2 mb-4'> <img src="./SVG/icons8-facebook.svg" alt="Facebook" /> Facebook </li>
    <li className='flex items-center gap-2 mb-4'> <img src="./SVG/icons8-x.svg" alt="X" /> X</li> 
    </ul>
    </div>
    
   </div>


  )
}

export default Footer
