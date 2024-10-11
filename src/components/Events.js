import React from 'react';
import { Card } from './Card'; // Import the Card component
import logo1 from "../assets/debugging-background.jpg";
import logo2 from "../assets/hackathon-background.jpg";
import logo3 from "../assets/quiz-background.jpg";
import './Events.css';

export const Events = () => {
  const technicalEvents = [
    { title: "CODE DEBUGGING", backgroundImage: logo1 },
    { title: "6hr's HACKATHON", backgroundImage: logo2 },
    { title: "TECHNICAL QUIZ", backgroundImage: logo3 },
  ];

  const nonTechnicalEvents = [
    { title: "CULTURAL FEST", backgroundImage: logo1 },
    { title: "GAME NIGHT", backgroundImage: logo2 },
    { title: "ART COMPETITION", backgroundImage: logo3 },
  ];

  const workshops = [
    { title: "WEB DEVELOPMENT WORKSHOP", backgroundImage: logo1 },
    { title: "MACHINE LEARNING WORKSHOP", backgroundImage: logo2 },
    { title: "DESIGN THINKING WORKSHOP", backgroundImage: logo3 },
  ];

  return (
    <div className='events' data-aos="fade-left">
      <p className='font-bold text-5xl text-center'>Technical Events</p>
      <div className="flex flex-wrap justify-center items-center py-10">
        {technicalEvents.map((event, index) => (
          <Card key={index} title={event.title} backgroundImage={event.backgroundImage} />
        ))}
      </div>

      <p className='font-bold text-5xl text-center mt-10'>Non-Technical Events</p>
      <div className="flex flex-wrap justify-center items-center py-10">
        {nonTechnicalEvents.map((event, index) => (
          <Card key={index} title={event.title} backgroundImage={event.backgroundImage} />
        ))}
      </div>

      <p className='font-bold text-5xl text-center mt-10'>Workshops</p>
      <div className="flex flex-wrap justify-center items-center py-10">
        {workshops.map((event, index) => (
          <Card key={index} title={event.title} backgroundImage={event.backgroundImage} />
        ))}
      </div>
    </div>
  );
};
