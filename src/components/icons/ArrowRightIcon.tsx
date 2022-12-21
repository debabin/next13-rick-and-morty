import React, { ComponentPropsWithRef, FC } from 'react';

export const ArrowRightIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg viewBox='0 0 24 24' fill='current' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.46454 16.2256C8.16678 16.5218 8.16617 17.0036 8.46318 17.3006V17.3006C8.75966 17.5971 9.24034 17.5971 9.53682 17.3006L14.2944 12.543C14.6843 12.1531 14.685 11.5211 14.2958 11.1303L9.56194 6.37659C9.26558 6.07898 8.78392 6.07848 8.48694 6.37546V6.37546C8.1904 6.67201 8.1904 7.1528 8.48694 7.44934L12.875 11.8374L8.46454 16.2256Z'
      fillOpacity='0.87'
    />
  </svg>
);
