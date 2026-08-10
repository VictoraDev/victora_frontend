const CustomersData = [
    {
        name: "Customer 1",
        logo: "https://placehold.co/300x150?text=Customer+1",
    },
    {
        name: "Customer 2",
        logo: "https://placehold.co/300x150?text=Customer+2",
    },
    {
        name: "Customer 3",
        logo: "https://placehold.co/300x150?text=Customer+3",
    },
    {
        name: "Customer 4",
        logo: "https://placehold.co/300x150?text=Customer+4",
    },
    {
        name: "Customer 5",
        logo: "https://placehold.co/300x150?text=Customer+5",
    },
    {
        name: "Customer 6",
        logo: "https://placehold.co/300x150?text=Customer+6",
    },
    {
        name: "Customer 7",
        logo: "https://placehold.co/300x150?text=Customer+7",
    },
    {
        name: "Customer 8",
        logo: "https://placehold.co/300x150?text=Customer+8",
    },
    {
        name: "Customer 9",
        logo: "https://placehold.co/300x150?text=Customer+9",
    },
];

const OurCustomers = () => {

    return (
        <section className="w-full px-10 py-20">

            {/* ================= HEADING ================= */}

            <div className="flex flex-col items-center">

                <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
                    Our Customers
                </p>

                <h2 className="text-4xl font-bold mt-3 text-[#2f3542]">
                    Trusted By Industry Leaders
                </h2>

                <div className="w-20 h-1 bg-blue-600 rounded-full mt-5">
                </div>

                <p className="text-gray-600 text-center mt-6 leading-7">
                    We are proud to partner with leading organizations
                    across the automotive, elevator, engineering and
                    industrial sectors.
                </p>

            </div>


            {/* ================= CAROUSEL ================= */}

            <div className="relative mt-14 overflow-hidden">

                {/* Left Fade */}

                <div className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-24
                    bg-gradient-to-r
                    from-white
                    to-transparent
                    z-10
                    pointer-events-none
                " />

                {/* Moving Track */}

                <div className="group">

                    <div
                        className="
                            flex
                            w-max
                            gap-6
                            animate-customer-scroll
                            group-hover:[animation-play-state:paused]
                        "
                    >

                        {/* FIRST SET */}

                        {CustomersData.map((customer, index) => (
                            <CustomerCard
                                key={`first-${index}`}
                                customer={customer}
                            />
                        ))}

                        {/* SECOND IDENTICAL SET */}

                        {CustomersData.map((customer, index) => (
                            <CustomerCard
                                key={`second-${index}`}
                                customer={customer}
                            />
                        ))}

                    </div>

                </div>


                {/* Right Fade */}

                <div className="
                    absolute
                    right-0
                    top-0
                    bottom-0
                    w-24
                    bg-gradient-to-l
                    from-white
                    to-transparent
                    z-10
                    pointer-events-none
                " />

            </div>


            {/* ================= BUTTON ================= */}

            <div className="flex justify-center mt-10">

                <button
                    className="
                        text-blue-600
                        font-semibold
                        hover:text-blue-700
                        transition-colors
                        duration-300
                    "
                >
                    View Our Customers →
                </button>

            </div>

        </section>
    );
};


/* =====================================================
   CUSTOMER CARD
===================================================== */

const CustomerCard = ({ customer }) => {

    return (
        <div
            className="
                flex-shrink-0
                w-[240px]
                h-[140px]

                bg-white

                rounded-xl

                border
                border-gray-200

                shadow-sm

                flex
                items-center
                justify-center

                hover:border-blue-300
                hover:shadow-lg

                transition-all
                duration-300

                group/card
            "
        >

            <img
                src={customer.logo}
                alt={customer.name}
                className="
                    w-[180px]
                    h-[90px]
                    object-contain

                    grayscale
                    opacity-60

                    group-hover/card:grayscale-0
                    group-hover/card:opacity-100

                    transition-all
                    duration-500
                "
            />

        </div>
    );
};

export default OurCustomers;