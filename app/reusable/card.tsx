import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg">
      <div className="flex-shrink-0 text-blue-600 bg-[#DBEFFE] py-4 px-4 rounded-sm">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
