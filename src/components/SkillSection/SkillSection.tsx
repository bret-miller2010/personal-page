/** @format */

import SkillIcon from "@/components/SkillSection/SkillIcon";

function SkillSection() {
    return (
        <div className="w-1/2 text-center border-3 bg-blue-200 border-black p-5 rounded-lg">
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <SkillIcon
                    skill="React"
                    image="https://img.icons8.com/?size=100&id=122637&format=png&color=000000"
                />
                <SkillIcon
                    skill="Node"
                    image="https://img.icons8.com/?size=100&id=FQlr_bFSqEdG&format=png&color=000000"
                />
                <SkillIcon
                    skill="Next"
                    image="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
                />
                <SkillIcon
                    skill="Tailwind"
                    image="https://img.icons8.com/?size=100&id=qOFWMoaAQIdR&format=png&color=000000"
                />
                <SkillIcon
                    skill="MongoDB"
                    image="https://img.icons8.com/?size=100&id=WC9GOvjtKVuH&format=png&color=000000"
                />
                <SkillIcon
                    skill="PostgreSQL"
                    image="https://img.icons8.com/?size=100&id=25010&format=png&color=000000"
                />
                <SkillIcon
                    skill="Python"
                    image="https://img.icons8.com/?size=100&id=12584&format=png&color=000000"
                />
                <SkillIcon
                    skill="Java"
                    image="https://img.icons8.com/?size=100&id=2572&format=png&color=000000"
                />
            </div>
        </div>
    );
}

export default SkillSection;
