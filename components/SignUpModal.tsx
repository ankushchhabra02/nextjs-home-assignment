"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import WelcomeModal from "./WelcomeModal"; // Import WelcomeModal

const SignUpModal: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState<boolean>(false);

  return (
    <>
      {/* Navbar Sign Up Button */}
      <button
        onClick={() => setIsSignUpOpen(true)}
        className="bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        Sign Up
      </button>

      {/* SignUp Modal */}
      <Transition appear show={isSignUpOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsSignUpOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-transparent bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm shadow-xl relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                  onClick={() => setIsSignUpOpen(false)}
                >
                  ✖
                </button>

                {/* Title */}
                <Dialog.Title className="text-lg font-bold text-center mb-4">
                  Sign Up for XpertBuddy
                </Dialog.Title>

                {/* Email Input */}
                <label className="text-md">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border p-2 rounded mb-4"
                />

                {/* Checkboxes */}
                <div className="flex items-start space-x-2 mb-4">
                  <input type="checkbox" id="agree" className="mt-1" />
                  <label htmlFor="agree" className="text-sm">
                    I accept{" "}
                    <span className="text-purple-600 cursor-pointer">
                      User Agreement
                    </span>
                  </label>
                </div>

                <div className="flex items-start space-x-2 mb-4">
                  <input type="checkbox" id="marketing" className="mt-1" />
                  <label htmlFor="marketing" className="text-sm">
                    I don’t want to receive marketing messages from{" "}
                    <span className="text-purple-600 cursor-pointer">
                      XpertBuddy
                    </span>
                  </label>
                </div>

                {/* Sign Up Button */}
                <button
                  className="w-1/3 bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700"
                  onClick={() => {
                    setIsSignUpOpen(false);
                    setIsWelcomeOpen(true);
                  }}
                >
                  Sign Up
                </button>

                {/* Already Registered */}
                <p className="text-center text-sm mt-8">
                  Already registered?{" "}
                  <span className="text-purple-600 cursor-pointer">Log In</span>
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Welcome Modal */}
      <WelcomeModal isOpen={isWelcomeOpen} setIsOpen={setIsWelcomeOpen} />
    </>
  );
};

export default SignUpModal;
