import classnames from 'classnames';
import type { ComponentPropsWithRef, FC, ReactNode } from 'react';
import React from 'react';

import styles from './IconButton.module.scss';

export interface IconButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  onClick?: () => void;
  loading?: boolean;
  icon?: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({
  type = 'button',
  disabled,
  loading,
  icon,
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
      {!!icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
};
