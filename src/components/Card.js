import React from 'react';

export const Card = ({ title, backgroundImage }) => {
  return (
    <div className="text-white rounded-lg shadow-lg m-4 relative">
      {/* Image */}
      <img src={backgroundImage} className="rounded-xl md:max-w-sm" alt="" />
      
      {/* Centered Text */}
      <h2 className="text-5xl font-extrabold uppercase absolute inset-0 px-2 flex items-center justify-center">
        {title}
      </h2>
    </div>
  );
};
