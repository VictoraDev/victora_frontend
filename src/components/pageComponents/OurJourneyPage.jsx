
const journeyData = [
    {
        year: "1972",
        title: "The Beginning",
        description:
            "Victora Industries began its journey with a strong foundation in tool engineering and a vision to build advanced manufacturing capabilities.",
    },
    {
        year: "1980s",
        title: "Building Manufacturing Capabilities",
        description:
            "The organisation expanded its engineering and manufacturing capabilities, strengthening its presence in the industrial sector.",
    },
    {
        year: "1990s",
        title: "Expanding Industrial Presence",
        description:
            "With growing technical expertise and manufacturing experience, Victora expanded its capabilities to serve a wider range of industrial requirements.",
    },
    {
        year: "2000s",
        title: "Technology & Modernisation",
        description:
            "The organisation continued investing in modern manufacturing technologies, processes and infrastructure to meet evolving customer requirements.",
    },
    {
        year: "2010s",
        title: "Strengthening Global Capabilities",
        description:
            "Victora further developed its manufacturing ecosystem with advanced facilities, engineering capabilities and robust quality systems.",
    },
    {
        year: "2020s",
        title: "Engineering for the Future",
        description:
            "Today, Victora Industries continues to focus on technology, innovation, quality and sustainable growth while building capabilities for the future of manufacturing.",
    },
];

const OurJourneyPage = () => {
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
                        Our Journey
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        From Vision to Manufacturing Excellence
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
                            src="https://placehold.co/900x600?text=Victora+Journey"
                            alt="Victora Industries Journey"
                            className="
                                w-full
                                h-[420px]
                                object-cover
                                hover:scale-105
                                transition-transform
                                duration-700
                            "
                        />

                    </div>


                    {/* DESCRIPTION */}

                    <div>

                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                        ">
                            Since its foundation in 1972, Victora Industries
                            has evolved through decades of engineering
                            experience, technological advancement and
                            continuous investment in manufacturing
                            capabilities.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            What began with a strong focus on tool engineering
                            has developed into a diversified manufacturing
                            organisation serving multiple industrial
                            sectors.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Each stage of our journey has been shaped by
                            innovation, customer requirements, quality and
                            a commitment to continuously improving the way
                            we manufacture.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= TIMELINE ================= */}

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
                        Milestones
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Our Growth Over The Years
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


                {/* TIMELINE */}

                <div className="relative">

                    {/* Vertical Line */}

                    <div className="
                        absolute
                        left-[31px]
                        top-0
                        bottom-0
                        w-[2px]
                        bg-blue-200
                        hidden
                        md:block
                    ">
                    </div>


                    <div className="space-y-14">

                        {journeyData.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    relative
                                    grid
                                    grid-cols-1
                                    md:grid-cols-[100px_1fr]
                                    gap-8
                                "
                            >

                                {/* YEAR */}

                                <div className="
                                    relative
                                    z-10
                                    flex
                                    md:justify-center
                                    items-start
                                ">

                                    <div className="
                                        w-16
                                        h-16
                                        bg-blue-600
                                        rounded-full
                                        flex
                                        items-center
                                        justify-center
                                        text-white
                                        font-bold
                                        text-sm
                                        shadow-md
                                    ">
                                        {item.year}
                                    </div>

                                </div>


                                {/* CONTENT */}

                                <div className="
                                    bg-white
                                    border
                                    border-gray-200
                                    rounded-xl
                                    p-7
                                    hover:shadow-lg
                                    hover:border-blue-200
                                    transition-all
                                    duration-300
                                ">

                                    <h3 className="
                                        text-2xl
                                        font-bold
                                        text-[#2f3542]
                                    ">
                                        {item.title}
                                    </h3>

                                    <div className="
                                        w-12
                                        h-1
                                        bg-blue-600
                                        mt-4
                                        rounded-full
                                    ">
                                    </div>

                                    <p className="
                                        text-gray-600
                                        leading-7
                                        mt-5
                                    ">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= TODAY ================= */}

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
                            Today
                        </p>

                        <h2 className="
                            text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Continuing the Journey
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
                            Our journey is ongoing. Victora Industries
                            continues to strengthen its manufacturing
                            infrastructure, engineering capabilities and
                            technological expertise.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            As industries evolve, we remain focused on
                            developing solutions that combine precision,
                            reliability and efficiency while creating
                            long-term value for our customers and
                            stakeholders.
                        </p>

                    </div>


                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Future+of+Victora"
                            alt="Victora Industries Future"
                            className="
                                w-full
                                h-[420px]
                                object-cover
                                hover:scale-105
                                transition-transform
                                duration-700
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================= CLOSING ================= */}

            <section className="
                w-full
                px-10
                py-16
                bg-[#2f3542]
            ">

                <div className="
                    border-l-4
                    border-blue-500
                    pl-8
                ">

                    <p className="
                        text-blue-400
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Our Journey Continues
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-white
                        mt-3
                    ">
                        Experience Behind Us. Innovation Ahead.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default OurJourneyPage;