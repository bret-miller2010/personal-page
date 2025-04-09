/** @format */

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

function GreetingSection() {
    return (
        <div className="w-full flex items-center flex-col space-y-20">
            <div className="flex w-1/2 justify-between border-3 bg-orange-100 border-black p-5 rounded-lg hover:bg-orange-200/70">
                <div className="m-auto">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Hello, my name is Bret Miller!",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Full Stack Developer",
                            2000,
                            "Fitness Enthusiast",
                            1000,
                            "Gaming Addict",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: "2em", display: "inline-block" }}
                        repeat={Infinity}
                    />
                </div>
                <Image
                    className="rounded-full duration-300 rotate-3 hover:-rotate-3"
                    src="/images/headshot.png"
                    width={450}
                    height={450}
                    alt="A photo of myself"
                />
            </div>
            <p className="text-4xl text-center text-gray-400">
                Skilled in{" "}
                <span className="text-gray-700">
                    <span className="font-bold">React</span> <span className="text-gray-400">and</span> modern web technologies
                </span>
                , I create <span className="text-gray-700">intuitive</span>,
                <br />
                <span className="text-gray-700">maintainable interfaces</span> that drive <span className="text-gray-700 font-bold">user engagement and business impact</span>.
            </p>
        </div>
    );
}

export default GreetingSection;
