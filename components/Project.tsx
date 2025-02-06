import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Ellipse from "@/assets/Ellipse.png";
import Image from "next/image";
import GithubButton from "./GithubButton";

const projects = [
	{
		title: "Spotify Hit",
		description: "Utilize Python and Spotify records to predict hit songs. Generates graphs and statistical data to support predictions.",
		link: "https://example.com",
		techUsed: ["Python", "Spotify API", "Machine Learning", "Pandas"],
	},
	{
		title: "Weather Forecast AI",
		description: "AI-powered weather prediction model using machine learning and climate analytics.",
		link: "https://weather-ai.com",
		techUsed: ["TensorFlow", "OpenWeather API", "Flask", "NumPy"],
	},
	{
		title: "Stock Market Predictor",
		description: "A financial tool for forecasting stock trends using AI models trained on historical data.",
		link: "https://stockpredictor.com",
		techUsed: ["Golang", "PostgreSQL", "FastAPI", "React"],
	},
	{
		title: "E-Commerce Recommendation Engine",
		description: "A recommendation system using AI to suggest products based on user behavior.",
		link: "https://ecommerce-ai.com",
		techUsed: ["Python", "Scikit-learn", "Django", "AWS"],
	},
	{
		title: "OCR Text Extractor",
		description: "Extracts and processes text from images using AI-powered OCR technology.",
		link: "https://ocr-text-extractor.com",
		techUsed: ["Tesseract OCR", "OpenCV", "FastAPI", "React"],
	},
];

const techs = ["Python", "Golang", "React", "Machine Learning"];

export default function Project() {
	const [filter, setFilter] = useState<string | null>(null);

	const filteredProjects = filter ? projects.filter((p) => p.techUsed.includes(filter)) : projects;
	return (
		<div
			id="project"
			className="relative min-h-screen flex flex-col items-center justify-center w-full ">
			<span className="text-transparent bg-clip-text bg-gradient-to-r mt-10 p-2 from-[#1D4ED8] to-[#5AD7FE] font-mono text-sm uppercase tracking-wide border border-neutral-800 rounded-sm opacity-75 w-[140px] text-center font-light ">
				# PROJECTS
			</span>
			<div className="min-h-screen p-6">
				{/* Filter Buttons */}
				<div className="flex space-x-4 mb-6">
					{techs.map((tech) => (
						<button
							key={tech}
							onClick={() => setFilter(tech === filter ? null : tech)}
							className={`z-10 px-4 py-2 rounded-lg ${filter === tech ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}>
							{tech}
						</button>
					))}
				</div>

				{/* Project Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{filteredProjects.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							link={project.link}
							techUsed={project.techUsed}
						/>
					))}
				</div>
			</div>
			<Image
				src={Ellipse}
				alt="Ellipse"
				className="absolute z-0 opacity-50"
				style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
			/>
			<div className="flex flex-row items-center justify-center space-x-4 mt-10">
				<span>SEE ALL IN GIT HUB</span>
				<GithubButton/>
			</div>
			<div className="h-[80px]"/>
		</div>
	);
}
