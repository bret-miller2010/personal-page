/** @format */
import Image from "next/image";

export default function AboutSection() {
    return (
        <>
            <div className="w-1/2 flex justify-around items-center mt-20">
                <div className="w-1/2 h-fit p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-2 border-black">
                    Hey, I’m Bret — a software developer with a degree in Computer Engineering from Michigan Technological University. Tech has always been a big part of my life. I grew up gaming, got hooked on how
                    things work, and turned that curiosity into a career I love.
                    <br />
                    When I’m not coding, you’ll usually find me staying active, gaming with friends, or diving into a new side project just for fun.
                    <br />
                    I’m always on the lookout for new challenges and opportunities to grow, so if you’re interested in collaborating or just want to chat, feel free to reach out!
                </div>
                <Image
                    className="p-6 m-2 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-2 border-black"
                    src="/images/couple.jpg"
                    width={300}
                    height={300}
                    alt="A photo of myself"
                />
            </div>
        </>
    );
}
