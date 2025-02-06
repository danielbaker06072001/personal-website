"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Skill List with Colors
const baseSkills = [
	{ name: "Python", color: "text-yellow-400" },
	{ name: "Java", color: "text-purple-400" },
	{ name: "Go", color: "text-cyan-400" },
	{ name: "HTML", color: "text-orange-400" },
	{ name: "SQL", color: "text-blue-400" },
	{ name: "REST API", color: "text-green-400" },
	{ name: "Git", color: "text-gray-400" },
	{ name: "PostgreSQL", color: "text-emerald-400" },
	{ name: "MongoDB", color: "text-lime-400" },
	{ name: "AWS", color: "text-orange-300" },
	{ name: "React", color: "text-sky-400" },
	{ name: "Kubernetes", color: "text-blue-500" },
	{ name: "Docker", color: "text-blue-300" },
	{ name: "Jenkins", color: "text-rose-400" },
	{ name: "Grafana", color: "text-yellow-500" },
	{ name: "Terraform", color: "text-green-500" },
	{ name: "Helm", color: "text-indigo-500" },
	{ name: "FastAPI", color: "text-teal-400" },
	{ name: "Node.js", color: "text-green-500" },
	{ name: "Next.js", color: "text-gray-300" },
	{ name: "C#", color: "text-violet-400" },
	{ name: "Agile", color: "text-pink-400" },
	{ name: "Problem Solving", color: "text-yellow-500" },
	{ name: "Communication", color: "text-teal-400" },
];

export default function Skill() {
	const [shuffledSkills, setShuffledSkills] = useState<{ name: string; color: string }[]>([]);

	useEffect(() => {
		// Shuffle skills *only* on client-side
		const shuffle = (arr: { name: string; color: string }[]) => [...arr].sort(() => Math.random() - 0.5);
		setShuffledSkills(shuffle(baseSkills));
	}, []);

	return (
		<section id="skills" className="relative flex flex-col items-center w-full h-[100vh] py-20 overflow-hidden">
			{/* Section Title */}
			<span className="text-transparent bg-clip-text bg-gradient-to-r p-3 from-[#1D4ED8] to-[#5AD7FE] font-mono text-2xl md:text-4xl uppercase tracking-wide border border-neutral-800 rounded-md opacity-90 w-[200px] text-center font-semibold mb-14">
				# SKILLS
			</span>

			{/* Moving Skills Container */}
			<div className="relative w-full ">
				{[...Array(3)].map((_, rowIndex) => (
					<div
						key={rowIndex}
						className={`flex whitespace-nowrap gap-6 text-3xl md:text-5xl font-bold tracking-wide animate-scroll-${rowIndex + 1}`}
					>
						{shuffledSkills.length > 0 &&
							[...shuffledSkills, ...shuffledSkills].map((skill, index) => (
								<span key={index} className={`${skill.color} opacity-80`}>
									{skill.name} •
								</span>
							))}
					</div>
				))}
			</div>

			{/* Get in touch section */}
			<div className="absolute inset-0 bg-grid-blue opacity-30 pointer-events-none"></div>

			{/* Container with Glassmorphism */}
			<div className="relative  backdrop-blur-lg p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto mt-16">
				<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5AD7FE] to-[#1D4ED8] text-4xl md:text-5xl font-bold mb-6">
					Get in touch.
				</h2>

				<p className="text-gray-400 max-w-lg text-center mb-8 px-4 md:px-0">
					Feel free to connect with me. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
				</p>

				{/* Social Links */}
				<div className="flex justify-center space-x-4 mb-6">
					<a
						href="https://github.com/danielbaker06072001"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-gray-900/50 hover:bg-gray-800 transition-all rounded-lg"
					>
						<FaGithub className="text-white text-2xl" />
					</a>
					<a
						href="https://www.linkedin.com/in/ducnguyen6721/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-gray-900/50 hover:bg-gray-800 transition-all rounded-lg"
					>
						<FaLinkedin className="text-white text-2xl" />
					</a>
				</div>
			</div>

			{/* Footer */}
			<div className=" bg-gray-800/80 px-6 py-2 text-gray-300 text-sm rounded-md">
				SYSTEM.OUT.PRINTLN(&quot;GOODBYE&quot;);
			</div>

			{/* Background Grid CSS */}
			<style jsx>{`
				.bg-grid-blue {
					background-image: linear-gradient(rgba(29, 78, 216, 0.2) 1px, transparent 1px),
						linear-gradient(to right, rgba(29, 78, 216, 0.2) 1px, transparent 1px);
					background-size: 60px 60px;
				}
			`}</style>

			{/* CSS Animations */}
			<style jsx>{`
				@keyframes scroll-left {
					from {
						transform: translateX(0%);
					}
					to {
						transform: translateX(-50%);
					}
				}

				@keyframes scroll-right {
					from {
						transform: translateX(-50%);
					}
					to {
						transform: translateX(0%);
					}
				}

				.animate-scroll-1 {
					animation: scroll-left 50s linear infinite;
				}

				.animate-scroll-2 {
					animation: scroll-right 55s linear infinite;
				}

				.animate-scroll-3 {
					animation: scroll-left 60s linear infinite;
				}
			`}</style>
		</section>
	);
}
