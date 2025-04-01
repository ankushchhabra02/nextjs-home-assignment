"use client";

import React from "react";
import Slider, { CustomArrowProps } from "react-slick"; // Import proper type
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Huge Community of Experts",
    description:
      "We bring together verified college professors, practicing scientists, independent researchers, freelance journalists, and thousands of other experts in different fields of study.",
    icon: "🔗",
  },
  {
    title: "Affordable Prices",
    description:
      "We use high-tech solutions such as AI-based tools to automate and optimize plagiarism and grammar checking, offering exceptional quality at affordable prices.",
    icon: "💰",
  },
  {
    title: "Data Security",
    description:
      "We care about your security and encrypt all personal data, ensuring a safe and private experience while using our platform.",
    icon: "🔒",
  },
  {
    title: "Safe Payment Methods",
    description:
      "We offer modern and safe payment options like PayPal, Payoneer, and Visa/Mastercard, with flexible payment plans.",
    icon: "💳",
  },
];

// Fix: Use `CustomArrowProps` type instead of `any`
const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="absolute bottom-[-50px] left-1/2 translate-x-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
    onClick={onClick}
  >
    <ArrowRight className="w-5 h-5 text-gray-700" />
  </button>
);

const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    className="absolute bottom-[-50px] left-1/2 -translate-x-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
    onClick={onClick}
  >
    <ArrowLeft className="w-5 h-5 text-gray-700" />
  </button>
);

const CardCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[70%] mx-auto py-10 px-4 relative mt-22 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6 relative">
        <span className="text-purple-400">
          <svg
            className="absolute bottom-0 left-70" // Fix: Correct Tailwind class
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
        Studybay anywhere with ExpertBuddy
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <div className="p-8 bg-white shadow-lg rounded-lg w-full mx-auto">
                <div className="flex flex-col items-start">
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
