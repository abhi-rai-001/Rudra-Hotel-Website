import React from 'react'

const Explore = () => {
  return (
    <div className='my-20 m-auto w-full sec-color relative z-1 rounded-lg p-4 sm:p-6 md:p-10 min-h-150'>
      <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-20'>Explore Our Signature Dishes</h2>
      
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10'>
        <div className='w-full lg:w-1/3 h-auto mb-10 lg:mb-0'>
          <div className='paneer m-auto'></div>
          <h2 className='text-center mt-4 md:mt-5 font-bold text-xl sm:text-2xl'>Paneer Tikka</h2>
          <p className='text-center mt-3 md:mt-5 text-sm px-4'>A rich and creamy dish made with soft, succulent cubes of paneer immersed in a velvety, spiced tomato gravy. This indulgent curry is a perfect blend of aromatic spices and smooth butter, delivering a satisfying and savory experience with every bite.</p>
        </div>

        <div className='w-full lg:w-1/3 h-auto mb-10 lg:mb-0'>
          <div className='mushroom m-auto'></div>
          <h2 className='text-center mt-4 md:mt-5 font-bold text-xl sm:text-2xl'>Mushroom Masala</h2>
          <p className='text-center mt-3 md:mt-5 text-sm px-4'>Fresh mushrooms cooked in a deliciously spiced, tangy gravy, combining the earthy flavors of the mushrooms with a rich blend of tomatoes, onions, and fragrant Indian spices. This dish is a perfect balance of texture and taste, making it a must-try for any curry lover!</p>
        </div>

        <div className='w-full lg:w-1/3 h-auto'>
          <div className='dal m-auto'></div>
          <h2 className='text-center mt-4 md:mt-5 font-bold text-xl sm:text-2xl'>Dal Tadka</h2>
          <p className='text-center mt-3 md:mt-5 text-sm px-4'>A comforting bowl of golden lentils, simmered to perfection with a harmonious mix of spices, tomatoes, and a dash of ghee. It's hearty, nourishing, and full of flavors that warm your soul, best enjoyed with a side of steaming rice or roti.</p>
        </div>
      </div>
    </div>
  )
}

export default Explore
