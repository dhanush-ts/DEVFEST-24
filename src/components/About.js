import React from 'react';
import devslogo from '../assets/devslogo.png';
import './About.css';

export const About = () => {
  return (
    <div className='text-center mt-36 text-white' data-aos="fade-up">
      <p className='font-bold text-5xl'>About</p>
      <div className='md:flex justify-between mx-24'>
        <div>
          <img className='m-auto h-56 md:max-w-xs' src={devslogo} alt="" />
        </div>
        <div className='md:ml-36 -my-12 mb-12 md:my-auto max-w-4xl text-xs font-light md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Hic, quod? Ex similique ducimus quod, accusamus mollitia facere consequuntur ipsum deleniti itaque consectetur amet fugit dolorem suscipit, explicabo est, tenetur rem.
        </div>
      </div>
    </div>
  );
};
