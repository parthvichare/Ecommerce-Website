import React from 'react';

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-28 top-1/3 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    style={{ zIndex: 10 }}
  >
    &#10094; {/* Left arrow character */}
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-28 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 "
    style={{ zIndex: 10 }}
  >
    &#10095; {/* Right arrow character */}
  </button>
);

export { PrevArrow, NextArrow };