import { useState } from "react";
import {
    BriefcaseBusiness,
    MapPin,
    Clock3,
    ArrowRight,
} from "lucide-react";
import JobDetailsModal from "../common/JobDetailsModal";
import JobApplyModal from "../common/JobApplyModal";



const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        department: "Information Technology",
        location: "Faridabad, Haryana",
        experience: "2 - 4 Years",
        type: "Full Time",
        description:
            "We are looking for a skilled Frontend Developer to build modern, responsive and user-friendly web applications for our organization.",
        responsibilities: [
            "Develop responsive web applications using React.js.",
            "Build reusable and maintainable UI components.",
            "Work closely with backend developers and business teams.",
            "Optimize applications for performance and usability.",
            "Debug and resolve frontend issues.",
        ],
        requirements: [
            "Strong knowledge of HTML, CSS and JavaScript.",
            "Good experience with React.js.",
            "Understanding of REST APIs.",
            "Knowledge of Git and modern development practices.",
            "Good problem-solving and communication skills.",
        ],
    },

    {
        id: 2,
        title: "Production Engineer",
        department: "Production",
        location: "Faridabad, Haryana",
        experience: "2 - 5 Years",
        type: "Full Time",
        description:
            "We are seeking a Production Engineer to support manufacturing operations, process improvement and production efficiency.",
        responsibilities: [
            "Monitor and support daily production activities.",
            "Coordinate with production and quality teams.",
            "Identify opportunities for process improvement.",
            "Maintain production records and reports.",
            "Ensure adherence to manufacturing procedures.",
        ],
        requirements: [
            "Bachelor's degree in Mechanical or related engineering.",
            "Understanding of manufacturing processes.",
            "Good analytical and problem-solving skills.",
            "Ability to work in a manufacturing environment.",
        ],
    },

    {
        id: 3,
        title: "Quality Engineer",
        department: "Quality",
        location: "Faridabad, Haryana",
        experience: "2 - 5 Years",
        type: "Full Time",
        description:
            "Join our quality team and contribute to maintaining high standards across manufacturing processes and products.",
        responsibilities: [
            "Monitor quality standards across production processes.",
            "Perform inspections and maintain quality records.",
            "Support root cause analysis and corrective actions.",
            "Coordinate with production teams for quality improvement.",
            "Support continuous improvement initiatives.",
        ],
        requirements: [
            "Engineering degree or equivalent qualification.",
            "Knowledge of quality systems and manufacturing processes.",
            "Good analytical skills.",
            "Strong attention to detail.",
        ],
    },

    {
        id: 4,
        title: "Tool Design Engineer",
        department: "Tool Design",
        location: "Faridabad, Haryana",
        experience: "3 - 6 Years",
        type: "Full Time",
        description:
            "We are looking for a Tool Design Engineer to support the development and improvement of tools and dies used in manufacturing.",
        responsibilities: [
            "Design and develop manufacturing tools and dies.",
            "Prepare engineering drawings and documentation.",
            "Coordinate with tool room and production teams.",
            "Support tool trials and modifications.",
            "Improve tool performance and reliability.",
        ],
        requirements: [
            "Engineering qualification in Mechanical or related field.",
            "Experience with tool and die design.",
            "Knowledge of engineering drawings.",
            "CAD software knowledge.",
        ],
    },
];


const CareersPage = () => {

    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplyModal, setShowApplyModal] = useState(false);


    const handleApply = () => {
        setShowApplyModal(true);
    };


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
                        Careers at Victora
                    </p>

                    <h2 className="
                        text-4xl
                        md:text-5xl
                        font-bold
                        text-[#2f3542]
                        mt-3
                    ">
                        Build Your Career With Us
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
                        At Victora Industries, we believe that our people
                        are an important part of our continued growth.
                        Explore our current opportunities and become part
                        of a team driven by engineering and manufacturing
                        excellence.
                    </p>

                </div>


                {/* ================= JOB LIST ================= */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-6
                ">

                    {jobsData.map((job) => (

                        <div
                            key={job.id}
                            onClick={() => setSelectedJob(job)}
                            className="
                                group
                                cursor-pointer
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

                            {/* Top */}

                            <div className="
                                flex
                                items-start
                                justify-between
                                gap-4
                            ">

                                <div className="
                                    w-12
                                    h-12
                                    bg-blue-50
                                    rounded-lg
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                ">

                                    <BriefcaseBusiness className="
                                        w-6
                                        h-6
                                        text-blue-600
                                    " />

                                </div>


                                <span className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[1px]
                                    text-blue-600
                                    bg-blue-50
                                    px-3
                                    py-2
                                    rounded-full
                                ">
                                    {job.type}
                                </span>

                            </div>


                            {/* Title */}

                            <h3 className="
                                text-2xl
                                font-bold
                                text-[#2f3542]
                                mt-6
                                group-hover:text-blue-600
                                transition-colors
                            ">
                                {job.title}
                            </h3>


                            <p className="
                                text-gray-500
                                mt-2
                            ">
                                {job.department}
                            </p>


                            {/* Details */}

                            <div className="
                                flex
                                flex-wrap
                                gap-x-6
                                gap-y-3
                                mt-6
                            ">

                                <div className="flex items-center gap-2">

                                    <MapPin className="
                                        w-4
                                        h-4
                                        text-blue-600
                                    " />

                                    <span className="text-sm text-gray-600">
                                        {job.location}
                                    </span>

                                </div>


                                <div className="flex items-center gap-2">

                                    <Clock3 className="
                                        w-4
                                        h-4
                                        text-blue-600
                                    " />

                                    <span className="text-sm text-gray-600">
                                        {job.experience}
                                    </span>

                                </div>

                            </div>


                            {/* View */}

                            <div className="
                                flex
                                items-center
                                gap-2
                                text-blue-600
                                font-semibold
                                mt-7
                            ">

                                View Position

                                <ArrowRight className="
                                    w-5
                                    h-5
                                    group-hover:translate-x-1
                                    transition-transform
                                " />

                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= WHY JOIN US ================= */}

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

                    <div>

                        <p className="
                            text-blue-600
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[4px]
                        ">
                            Why Victora
                        </p>

                        <h2 className="
                            text-3xl
                            md:text-4xl
                            font-bold
                            text-[#2f3542]
                            mt-3
                        ">
                            Grow With an Organization Built on Excellence
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
                            leading-8
                            mt-7
                        ">
                            Join a professional environment where
                            engineering expertise, innovation, teamwork
                            and continuous improvement come together.
                        </p>


                        <div className="
                            border-l-4
                            border-blue-600
                            pl-5
                            mt-8
                        ">

                            <p className="
                                text-[#2f3542]
                                font-semibold
                                leading-7
                            ">
                                Explore opportunities and take the next
                                step in your professional journey with
                                Victora Industries.
                            </p>

                        </div>

                    </div>


                    <div className="overflow-hidden rounded-xl">

                        <img
                            src="https://placehold.co/900x600?text=Careers+at+Victora"
                            alt="Careers at Victora Industries"
                            className="
                                w-full
                                h-[420px]
                                object-cover
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================= JOB DETAILS MODAL ================= */}

            <JobDetailsModal
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
                onApply={handleApply}
            />


            {/* ================= APPLY MODAL ================= */}

            <JobApplyModal
                job={selectedJob}
                isOpen={showApplyModal}
                onClose={() => setShowApplyModal(false)}
            />

        </div>
    );
};


export default CareersPage;