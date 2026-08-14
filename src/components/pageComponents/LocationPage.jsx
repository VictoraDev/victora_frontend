import {
    MapPin,
    Mail,
    Navigation,
    Building2,
} from "lucide-react";


const LocationPage = () => {
    return (
        <div className="w-full bg-white">
            
            {/* ================= LOCATION ================= */}

            <section className="w-full px-10 py-20">

                {/* Heading */}

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Where We Are
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Visit Victora Industries
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                </div>


                {/* Content */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">


                    {/* ================= ADDRESS ================= */}

                    <div className="bg-[#f7faff] border border-gray-200 rounded-xl p-8">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>

                            <div>

                                <p className="text-sm text-blue-600 font-semibold uppercase tracking-[2px]">
                                    Head Office
                                </p>

                                <h3 className="text-2xl font-bold text-[#2f3542]">
                                    Victora Industries Pvt. Ltd.
                                </h3>

                            </div>

                        </div>


                        {/* Address */}

                        <div className="flex gap-4 py-5 border-b border-gray-200">

                            <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-[1px]">
                                    Address
                                </p>

                                <p className="text-[#2f3542] text-lg leading-8 mt-1">
                                    Plot No. 1049, Sector 58,
                                    <br />
                                    Faridabad, Haryana 121004
                                    <br />
                                    India
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex gap-4 py-5 border-b border-gray-200">

                            <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />

                            <div>

                                <p className="text-sm text-gray-500 font-semibold uppercase tracking-[1px]">
                                    Email
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="text-[#2f3542] text-lg mt-1 inline-block hover:text-blue-600 transition-colors"
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>


                        {/* Button */}

                        <div className="pt-6">

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Victora+Industries+Plot+No+1049+Sector+58+Faridabad+Haryana+121004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                            >
                                <Navigation className="w-5 h-5" />
                                Get Directions
                            </a>

                        </div>

                    </div>


                    {/* ================= MAP ================= */}

                    <div className="overflow-hidden rounded-xl border border-gray-200 min-h-[450px]">

                        <iframe
                            title="Victora Industries Location"
                            src="https://www.google.com/maps?q=Victora+Industries+Plot+No+1049+Sector+58+Faridabad+Haryana+121004&output=embed"
                            className="w-full h-full min-h-[450px] border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>

                </div>

            </section>


            {/* ================= LOCATION HIGHLIGHTS ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                {/* Heading */}

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Location
                    </p>

                    <h2 className="text-4xl font-bold text-[#2f3542] mt-3">
                        Conveniently Located
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                </div>


                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                    {/* Card 1 */}

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">

                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">

                            <MapPin className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Faridabad
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Located in Sector 58, Faridabad, Haryana,
                            within an established industrial region.
                        </p>

                    </div>


                    {/* Card 2 */}

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">

                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">

                            <Navigation className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Easy Accessibility
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Convenient access for customers, business
                            partners, suppliers and visitors.
                        </p>

                    </div>


                    {/* Card 3 */}

                    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300">

                        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">

                            <Building2 className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Industrial Hub
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Situated within Faridabad's established
                            industrial ecosystem.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= REACH US ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">


                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Victora+Industries"
                            alt="Victora Industries"
                            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Reach to Us
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            We Would Be Glad to Hear From You
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>


                        <p className="text-gray-700 text-lg leading-8 mt-8">
                            Whether you are looking for business
                            opportunities, manufacturing partnerships,
                            career information or general enquiries,
                            our team is available to assist you.
                        </p>


                        {/* Email Box */}

                        <div className="flex items-center gap-4 mt-8 p-5 bg-[#f7faff] border border-gray-200 rounded-xl">

                            <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center">

                                <Mail className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="text-sm text-gray-500">
                                    Email Us
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="text-[#2f3542] font-semibold hover:text-blue-600 transition-colors"
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= DARK SECTION ================= */}

            <section className="w-full px-10 py-20 bg-[#2f3542]">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">


                    {/* Heading */}

                    <div>

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Visit Us
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                            We Look Forward to Connecting With You
                        </h2>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>

                    </div>


                    {/* Description */}

                    <div>

                        <p className="text-gray-300 text-lg leading-8">
                            Our Faridabad facility serves as an important
                            point of connection for our customers, partners,
                            suppliers and visitors.
                        </p>

                        <p className="text-gray-400 leading-8 mt-6">
                            For directions or visit-related enquiries,
                            please get in touch with us before your visit.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CLOSING ================= */}

            <section className="w-full px-10 py-16">

                <div className="border-l-4 border-blue-600 pl-8">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Victora Industries
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        Find Us. Connect With Us. Grow Together.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default LocationPage;