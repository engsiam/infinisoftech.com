

"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-gray-300 py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-left text-gray-800 font-semibold"
      >
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;
