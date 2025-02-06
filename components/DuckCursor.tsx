"use client" 

import { useState, useEffect } from "react";
import Image from "next/image";
import duckImg from "@/assets/cursor.svg"; // Replace with your duck image path

export default function DuckCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-12 h-12"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      <Image src={duckImg} alt="Duck Cursor" width={48} height={48} />
    </div>
  );
}
