import React from 'react';

export const Card = ({ title, backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center text-white flex items-center justify-center h-96 w-64 rounded-lg shadow-lg m-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className="text-3xl font-bold text-center uppercase">{title}</h2>
    </div>
  );
};
