'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/products/ProductCard";
import {Roboto_Condensed} from "next/font/google";
import InfoSection from "../components/products/InfoSection";
import data from "../data/products.json";
import React, { useState } from "react";

const roboto = Roboto_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});  

export default function ProductPage() {
    return (
        <main className={roboto.className}>
            <Navbar />
            <div className="bg-zinc-800 w-full h-16"></div>
            <InfoSection />
            <div className="flex flex-col md:flex-row mx-4 md:mx-8">
                {/* Main content area */}
                <div className="w-full md:ml-6 md:flex-1">
                    

                    {/* Research cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {data.map((product, index) => (
                        <div 
                        key={`${product.id}-${index}`}
                        className="transform transition-all duration-300 ease-in-out hover:scale-102 opacity-0 animate-fade-in"
                        >
                        <ProductCard
                            title={product.name}
                            // authors={product.authors}
                            // tags={product.fields}
                            description={product.description}
                            imageUrl={product.imageUrl}
                            link={product.link}
                        />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}