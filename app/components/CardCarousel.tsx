"use client";

import React from "react";
import Slider from "react-slick";
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

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute bottom-[-50px] left-1/2 translate-x-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      onClick={onClick}
    >
      <ArrowRight className="w-5 h-5 text-gray-700" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute bottom-[-50px] left-1/2 -translate-x-10 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300"
      onClick={onClick}
    >
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </button>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`p-8 bg-white shadow-lg rounded-lg w-full mx-auto ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex flex-col items-start ${className}`}>{children}</div>
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
    <div className="max-w-[70%] mx-auto py-10 px-4 relative mt-15 mb-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Studybay anywhere with ExpertBuddy
      </h2>
      <div className="relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2">
              <Card>
                <CardContent>
                  <span className="text-3xl mb-2">{card.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardCarousel;
