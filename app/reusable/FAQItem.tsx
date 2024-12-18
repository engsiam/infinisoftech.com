"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="border-b border-gray-300 py-3">
      <button
        onClick={toggleOpen}
        className="flex justify-between w-full text-left text-gray-800 font-semibold focus:outline-none"
        aria-expanded={isOpen}
      >
        {question}
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;
