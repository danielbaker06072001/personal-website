"use client";

import { useEffect } from "react";

export default function useAutoScrollSections(sectionIds: string[]) {
  useEffect(() => {
    let currentIndex = 0;

    const handleScroll = () => {
      const sections = sectionIds.map((id) => document.getElementById(id));
      if (!sections.length) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const threshold = 0.5; // 50% of the section should be visible

      sections.forEach((section, index) => {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionHeight = bottom - top;

          // Check if the section is at least 50% visible
          if (top < windowHeight * threshold && bottom > windowHeight * (1 - threshold)) {
            if (currentIndex !== index) {
              currentIndex = index;
              section.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);
}
