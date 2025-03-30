import Link from "next/link"
import { ChevronRight, Microscope, Rocket, Users } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

export default function OverviewCards() {
return (
    <section className="bg-white grid grid-cols-1 md:grid-cols-3 gap-8 py-8 mx-auto px-4 sm:px-6 lg:px-20">
        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800/20 flex items-center justify-center mb-4">
                <Microscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Research Excellence</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-slate-600">
                Our team conducts cutting-edge research in quantum computing, robotics, and automation systems that
                push the boundaries of what is possible.
                </p>
            </CardContent>

            <CardFooter>
                <Link href="/research" className="text-primary flex items-center text-base font-medium">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </CardFooter>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800/20 flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovative Products</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-slate-600">
                We transform theoretical research into practical applications and products that solve real-world
                problems across various industries.
                </p>
            </CardContent>

            <CardFooter>
                <Link href="/products" className="text-primary flex items-center text-base font-medium">
                Explore products <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </CardFooter>
        </Card>

        <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-zinc-800/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Network</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="text-slate-600">
                We foster collaboration with academic institutions, industry partners, and research organizations
                worldwide to accelerate innovation.
                </p>
            </CardContent>

            <CardFooter>
                <Link href="/members" className="text-primary flex items-center text-base font-medium">
                Meet our team <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
            </CardFooter>
        </Card>
    </section>
);
}