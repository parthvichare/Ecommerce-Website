import React from 'react';
import Categorylist from './Categorylist'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from './CustomArrows';  //optional
import kurtiDress from './kurti.jpeg'; // Adjust the path as necessary
import FlowerKurti from './FlowerKurti.jpeg';

const products = [
  {
    id: 'EwBgJr',
    href: '/collections/all-half-saree',
    src: '//www.bullionknot.com/cdn/shop/files/Half_Saree_2_copy.png?v=1717999391',
    alt: 'Half Saree',
    title: 'HALF SAREE',
  },
  {
    id: 'newProductId',
    href: '/collections/kurti-dress',
    src: kurtiDress, // Use the imported image here
    alt: 'Kurti Dress',
    title: 'KURTI DRESS',
  },
  {
    id: 'newProductId',
    href: '/collections/FlowerKurti',
    src:  FlowerKurti, // Use the imported image here
    alt: 'Kurti Dress',
    title: 'KURTI DRESS',
  },
  {
    id: 'WM3KLW',
    href: '/collections/saree',
    src: '//www.bullionknot.com/cdn/shop/files/Saree_2_copy_65eb2562-0ecc-4122-968d-0c0261a984a9.png?v=1718011691',
    alt: 'Saree',
    title: 'SAREE',
  },
  {
    id: 'a7Wbc7',
    href: '/collections/banarasi-dresses',
    src: '//www.bullionknot.com/cdn/shop/files/Banarasi_2_copy.jpg?v=1717999390',
    alt: 'Banarasi',
    title: 'BANARASI',
  },
  {
    id: 'DzYTMD',
    href: '/collections/long-dresses',
    src: '//www.bullionknot.com/cdn/shop/files/Ethnic_2_copy.png?v=1717999390',
    alt: 'Long Dresses',
    title: 'LONG DRESSES',
  }
];

const VarietyItems = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };


  return (
    // <div className="flex justify-center mt-10 ml-36  overflow-auto">
    <div className="mt-10 my-5 ">
      <Slider {...settings}>
        {products.map(product => (
          <Categorylist key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default VarietyItems;