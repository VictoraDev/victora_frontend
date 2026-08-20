import { Link, useParams } from "react-router";
import {
    CalendarDays,
    ArrowLeft,
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
        image: "https://placehold.co/1200x700",
        content: [
            "Technology continues to transform the manufacturing industry by improving productivity, precision and operational efficiency. Modern manufacturing facilities are increasingly adopting advanced machinery, automation and digital systems to achieve consistent results.",
            "At Victora Industries, engineering excellence and technological advancement remain important parts of our manufacturing approach. By combining skilled professionals with modern manufacturing capabilities, we continue to focus on delivering reliable solutions to our customers.",
            "Advanced manufacturing technologies also help organizations improve process control, reduce production time and maintain consistent quality across different operations.",
        ],
    },

    {
        id: 2,
        title: "The Importance of Precision Engineering",
        urlSlug: "importance-of-precision-engineering",
        description:
            "Precision engineering plays a critical role in delivering reliable components and maintaining consistent manufacturing quality.",
        category: "Engineering",
        date: "05 August 2026",
        image: "https://placehold.co/1200x700",
        content: [
            "Precision engineering is an essential part of modern manufacturing. Accurate tooling, controlled processes and advanced equipment help manufacturers achieve the required specifications consistently.",
            "From tool design to component manufacturing, every stage of the production process contributes to the final quality of a product.",
            "A strong engineering foundation allows manufacturing organizations to handle complex requirements while maintaining reliability and efficiency.",
        ],
    },

    {
        id: 3,
        title: "Building A Future-Ready Manufacturing Ecosystem",
        urlSlug: "building-a-future-ready-manufacturing-ecosystem",
        description:
            "Explore the importance of flexible manufacturing, skilled people and technology in building a future-ready industrial ecosystem.",
        category: "Industry",
        date: "28 July 2026",
        image: "https://placehold.co/1200x700",
        content: [
            "The manufacturing industry is continuously evolving. Organizations need flexible processes, modern infrastructure and skilled professionals to respond effectively to changing customer requirements.",
            "A future-ready manufacturing ecosystem brings together technology, engineering expertise, quality systems and people.",
            "Continuous improvement and investment in manufacturing capabilities help organizations remain prepared for future industrial requirements.",
        ],
    },

    {
        id: 4,
        title: "Quality At The Heart Of Manufacturing",
        urlSlug: "quality-at-the-heart-of-manufacturing",
        description:
            "A strong quality culture helps manufacturers consistently deliver products that meet customer expectations and industry requirements.",
        category: "Quality",
        date: "18 July 2026",
        image: "https://placehold.co/1200x700",
        content: [
            "Quality is an integral part of every manufacturing operation. Consistent processes, inspection systems and trained professionals contribute to reliable product quality.",
            "Manufacturing quality begins with understanding customer requirements and continues through every stage of production.",
            "A strong quality-focused culture helps organizations maintain consistency while continuously improving their processes.",
        ],
    },

    {
        id: 5,
        title: "Innovation In Sheet Metal Manufacturing",
        urlSlug: "innovation-in-sheet-metal-manufacturing",
        description:
            "Modern sheet metal manufacturing combines advanced equipment, engineering expertise and process control to achieve precision.",
        category: "Innovation",
        date: "10 July 2026",
        image: "https://placehold.co/1200x700",
        content: [
            "Sheet metal manufacturing requires a combination of advanced equipment, engineering expertise and carefully controlled processes.",
            "Modern press technologies and tooling capabilities allow manufacturers to produce complex components with accuracy and repeatability.",
            "Continuous technological development helps manufacturers improve productivity while maintaining the quality standards expected by customers.",
        ],
    },

    {
        id: 6,
        title: "Developing Skills For The Manufacturing Industry",
        urlSlug: "developing-skills-for-the-manufacturing-industry",
        description:
            "Skilled professionals are at the centre of every successful manufacturing operation. Learn why continuous development matters.",
        category: "People",
        date: "02 July 2026",
        image: "https://placehold.co/1200x700",
        content: [
            "People remain one of the most important parts of a successful manufacturing organization. Skilled professionals bring technical knowledge, experience and problem-solving capabilities to the production environment.",
            "Continuous learning and skill development help employees adapt to changing technologies and manufacturing requirements.",
            "Investing in people ultimately strengthens the overall capabilities of a manufacturing organization.",
        ],
    },
];


const BlogDetailsPage = () => {

    const { urlSlug } = useParams();


    // Find blog according to URL slug

    const blog = BlogsData.find(
        (item) => item.urlSlug === urlSlug
    );


    // If URL slug does not exist

    if (!blog) {
        return (
            <div className="
                w-full
                px-10
                py-24
                text-center
            ">

                <h1 className="
                    text-4xl
                    font-bold
                    text-[#2f3542]
                ">
                    Blog Not Found
                </h1>


                <p className="
                    text-gray-600
                    mt-4
                ">
                    The blog you are looking for does not exist.
                </p>


                <Link
                    to="/blogs"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        mt-8
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-6
                        py-3
                        rounded-lg
                        font-semibold
                        transition
                    "
                >

                    <ArrowLeft className="w-5 h-5" />

                    Back To Blogs

                </Link>

            </div>
        );
    }


    return (

        <div className="w-full bg-white">


            {/* =====================================================
                BLOG HEADER
            ====================================================== */}

            <section className="w-full px-10 pt-16 pb-10">

                {/* Back */}

                <Link
                    to="/blogs"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-blue-600
                        font-semibold
                        hover:text-blue-800
                        transition
                    "
                >

                    <ArrowLeft className="w-4 h-4" />

                    Back To Blogs

                </Link>


                {/* Category + Date */}

                <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-4
                    mt-10
                ">

                    <span className="
                        flex
                        items-center
                        gap-2
                        bg-blue-50
                        text-blue-600
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                    ">

                        <Tag className="w-4 h-4" />

                        {blog.category}

                    </span>


                    <span className="
                        flex
                        items-center
                        gap-2
                        text-gray-500
                        text-sm
                    ">

                        <CalendarDays className="
                            w-4
                            h-4
                            text-blue-600
                        " />

                        {blog.date}

                    </span>

                </div>


                {/* Title */}

                <h1 className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-bold
                    text-[#2f3542]
                    mt-6
                    leading-tight
                    lg:w-4/5
                ">
                    {blog.title}
                </h1>


                {/* Blue Line */}

                <div className="
                    w-20
                    h-1
                    bg-blue-600
                    rounded-full
                    mt-6
                ">
                </div>


                {/* Description */}

                <p className="
                    text-xl
                    text-gray-600
                    leading-8
                    mt-6
                    lg:w-4/5
                ">
                    {blog.description}
                </p>

            </section>



            {/* =====================================================
                FEATURE IMAGE
            ====================================================== */}

            <section className="w-full px-10 py-8">

                <div className="
                    w-full
                    h-[350px]
                    md:h-[500px]
                    lg:h-[600px]
                    overflow-hidden
                    rounded-2xl
                ">

                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="
                            w-full
                            h-full
                            object-cover
                        "
                    />

                </div>

            </section>



            {/* =====================================================
                BLOG CONTENT
            ====================================================== */}

            <section className="w-full px-10 py-12">

                <div className="lg:w-4/5">

                    {blog.content.map((paragraph, index) => (

                        <p
                            key={index}
                            className="
                                text-gray-600
                                text-lg
                                leading-8
                                mb-7
                            "
                        >
                            {paragraph}
                        </p>

                    ))}

                </div>

            </section>



            {/* =====================================================
                BOTTOM SECTION
            ====================================================== */}

            <section className="
                w-full
                px-10
                py-16
                bg-[#f7faff]
            ">

                <div className="
                    border-l-4
                    border-blue-600
                    pl-6
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
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Engineering Excellence Through Innovation
                    </h2>


                    <p className="
                        text-gray-600
                        leading-7
                        mt-3
                        lg:w-3/4
                    ">
                        Discover more about our manufacturing capabilities,
                        engineering expertise and industrial solutions.
                    </p>


                    <Link
                        to="/contact-us"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            mt-6
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
                    >
                        Contact Us
                    </Link>

                </div>

            </section>

        </div>
    );
};


export default BlogDetailsPage;