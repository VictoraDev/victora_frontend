import { ArrowRight, ChevronRight, Factory } from "lucide-react";
import { useState } from "react";

const infrastructureData = {
    "Press Shop": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Precision Metal Forming",
        description:
            "As the crucial area where the entire fabrication process begins, the Press Shop holds great importance in our plants.",
        details:
            "Press Shop is equipped with numerous single and double-acting presses of highly regarded brands such as Erfurt and Stanko, catering to capacities ranging between 10 T to 1000 T. We also possess special purpose presses fitted with manipulators. This machinery is utilized for performing a host of metal forming operations including deep drawing, blanking, piercing, embossing, fine blanking, impact extrusion, ironing and forming from solid, among others.",
    },

    "Welding Shop": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Advanced Welding Solutions",
        description:
            "Our Welding Shop combines skilled workmanship with advanced welding technologies to manufacture high-quality assemblies.",
        details:
            "The facility is equipped with modern welding stations and specialized equipment designed to support a wide range of automotive and industrial applications. Our processes focus on dimensional accuracy, structural strength and consistent weld quality while maintaining high production efficiency.",
    },

    "Flexible MFG.": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Flexible Manufacturing",
        description:
            "Our Flexible Manufacturing facilities enable us to efficiently handle diverse production requirements.",
        details:
            "The facility integrates modern production equipment, automated systems and flexible manufacturing processes. This allows us to respond quickly to changing customer requirements while maintaining consistent quality, productivity and delivery performance.",
    },

    "Tool Design": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Engineering & Tool Design",
        description:
            "Our dedicated Tool Design team develops precision tooling solutions for complex manufacturing requirements.",
        details:
            "Using modern engineering and CAD/CAM technologies, our team designs dies, tools and fixtures with a strong focus on accuracy, durability and manufacturability. Close collaboration between design and production helps ensure efficient development and reliable tooling performance.",
    },

    "Tool Room": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Precision Tool Manufacturing",
        description:
            "Our Tool Room provides the foundation for developing and maintaining precision manufacturing tools.",
        details:
            "The facility is equipped to manufacture, modify and maintain dies, fixtures, gauges and other precision tooling requirements. Skilled engineers and technicians work with modern machining technologies to achieve the required dimensional accuracy and surface finish.",
    },

    "Elevator MFG.": {
        image: "https://placehold.co/1000x650",
        shortTitle: "Elevator Manufacturing",
        description:
            "Our elevator manufacturing capabilities support the production of precision components and assemblies for the elevator industry.",
        details:
            "The facility supports a wide range of manufacturing operations for elevator components and assemblies. Advanced production processes, quality systems and experienced teams help us deliver reliable products that meet demanding industry requirements.",
    },
};

const OurInfra = () => {
    const [activeTab, setActiveTab] = useState("Press Shop");

    const activeData = infrastructureData[activeTab];

    return (
        <section className="w-full px-10 py-20">

            {/* ================= HEADING ================= */}

            <div className="flex flex-col items-center">

                <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
                    Our Best in Class
                </p>

                <h2 className="text-4xl font-bold mt-3 text-[#2f3542]">
                    Our Infrastructure
                </h2>

                <div className="w-20 h-1 bg-blue-600 rounded-full mt-5"></div>

                <p className="text-gray-600 text-center mt-6 max-w-3xl leading-7">
                    State-of-the-art manufacturing facilities equipped with
                    advanced technologies, skilled professionals and robust
                    quality systems to deliver engineering excellence.
                </p>

            </div>


            {/* ================= TABS ================= */}

            <div className="flex justify-center mt-12">

                <div className="flex flex-wrap justify-center gap-3 p-2 bg-white rounded-xl shadow-md border border-blue-100">

                    {Object.keys(infrastructureData).map((tab) => (

                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                px-5 py-3 rounded-lg
                                font-semibold text-sm
                                transition-all duration-300
                                whitespace-nowrap
                                ${activeTab === tab
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "text-[#2f3542] hover:bg-blue-50 hover:text-blue-700"
                                }
                            `}
                        >
                            {tab}
                        </button>

                    ))}

                </div>

            </div>


            {/* ================= CONTENT ================= */}

            <div className="mt-14">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* IMAGE */}

                    <div className="relative group">

                        {/* Decorative Border */}

                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl">
                        </div>

                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-600 rounded-br-2xl">
                        </div>


                        {/* Image */}

                        <div className="relative overflow-hidden rounded-2xl shadow-xl">

                            <img
                                key={activeData.image + activeTab}
                                src={activeData.image}
                                alt={activeTab}
                                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3542]/70 via-transparent to-transparent">
                            </div>


                            {/* Image Label */}

                            <div className="absolute bottom-6 left-6 flex items-center gap-3">

                                <div className="bg-blue-600 p-3 rounded-lg">
                                    <Factory
                                        size={22}
                                        className="text-white"
                                    />
                                </div>

                                <div>
                                    <p className="text-white text-sm">
                                        Manufacturing Facility
                                    </p>

                                    <p className="text-white text-xl font-bold">
                                        {activeTab}
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* CONTENT */}

                    <div>

                        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                            {activeTab}
                        </p>

                        <h3 className="text-3xl font-bold text-[#2f3542] mt-3 leading-tight">
                            {activeData.shortTitle}
                        </h3>

                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-5 mb-6">
                        </div>


                        <p className="text-gray-700 text-lg leading-8">
                            {activeData.description}
                        </p>


                        <p className="text-gray-600 leading-8 mt-5">
                            {activeData.details}
                        </p>


                        {/* Read More */}

                        <button
                            className="group mt-8 flex items-center gap-2
                            bg-blue-600 hover:bg-blue-700
                            text-white px-6 py-3
                            rounded-lg font-semibold
                            shadow-md hover:shadow-lg
                            transition-all duration-300"
                        >

                            Read More

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform duration-300"
                            />

                        </button>

                    </div>

                </div>

            </div>


            {/* ================= BOTTOM INDICATOR ================= */}

            <div className="flex justify-center mt-16">

                <div className="flex items-center gap-2 text-gray-500 text-sm">

                    <span>
                        Explore our manufacturing capabilities
                    </span>

                    <ChevronRight
                        size={18}
                        className="text-blue-600"
                    />

                </div>

            </div>

        </section>
    );
};

export default OurInfra;