import {
    MapPin,
    Phone,
    Mail,
    Navigation,
    Building2,
} from "lucide-react";

const DrivingDirectionPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= LOCATION SECTION ================= */}

            <section className="w-full px-10 py-20">

                {/* Heading */}

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Visit Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Driving Directions
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Find your way to Victora Industries. Our facility is
                        conveniently located in Sector 58, Faridabad and is
                        accessible through major roads and transportation
                        routes.
                    </p>

                </div>


                {/* Map + Details */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Map */}

                    <div className="lg:col-span-2 h-[450px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">

                        <iframe
                            title="Victora Industries Location"
                            src="https://www.google.com/maps?q=Victora%20Industries%20Faridabad%20Haryana&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        />

                    </div>


                    {/* Location Details */}

                    <div className="bg-[#2f3542] rounded-xl p-8 lg:p-10 text-white">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Our Location
                        </p>

                        <h3 className="text-2xl font-bold mt-3">
                            Victora Industries
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>


                        {/* Address */}

                        <div className="flex gap-4 mt-8 pb-7 border-b border-gray-600">

                            <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">

                                <MapPin className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="font-semibold text-white">
                                    Address
                                </p>

                                <p className="text-gray-300 leading-7 text-sm mt-1">
                                    Victora Industries Pvt. Ltd.
                                    <br />
                                    Plot No. 1049, Sector 58,
                                    <br />
                                    Faridabad, Haryana 121004
                                    <br />
                                    India
                                </p>

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="flex gap-4 mt-7 pb-7 border-b border-gray-600">

                            <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">

                                <Phone className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="font-semibold text-white">
                                    Contact
                                </p>

                                <p className="text-gray-400 text-sm mt-1">
                                    Contact our team for assistance.
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex gap-4 mt-7">

                            <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">

                                <Mail className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="font-semibold text-white">
                                    Email
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="text-blue-400 text-sm mt-1 inline-block hover:text-blue-300 transition"
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>


                        {/* Directions */}

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Victora+Industries+Faridabad+Haryana"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                        >

                            <Navigation className="w-5 h-5" />

                            Get Directions

                        </a>

                    </div>

                </div>

            </section>


            {/* ================= VISIT INFORMATION ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                {/* Heading */}

                <div className="mb-12">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Reach Victora
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        Plan Your Visit
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                </div>


                {/* Information Cards */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    {/* By Road */}

                    <div className="bg-white border border-gray-200 rounded-xl p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300">

                        <Building2 className="w-8 h-8 text-blue-600" />

                        <h3 className="text-xl font-bold text-[#2f3542] mt-5">
                            By Road
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            The facility is located in Sector 58,
                            Faridabad and can be accessed conveniently
                            through the city's major road networks.
                        </p>

                    </div>


                    {/* GPS Navigation */}

                    <div className="bg-white border border-gray-200 rounded-xl p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300">

                        <Navigation className="w-8 h-8 text-blue-600" />

                        <h3 className="text-xl font-bold text-[#2f3542] mt-5">
                            GPS Navigation
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Use the location above or select
                            "Get Directions" to navigate directly
                            to our facility.
                        </p>

                    </div>


                    {/* Contact */}

                    <div className="bg-white border border-gray-200 rounded-xl p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300">

                        <Phone className="w-8 h-8 text-blue-600" />

                        <h3 className="text-xl font-bold text-[#2f3542] mt-5">
                            Need Assistance?
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Contact our team if you need assistance
                            locating the facility or planning your visit.
                        </p>

                    </div>


                </div>

            </section>

        </div>
    );
};

export default DrivingDirectionPage;