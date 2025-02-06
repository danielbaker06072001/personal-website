"use client";

import React, { useState } from "react";

export default function ViewResumeButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 200); // Reset after 200ms

        // Create a link element and trigger a download
        const link = document.createElement("a");
        link.href = "/duc.pdf"; // Ensure the PDF is in the 'public' folder
        link.download = "duc.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`z-10 w-full font-bold max-w-[188px] h-[52px] text-white text-sm lg:max-w-[188px] lg:h-[52px] md:max-w-[172px] md:h-[48px] sm:max-w-[140px] sm:h-[40px] lg:text-lg md:text-base sm:text-sm p-4 flex items-center justify-center transition-all duration-200 ease-in-out rounded-lg border border-white/30 shadow-lg 
                ${
                    clicked
                        ? "scale-95"
                        : "hover:brightness-110"
                }`}
            style={{
                background: "linear-gradient(90deg, #1D8FD8 12%, #5AD7FE 93%)",
            }}
        >
            View Resume
        </button>
    );
}
