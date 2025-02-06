"use client"

import { ArrowUpRight } from "lucide-react";

export default function GithubButton() {
  return (
    <button 
      onClick={() => window.location.href = 'https://github.com/danielbaker06072001'} 
      className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-500 bg-[#0F172A] hover:bg-[#1E293B] transition animate-pulse"
    >
      <ArrowUpRight size={20} className="text-white" />
    </button>
  );
}
