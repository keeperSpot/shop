import React, { useState, useEffect } from 'react';

import { View } from 'framework/surface';

const MainShimmer = ({ className }) => {
  const [color, setColor] = useState(true);
  const toggleColor = () => setColor(!color);

  useEffect(() => {
    const timeoutId = setTimeout(toggleColor, 1500);

    return () => {
      clearInterval(timeoutId);
    };
  }, [color]);

  return (
    <View className={`rounded h-6 m-1 ${className} flex-row`}>
      <View
        animateConfig={{ config: { friction: 0, clamp: true } }}
        animate={color ? 'bg-gray-100' : 'bg-gray-200'}
        className='rounded'
        animateStyle={{ width: color ? '0%' : '100%' }} />
      <View
        animateConfig={{ config: { friction: 0, clamp: true } }}
        animate={color ? 'bg-gray-200' : 'bg-gray-100'}
        className='rounded'
        animateStyle={{ width: color ? '100%' : '0%' }} />
    </View>
  );
};

export const Shimmer = ({ active = true, className = '', children }) => active ?
  <MainShimmer className={className} /> : children;
