import type { FC } from 'react';
import React, { ComponentPropsWithRef } from 'react';

export const ArrowLeftIcon: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.5355 16.2257C14.8332 16.522 14.8338 17.0037 14.5368 17.3007V17.3007C14.2403 17.5972 13.7597 17.5972 13.4632 17.3007L8.70563 12.5432C8.31568 12.1532 8.31502 11.5212 8.70416 11.1304L13.4381 6.37671C13.7344 6.07911 14.2161 6.0786 14.5131 6.37559V6.37559C14.8096 6.67213 14.8096 7.15292 14.5131 7.44946L10.125 11.8375L14.5355 16.2257Z'
      fillOpacity='0.87'
    />
  </svg>
);
