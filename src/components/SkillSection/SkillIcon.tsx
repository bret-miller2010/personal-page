/** @format */
"use client";
import Image from "next/image";
type SkillIconProps = {
    skill: string;
    image: string;
};

function SkillIcon({ skill, image }: SkillIconProps) {
    return (
        <div className="flex flex-col items-center justify-center p-8 m-2 bg-gray-100 border-2 border-black rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-gray-300/80">
            <Image
                src={image}
                width={60}
                height={60}
                alt="skill"
            />
            <span className="text-xl font-semibold">{skill}</span>
        </div>
    );
}

export default SkillIcon;
