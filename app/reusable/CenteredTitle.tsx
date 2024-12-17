
import React from "react";

interface CenteredTitleProps {
  title: string;
  subtitle?: string;
}

const CenteredTitle: React.FC<CenteredTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default CenteredTitle;
