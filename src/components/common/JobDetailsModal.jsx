import {
    X,
    MapPin,
    Clock3,
    BriefcaseBusiness,
    CheckCircle2,
} from "lucide-react";


const JobDetailsModal = ({ job, onClose, onApply }) => {

    if (!job) {
        return null;
    }


    return (
        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                bg-[#2f3542]/70
                backdrop-blur-sm
                px-5
                py-8
            "
            onClick={onClose}
        >

            <div
                className="
                    relative
                    w-full
                    max-w-4xl
                    max-h-[90vh]
                    overflow-y-auto
                    bg-white
                    rounded-2xl
                    shadow-2xl
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* ================= HEADER ================= */}

                <div className="
                    bg-[#2f3542]
                    px-8
                    py-8
                    relative
                ">

                    <button
                        onClick={onClose}
                        className="
                            absolute
                            top-5
                            right-5
                            w-10
                            h-10
                            rounded-full
                            bg-white/10
                            hover:bg-white/20
                            flex
                            items-center
                            justify-center
                            text-white
                            transition
                        "
                    >
                        <X className="w-5 h-5" />
                    </button>


                    <div className="
                        flex
                        items-center
                        gap-4
                    ">

                        <div className="
                            w-12
                            h-12
                            rounded-lg
                            bg-blue-600
                            flex
                            items-center
                            justify-center
                        ">

                            <BriefcaseBusiness className="
                                w-6
                                h-6
                                text-white
                            " />

                        </div>


                        <div>

                            <p className="
                                text-blue-400
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[2px]
                            ">
                                Career Opportunity
                            </p>

                            <h2 className="
                                text-3xl
                                font-bold
                                text-white
                                mt-1
                            ">
                                {job.title}
                            </h2>

                        </div>

                    </div>


                    {/* Job Meta */}

                    <div className="
                        flex
                        flex-wrap
                        gap-5
                        mt-7
                    ">

                        <div className="flex items-center gap-2 text-gray-300">

                            <MapPin className="
                                w-4
                                h-4
                                text-blue-400
                            " />

                            {job.location}

                        </div>


                        <div className="flex items-center gap-2 text-gray-300">

                            <Clock3 className="
                                w-4
                                h-4
                                text-blue-400
                            " />

                            {job.experience}

                        </div>


                        <div className="flex items-center gap-2 text-gray-300">

                            <BriefcaseBusiness className="
                                w-4
                                h-4
                                text-blue-400
                            " />

                            {job.department}

                        </div>

                    </div>

                </div>


                {/* ================= BODY ================= */}

                <div className="px-8 py-8">


                    {/* Description */}

                    <div>

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Job Description
                        </h3>

                        <p className="
                            text-gray-600
                            leading-8
                            mt-4
                        ">
                            {job.description}
                        </p>

                    </div>


                    {/* Responsibilities */}

                    <div className="mt-8">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Key Responsibilities
                        </h3>


                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-4
                            mt-5
                        ">

                            {job.responsibilities.map(
                                (responsibility, index) => (

                                    <div
                                        key={index}
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                            bg-[#f7faff]
                                            p-4
                                            rounded-lg
                                        "
                                    >

                                        <CheckCircle2 className="
                                            w-5
                                            h-5
                                            text-blue-600
                                            shrink-0
                                            mt-1
                                        " />

                                        <p className="
                                            text-gray-600
                                            leading-6
                                        ">
                                            {responsibility}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </div>


                    {/* Requirements */}

                    <div className="mt-8">

                        <h3 className="
                            text-xl
                            font-bold
                            text-[#2f3542]
                        ">
                            Requirements
                        </h3>


                        <div className="
                            space-y-3
                            mt-5
                        ">

                            {job.requirements.map(
                                (requirement, index) => (

                                    <div
                                        key={index}
                                        className="
                                            flex
                                            items-start
                                            gap-3
                                        "
                                    >

                                        <span className="
                                            w-2
                                            h-2
                                            rounded-full
                                            bg-blue-600
                                            mt-2.5
                                            shrink-0
                                        ">
                                        </span>

                                        <p className="
                                            text-gray-600
                                            leading-7
                                        ">
                                            {requirement}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </div>


                    {/* Apply */}

                    <div className="
                        flex
                        justify-end
                        mt-10
                        pt-6
                        border-t
                        border-gray-200
                    ">

                        <button
                            onClick={onApply}
                            className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-7
                                py-3
                                rounded-lg
                                font-semibold
                                transition
                            "
                        >
                            Apply For This Position
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};


export default JobDetailsModal;