"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FeaturePackage() {
  const slides = [
    {
      image: "/assets/images/pakage1.png", // Replace with your image path
      title: `Women's Health <br> Check-up`,
      description: "15 Tests Included",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-blue-100",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
    },
    {
      image: "/assets/images/happy-family.png", // Replace with your image path
      title: `Family Package for <br> 3 Members`,
      description: "15 Tests Included - 55% Off",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-orange-100",
      buttonColor: "bg-orange-600",
      buttonTextColor: "text-white",
    },
    {
      image: "/assets/images/man.png", // Replace with your image path
      title: `Men's Health <br> Check-up`,
      description: "15 Tests Included - 55% Off",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600",
      buttonTextColor: "text-white",
    },
    {
      image: "/assets/images/pakage1.png", // Replace with your image path
      title: `Women's Health <br> Check-up`,
      description: "15 Tests Included",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-blue-100",
      buttonColor: "bg-blue-600",
      buttonTextColor: "text-white",
    },
    {
      image: "/assets/images/happy-family.png", // Replace with your image path
      title: `Family Package for <br> 3 Members`,
      description: "15 Tests Included - 55% Off",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-orange-100",
      buttonColor: "bg-orange-600",
      buttonTextColor: "text-white",
    },
    {
      image: "/assets/images/man.png", // Replace with your image path
      title: `Men's Health <br> Check-up`,
      description: "15 Tests Included - 55% Off",
      price: "150.25",
      originalPrice: "199.00",
      buttonText: "Book Now",
      bgColor: "bg-green-100",
      buttonColor: "bg-green-600",
      buttonTextColor: "text-white",
    },
  ];

  return (
    <div className="py-10 max-w-screen-2xl mx-auto px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Featured Packages
          </h2>
          <h3 className="text-[#6B7280] text-sm mt-4">
            Explore Our Top-Tier Packages for Your Personalized Wellness
            Experience
          </h3>
        </div>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: false }}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide on small screens
          768: { slidesPerView: 2 }, // 2 slides on medium screens
          1024: { slidesPerView: 3 }, // 3 slides on larger screens
        }}
        className="px-5"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col lg:flex-row ${slide.bgColor} rounded-lg p-5 shadow-lg`}
            >
              {/* Left Content */}
              <div className="text-lef">
                <h2
                  className="text-2xl font-bold mb-4"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h2>
                <p className="text-gray-700 mb-6">{slide.description}</p>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  ${slide.price}
                  <span className="line-through text-gray-500 ml-3">
                    ${slide.originalPrice}
                  </span>
                </p>
                <button
                  className={`px-6 py-2 rounded-md ${slide.buttonColor} ${slide.buttonTextColor}`}
                >
                  {slide.buttonText}
                </button>
              </div>

              {/* Right Image */}
              <div className="absolute bottom-0 right-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={140}
                  height={210}
                  sizes="100vh"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
