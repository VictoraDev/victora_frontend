const facilities = [
    {
        title: "Press Line",
        description: "High precision sheet metal pressing with advanced hydraulic machines.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Cutting Machine",
        description: "Robotic and manual welding ensuring superior structural strength.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Welding Robots",
        description: "Automated production lines for high-volume manufacturing.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Cnc Turning Centers",
        description: "Advanced CAD/CAM based tool and die design capabilities.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Press Brakes",
        description: "Modern tool room equipped with CNC machining centers.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "Elevator Manufacturing",
        description: "Complete manufacturing solutions for elevator components.",
        image: "https://placehold.co/600x400",
    },
];

const ManufacturingInfra = () => {
    return (
        <section className="py-20 flex flex-col justify-center items-center">

            <div className="">

                {/* Heading */}

                <div className="text-center">

                    <p className="text-blue-600 font-semibold uppercase tracking-[4px]">
                        Our Infrastructure
                    </p>

                    <h2 className="text-4xl font-bold  mt-3">
                        Manufacturing Infrastructure
                    </h2>

                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-5"></div>

                    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
                        Our manufacturing facilities are equipped with advanced technology,
                        automated production systems, and experienced professionals to
                        deliver world-class engineering solutions.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

                    {facilities.map((item, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-500"
                        >
                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#2f3542]/90 via-[#2f3542]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <button className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500 bg-blue-600 text-white px-5 py-2 rounded-lg">
                                    Explore →
                                </button>

                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <h3 className="text-2xl font-bold text-[#2f3542]">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mt-3 leading-7">
                                    {item.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default ManufacturingInfra