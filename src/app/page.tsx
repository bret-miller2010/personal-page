/** @format */
"use client";
import SkillSection from "@/components/SkillSection/SkillSection";
import GreetingSection from "@/components/GreetingSection/GreetingSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import WorkSection from "@/components/WorkSection/WorkSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ResumeSection from "../components/ResumeSection/ResumeSection";

export default function Home() {
    return (
        <div className="flex items-center justify-center flex-col space-y-20 bg-gray-4001">
            <ResumeSection />
            <GreetingSection />
            <SkillSection />
            <ProjectSection />
            <AboutSection />
            <WorkSection />
            {/* <ContactSection /> */}
        </div>
    );
}
