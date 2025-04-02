"use client";
import Image from "next/image";
import React, { useState } from "react";
import bgImage from "@/public/background.png";
import manImage from "@/public/man.png";
import Card from "../components/Card";
import CardCarousel from "../components/CardCarousel";
import Review from "../components/Review";
import Faq from "../components/Faq";
import StickyNav from "../components/StickyNav";

export default function Home() {
  const [description, setDescription] = useState("");
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-amber-50">
      <StickyNav />
      {/* <div className="relative z-10 w-full min-h-screen bg-white shadow-lg rounded-lg pl-22 overflow-hidden flex items-center"> */}
      <div className="relative z-10 w-full min-h-screen bg-white justify-center shadow-lg rounded-lg px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Background Image Inside Container */}
        <div className="absolute inset-0 w-full h-full z-[-1]">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="blur-md"
          />
        </div>

        <div className="relative z-10 w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-[35px] md:text-[55px] font-bold mb-4">
            A-Plus Homework Help For All
          </h1>
          <p className="text-gray-600 mb-6 text-[16px] md:text-[18px]">
            Get personalized expert assistance in any academic field. 100+
            courses and programs covered.
          </p>

          {/* Input and Toggle */}
          <textarea
            className="w-full md:w-2/3 p-3 bg-white border border-gray-400 rounded-lg mb-4"
            placeholder="Describe your project briefly"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex items-center justify-center md:justify-start mb-4">
            {/* Toggle Button */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={humanExpertsOnly}
                onChange={() => setHumanExpertsOnly(!humanExpertsOnly)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
            <span className="ml-3 text-gray-900 font-medium">
              Human experts only
            </span>
          </div>

          <p className="text-[20px] text-gray-700 mb-4">
            Get Offers{" "}
            <span className="text-purple-600 font-bold">
              For FREE & Pay Only
            </span>{" "}
            When You Accept An Offer!
          </p>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-bold hover:bg-purple-700">
            Find an Expert
          </button>
        </div>

        {/* Man Image */}
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-between ">
          <Image
            src={manImage}
            alt="Man"
            width={700}
            height={400}
            className="rounded-lg hidden md:block"
          />
        </div>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl bg-white shadow-md rounded-lg p-6 text-center">
        {[
          { label: "150+ Students", desc: "Trusted Us To Write Their Papers" },
          {
            icon: (
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.4048 0H4.26194C2.09225 0 0.333374 1.75888 0.333374 3.92857V40.0714C0.333374 42.2411 2.09225 44 4.26194 44H40.4048C42.5745 44 44.3334 42.2411 44.3334 40.0714V3.92857C44.3334 1.75888 42.5745 0 40.4048 0Z"
                  fill="#00002E"
                />
                <path
                  d="M22.3327 29.6535L29.0244 27.9577L31.8202 36.5744L22.3327 29.6535ZM37.7327 18.516H25.9536L22.3327 7.42438L18.7119 18.516H6.93274L16.4661 25.391L12.8452 36.4827L22.3786 29.6077L28.2452 25.391L37.7327 18.516Z"
                  fill="#0AB67B"
                />
              </svg>
            ),
            label: "Trustpilot",
            desc: "4.7 ★★★★★",
            color: "text-green-600",
          },
          {
            icon: (
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_2615)">
                  <path
                    d="M41.2913 30.6873L29.7796 30.9028C29.3915 30.9028 29.0035 31.1184 28.7447 31.4634C27.5808 33.3173 23.9591 38.4911 20.7253 42.1128C20.0356 42.7595 18.9145 42.587 18.4403 41.7678C18.3541 41.5954 18.2247 41.4229 18.2247 41.3798C17.5348 39.7845 15.4222 30.5579 14.4736 29.3938C13.3097 28.0141 3.30689 25.5135 1.75475 24.9961C0.633755 24.608 0.331946 23.1421 1.19425 22.3229C3.73804 19.9085 7.83399 16.5024 10.7658 14.5623C11.1538 14.3467 11.4125 13.9155 11.4125 13.4843L11.2401 2.53311C11.2401 1.67081 12.1024 1.02408 12.9215 1.41212C15.3791 2.44689 19.7768 5.20624 22.5362 7.62069C22.838 7.9656 23.3123 8.09493 23.7435 7.9656C25.7268 7.40512 31.2885 5.80985 36.7211 5.50805C37.4541 5.46494 38.0576 6.06855 37.9714 6.84463C37.7128 9.43155 36.9797 14.9933 35.7725 18.6582C35.6432 19.0462 35.6863 19.4342 35.9881 19.7791C37.1522 21.2882 39.9116 25.0823 42.326 28.8764C42.7572 29.6956 42.2398 30.6873 41.2913 30.6873Z"
                    fill="white"
                  />
                  <path
                    d="M28.2273 17.1923C28.2273 18.615 27.0633 19.8223 25.6405 19.8223C24.2177 19.8223 23.0536 18.6582 23.0536 17.1923C23.0536 15.7694 24.2177 14.5623 25.6405 14.5623C27.0633 14.5623 28.2273 15.7694 28.2273 17.1923ZM41.2913 30.6873L29.7796 30.9028C29.3915 30.9028 29.0034 31.1184 28.7447 31.4634C27.5808 33.3173 23.9591 38.4911 20.7253 42.1128C20.0356 42.7595 18.9145 42.587 18.4403 41.7678C18.3541 41.5954 18.2247 41.4229 18.2247 41.3798C17.5348 39.7845 15.4222 30.5579 14.4736 29.3938C13.3097 28.0141 3.30689 25.5135 1.75475 24.9961C0.633755 24.608 0.331946 23.1421 1.19425 22.3229C3.73804 19.9085 7.83399 16.5024 10.7658 14.5623C11.1538 14.3467 11.4125 13.9155 11.4125 13.4843L11.2401 2.53311C11.2401 1.67081 12.1024 1.02408 12.9215 1.41212C15.3791 2.44689 19.7768 5.20624 22.5362 7.62069C22.838 7.9656 23.3123 8.09493 23.7435 7.9656C25.7268 7.40512 31.2885 5.80985 36.7211 5.50805C37.4541 5.46494 38.0576 6.06855 37.9714 6.84463C37.7128 9.43155 36.9797 14.9933 35.7725 18.6582C35.6432 19.0462 35.6863 19.4342 35.9881 19.7791C37.1522 21.2882 39.9116 25.0823 42.326 28.8764C42.7572 29.6956 42.2398 30.6873 41.2913 30.6873ZM34.5222 9.34531C34.6085 9.04349 34.3067 8.74167 33.9617 8.78482C22.3206 9.99204 11.6712 18.4857 8.22199 21.5468C7.6615 22.0211 7.83399 22.9265 8.52382 23.1853C8.52382 23.1853 15.9395 24.3924 17.7074 25.9015C19.0008 27.0225 20.2512 33.7484 20.2512 33.7484C20.5098 34.3952 21.3291 34.5245 21.8033 34.0502C31.849 23.7458 34.1341 12.1909 34.5222 9.34531Z"
                    fill="url(#paint0_linear_1_2615)"
                  />
                  <path
                    d="M14.8186 37.3713C14.7324 36.9833 14.603 36.5953 14.4736 36.1641L10.7656 40.0877C10.5068 40.3895 10.3775 40.7775 10.3775 41.1657C10.3775 41.5968 10.55 41.9849 10.8518 42.2436C11.1105 42.5022 11.4986 42.6316 11.8866 42.6316C12.3177 42.6316 12.7059 42.4592 13.0077 42.1573L15.4653 39.5703C15.2498 38.9666 15.0342 38.2336 14.8186 37.3713Z"
                    fill="url(#paint1_linear_1_2615)"
                  />
                  <path
                    d="M12.7923 30.7719C12.4904 30.5563 11.8868 30.3408 11.1969 30.082L1.97034 39.4811C1.66853 39.783 1.53918 40.171 1.53918 40.559C1.53918 40.9471 1.66853 41.3783 1.97034 41.6369C2.27214 41.8956 2.66017 42.0681 3.04822 42.0681C3.43625 42.0681 3.82428 41.9387 4.16921 41.6369L13.3096 32.324C13.1371 31.6773 12.9647 31.1169 12.7923 30.7719Z"
                    fill="url(#paint2_linear_1_2615)"
                  />
                  <path
                    d="M4.47098 27.9688L1.40969 31.0731C1.15098 31.3749 0.978516 31.7631 0.978516 32.1511C0.978516 32.5392 1.10786 32.9704 1.40969 33.229C1.7115 33.4878 2.09955 33.6602 2.4876 33.6602C2.87565 33.6602 3.30682 33.4878 3.56552 33.229L7.83408 28.9174C6.62679 28.6155 5.41955 28.2706 4.47098 27.9688Z"
                    fill="url(#paint3_linear_1_2615)"
                  />
                  <path
                    d="M14.8186 37.3713C14.7324 36.9833 14.603 36.5953 14.4736 36.1641L10.7656 40.0877C10.5068 40.3895 10.3775 40.7775 10.3775 41.1657C10.3775 41.5968 10.55 41.9849 10.8518 42.2436C11.1105 42.5022 11.4986 42.6316 11.8866 42.6316C12.3177 42.6316 12.7059 42.4592 13.0077 42.1573L15.4653 39.5703C15.2498 38.9666 15.0342 38.2336 14.8186 37.3713Z"
                    fill="url(#paint4_linear_1_2615)"
                    stroke="url(#paint5_linear_1_2615)"
                    strokeWidth="1.17121"
                  />
                  <path
                    d="M4.47098 27.9688L1.40969 31.0731C1.15098 31.3749 0.978516 31.7631 0.978516 32.1511C0.978516 32.5392 1.10786 32.9704 1.40969 33.229C1.7115 33.4878 2.09955 33.6602 2.4876 33.6602C2.87565 33.6602 3.30682 33.4878 3.56552 33.229L7.83408 28.9174C6.62679 28.6155 5.41955 28.2706 4.47098 27.9688Z"
                    stroke="url(#paint6_linear_1_2615)"
                    strokeWidth="1.17121"
                  />
                  <path
                    d="M12.7923 30.7719C12.4904 30.5563 11.8868 30.3408 11.1969 30.082L1.97034 39.4811C1.66853 39.783 1.53918 40.171 1.53918 40.559C1.53918 40.9471 1.66853 41.3783 1.97034 41.6369C2.27214 41.8956 2.66017 42.0681 3.04822 42.0681C3.43625 42.0681 3.82428 41.9387 4.16921 41.6369L13.3096 32.324C13.1371 31.6773 12.9647 31.1169 12.7923 30.7719Z"
                    stroke="url(#paint7_linear_1_2615)"
                    strokeOpacity="0.5"
                    strokeWidth="1.17121"
                  />
                  <g filter="url(#filter0_ii_1_2615)">
                    <path
                      d="M41.2913 30.6873L29.7796 30.9028C29.3915 30.9028 29.0035 31.1184 28.7447 31.4634C27.5808 33.3173 23.9591 38.4911 20.7253 42.1128C20.0356 42.7595 18.9145 42.587 18.4403 41.7678C18.3541 41.5954 18.2247 41.4229 18.2247 41.3798C17.5348 39.7845 15.4222 30.5579 14.4736 29.3938C13.3097 28.0141 3.30689 25.5135 1.75475 24.9961C0.633755 24.608 0.331946 23.1421 1.19425 22.3229C3.73804 19.9085 7.83399 16.5024 10.7658 14.5623C11.1538 14.3467 11.4125 13.9155 11.4125 13.4844L11.2401 2.53311C11.2401 1.67081 12.1024 1.02408 12.9215 1.41212C15.3791 2.44689 19.7768 5.20625 22.5362 7.62069C22.838 7.9656 23.3123 8.09493 23.7435 7.9656C25.7268 7.40512 31.2885 5.80985 36.7211 5.50805C37.4541 5.46494 38.0576 6.06855 37.9714 6.84463C37.7128 9.43155 36.9797 14.9933 35.7725 18.6582C35.6432 19.0462 35.6863 19.4342 35.9881 19.7791C37.1523 21.2882 39.9116 25.0823 42.326 28.8764C42.7572 29.6956 42.2398 30.6873 41.2913 30.6873Z"
                      stroke="url(#paint8_linear_1_2615)"
                      strokeWidth="1.17121"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_ii_1_2615"
                    x="0.11084"
                    y="0.706665"
                    width="42.9514"
                    height="42.6204"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.234242" />
                    <feGaussianBlur stdDeviation="0.117121" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2615"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.117121" />
                    <feGaussianBlur stdDeviation="0.117121" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_1_2615"
                      result="effect2_innerShadow_1_2615"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_2615"
                    x1="36.2365"
                    y1="6.61071"
                    x2="10.8242"
                    y2="32.023"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.1745" stopColor="#52BFCA" />
                    <stop offset="0.9163" stopColor="#7238DF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_2615"
                    x1="7.04819"
                    y1="45.7419"
                    x2="17.0119"
                    y2="35.9479"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.1875" stopColor="#25E2EA" />
                    <stop offset="1" stopColor="#19A6D1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_2615"
                    x1="-6.24481"
                    y1="49.5946"
                    x2="15.983"
                    y2="27.7452"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A443FD" />
                    <stop offset="1" stopColor="#A959F3" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_2615"
                    x1="-2.67072"
                    y1="37.2108"
                    x2="8.34639"
                    y2="26.3813"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.3958" stopColor="#E55EC4" />
                    <stop offset="1" stopColor="#8225D0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1_2615"
                    x1="7.04819"
                    y1="45.7419"
                    x2="17.0119"
                    y2="35.9479"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.1875" stopColor="#25E2EA" />
                    <stop offset="1" stopColor="#19A6D1" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1_2615"
                    x1="10.3775"
                    y1="42.9441"
                    x2="14.1711"
                    y2="39.0094"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="0.0001" stopColor="#E4FCFF" />
                    <stop offset="1" stopColor="#E4FCFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_1_2615"
                    x1="0.978516"
                    y1="33.5044"
                    x2="5.95367"
                    y2="28.4208"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF5FE" />
                    <stop
                      offset="0.769332"
                      stopColor="#FFF5FE"
                      stopOpacity="0"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_1_2615"
                    x1="2.01912"
                    y1="41.6878"
                    x2="12.7088"
                    y2="30.7544"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F6EDFE" />
                    <stop
                      offset="0.850896"
                      stopColor="#A851F8"
                      stopOpacity="0"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_1_2615"
                    x1="38.2317"
                    y1="5.23304"
                    x2="10.5849"
                    y2="34.2379"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.00924772" stopColor="#2D9FAB" />
                    <stop
                      offset="0.0885417"
                      stopColor="#2D9FAB"
                      stopOpacity="0.823892"
                    />
                    <stop
                      offset="0.171875"
                      stopColor="#2D9FAB"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="0.302083"
                      stopColor="#2D9FAB"
                      stopOpacity="0.8"
                    />
                    <stop offset="1" stopColor="white" stopOpacity="0.5" />
                  </linearGradient>
                  <clipPath id="clip0_1_2615">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ),
            label: "Sitejabber",
            desc: "4.0 ★★★★☆",
            color: "text-orange-500",
          },
          {
            icon: (
              <svg
                width="41"
                height="44"
                viewBox="0 0 41 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                href="http://www.w3.org/1999/xlink"
              >
                <rect width="41" height="44" fill="url(#pattern0_1_2642)" />
                <defs>
                  <pattern
                    id="pattern0_1_2642"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      href="#image0_1_2642"
                      transform="matrix(0.00606061 0 0 0.00567376 -0.227273 -0.0638298)"
                    />
                  </pattern>
                  <image
                    id="image0_1_2642"
                    width="240"
                    height="240"
                    preserveAspectRatio="none"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            ),
            label: "ExpertBuddy",
            desc: "5.0 ★★★★★",
            color: "text-yellow-500",
          },
        ].map((stat, index) => (
          <div key={index} className="flex gap-3 items-center">
            {stat.icon}
            <div>
              <p className="text-lg font-bold">{stat.label}</p>
              <p className={`text-gray-500 ${stat.color}`}>{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <section id="how-it-works">
        <Card />
      </section>

      <section
        id="find-expert"
        className="bg-pink-500 text-white py-16 px-4 w-full relative h-auto md:h-[500px]"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Left Side - Text and Input Fields */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Reach Out to the Expert Now
            </h1>
            <p className="text-lg text-black mt-2 max-w-md mx-auto md:mx-0">
              Chat with the expert directly, discuss your project in detail, and
              get professional academic assistance by the deadline.
            </p>

            {/* Input Fields & Button */}
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Personal Self-Care Plan"
                className="px-4 py-2 border rounded-md text-black w-full md:w-auto"
              />
              <input
                type="date"
                className="px-4 py-2 border rounded-md text-black w-full md:w-auto"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-full hover:bg-gray-800 w-full md:w-auto">
              Find an Expert
            </button>
          </div>

          {/* Right Side - Floating Images */}
          <div className="md:w-1/2 justify-end relative hidden md:flex">
            <div className="relative w-72 h-72">
              <Image
                src="/img1.png" // Replace with correct image path
                alt="Expert 1"
                width={150}
                height={150}
                className="absolute top-0 left-10 rounded-xl shadow-md"
              />

              <Image
                src="/img2.png" // Replace with correct image path
                alt="Expert 2"
                width={120}
                height={120}
                className="absolute top-12 left-55 rounded-xl shadow-md"
              />

              <Image
                src="/img3.png" // Replace with correct image path
                alt="Expert 3"
                width={160}
                height={160}
                className="absolute top-35 left-30 rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="absolute left-0 w-full -bottom-16 md:block hidden">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-between text-black">
            <div className="w-full md:w-1/3 text-center p-0 border-b md:border-b-0 md:border-r border-gray-300">
              <span className="text-3xl">💰</span>
              <h3 className="mt-2 text-lg font-bold">Money-Back Guarantee</h3>
            </div>
            <div className="w-full md:w-1/3 text-center p-4 border-b md:border-b-0 md:border-r border-gray-300">
              <span className="text-3xl">⏳</span>
              <h3 className="mt-2 text-lg font-bold">Support 24/7</h3>
            </div>
            <div className="w-full md:w-1/3 text-center p-4">
              <span className="text-3xl">💳</span>
              <h3 className="mt-2 text-lg font-bold">No Hidden Charges</h3>
            </div>
          </div>
        </div>
      </section>

      <CardCarousel />
      <section id="featured">
        <Review />
      </section>

      {/* Claim Your Offer Section */}
      <section
        id="claim-offers"
        className="mt-12 bg-purple-200 p-12 rounded-lg relative"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Side */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-black">Claim Your Offer</h2>
            <p className="mt-4 text-lg text-black">
              Hello, we have a special ongoing offer for our new customers to
              avail
              <strong> 30% OFF & 150% Cashback</strong> on their first
              assignment with us. We are committed to delivering premium service
              despite an affordable price. Enter your phone number below to get
              the coupon code.
              <strong> (We do not spam)</strong>.
            </p>
            <p className="mt-6 text-xl font-bold">Susan White</p>
            <p className="text-base">Head of Sales Department</p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-black">
              30% OFF & 150% Cashback On Your First Order!
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              Type your WhatsApp Number to get an exclusive Code.
            </p>

            {/* Input Field */}
            <div className="mt-6 flex items-center border border-gray-400 rounded-full overflow-hidden bg-white">
              <span className="px-4 py-3 bg-gray-100 text-gray-700 whitespace-nowrap">
                US +1
              </span>
              <input
                type="text"
                placeholder="Enter your WhatsApp number"
                className="px-4 py-3 w-full outline-none text-lg"
              />
            </div>

            {/* Button */}
            <button className="mt-6 px-8 py-4 bg-purple-600 shadow-2xl text-white text-lg rounded-full hover:bg-purple-700">
              Get Offer on WhatsApp
            </button>
          </div>
        </div>
      </section>
      <section id="faqs">
        <Faq />
      </section>
    </div>
  );
}
