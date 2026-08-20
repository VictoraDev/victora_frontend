import {
    Factory,
    Settings2,
    Layers3,
    Gauge,
    Workflow,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

const FlexibleMfgPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                        Infrastructure
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#2f3542] mt-3">
                        Flexible Manufacturing
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 text-lg leading-8 mt-6 lg:w-3/4">
                        Our Flexible Manufacturing capabilities are designed
                        to support changing production requirements with
                        efficient processes, adaptable equipment and integrated
                        manufacturing systems.
                    </p>

                </div>


                {/* ================= IMAGE + CONTENT ================= */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600"
                            alt="Victora Industries Flexible Manufacturing"
                            className="w-full h-[450px] object-cover"
                        />

                    </div>


                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[3px]">
                            Adaptable Manufacturing
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3">
                            Manufacturing Built For Flexibility
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Modern manufacturing requires the ability to
                            respond quickly to changing customer requirements,
                            product variants and production volumes. Our
                            flexible manufacturing approach enables efficient
                            utilization of resources while maintaining
                            consistent quality.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            By integrating machines, processes and skilled
                            manpower, we are able to support diverse production
                            requirements while maintaining operational
                            efficiency and reliability.
                        </p>


                        {/* Highlights */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Flexible Production
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Quick Changeovers
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Multiple Variants
                                </span>

                            </div>


                            <div className="flex items-center gap-3">

                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />

                                <span className="font-semibold text-[#2f3542]">
                                    Efficient Production
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
                        Flexible Manufacturing Capabilities
                    </h2>

                    <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                    <p className="text-gray-600 leading-7 mt-6 lg:w-3/4">
                        Our manufacturing systems are structured to provide
                        flexibility across different products, component
                        variants and production requirements.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Flexible Production */}

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
                            Flexible Production
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Manufacturing systems capable of adapting to
                            different product requirements and production
                            volumes.
                        </p>

                    </div>


                    {/* Quick Changeovers */}

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

                            <Settings2 className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Quick Changeovers
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Efficient changeover practices help minimize
                            production downtime and improve machine
                            utilization.
                        </p>

                    </div>


                    {/* Product Variants */}

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
                            Multiple Product Variants
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Flexible processes allow manufacturing support
                            across different component designs and variants.
                        </p>

                    </div>


                    {/* Process Control */}

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
                            Process Control
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Controlled processes help maintain consistent
                            quality even when production requirements change.
                        </p>

                    </div>


                    {/* Integrated Workflow */}

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

                            <Workflow className="w-6 h-6 text-blue-600" />

                        </div>

                        <h3 className="text-xl font-bold text-[#2f3542] mt-6">
                            Integrated Workflow
                        </h3>

                        <p className="text-gray-600 leading-7 mt-3">
                            Connected manufacturing processes help improve
                            coordination between different production stages.
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
                            Quality-focused processes ensure that flexibility
                            does not compromise manufacturing standards.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= MANUFACTURING ADVANTAGE ================= */}

            <section className="w-full px-10 py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}

                    <div>

                        <p className="text-blue-600 text-sm font-semibold uppercase tracking-[4px]">
                            Manufacturing Advantage
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3542] mt-3">
                            Responding To Changing Customer Needs
                        </h2>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5"></div>

                        <p className="text-gray-600 leading-8 mt-6">
                            Flexible manufacturing allows production systems
                            to respond effectively to changing product
                            requirements, production volumes and customer
                            expectations.
                        </p>

                        <p className="text-gray-600 leading-8 mt-4">
                            Our approach focuses on maintaining a balance
                            between flexibility, productivity and quality,
                            enabling us to deliver reliable manufacturing
                            solutions across diverse requirements.
                        </p>

                    </div>


                    {/* Dark Panel */}

                    <div className="bg-[#2f3542] rounded-2xl p-8 lg:p-10">

                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-[4px]">
                            Our Focus
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-3">
                            Flexibility Without Compromise
                        </h3>

                        <div className="w-16 h-1 bg-blue-500 rounded-full mt-5"></div>


                        <div className="space-y-5 mt-8">

                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Adaptable manufacturing processes.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Efficient handling of multiple product
                                    variants.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Reduced production downtime.
                                </p>

                            </div>


                            <div className="flex items-start gap-4">

                                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-7">
                                    Consistent quality across changing
                                    requirements.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default FlexibleMfgPage;