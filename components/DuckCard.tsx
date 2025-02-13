import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Duck {
  name: string;
  image: string | StaticImageData;
  description: string;
  rarity: number;
  health: number;
}

interface DuckCardProps {
  duck: Duck;
}

export default function DuckCard({ duck }: DuckCardProps) {
  return (
    <div className="w-64 bg-[#D4E157] border-4 border-[#A3C34F] p-3 rounded-lg pixel-font shadow-lg">
      <div className="bg-[#A3C34F] text-[#3E2723] text-lg font-bold p-2 border-b-2 border-[#8AA62F]">
        {duck.name}
      </div>
      
      <div className="relative w-full h-40 bg-[#F0F4C3] border-b-2 border-[#A3C34F]">
        <Image src={duck.image} alt={duck.name} layout="fill" objectFit="cover" loading="lazy" />
      </div>
      
      <div className="text-[#5D4037] text-sm p-2 border-b-2 border-[#A3C34F] italic">
        &quot;{duck.description}&quot;
      </div>
      
      <div className="flex justify-between p-2 text-[#3E2723]">
        <span className="bg-[#8BC34A] px-2 py-1 rounded">⭐ {duck.rarity}</span>
        <span className="bg-[#FFCDD2] px-2 py-1 rounded text-red-500">❤️ {duck.health}</span>
      </div>
    </div>
  );
}