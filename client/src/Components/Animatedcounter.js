import React, { useState, useEffect } from 'react';

const AnimatedCounter = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const increment = async () => {
      for (let i = 0; i <= value; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100)); // Wait 2 seconds
        setCurrentValue(i);
      }
    };

    increment();
  }, [value]); // Dependency on value to restart animation on value change

  return (
    <div>
      <h1>{currentValue}</h1>
    </div>
  );
};

export default AnimatedCounter;
