import React from 'react'

const Menu = () => {
  return (
    <>
    <div className='menu-color beige mx-auto min-w-full sm:w-3/4 lg:w-1/2 '>
    <div className='flex flex-col gap-10 lg:flex-row justify-between items-center m-auto p-6 md:p-10 lg:p-20'>
    <div className='w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-4 md:mb-7'>Indulge in the Essence of Indian Flavors</h2>
      <p className='text-sm mb-4 md:mb-7 px-4 lg:px-0'>Our menu is a celebration of the rich culinary traditions of India, offering a wide range of dishes that are sure to delight your palate.</p>
      <button className='border-1 btn border-black-100 text-sm rounded-lg p-2 hover:scale-105 transition-transform'>
        View Our Menu
      </button> </div>
     <div className='platter sm:w-3/4 min-w-100 lg:w-1/2'></div>
    </div>
    </div>

   
<div className='menu-color mx-auto my-10 commitment'>
  <div className='flex flex-col-reverse lg:flex-row justify-between items-center m-auto p-6 md:p-10 lg:p-20'>
    <div className='w-full lg:w-1/2'>
      <div className='veggies w-full h-[300px] sm:h-[400px] lg:h-[500px]'></div>
    </div>
    
    <div className='w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0'>
      <h2 className='text-2xl sm:text-3xl font-bold mb-4 md:mb-7'>Our Commitment to Quality</h2>
      <p className='text-sm mb-4 md:mb-7 px-4 lg:px-0'>At Rudra, we are dedicated to providing the finest Indian cuisine that celebrates the rich culinary heritage of India. Our commitment to quality is reflected in every dish we serve.</p>
      <button className='border-1 btn border-black-100 text-sm rounded-lg p-2 hover:scale-105 transition-transform'>
        Learn More
      </button>
    </div>
  </div>
</div>
      </>
  )
}

export default Menu
