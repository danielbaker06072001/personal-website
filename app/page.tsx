"use client";

import Introduction from '@/components/Introduction';
import AboutMe from '@/components/AboutMe';
import Project from '@/components/Project';
import useAutoScrollSections from '@/lib/useAutoScroll';
import MyLife from '@/components/MyLife';
import Skill from '@/components/Skill';
export default function Home() {
  const sectionIds = ["intro", "about-me", "project", "mylife", "skills"]; // List of section IDs
  useAutoScrollSections(sectionIds);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-text">
      <Introduction/>
      <AboutMe/>
      <Project/>
      <MyLife/>
      <Skill/>
    </div>
  );
}
