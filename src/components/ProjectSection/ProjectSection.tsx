/** @format */
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
    return (
        <div className="w-1/2 flex flex-col items-center mt-20">
            <div className="flex gap-5 mt-5">
                <Link href="https://crypto-app-j6r1.vercel.app/">
                    <Image
                        src="/images/crypto.png"
                        alt="Portfolio"
                        width={300}
                        height={300}
                        className="p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in"
                    />
                </Link>
                <Link href="https://www.squaredmade.com/">
                    <Image
                        src="/images/squared.png"
                        alt="Portfolio"
                        width={300}
                        height={300}
                        className="p-4 m-2 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in"
                    />
                </Link>
            </div>
        </div>
    );
}
