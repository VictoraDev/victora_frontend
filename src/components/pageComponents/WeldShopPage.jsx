import {
    Flame,
    Settings,
    ShieldCheck,
    Gauge,
    Layers,
    CheckCircle2,
} from "lucide-react";

const WeldShopPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Welding Shop
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Our Welding Shop is equipped to support a wide range
                        of fabrication and assembly requirements. With
                        controlled welding processes and experienced
                        professionals, we focus on producing strong,
                        consistent and dimensionally accurate assemblies.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries Welding Shop"
                            className="w-full h-[450px] object-cover"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[3px]">
                            Fabrication Excellence
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Precision Welding & Assembly
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Welding is a critical part of our manufacturing
                            operations, enabling us to convert individual
                            components into robust and reliable assemblies.
                            Our processes are focused on weld quality,
                            dimensional accuracy and repeatability.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our welding capabilities support the requirements
                            of automotive, elevator and other industrial
                            applications where consistent fabrication quality
                            is essential.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Precision Welding
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Assembly Operations
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Quality Inspection
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Consistent Production
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
                        Welding & Fabrication Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our welding operations are designed to support
                        different component sizes, assembly requirements
                        and production volumes while maintaining consistent
                        manufacturing standards.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Welding */}

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

                            <Flame className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Welding Operations
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Controlled welding operations focused on producing
                            strong and consistent joints across manufactured
                            components.
                        </p>

                    </div>


                    {/* Fabrication */}

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
                            Fabrication
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Fabrication processes designed to transform
                            individual components into finished assemblies.
                        </p>

                    </div>


                    {/* Assembly */}

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

                            <Layers className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Component Assembly
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Assembly capabilities supporting complex fabricated
                            components and finished industrial assemblies.
                        </p>

                    </div>


                    {/* Quality */}

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
                            Quality Control
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Quality checks help ensure that welded and
                            fabricated assemblies meet required standards.
                        </p>

                    </div>


                    {/* Dimensional Accuracy */}

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

                            <Gauge className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Dimensional Accuracy
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Attention to dimensional accuracy helps maintain
                            proper fitment and assembly performance.
                        </p>

                    </div>


                    {/* Production */}

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
                            Production Support
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Integrated fabrication and welding support enables
                            reliable production across different requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= QUALITY SECTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Quality Focus
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            Consistent Welding Quality
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Welding quality has a direct impact on the
                            strength, reliability and appearance of fabricated
                            assemblies. Our manufacturing approach emphasizes
                            process consistency and appropriate inspection
                            throughout production.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            By combining skilled personnel, controlled
                            processes and quality-focused manufacturing
                            practices, we aim to deliver dependable welded
                            assemblies to our customers.
                        </p>

                    </div>


                    {/* Dark Panel */}

                    <div className="bg-[#2f3542] rounded-2xl p-8 lg:p-10">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Our Approach
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Built For Strength & Reliability
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>


                        <div className="space-y-5 mt-8">

                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Consistent welding and fabrication processes.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Focus on dimensional accuracy and fitment.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Quality checks throughout the manufacturing
                                    process.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Reliable assemblies for demanding industrial
                                    applications.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default WeldShopPage;