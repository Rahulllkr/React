import React from 'react'

const Navbar = () => {
return (
    <div>
            <div className="nav-container">
                    <div className='nav-logo'>
                            <h2>milano</h2>
                    </div>
                    <div className='nav-link'>
                            <p>Home</p>
                            <p>Shop</p>
                            <p>Products</p>
                            <p>Pages</p>
                            <p>Blog</p>
                    </div>
                    <div className='nav-icons'>
                            <button className='search'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                            <button className='user'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ffffff" stroke-width="1.152"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill="#000000"></path> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#000000" stroke-width="0.72"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> </g></svg>
                            </button>
                            <button className='heart'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                            <button className='cart'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#000000" stroke-width="0.72"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#000000" stroke-width="0.72"></path> <path d="M11 9H8" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> </g></svg>
                            </button>
                            <button className='theme'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2V3" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M12 21V22" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M22 12L21 12" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M3 12L2 12" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M19.0708 4.92969L18.678 5.32252" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M5.32178 18.6777L4.92894 19.0706" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M19.0708 19.0703L18.678 18.6775" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M5.32178 5.32227L4.92894 4.92943" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="#000000" stroke-width="0.72" stroke-linecap="round"></path> </g></svg>
                            </button>
                    </div>
            </div>
    </div>
)
}

export default Navbar