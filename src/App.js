import './App.css';
import { Header } from './layout/Header';
import { Allroutes } from './routes/Allroutes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleClick = (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='cursor-none'>
      <div className='custom-cursor'></div>
      <div className="animated-background"></div>
      <div className="animated-background-secondary"></div>
      <div className="glow"></div>
      <div className="layer-rotate"></div>
      <div className="layer-vertical"></div>
      <div className="small-glow small-glow-1"></div>
      <div className="small-glow small-glow-2"></div>
      <div className="small-glow small-glow-3"></div>
      <div className='content'>
        <Header />
        <Allroutes />
      </div>
    </div>
  );
}

export default App;
