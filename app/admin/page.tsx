import React from 'react'
import Header from './_components/Header'
import { BarChart3, LayoutDashboard, Package, Settings } from 'lucide-react';



function page() {

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
        { id: 'products', label: 'Products', icon: <Package className="w-5 h-5" /> },
        { id: 'reports', label: 'Reports', icon: <BarChart3 className="w-5 h-5" /> },
        { id: 'preferences', label: 'Preferences', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div>

            <Header />

            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 min-h-screen bg-white border-r">
                    <nav className="p-4 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`flex items-center gap-3 w-full px-4 py-2 text-sm font-medium rounded-lg ${activeSection === item.id
                                    ? 'text-green-700 bg-green-50'
                                    : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {item.icon}
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>
                {/* Main content */}

            </div>
        </div>
    )
}

export default page