import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
class Particle {
  constructor(x, y, color, ctx, gravity) {
    this.x = x;
    this.y = y;
    this.speed = Math.random() * 5 + 2;
    this.angle = Math.random() * Math.PI * 2;
    this.alpha = 1;
    this.color = color;
    this.ctx = ctx;
    this.gravity = gravity;
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed + this.gravity;
    this.alpha -= 0.01;
  }

  draw() {
    this.ctx.globalAlpha = this.alpha;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }
}

class Firework {
  constructor(canvas, ctx, particles, explodeSound, gravity) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.particles = particles;
    this.explodeSound = explodeSound;
    this.gravity = gravity;

    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height * 0.5;
    this.speed = 5;
    this.exploded = false;
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  }

  update() {
    if (!this.exploded) {
      this.y -= this.speed;

      if (this.y <= this.targetY) {
        this.exploded = true;
        this.explodeSound();

        for (let i = 0; i < 80; i++) {
          this.particles.push(
            new Particle(this.x, this.y, this.color, this.ctx, this.gravity),
          );
        }
      }
    }
  }

  draw() {
    if (!this.exploded) {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      this.ctx.fillStyle = "white";
      this.ctx.fill();
    }
  }
}

export default function FireworkLayout({ onDone }) {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fireworks = [];
    let particles = [];
    const gravity = 0.05;

    audioRef.current = new Audio("/firework.mp3");
    audioRef.current.volume = 0.8;

    const explodeSound = () => {};

    const loop = () => {
      requestAnimationFrame(loop);

      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🔥 CHỈ BẮN KHI started = true
      if (started && Math.random() < 0.03) {
        fireworks.push(
          new Firework(canvas, ctx, particles, explodeSound, gravity),
        );
      }

      fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.exploded) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
    };

    loop();
  }, [started]);

  // 👉 Khi click GET START
  const handleStart = () => {
    setStarted(true);

    // 🔊 Phát âm thanh 1 lần duy nhất
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    // Hiện chữ sau 4s
    setTimeout(() => {
      setShowText(true);
    }, 4000);

    // Kết thúc sau 12s nếu cần
    setTimeout(() => {
      onDone && onDone();
    }, 12000);
  };

  return (
    <motion.div
      className="h-screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
    >
      <canvas ref={canvasRef} className="fixed inset-0 bg-black" />

      {/* 🔥 NÚT GET START */}
      {!started && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={handleStart}
            className="px-8 py-4 text-xl font-bold bg-yellow-400 text-black rounded-2xl hover:scale-110 transition"
          >
            Click
          </button>
        </div>
      )}

      {/* 🎆 TEXT */}
      {showText && (
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="
            absolute inset-0 flex items-center justify-center
            text-4xl md:text-7xl font-extrabold
            text-yellow-400
            drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]
            tracking-widest text-center
            animate-pulse w-[80%] mx-auto
          "
        >
          CHÚC MỪNG NĂM MỚI BÍNH NGỌ
        </motion.h1>
      )}
    </motion.div>
  );
}
