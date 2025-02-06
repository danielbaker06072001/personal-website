"use client";

import React from "react";
import Ellipse from "@/assets/Ellipse.png";
import Image from "next/image";
import ViewResumeButton from "./ViewResumeButton";
export default function Introduction() {
	return (
		<div
			id="intro"
			className="max-w-xs h-[100vh] lg:max-w-6xl md:max-w-3xl sm:max-w-md overflow-hidden flex flex-col justify-center items-center mx-auto text-base text-center z-2">
            <h1
                className="opacity-70 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-4 z-1 
             text-transparent bg-clip-text backdrop-blur-lg animate-fade-in 
             bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-[200%] 
             hover:animate-shimmer transition-all duration-1000 animate-dance-3 z-10
             bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-4 shadow-lg mb-5"
                style={{
                    WebkitTextFillColor: "transparent",
                    WebkitBackdropFilter: "blur(10px)",
                }}>
                Duc Minh Nguyen
            </h1>

			<p className="text-sm lg:text-lg md:text-base sm:text-sm pb-1">Software Engineer - DevOps Engineer</p>
			<p className="text-sm lg:text-lg md:text-base sm:text-sm pb-8">HCM [ 10°46′10″N 106°40′55″E ] is my origin.</p>
			<ViewResumeButton />
			<Image
				src={Ellipse}
				alt="Ellipse"
				className="absolute z-0 opacity-50"
				style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
			/>
			<div className="absolute bottom-10 mb-4 text-sm text-gray-500">
				<p className="pb-4">LEARN ABOUT DUC MINH NGUYEN</p>
				<button
					className="z-10 animate-bounce border border-gray-500"
					onClick={() => {
						const aboutMeSection = document.getElementById("about-me");
						if (aboutMeSection) {
							aboutMeSection.scrollIntoView({ behavior: "smooth" });
						}
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
