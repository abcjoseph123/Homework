import React, { useState } from "react";
import "./Controls.css";

type Props = {
  setDuration: Function;
};
function Controls(props: Props) {
  const { setDuration } = props;
  const [intervalId, setIntervalId] = useState<number>(0);

  const handleStartButton = () => {
    let interval: any = setInterval(() => {
      setDuration((previousState: number) => previousState + 1);
    }, 1000);
    setIntervalId(interval);
  };
  const handleStopButton = () => {
    clearInterval(intervalId);
  };

  const handleSubmitButton = () => {
    clearInterval(intervalId);
    setDuration(0);
  };
  return (
    <section className="controls-container">
      <button onClick={handleStartButton}>Start</button>
      <button onClick={handleStopButton}>Pause</button>
      <button onClick={handleSubmitButton}>Reset</button>
    </section>
  );
}

export default Controls;
