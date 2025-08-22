import React from 'react'

const BestSelling = () => {
  return (
    <div className='best-selling'>
        <div className='best-selling-top-text'>
            <h1>Best Selling</h1>
            <p>Unmatched design - superior performance and customer satisfaction in one.</p>
        </div>
        <div className='best-selling-image-container'>
            <div className='best-selling-img img1'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&width=660" alt="" />
                <div className='best-selling-img-text'>
                    <h4>High Neck Jumper</h4>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4>$250.00</h4>
                </div>
                {/* <div className="best-selling-second-img">
                    <img src="https://demo-milano.myshopify.com/cdn/shop/files/4_4_45faf918-dd6f-4e39-be59-dc66e7becead.webp?v=1742481531&width=660" alt="" />
                </div> */}
            </div>
            <div className='best-selling-img img2'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/6_5.webp?v=1742480969&width=660" alt="" />
                <div className='best-selling-img-text'>
                    <h4>Flowing Parka</h4>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4>$250.00</h4>
                </div>
            </div>
            <div className='best-selling-img img3'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&width=660" alt="" />
                <div className='best-selling-img-text'>
                    <h4>Belted Blezer Dress</h4>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4>$250.00</h4>
                </div>
            </div>
            <div className='best-selling-img img4'>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660" alt="" />
                <div className='best-selling-img-text'>
                    <h4>Zip Neck Jumper</h4>
                    <p>⭐⭐⭐⭐⭐</p>
                    <h4>$250.00</h4>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BestSelling