import React from 'react';

const Categorylist = () => {
  return (
    // Marque Scrolling
    <div>
    <div className="flex justify-center my-10 md:mx-40 mx-5">
      <div className="bg-white w-full">
        <div className="w-full">
          <div className="mx-2">
            <marquee scrollamount="11" direction="right">
              <p className="scroll_text text-red-500 text-2xl">
                Use code BKFIRST to get 5% off. &nbsp;Use code BKFIRST to get 5% off. &nbsp;Use code BKFIRST to get 5% off. &nbsp;
              </p>
            </marquee>
          </div>
        </div>
      </div>
    </div>
    <div class='border-2 border-stone-900'></div>
    </div>
  );
}

export default Categorylist;