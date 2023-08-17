import React from 'react';
import styles from './Analogue.module.css';

// takes in minimal information needed to render itself
type AnalogueProps = {
  hours: number;
  minutes: number;
  seconds: number;
  clockSize: number;
};

type HandDimensions = {
  length: number;
  width: number;
  rotation: number;
};

// return the rotation and translation style string given the width and height of the hand

const transformString = (hd: HandDimensions, unit: number, clockSize: number) =>
  `translate(${clockSize / 2 - hd.width / 2}px,${
    clockSize / 2 - hd.length
  }px) rotate(${hd.rotation * unit}deg)`;

export default function Analogue(props: AnalogueProps) {
  const CLOCK_SIZE = 100;

  const handDimensions = {
    hours: {
      length: 0.25 * CLOCK_SIZE,
      width: 0.04 * CLOCK_SIZE,
      rotation: 30,
    },
    minutes: {
      length: 0.35 * CLOCK_SIZE,
      width: 0.02 * CLOCK_SIZE,
      rotation: 6,
    },
    seconds: {
      length: 0.4 * CLOCK_SIZE,
      width: 0.01 * CLOCK_SIZE,
      rotation: 6,
    },
  };

  // since the styles are computed, they do not need to be stored as state
  const hoursStyle = {
    transform: transformString(
      handDimensions.hours,
      props.hours,
      props.clockSize
    ),
    width: handDimensions.hours.width,
    height: handDimensions.hours.length,
    transformOrigin: `${handDimensions.hours.width / 2}px ${
      handDimensions.hours.length * 0.9
    }px`,
  };
  const minutesStyle = {
    transform: transformString(
      handDimensions.minutes,
      props.minutes,
      props.clockSize
    ),
    width: handDimensions.minutes.width,
    height: handDimensions.minutes.length,
    transformOrigin: `${handDimensions.minutes.width / 2}px ${
      handDimensions.minutes.length * 0.9
    }px`,
  };
  const secondsStyle = {
    transform: transformString(
      handDimensions.seconds,
      props.seconds,
      props.clockSize
    ),
    width: handDimensions.seconds.width,
    height: handDimensions.seconds.length,
  };

  const shadowSize = 0.05 * CLOCK_SIZE;

  const clockStyle = {
    width: CLOCK_SIZE,
    height: CLOCK_SIZE,
    boxShadow: `-${shadowSize}px ${shadowSize}px ${shadowSize}px darkgray`,
  };

  return (
    <div className={styles.clock} style={clockStyle}>
      <div className={styles.clockBase} />
      <div className={styles.hours} style={hoursStyle} />
      <div className={styles.minutes} style={minutesStyle} />
      <div className={styles.seconds} style={secondsStyle} />
    </div>
  );
}
