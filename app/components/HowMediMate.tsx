"use client";

import Card from "@/reusable/card";
import {
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

// Card data array
const cardData = [
  {
    id: 1,
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-blue-600" />,
    title: "Search Doctor",
    description:
      "Search for a doctor based on specialization, location, or availability.",
  },
  {
    id: 2,
    icon: <CalendarIcon className="w-8 h-8 text-blue-600" />,
    title: "Schedule Appointment",
    description:
      "Choose your preferred doctor, select a convenient time slot, & confirm your appointment.",
  },
  {
    id: 3,
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-blue-600" />,
    title: "Check Doctor Profile",
    description:
      "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
  },
  {
    id: 4,
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-blue-600" />,
    title: "Get Your Solution",
    description:
      "Discuss your health concerns with the doctor and receive personalized advice & solution.",
  },
];

const HowMediMate = () => {
  return (
    <section className="bg-[#FFF0F5] py-16 px-4 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="w-auto flex justify-center lg:justify-start">
          <Image
            src="/assets/images/women.png"
            alt="Doctor"
            layout="responsive"
            loading="lazy"
            width={350}
            height={0}
            sizes="100vh"
            // sizes="100vh"
            // style={{ height: "auto" }}
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col text-center lg:text-left w-full">
          {/* Heading */}
          <div className="mb-6 p-4">
            <p className="text-pink-600 text-sm mb-2">
              আপনার স্বাস্থ্য, আপনার হাতের মুঠোয়!
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-pink-700">
              মেডিমেট কিভাবে কাজ করে
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowMediMate;
