import { Link } from "react-router";
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
                        <Link to='/'>
                            <img src='/logo/victora-logo.png' alt='victora-logo' />
                        </Link>
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
                                <Link to='/about-us'>About Us</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/vission-mission'>Vision & Mission</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/leadership'>Leadership</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/our-journey'>Our Journey</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/certifications'>Certifications</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/key-milestones'>Key Milestones</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/manufacturing-process'>Manufacturing Process</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/future-plans'>Future Plans</Link>
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
                                <Link to='/press-shop'>Press Shop</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/weld-shop'>Weld Shop</Link> 
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                 <Link to='/flexible-mfg'>Flexible Mfg</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/tool-design'>Tool Design</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                 <Link to='/tool-room'>Tool Room</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        <Link to='/quality'>QUALITY</Link>
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        <Link to='/customers'>CUSTOMERS</Link>
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        <Link to='/csr'>CSR</Link>
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
                                <Link to='/location'>Location</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/business-enquries'>Business Enquiries</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                                <Link to='/careers'>Careers</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition">
                               <Link to='/supply-to-us'>Supply to us</Link> 
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/driving-directions'>Driving Directions</Link>
                            </li>

                            <li className="px-5 py-3 hover:bg-blue-50 hover:text-blue-700 transition rounded-b-lg">
                                <Link to='/elevator-mfg'>Elevator Mfg.</Link>
                            </li>

                        </ul>
                    </li>

                    <li className="cursor-pointer hover:text-blue-700 transition-colors duration-300">
                        <Link to='/blogs'>BLOGS</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar