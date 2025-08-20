import React, { useEffect, useRef, useState } from "react";

const Room = ({ bgUrl }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 } // trigger when 30% of section is visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-[60%] border-t-2 border-t-black pt-[5vh]">
      <div className="w-full flex items-center justify-center pb-[6vh] font-Libre font-bold text-xl">
        Rooms
      </div>
      <div className="w-full flex items-center justify-center font-Libre font-bold text-3xl space-x-2 pb-2">
        Tropical breezes
      </div>
      <div className="w-full flex items-center justify-center pb-[6vh] font-Libre font-bold text-3xl space-x-2">
        grace classical rooms
      </div>

      <div>
        <div
          ref={ref}
          className="w-full h-screen bg-center transition-[background-size] duration-[2000ms] ease-in-out pt-[5vh] mt-[5vh]"
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: inView ? "100%" : "120%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="w-[100%] flex justify-between px-3 mt-[20vh] items-center">
        <div className="bg-[url('/img-5.webp')] bg-cover bg-center w-[50%] h-[40vh]"></div>
        <div className="mx-5 flex justify-center items-center flex-col text-center">
          <span className="text-xl text-white">
            The rooms at AYANA Resort are
          </span>
          <span className="text-xl text-white">
            perfectly positioned for enjoying the sunset.
          </span>
        </div>
      </div>

      <div className="w-[100%] flex justify-between px-3 mt-[20vh] items-center">
        <div className="mx-5 flex justify-center items-center flex-col text-center">
          <span className="text-xl text-white">
            The rooms at AYANA Resort are
          </span>
          <span className="text-xl text-white">
            perfectly positioned for enjoying the sunset.
          </span>
        </div>
        <div className="bg-[url('/img-6.webp')] bg-cover bg-center w-[40%] h-[30vh]"></div>
      </div>

      <div className="w-[100%] flex justify-between px-3 mt-[20vh] items-center">
        <div className="bg-[url('/img-5.webp')] bg-cover bg-center w-[30%] h-[20vh]"></div>
        <div className="mx-5 flex justify-center items-center flex-col text-center">
          <span className="text-xl text-white">
            The rooms at AYANA Resort are
          </span>
          <span className="text-xl text-white">
            perfectly positioned for enjoying the sunset.
          </span>
        </div>
      </div>

      <div className="relative w-full flex flex-col justify-center items-center mt-[90vh]">
        <span className="text-xl text-white font-bold font-Libre space-x-5">Anaya Bali Resort</span>
        <span className="text-3xl text-white font-bold font-Libre space-x-5 mt-5">Rooms</span>
        <div className=" h-15 border-l-2 border-white mt-5 z-21"></div>
        <div className="absolute w-full hover:bg-[#f5f2e6] h-40 mt-60 bg-[#4d4b49] border-black border-1 z-20 p-3">
            <div className=" text-white hover:text-[#4d4b49] w-full h-full border-[#dcdcdc] border-1 hover:border-b-3 flex justify-center items-center flex-col">
                <div className="relative text-xl font-Libre font-bold space-x-4 w-full text-center">View Rooms</div>
                {/* <div className="sticky bottom-0 border-2 border-white"></div> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
