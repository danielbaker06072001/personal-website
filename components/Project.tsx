import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Ellipse from "@/assets/Ellipse.png";
import Image from "next/image";
import GithubButton from "./GithubButton";

const projects = [
	{
		title: "MicroInsure",
		description: "Golang based microservices Insurance portal application, featuring a scalable distributed and high performance concurrentcy.",
		link: "https://github.com/danielbaker06072001/MicroInsure",
		techUsed: ["Consul", "Kong Gateway", "Golang", "RabbitMQ", "PostgreSQL", "Docker", "Redis"],
	},
	{
		title: "GoClusterFS",
		description: "Distributed file system built in golang, demonstrate networking.",
		link: "https://github.com/danielbaker06072001/GoClusterFS",
		techUsed: ["Golang", "net"],
	},
	{
		title: "CICD Pipeline Automation With Monitoring",
		description: "End-to-end CI/CD pipeline with Jenkins, Kubernetes, and Terraform for automated deployments and monitoring, completed in 6 months.",
		link: "https://github.com/danielbaker06072001/CI-CD-Pipeline-with-Kubernetes-Monitoring",
		techUsed: ["Kubernetes", "Jenkins", "Prometheus", "Grafana", "Docker", "SonarQube", "Terraform"],
	},
	{
		title: "Authentication Services",
		description: "Secure authentication system with hashed & salted passwords, built using Clean Architecture.",
		link: "https://github.com/danielbaker06072001/be_authen_service",
		techUsed: ["Golang", "Gin", "Redis", "PostgreSQL"],
	},
	{
		title: "Exploding Kitten",
		description: "Multiplayer card game with real-time chat and game rooms, built using WebSockets.",
		link: "https://github.com/danielbaker06072001/ExplodingKitten",
		techUsed: ["React", "Node.js", "Socket.io", "MongoDB"],
	},
	{
		title: "Image Processing and Recognition",
		description: "Perform multiple image processing and recognition technique.",
		link: "https://github.com/danielbaker06072001/cp476_project",
		techUsed: ["Python", "OpenCV", "TensorFlow"],
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
			<div className="w-full p-6">
				{/* Filter Buttons */}
				<div className="flex flex-wrap justify-center space-x-2 mb-6">
					{techs.map((tech) => (
						<button
							key={tech}
							onClick={() => setFilter(tech === filter ? null : tech)}
							className={`z-10 px-4 py-2 m-1 rounded-lg ${filter === tech ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}>
							{tech}
						</button>
					))}
				</div>

				{/* Project Grid */}
				<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
