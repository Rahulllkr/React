import React from 'react'

const CustomerReview = () => {
  return (
    <div className='customer-review-container'>
        <div className='customer-review-top-text'>
            <h1>Happy Customer</h1>
            <p>Customer love our products and we always strives to please them all.</p>
        </div>
        <div className='customer-review-content'>
            <div className='customer-review-content-container'>
                <div className='customer-review-image'>
                    <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs2_new_testi1.webp?v=1748226426&width=550" alt="" />
                </div>
                <div className='customer-review-text'>
                    <div className='customer-review-text-upper'>
                        <p>⭐⭐⭐⭐⭐</p>  
                        <h4>Cameron Smith. <i style={{color:"rgba(0,0,0,.658)",fontWeight:"100"}}> ✔️Vefified Buyer</i> </h4>
                        <p>A Perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗</p>                      
                    </div>
                    <div className='customer-review-text-lower'>
                        <div className='customer-review-text-lower-img'>
                            <img src="https://demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&width=660" alt="" />
                        </div>
                        <div className='customer-review-text-lower-content'>
                            <div className='customer-review-text-lower-text'>
                                <h3>Waistcoat with Pocket</h3>
                            </div>
                            <div className='customer-review-text-lower-price'>
                                <h4 className='current-price'>$270.00</h4>
                                <h4 className='before-price'>$300.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customer-review-content-container'>
                <div className='customer-review-image'>
                    <img src="https://demo-milano.myshopify.com/cdn/shop/files/preview_images/1eaa97de0c0144f1b7f5fdd677932d3b.thumbnail.0000000000.jpg?v=1742637599&width=500" alt="" />
                </div>
                <div className='customer-review-text'>
                    <div className='customer-review-text-upper'>
                        <p>⭐⭐⭐⭐⭐</p>  
                        <h4>Algistino Lionel. <i style={{color:"rgba(0,0,0,.658)",fontWeight:"100"}}> ✔️Vefified Buyer</i> </h4>
                        <p>A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend! 😊</p>
                    </div>
                    <div className='customer-review-text-lower'>
                        <div className='customer-review-text-lower-img'>
                            <img src="https://demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&width=660" alt="" />
                        </div>
                        <div className='customer-review-text-lower-content'>
                            <div className='customer-review-text-lower-text'>
                                <h3>Zip neck jumper</h3>
                            </div>
                            <div className='customer-review-text-lower-price'>
                                <h4 className='current-price'>$270.00</h4>
                                <h4 className='before-price'>$300.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default CustomerReview