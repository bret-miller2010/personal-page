/** @format */

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

function GreetingSection() {
    return (
        <div className="flex w-1/2 justify-between mt-20">
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
                className="rounded-full"
                src="/images/headshot.png"
                width={450}
                height={450}
                alt="A photo of myself"
            />
        </div>
    );
}

export default GreetingSection;
