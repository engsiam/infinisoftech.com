"use client";

import Image from "next/image";

interface SliderCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  imageSrc: string;
  buttonText: string;
  cardColor: string; // Dynamic card background color
  buttonColor: string; // Dynamic button background color
  onButtonClick?: () => void;
}

const SliderCard = ({
  title,
  description,
  price,
  originalPrice,
  discount,
  imageSrc,
  buttonText,
  cardColor,
  buttonColor,
  onButtonClick,
}: SliderCardProps) => {
  return (
    <div
      className={`rounded-lg shadow-md p-4 flex flex-row items-center justify-center gap-4 max-w[647px]`}
      style={{ backgroundColor: cardColor }}
    >
      {/* Content Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-xl font-semibold text-gray-800">
          {price}{" "}
          <span className="text-sm line-through text-gray-500">
            {originalPrice}
          </span>
        </div>
        <p className="text-sm text-green-600">{discount}</p>
        <button
          onClick={onButtonClick}
          className="text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          style={{ backgroundColor: buttonColor }} // Apply dynamic button color
        >
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default SliderCard;
