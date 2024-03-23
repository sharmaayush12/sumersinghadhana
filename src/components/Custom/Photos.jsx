import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import {useState} from 'react';
import {    Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
    EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode} from 'swiper/modules';


const Photos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); 
    const pagination = { 
        clickable: true, 
        renderBullet: function (index, className) { 
            return '<span class="' + className + '">' + (index + 1) + '</span>'; 
        }, 
    };
  return (
    <section className="photoSection">
    {/* <div className= "images1">
     <img src ={require('../../Assets/1.png')}  className="image1"/>  
     <img src ={require('../../Assets/2.png')}  className="image1"/> 
     <img src ={require('../../Assets/3.png')}  className="image1"/> 
     <img src ={require('../../Assets/4.png')}  className="image1"/> 
     <img src ={require('../../Assets/5.png')}  className="image1"/> 
     <img src ={require('../../Assets/6.png')}  className="image1"/> 
     <img src ={require('../../Assets/7.png')}  className="image1"/> 
     <img src ={require('../../Assets/8.png')}  className="image1"/> 

     <h1>Photos  Pages </h1>
    </div> */}
   
   <Swiper 
     effect={'coverflow'} 
     grabCursor={true} 
     centeredSlides={false} 
     slidesPerView={4} 
     autoplay={{ delay: 2500, disableOnInteraction: false, }} 
     coverflowEffect={{ 
       rotate: 50, 
       stretch: 0, 
       depth: 100, 
       modifier: 1, 
       slideShadows: true, 
     }} 
     pagination={{ 
         clickable: true, 
       }} 
     modules={[EffectCoverflow, Pagination, Autoplay]} 
     className="mySwiper"
    > 
      <SwiperSlide> <img src ={require('../../Assets/1.png')} />  </SwiperSlide> 
      <SwiperSlide>     <img src ={require('../../Assets/2.png')} /> </SwiperSlide> 
      <SwiperSlide> <img src ={require('../../Assets/3.png')} />  </SwiperSlide> 
      <SwiperSlide>     <img src ={require('../../Assets/4.png')} /> </SwiperSlide> 
      <SwiperSlide> <img src ={require('../../Assets/5.png')} />  </SwiperSlide> 
            <SwiperSlide>     <img src ={require('../../Assets/6.png')} /> </SwiperSlide> 
            <SwiperSlide>     <img src ={require('../../Assets/7.png')} /> </SwiperSlide> 
            <SwiperSlide>     <img src ={require('../../Assets/8.png')} /> </SwiperSlide> 
      
       
    </Swiper>

   
    </section>
  )
}

export default Photos
