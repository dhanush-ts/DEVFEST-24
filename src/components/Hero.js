import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <div className='text-center pt-24'>
      <div className="keyboard">
        <span className="key">D</span>
        <span className="key">E</span>
        <span className="key">V</span>
        <span className="key">F</span>
        <span className="key">E</span>
        <span className="key">S</span>
        <span className="key">T</span>
        <span className="key">'</span>
        <span className="key">2</span>
        <span className="key">4</span>
      </div>
      <p className='mx-auto rounded-full mt-6 bg-white mb-36 p-2 text-xl px-4 w-fit text-black'>Register Now!</p>
      <p className='text-2xl md:text-4xl'>Brought to you by</p>
      <p className='font-bold text-3xl md:text-5xl'>DEVS REC</p>
    </div>
  );
};
