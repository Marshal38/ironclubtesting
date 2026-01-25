import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  // useEffect(() => {
  //   localStorage.setItem("Timer", timeLeft);
  // }, [timeLeft]);

  // useEffect(() => {
  //   const savedTime = localStorage.getItem("timeLeft");
  //   if (savedTime) setTimeLeft(Number(savedTime));
  // }, []);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "Timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
