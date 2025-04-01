import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "John B.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/expertbuddy.png",
      rating: 5,
      svgIcon: "/eb.svg",
    },
    {
      id: 2,
      name: "John B.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/trustpilot.png",
      rating: 5,
      svgIcon: "/ts.svg",
    },
    {
      id: 3,
      name: "John B.",
      description: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/sitejabber.png",
      rating: 5,
      svgIcon: "/sb.svg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <section className="max-w-6xl mx-auto text-center mt-8">
      {/* Reviews Heading */}
      <h2 className="text-3xl font-bold text-gray-900 relative">
        <span className="text-purple-400 ">
          <svg
            className="absolute bottom-0 left-55"
            width="44"
            height="79"
            viewBox="0 0 64 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.8375 77.1016C15.0432 64.8053 5.63905 51.3402 1.6788 37.4794C0.262361 32.5219 11.8068 41.3766 13.0325 42.268C13.8377 42.8536 13.9113 43.1964 14.0366 41.4957C14.4862 35.3934 13.7065 29.1786 13.5346 23.0748C13.4322 19.4399 13.7981 18.4865 17.0488 21.028C21.8802 24.8052 25.041 30.0631 29.5611 34.081C31.478 35.7848 31.2933 24.9345 31.3762 24.1947C31.8263 20.1777 32.3878 13.9998 34.8904 10.5239C35.6673 9.44494 42.6421 24.244 44.8153 22.0707C49.2987 17.5873 53.4054 12.5381 56.8256 7.20273C57.0845 6.79867 60.6873 -0.836448 60.6873 3.14783C60.6873 13.6846 60.8426 23.5061 62.1548 34.0037"
              stroke="#A414D5"
              stroke-width="3.12"
              stroke-linecap="round"
            />
          </svg>
        </span>{" "}
        Reviews from XpertBuddy Community
      </h2>

      {/* Ratings Section */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <Image
            src="/expertbuddy.png"
            alt="ExpertBuddy"
            width={150}
            height={150}
          />
          {/* <span className="text-lg font-semibold">5.0</span> */}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/trustpilot.png"
            alt="Trustpilot"
            width={150}
            height={150}
          />
          {/* <span className="text-lg font-semibold">4.7</span> */}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/sitejabber.png"
            alt="Sitejabber"
            width={150}
            height={150}
          />
          {/* <span className="text-lg font-semibold">4.0</span> */}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/reviewsio.png"
            alt="Reviews.io"
            width={150}
            height={150}
          />
          {/* <span className="text-lg font-semibold">5.0</span> */}
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/reviewscentre.png"
            alt="Reviews.centre"
            width={150}
            height={150}
          />
          {/* <span className="text-lg font-semibold">5.0</span> */}
        </div>
      </div>

      {/* Review Cards Carousel */}
      {/* <div className="relative flex items-center justify-center mt-8">
        <button
          onClick={prevSlide}
          className="absolute left-[-50px] p-2 bg-white rounded-full shadow-md"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>

        <div className="flex overflow-hidden gap-4">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`p-6 border rounded-lg shadow-lg w-72 transition-all ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-95"
              }`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={review.icon}
                  alt={review.name}
                  width={30}
                  height={30}
                />
                <span className="font-bold">{review.name}</span>
              </div>
              <p className="mt-2 text-gray-600">{review.description}</p>
              <button className="mt-2 text-purple-700 font-semibold">
                Show more
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[-50px] p-2 bg-white rounded-full shadow-md"
        >
          <FaArrowRight className="text-gray-700" />
        </button>
      </div> */}
      {/* Review Cards Carousel */}
      <div className="relative flex items-center justify-center mt-8">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-[-50px] p-2 bg-white rounded-full shadow-md"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>

        {/* Review Cards */}
        <div className="flex overflow-hidden gap-4 w-full max-w-6xl justify-center">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`p-6 border rounded-lg shadow-lg w-[45%] transition-all ${
                index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-95"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                {/* Left: Name and Stars */}
                <div className="flex flex-col items-start">
                  <span className="font-bold">{review.name}</span>
                  <div className="flex mt-1 items-center gap-0.5">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                    <span className="ml-1 ">5.0</span>
                  </div>
                </div>

                {/* Right: SVG Icon (Only Render If Exists) */}
                {review.svgIcon && (
                  <Image
                    src={review.svgIcon}
                    alt="Review Icon"
                    width={30}
                    height={30}
                  />
                )}
              </div>

              {/* Description */}
              <p className="mt-2 text-gray-600">{review.description}</p>

              {/* Show More Button (Left-Aligned) */}
              <button className="mt-4 text-purple-700 font-semibold text-left">
                Show more
              </button>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-[-50px] p-2 bg-white rounded-full shadow-md"
        >
          <FaArrowRight className="text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Review;
