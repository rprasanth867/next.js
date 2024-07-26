"use client"

import React from 'react';
import { useTheme } from '@/components/theme-provider';
import ImageSlider from '@/components/ImageSlider';
import { clientSideFunction } from '@/utils/client-utils';

export default function ClientRoute() {
  const theme = useTheme();
  const result = clientSideFunction();
  console.log('++++++++++++++++client route theme', theme);
  const settings = {
    dots: true,
  };
  return (
    <div>
      <h1 style={{color: theme.colors.primary}}>Client Route page</h1>
      <p>{result}</p>
      <div className="image-slider-container">
        <ImageSlider />
      </div>
    </div>
  );
}
