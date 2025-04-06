import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Tag from "./Tag"

import products from "../../data/products.json"

export default function ProductSection() {
return (
    // {/* Featured Products Section */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center max-w-3xl mx-auto mb-12">
                <h2 className="text-zinc-800 text-4xl font-bold mb-4">Our Products</h2>
                <Image 
                    src="/svgs/Underlines.svg" 
                    alt="underline" 
                    className="-mt-2 mb-6 w-48 md:w-56 lg:w-64"
                    width={200} 
                    height={20}
                />
                <p className="text-xl text-slate-700">
                Discover our products that are transforming future through innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {products
                .filter((product) => product.featured)
                .map((product) => (
                    <Card key={product.id} className="bg-white border-gray-300 shadow-md hover:shadow-lg transition-shadow overflow-hidden pb-4">
                    <div className="h-48 relative">
                        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                        <div className="absolute top-2 right-2">
                        <Badge
                            variant={
                            //   product.status === "Available"
                            //     ? "default"
                            //     : product.status === "Beta"
                            //       ? "secondary"
                            //       : "outline"
                            "default"
                            }
                        >
                            {product.status}
                        </Badge>
                        </div>
                    </div>
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-xl font-bold line-clamp-1 mb-2">{product.name}</CardTitle>
                            <Tag name={product.category} />
                        </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-neutral-500 mb-4 line-clamp-3">{product.description}</p>
                        <div className="space-y-1 mb-4">
                        <h4 className="text-sm font-bold">Key Features:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 mr-1" />
                                <span>{feature}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                        </CardContent>
                        <CardFooter>
                        <Link href={product.link} target="_blank" className="bg-zinc-800 text-white w-32 h-10 transition duration-700 ease-in-out hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-4 self-start">
                            Learn More
                            <Image src="/svgs/arrow.svg" alt="arrow" className="w-4 h-4 ml-2" width={20} height={20} />
                        </Link>
                    </CardFooter>
                    </Card>
                ))}
            </div>

            {/* <div className="text-center mt-10">
                <Button variant="outline">
                View All Products <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div> */}
        </div>
    </section>
    );
}