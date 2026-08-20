import { Link } from "react-router";
import {
    CalendarDays,
    ArrowRight,
    Tag,
} from "lucide-react";


const BlogsData = [
    {
        id: 1,
        title: "Advancing Manufacturing Through Technology",
        urlSlug: "advancing-manufacturing-through-technology",
        description:
            "Discover how modern manufacturing technologies are helping industries improve productivity, precision and operational efficiency.",
        category: "Manufacturing",
        date: "12 August 2026",
        image: "https://placehold.co/900x600",
    },

    {
        id: 2,
        title: "The Importance of Precision Engineering",
        urlSlug: "importance-of-precision-engineering",
        description:
            "Precision engineering plays a critical role in delivering reliable components and maintaining consistent manufacturing quality.",
        category: "Engineering",
        date: "05 August 2026",
        image: "https://placehold.co/900x600",
    },

    {
        id: 3,
        title: "Building A Future-Ready Manufacturing Ecosystem",
        urlSlug: "building-a-future-ready-manufacturing-ecosystem",
        description:
            "Explore the importance of flexible manufacturing, skilled people and technology in building a future-ready industrial ecosystem.",
        category: "Industry",
        date: "28 July 2026",
        image: "https://placehold.co/900x600",
    },

    {
        id: 4,
        title: "Quality At The Heart Of Manufacturing",
        urlSlug: "quality-at-the-heart-of-manufacturing",
        description:
            "A strong quality culture helps manufacturers consistently deliver products that meet customer expectations and industry requirements.",
        category: "Quality",
        date: "18 July 2026",
        image: "https://placehold.co/900x600",
    },

    {
        id: 5,
        title: "Innovation In Sheet Metal Manufacturing",
        urlSlug: "innovation-in-sheet-metal-manufacturing",
        description:
            "Modern sheet metal manufacturing combines advanced equipment, engineering expertise and process control to achieve precision.",
        category: "Innovation",
        date: "10 July 2026",
        image: "https://placehold.co/900x600",
    },

    {
        id: 6,
        title: "Developing Skills For The Manufacturing Industry",
        urlSlug: "developing-skills-for-the-manufacturing-industry",
        description:
            "Skilled professionals are at the centre of every successful manufacturing operation. Learn why continuous development matters.",
        category: "People",
        date: "02 July 2026",
        image: "https://placehold.co/900x600",
    },
];


const BlogsPage = () => {

    return (
        <div className="w-full bg-white">


            {/* =====================================================
                PAGE INTRODUCTION
            ====================================================== */}

            <section className="w-full px-10 pt-20 pb-10">

                <div>

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Insights & Updates
                    </p>


                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Our Blogs
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
                        Explore our latest insights, manufacturing
                        perspectives, technology updates and stories from
                        the world of engineering and industrial
                        manufacturing.
                    </p>

                </div>

            </section>



            {/* =====================================================
                FEATURED BLOG
            ====================================================== */}

            <section className="w-full px-10 py-10">

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    bg-[#f7faff]
                    rounded-2xl
                    overflow-hidden
                    border
                    border-blue-100
                ">


                    {/* IMAGE */}

                    <div className="
                        relative
                        h-[350px]
                        lg:h-[430px]
                        overflow-hidden
                    ">

                        <img
                            src={BlogsData[0].image}
                            alt={BlogsData[0].title}
                            className="
                                w-full
                                h-full
                                object-cover
                                transition-transform
                                duration-500
                                hover:scale-105
                            "
                        />


                        <div className="
                            absolute
                            top-5
                            left-5
                            bg-blue-600
                            text-white
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                        ">
                            Featured
                        </div>

                    </div>



                    {/* CONTENT */}

                    <div className="
                        p-8
                        lg:p-12
                        flex
                        flex-col
                        justify-center
                    ">

                        <div className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                            text-sm
                            font-semibold
                        ">

                            <span className="
                                flex
                                items-center
                                gap-2
                                text-blue-600
                            ">

                                <Tag className="w-4 h-4" />

                                {BlogsData[0].category}

                            </span>


                            <span className="text-gray-300">
                                |
                            </span>


                            <span className="
                                flex
                                items-center
                                gap-2
                                text-gray-500
                            ">

                                <CalendarDays className="w-4 h-4" />

                                {BlogsData[0].date}

                            </span>

                        </div>



                        <h3 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-5
                            leading-tight
                        ">
                            {BlogsData[0].title}
                        </h3>



                        <p className="
                            text-gray-600
                            leading-8
                            mt-5
                        ">
                            {BlogsData[0].description}
                        </p>



                        <Link
                            to={`/blogs/${BlogsData[0].urlSlug}`}
                            className="
                                flex
                                items-center
                                gap-2
                                w-fit
                                mt-7
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-6
                                py-3
                                rounded-lg
                                font-semibold
                                transition-all
                                duration-300
                            "
                        >

                            Read Article

                            <ArrowRight className="w-5 h-5" />

                        </Link>

                    </div>

                </div>

            </section>



            {/* =====================================================
                LATEST BLOGS
            ====================================================== */}

            <section className="
                w-full
                px-10
                py-20
                bg-[#f7faff]
            ">


                {/* SECTION HEADING */}

                <div className="mb-12">

                    <p className="
                        text-blue-600
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[4px]
                    ">
                        Latest Articles
                    </p>


                    <h2 className="
                        text-3xl
                        md:text-4xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Manufacturing Insights
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



                {/* BLOG CARDS */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-7
                ">

                    {BlogsData.map((blog) => (

                        <Link
                            key={blog.id}
                            to={`/blogs/${blog.urlSlug}`}
                            className="
                                group
                                block
                                bg-white
                                rounded-xl
                                overflow-hidden
                                border
                                border-gray-200
                                hover:border-blue-200
                                hover:shadow-xl
                                transition-all
                                duration-300
                            "
                        >

                            {/* IMAGE */}

                            <div className="
                                relative
                                h-[220px]
                                overflow-hidden
                            ">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-transform
                                        duration-500
                                        group-hover:scale-105
                                    "
                                />


                                {/* CATEGORY */}

                                <div className="
                                    absolute
                                    top-4
                                    left-4
                                    bg-white
                                    text-blue-600
                                    px-3
                                    py-1.5
                                    rounded-md
                                    text-xs
                                    font-bold
                                    shadow-sm
                                ">
                                    {blog.category}
                                </div>

                            </div>



                            {/* CONTENT */}

                            <div className="p-6">


                                {/* DATE */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    text-gray-500
                                    text-sm
                                ">

                                    <CalendarDays
                                        className="
                                            w-4
                                            h-4
                                            text-blue-600
                                        "
                                    />

                                    {blog.date}

                                </div>



                                {/* TITLE */}

                                <h3 className="
                                    text-xl
                                    font-bold
                                    text-[#2f3542]
                                    mt-4
                                    leading-7
                                    group-hover:text-blue-600
                                    transition-colors
                                    duration-300
                                ">
                                    {blog.title}
                                </h3>



                                {/* DESCRIPTION */}

                                <p className="
                                    text-gray-600
                                    leading-7
                                    mt-3
                                ">
                                    {blog.description}
                                </p>



                                {/* READ MORE */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                    mt-5
                                    text-blue-600
                                    font-semibold
                                    group-hover:text-blue-800
                                    transition-colors
                                ">

                                    Read More

                                    <ArrowRight
                                        className="
                                            w-4
                                            h-4
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>



            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="w-full px-10 py-20">

                <div className="
                    bg-[#2f3542]
                    rounded-2xl
                    px-8
                    py-12
                    lg:px-14
                    flex
                    flex-col
                    md:flex-row
                    items-center
                    justify-between
                    gap-8
                ">

                    <div>

                        <p className="
                            text-blue-400
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Stay Connected
                        </p>


                        <h2 className="
                            text-3xl
                            font-bold
                            text-white
                            mt-3
                        ">
                            Explore More From Victora Industries
                        </h2>


                        <p className="
                            text-gray-300
                            leading-7
                            mt-3
                        ">
                            Stay updated with our latest activities,
                            manufacturing insights and company developments.
                        </p>

                    </div>


                    <Link
                        to="/contact-us"
                        className="
                            shrink-0
                            flex
                            items-center
                            gap-2
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            font-semibold
                            transition-all
                            duration-300
                        "
                    >

                        Contact Us

                        <ArrowRight className="w-5 h-5" />

                    </Link>

                </div>

            </section>

        </div>
    );
};


export default BlogsPage;