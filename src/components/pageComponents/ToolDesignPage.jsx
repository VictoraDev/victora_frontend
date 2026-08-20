import {
    DraftingCompass,
    Settings,
    Ruler,
    Cpu,
    Layers3,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

const ToolDesignPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Tool Design
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Our Tool Design facility plays a vital role in developing
                        precision tooling and dies required for efficient and
                        reliable manufacturing. The focus is on designing
                        tools that deliver accuracy, repeatability and
                        consistent production performance.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries Tool Design"
                            className="w-full h-[450px] object-cover"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[3px]">
                            Engineering & Design
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Precision Tooling Solutions
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Effective tool design is fundamental to achieving
                            dimensional accuracy and repeatable manufacturing
                            results. Our engineering approach considers
                            component requirements, manufacturing processes
                            and production conditions during the design stage.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            By combining engineering expertise with modern
                            design practices, our team develops tooling
                            solutions that support efficient manufacturing
                            and dependable production performance.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Precision Tool Design
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Engineering Support
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Manufacturing Integration
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


            {/* ================= CAPABILITIES ================= */}

            <section className="w-full px-10 py-20 bg-[#f7faff]">

                <div className="mb-12">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Our Capabilities
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                        Tool Design Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our tool design activities are focused on developing
                        practical, accurate and production-ready tooling
                        solutions for different manufacturing requirements.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Design Engineering */}

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

                            <DraftingCompass className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Design Engineering
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Engineering-driven tool development based on
                            component requirements and manufacturing
                            objectives.
                        </p>

                    </div>


                    {/* Tool Development */}

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
                            Tool Development
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Development of tooling solutions designed for
                            reliable and repeatable manufacturing operations.
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

                            <Ruler className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Dimensional Accuracy
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Tool designs are developed with attention to
                            dimensional requirements and manufacturing
                            tolerances.
                        </p>

                    </div>


                    {/* Digital Design */}

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

                            <Cpu className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Digital Design
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Digital engineering practices support accurate
                            visualization, development and refinement of
                            tooling concepts.
                        </p>

                    </div>


                    {/* Tooling Integration */}

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

                            <Layers3 className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Tooling Integration
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Tool design is aligned with downstream production
                            processes to support efficient manufacturing.
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
                            Quality Assurance
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Quality considerations are incorporated into the
                            tooling development process to support consistent
                            production output.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= DESIGN TO PRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Engineering Excellence
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            From Concept To Production
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Tool design connects engineering requirements with
                            actual manufacturing needs. A well-designed tool
                            helps improve production consistency, component
                            accuracy and overall manufacturing efficiency.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our approach focuses on developing tooling that is
                            practical for production while maintaining the
                            required quality and dimensional standards.
                        </p>

                    </div>


                    {/* Dark Panel */}

                    <div className="bg-[#2f3542] rounded-2xl p-8 lg:p-10">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Our Focus
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Designed For Manufacturing
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>


                        <div className="space-y-5 mt-8">

                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Accurate and production-oriented tool
                                    designs.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Engineering consideration of manufacturing
                                    requirements.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Focus on repeatability and dimensional
                                    consistency.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Seamless connection between design and
                                    manufacturing.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default ToolDesignPage;