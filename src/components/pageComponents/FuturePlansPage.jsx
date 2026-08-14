
const futurePlans = [
    {
        number: "01",
        title: "Advanced Manufacturing",
        description:
            "Continuously strengthening manufacturing capabilities through modern technologies, improved processes and advanced production systems.",
    },
    {
        number: "02",
        title: "Technology & Automation",
        description:
            "Increasing the adoption of technology, automation and data-driven processes to improve productivity, precision and operational efficiency.",
    },
    {
        number: "03",
        title: "Infrastructure Expansion",
        description:
            "Developing and expanding manufacturing infrastructure to support increasing production requirements and future business opportunities.",
    },
    {
        number: "04",
        title: "Engineering Excellence",
        description:
            "Building stronger engineering and tooling capabilities to address increasingly complex product and manufacturing requirements.",
    },
    {
        number: "05",
        title: "Sustainable Growth",
        description:
            "Focusing on responsible and sustainable growth through efficient processes, resource optimisation and long-term operational planning.",
    },
    {
        number: "06",
        title: "People & Capability",
        description:
            "Continuously developing our people through learning, skill development and opportunities to work with evolving technologies.",
    },
];

const FuturePlansPage = () => {
    return (
        <div className="w-full bg-white">

            {/* ================= INTRODUCTION ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Looking Ahead
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Building Capabilities for Tomorrow
                    </h2>

                    <div className="
                        w-16
                        h-1
                        bg-blue-600
                        mt-5
                        rounded-full
                    ">
                    </div>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">

                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Future+Manufacturing"
                            alt="Victora Industries Future Manufacturing"
                            className="
                                w-full
                                h-[430px]
                                object-cover
                                hover:scale-105
                                transition-transform
                                duration-700
                            "
                        />

                    </div>


                    {/* CONTENT */}

                    <div>

                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                        ">
                            The future of manufacturing is being shaped by
                            technology, changing customer expectations and
                            the need for greater efficiency. Victora
                            Industries aims to continuously evolve with
                            these changes.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our focus is on strengthening our manufacturing
                            ecosystem, developing engineering capabilities
                            and adopting technologies that can help us
                            deliver better solutions to our customers.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We believe that sustainable growth comes from
                            continuously investing in people, processes,
                            infrastructure and technology.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FUTURE PRIORITIES ================= */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#f7faff]
            ">

                <div className="mb-16">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Our Priorities
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Areas of Future Growth
                    </h2>

                    <div className="
                        w-16
                        h-1
                        bg-blue-600
                        mt-5
                        rounded-full
                    ">
                    </div>

                    <p className="
                        text-gray-600
                        text-lg
                        leading-8
                        mt-6
                        lg:w-3/4
                    ">
                        Our future direction is centred around strengthening
                        the capabilities that enable us to deliver
                        reliable, efficient and technology-driven
                        manufacturing solutions.
                    </p>

                </div>


                {/* PRIORITY GRID */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                ">

                    {futurePlans.map((plan) => (

                        <div
                            key={plan.number}
                            className="
                                group
                                bg-white
                                border
                                border-gray-200
                                rounded-xl
                                p-8
                                hover:border-blue-300
                                hover:shadow-xl
                                transition-all
                                duration-300
                            "
                        >

                            <div className="
                                flex
                                items-center
                                justify-between
                            ">

                                <span className="
                                    text-blue-600
                                    text-sm
                                    font-bold
                                    tracking-[2px]
                                ">
                                    {plan.number}
                                </span>

                                <div className="
                                    w-8
                                    h-[2px]
                                    bg-blue-200
                                    group-hover:w-12
                                    group-hover:bg-blue-600
                                    transition-all
                                    duration-300
                                ">
                                </div>

                            </div>


                            <h3 className="
                                text-xl
                                font-bold
                                text-[#2f3542]
                                mt-6
                            ">
                                {plan.title}
                            </h3>


                            <p className="
                                text-gray-600
                                leading-7
                                mt-4
                            ">
                                {plan.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= TECHNOLOGY ================= */}

            <section className="w-full px-10 py-20">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">

                    {/* CONTENT */}

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Technology & Innovation
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Preparing for the Next Generation of Manufacturing
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            mt-5
                            rounded-full
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Technology will continue to play an important
                            role in the evolution of our manufacturing
                            operations.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We aim to progressively adopt technologies and
                            manufacturing practices that improve precision,
                            productivity, traceability and overall
                            operational performance.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our approach is focused on practical innovation
                            that creates measurable value for our customers
                            and manufacturing operations.
                        </p>

                    </div>


                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Technology+%26+Innovation"
                            alt="Victora Industries Technology and Innovation"
                            className="
                                w-full
                                h-[430px]
                                object-cover
                                hover:scale-105
                                transition-transform
                                duration-700
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================= PEOPLE ================= */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#f7faff]
            ">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">

                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Our+People"
                            alt="Victora Industries People"
                            className="
                                w-full
                                h-[400px]
                                object-cover
                            "
                        />

                    </div>


                    {/* CONTENT */}

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            People & Skills
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Building the Skills for Tomorrow
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            mt-5
                            rounded-full
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Technology and infrastructure can only deliver
                            their full potential when supported by capable
                            people.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We remain focused on developing technical
                            expertise, encouraging continuous learning and
                            preparing our workforce for the changing needs
                            of modern manufacturing.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FUTURE STATEMENT ================= */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#2f3542]
            ">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">

                    <div>

                        <p className="
                            text-blue-400
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            The Road Ahead
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Ready for What Comes Next
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-500
                            mt-5
                            rounded-full
                        ">
                        </div>

                    </div>


                    <div>

                        <p className="
                            text-gray-300
                            text-lg
                            leading-8
                        ">
                            Our journey of growth continues with a clear
                            focus on engineering excellence, manufacturing
                            capability, technology and sustainable
                            development.
                        </p>

                        <p className="
                            text-gray-400
                            leading-8
                            mt-6
                        ">
                            We look forward to building stronger
                            capabilities, creating new opportunities and
                            continuing to deliver value to our customers
                            and stakeholders.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CLOSING ================= */}

            <section className="w-full px-10 py-16">

                <div className="
                    border-l-4
                    border-blue-600
                    pl-8
                ">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Victora Industries
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Building Today. Preparing for Tomorrow.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default FuturePlansPage;