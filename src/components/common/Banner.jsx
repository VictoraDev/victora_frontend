

const Banner = ({ title, subtitle, breadcrumb, image }) => {
    return (
        <section className="relative w-full h-[320px] overflow-hidden">

            {/* Background Image */}

            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
            />


            {/* Dark / Blue Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#2f3542]/95 via-[#2f3542]/75 to-blue-700/40">
            </div>


            {/* Content */}

            <div className="relative z-10 h-full flex flex-col justify-center px-10">

                {/* Small Heading */}

                <p className="
                    text-blue-300
                    uppercase
                    tracking-[4px]
                    text-sm
                    font-semibold
                    mb-3
                ">
                    {subtitle}
                </p>


                {/* Main Title */}

                <h1 className="
                    text-white
                    text-4xl
                    md:text-5xl
                    font-bold
                    tracking-wide
                ">
                    {title}
                </h1>


                {/* Blue Line */}

                <div className="
                    w-20
                    h-1
                    bg-blue-500
                    rounded-full
                    mt-5
                ">
                </div>


                {/* Breadcrumb */}

                <div className="
                    flex
                    items-center
                    gap-2
                    mt-5
                    text-sm
                    font-medium
                ">

                    <span className="text-gray-300">
                        {breadcrumb}
                    </span>

                    <span className="text-blue-400">
                        /
                    </span>

                    <span className="text-white">
                        {title}
                    </span>

                </div>

            </div>


            {/* Bottom Shape */}

            <div className="
                absolute
                bottom-0
                left-0
                w-full
                h-2
                bg-blue-600
            ">
            </div>

        </section>
    );
};

export default Banner;