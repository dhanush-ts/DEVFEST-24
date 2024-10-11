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

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="animated-background"></div>
      <div className="animated-background-secondary"></div>
      <div className='custom-cursor'></div>
      <div className='content'>
        <Header />
        <Allroutes />
      </div>
    </div>
  );
}

export default App;
