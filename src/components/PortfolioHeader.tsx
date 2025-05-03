
import { useState, useEffect } from 'react';
import { Terminal } from './Terminal';

export const PortfolioHeader = () => {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    // Format date like in the screenshot: May 1984
    const date = new Date();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    setCurrentDate(`${month} ${year}`);
    
    // Update the date every minute
    const intervalId = setInterval(() => {
      const date = new Date();
      const month = date.toLocaleString('en-US', { month: 'short' });
      const year = date.getFullYear();
      setCurrentDate(`${month} ${year}`);
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="w-full retro-border p-2 flex justify-between items-center bg-retro-dark-brown sticky top-0 z-30">
      <div className="flex items-center">
        <span className="text-retro-amber font-pixel text-lg">[{currentDate}]</span>
      </div>
      <div className="flex-1 px-4">
        <Terminal 
          text="PORTFOLIO SYSTEM ONLINE" 
          className="text-center text-retro-amber-light"
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="bg-retro-amber w-3 h-3 border border-retro-border-brown"></div>
        <div className="bg-retro-dark-gray w-3 h-3 border border-retro-border-brown"></div>
      </div>
    </header>
  );
};
