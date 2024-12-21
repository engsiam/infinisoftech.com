"use client";

import FAQItem from "@/reusable/FAQItem"; // Import the reusable FAQItem component
import Image from "next/image";

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer:
      "Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability and confirm your booking.",
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer:
      "Yes, you can select a specific doctor based on their profile and availability while booking your appointment.",
  },
  {
    question:
      "What should I do if I need to cancel or reschedule my appointment?",
    answer:
      "You can cancel or reschedule your appointment through your account. Navigate to 'My Appointments' and follow the instructions.",
  },
  {
    question: "What if I'm running late for my appointment?",
    answer:
      "If you're running late, contact the doctor's office as soon as possible to inform them about the delay.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer:
      "Yes, you can add family members to your account and book appointments on their behalf.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h3 className="text-blue-600 text-sm">Get Your Answer</h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      {/* FAQ and Image Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content - Image */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/faq.png" // Replace with your actual image path
            alt="FAQ"
            width={625}
            height={535}
            className="w-full max-w-sm lg:max-w-full rounded-lg"
          />
          <div className="-mt-8 flex items-center space-x-4 bg-white shadow-md p-4 rounded-md text-center">
            <div className="">
              <Image
                src="/assets/images/emoj.png"
                alt="FAQ"
                width={625}
                height={535}
                className="w-full max-w-sm lg:max-w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-gray-800">Ok+</span>
              <span className="text-gray-600">Happy Patients</span>
            </div>
          </div>
        </div>

        {/* Right Content - FAQs */}
        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
