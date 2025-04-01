import Image from "next/image";

const Card = () => {
  const steps = [
    {
      step: "01",
      title: "Fill in a brief",
      description:
        "Tell us what you need help with, describe your project requirements, and set the deadline.",
      buttonText: "Get Started",
      imageSrc: "/step1.png", // Replace with actual image path
    },
    {
      step: "02",
      title: "Choose an expert",
      description:
        "Receive offers from those who can help with assignments, compare their ratings, and pick the best one for your task.",
      buttonText: "Get Started",
      imageSrc: "/step2.png", // Replace with actual image path
    },
    {
      step: "03",
      title: "Get It Done On Time",
      description:
        "Chat with the expert directly, discuss your project in detail, and get professional academic assistance by the deadline.",
      buttonText: "Get Started",
      imageSrc: "/step3.png", // Replace with actual image path
    },
  ];

  return (
    <section className="py-12 px-4 bg-amber-50 ml-8 mt-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 relative">
          <span className="text-purple-400 ">
            <svg
              className="absolute bottom-0 left-95"
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
          How It Works
        </h2>
      </div>

      <div className="mt-10 flex flex-wrap gap-8">
        {/* Steps 1 & 2 (Side by Side) */}
        {steps.slice(0, 2).map((step) => (
          <div
            key={step.step}
            className="w-full md:w-[48%] p-6 bg-white rounded-xl shadow-lg border border-gray-200"
          >
            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 text-purple-700 border border-purple-700 rounded-lg text-sm font-semibold">
                Step {step.step}
              </div>
              <h3 className="mt-2 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
              <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                {step.buttonText}
              </button>
            </div>

            {/* Center the Image */}
            <div className="mt-4 flex justify-center">
              <Image
                src={step.imageSrc}
                alt={step.title}
                width={300}
                height={300}
                className="rounded-lg object-cover shadow-md mx-auto"
              />
            </div>
          </div>
        ))}

        {/* Step 3 (Full Width) */}
        <div className="w-[98%] p-10 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block px-3 py-1 text-purple-700 border border-purple-700 rounded-lg text-sm font-semibold">
              Step 03
            </div>
            <h3 className="mt-2 text-2xl font-bold">{steps[2].title}</h3>
            <p className="mt-2 text-gray-600">{steps[2].description}</p>
            <button className="mt-4 px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              {steps[2].buttonText}
            </button>
          </div>

          {/* Center the Image */}
          <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <Image
              src={steps[2].imageSrc}
              alt={steps[2].title}
              width={300}
              height={300}
              className="rounded-lg object-cover shadow-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
