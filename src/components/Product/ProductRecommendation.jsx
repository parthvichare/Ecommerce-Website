import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const ProductRecommendation = ({item}) => {
  const[hoverProductId,setHoveredProductId]=useState(null)
  return (
    <div className="mx-2 laptop:mr-8 tablet:ml-4">
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
        {item.map((item, index) => (
        <div
        key={index.id}
        className="p-2 mt-5"
        onMouseEnter={() => setHoveredProductId(item.id)}
        onMouseLeave={() => setHoveredProductId(null)}
        style={{ position: "relative" }} // Ensure the image container is relative
      >
        <Link to={`/product/${item.id}`}>
          <div className="relative">
            <img
              src={
                hoverProductId === item.id
                  ? item.image.image_3
                  : item.image.image_1
              }
              className="w-full rounded-lg cursor-pointer transition-shadow duration-500"
              alt={item.name}
            />
            {/* {Show Wishlist svg} */}
            <Link
              to="/wishlist"
              className="absolute inset-0 flex justify-center items-center"
            >
              <button className="bg-white bg-opacity-50 border rounded-full w-8 h-8 flex justify-center items-center absolute top-2 right-1 tablet:w-8 tablet:h-8">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="heart"
                  className="h-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  color="rgb(159 44 0)"
                >
                  <path
                    fill="currentColor"
                    d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                  ></path>
                </svg>
              </button>
            </Link>

            {/* Show the eyeszoom Out SVG when hovering */}
            {hoverProductId === item.id && (
              <div className="absolute inset-0 flex justify-center items-center transition-transform duration-700 ease-in-out translate-y-10 hover:translate-y-2">
                <div className="bg-white rounded-full py-2 px-4 absolute bottom-16">
                  <svg
                    fill="#000000"
                    width="32"
                    height="36"
                    className=""
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512"
                  >
                    <g>
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center items-center mt-5 text-center transition-opacity duration-500">
            <span className="text-xs font-semibold s:font-bold tablet:text-sm w-full laptop:text-lg text-slate-700">
              {item.name}
            </span>
            <div>
              <span className="flex justify-center items-center mt-1">
                <span className="text-base font-bold tablet:mx-2 tablet:text-lg laptop:text-lg text-slate-700">
                  {item.prices.displayprice} INR 
                </span>
              </span>
            </div>
          </div>
        </Link>
      </div>
        ))}
      </div>
    </div>
  )
}

export default ProductRecommendation
