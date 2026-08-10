import { useEffect, useRef } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";

const NewsData = [
    {
        title: "News Title 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 4",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 5",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 6",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 7",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 8",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
    {
        title: "News Title 9",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://placehold.co/600x400",
    },
];

const NewsCarousel = () => {

    const carouselRef = useRef(null);
    const animationRef = useRef(null);
    const pausedRef = useRef(false);

    useEffect(() => {

        const carousel = carouselRef.current;

        if (!carousel) return;

        const speed = 0.6;

        const animate = () => {

            if (!pausedRef.current) {

                carousel.scrollLeft += speed;

                /*
                 * We have duplicated NewsData.
                 *
                 * When the first set of cards has completely
                 * passed, move back to the beginning.
                 *
                 * Because the second set is identical,
                 * the user will not notice the reset.
                 */

                if (
                    carousel.scrollLeft >=
                    carousel.scrollWidth / 2
                ) {
                    carousel.scrollLeft = 0;
                }
            }

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current =
            requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };

    }, []);

    return (

        <section className="w-full px-10 py-20 ">

            {/* ================= HEADING ================= */}

            <div className="flex flex-col items-center">

                <p className="text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
                    Our Activity
                </p>

                <h2 className="text-4xl font-bold mt-3 text-[#2f3542]">
                    Latest News
                </h2>

                <div className="w-20 h-1 bg-blue-600 rounded-full mt-5">
                </div>

                <p className="text-gray-600 text-center mt-6 leading-7">
                    Stay updated with the latest developments, achievements
                    and activities from Victora Industries.
                </p>

            </div>


            {/* ================= CAROUSEL ================= */}

            <div className="relative mt-12">

                {/* Left Fade */}

                <div className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-20
                    bg-gradient-to-r
                    from-blue-50
                    to-transparent
                    z-10
                    pointer-events-none
                ">
                </div>


                {/* Carousel */}

                <div
                    ref={carouselRef}
                    onMouseEnter={() => {
                        pausedRef.current = true;
                    }}
                    onMouseLeave={() => {
                        pausedRef.current = false;
                    }}
                    className="
                        flex
                        gap-7
                        overflow-hidden
                        py-5
                        px-2
                    "
                >

                    {/* FIRST SET */}

                    {NewsData.map((news, index) => (

                        <NewsCard
                            key={`first-${index}`}
                            news={news}
                        />

                    ))}


                    {/* DUPLICATE SET */}

                    {NewsData.map((news, index) => (

                        <NewsCard
                            key={`second-${index}`}
                            news={news}
                        />

                    ))}

                </div>


                {/* Right Fade */}

                <div className="
                    absolute
                    right-0
                    top-0
                    bottom-0
                    w-20
                    bg-gradient-to-l
                    from-blue-50
                    to-transparent
                    z-10
                    pointer-events-none
                ">
                </div>

            </div>


            {/* ================= VIEW ALL ================= */}

            <div className="flex justify-center mt-10">

                <button className="
                    px-7
                    py-3
                    bg-[#2f3542]
                    hover:bg-blue-600
                    text-white
                    rounded-lg
                    font-semibold
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                ">
                    View All News
                    <span className="ml-2">
                        →
                    </span>
                </button>

            </div>

        </section>
    );
};


/* =====================================================
   NEWS CARD
===================================================== */

const NewsCard = ({ news }) => {

    return (

        <article
            className="
                group
                flex-shrink-0
                w-[320px]
                sm:w-[350px]
                lg:w-[380px]

                bg-white
                rounded-2xl
                overflow-hidden

                shadow-md
                hover:shadow-2xl

                border
                border-gray-100
                hover:border-blue-200

                transition-all
                duration-500
            "
        >

            {/* IMAGE */}

            <div className="relative h-56 overflow-hidden">

                <img
                    src={news.image}
                    alt={news.title}
                    className="
                        w-full
                        h-full
                        object-cover
                        group-hover:scale-110
                        transition-transform
                        duration-700
                    "
                />

                {/* Overlay */}

                <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#2f3542]/70
                    via-transparent
                    to-transparent
                ">
                </div>


                {/* Category */}

                <div className="
                    absolute
                    top-4
                    left-4
                    bg-blue-600
                    text-white
                    px-4
                    py-1.5
                    rounded-full
                    text-xs
                    font-semibold
                    shadow-md
                ">
                    COMPANY NEWS
                </div>


                {/* Date */}

                <div className="
                    absolute
                    bottom-4
                    left-4
                    flex
                    items-center
                    gap-2
                    text-white
                    text-sm
                ">

                    <CalendarDays size={16} />

                    <span>
                        August 2026
                    </span>

                </div>

            </div>


            {/* CONTENT */}

            <div className="p-6">

                <h3 className="
                    text-xl
                    font-bold
                    text-[#2f3542]
                    leading-7
                    group-hover:text-blue-600
                    transition-colors
                    duration-300
                ">
                    {news.title}
                </h3>


                <p className="
                    text-gray-600
                    mt-3
                    leading-7
                    text-sm
                ">
                    {news.description}
                </p>


                {/* Read More */}

                <button className="
                    group/button
                    flex
                    items-center
                    gap-2
                    mt-5
                    text-blue-600
                    font-semibold
                    text-sm
                ">

                    Read More

                    <ArrowRight
                        size={17}
                        className="
                            group-hover/button:translate-x-1
                            transition-transform
                            duration-300
                        "
                    />

                </button>

            </div>

        </article>
    );
};

export default NewsCarousel;