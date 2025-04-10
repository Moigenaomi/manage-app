"use client"


import { Bell, ChevronDown } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <nav className="bg-white border-b">
            <div className="px-4 mx-auto">
                <div className="flex justify-between h-16">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-900">ekommart</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-400 hover:text-gray-500">
                            <Bell className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-2">
                            <img
                                className="w-8 h-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=32&h=32&q=80"
                                alt="Admin"
                            />
                            <span className="text-sm font-medium text-gray-700">Admin</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
