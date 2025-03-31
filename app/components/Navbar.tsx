"use client";

import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, Bell, User } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Navbar = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <nav className="flex justify-between items-center bg-white px-6 py-3 shadow-md">
      {/* Left Section - Logo and Links */}
      <div className="flex items-center space-x-6">
        <Image src={logo} alt="" />
        <div className="text-xl font-bold text-purple-700">BUDDY</div>
        <a href="#" className="text-gray-700 hover:text-purple-700">
          Find Tutor
        </a>
        <a href="#" className="text-gray-700 hover:text-purple-700">
          Homework
        </a>
        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-md text-sm font-medium">
          <span className="text-yellow-700">💰 0 USD</span>
        </div>
      </div>

      {/* Right Section - Refer, Language, Icons, Profile */}
      <div className="flex items-center space-x-4">
        {/* Refer a Friend Button */}
        <button className="border border-purple-500 text-purple-700 px-3 py-1 rounded-md hover:bg-purple-100">
          Refer a Friend
        </button>

        {/* Currency Selector */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center text-gray-700 hover:text-purple-700">
            {currency}, {currency}
            <ChevronDown className="ml-1 w-4 h-4" />
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md">
              {["USD", "EUR", "INR"].map((curr) => (
                <Menu.Item key={curr}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-gray-100" : ""
                      } w-full text-left px-4 py-2`}
                      onClick={() => setCurrency(curr)}
                    >
                      {curr}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        {/* Notification Icon */}
        <Bell className="w-6 h-6 text-gray-700 cursor-pointer hover:text-purple-700" />

        {/* Profile Image */}
        <div className="w-8 h-8 rounded-full overflow-hidden border">
          <Image
            src="/profile-placeholder.jpg" // Replace with dynamic image
            alt="Profile"
            width={32}
            height={32}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
