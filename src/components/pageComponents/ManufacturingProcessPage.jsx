
const processData = [
    {
        number: "01",
        title: "Product Development",
        description:
            "The manufacturing journey begins with understanding product requirements, engineering specifications and customer expectations.",
    },
    {
        number: "02",
        title: "Tool Design",
        description:
            "Engineering teams develop precision tooling and manufacturing solutions based on product geometry, material requirements and production objectives.",
    },
    {
        number: "03",
        title: "Tool Manufacturing",
        description:
            "Precision tools, dies and fixtures are manufactured and validated to ensure dimensional accuracy and reliable production performance.",
    },
    {
        number: "04",
        title: "Press Shop",
        description:
            "Sheet metal components are formed using advanced pressing technologies and processes suited to different component requirements.",
    },
    {
        number: "05",
        title: "Welding & Assembly",
        description:
            "Individual components are joined and assembled using appropriate welding and assembly processes to create accurate and robust assemblies.",
    },
    {
        number: "06",
        title: "Quality Inspection",
        description:
            "Products and processes are evaluated through defined inspection and quality control systems to ensure compliance with required specifications.",
    },
    {
        number: "07",
        title: "Surface & Finishing",
        description:
            "Components undergo appropriate finishing processes to achieve the required appearance, protection and functional characteristics.",
    },
    {
        number: "08",
        title: "Final Assembly & Dispatch",
        description:
            "Completed products are subjected to final checks before being prepared for delivery according to customer requirements.",
    },
];

const ManufacturingProcessPage = () => {
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
                        From Concept to Production
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Integrated Manufacturing Capabilities
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
                            src="https://placehold.co/900x600?text=Advanced+Manufacturing"
                            alt="Victora Industries Manufacturing"
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
                            Our manufacturing process brings together
                            engineering, tooling, production, assembly and
                            quality capabilities under an integrated
                            manufacturing ecosystem.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            From product development and tool design to
                            production and final inspection, every stage is
                            supported by defined processes and experienced
                            engineering teams.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            This integrated approach helps us maintain
                            consistency, improve efficiency and deliver
                            reliable solutions for demanding industrial
                            applications.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= PROCESS FLOW ================= */}

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
                        Our Process
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        From Concept to Finished Product
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
                        Every stage of our manufacturing process is connected
                        to the next, creating a structured flow from
                        engineering and tooling through production, quality
                        inspection and final delivery.
                    </p>

                </div>


                {/* PROCESS GRID */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-6
                ">

                    {processData.map((process) => (

                        <div
                            key={process.number}
                            className="
                                group
                                bg-white
                                border
                                border-gray-200
                                rounded-xl
                                p-7
                                hover:border-blue-300
                                hover:shadow-xl
                                transition-all
                                duration-300
                            "
                        >

                            {/* NUMBER */}

                            <div className="
                                text-blue-600
                                text-sm
                                font-bold
                                tracking-[2px]
                            ">
                                {process.number}
                            </div>


                            {/* LINE */}

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


                            {/* TITLE */}

                            <h3 className="
                                text-xl
                                font-bold
                                text-[#2f3542]
                                mt-5
                            ">
                                {process.title}
                            </h3>


                            {/* DESCRIPTION */}

                            <p className="
                                text-gray-600
                                leading-7
                                mt-4
                            ">
                                {process.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= ENGINEERING + QUALITY ================= */}

            <section className="w-full px-10 py-20">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-14
                ">

                    {/* ENGINEERING */}

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Engineering
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Precision Starts at the Design Stage
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
                            Our engineering and tooling capabilities form
                            the foundation of the manufacturing process.
                            Careful planning and precision design help
                            establish the foundation for efficient and
                            repeatable production.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Engineering teams work closely with production
                            and quality functions to ensure that product
                            requirements are translated effectively into
                            manufacturing processes.
                        </p>

                    </div>


                    {/* QUALITY */}

                    <div className="
                        bg-[#f7faff]
                        rounded-xl
                        p-10
                        border
                        border-blue-100
                    ">

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Quality
                        </p>

                        <h2 className="
                            text-3xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Quality Throughout the Process
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
                            leading-8
                            mt-8
                        ">
                            Quality is integrated throughout the
                            manufacturing cycle rather than being limited
                            to final inspection.
                        </p>


                        <div className="
                            grid
                            grid-cols-1
                            sm:grid-cols-2
                            gap-6
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
                                    Process Control
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Monitoring critical manufacturing
                                    processes for consistency.
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
                                    Inspection
                                </h3>

                                <p className="
                                    text-gray-600
                                    text-sm
                                    leading-6
                                    mt-2
                                ">
                                    Verifying products against defined
                                    quality requirements.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= MANUFACTURING INFRASTRUCTURE ================= */}

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
                            Manufacturing Infrastructure
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Built for Complex Manufacturing
                        </h2>

                        <div className="
                            w-16
                            h-1
                            bg-blue-500
                            mt-5
                            rounded-full
                        ">
                        </div>

                        <p className="
                            text-gray-300
                            text-lg
                            leading-8
                            mt-8
                        ">
                            Our manufacturing ecosystem brings together
                            specialised facilities and processes that
                            support the complete product lifecycle.
                        </p>

                        <p className="
                            text-gray-400
                            leading-8
                            mt-6
                        ">
                            From tooling and sheet metal processing to
                            welding, assembly and inspection, our
                            capabilities are designed to support demanding
                            industrial applications.
                        </p>

                    </div>


                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Manufacturing+Facility"
                            alt="Victora Manufacturing Facility"
                            className="
                                w-full
                                h-[400px]
                                object-cover
                            "
                        />

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
                        Engineering Precision. Manufacturing Excellence.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default ManufacturingProcessPage;