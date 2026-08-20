import {
    Factory,
    Settings,
    Gauge,
    Layers,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

const PressShopPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Press Shop
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        The Press Shop is a crucial part of our manufacturing
                        operations, where precision forming processes transform
                        sheet metal into components required for a wide range
                        of industrial applications.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries Press Shop"
                            className="w-full h-[450px] object-cover"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[3px]">
                            Metal Forming
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Advanced Pressing & Forming
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Our Press Shop supports a variety of sheet metal
                            forming operations, enabling the production of
                            components with consistent dimensions, quality
                            and repeatability.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            The combination of modern press equipment,
                            experienced personnel and controlled manufacturing
                            processes allows us to handle diverse component
                            requirements across automotive, elevator and other
                            industrial applications.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Sheet Metal Forming
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Precision Pressing
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Consistent Production
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Quality Focus
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= PRESS SHOP CAPABILITIES ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                <div className="mb-12">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Our Capabilities
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        Press Shop Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our press manufacturing capabilities support a broad
                        range of sheet metal operations with a strong focus on
                        accuracy, repeatability and production efficiency.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Sheet Metal Forming */}

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

                            <Factory className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Sheet Metal Forming
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Controlled forming operations for producing
                            accurate and repeatable sheet metal components.
                        </p>

                    </div>


                    {/* Press Operations */}

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
                            Press Operations
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Pressing operations designed to support different
                            component shapes, sizes and production requirements.
                        </p>

                    </div>


                    {/* Precision */}

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
                            Precision Manufacturing
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Focus on dimensional accuracy and process
                            consistency throughout production.
                        </p>

                    </div>


                    {/* Component Production */}

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
                            Component Production
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Manufacturing support for complex components
                            requiring controlled forming and repeatability.
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
                            Quality-focused manufacturing practices help
                            maintain consistency across production batches.
                        </p>

                    </div>


                    {/* Production Efficiency */}

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
                            Production Efficiency
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Integrated processes support efficient and
                            dependable production for customer requirements.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= MANUFACTURING PROCESS ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Manufacturing Excellence
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            From Sheet Metal To Precision Components
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            The Press Shop plays an important role in the
                            overall manufacturing cycle. Properly controlled
                            forming operations help establish the dimensional
                            accuracy and consistency required in subsequent
                            manufacturing processes.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our focus remains on maintaining stable processes,
                            consistent quality and dependable production
                            performance across different component
                            requirements.
                        </p>

                    </div>


                    {/* Dark Information Panel */}

                    <div className="bg-[#2f3542] rounded-2xl p-8 lg:p-10">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Our Focus
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Accuracy At Every Stage
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>


                        <div className="space-y-5 mt-8">

                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Consistent sheet metal forming processes.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Focus on dimensional accuracy and
                                    repeatability.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Quality-focused production practices.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Reliable support for downstream
                                    manufacturing operations.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default PressShopPage;