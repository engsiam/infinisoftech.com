"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jhon Doe",
      location: "California",
      feedback:
        "The services at Doccure were quick and efficient. The doctors were kind and thorough. I’ve never felt more comfortable during a healthcare appointment. Doccure truly values their patients!",
      image: "/assets/images/client.png", // Replace with your image path
    },
    {
      name: "Jane Smith",
      location: "California",
      feedback:
        "The services at Doccure were quick and efficient. The doctors were kind and thorough. I’ve never felt more comfortable during a healthcare appointment. Doccure truly values their patients!",
      image: "/assets/images/client.png", // Replace with your image path
    },
    {
      name: "Michael Brown",
      location: "Texas",
      feedback:
        "Great experience with Doccure! Their professionalism and attention to detail were remarkable. I recesived all the care and guidance I needed. Highly recommended!",
      image: "/assets/images/client.png", // Replace with your image path
    },
  ];

  return (
    <div className="bg-[#F5F5F540]  py-16 px-4 lg:py-20">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-screen-lg mx-auto px-5"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left">
              {/* Testimonial Image */}
              <div className="w-40 h-40 lg:w-96 lg:h-52 rounded-full overflow-hidden border-1 border-gray-300">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>

              {/* Testimonial Content */}
              <div className="mt-6 lg:mt-0 lg:ml-8 text-left">
                <div className="text-left">
                  {/* Header */}
                  <h2 className="text-blue-600 text-sm font-semibold uppercase mb-2">
                    Testimonials
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    What Our Client Says
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 w-auto lg:max-w-3xl">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center gap-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
