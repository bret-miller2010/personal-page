/** @format */
"use client";
import SkillSection from "@/components/SkillSection/SkillSection";
import GreetingSection from "@/components/GreetingSection/GreetingSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import WorkSection from "@/components/WorkSection/WorkSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import ResumeSection from "./ResumeSection/ResumeSection";

export default function Home() {
    return (
        <div className="flex items-center justify-center flex-col">
            <ResumeSection />
            <GreetingSection />
            <SkillSection />
            <AboutSection />
            <WorkSection />
            <ProjectSection />
            <ContactSection />
        </div>
    );
}
