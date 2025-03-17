"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const achievements = [
    { icon: "/svgs/award-svgrepo-com.svg", label: "Research Projects", value: 44 },
    { icon: "/svgs/users-svgrepo-com.svg", label: "Collaborations", value: 35 },
    { icon: "/svgs/book-open-svgrepo-com.svg", label: "Publications", value: 134 },
    { icon: "/svgs/lightbulb-svgrepo-com.svg", label: "Patents", value: 23 },
]

const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime = null;
        const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        }
        window.requestAnimationFrame(step);
    }, [end, duration]);

    return count;
}

const AchievementItem = ({ icon, label, value}) => {
    const count = useCountUp(value)

    return (
        <div className="bg-zinc-800 p-12 rounded-lg text-white text-center transition duration-700 ease-in-out hover:scale-105">
            <Image src={icon || "/placeholder.svg"} alt={label} className="w-12 h-12 mx-auto mb-4" width={48} height={48} />
            <h3 className="text-lg font-semibold mb-2">{label}</h3>
            <p className="text-4xl font-bold">{count}</p>
        </div>
        )
}

export default function AchievementsSection() {
return (
    <div className=" w-full bg-white text-zinc-800 rounded-3xl p-4 shadow-lg flex flex-col items-center justify-center h-full max-w-7xl mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto py-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl text-zinc-800 font-bold text-center mb-12">Key Achievements</h2>
            <div className="flex justify-center">
            <Image
                src="/svgs/Underlines.svg"
                alt="underline"
                className="-mt-8 mb-6 w-56 md:w-64 lg:w-72"
                width={200}
                height={20}
            />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
                <AchievementItem key={index} {...item} />
            ))}
            </div>
        </div>
    </div>
    )
}

