"use client";

import Introduction from '@/components/Introduction';
import AboutMe from '@/components/AboutMe';
import Project from '@/components/Project';
import useAutoScrollSections from '@/lib/useAutoScroll';
import MyLife from '@/components/MyLife';
import Skill from '@/components/Skill';
import WorkExperience from '@/components/Experience';
export default function Home() {
  const sectionIds = ["intro", "about-me", "work-experience", "project", "mylife", "skills"]; // List of section IDs
  useAutoScrollSections(sectionIds);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark text-text">
      <Introduction/>
      <AboutMe/>
      <WorkExperience/>
      <Project/>
      <MyLife/>
      <Skill/>
    </div>
  );
}
