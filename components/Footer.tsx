import React from "react";
import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
];

const Footer = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2 relative">
          <span className="text-purple-400 ">
            <svg
              className="absolute bottom-0 left-120"
              width="44"
              height="79"
              viewBox="0 0 64 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8375 77.1016C15.0432 64.8053 5.63905 51.3402 1.6788 37.4794C0.262361 32.5219 11.8068 41.3766 13.0325 42.268C13.8377 42.8536 13.9113 43.1964 14.0366 41.4957C14.4862 35.3934 13.7065 29.1786 13.5346 23.0748C13.4322 19.4399 13.7981 18.4865 17.0488 21.028C21.8802 24.8052 25.041 30.0631 29.5611 34.081C31.478 35.7848 31.2933 24.9345 31.3762 24.1947C31.8263 20.1777 32.3878 13.9998 34.8904 10.5239C35.6673 9.44494 42.6421 24.244 44.8153 22.0707C49.2987 17.5873 53.4054 12.5381 56.8256 7.20273C57.0845 6.79867 60.6873 -0.836448 60.6873 3.14783C60.6873 13.6846 60.8426 23.5061 62.1548 34.0037"
                stroke="#A414D5"
                strokeWidth="3.12"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          As Seen In
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120}
              height={60}
              className="grayscale opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>

        {/* Line Separator */}
        <div className="mt-6 border-t border-gray-700 mx-auto w-4/5"></div>
      </div>
    </section>
  );
};

export default Footer;
