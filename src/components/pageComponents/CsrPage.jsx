
const csrInitiatives = [
    {
        number: "01",
        title: "Education & Skill Development",
        description:
            "Supporting opportunities that encourage education, learning and skill development, helping individuals build capabilities for a better future.",
    },
    {
        number: "02",
        title: "Community Development",
        description:
            "Contributing towards initiatives that support the development and well-being of communities around our areas of operation.",
    },
    {
        number: "03",
        title: "Healthcare & Well-being",
        description:
            "Supporting initiatives focused on health, awareness and improved well-being for communities and people in need.",
    },
    {
        number: "04",
        title: "Environmental Responsibility",
        description:
            "Encouraging responsible practices that support environmental sustainability, resource conservation and a cleaner future.",
    },
];

const CsrPage = () => {
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
                        Our Responsibility
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Growing with the Communities Around Us
                    </h2>

                    <div className="
                        w-16
                        h-1
                        bg-blue-600
                        rounded-full
                        mt-5
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
                            src="https://placehold.co/900x600?text=CSR+Initiative"
                            alt="Victora Industries CSR Initiative"
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
                            At Victora Industries, we believe that
                            responsible business goes beyond manufacturing
                            products and creating economic value. It also
                            involves contributing positively to society and
                            the communities around us.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our approach towards Corporate Social
                            Responsibility focuses on supporting meaningful
                            initiatives that can contribute towards
                            education, community development, health,
                            environment and social well-being.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We aim to create a positive and sustainable
                            impact through responsible practices and
                            continued engagement with the communities we
                            serve.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CSR FOCUS AREAS ================= */}

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
                        Our Focus Areas
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Areas Where We Aim to Make a Difference
                    </h2>

                    <div className="
                        w-16
                        h-1
                        bg-blue-600
                        rounded-full
                        mt-5
                    ">
                    </div>

                    <p className="
                        text-gray-600
                        text-lg
                        leading-8
                        mt-6
                        lg:w-3/4
                    ">
                        Our CSR initiatives are centred around areas that
                        contribute to the development of people, communities
                        and the environment.
                    </p>

                </div>


                {/* CSR CARDS */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                ">

                    {csrInitiatives.map((item) => (

                        <div
                            key={item.number}
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
                                    {item.number}
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
                                {item.title}
                            </h3>


                            <p className="
                                text-gray-600
                                leading-7
                                mt-4
                            ">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= EDUCATION ================= */}

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
                            Education & Skills
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Creating Opportunities Through Learning
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            rounded-full
                            mt-5
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Education and skill development play an
                            important role in creating opportunities for
                            individuals and strengthening communities.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We believe that providing access to learning and
                            skill development can help people build greater
                            confidence, capabilities and opportunities for
                            the future.
                        </p>


                        <div className="
                            border-l-2
                            border-blue-600
                            pl-5
                            mt-8
                        ">

                            <p className="
                                text-[#2f3542]
                                font-semibold
                            ">
                                Empowering people through knowledge,
                                skills and opportunity.
                            </p>

                        </div>

                    </div>


                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Education+%26+Skills"
                            alt="CSR Education and Skill Development"
                            className="
                                w-full
                                h-[430px]
                                object-cover
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================= COMMUNITY ================= */}

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
                            src="https://placehold.co/900x600?text=Community+Development"
                            alt="Victora Industries Community Development"
                            className="
                                w-full
                                h-[430px]
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
                            Community
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Contributing to Stronger Communities
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            rounded-full
                            mt-5
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Responsible growth also means being conscious of
                            the communities in which we operate.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Through community-oriented initiatives, we aim
                            to support social development and contribute to
                            improving the quality of life for people around
                            us.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our efforts are guided by the belief that
                            meaningful development is created through
                            participation, responsibility and sustained
                            commitment.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= ENVIRONMENT ================= */}

            <section className="w-full px-10 py-20">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                    items-center
                ">

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Environment
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Responsible Growth for a Sustainable Future
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-600
                            rounded-full
                            mt-5
                        ">
                        </div>


                        <p className="
                            text-gray-700
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Environmental responsibility is an important
                            part of sustainable business practices.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We continue to encourage responsible use of
                            resources, efficient processes and greater
                            awareness of environmental considerations across
                            our operations.
                        </p>


                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-5
                            mt-8
                        ">

                            <div className="
                                border-l-2
                                border-blue-600
                                pl-5
                            ">
                                <h3 className="
                                    font-bold
                                    text-[#2f3542]
                                ">
                                    Resource Efficiency
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Encouraging efficient use of resources.
                                </p>
                            </div>


                            <div className="
                                border-l-2
                                border-blue-600
                                pl-5
                            ">
                                <h3 className="
                                    font-bold
                                    text-[#2f3542]
                                ">
                                    Environmental Awareness
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Promoting responsible environmental
                                    practices.
                                </p>
                            </div>

                        </div>

                    </div>


                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Environment"
                            alt="Victora Industries Environmental Responsibility"
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


            {/* ================= DARK SECTION ================= */}

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
                            Our Belief
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Business with a Sense of Responsibility
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-500
                            rounded-full
                            mt-5
                        ">
                        </div>

                    </div>


                    <div>

                        <p className="
                            text-gray-300
                            text-lg
                            leading-8
                        ">
                            Responsible business is about creating value
                            while remaining conscious of our impact on
                            people, communities and the environment.
                        </p>

                        <p className="
                            text-gray-400
                            leading-8
                            mt-6
                        ">
                            We remain committed to supporting initiatives
                            that contribute towards a more inclusive,
                            responsible and sustainable future.
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
                        Growing Responsibly. Creating a Positive Impact.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default CsrPage;