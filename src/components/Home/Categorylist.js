// Categorylist.js
import React from 'react';

const Categorylist = ({ product }) => {
  return (
<a
  id={`block-template--16554142728368__dsio_collection_list_Vp9rUi-collection_${product.id}`}
  href={product.href}
  className="list-collections__item has-overlay image-zoom"
>
  <div className="ml-4">
    <img
      src={product.src}
      alt={product.alt}
      srcSet={`${product.src}?width=600 600w, ${product.src}?width=500 500w`}
      width="350"
      height="350"
      loading="lazy"
      sizes="(max-width: 800px) 80vw, (max-width: 999px) 100vw, 500px"
      className="md:min-w-36 md:min-h-36 min-w-36"  // Set fixed width and height using Tailwind classes
    />
  </div>
  <div className="list-collections__item-info text-container">
    <p className="flex justify-center items-center md:text-1xl">{product.title}</p>
  </div>
</a>

  );
};

export default Categorylist;

