import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Chuc from "./Chuc";

export default function LuckyMoneyLayout() {
  const musicRef = useRef(null);
  useEffect(() => {
    const audio = musicRef.current;

    // set âm lượng nhỏ cho landing page
    audio.volume = 0.4;

    audio.play().catch(() => {
      console.log("Autoplay bị chặn, cần user interaction");
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setName(savedName);
    }
  }, []);
  // logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    localStorage.setItem("username", name);
    setName(" ");
    setOpen(true);
  };
  console.log(name);
  //
  const [text1, setText1] = useState("Chúc");
  const [text2, setText2] = useState("Mừng");
  const [text3, setText3] = useState("Năm");
  const [text4, setText4] = useState("Mới");

  const numbers = "2026".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setText1((prev) => (prev === "Chúc" ? "Vạn" : "Chúc"));
      setText2((prev) => (prev === "Mừng" ? "Sự" : "Mừng"));
      setText3((prev) => (prev === "Năm" ? "Như" : "Năm"));
      setText4((prev) => (prev === "Mới" ? "Ý" : "Mới"));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    hidden: { y: -400, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    float: {
      rotate: [-3, 3, -3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  // animaton
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // 👈 mỗi lớp cách nhau 0.4s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    // <img src="/background.png" alt="" className="h-screen w-full" />
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background image */}
        <img
          src="/background.png"
          alt=""
          className="absolute w-full h-screen"
        />

        <motion.img
          src="/May.png"
          alt=""
          className="absolute w-full z-2 pointer-events-none hidden md:block"
          initial={{ y: 100, opacity: 0 }} // bắt đầu thấp hơn
          animate={{ y: 0, opacity: 1 }} // trồi lên
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeOut",
          }}
        />

        <motion.img
          src="/pic1.png"
          className="absolute w-50 h-60 left-[-30px] "
          variants={variants}
          initial="hidden"
          animate={{
            y: 0,
            opacity: 1,
            rotate: [-5, 5, -5], // 👈 lắc nhẹ
          }}
          transition={{
            y: {
              duration: 0.5,
              delay: 3,
              ease: "easeOut",
            },
            rotate: {
              duration: 2,
              repeat: Infinity, // 👈 lắc mãi mãi
              ease: "easeInOut",
            },
          }}
        />

        <motion.img
          src="/pic1.png"
          className="absolute w-50 h-60 left-[200px] top-[-40px]"
          variants={variants}
          initial="hidden"
          animate={{
            y: 0,
            opacity: 1,
            rotate: [-6, 6, -6], // 👈 lắc nhẹ
          }}
          transition={{
            y: {
              duration: 0.4,
              delay: 3,
              ease: "easeOut",
            },
            rotate: {
              duration: 2,
              repeat: Infinity, // 👈 lắc mãi mãi
              ease: "easeInOut",
            },
          }}
        />

        <motion.img
          src="/pic1.png"
          className="absolute w-50 h-60 right-[-30px] top-[-20px]"
          variants={variants}
          initial="hidden"
          animate={{
            y: 0,
            opacity: 1,
            rotate: [-6, 6, -6], // 👈 lắc nhẹ
          }}
          transition={{
            y: {
              duration: 0.8,
              delay: 3,
              ease: "easeOut",
            },
            rotate: {
              duration: 2,
              repeat: Infinity, // 👈 lắc mãi mãi
              ease: "easeInOut",
            },
          }}
        />

        <motion.img
          src="/pic1.png"
          className="absolute w-50 h-60 right-[180px] top-[-10px]"
          variants={variants}
          initial="hidden"
          animate={{
            y: 0,
            opacity: 1,
            rotate: [-18, 18, -18], // 👈 lắc nhẹ
          }}
          transition={{
            y: {
              duration: 0.8,
              ease: "easeOut",
              delay: 3,
            },
            rotate: {
              duration: 2,
              repeat: Infinity, // 👈 lắc mãi mãi
              ease: "easeInOut",
            },
          }}
        />

        {/* ===================may============= */}
        <motion.img
          src="/cloud.png"
          className="absolute w-50 top-100 left-110 z-10"
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 3 }}
        />
        <motion.img
          src="/cloud.png"
          className="absolute w-50 top-20 left-50 z-10"
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 3 }}
        />
        <motion.img
          src="/cloud.png"
          className="absolute w-60 top-40 right-60 z-10 rotate-180"
          initial={{ x: "-100vh", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 3 }}
        />

        {/*================================ cloud2============================ */}
        <>
          <motion.img
            src="/cloud2.png"
            className="absolute w-40 top-100 "
            initial={{ x: "-30vw" }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src="/cloud2.png"
            className="absolute w-50 top-80"
            initial={{ x: "-30vw" }}
            animate={{ x: "100vw" }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src="/cloud2.png"
            className="absolute w-40 top-120"
            initial={{ x: "110vw" }}
            animate={{ x: "-100vw" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src="/cloud2.png"
            className="absolute w-45 top-60"
            initial={{ x: "110vw" }}
            animate={{ x: "-100vw" }}
            transition={{
              duration: 8,
              delay: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.img
            src="/cloud2.png"
            className="absolute w-50 top-40"
            initial={{ x: "110vw" }}
            animate={{ x: "-100vw" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 3,
              ease: "linear",
            }}
          />
        </>
        {/*======================= Text ======================= */}
        <motion.div
          className="absolute flex gap-13 left-1/2 -translate-x-1/2 top-5 z-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 3, // 👈 đợi 3s
            type: "spring",
            stiffness: 120,
            damping: 12,
          }}
        >
          <motion.div
            className="w-25 h-25 
  drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
  flex justify-center items-center 
  bg-red-700 border-4 border-yellow-400"
            style={{ transformOrigin: "top center" }} // treo từ phía trên
            animate={{
              rotate: [45, 48, 42, 45], // 👈 lắc quanh 45 độ
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={text1}
                style={{ fontFamily: "TetBrush" }}
                className="text-white font-bold text-xl -rotate-45"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.4 }}
              >
                {text1}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="w-25 h-25 
  drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
  flex justify-center items-center 
  bg-red-700 border-4 border-yellow-400"
            style={{ transformOrigin: "top center" }} // treo từ phía trên
            animate={{
              rotate: [45, 42, 45, 45], // 👈 lắc quanh 45 độ
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={text2}
                style={{ fontFamily: "TetBrush" }}
                className="text-white font-bold text-xl -rotate-45"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.4 }}
              >
                {text2}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="w-25 h-25 
  drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
  flex justify-center items-center 
  bg-red-700 border-4 border-yellow-400"
            style={{ transformOrigin: "top center" }} // treo từ phía trên
            animate={{
              rotate: [45, 48, 42, 45], // 👈 lắc quanh 45 độ
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={text3}
                style={{ fontFamily: "TetBrush" }}
                className="text-white font-bold text-xl -rotate-45"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.4 }}
              >
                {text3}
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="w-25 h-25 
  drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
  flex justify-center items-center 
  bg-red-700 border-4 border-yellow-400"
            style={{ transformOrigin: "top center" }} // treo từ phía trên
            animate={{
              rotate: [45, 42, 48, 45], // 👈 lắc quanh 45 độ
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={text4}
                style={{ fontFamily: "TetBrush" }}
                className="text-white font-bold text-xl -rotate-45"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.4 }}
                transition={{ duration: 0.4 }}
              >
                {text4}
              </motion.h1>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ==================center================== */}
        <motion.div
          className="absolute border-4 border-amber-500 w-124 h-124 
  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
  flex items-center justify-center bg-red-700 rounded-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src="/Hoado.png"
            alt=""
            className="absolute w-32 top-0 left-0 z-11"
            variants={itemVariants}
            animate={{ rotate: 360 }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          <motion.img
            src="/Hoado.png"
            alt=""
            className="absolute w-32 bottom-10 z-10 right-0"
            variants={itemVariants}
            animate={{ rotate: 360 }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          <motion.img
            src="/Hoado2.png"
            alt=""
            className="absolute w-40 -left-10 top-10 z-10"
            variants={itemVariants}
            animate={{ rotate: 360 }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          <motion.img
            src="/Phaohoa.png"
            className="absolute w-50 z-11 -right-10 top-5"
            // variants={variants}
            variants={itemVariants}
            initial="hidden"
            animate={{
              y: 0,
              opacity: 1,
              rotate: [-6, 6, -6], // 👈 lắc nhẹ
            }}
            transition={{
              y: {
                duration: 0.4,
                // delay: 3,
                ease: "easeOut",
              },
              rotate: {
                duration: 2,
                repeat: Infinity, // 👈 lắc mãi mãi
                ease: "easeInOut",
              },
            }}
          />
          {/* ++++Vien++++ */}
          <motion.img
            src="/Vien.png"
            alt=""
            className="absolute w-117 bg-red-600 rounded-full"
            // variants={itemVariants}
            variants={itemVariants}
            animate={{ rotate: 360 }}
            transition={{
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          {/* <h1 className="absolute top-0">dddd</h1> */}
          <div className="w-80 absolute h-80 rounded-full bg-red-800 z-17">
            <motion.img
              src="/Ngua.png"
              alt=""
              className="absolute w-60 -top-5 left-6"
              variants={itemVariants}
            />
            <h1 className="absolute z-20 text-5xl font-bold text-yellow-500 bottom-13 left-1/2 -translate-x-1/2 flex gap-1">
              {numbers.map((num, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  variants={itemVariants}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.4, // 👈 mỗi số trễ 0.4s
                  }}
                >
                  {num}
                </motion.span>
              ))}
            </h1>
          </div>

          <Dialog
          //  open={open} onOpenChange={setOpen}
          >
            <DialogTrigger className="absolute z-100 bottom-15">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
    px-6 py-3 
    bg-gradient-to-r from-yellow-400 to-amber-500 
    text-red-700 font-bold text-lg 
    rounded-xl 
    shadow-lg shadow-yellow-500/40 
    border-2 border-yellow-300 
    cursor-pointer
  "
              >
                Click vào đây
              </motion.button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              {/* <img src="/Lixi.png" alt="" className="w-full" /> */}
              {open === false && (
                <form
                  onSubmit={handleSubmit}
                  className="
     z-20
    left-1/2
    bg-white/90 backdrop-blur-md
    px-8 py-40 rounded-2xl
    shadow-2xl shadow-yellow-500/30
    border-2 border-yellow-300
    flex flex-col gap-4
    w-80
  "
                >
                  <label className="text-red-700 font-semibold text-lg text-center">
                    Nhập tên của bạn vô đây
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tên phải chuẩn ấy"
                    className="
      px-4 py-2
      rounded-lg
      border border-yellow-400
      outline-none
      focus:ring-2 focus:ring-yellow-400
      focus:border-yellow-500
      transition
    "
                  />

                  <button
                    type="submit"
                    className="
      mt-2
      py-2
      bg-gradient-to-r from-yellow-400 to-amber-500
      text-red-700 font-bold
      rounded-lg
      shadow-lg shadow-yellow-500/40
      hover:scale-105
      active:scale-95
      transition-all duration-300
    "
                  >
                    Click
                  </button>
                </form>
              )}
              {open === true && <Chuc />}
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
      <audio ref={musicRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
}
