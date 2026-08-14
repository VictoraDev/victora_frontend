import Certification from "../HomeComps/Certification";

const CertificationPage = () => {
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
                        Quality & Excellence
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Awards & Certifications
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
                            src="https://placehold.co/900x600?text=Quality+%26+Certifications"
                            alt="Victora Industries Quality and Certifications"
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
                            Quality is an integral part of Victora Industries'
                            manufacturing philosophy. Our commitment to
                            quality is reflected through robust processes,
                            advanced manufacturing capabilities and
                            internationally recognised quality systems.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our certifications and recognitions demonstrate
                            our continued focus on maintaining high standards
                            across manufacturing, engineering, operations
                            and customer service.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            These achievements reinforce our commitment to
                            consistency, reliability, continuous improvement
                            and customer satisfaction.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CERTIFICATIONS ================= */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#f7faff]
            ">

                <div className="mb-14">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Recognitions
                    </p>

                    <h2 className="
                        text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Our Certifications
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
                        Our certifications reflect the systems, processes and
                        standards that support our commitment to engineering
                        and manufacturing excellence.
                    </p>

                </div>


                {/* EXISTING CERTIFICATION COMPONENT */}

                <div className="w-full">

                    <Certification />

                </div>

            </section>


            {/* ================= QUALITY APPROACH ================= */}

            <section className="w-full px-10 py-20">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-10
                ">

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[3px]
                        ">
                            Our Commitment
                        </p>

                        <h2 className="
                            text-3xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Quality in Every Process
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
                        border-l-2
                        border-blue-500
                        pl-6
                    ">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Consistent Standards
                        </h3>

                        <p className="
                            text-gray-600
                            leading-7
                            mt-3
                        ">
                            Maintaining consistent quality standards across
                            our manufacturing operations and processes.
                        </p>

                    </div>


                    <div className="
                        border-l-2
                        border-blue-500
                        pl-6
                    ">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Continuous Improvement
                        </h3>

                        <p className="
                            text-gray-600
                            leading-7
                            mt-3
                        ">
                            Continuously improving systems, processes and
                            capabilities to meet evolving requirements.
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
                        Quality That Builds Trust
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default CertificationPage;