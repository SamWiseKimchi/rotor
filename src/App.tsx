import React, { useEffect, useState } from 'react';
import Digital from './Digital/Digital';
import Analogue from './Analogue/Analogue';
import styles from './App.module.css';

function App() {
  let date = new Date();
  /**
   *  The choice to have the time passed in as props was so that:
   * - Digital and Analog component can be dumb components that take in minimal amount of information and display the time
   * - if you ever want to display a differnt time to that of your device, you could pass in different props, rather than having component be coupled to the date
   * */
  let [hours, setHours] = useState(date.getHours());
  let [minutes, setMinutes] = useState(date.getMinutes());
  let [seconds, setseconds] = useState(date.getSeconds());

  function updateTime() {
    let date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setseconds(date.getSeconds());
  }

  useEffect(() => {
    let timeUpdate = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timeUpdate);
    };
  });

  return (
    <div className={styles.container}>
      <Analogue
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        clockSize={100}
      />
      <Digital hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default App;
