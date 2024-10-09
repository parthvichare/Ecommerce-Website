import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../cloth_data.json"; // Or fetch from API


const ProductImages = () => {
  //Retrieve id from the url
  const { id } = useParams();

  //Retrieve product details based on the product id
  const product = products.find((p) => p.id === parseInt(id));

  //State Management
  const [mainImage, setMainImage] = useState(product.image.image_1); //Main Display Image
  const [selectedImage, setSelectedImage] = useState(product.image.image_1); //Selected the thubnail Image

  //Filtering the Null url of Images
  const filteredImages = Object.values(product.image).filter((img) => img);

  //Filtering Images
  const [currentIndex, setCurrentIndex] = useState(() => {
    return filteredImages.indexOf(product.image.image_1);
  }); //getting the currentIndex of the Image(0,1,2,3,4.5)

  //Navigation functions
  // Go to Next Image
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % filteredImages.length;
      setMainImage(filteredImages[nextIndex]);
      setSelectedImage(filteredImages[nextIndex]);
      return nextIndex;
    });
  };

  // Go to Prev Image
  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + filteredImages.length) % filteredImages.length;
      setMainImage(filteredImages[newIndex]);
      setSelectedImage(filteredImages[newIndex]);
      return newIndex;
    });
  };

  //Render when the update in the currentIndex and filteredImages
  useEffect(() => {
    setMainImage(filteredImages[currentIndex]);
    setSelectedImage(filteredImages[currentIndex]);
    console.log(currentIndex);
    console.log(filteredImages);
  }, [currentIndex, filteredImages]);

  return (
    <div className="laptop:flex s:flex justify-center">
      {/* Thumbnails */}
      <div className="s:hidden laptop:block laptop-l:block laptop:w-20 mt-2">
        {filteredImages.map((img, index) => (
          <div
            key={index}
            className={`mb-3 cursor-pointer w-[68px] ${
              img === selectedImage
                ? "border-zinc-900 border-2 shadow-lg rounded-lg"
                : "rounded-lg"
            } p-1`} // Add padding
            onClick={() => {
              setSelectedImage(img);
              setMainImage(img);
              setCurrentIndex(index); // Sync the current index with selected thumbnail
            }}
          >
            <img
              src={img}
              className="h-[80px] w-[100px] cursor-pointer rounded-sm"
              alt={`Product Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="relative s:px-6 m:w-full l:w-full  tablet:w-full laptop:px-0 laptop:w-[384px]  laptop-l:w-[600px] transition-transform duration-500"
        key={product.id}
      >
        <img
          src={mainImage}
          className="s:w-svw s:h-[408px] m:w-full m:h-[490px] l:w-full laptop-l:h-[830px] laptop-l:w-[4000px] tablet:h-[820px] tablet:w-full laptop:w-[800px] laptop:h-[650px] rounded-lg border-2"
          alt={product.name}
          onClick={(e) => {
            const clickX = e.clientX - e.target.getBoundingClientRect().left;
            const imgWidth = e.target.clientWidth;

            if (clickX < imgWidth / 2) {
              goToPrevImage();
            } else {
              goToNextImage();
            }
          }}
        />

        <button
          onClick={goToPrevImage}
          className="absolute laptop:hidden tablet:block transform left-0 -translate-y-1/2 p-2 rounded-l  text-black"
          style={{ width: "50px", height: "50px" }}
        >
          <svg
            focusable="false"
            width="28"
            height="28"
            class="icon icon--nav-arrow-left  icon--direction-aware "
            viewBox="0 0 17 14"
          >
            <path
              d="M17 7H2M8 1L2 7l6 6"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            ></path>
          </svg>
        </button>

        <button
          onClick={goToNextImage}
          className="absolute laptop:hidden tablet:block transform right-0 -translate-y-1/2 p-2 rounded-l  pl-5 text-black"
          style={{ width: "60px", height: "60px" }}
        >
          <svg
            focusable="false"
            width="28"
            height="28"
            class="icon icon--nav-arrow-right  icon--direction-aware "
            viewBox="0 0 17 14"
          >
            <path
              d="M0 7h15M9 1l6 6-6 6"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductImages;
