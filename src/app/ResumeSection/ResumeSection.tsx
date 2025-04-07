/** @format */
"use client";

import Link from "next/link";

export default function ResumeSection() {
    return (
        <div className="flex space-x-10">
            <Link href="/documents/BretMiller_resume_2025.docx">
                <img
                    src="https://img.icons8.com/?size=100&id=23877&format=png&color=000000"
                    alt="resume"
                    className="w-16 h-16 mb-2"
                />
            </Link>
            <Link href="https://github.com/bret-miller2010">
                <img
                    src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
                    alt="github"
                    className="w-16 h-16 mb-2"
                />
            </Link>
            <Link href="https://www.linkedin.com/in/bretmiller2010/">
                <img
                    src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                    alt="linkedin"
                    className="w-16 h-16 mb-2"
                />
            </Link>
        </div>
    );
}
