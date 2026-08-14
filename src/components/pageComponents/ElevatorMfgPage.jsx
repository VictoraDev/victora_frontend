import {
    Building2,
    Settings,
    ShieldCheck,
    Gauge,
    Cog,
    CheckCircle2,
} from "lucide-react";

const ElevatorMfgPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Elevator Manufacturing
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Our elevator manufacturing capabilities are supported
                        by advanced engineering, precision manufacturing and
                        robust quality systems. We manufacture and supply
                        components and assemblies designed to meet demanding
                        requirements of the elevator industry.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="relative overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Elevator Manufacturing"
                            className="w-full h-[450px] object-cover"
                        />

                        <div className="
                            absolute
                            bottom-0
                            left-0
                            w-full
                            h-24
                            bg-gradient-to-t
                            from-[#2f3542]/80
                            to-transparent
                        ">
                        </div>

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 font-semibold uppercase tracking-[3px] text-sm">
                            Engineering Excellence
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Precision Built For The Elevator Industry
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Victora Industries brings extensive sheet metal
                            forming, fabrication, welding, tooling and
                            assembly capabilities to the elevator industry.
                            Our manufacturing processes are designed to
                            deliver consistent quality, dimensional accuracy
                            and dependable performance.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            From individual components to complex assemblies,
                            our integrated manufacturing infrastructure enables
                            us to support customers with reliable and scalable
                            production solutions.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="text-[#2f3542] font-semibold">
                                    Precision Manufacturing
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="text-[#2f3542] font-semibold">
                                    Advanced Processes
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="text-[#2f3542] font-semibold">
                                    Quality Assurance
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="text-[#2f3542] font-semibold">
                                    Scalable Production
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
                        Manufacturing Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our integrated manufacturing infrastructure enables
                        us to support multiple stages of elevator component
                        manufacturing under one roof.
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                ">

                    {/* Card 1 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <Settings className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Sheet Metal Components
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Precision sheet metal components manufactured
                            using advanced forming and fabrication processes.
                        </p>

                    </div>


                    {/* Card 2 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <Cog className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Fabrication & Welding
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Fabrication and welding capabilities for producing
                            strong and accurately assembled elevator structures.
                        </p>

                    </div>


                    {/* Card 3 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <Gauge className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Precision Engineering
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Engineering and tooling capabilities supporting
                            precise and repeatable manufacturing processes.
                        </p>

                    </div>


                    {/* Card 4 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <ShieldCheck className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Quality Systems
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Robust inspection and quality systems help ensure
                            consistent manufacturing standards.
                        </p>

                    </div>


                    {/* Card 5 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <Building2 className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Integrated Manufacturing
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Integrated manufacturing infrastructure enables
                            efficient coordination across multiple processes.
                        </p>

                    </div>


                    {/* Card 6 */}

                    <div className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        p-7
                        hover:border-blue-300
                        hover:shadow-lg
                        transition-all
                        duration-300
                    ">

                        <div className="
                            w-12
                            h-12
                            bg-blue-50
                            rounded-lg
                            flex
                            items-center
                            justify-center
                        ">

                            <Settings className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Customer Solutions
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Flexible manufacturing solutions developed around
                            specific customer and application requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= INDUSTRY FOCUS ================= */}

            <section className="w-full px-10 py-20">

                <div className="
                    bg-[#2f3542]
                    rounded-2xl
                    px-8
                    py-12
                    lg:px-14
                    lg:py-14
                    relative
                    overflow-hidden
                ">

                    {/* Decorative Element */}

                    <div className="
                        absolute
                        right-0
                        top-0
                        w-64
                        h-64
                        bg-blue-600/20
                        rounded-full
                        translate-x-1/3
                        -translate-y-1/3
                    ">
                    </div>


                    <div className="relative z-10">

                        <p className="
                            text-blue-400
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Industry Focus
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Supporting The Future Of Mobility
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-500
                            rounded-full
                            mt-5
                        ">
                        </div>

                        <p className="
                            text-gray-300
                            leading-8
                            mt-6
                            lg:w-3/4
                        ">
                            With a combination of engineering expertise,
                            manufacturing capabilities and quality-focused
                            processes, Victora Industries continues to
                            support the evolving requirements of the elevator
                            and mobility industry.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ElevatorMfgPage;