import React, { useEffect, useRef, useState } from "react";

const Image_dection = ({
  bgUrl,
  heading,
  content_1,
  content_2,
  definition,
}) => {
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
    <div
       ref={ref}
      className="w-full h-screen bg-center transition-[background-size] duration-[2000ms] ease-in-out pt-[5vh] mt-[5vh]"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: inView ? "100%" : "120%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full px-[5vw] text-white text-2xl font-bold font-Libre">{heading}</div>
      <div className="w-full flex justify-between">
        <div className="text-white text-2xl font-bold font-Libre flex flex-col px-[5vw] mt-10">
          <span>{content_1}</span>
          <span>{content_2}</span>
        </div>
        <span className="w-[30%] text-2xl text-white font-bold px-[5vw]">
          {definition}
        </span>
      </div>
    </div>
  );
};

export default Image_dection;
