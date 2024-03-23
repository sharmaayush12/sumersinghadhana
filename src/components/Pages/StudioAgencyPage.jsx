import React from 'react';
import HeroStyle3 from '../Hero/HeroStyle3';
import AboutStyle3 from '../About/AboutStyle3';
import HeroStyle4 from '../Hero/HeroStyle4';
import Spacing from '../Spacing';
import ServiceStyle2 from '../Service/ServiceStyle2';
import SectionHeading from '../SectionHeading';
import Portfolio from '../Portfolio';
import Button from '../Button';
import Marquee from '../Marquee';
import BrandsStyle2 from '../Brands/BrandsStyle2';
import TeamSlider from '../Slider/TeamSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import Cta from '../Cta';
import PostGrid from '../PostGrid';
import { pageTitle } from '../../helpers/PageTitle';
const serviceData = [
  {
    number: '01',
    title: 'WP Development',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_1.jpeg',
    href: '/service/service-details',
  },
  {
    number: '02',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_2.jpeg',
    href: '/service/service-details',
  },
  {
    number: '03',
    title: 'Branding Design',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_3.jpeg',
    href: '/service/service-details',
  },
  {
    number: '04',
    title: 'On Page Optimization',
    subTitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
    thumbnailSrc: '/images/studio-agency/service_img_4.jpeg',
    href: '/service/service-details',
  },
];
const portfolioData = [
  {
    href: 'https://www.instagram.com/reel/C4XY8wwNfzM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    imgUrl: '/images/creative-agency/Video-81.jpg',
  },
  {
    href: 'https://www.instagram.com/reel/C4KsvmQt60M/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    imgUrl: '/images/creative-agency/Video-46.jpg',
    title: 'Admin dashboard UI design',
    btnText: 'See Project',
  },
  {
    href: 'https://www.instagram.com/reel/C4FUgHipQPm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    imgUrl: '/images/creative-agency/Video-17.jpg',
    title: 'Product designing with brand',
    btnText: 'See Project',
  },
  {
    href: 'https://www.instagram.com/reel/C4GEZjfpgcI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    imgUrl: '/images/creative-agency/Video-1.jpg',
    title: 'Kids education website design',
    btnText: 'See Project',
  },
];
const brandData = [
  {
    logoSrc: '/images/studio-agency/1.png',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/2.jpeg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/3.jpeg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/4.png',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/5.jpeg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/6.png',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/7.png',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/8.png',
    logoAlt: 'Partner',
  },
];
const brandDataDark = [
  {
    logoSrc: '/images/studio-agency/brand_1_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_2_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_3_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_4_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_5_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_6_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_7_dark.svg',
    logoAlt: 'Partner',
  },
  {
    logoSrc: '/images/studio-agency/brand_8_dark.svg',
    logoAlt: 'Partner',
  },
];
const teamData = [
  {
    memberImg: '/images/studio-agency/team_1.png',
    memberName: 'SUMER SINGH ADHANA',
    memberDesignation: 'Primary Consultant',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/image111.png',
    memberName: 'ALISHA',
    memberDesignation: 'Executive Assistant',
    href: '/team/Details',
  },
  {
    memberImg: '/images/studio-agency/image112.png',
    memberName: 'SUMER SINGH ADHANA',
    memberDesignation: 'Primary Consultant',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/image113.png',
    memberName: 'ALISHA',
    memberDesignation: 'Executive Assistant',
    href:'/team/Details'
  },
  {
    memberImg: '/images/studio-agency/team_1.png',
    memberName: 'SUMER SINGH ADHANA',
    memberDesignation: 'Primary Consultant',
    href: '/team/team-details',
  },
  {
    memberImg: '/images/studio-agency/111.png',
    memberName: 'ALISHA',
    memberDesignation: 'Executive Assistant',
    href: '/team/Details',
  },
  
];
const testimonialData = [
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ansari Patron',
    avatarDesignation: 'CEO at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Jhon Doe',
    avatarDesignation: 'Manager at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ramatam Coo',
    avatarDesignation: 'MD at Delta',
  },
];
const postData = [
  {
    date: '07 Mar 2023',
    title: 'Artistic mind will be great for creation anything',
    thumbnailSrc:'/images/studio-agency/team_1.png',
    href: '/blog/blog-details',
  },
  {
    date: '05 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/image111.png',
    href: '/blog/blog-details',
  },
  {
    date: '03 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/image112.png',
    href: '/blog/blog-details',
  },
  {
    date: '02 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/image113.png',
    href: '/blog/blog-details',
  },
];

export default function StudioAgencyPage({ darkMode }) {
  pageTitle('Sumer Singh Adhana');
  return (
    <>
      <HeroStyle3
        title="LONDON BASED UI/UX <br /> DESIGN & DEVELOPMENT <br /> STUDIO AGENCY"
        scrollingText="We Create Design - Build App - Website - Branding - SEO"
        thumbnailSrc={
          darkMode
            ? '/images/studio-agency/hero_bg_dark.jpg'
            : '/images/studio-agency/hero_bg.jpg'
        }
      />

      <section>
        <Spacing lg="130" md="70" />
        <AboutStyle3
          title="A Passionate Real Estate Consultant in Dubai."
          subTitle="Introducing Sumer, a driven real estate agent in Dubai. He helps clients buy and sell luxury properties and provides great customer service. He speaks Hindi, Urdu, and English well. Sumer's committed and experienced consulting guarantees careful communication and a beneficial effect on the lives of clients."
          btnText="See All Project"
          btnUrl="/about"
        />
        {/* <Spacing lg="50" md="80" /> */}
        {/* <section className="cs_primary_bg"> */}
          {/* <Spacing lg="143" md="75" /> */}
          <div className="container">
            <HeroStyle4
              title="Mastering Digital Realm, Exploring the Dynamic World of Our Digital Studio"
              subTitle="Our agency offers a comprehensive suite of lots services, including Branding, Advertising, Social marketing, Video making, and Marketing analysis."
              thumbnailSrc={
                darkMode
                  ? '/images/digital-agency/hero_bg_dark.jpeg'
                  : '/images/digital-agency/hero_bg.jpeg'
              }
              videoSrc="https://www.youtube.com/embed/jVth58B4Y-c"
              bgUrl="/images/digital-agency/Thumbnail.jpg"
            />
            {/* <Spacing lg="85" md="45" /> */}
            {/* <ServiceStyle2 variantColor="cs_color_1" data={serviceData} /> */}
          </div>
          {/* <Spacing lg="145" md="80" /> */}
        </section>
      {/* </section> */}
      <section>
        <Spacing lg="30" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work"/>
          <Spacing lg="85" md="45" />
          <Portfolio data={portfolioData} bgUrl="/images/digital-agency/Thumbnail.jpg"/>
          <Spacing lg="26" md="30" />
          <div className="text-center">
            <Button btnText="See All Project" btnUrl="/portfolio" />
          </div>
        </div>
      </section>
      <Spacing lg="135" md="70" />
      <Marquee text="Real Estate - Buy Properties - Consultants - Luxary Property " />
      <Spacing lg="84" md="50" />
      <div className="container">
        <BrandsStyle2 data={darkMode ? brandDataDark : brandData} />
      </div>
      <section className="cs_p76_full_width">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Meet our experts team"
            subTitle="Our Team"
          />
          <Spacing lg="85" md="45" />
        </div>
        <TeamSlider data={teamData} />
      </section>
      <TestimonialSlider
        layeredImages={[
          '/images/studio-agency/3.jpeg',
          '/images/studio-agency/2.jpeg',
          '/images/studio-agency/9.webp',
          '/images/studio-agency/4.png',
          '/images/studio-agency/5.jpeg',
        ]}
        data={testimonialData}
      />
      <section className="cs_shape_animation_3">
        <div className="cs_shape_1 position-absolute">
          <svg
            width={509}
            height={458}
            viewBox="0 0 509 458"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={254} cy={229} r="228.5" stroke="currentColor" />
            <circle
              cx={26}
              cy={237}
              r="25.5"
              className="anio_3_c_1"
              fill="white"
              stroke="currentColor"
            />
            <circle cx={26} cy={237} r={15} fill="currentColor" />
            <circle
              cx={483}
              cy={229}
              r="25.5"
              className="anio_3_c_1"
              fill="white"
              stroke="currentColor"
            />
            <circle cx={483} cy={229} r={15} fill="currentColor" />
          </svg>
        </div>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
          <PostGrid data={postData} />
        </div>
        <Spacing lg="150" md="80" />
      </section>
    </>
  );
}
