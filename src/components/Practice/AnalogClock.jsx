import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()), 1000;
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div style={{ fontSize: "45px" }}>
        <h3>Digital Clock </h3>
        <h4>{time.toLocaleTimeString()}</h4>
        <h4>
          {time.getDay()} {time.getFullYear()}
        </h4>
      </div>
    </>
  );
}

export default DigitalClock;
