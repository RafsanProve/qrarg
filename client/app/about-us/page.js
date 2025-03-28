import Image from "next/image"
import { ArrowRight, Award, BookOpen, Calendar, Globe, Lightbulb, Target, Users } from "lucide-react"

import { Card, CardContent } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "../components/about-us/Hero"
import Story from "../components/about-us/Story"
import CoreValues from "../components/about-us/Core-Values"
import Timeline from "../components/about-us/Timeline"
import Leadership from "../components/about-us/Leadership"
// import Partners from "../components/about-us/Partners"

import {Roboto_Condensed} from "next/font/google";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});  


export default function AboutPage() {
return (
    <main className={roboto.className}>
        {/* <div className="flex flex-col min-h-screen w-full"> */}
            <Navbar />
            <Hero 
            title="About Us"
            description= "Pioneering the future through quantum innovation and collaborative research excellence."
            />
            <Story />
            <CoreValues />
            <Timeline />
            <Leadership />
            {/* <Partners /> */}
            <Footer />
        {/* </div> */}
    </main>
)
}

