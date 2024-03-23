import React from 'react';
import Button from '../Button';
import '../Style.css'

export default function AboutStyle3({ title, subTitle, btnText, btnUrl }) {
  return (
    <div className="container">
      <div className="cs_cta cs_style_2">
        <h2 className="cs_cta_title cs_fs_68">{title}</h2>
        <div className="cs_cta_in">
          <div className="cs_cta_left">

            <span className="cs_cta_icon">
              <img src={require('../../Assets/image00005.jpeg')} className='into_img'/>
            </span>
          </div>

          <div className="cs_cta_right">
            <h3 className="cs_cta_subtitle cs_fs_21 cs_semibold cs_secondary_color cs_fs_21">
              {subTitle}
            </h3>
            {/* <Button btnText={btnText} btnUrl={btnUrl} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
