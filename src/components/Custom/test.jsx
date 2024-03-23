import React from 'react'

import {
  Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
  EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode
} from 'swiper/modules';


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/effect-cube';
import media62 from '../../Assets/image00001.jpeg';
import media63 from '../../Assets/image00001.jpeg';
import media64 from '../../Assets/image00001.jpeg';



const test = () => {
  return (



    <div className='bg-info' style={{ height: "60vh" }}>
      <section className='row'>
        <section className='col-4 bg-danger'>
          <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
            pagination={true} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube">
            <SwiperSlide><img src={media62} alt="" /></SwiperSlide>
            <SwiperSlide><img src={media63} alt="" /></SwiperSlide>
            <SwiperSlide><img src={media64} alt="" /></SwiperSlide>
          </Swiper>

        </section>
        <section className='col-6'></section>
      </section>

    </div>







  )
}

export default test
