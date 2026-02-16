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
      className="h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-screen bg-[url('https://cdnv2.tgdd.vn/mwg-static/common/News/1587909/background-tet-voi-long-den%20%288%29.jpg')] bg-cover bg-center bg-no-repeat">
        <h1 className="mt-6 absolute left-1/2 -translate-x-1/2 text-6xl md:text-7xl font-extrabold text-center text-yellow-400 drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] pt-20 tracking-widest uppercase">
          Coming Soon
        </h1>
        <div className="h-screen flex items-center justify-center text-white">
          <div className="flex items-center gap-6 text-6xl font-bold">
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
    <div className="w-20 h-24 bg-yellow-400 text-black rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
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
