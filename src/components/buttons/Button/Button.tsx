import classnames from 'classnames';
import type { ComponentPropsWithRef, FC, ReactNode } from 'react';
import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  onClick?: () => void;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  disabled,
  loading,
  startIcon,
  endIcon,
  children,
  className,
  ...props
}) => {
  const classes = classnames(
    styles.button,
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading
    },
    className
  );

  return (
    <button type={type} disabled={loading || disabled} className={classes} {...props}>
      {!!startIcon && <div className={styles.start_icon}>{startIcon}</div>}

      <span className={classnames('body-1', styles.button_text)}>{children}</span>

      {!!endIcon && <div className={styles.end_icon}>{endIcon}</div>}
    </button>
  );
};
