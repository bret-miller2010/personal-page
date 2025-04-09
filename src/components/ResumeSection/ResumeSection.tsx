/** @format */
"use client";
import Image from "next/image";

import Link from "next/link";

export default function ResumeSection() {
    return (
        <div className="flex space-x-20 mt-5">
            <Link href="/documents/BretMiller_resume_2025.docx">
                <Image
                    src="https://img.icons8.com/?size=100&id=23877&format=png&color=000000"
                    width={40}
                    height={40}
                    alt="resume"
                />
            </Link>
            <Link href="https://github.com/bret-miller2010">
                <Image
                    src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
                    width={40}
                    height={40}
                    alt="resume"
                />
            </Link>
            <Link href="https://www.linkedin.com/in/bretmiller2010/">
                <Image
                    src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
                    width={40}
                    height={40}
                    alt="resume"
                />
            </Link>
        </div>
    );
}
