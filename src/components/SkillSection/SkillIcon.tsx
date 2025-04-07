/** @format */

type SkillIconProps = {
    skill: string;
    image: string;
};

function SkillIcon({ skill, image }: SkillIconProps) {
    return (
        <div className="flex flex-col items-center justify-center p-4 m-2 bg-gray-100 border-2 border-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img
                src={image}
                alt={skill}
                className="w-16 h-16 mb-2"
            />
            <span className="text-lg font-semibold">{skill}</span>
        </div>
    );
}

export default SkillIcon;
