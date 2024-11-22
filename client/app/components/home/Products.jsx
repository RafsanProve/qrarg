import Image from "next/image";
import HomeCard from "./HomeCard";
import Link from "next/link";

export default function Products() {
    return (
    <section className="bg-white text-zinc-800 p-4 shadow-lg flex flex-col items-center justify-center h-full w-full mx-auto text-center pb-10 mt-20 sm:mx-8 md:mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-4">Featured Products</h1>
        <div>
        <Image 
            src="/svgs/Underlines.svg" 
            alt="underline" 
            className="-mt-2 w-48 md:w-56 lg:w-64"
            width={200} 
            height={20}
        />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <HomeCard 
                title={"Artificial Kinetic Intelligence (AKI), the Automated Data Analysis and Machine Learning Tool for Educational Research."} 
                description={"A Dynamic Machine Learning and Data Analysis Web Application streamlines key data science tasks, including data preprocessing, model training, validation, and deployment. Built with Streamlit, its intuitive interface makes machine learning accessible to users with minimal technical expertise. The app simplifies processes such as feature engineering, missing data handling, outlier detection, and scaling. It supports multiple regression and classification models, offering comprehensive performance evaluation. Additionally, it enables dynamic hyperparameter tuning for optimized model performance."} 
                imageUrl={"/images/AKI.png"}
                link={""}
            />
            <HomeCard 
                title={"Intelligent Head-bot, towards the Development of an AI Based Cognitive Platform"} 
                description={"A cognitive humanoid head is an AI-enabled head-bot platform designed to emulate human cognitive abilities, including perception, thinking, learning, and decision-making. It uses natural language processing to interact with humans and recognizes individuals, facilitating seamless communication. The head-bot can imitate a range of expressions, engage visitors in general conversation, and identify individuals. Its skeleton is constructed from hexagonal PVC sheet blocks, forming a human-like head structure equipped with an LCD, camera, microphones, and speaker for enhanced functionality."} 
                imageUrl={"/images/Head-bot.png"}  
                link={""}
            />
            <HomeCard 
                title={"Rock-Paper-Scissor, an intelligent zero-sum gaming system for Education and Entertainment."} 
                description={"A custom robotic hand, powered by five servo motors, replicates gestures detected by a computer. The system integrates a TensorFlow Lite (TFLite) model with a Mediapipe-based hand recognition framework and a Random Forest classifier. Designed for real-time use on a Raspberry Pi, the TFLite model analyzes webcam input to detect a thumbs-up gesture, initiating a countdown. Once completed, the user’s gesture is captured and classified, leveraging 3D hand landmarks extracted by Mediapipe and categorized using the Random Forest classifier."} 
                imageUrl={"/images/rock.png"} 
                link={""}
            />
        </div>
        <Link href="#" className="border-solid border-2 border-zinc-800 transition duration-700 ease-in-out hover:scale-105 text-TEXT font-bold py-3 mt-16 md:py-4 px-6 md:px-8 text-lg md:text-xl w-40 md:w-44 lg:w-48 h-14 md:h-16 flex items-center justify-center gap-2">
            See More 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </Link>
    </section>
    )
}