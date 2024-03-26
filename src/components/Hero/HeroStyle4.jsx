import React from 'react';
import VideoModal from '../VideoModal';

export default function HeroStyle4({ videoSrc, bgUrl, thumbnailSrc }) {
  return (
    <section
      className="cs_hero cs_style_4 position-relative"
      style={{
        backgroundImage: `url(${thumbnailSrc})`,
      }}
    >
      <div className="container">
        <div className="cs_hero_text position-relative">
          <h1 className="cs_hero_title cs_fs_68">
            Know More About Sumer Singh Adhana
          </h1>
        </div>
        <div className="align-items-center">
          <div>
            <VideoModal videoSrc={videoSrc} bgUrl={bgUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
