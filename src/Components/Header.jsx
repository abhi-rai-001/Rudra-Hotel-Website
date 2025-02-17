import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between max-w-350 mx-auto mt-10 p-6 shadow-black-1000 shadow-2xl hover:scale-102 transition-all duration-300 nav-color rounded-3xl'>
    
        <div className="img"> </div>      
      <ul className='flex gap-4 items-center mr-10'>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </>
  )
}

export default Header
