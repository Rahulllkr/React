import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-img'>
            <img src="//demo-milano.myshopify.com/cdn/shop/files/logo.png?v=1742650856&amp;width=330" sizes="90px" loading="lazy" fetchpriority="high" class="header__normal-logo"  alt="Milano shopify theme (password: 1)"></img>
        </div>
        <div className='nav-middle'>
            <h3>Home</h3>
            <h3>Shop</h3>
            <h3>Products</h3>
            <h3>Pages</h3>
            <h3>Blog</h3>
            <h3>Buy Theme!</h3>
        </div>
        <div className=''>
            <div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            </div>
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            </div>
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar