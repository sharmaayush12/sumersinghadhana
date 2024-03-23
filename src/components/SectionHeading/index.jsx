import React from 'react';
import parse from 'html-react-parser';

export default function SectionHeading({
  title,
  variantColor,
  variant,
}) {
  return (
    <div
      className={`cs_section_heading cs_style_1 ${
        variant ? variant : ''
      } text-center`}
    >
      <div className="cs_height_10 cs_height_lg_5" />
      <h2
        className={`cs_section_title cs_fs_50 mb-0 ${
          variantColor ? variantColor : ''
        }`}
      >
                    <div class="content">
		<h2>{parse(title)}</h2>
		
	</div>
        {/* {parse(title)} */}
      </h2>
    </div>
  );
}
