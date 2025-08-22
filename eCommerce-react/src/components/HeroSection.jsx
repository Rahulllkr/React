import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import './HeroSection.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSection = () => {
  return (
    <div>
        <Swiper pagination = {{type : 'progressbar',}} navigation = {true} modules = {[Pagination,Navigation]} className = "mySwiper">
            <SwiperSlide>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s1.webp?v=1748226426&width=2400" alt="image" />
                <div className='slide-content'>
                    <p className='slide-text'>MODERN EVERYDAY LOOKS</p>
                    <h1 className='slide-heading'>Soft Comfort Bold Looks</h1>
                    <button className='slide-button'>Shop Collection</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s2.webp?v=1748226426&width=2400" alt="image" />
                <div className='slide-content'>
                    <p className='slide-text'>ELEVATE YOUR STYLE</p>
                    <h1 className='slide-heading'>Women's Fashion Collection</h1>
                    <button className='slide-button'>Shop Collection</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default HeroSection