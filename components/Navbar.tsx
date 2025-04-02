"use client";

import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, Bell } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";
import SignUpModal from "./SignUpModal";
import Link from "next/link";

const Navbar = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <nav className="flex justify-between items-center bg-white px-6 py-3 shadow-md">
      {/* Left Section - Logo and Links */}
      <Link href="/">
        <div className="flex items-center ml-10 space-x-6">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="text-xl font-bold text-purple-700">BUDDY</div>
        </div>
      </Link>

      {/* Right Section - Refer, Language, Icons, Profile */}
      <div className="flex flex-[0.6] items-center justify-evenly  relative">
        <a href="#" className="text-gray-700 hover:text-purple-700">
          Find Tutor
        </a>
        <a href="#" className="text-gray-700 hover:text-purple-700">
          Homework
        </a>
        <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-md text-sm font-medium">
          <span className="text-yellow-700">💰 0 USD</span>
        </div>
        {/* Refer a Friend Button */}
        <button className="border border-purple-500 text-purple-700 px-3 py-1 rounded-md hover:bg-purple-100">
          Refer a Friend
        </button>

        {/* Currency Selector */}
        <Menu as="div" className="relative">
          <Menu.Button className="flex items-center text-gray-700 hover:text-purple-700 focus:outline-none">
            {currency}
            <ChevronDown className="ml-1 w-4 h-4" />
          </Menu.Button>

          {/* Dropdown */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
              {["English, USD", "English, EUR", "English, INR"].map((curr) => (
                <Menu.Item key={curr}>
                  {({ active }) => (
                    <button
                      className={`w-full text-left px-4 py-2 ${
                        active ? "bg-gray-100" : ""
                      }`}
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
            src="/profile.jpeg" // Replace with dynamic image
            alt="Profile"
            width={32}
            height={32}
          />
        </div>
        <SignUpModal />
      </div>
    </nav>
  );
};

export default Navbar;
