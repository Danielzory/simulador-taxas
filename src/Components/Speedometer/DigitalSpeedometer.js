import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import styles from './DigitalSpeedometer.module.css'

const DigitalSpeedometer = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Number(value);
    const duration = 2000;
    const increment = end / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setDisplayValue(Math.round(start));
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className={styles.digitalSpeedometer}>
      <p className={styles.speedValue}>{displayValue}</p>
    </div>
  );
};

export default DigitalSpeedometer;
