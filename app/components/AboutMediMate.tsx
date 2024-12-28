"use client";

import Image from "next/image";

const featureData = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We are pioneers in our field, constantly exploring new ideas and pushing boundaries.",
  },
  {
    id: 2,
    title: "Customer-Centric",
    description:
      "Our clients are at the heart of everything we do. We are committed to delivering value and exceeding expectations.",
  },
  {
    id: 3,
    title: "Expertise",
    description:
      "Our team consists of industry experts who bring a wealth of knowledge and experience to each project.",
  },
  {
    id: 4,
    title: "Integrity",
    description:
      "We operate with the highest level of integrity, ensuring transparency, honesty, and ethical conduct in all our endeavors.",
  },
];

export default function AboutMedimate() {
  return (
    <section className="bg-white mx-auto py-16 px-4 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">
            মেডিমেট সম্পর্কে
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Aliqua consectetur laborum anim anim quis elit sit cupidatat ipsum
            cupidatat nostrud adipisicing.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            {featureData.map((feature) => (
              <div key={feature.id}>
                <h3 className="text-md md:text-lg font-semibold text-gray-800 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/about.jpg"
            alt="About Medimate"
            width={450}
            height={0}
            //sizes="100vh"
            style={{ height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
