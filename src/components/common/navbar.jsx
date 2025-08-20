import React, { useState } from "react";

const menu_list = [
  "Hotels",
  "Dining",
  "Spa",
  "Experiences",
  "Weddings",
  "Meetings",
  "Offers",
];

const menu_list2 = ["Resort Map", "Curated Journeys", "Access"];

const Navbar = () => {
  const [menu, setMenu] = useState("Hotels");

  return (
    <>
      <div className="w-full flex justify-center mt-5 relative">
        {/* Left - Fixed Logo */}
        <div className="fixed left-2 top-2 w-[10%] font-bold text-white border-b border-white py-2 z-21">
          Logo-Tool
        </div>

        {/* Middle Section (scrollable) */}
        <div className="flex justify-between w-[70%] border-b border-white">
          <div className="mx-2 font-bold cursor-pointer text-white transition duration-300 ease-in hover:opacity-25">
            Bali
          </div>
          <div className="flex font-bold">
            {menu_list.map((item, index) => (
              <span
                key={index}
                className={`mx-2 hover:opacity-25 text-white cursor-pointer transition duration-300 ease-in whitespace-nowrap ${
                  menu === menu_list[index]
                    ? "border-b-4 border-white opacity-50 rounded-b-md"
                    : ""
                }`}
                onClick={() => setMenu(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex font-bold">
            {menu_list2.map((item, index) => (
              <span
                key={`ms-${index}`}
                className={`mx-2 hover:opacity-25 text-white cursor-pointer transition duration-300 ease-in whitespace-nowrap ${
                  menu === menu_list2[index] ? "border-b-4 opacity-25" : ""
                }`}
                onClick={() => setMenu(item)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Fixed Reserve */}
        <div className="fixed right-2 top-2 text-white w-[10%] font-bold border-b border-white pr-2 cursor-pointer hover:opacity-25 flex flex-row gap-4 hover:flex-row-reverse transition duration-300 ease-in hover:justify-evenly z-90 py-2">
          <div>Reserve</div>
          <div className="h-2 w-2 bg-white rounded-full mt-2.5"></div>
        </div>
      </div>

      <div className="w-[70%] flex justify-between items-center mt-2 ml-[6vw]">

        <div className="flex pl-[15%] font-semibold text-[1.5xl]">
          <span className=" text-white">Hotels &nbsp;&nbsp;{'>'}&nbsp;&nbsp;</span>
          <span className="hover:opacity-50">
            <span className=" text-white opacity-75">
              AYANA BALI
            </span>{" "}
            <span className="text-white hover:text-shadow-white">
              RESORT
            </span>
          </span>
        </div>

        <div className="flex gap-1 text-white">
            <span className="flex gap-1 justify-center items-center opacity-55">Overview <span className="border-1 border-[#3a3a39] rounded-full flex justify-center items-center h-5 w-5 pb-1">{'>'}</span></span>
            <span className="ml-2 flex gap-1 justify-center items-center hover:opacity-55">Rooms<span className="border-1 border-[#3a3a39] rounded-full flex justify-center items-center h-5 w-5 pb-1">{'>'}</span></span>
            <span className=" px-2 py-1 bg-[#747472] ml-2 flex gap-1 justify-center items-center hover:opacity-65">Reserve AYANA Resort</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
