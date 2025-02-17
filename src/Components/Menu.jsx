import React from 'react'

const Menu = () => {
  return (
    <>
    <div className='menu-color beige mx-auto'>
    <div className=' flex justify-between items-center m-auto p-20'>
    <div className='w-1/3 '>
      <h2 className='text-3xl font-bold mb-7'>Indulge in the Essence of Indian Flavors</h2>
      <p className='text-sm mb-7'>Our menu is a celebration of the rich culinary traditions of India, offering a wide range of dishes that are sure to delight your palate.</p>
      <button className='border-1 btn border-black-100 text-sm rounded-lg p-2 '>View Our Menu </button> </div>
     <div className='w-1/2 platter'></div>
    </div>
    </div>

   
<div className='menu-color mx-auto my-10 commitment'>
        <div className='flex justify-between items-center m-auto p-20'>
        <div className='w-1/3 veggies'></div>
        <div className='w-1/2'>
        <h2 className='text-3xl font-bold mb-7'>Our Commitment to Quality</h2>
        <p className='text-sm mb-7'>At Rudra, we are dedicated to providing the finest Indian cuisine that celebrates the rich culinary heritage of India. Our commitment to quality is reflected in every dish we serve.</p>
        <button className='border-1 btn border-black-100 text-sm rounded-lg p-2 '>Learn More</button></div>
      </div>
      </div>
      </>
  )
}

export default Menu
