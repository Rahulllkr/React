import React from 'react'

const Category = () => {
  return (
    <div className='category'>
        <div className='category-text'>
            <h1>Shop By Category</h1>
            <p>Express your style with our standout collection-fashion meets sophistication.</p>
        </div>
        <div className='category-content'>
            <div className='images'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt3.webp?v=1745943972&width=550" alt="" />
                <h4>Denim</h4>
            </div>
            <div className='images'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt2.webp?v=1745943972&width=550" alt="" />
                <h4>Blazers</h4>
            </div>
            <div className='images'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt1.webp?v=1745943972&width=550" alt="" />
                <h4>Crop-Top</h4>
            </div>
            <div className='images'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt4.webp?v=1745943972&width=550" alt="" />
                <h4>Sweaters</h4>
            </div>
            <div className='images'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/main_clt5.webp?v=1745943972&width=550" alt="" />
                <h4>T-Shirts</h4>
            </div>
        </div>
    </div>
  )
}

export default Category