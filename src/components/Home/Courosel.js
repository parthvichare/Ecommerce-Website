import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Courosel = () => {
  // Images Data
  const images=[
    {
      'id':'1',
      'image':'//www.bullionknot.com/cdn/shop/files/Website_-_photo_-_1_copy_offer.jpg?v=1720877029&width=3000',
      'height':'2000',
      'width':'3000',
      'size':'250vw',
      'alt':'Image 1'
    },
    {
      'id':'2',
      'image':'//www.bullionknot.com/cdn/shop/files/Perfect_for_this_Rakhi_design_copy_new_code_design.jpg?v=1721036363&amp;width=3000',
      'height':'2000',
      'width':'3000',
      'size':'250vw',
      'alt':'Image 2'
    },
    {
      'id':'3',
      'image':'//www.bullionknot.com/cdn/shop/files/website_banner_monsoon_arrival_copy_new.jpg?v=1720877029&width=3000',
      'height':'2000',
      'width':'3000',
      'size':'250vw',
      'alt':'Image 3'
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3500, // Delay between slides in milliseconds
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />
  };

  return(
    <div class='w-full mx-auto'>
    <Slider {...settings}>
      {images.map((image)=>(
          <div key={image.id}>
              <img src={image.image} width={image.width} height={image.height} sizes={image.size} alt={image.alt} className="w-full"/>
          </div>
      ))}
    </Slider>
    </div>
  )
}

export default Courosel