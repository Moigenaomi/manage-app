import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h5 className="font-bold mb-4">HELP</h5>
                        <ul className="space-y-2">
                            <li className="hover:text-green-600 cursor-pointer">Search</li>
                            <li className="hover:text-green-600 cursor-pointer">Help</li>
                            <li className="hover:text-green-600 cursor-pointer">Information</li>
                            <li className="hover:text-green-600 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-green-600 cursor-pointer">Shipping Details</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">SUPPORT</h5>
                        <ul className="space-y-2">
                            <li className="hover:text-green-600 cursor-pointer">Contact us</li>
                            <li className="hover:text-green-600 cursor-pointer">About us</li>
                            <li className="hover:text-green-600 cursor-pointer">Careers</li>
                            <li className="hover:text-green-600 cursor-pointer">Refunds & Returns</li>
                            <li className="hover:text-green-600 cursor-pointer">Deliveries</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">INFORMATION</h5>
                        <ul className="space-y-2">
                            <li className="hover:text-green-600 cursor-pointer">Search Terms</li>
                            <li className="hover:text-green-600 cursor-pointer">Advanced Search</li>
                            <li className="hover:text-green-600 cursor-pointer">Help & FAQs</li>
                            <li className="hover:text-green-600 cursor-pointer">Store Location</li>
                            <li className="hover:text-green-600 cursor-pointer">Orders & Returns</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">CONTACT US</h5>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>123 Main St, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5" />
                                <span>(+01) 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                <span>support@ekommart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t pt-8 text-center text-sm text-gray-600">
                    <p>© {new Date().getUTCFullYear()} ekommart. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer