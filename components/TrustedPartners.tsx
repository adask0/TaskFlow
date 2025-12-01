"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function TrustedPartners() {
  const images = [
    { src: "/companies/Jurkum.png", alt: "Jurkum" },
    { src: "/companies/Amazon.png", alt: "Amazon" },
    { src: "/companies/Cheil.png", alt: "Cheil" },
    { src: "/companies/EuroKolchoz.png", alt: "EuroAssistant" },
    { src: "/companies/Google.webp", alt: "Google" },
    { src: "/companies/Meta.png", alt: "Meta" },
    { src: "/companies/PZPN.png", alt: "PZPN" },
    { src: "/companies/Skynet.svg", alt: "Skynet" },
  ];

  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 my-8">
      <h1 className="text-4xl font-bold text-center text-[#102c4d] mb-8">
        Zaufali nam
      </h1>
      <div className="flex flex-row overflow-hidden">
        <img
          src={images[currentState].src}
          alt={images[currentState].alt}
          className="w-auto h-16 m-auto"
        />
      </div>
    </div>
  );
}

export default TrustedPartners;
