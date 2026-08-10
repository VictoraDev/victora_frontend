import {
    MapPin,
    Mail,
    Phone,
    ArrowRight
} from "lucide-react";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#2f3542] text-white">

            {/* ================= MAIN FOOTER ================= */}

            <div className="px-10 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* ================= COMPANY ================= */}

                    <div>

                        <div className="mb-6">

                            <h2 className="text-2xl font-bold">
                                VICTORA
                                <span className="text-blue-500">
                                    {" "}INDUSTRIES
                                </span>
                            </h2>

                            <div className="w-12 h-1 bg-blue-500 rounded-full mt-3">
                            </div>

                        </div>

                        <p className="text-gray-300 leading-7 text-sm">
                            A leading Indian manufacturing group delivering
                            precision engineering solutions across automotive,
                            elevator, white goods, telecom and other industries.
                        </p>

                        <button
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                mt-6
                                text-blue-400
                                hover:text-blue-300
                                font-semibold
                                transition
                            "
                        >
                            Know More About Us

                            <ArrowRight
                                size={17}
                                className="
                                    group-hover:translate-x-1
                                    transition-transform
                                "
                            />
                        </button>

                    </div>


                    {/* ================= ABOUT GROUP ================= */}

                    <div>

                        <h3 className="text-lg font-bold mb-6">
                            About Group
                        </h3>

                        <div className="w-10 h-1 bg-blue-500 rounded-full mb-5">
                        </div>

                        <ul className="space-y-3 text-sm text-gray-300">

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Our Story
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Infrastructure
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Awards & Certificates
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Business Enquiries
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Coverages
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Privacy Policy
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Contact Us
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Training Skill Fusion
                            </li>

                        </ul>

                    </div>


                    {/* ================= QUICK LINKS ================= */}

                    <div>

                        <h3 className="text-lg font-bold mb-6">
                            Quick Links
                        </h3>

                        <div className="w-10 h-1 bg-blue-500 rounded-full mb-5">
                        </div>

                        <ul className="space-y-3 text-sm text-gray-300">

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Our Customers
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Careers
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Quality
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Vision & Mission
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Our Journey
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                Latest News
                            </li>

                            <li className="hover:text-blue-400 transition cursor-pointer">
                                CSR
                            </li>

                        </ul>

                    </div>


                    {/* ================= CONTACT ================= */}

                    <div>

                        <h3 className="text-lg font-bold mb-6">
                            Our Contacts
                        </h3>

                        <div className="w-10 h-1 bg-blue-500 rounded-full mb-5">
                        </div>


                        {/* Address */}

                        <div className="flex gap-3 mb-5">

                            <MapPin
                                size={22}
                                className="text-blue-400 flex-shrink-0 mt-1"
                            />

                            <div>

                                <p className="font-semibold text-white">
                                    Victora Industries Pvt. Ltd.
                                </p>

                                <p className="text-gray-300 text-sm leading-6 mt-1">
                                    Plot No. 1049, Sector 58,
                                    <br />
                                    Faridabad, Haryana 121004
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex gap-3 mb-5">

                            <Mail
                                size={21}
                                className="text-blue-400 flex-shrink-0 mt-1"
                            />

                            <div>

                                <p className="text-gray-400 text-xs uppercase tracking-wider">
                                    Email
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="
                                        text-gray-200
                                        hover:text-blue-400
                                        text-sm
                                        transition
                                    "
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>


                        {/* Reach Us */}

                        <button
                            className="
                                flex
                                items-center
                                gap-2
                                bg-blue-600
                                hover:bg-blue-700
                                px-5
                                py-3
                                rounded-lg
                                font-semibold
                                text-sm
                                shadow-md
                                hover:shadow-lg
                                transition-all
                            "
                        >
                            <Phone size={17} />

                            Reach To Us

                            <ArrowRight size={16} />

                        </button>

                    </div>

                </div>

            </div>


            {/* ================= SOCIAL / DIVIDER ================= */}

            <div className="border-t border-gray-600 px-10">

                <div className="
                    py-6
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-5
                ">

                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Victora Industries Pvt. Ltd.
                        All Rights Reserved.
                    </p>


                    {/* Social Icons */}

                    <div className="flex items-center gap-3">

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition"
                        >
                            <FaLinkedinIn size={17} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition"
                        >
                            <FaFacebookF size={17} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition"
                        >
                            <FaInstagram size={17} />
                        </a>

                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition"
                        >
                            <FaYoutube size={17} />
                        </a>

                    </div>


                    {/* Policies */}

                    <div className="flex gap-5 text-sm text-gray-400">

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                        >
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;