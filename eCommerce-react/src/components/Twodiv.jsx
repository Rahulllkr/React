import React from 'react'

const Twodiv = () => {
  return (
    <div className='two-div'>
      <div className='two-div-first'>
        <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_1.webp?v=1748226426&width=1370" alt="" />
        <div className='two-div-text'>
          <p>SAVE 30-50% BLAZES</p>
          <h1>Colour Spotlight</h1>
          <button>Shop Now</button>
        </div>
      </div>
      <div className='two-div-second'>
        <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_2.webp?v=1748226426&width=1370" alt="" />
        <div className='two-div-text'>
          <p>LIMITED TIME ONLY</p>
          <h1>Confident Looks</h1>
          <button>Shop Now</button>
        </div>
      </div>  
    </div>
  )
}

export default Twodiv