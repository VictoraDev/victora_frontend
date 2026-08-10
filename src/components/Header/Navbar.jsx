import Info from "./Info.jsx"
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-blue-50 to-blue-300 backdrop-blur-md border-b border-blue-100 shadow-md">

            <Info />

            <hr class="border-t border-gray-400" />

            <div className="px-10 py-2 font-semibold">

                {/* navigation links */}
                <ul className="flex justify-start items-center gap-14  text-[#2f3542] font-semibold">

                    <div>
                        <img src='/logo/victora-logo.jpg' alt='victora-logo' />
                    </div>

                    {/* COMPANY */}
                    <li className="relative group cursor-pointer">
                        <div className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300">
                            COMPANY
                            <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </div>

                        <ul className="absolute left-0 top-10 w-56 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                About Us
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Vision & Mission
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Leadership
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Our Journey
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Certifications
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Key Milestones
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Manufacturing Process
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Future Plans
                            </li>
                        </ul>
                    </li>

                    {/* INFRASTRUCTURE */}
                    <li className="relative group cursor-pointer">

                        <div className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300">
                            INFRASTRUCTURE
                            <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </div>

                        <ul className="absolute left-0 top-10 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Press Shop
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Weld Shop
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Flexible Mfg.
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Tool Design
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Tool Room
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                ELevator Mfg.
                            </li>

                        </ul>
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        QUALITY
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        CUSTOMERS
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        CSR
                    </li>

                    <li className="relative group cursor-pointer">

                        <div className="flex items-center gap-1 hover:text-blue-700 transition-colors duration-300">
                            CONTACT US
                            <span className="text-xs transition-transform duration-300 group-hover:rotate-180">
                                ▼
                            </span>
                        </div>

                        <ul className="absolute left-0 top-10 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Location
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Business Enquiries
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Careers
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                Supply to us
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                Driving Directions
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                ELevator Mfg.
                            </li>

                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar