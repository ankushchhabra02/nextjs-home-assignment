"use client";
import React from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaIdBadge,
} from "react-icons/fa";
import Image from "next/image";

// Sample JSON data for projects
const projects = [
  {
    id: "3744728",
    title: "Lorem Ipsum",
    category: "Criminology, Personal Statement",
    deadline: "January 31, 2025, 11:30 AM",
    bids: 1,
    price: "$90",
    status: "At the Auction",
  },
  {
    id: "3744729",
    title: "Dolor Sit Amet",
    category: "Business Law, Case Study",
    deadline: "February 5, 2025, 2:00 PM",
    bids: 55,
    price: "$50 - $69",
    status: "Drafts",
  },
  {
    id: "3744730",
    title: "Consectetur Adipiscing",
    category: "Medical Research, Report",
    deadline: "March 15, 2025, 10:00 AM",
    bids: 30,
    price: "$75",
    status: "Revision",
  },
];

const AuctionPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold">Active Projects</h1>
        <a href="#" className="text-blue-500 hover:underline mt-2 md:mt-0">
          View all projects
        </a>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
          All ({projects.length})
        </button>
        <button className="text-gray-600">At the Auction (1)</button>
        <button className="text-gray-600">In Process (0)</button>
        <button className="text-gray-600">Under Warranty (0)</button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Name, Description, or Tutor Name"
              className="w-full p-3 border border-gray-300 rounded-full"
            />
            <button className="absolute right-5 top-4 text-gray-500">
              <FaSearch />
            </button>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md relative"
            >
              {/* Status Badge */}
              <span
                className={`absolute top-2 left-3 px-3 py-1 text-sm font-semibold rounded-full ${
                  project.status === "At the Auction"
                    ? "bg-red-100 text-red-500"
                    : project.status === "Drafts"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {project.status}
              </span>

              {/* Project Details */}
              <div className="flex flex-col md:flex-row justify-between mt-6">
                {/* Left Info */}
                <div>
                  <p className="text-gray-600 flex text-sm items-center gap-2">
                    <FaCalendarAlt className="text-purple-500" />
                    <span className="font-medium">Deadline:</span>{" "}
                    {project.deadline}
                  </p>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <FaIdBadge className="text-purple-500" />
                    <span className="font-medium">ID:</span> {project.id}
                  </p>
                  <h2 className="text-lg font-bold text-purple-700 mt-2 underline">
                    {project.title}
                  </h2>
                  <p className="text-gray-500">{project.category}</p>
                </div>

                {/* Right Section */}
                <div className="text-right flex flex-col items-center md:items-end">
                  <p className="text-lg font-bold text-amber-950">
                    {project.bids} Bid{project.bids > 1 ? "s" : ""}
                  </p>
                  <p className="text-gray-900">
                    Price{" "}
                    <span className="text-xl font-bold">{project.price}</span>
                  </p>

                  {/* Button */}
                  <button
                    className={`mt-4 px-4 py-2 rounded-full text-white w-full md:w-auto ${
                      project.status === "Revision"
                        ? "bg-gray-700 hover:bg-gray-800"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {project.status === "Revision"
                      ? "Open Chat"
                      : "Check the Offers"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-80  bg-white p-4 rounded-xl shadow-lg hidden md:block">
          {/* Profile Section */}
          <div className="flex flex-col border-b pb-4 mb-4">
            {/* Image & Name in One Line */}
            <div className="flex items-center gap-3">
              <Image
                src="/profile.jpeg"
                alt="Profile"
                width={70}
                height={70}
                className="rounded-lg border"
              />
              <h2 className="text-lg font-semibold">Ankush Chhabra</h2>
            </div>

            {/* Notification Section */}
            <div className="flex justify-between mt-5">
              <p className="text-gray-500 text-sm">No new notifications</p>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                View all
              </a>
            </div>
          </div>

          {/* Calendar Section */}
          <div>
            <h3 className="text-lg font-semibold text-start">Calendar</h3>
            <div className="flex justify-between items-center mt-2">
              <FaChevronLeft className="cursor-pointer text-gray-500" />
              <span className="text-sm font-semibold">December 2024</span>
              <FaChevronRight className="cursor-pointer text-gray-500" />
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mt-3 text-gray-600">
              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <span key={day} className="text-xs font-semibold text-gray-600">
                  {day}
                </span>
              ))}

              {/* Empty Cells for Proper Alignment (Assuming the month starts on a Wednesday) */}
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <span key={`empty-${index}`} className="text-sm p-1"></span>
                ))}

              {/* Days of the Month */}
              {[...Array(30).keys()].map((day) => (
                <span
                  key={day}
                  className={`text-sm p-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer 
        ${day + 1 === 17 ? "bg-purple-500 text-white" : "hover:bg-gray-200"}
      `}
                >
                  {day + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;
