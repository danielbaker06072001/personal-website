"use client";

import { ArrowRight } from "lucide-react"; // ArrowRight for scroll hint

const timelineEvents = [
  { year: 2001, text: "Born in HCM, Vietnam.", icon: "🐤" },
  { year: 2006, text: "Started primary school, loved solving puzzles.", icon: "🦆" },
  { year: 2016, text: "Discovered coding and built my first program.", icon: "🦆" },
  { year: 2020, text: "Started university, studied Computer Science.", icon: "🦢" },
  { year: "Now", text: "Building cool projects & climbing mountains!", icon: "🦆👓" },
];

export default function MyLife() {
  return (
    <section id="mylife" className="relative flex flex-col items-center w-full min-h-[100vh] py-24 mx-auto overflow-hidden">
      {/* Section Title */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-4xl md:text-6xl font-bold mb-12 pb-2 whitespace-nowrap">
        Ducky&#39;s Life Timeline
      </h2>

      {/* Timeline Container */}
      <div className="relative flex items-center justify-start w-full overflow-x-auto px-6 gap-20 scrollbar-custom min-h-[300px] max-w-[85vw]">
        {/* Persistent Timeline Line */}
        <div className="absolute top-[150px] left-0 w-[145vw] border-t-2 border-gray-400/50"></div>

        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex flex-col items-center w-64 mx-16">
            {/* Keep consistent height for all text bubbles */}
            <div className="relative flex flex-col items-center min-h-[160px]">
              {/* Event Description Above */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md w-64 text-white text-center min-h-[90px] flex items-center justify-center">
                {event.text}
              </div>
            </div>

            {/* Connector Dot (Timeline Point) - Fixed Position */}
            <div className="w-6 h-6 bg-yellow-400 rounded-full absolute top-[125px]"></div>

            {/* Year Label with Duck Below */}
            <div className="flex flex-col items-center mt-6">
              <div className="text-white text-lg font-semibold">{event.year}</div>
              <div className="text-3xl mt-2">{event.icon}</div> {/* Duck Emoji */}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex items-center gap-2 text-gray-400 text-sm mt-10">
        <span>Scroll to explore</span>
        <ArrowRight size={16} className="text-yellow-300 animate-bounce-horizontal" />
      </div>
    </section>
  );
}
