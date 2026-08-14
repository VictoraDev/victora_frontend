import {
    Building2,
    User,
    Mail,
    Phone,
    MapPin,
    FileText,
    Send,
} from "lucide-react";

const SupplyToUsPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Supplier Partnership
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Supply To Victora
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        We welcome suppliers and business partners who can
                        contribute to our manufacturing operations through
                        quality products, reliable services and strong
                        business practices. If you are interested in
                        becoming a supplier, share your details with us.
                    </p>

                </div>


                {/* ================= FORM + INFORMATION ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* ================= FORM ================= */}

                    <div className="lg:col-span-2 border border-gray-200 rounded-xl p-8 lg:p-10 shadow-sm">

                        <div className="mb-8">

                            <h3 className="text-2xl font-bold text-[#2f3542]">
                                Supplier Enquiry
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Submit your company and contact details
                                for our procurement team.
                            </p>

                        </div>


                        <form className="space-y-6">

                            {/* Company + Contact Person */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                        Company Name
                                    </label>

                                    <div className="relative">

                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                        <input
                                            type="text"
                                            placeholder="Enter company name"
                                            required
                                            className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                        Contact Person
                                    </label>

                                    <div className="relative">

                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                        <input
                                            type="text"
                                            placeholder="Enter contact person"
                                            required
                                            className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Email + Phone */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>

                                    <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                        Email Address
                                    </label>

                                    <div className="relative">

                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                        <input
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                            className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                        />

                                    </div>

                                </div>


                                <div>

                                    <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                        Phone Number
                                    </label>

                                    <div className="relative">

                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                        <input
                                            type="tel"
                                            placeholder="Enter phone number"
                                            required
                                            className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                        />

                                    </div>

                                </div>

                            </div>


                            {/* Location */}

                            <div>

                                <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                    Company Location
                                </label>

                                <div className="relative">

                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="City, State, Country"
                                        className="w-full border border-gray-300 rounded-lg pl-12 pr-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                    />

                                </div>

                            </div>


                            {/* Supplier Category */}

                            <div>

                                <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                    Supplier Category
                                </label>

                                <select
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                >

                                    <option value="">
                                        Select supplier category
                                    </option>

                                    <option value="raw-material">
                                        Raw Materials
                                    </option>

                                    <option value="components">
                                        Components
                                    </option>

                                    <option value="tools">
                                        Tools & Dies
                                    </option>

                                    <option value="machinery">
                                        Machinery & Equipment
                                    </option>

                                    <option value="services">
                                        Services
                                    </option>

                                    <option value="other">
                                        Other
                                    </option>

                                </select>

                            </div>


                            {/* Company Profile */}

                            <div>

                                <label className="block text-sm font-semibold text-[#2f3542] mb-2">
                                    Company Profile / Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your company, products or services..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                                />

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition-all duration-300"
                            >

                                <Send className="w-5 h-5" />

                                Submit Supplier Enquiry

                            </button>

                        </form>

                    </div>


                    {/* ================= INFORMATION PANEL ================= */}

                    <div className="bg-[#2f3542] rounded-xl p-8 lg:p-10 h-fit">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Partner With Us
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Become a Victora Supplier
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>

                        <p className="text-gray-300 leading-7 mt-8">
                            We look forward to building strong and sustainable
                            relationships with suppliers who share our
                            commitment to quality, reliability and continuous
                            improvement.
                        </p>


                        {/* Quality */}

                        <div className="flex gap-4 mt-10 pb-6 border-b border-gray-600">

                            <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">

                                <FileText className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="text-white font-semibold">
                                    Quality Focus
                                </p>

                                <p className="text-gray-400 text-sm leading-6 mt-1">
                                    Quality-driven products and services are
                                    an important part of our supplier
                                    relationships.
                                </p>

                            </div>

                        </div>


                        {/* Reliability */}

                        <div className="flex gap-4 mt-6 pb-6 border-b border-gray-600">

                            <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">

                                <Building2 className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="text-white font-semibold">
                                    Reliable Partnership
                                </p>

                                <p className="text-gray-400 text-sm leading-6 mt-1">
                                    We value dependable and long-term supplier
                                    partnerships.
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="flex gap-4 mt-6">

                            <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">

                                <Mail className="w-5 h-5 text-white" />

                            </div>

                            <div>

                                <p className="text-white font-semibold">
                                    Supplier Connect
                                </p>

                                <a
                                    href="mailto:Info@victoratool.com"
                                    className="text-blue-400 text-sm mt-1 inline-block hover:text-blue-300 transition"
                                >
                                    Info@victoratool.com
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= SUPPLIER EXPECTATIONS ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                <div className="mb-12">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Our Expectations
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        What We Look For In Our Partners
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {[
                        {
                            title: "Quality",
                            text: "Consistent products and services that meet defined quality requirements.",
                        },
                        {
                            title: "Reliability",
                            text: "Dependable delivery, communication and long-term business commitment.",
                        },
                        {
                            title: "Capability",
                            text: "Strong technical and manufacturing capabilities aligned with requirements.",
                        },
                        {
                            title: "Continuous Improvement",
                            text: "A commitment to innovation, efficiency and improving business processes.",
                        },
                    ].map((item, index) => (

                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="w-10 h-1 bg-blue-600 rounded-full mb-6"></div>

                            <h3 className="text-xl font-bold text-[#2f3542]">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-7 mt-3">
                                {item.text}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    );
};

export default SupplyToUsPage;