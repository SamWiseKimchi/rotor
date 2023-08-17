import React from 'react';
import styles from './Digital.module.css';

// takes in minimal information needed to render itself
type DigitalProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

// pads the number to be prepended with 0's for 2 digits
const pad = (num: number) => num.toString().padStart(2, '0');

export default function Digital(props: DigitalProps) {
  return (
    <div className={styles.clock}>
      {pad(Math.abs(props.hours - 12))}:{pad(props.minutes)}:
      {pad(props.seconds)}
    </div>
  );
}
