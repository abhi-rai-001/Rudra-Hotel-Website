import React from 'react'

const Explore = () => {
  return (
    <div className='my-20 sec-color relative z-1 rounded-lg p-10 h-150'>
      <h2 className='text-center text-4xl font-bold mb-20 '>Explore Our Signature Dishes</h2>
      <div className='flex justify-between items-center gap-10 '>
       <div className=' w-1/3 h-80'>
       <div className='paneer m-auto'> </div>
       <h2 className='text-center mt-5 font-bold text-2xl'>Paneer Tikka</h2>
       <p className='text-center mt-5 text-sm'>A rich and creamy dish made with soft, succulent cubes of paneer immersed in a velvety, spiced tomato gravy. This indulgent curry is a perfect blend of aromatic spices and smooth butter, delivering a satisfying and savory experience with every bite.</p>
       </div>
       <div className=' w-1/3 h-80'>
       <div className='mushroom m-auto'> </div>
       <h2 className='text-center mt-5 font-bold text-2xl'>Mushroom Masala</h2>
       <p className='text-center mt-5 text-sm'>Fresh mushrooms cooked in a deliciously spiced, tangy gravy, combining the earthy flavors of the mushrooms with a rich blend of tomatoes, onions, and fragrant Indian spices. This dish is a perfect balance of texture and taste, making it a must-try for any curry lover!</p>
       </div>
       <div className=' w-1/3 h-80'>
       <div className='dal m-auto'> </div>
       <h2 className='text-center mt-5 font-bold text-2xl'>Dal Tadka</h2>
       <p className='text-center mt-5 text-sm'>A comforting bowl of golden lentils, simmered to perfection with a harmonious mix of spices, tomatoes, and a dash of ghee. It’s hearty, nourishing, and full of flavors that warm your soul, best enjoyed with a side of steaming rice or roti.</p>
       </div>
      </div>
    </div>
  )
}

export default Explore
