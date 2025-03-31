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
    <section className="py-12 px-4 bg-amber-50 ml-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
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
