import React from 'react'

const Header = () => {
  const toggleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  };

  return (
    <>
      <div className='flex justify-between max-w-350 mx-auto mt-10 p-6 shadow-black-1000 shadow-2xl hover:scale-102 transition-all duration-300 nav-color rounded-3xl'>
        <div className="img"></div>

        <button 
          className="sm:hidden text-white hover:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className='hidden lg:flex gap-4 items-center mr-10'>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div id="mobile-menu" className="lg:hidden hidden p-4 max-w-350 mx-auto mt-2 shadow-black-1000 shadow-xl nav-color rounded-3xl">
        <ul className='space-y-4'>
          <li className="p-2">Home</li>
          <li className="p-2">Menu</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
