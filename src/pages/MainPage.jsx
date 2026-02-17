import React, { useRef, useState } from "react";
import CountdownLayout from "../components/CountdownLayout";
import FireworkLayout from "../components/FireworkLayout ";
import LuckyMoneyLayout from "../components/LuckyMoneyLayout ";
import { AnimatePresence } from "framer-motion";
// export default function MainPage() {
//   const [step, setStep] = useState(2);
//   const fireworkRef = useRef(null);
//   const bgMusicRef = useRef(null);
//   return (
//     <div>
//       {/* Step 2 audio */}
//       <audio ref={fireworkRef} preload="auto">
//         <source src="/firework.mp3" type="audio/mpeg" />
//       </audio>

//       {/* step3 */}
//       <audio ref={bgMusicRef} loop preload="auto">
//         <source src="/music.mp3" type="audio/mpeg" />
//       </audio>

//       <AnimatePresence mode="wait">
//         {step === 1 && <CountdownLayout key="1" onDone={() => setStep(2)} />}
//         {step === 2 && (
//           <FireworkLayout
//             onStart={() => {
//               // 🔓 unlock audio (QUAN TRỌNG)
//               fireworkRef.current.volume = 1;
//               bgMusicRef.current.volume = 0;

//               fireworkRef.current.play();
//               bgMusicRef.current.play(); // play nhưng volume = 0
//             }}
//             onDone={() => {
//               fireworkRef.current.pause();
//               bgMusicRef.current.volume = 0.3;
//               setStep(3);
//             }}
//           />
//         )}

//         {step === 3 && <LuckyMoneyLayout />}
//         {step === 3 && <LuckyMoneyLayout key="3" />}
//       </AnimatePresence>
//     </div>
//   );
// }

export default function MainPage() {
  const [step, setStep] = useState(2);

  const fireworkRef = useRef(null);
  const bgMusicRef = useRef(null);

  return (
    <div>
      {/* Step 2 */}
      <audio ref={fireworkRef} preload="auto">
        <source src="/firework.mp3" type="audio/mpeg" />
      </audio>

      {/* Step 3 */}
      <audio ref={bgMusicRef} loop preload="auto">
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {step === 2 && (
          <FireworkLayout
            onStart={() => {
              // 🔓 UNLOCK TẤT CẢ AUDIO
              fireworkRef.current.volume = 1;
              bgMusicRef.current.volume = 0;

              fireworkRef.current.play();
              bgMusicRef.current.play(); // play nhưng mute
            }}
            onDone={() => {
              fireworkRef.current.pause();
              bgMusicRef.current.volume = 0.3;
              setStep(3);
            }}
          />
        )}

        {step === 3 && <LuckyMoneyLayout />}
      </AnimatePresence>
    </div>
  );
}
