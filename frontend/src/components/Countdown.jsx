import { useState, useEffect } from "react";

export default function CountdownTimer() {
  // Set the registration deadline (YYYY, MM - 1, DD, HH, MM, SS)
  const deadline = new Date(2050, 2, 28, 23, 59, 59).getTime(); // Example: Feb 15, 2025, 11:59:59 PM

  const [timeLeft, setTimeLeft] = useState(deadline - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remaining = deadline - now;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  // Convert milliseconds to days, hours, minutes, seconds
  const getTimeComponents = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeComponents(timeLeft);

  return (
    <div className="flex flex-col items-center  border rounded-lg shadow-md  mx-auto fixed right-0 top-40.5 xl:top-47.5 backdrop-blur-3xl">
      <h2 className="text-sm px-3 py-1 font-bold">Registration Close Soon</h2>
      {timeLeft > 0 ? (
        <div className="text-sm">
          {days}d {hours}h {minutes}m {seconds}s
        </div>
      ) : (
        <div className="text-red-600 text-xl font-bold">Registration Closed</div>
      )}
    </div>
  );
}
