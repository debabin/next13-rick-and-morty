import React from 'react';

import styles from './Input.module.scss';

type InputProps = React.ComponentPropsWithRef<'input'>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input {...props} ref={ref} className={styles.input} />
));

Input.displayName = 'Input';
