"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean; // Add an optional prop for default open state
}

const FAQItem = ({ question, answer, defaultOpen }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false); // Set default state

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 transition-all duration-300">
      {/* Question */}
      <button
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-gray-800 font-semibold text-base">{question}</h3>
        <span
          className={`w-6 h-6 flex items-center justify-center rounded-full ${
            isOpen ? "bg-blue-500 text-white" : "bg-gray-200 text-blue-500"
          }`}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      {/* Answer */}
      {isOpen && (
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};
export default FAQItem;
