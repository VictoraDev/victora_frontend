import {
    Settings,
    Cog,
    Wrench,
    Ruler,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

const ToolRoomPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Tool Room
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Our Tool Room forms an important part of our integrated
                        manufacturing infrastructure, supporting the development,
                        maintenance and modification of tools, dies, fixtures
                        and other production equipment required for precision
                        manufacturing.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries Tool Room"
                            className="w-full h-[450px] object-cover"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[3px]">
                            Precision & Engineering
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Engineering Tools For Manufacturing Excellence
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            A capable tool room enables efficient development
                            and maintenance of the tooling required for
                            production. Our focus is on precision, consistency
                            and dependable tooling performance throughout the
                            manufacturing cycle.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our tooling capabilities support various
                            manufacturing operations and help reduce
                            production interruptions through timely
                            maintenance, modifications and improvements.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Precision Tooling
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Tool Maintenance
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Fixtures & Dies
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Production Support
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CAPABILITIES ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                <div className="mb-12">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Our Capabilities
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        Tool Room Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our tooling operations are focused on supporting
                        production with reliable, accurate and well-maintained
                        tooling solutions.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Precision Tooling */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Settings className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Precision Tooling
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Development and maintenance of precision tooling
                            required for consistent manufacturing operations.
                        </p>

                    </div>


                    {/* Dies */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Cog className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Dies & Fixtures
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Tooling solutions designed to support forming,
                            fabrication and assembly requirements.
                        </p>

                    </div>


                    {/* Maintenance */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Wrench className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Tool Maintenance
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Regular maintenance, repair and modification of
                            production tooling to maintain performance.
                        </p>

                    </div>


                    {/* Measurement */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Ruler className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Precision Measurement
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Focus on dimensional accuracy and consistency
                            during tooling development and maintenance.
                        </p>

                    </div>


                    {/* Production Support */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Production Support
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Dedicated tooling support helps production teams
                            maintain stable and efficient operations.
                        </p>

                    </div>


                    {/* Continuous Improvement */}

                    <div className="
                        bg-white
                        border border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all duration-300
                    ">

                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Settings className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Continuous Improvement
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Tooling improvements and modifications focused on
                            enhancing manufacturing efficiency and reliability.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= TOOL ROOM IMPORTANCE ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Manufacturing Support
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            Supporting Reliable Production
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Tooling plays a critical role in maintaining
                            manufacturing consistency. A responsive tool room
                            helps production teams address tooling requirements
                            efficiently while supporting quality and productivity.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            By combining engineering knowledge with practical
                            manufacturing experience, our tooling operations
                            contribute to dependable production performance.
                        </p>

                    </div>


                    {/* Highlight Panel */}

                    <div className="
                        bg-[#2f3542]
                        rounded-2xl
                        p-8
                        lg:p-10
                    ">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Key Focus
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Precision. Reliability. Performance.
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>

                        <div className="space-y-5 mt-8">

                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Accurate tooling for consistent production.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Timely maintenance and tooling support.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Focus on quality and manufacturing efficiency.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ToolRoomPage;