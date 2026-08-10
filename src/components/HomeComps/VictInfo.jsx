
const VictInfo = () => {
    return (
        <div className="w-full px-10 py-20">

            {/* Heading */}
            <div className="flex flex-col items-center mb-14">

                <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
                    Who We Are
                </p>

                <div className="text-4xl font-bold mt-3 text-[#2f3542]">
                    <p>VICTORA INDUSTRIES</p>
                </div>

                <div className="w-20 h-1 bg-blue-600 rounded-full mt-5"></div>

            </div>


            {/* Content */}
            <div className="flex items-center gap-14">

                {/* Image */}
                <div className="w-1/2 relative group">

                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600 rounded-tl-xl">
                    </div>

                    <div className="relative overflow-hidden rounded-2xl shadow-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries"
                            className="w-full h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2f3542]/50 to-transparent">
                        </div>

                    </div>

                    <div className="absolute -bottom-5 -right-5 bg-[#2f3542] text-white px-7 py-4 rounded-xl shadow-xl">
                        <p className="text-2xl font-bold">50+</p>
                        <p className="text-sm text-gray-300">Years of Excellence</p>
                    </div>

                </div>


                {/* Content */}
                <div className="w-1/2">

                    <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">
                        Engineering Excellence Since 1972
                    </p>

                    <h2 className="text-3xl font-bold text-[#2f3542] leading-tight">
                        Building Excellence Through
                        <span className="text-blue-600"> Innovation & Technology</span>
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5 mb-6"></div>

                    <p className="text-gray-600 leading-8 text-[16px]">
                        Victora Industries is the flagship company of a leading Indian
                        conglomerate with a turnover exceeding INR 11 Billion. The group
                        has diversified interests across verticals such as the manufacture
                        of sheet metal components, assemblies for the auto industry,
                        elevator industry, white goods, as well as in the telecom and
                        hospitality sectors.
                    </p>

                    <p className="text-gray-600 leading-8 text-[16px] mt-4">
                        Established in 1972 by G S Banga, an acclaimed authority in the
                        field of Tool Engineering and recipient of the "Self-made
                        Industrialist" Award from the President of India, the group has
                        remained at the forefront of technology since its inception.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-10 mt-8 pt-6 border-t border-gray-200">

                        <div>
                            <p className="text-3xl font-bold text-blue-600">
                                11+
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Manufacturing Facilities
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-blue-600">
                                50+
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Years of Experience
                            </p>
                        </div>

                        <div>
                            <p className="text-3xl font-bold text-blue-600">
                                IATF
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                                Certified Facilities
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                        Know More About Us
                        <span className="ml-2">→</span>
                    </button>

                </div>

            </div>

        </div>
    )
}

export default VictInfo