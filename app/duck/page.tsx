"use client";
import React from "react";
import DuckCard from "@/components/DuckCard";
import DuckButton from "@/components/DuckButton";

import ceoImage from "@/assets/duck/ceo.jpg";
import phe from "@/assets/duck/phe.jpg";
import explore from "@/assets/duck/explore.jpg";
import angry from "@/assets/duck/angry_2.jpg";
import cold from "@/assets/duck/cold.jpg";
import cry from "@/assets/duck/cry.jpg";

const ducks = [
  { id: 1, name: "BossBeak", description: "I set high standards for myself and always aim for the top.", image: ceoImage, rarity: 2, health: 5 },
  { id: 2, name: "GrindQuack", description: "I push myself to kepe learning and improving even it means sleepy.", image: phe, rarity: 3, health: 4 },
  { id: 3, name: "WanderWings", description: "I have a rentless spirit and passion for discovering new things.", image: explore, rarity: 1, health: 6 },
  { id: 4, name: "PoutyPlume", description: "I might seem relaxed, but I have a lot in my mind.", image: angry, rarity: 5, health: 2 },
  { id: 5, name: "FrostFeather", description: "I love the idea of winter, but I can&apos;t handle cold.", image: cold, rarity: 4, health: 3 },
  { id: 6, name: "TenderQuack", description: "I deeply understand and care about others, I pickup on emotions easily.", image: cry, rarity: 6, health: 3 },
];

export default function Ducks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6 pt-20 pb-20">
      <h1 className="text-4xl font-bold mb-6">Discover the Ducks - My Traits in Feathery Form</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ducks.map((duck) => (
          <DuckCard key={duck.id} duck={duck} />
        ))}
      </div>
      <DuckButton/>
    </div>
  );
}