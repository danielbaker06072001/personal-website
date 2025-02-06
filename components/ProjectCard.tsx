import { Eye } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  techUsed: string[]; 
}

export default function ProjectCard({ title, description, link, techUsed }: ProjectCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 
                    mx-auto relative flex flex-col justify-between 
                    w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[390px] lg:w-[440px] lg:h-[440px] 
                    p-5 md:p-7 rounded-2xl transition-transform duration-300 hover:scale-105 z-10">
      {/* Browser Icons */}
      <div className="absolute top-3 left-4 flex space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-8 text-white">
        {title} <span className="text-gray-200">AI Prediction.</span>
      </h2>

      {/* Technologies Used */}
      <div className="mt-2 flex flex-wrap gap-2">
        {techUsed.map((tech, index) => (
          <span key={index} className="bg-white/20 text-gray-300 text-xs sm:text-sm px-2 py-1 rounded-lg">
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-300 mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
        / {description} /
      </p>

      {/* View Button with Link */}
      <div className="mt-auto flex justify-end">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center space-x-2 bg-white/20 px-4 py-2 text-white rounded-lg hover:bg-white/30 transition">
            <Eye size={16} />
            <span className="text-xs sm:text-sm uppercase tracking-wide">View</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
