import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function CountdownLayout({ onDone }) {
  // const [isFinished, setIsFinish] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const diff = midnight.getTime() - now.getTime();
    // console.log(diff);

    if (diff < 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const time = setInterval(() => {
      const remaining = getTimeRemaining();

      if (
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        clearInterval(time);
        onDone?.();
      } else {
        setTimeLeft(getTimeRemaining());
      }
    }, 1000);

    return () => clearInterval(time);
  }, []);

  const format = (num) => num.toString().padStart(2, "0").split("");

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-screen bg-[url('https://cdnv2.tgdd.vn/mwg-static/common/News/1587909/background-tet-voi-long-den%20%288%29.jpg')] bg-cover bg-center bg-no-repeat">
        <h1
          className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-16  text-3xl sm:text-5xl md:text-7xl font-extrabold  text-yellow-400 text-center drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] tracking-widest
  "
        >
          COMING SOON..
        </h1>
        <div className="h-screen flex items-center justify-center text-white">
          <div
            className="flex items-center gap-2 sm:gap-4 md:gap-6 text-3xl sm:text-5xl md:text-6xl font-bold
"
          >
            <DigitGroup digits={format(timeLeft.hours)} />
            <Colon />
            <DigitGroup digits={format(timeLeft.minutes)} />
            <Colon />
            <DigitGroup digits={format(timeLeft.seconds)} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DigitGroup({ digits }) {
  return (
    <div className="flex gap-2">
      {digits.map((digit, index) => (
        <DigitBox key={index} value={digit} />
      ))}
    </div>
  );
}

function DigitBox({ value }) {
  return (
    <div
      className="
    w-12 h-16
    sm:w-16 sm:h-20
    md:w-20 md:h-24
    bg-yellow-400 text-black
    rounded-2xl
    flex items-center justify-center
    shadow-lg relative overflow-hidden
  "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function Colon() {
  return <div className="text-yellow-400">:</div>;
}
