"use client"

import React from 'react'

function Hero() {
    return (
        <section className="relative h-[500px] bg-gray-100">
            <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center h-full">
                <div className="w-1/2">
                    <h2 className="text-5xl font-bold mb-6">
                        Healthy Food<br />& Organic Market
                    </h2>
                    <p className="text-gray-600 mb-8">All natural products</p>
                    <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700">
                        Shop Now
                    </button>
                </div>
                <div className="h-full ">
                    <img
                        src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80"
                        alt="Fresh vegetables"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero