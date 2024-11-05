import Image from "next/image"
import Link from "next/link"

export default function Component() {
    return (
        <div className="min-h-screen bg-gray-500 text-black">
            <main className="container relative grid min-h-[calc(100vh-88px)] grid-cols-12 gap-4">
                <div className="col-span-4 flex flex-col justify-between py-12">
                    <div className="space-y-6">
                        <div>
                            <h2 className="mb-1 text-sm font-light">Introduction</h2>
                            <p className="text-sm font-light text-gray-400">Published on nov 5th 2024</p>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-gray-800">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi optio quos ex pariatur ipsa laudantium. Veniam esse ipsa inventore dolor odio neque optio, odit eligendi sequi? Cum molestias, at saepe iure odio consectetur dolore sint ratione et eaque deserunt reprehenderit voluptates, modi accusantium, veniam culpa aspernatur dolor quam sit beatae.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <svg
                            className="h-48 w-48"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="50" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="0.5" />
                            <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="0.5" />
                        </svg>
                        <div>
                            <p className="text-sm font-light">Heading 1</p>
                            <p className="text-sm font-light text-gray-400">Published on Novenber 5th 2024</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid molestiae eaque tempora distinctio, minus quibusdam eum necessitatibus totam dicta adipisci atque similique laborum labore, dolores neque, possimus voluptatum quasi nam?</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-8 col-start-5 flex items-center">
                    <h1 className="text-7xl font-light leading-tight tracking-tight">
                        welcome
                        <br />
                        to the
                        <br />
                        Introduction
                        <br />
                        page
                    </h1>
                </div>
                <div className="absolute bottom-0 right-0 h-96 w-96 overflow-hidden">
                    <Image
                        src="/images/homepageimg/introduction.avif"
                        alt="Moody black and white photograph"
                        width={400}
                        height={400}
                        className="object-cover opacity-50"
                    />
                </div>

                <div className="absolute bottom-6 right-6 flex items-center justify-between space-x-6 text-xs font-light text-gray-400">
                    <p>© copyright - 2024 (all rights reserved)</p>
                </div>
            </main>
        </div>
    )
}