"use client";
import { useEffect, useRef } from "react";

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const snowflakes: { x: number; y: number; radius: number; speed: number }[] = [];

    for (let i = 0; i < 30; i++) {
      snowflakes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
      });
    }

    const updateSnowfall = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((snowflake) => {
        snowflake.y += snowflake.speed;
        if (snowflake.y > canvas.height) snowflake.y = 0;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();
      });
      requestAnimationFrame(updateSnowfall);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateSnowfall();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
