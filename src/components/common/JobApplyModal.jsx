import {
    X,
    User,
    Mail,
    Phone,
    Upload,
    Send,
} from "lucide-react";


const JobApplyModal = ({ job, isOpen, onClose }) => {

    if (!isOpen || !job) {
        return null;
    }


    return (
        <div
            className="
                fixed
                inset-0
                z-[110]
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
                    max-w-2xl
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
                    py-7
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
                        "
                    >

                        <X className="w-5 h-5" />

                    </button>


                    <p className="
                        text-blue-400
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[3px]
                    ">
                        Job Application
                    </p>


                    <h2 className="
                        text-2xl
                        font-bold
                        text-white
                        mt-2
                    ">
                        {job.title}
                    </h2>


                    <p className="
                        text-gray-400
                        mt-2
                    ">
                        Submit your details to apply for this position.
                    </p>

                </div>


                {/* ================= FORM ================= */}

                <form className="px-8 py-8 space-y-6">


                    {/* Name */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-semibold
                            text-[#2f3542]
                            mb-2
                        ">
                            Full Name
                        </label>

                        <div className="relative">

                            <User className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-gray-400
                            " />

                            <input
                                type="text"
                                required
                                placeholder="Enter your full name"
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    pl-12
                                    pr-4
                                    py-3
                                    outline-none
                                    focus:border-blue-600
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                    </div>


                    {/* Email */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-semibold
                            text-[#2f3542]
                            mb-2
                        ">
                            Email Address
                        </label>

                        <div className="relative">

                            <Mail className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-gray-400
                            " />

                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    pl-12
                                    pr-4
                                    py-3
                                    outline-none
                                    focus:border-blue-600
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                    </div>


                    {/* Phone */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-semibold
                            text-[#2f3542]
                            mb-2
                        ">
                            Phone Number
                        </label>

                        <div className="relative">

                            <Phone className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                w-5
                                h-5
                                text-gray-400
                            " />

                            <input
                                type="tel"
                                required
                                placeholder="Enter your phone number"
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-lg
                                    pl-12
                                    pr-4
                                    py-3
                                    outline-none
                                    focus:border-blue-600
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>

                    </div>


                    {/* Resume */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-semibold
                            text-[#2f3542]
                            mb-2
                        ">
                            Resume
                        </label>

                        <label className="
                            flex
                            items-center
                            gap-3
                            border-2
                            border-dashed
                            border-gray-300
                            rounded-lg
                            px-5
                            py-5
                            cursor-pointer
                            hover:border-blue-500
                            hover:bg-blue-50
                            transition
                        ">

                            <Upload className="
                                w-6
                                h-6
                                text-blue-600
                            " />

                            <div>

                                <p className="
                                    text-[#2f3542]
                                    font-semibold
                                ">
                                    Upload Resume
                                </p>

                                <p className="
                                    text-gray-500
                                    text-sm
                                    mt-1
                                ">
                                    PDF, DOC or DOCX
                                </p>

                            </div>


                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                required
                                className="hidden"
                            />

                        </label>

                    </div>


                    {/* Message */}

                    <div>

                        <label className="
                            block
                            text-sm
                            font-semibold
                            text-[#2f3542]
                            mb-2
                        ">
                            Cover Message
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Tell us briefly about yourself..."
                            className="
                                w-full
                                border
                                border-gray-300
                                rounded-lg
                                px-4
                                py-3
                                outline-none
                                resize-none
                                focus:border-blue-600
                                focus:ring-2
                                focus:ring-blue-100
                            "
                        >
                        </textarea>

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
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

                        <Send className="w-5 h-5" />

                        Submit Application

                    </button>

                </form>

            </div>

        </div>
    );
};


export default JobApplyModal;