import React from 'react';

interface SlideIndicatorProps {
  total: number;
  currentIndex: number;
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({ total, currentIndex }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${
            currentIndex === index ? 'bg-purple-500' : 'bg-white'
          }`}
        />
      ))}
    </div>
  );
};

export default SlideIndicator;
