import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <span
      aria-hidden
      className={classes(styles.monogram, className)}
      ref={ref}
      {...props}
    >
      🐥
    </span>
  );
});
