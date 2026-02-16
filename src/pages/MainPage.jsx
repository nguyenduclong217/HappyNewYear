import React, { useState } from "react";
import CountdownLayout from "../components/CountdownLayout";
import FireworkLayout from "../components/FireworkLayout ";
import LuckyMoneyLayout from "../components/LuckyMoneyLayout ";
import { AnimatePresence } from "framer-motion";
export default function MainPage() {
  const [step, setStep] = useState(3);
  return (
    <div>
      <AnimatePresence mode="wait">
        {step === 1 && <CountdownLayout key="1" onDone={() => setStep(2)} />}
        {step === 2 && <FireworkLayout key="2" onDone={() => setStep(3)} />}
        {step === 3 && <LuckyMoneyLayout key="3" />}
      </AnimatePresence>
    </div>
  );
}
