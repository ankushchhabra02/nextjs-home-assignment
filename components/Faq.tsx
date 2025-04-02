import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Can you help me with my homework in less than 24 hours?",
    answer:
      "Our name 24HourAnswers means you can submit work 24 hours a day - it doesn’t mean we can help you master what you need to know in 24 hours...",
  },
  {
    question: "Can you help me with my exam/quiz/test?",
    answer:
      "Yes! We provide expert guidance to help you prepare effectively for exams, quizzes, and tests...",
  },
  {
    question: "How much will it cost?",
    answer:
      "Pricing depends on the complexity of the assignment and deadline...",
  },
  {
    question: "What kind of payments do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal...",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto mt-12 px-4 md:px-8 mb-17">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="border border-gray-300 rounded-lg bg-white shadow-lg md:w-5xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-b-0">
            <button
              className="flex justify-between items-center w-full text-left text-base md:text-lg font-semibold text-gray-900 p-3 md:p-4"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus className="text-gray-700" />
              ) : (
                <FaPlus className="text-gray-700" />
              )}
            </button>

            {openIndex === index && (
              <p className="px-3 md:px-4 pb-3 md:pb-4 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
