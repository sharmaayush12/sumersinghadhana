import React from 'react';
import parse from 'html-react-parser';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../Style.css'
export default function HeroStyle3({ title, scrollingText, thumbnailSrc }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <>
      {/* <section
        className="cs_hero cs_style_3 cs_bg_filed cs_center"
        style={{ backgroundImage: `url(${thumbnailSrc})` }}
      > */}
      <Slider {...settings}>
        <div>
          <img src={require('../../Assets/image00001.jpeg')} className='slider_img' />
        </div>
        <div>
          <img src={require('../../Assets/image00002.jpeg')} className='slider_img' />
        </div>
        <div>
          <img src={require('../../Assets/image00003.jpeg')} className='slider_img' />
        </div>
        <div>
          <img src={require('../../Assets/image00004.jpeg')} className='slider_img' />
        </div>
        <div>
          <img src={require('../../Assets/image00005.jpeg')} className='slider_img' />
        </div>
        <div>
          <img src={require('../../Assets/image00006.jpeg')} className='slider_img' />
        </div>
      </Slider>
      {/* <div className="container">
        <div className="cs_hero_text position-relative">
          <h1 className="cs_hero_title cs_fs_68 text-uppercase">
            {parse(title)}
          </h1>
          <div className="cs_moving_text_wrap">
            <div className="cs_moving_text_in">
              <div className="cs_moving_text">{scrollingText}</div>
              <div className="cs_moving_text">{scrollingText}</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* </section> */}
    </>
  );
}
