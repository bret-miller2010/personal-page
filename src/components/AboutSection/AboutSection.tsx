/** @format */
import Image from "next/image";

export default function AboutSection() {
    return (
        <>
            <div className="w-1/2 flex justify-between items-center">
                <div className="w-1/2 h-fit p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-2 border-black">
                    Hey, I’m Bret! A software developer with a degree in Computer Engineering from Michigan Technological University. Tech has always been a big part of my life. I grew up gaming, got hooked on how
                    things work, and turned that curiosity into a career I love.
                    <br />
                    When I’m not coding, you’ll usually find me staying active, gaming with friends, or diving into a new side project just for fun.
                    <br />
                    I’m always on the lookout for new challenges and opportunities to grow, so if you’re interested in collaborating or just want to chat, feel free to reach out!
                    <br/>
                    If you would like a copy of my resume please utilize the resume link above!
                </div>
                <Image
                    className="m-2 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-2 border-black"
                    src="/images/couple.jpg"
                    width={300}
                    height={300}
                    alt="A photo of myself"
                />
            </div>
        </>
    );
}
