"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Ellipse from "@/assets/Earth.png";
import Duck from "@/assets/duck.svg";
import AboutLine from "@/assets/about_line.png";

export default function AboutMe() {
	return (
		<div
			id="about-me"
			className="relative w-[80vw] h-[100vh] lg:max-w-6xl md:max-w-3xl sm:max-w-md overflow-hidden flex flex-col justify-center items-start text-base text-left z-2 ">
      <span className="text-transparent bg-clip-text bg-gradient-to-r p-2 from-[#1D4ED8] to-[#5AD7FE] font-mono text-sm uppercase tracking-wide border border-neutral-800 rounded-sm opacity-75 w-[140px] text-center font-light mb-12">
        # INTRODUCE
      </span>
      <p className="text-xl md:text-3xl lg:text-4xl tracking-tight">I help people make the world better</p>
      <p className="text-xl md:text-3xl lg:text-4xl tracking-tight mb-10">through scalable and quality software</p>
      <div className="space-y-2">
        <p className="text-sm font-thin md:text-base lg:text-lg">
          I'm a big <span className="font-bold">rock climbing</span> enthusiast.
        </p>
        <p className="text-sm font-thin max-w-2xl md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8">
          When I'm not spending time with my family or at my computer, you’ll find me in the woods climbing rocks or hiking with my friend. Also, I abide myself by the concept of <span className="font-bold">continuous improvement and learning</span>.
        </p>
      </div>
			<div className="mt-10 space-y-5">
				<div>
					<span className="text-neutral-400 opacity-75 font-light">** BIRTHDAY:</span>
					<span className="text-neutral-100"> July 6 2001</span>
				</div>
				<div>
					<span className="text-neutral-400 opacity-75 font-light">NICK NAME:</span>
					<span className="text-neutral-100"> Ducky</span>
					<Image
						src={Duck}
						alt="Duck"
						width={24}
						height={24}
						className="inline-block ml-2"
					/>
				</div>
				<div>
					<span className="text-neutral-400 opacity-75 font-light">NATIONALITY:</span>
					<span className="text-neutral-100"> VIETNAMESE **</span>
				</div>
        <Image
          src={AboutLine}
          alt="line"
          width={158}
          height={12}
          className="absolute  ml-2"
          style={{ bottom: "80px", left : "0", transform: "translateY(-50%)" }}
        />
			</div>
			<Image
				src={Ellipse}
				alt="Ellipse"
				className="absolute opacity-50"
				layout="intrinsic"
				width={450}
				height={450}
				style={{ top: "50%", right: "0", transform: "translateY(-50%)" }}
			/>
		</div>
	);
}
