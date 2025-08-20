import { useEffect, useState } from "react";
import Card from "./Card";
import Image_dection from "./Image_dection";
import Room from "./Room";

export default function Section_2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // curve factor (increase multiplier for deeper pull effect)
  const curve = Math.sin(scrollY / 200) * 60;

  return (
    <div
      className="relative w-full h-fit mt-[150vh] z-20 bg-[#f5f2e6] transition-all duration-200 flex flex-col items-center"
      style={{
        clipPath: `path("M0 ${curve}
                    Q50% ${-curve * 1.5} 100% ${curve}
                    L100% calc(100% - ${curve}px)
                    Q50% calc(100% + ${curve * 1.5}px) 0 calc(100% - ${curve}px)
                    Z")`,
      }}
    >
      <div className="flex w-[60%] justify-center text-xl pt-[20vh]">
        {/* Left line */}
        <div className="flex-1 h-px bg-[#b06f33] mt-4"></div>

        {/* SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="25"
          viewBox="0 0 23 25"
          className="mx-4"
        >
          <path
            d="M19.33,5l-5.382,12h-.489l4.893-12h.979Z"
            fill="#b06f33"
          ></path>
          <path d="M23,11l-8.073,8h-.493l7.339-8h1.227Z" fill="#b06f33"></path>
          <path d="M0,11l8.073,8h.493L1.227,11H0Z" fill="#b06f33"></path>
          <path d="M3.67,5l5.382,12h.489L4.648,5h-.979Z" fill="#b06f33"></path>
          <path
            d="M11.987,0l-.275,17h-.432l-.273-17h.98Z"
            fill="#b06f33"
          ></path>
          <path
            d="M11.498,19c-2.432,0-4.404,1.791-4.404,4h8.807c0-2.209-1.972-4-4.404-4Z"
            fill="#b06f33"
          ></path>
          <path d="M9.052,24h4.893v1h-4.893v-1Z" fill="#b06f33"></path>
        </svg>

        {/* Right line */}
        <div className="flex-1 h-px bg-[#b06f33] mt-4"></div>
      </div>

      <div className="w-[60%] justify-between h-6 border-x-2 border-[#b06f33]"></div>

      <div className="w-[60%] flex flex-col justify-center items-center">
        <p className="font-Libre space-x-0.5 py-1 mt-2">
          <span className=" text-sm text-[#575755]">AYANA BALI</span>
          &nbsp;&nbsp;<span className=" text-lg text-[#333333]">RESORT</span>
        </p>
        <p className="font-Libre text-3xl space-x-4 text-[#333333] py-2">
          FOUR &nbsp;&nbsp; JOURNEYS
        </p>
        <p className="font-Libre text-3xl text-[#575755] py-2">
          THAT WILL TAKE YOU TO A
        </p>
        <p className="font-Libre text-3xl text-[#575755] py-2">BLUE PARADISE</p>
      </div>

      <div className="w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center my-5">
        <Card
          className="text-sm sm:text-base"
          num="01"
          cont_1="Where the forest greets"
          cont_2="the sea in embrace"
          cont_3="1-1/1-2/1-3"
        />
        <Card
          className="text-sm sm:text-base"
          num="02"
          cont_1="Where the forest greets"
          cont_2="the sea in embrace"
          cont_3="1-1/1-2/1-3"
        />
        <Card
          className="text-sm sm:text-base"
          num="03"
          cont_1="Where the forest greets"
          cont_2="the sea in embrace"
          cont_3="1-1/1-2/1-3"
        />
        <Card
          className="text-sm sm:text-base"
          num="04"
          cont_1="Where the forest greets"
          cont_2="the sea in embrace"
          cont_3="1-1/1-2/1-3"
        />
      </div>

      <div className="w-[90%] z-20 flex flex-col">
        <Image_dection
          bgUrl={"/img-3.webp"}
          heading={"Chapter 01"}
          content_1={"Where The Forest Greets"}
          content_2={"The See In Embrace"}
          definition={
            "Welcome to your dream paradise. Bathed in sunlight and touched by a gentle sea breeze, the vibrant blue of the Ocean invites you in"
          }
        />

        <Image_dection
          bgUrl={"/img-4.webp"}
          heading={"Chapter 02"}
          content_1={"Where The Forest Greets"}
          content_2={"The See In Embrace"}
          definition={
            "Welcome to your dream paradise. Bathed in sunlight and touched by a gentle sea breeze, the vibrant blue of the Ocean invites you in"
          }
        />

        <Image_dection
          bgUrl={"/img-1.webp"}
          heading={"Chapter 03"}
          content_1={"Where The Forest Greets"}
          content_2={"The See In Embrace"}
          definition={
            "Welcome to your dream paradise. Bathed in sunlight and touched by a gentle sea breeze, the vibrant blue of the Ocean invites you in"
          }
        />
      </div>

      <div className="w-full flex justify-center items-center mt-[15vh] z-20">
        <Room bgUrl={"/img-6.webp"} />
      </div>

      <div className="absolute mt-[540vh] w-full h-[300vh] bg-cover bg-center bg-[url('/img-7.webp')]"></div>

      <div className="relative w-[80%] flex mt-[30vh] justify-between">
        <div className="sticky top-20 w-[20%] mr-5 flex flex-col mt-3 text-left border-t-2 pt-2 pl-2 h-full">
          <span>Information for</span>
          <span>your stay</span>
        </div>
        <div className="flex flex-col w-[70%]">
          <div className="mt-3 flex items-center border-t-2 border-b-2 border-b-black text-lg pt-8 pb-15 hover:opacity-25">
            For those who want to enjoy AYANA BALI RESORT to the fullest
          </div>

          <div className="mt-5 pt-3 w-full flex flex-col pb-4 hover:opacity-25">
            <div className="flex justify-between w-full px-2 items-center border-b-1 border-amber-950 pb-5">
              <span className="text-2xl">
                Recommended ways to spend time around the resort
              </span>
              <span className="text-8xl text-amber-950 cursor-pointer">+</span>
            </div>
          </div>

          <div className="mt-5 pt-3 w-full flex flex-col pb-4 hover:opacity-25">
            <div className="flex justify-between w-full px-2 items-center border-b-1 border-amber-950 pb-5">
              <span className="text-2xl">Accommodation package plans</span>
              <span className="text-8xl text-amber-950 cursor-pointer">+</span>
            </div>
          </div>

          <div className="mt-5 pt-3 w-full flex flex-col pb-4 hover:opacity-25">
            <div className="flex justify-between w-full px-2 items-center border-b-1 border-amber-950 pb-5">
              <span className="text-2xl">
                We offer itineraries to help you enjoy AYANA BALI to the fullest
              </span>
              <span className="text-8xl text-amber-950 cursor-pointer">+</span>
            </div>
          </div>

          <div className="h-[20vh] w-full"></div>
        </div>
      </div>
      <div className="w-[80%] border-5 border-[#e6e3d8] h-[30vh] mb-[10vh] flex flex-col justify-center items-center">
        <span className=" space-x-5 text-2xl">Discover the latest <span className="text-[#a9a9a6] hover:opacity-35 cursor-pointer">AYANA BALI</span> RESORTS</span>
        <span className="mt-4 flex justify-center items-center text-2xl hover:opacity-35"><span className="hover:opacity-35">logo</span><span className="h-8 border-r-1 border-dotted border-[#a9a9a6] w-1 mx-5"></span><span className="hover:opacity-35">logo</span></span>
      </div>
    </div>
  );
}
