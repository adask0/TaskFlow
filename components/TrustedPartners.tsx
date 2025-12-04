"use client";

import React, { useState, useEffect, useRef } from "react";

function TrustedPartners() {
  const images = [
    { src: "/companies/Jurkum.png", alt: "Jurkum" },
    { src: "/companies/Amazon.png", alt: "Amazon" },
    { src: "/companies/Cheil.png", alt: "Cheil" },
    { src: "/companies/EuroKolchoz.png", alt: "EuroAssistant" },
    { src: "/companies/Google.webp", alt: "Google" },
    { src: "/companies/Meta.png", alt: "Meta" },
    { src: "/companies/PZPN.png", alt: "PZN" },
    { src: "/companies/Skynet.svg", alt: "Skynet" },
  ];

  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 769) {
        setMobile(true);
        console.log("mobile");
      } else {
        setMobile(false);
        console.log("desktop");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  const duplicatedImages = [...images, ...images, ...images];
  const [offset, setOffset] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 769
        ? 200 * images.length
        : 300 * images.length;
    }
    return 300 * images.length;
  });
  const [hover, setHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hover) {
      const interval = setInterval(() => {
        setOffset((prev) => {
          const newOffset = prev - 1;

          if (Math.abs(newOffset) >= 300 * images.length) {
            return 0;
          }

          return newOffset;
        });
      }, 20);

      return () => clearInterval(interval);
    }
  }, [images.length, hover]);

  return (
    <div className="p-4 my-8">
      <h1 className="text-4xl font-bold text-center text-[#102c4d] mb-8">
        Zaufali nam
      </h1>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex flex-row gap-[50px] h-[150px] md:h-[200px] py-[1.2rem]"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onMouseEnter={() => {
                setHover(true);
                console.log("działa");
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className="h-[100%] w-[150px] md:w-[250px] flex-shrink-0 px-[25px] py-[0.8rem] rounded-[1rem] shadow-[10px_10px_10px_0px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in hover:translate-y-[-5px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedPartners;
