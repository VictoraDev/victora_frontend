
const milestones = [
    {
        year: "1972",
        title: "Foundation",
        description:
            "The journey began with a strong foundation in tool engineering and manufacturing.",
    },
    {
        year: "1980",
        title: "Manufacturing Expansion",
        description:
            "Expansion of manufacturing capabilities to support growing industrial requirements.",
    },
    {
        year: "1990",
        title: "Industry Growth",
        description:
            "Strengthened presence across industrial sectors through engineering expertise and manufacturing capabilities.",
    },
    {
        year: "2000",
        title: "Technology Advancement",
        description:
            "Focused investments in modern machinery, manufacturing processes and technological capabilities.",
    },
    {
        year: "2010",
        title: "Advanced Manufacturing",
        description:
            "Continued development of advanced manufacturing infrastructure and quality systems.",
    },
    {
        year: "2020",
        title: "Strengthening Capabilities",
        description:
            "Expanded engineering and manufacturing capabilities to support evolving customer requirements.",
    },
    {
        year: "Today",
        title: "Engineering for Tomorrow",
        description:
            "Continuing to build a technology-driven and future-ready manufacturing organisation.",
    },
];

const KeymileStonesPage = () => {
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
                        Our Growth
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Milestones That Shaped Our Journey
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
                            src="https://placehold.co/900x600?text=Victora+Industries"
                            alt="Victora Industries Milestones"
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


                    {/* CONTENT */}

                    <div>

                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                        ">
                            Over the years, Victora Industries has continued
                            to evolve through engineering expertise,
                            manufacturing excellence and a commitment to
                            technological advancement.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Every milestone represents an important stage in
                            the development of our capabilities, infrastructure,
                            people and processes.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Together, these achievements reflect our
                            continued focus on delivering dependable
                            engineering and manufacturing solutions to our
                            customers.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= MILESTONES ================= */}

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
                        Our Growth at a Glance
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
                        hidden
                        lg:block
                        absolute
                        left-[50%]
                        top-0
                        bottom-0
                        w-[2px]
                        bg-blue-200
                        -translate-x-1/2
                    ">
                    </div>


                    <div className="space-y-16">

                        {milestones.map((milestone, index) => {

                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className="
                                        relative
                                        grid
                                        grid-cols-1
                                        lg:grid-cols-2
                                        gap-10
                                    "
                                >

                                    {/* LEFT */}

                                    <div
                                        className={`
                                            ${isEven
                                                ? "lg:pr-16"
                                                : "lg:col-start-2 lg:pl-16"
                                            }
                                        `}
                                    >

                                        <div className="
                                            bg-white
                                            border
                                            border-gray-200
                                            rounded-xl
                                            p-8
                                            hover:border-blue-200
                                            hover:shadow-lg
                                            transition-all
                                            duration-300
                                        ">

                                            <p className="
                                                text-blue-600
                                                text-sm
                                                font-bold
                                                uppercase
                                                tracking-[3px]
                                            ">
                                                {milestone.year}
                                            </p>

                                            <h3 className="
                                                text-2xl
                                                font-bold
                                                text-[#2f3542]
                                                mt-2
                                            ">
                                                {milestone.title}
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
                                                {milestone.description}
                                            </p>

                                        </div>

                                    </div>


                                    {/* CENTER DOT */}

                                    <div className="
                                        hidden
                                        lg:flex
                                        absolute
                                        left-1/2
                                        top-8
                                        -translate-x-1/2
                                        w-5
                                        h-5
                                        rounded-full
                                        bg-blue-600
                                        border-4
                                        border-white
                                        shadow
                                        z-10
                                    ">
                                    </div>

                                </div>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* ================= ACHIEVEMENTS ================= */}

            <section className="w-full px-10 py-20">

                <div className="mb-14">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Building Forward
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        From Milestones to Momentum
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
                    md:grid-cols-3
                    gap-8
                ">

                    {/* ITEM 1 */}

                    <div className="
                        border-l-2
                        border-blue-600
                        pl-6
                    ">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Engineering
                        </h3>

                        <p className="
                            text-gray-600
                            leading-7
                            mt-3
                        ">
                            Developing strong engineering and technical
                            capabilities to support complex manufacturing
                            requirements.
                        </p>

                    </div>


                    {/* ITEM 2 */}

                    <div className="
                        border-l-2
                        border-blue-600
                        pl-6
                    ">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Manufacturing
                        </h3>

                        <p className="
                            text-gray-600
                            leading-7
                            mt-3
                        ">
                            Continuously strengthening infrastructure,
                            processes and production capabilities.
                        </p>

                    </div>


                    {/* ITEM 3 */}

                    <div className="
                        border-l-2
                        border-blue-600
                        pl-6
                    ">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Innovation
                        </h3>

                        <p className="
                            text-gray-600
                            leading-7
                            mt-3
                        ">
                            Embracing technology and continuous improvement
                            to prepare for the future of manufacturing.
                        </p>

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
                        Victora Industries
                    </p>

                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-white
                        mt-3
                    ">
                        Every Milestone Builds the Future
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default KeymileStonesPage;