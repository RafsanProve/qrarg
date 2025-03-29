import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

import products from "../../data/products.json"

export default function ProductSection() {
  return (
    // {/* Featured Products Section */}
    <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-slate-700">
          Discover our flagship products that are transforming industries through quantum innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products
          .filter((product) => product.featured)
          .map((product) => (
            <Card key={product.id} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-2 right-2">
                  <Badge
                    variant={
                      product.status === "Available"
                        ? "default"
                        : product.status === "Beta"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {product.status}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4 line-clamp-3">{product.description}</p>
                <div className="space-y-1 mb-4">
                  <h4 className="text-sm font-semibold">Key Features:</h4>
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
                <Link
                  href={`/products/${product.id}`}
                  className="text-primary flex items-center text-sm font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>

      <div className="text-center mt-10">
        <Button variant="outline">
          View All Products <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
  );
}