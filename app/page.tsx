"use client";
import Image from "next/image";
import React, { useState } from "react";
import bgImage from "@/public/background.png";
import manImage from "@/public/man.png";
import Card from "./components/Card";
import CardCarousel from "./components/CardCarousel";

export default function Home() {
  const [description, setDescription] = useState("");
  const [humanExpertsOnly, setHumanExpertsOnly] = useState(false);
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-amber-50">
      <div className="relative z-10 w-full min-h-screen bg-white shadow-lg rounded-lg pl-22 overflow-hidden flex items-center">
        {/* Background Image Inside Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="blur-md"
          />
        </div>

        <div className="relative z-10 w-2/3">
          <h1 className="text-[55px] font-bold mb-4">
            A-Plus Homework Help For All
          </h1>
          <p className="text-gray-600 mb-6 text-[18px]">
            Get personalized expert assistance in any academic field. 100+
            courses and programs covered.
          </p>

          <textarea
            className="w-1/2 p-3 bg-white border border-gray-400 border-opacity-50 rounded-lg mb-4"
            placeholder="Describe your project briefly"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={humanExpertsOnly}
              onChange={() => setHumanExpertsOnly(!humanExpertsOnly)}
              className="toggle-checkbox"
            />
            <label className="mr-2"> Human experts only</label>
          </div>

          <p className="text-[23px] text-gray-700 mb-4">
            Get Offers{" "}
            <span className="text-purple-600 font-bold">
              For FREE & Pay Only
            </span>{" "}
            When You Accept An Offer!
          </p>

          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700">
            Find an Expert
          </button>
        </div>

        {/* Man Image */}
        <div className="relative z-10 w-1/2 flex justify-between-">
          <Image
            src={manImage}
            alt="Man"
            width={700}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="relative z-10 mt-8 flex justify-between w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <div className="text-center">
          <p className="text-lg font-bold">150+ Students</p>
          <p className="text-gray-500">Trusted Us To Write Their Papers</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Trustpilot</p>
          <p className="text-green-600 font-bold">4.7 ★★★★★</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">Sitejabber</p>
          <p className="text-orange-500 font-bold">4.0 ★★★★☆</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">ExpertBuddy</p>
          <p className="text-yellow-500 font-bold">5.0 ★★★★★</p>
        </div>
      </div>

      <Card />

      <section className="bg-pink-500 text-white py-16 px-4 w-full relative h-[500px]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text and Input Fields */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-black">
              Reach Out to the Expert Now
            </h1>
            <p className="text-lg text-black mt-2 max-w-md">
              Chat with the expert directly, discuss your project in detail, and
              get professional academic assistance by the deadline.
            </p>

            {/* Input Fields & Button */}
            <div className="mt-6 flex flex-wrap gap-4">
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
            <button className="bg-black text-white px-6 py-2 mt-4 rounded-full hover:bg-gray-800">
              Find an Expert
            </button>
          </div>

          {/* Right Side - Floating Images */}
          <div className="md:w-1/2 flex justify-end relative">
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

        {/* Feature Section (Half Inside, Half Outside) */}
        <div className="absolute left-0 w-full -bottom-16">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-5xl mx-auto flex flex-wrap justify-between text-black">
            <div className="w-full md:w-1/3 text-center p-4 border-r border-gray-300 last:border-r-0">
              <span className="text-3xl">💰</span>
              <h3 className="mt-2 text-lg font-bold">Money-Back Guarantee</h3>
            </div>
            <div className="w-full md:w-1/3 text-center p-4 border-r border-gray-300 last:border-r-0">
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
    </div>
  );
}
