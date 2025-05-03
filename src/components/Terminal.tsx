
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  text: string;
  className?: string;
  typeSpeed?: number;
  startDelay?: number;
  waitAfterEnd?: boolean;
}

export const Terminal: React.FC<TerminalProps> = ({
  text,
  className,
  typeSpeed = 40,
  startDelay = 0,
  waitAfterEnd = false,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Reset displayed text when text prop changes
    setDisplayedText('');
    
    if (startDelay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, startDelay);
    } else {
      startTyping();
    }
    
    return () => clearTimeout(timeout);
  }, [text]);

  const startTyping = () => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        if (!waitAfterEnd) {
          const blinkInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
          }, 500);
          return () => clearInterval(blinkInterval);
        }
      }
    }, typeSpeed);

    return () => clearInterval(intervalId);
  };

  return (
    <div className={cn('font-terminal text-left', className)}>
      {displayedText}
      {cursorVisible && <span className="animate-terminal-blink">_</span>}
    </div>
  );
};
