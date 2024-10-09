import React from 'react';


const SidebarPrice = ({ minPrice,maxPrice,onMinPriceChange,onMaxPriceChange }) => {

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center border rounded-md">
                    <span className="px-2">₹</span>
                    <input
                        id="minPrice"
                        type="number"
                        value={minPrice}
                        onChange={onMinPriceChange}
                        className="w-20 p-2 rounded-r-md focus:outline-none"
                        placeholder="300"
                    />
                </div>
                <span className="mx-2">to</span>
                <div className="flex items-center border rounded-md">
                    <span className="px-2">₹</span>
                    <input
                        id="maxPrice"
                        type="number"
                        value={maxPrice}
                        onChange={onMaxPriceChange}
                        className="w-20 p-2 rounded-r-md focus:outline-none"
                        placeholder="5000"
                    />
                </div>
            </div>
        </>
    );
};

export default SidebarPrice;
