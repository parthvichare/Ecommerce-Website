// import React from 'react'

// const BestSeller = () => {
//   return (
//     <div>
//       <div class='border-2 border-stone-900'></div>
//       <h1 class='flex justify-center items-center mb-96 md:text-5xl'>BestSeller</h1>
      
//     </div>
//   )
// }

// export default BestSeller

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from './CustomArrows';



const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3500, // Delay between slides in milliseconds
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  return (
    <div className="w-full mx-auto">
       <h1 class='flex justify-center items-center  md:text-5xl'>BestSeller</h1>
       <Slider {...settings}>
      <div class='flex justify-center items-center'>
        <h3 class='flex justify-center items-center text-9xl'>1</h3>
      </div>
      <div>
        <h3 class='flex justify-center items-center text-9xl'>2</h3>
      </div>
      <div>
        <h3 class='flex justify-center items-center text-9xl'>3</h3>
      </div>
      <div>
        <h3 class='flex justify-center items-center text-9xl'>4</h3>
      </div>
      <div>
        <h3 class='flex justify-center items-center text-9xl'>5</h3>
      </div>
      <div>
        <h3 class='flex justify-center items-center text-9xl'>6</h3>
      </div>
    </Slider>
    </div>
  );
}

export default BestSeller




