import React, { useEffect } from "react";
import { UseMenu } from "./MenuContext";
import Sidebarmenu from "./Sidebarmenu";

const MenuToggle = () => {
  const { isOpenMenu, ToggleMenu } = UseMenu();

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  });

  return (
    <div>
      <button className="laptop-l:hidden text-purple-700" onClick={ToggleMenu}>
        <svg
          focusable="false"
          width="28"
          height="18"
          className="ml-5 md:ml-auto"
          viewBox="0 0 18 14"
        >
          <path
            d="M0 1h18M0 13h18H0zm0-6h18H0z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
      <div>
        
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 z-20 h-full bg-white transform transition-transform duration-700 ease-in-out ${
            isOpenMenu ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "24rem" }}
        >
          <Sidebarmenu isOpenMenu={isOpenMenu} ToggleMenu={ToggleMenu} />
        </div>

        <div
            className={`fixed top-0 inset-0 bg-black  z-10 transition-opacity duration-300 ${
              isOpenMenu ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            onClick={ToggleMenu}
        ></div>
      </div>
    </div>
  );
};

export default MenuToggle;

{
  /* <div
className={`fixed top-0 right-0 z-20 h-full bg-orange-600 transform transition-transform duration-700 ease-in-out ${
  isOpen ? 'translate-x-0' : 'translate-x-full'
}`}
style={{ width: '24rem' }}  // Adjust the width as needed
>
<Sidebar isOpen={isOpen} toggleSearchbar={toggleSearchbar} />
</div> */
}
