
const qualityPillars = [
    {
        number: "01",
        title: "Quality Planning",
        description:
            "Quality is considered from the beginning of the product and manufacturing cycle, helping establish clear requirements and process controls.",
    },
    {
        number: "02",
        title: "Process Control",
        description:
            "Defined manufacturing processes and monitoring systems help maintain consistency and control throughout production.",
    },
    {
        number: "03",
        title: "Inspection & Testing",
        description:
            "Products and components are inspected at appropriate stages to verify dimensional, functional and quality requirements.",
    },
    {
        number: "04",
        title: "Continuous Improvement",
        description:
            "We focus on identifying opportunities to improve processes, reduce variation and strengthen overall manufacturing performance.",
    },
];

const QualityPage = () => {
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
                        Our Commitment
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Quality Built Into Every Process
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
                            src="https://placehold.co/900x600?text=Quality+Inspection"
                            alt="Victora Industries Quality Inspection"
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
                            Quality is an integral part of our manufacturing
                            philosophy. We focus on maintaining consistency,
                            reliability and precision across every stage of
                            the manufacturing process.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our approach combines process discipline,
                            inspection systems, engineering expertise and
                            continuous improvement to meet defined product
                            and customer requirements.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            By integrating quality into our processes rather
                            than treating it only as a final inspection
                            activity, we work towards achieving dependable
                            and repeatable manufacturing outcomes.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= QUALITY PILLARS ================= */}

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
                        Our Quality Framework
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        A Structured Approach to Quality
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
                        Our quality approach extends across planning,
                        manufacturing, inspection and improvement, creating
                        a connected system for maintaining product and
                        process performance.
                    </p>

                </div>


                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                ">

                    {qualityPillars.map((item) => (

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

                            <span className="
                                text-blue-600
                                text-sm
                                font-bold
                                tracking-[2px]
                            ">
                                {item.number}
                            </span>


                            <div className="
                                w-10
                                h-1
                                bg-blue-600
                                rounded-full
                                mt-4
                                group-hover:w-16
                                transition-all
                                duration-300
                            ">
                            </div>


                            <h3 className="
                                text-xl
                                font-bold
                                text-[#2f3542]
                                mt-5
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


            {/* ================= QUALITY SYSTEM ================= */}

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
                            Quality Systems
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Consistency Through Process Discipline
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
                            A robust quality system helps create consistency
                            across manufacturing operations and provides a
                            structured approach to identifying and addressing
                            process variations.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our teams work across engineering, production and
                            inspection functions to ensure that quality
                            requirements are understood and incorporated into
                            day-to-day manufacturing activities.
                        </p>


                        {/* QUALITY POINTS */}

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
                                    Process Monitoring
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Maintaining control over critical
                                    manufacturing processes.
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
                                    Root Cause Analysis
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Identifying causes of issues to support
                                    effective corrective action.
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
                                    Documentation
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Maintaining structured quality and
                                    process information.
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
                                    Improvement
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Continuously improving processes and
                                    manufacturing performance.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* IMAGE */}

                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Quality+System"
                            alt="Victora Industries Quality System"
                            className="
                                w-full
                                h-[480px]
                                object-cover
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================= CERTIFICATION ================= */}

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
                            src="https://placehold.co/900x600?text=Quality+Certification"
                            alt="Victora Industries Quality Certification"
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
                            Certifications & Standards
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Quality Recognised Through Standards
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
                            Our commitment to quality is supported by
                            structured management systems and applicable
                            industry standards.
                        </p>


                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Certifications and standards provide a framework
                            for maintaining consistent processes and
                            continually improving our manufacturing and
                            quality management practices.
                        </p>


                        <button className="
                            mt-8
                            px-6
                            py-3
                            bg-blue-600
                            text-white
                            font-semibold
                            rounded-lg
                            hover:bg-blue-700
                            transition-colors
                            duration-300
                        ">
                            View Certifications
                        </button>

                    </div>

                </div>

            </section>


            {/* ================= CUSTOMER COMMITMENT ================= */}

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
                            Customer Commitment
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Quality That Builds Trust
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
                            Consistent quality is fundamental to building
                            long-term relationships with our customers.
                        </p>

                        <p className="
                            text-gray-400
                            leading-8
                            mt-6
                        ">
                            Through disciplined processes, engineering
                            expertise and continuous improvement, we strive
                            to deliver products that meet defined
                            requirements and support our customers'
                            manufacturing needs.
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
                        Quality in Every Process. Excellence in Every Product.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default QualityPage;