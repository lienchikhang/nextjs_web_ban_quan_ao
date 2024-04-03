'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from '@/styles/slider.module.scss';
import Image from 'next/image';

const Slider = () => {
  return (
    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className={`mySwiper ${styles.mySlider}`}>
      <SwiperSlide>
        <Image
          className={styles.image}
          src='/assets/images/banner1.png'
          alt='Home banner slide'
          width={1920}
          height={100}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          className={styles.image}
          src='/assets/images/banner2.png'
          alt='Home banner slide'
          width={1920}
          height={100}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider