import OurCustomers from "../HomeComps/OurCustomers";

const customers = [
    {
        name: "Customer 01",
        image: "https://placehold.co/500x250?text=Customer+01",
    },
    {
        name: "Customer 02",
        image: "https://placehold.co/500x250?text=Customer+02",
    },
    {
        name: "Customer 03",
        image: "https://placehold.co/500x250?text=Customer+03",
    },
    {
        name: "Customer 04",
        image: "https://placehold.co/500x250?text=Customer+04",
    },
    {
        name: "Customer 05",
        image: "https://placehold.co/500x250?text=Customer+05",
    },
    {
        name: "Customer 06",
        image: "https://placehold.co/500x250?text=Customer+06",
    },
    {
        name: "Customer 07",
        image: "https://placehold.co/500x250?text=Customer+07",
    },
    {
        name: "Customer 08",
        image: "https://placehold.co/500x250?text=Customer+08",
    },
    {
        name: "Customer 09",
        image: "https://placehold.co/500x250?text=Customer+09",
    },
    {
        name: "Customer 10",
        image: "https://placehold.co/500x250?text=Customer+10",
    },
    {
        name: "Customer 11",
        image: "https://placehold.co/500x250?text=Customer+11",
    },
    {
        name: "Customer 12",
        image: "https://placehold.co/500x250?text=Customer+12",
    },
];

const CustomersPage = () => {
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
                        Our Network
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Trusted by Industry Leaders
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
                            src="https://placehold.co/900x600?text=Customer+Partnership"
                            alt="Victora Industries Customer Partnership"
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
                            Strong customer relationships are at the heart
                            of our business. We work closely with customers
                            to understand their requirements and deliver
                            reliable manufacturing solutions.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            Our engineering expertise, manufacturing
                            capabilities and quality-focused processes allow
                            us to support customers across demanding
                            industrial applications.
                        </p>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-6
                        ">
                            We believe long-term partnerships are built on
                            consistency, technical capability, responsiveness
                            and trust.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CUSTOMER SHOWCASE ================= */}

           <OurCustomers />


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
                            Long-Term Partnerships
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Creating Value Beyond Manufacturing
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
                            Our customer relationships extend beyond
                            individual products and projects. We aim to
                            become dependable engineering and manufacturing
                            partners for the long term.
                        </p>

                        <p className="
                            text-gray-400
                            leading-8
                            mt-6
                        ">
                            Through technical collaboration, consistent
                            quality and continuous improvement, we work
                            towards creating lasting value for our customers.
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
                        Strong Partnerships. Reliable Manufacturing.
                    </h2>

                </div>

            </section>

        </div>
    );
};

export default CustomersPage;